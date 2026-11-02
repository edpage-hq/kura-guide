---
layout: doc
---

# Deployment

Production runs on **edPage's cPanel**, next to Naia and the NextBoxx website (ADR-007). The server has neither Composer nor Node: dependencies and assets are built in GitHub Actions, then shipped with the release.

|            |                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| URL        | `https://kura.nextboxx.net`                                                                                          |
| Server     | edPage cPanel, Apache, AutoSSL                                                                                       |
| PHP        | 8.3 (MultiPHP), extensions `pdo_mysql`, `mbstring`, `openssl`, `sodium`, `dom`, `xmlreader`, `fileinfo`, `zip`, `gd` |
| Database   | MySQL, database and user prefixed by the cPanel account                                                              |
| Deployment | GitHub Actions → **Deploy to cPanel**, started manually                                                              |
| Scripts    | `deploy/cpanel/` of the `kura-web` repository                                                                        |

## What a deployment does

1. **Build**: the workflow refuses a commit whose `lint-test` CI is not green, unless `force` is ticked. It builds the assets (`pnpm build`) and installs the production PHP dependencies (`composer install --no-dev`).
2. **Upload**: rsync of the release to the account. **Never** touched: `.env`, the OAuth keys (`storage/oauth-*.key`), `storage/app` (candidature documents, agreements, invoices, backups), `storage/logs`, `storage/framework`, the `public/storage` link, nor anything cPanel drops there (root `.htaccess`, `.well-known`, `cgi-bin`, `error_log`). The workflow writes the subdomain's PHP version back into `public/.htaccess`, otherwise Apache would fall back to PHP 8.2 and Kura would not boot.
3. **`deploy.sh`**: `package:discover`, OAuth key check, database backup (`storage/app/backups/db-*.sql.gz`, the last 10 kept), maintenance mode, migrations, `RoleSeeder`, caches, queue restart, cron install on first deployment, back online.
4. **Check**: `GET /up` must answer `200`.

A deployment that fails after entering maintenance **leaves the site in maintenance**. This is deliberate: better a closed site than a half-migrated database. Fix, then run the deployment again; it brings the site back online.

## First installation

### In cPanel

1. **Domains**: create the subdomain with the application's `public` folder as web root (`/home/<account>/kura.nextboxx.net/public`). If the root points at the application folder itself, `.env` and the OAuth keys are exposed.
2. **MultiPHP Manager**: PHP 8.3 for the subdomain. To change version later, change it here **and** `CPANEL_PHP_BIN`, then redeploy: the deployment rewrites the setting.
3. **PHP Extensions**: enable the extensions from the table above (`dom` and `gd` serve the PDFs, `zip` and `xmlreader` the spreadsheet imports and exports).
4. **MySQL Databases**: a database and its user, with all privileges.
5. **Email Accounts**: the sending address (for instance `kura@nextboxx.net`).
6. **SSH Access**: generate a dedicated key on a workstation (`ssh-keygen -t ed25519 -C kura-deploy -f kura-deploy`), import the public key into cPanel, then delete the private key from the workstation once copied into GitHub.

### In GitHub

In `kura-web` → **Settings → Environments → `production`**:

| Secret                                      | Content                                                                                                                        |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `CPANEL_SSH_KEY`                            | Deployment SSH private key                                                                                                     |
| `CPANEL_HOST`, `CPANEL_PORT`, `CPANEL_USER` | SSH access to the account (`server.sedver.com`, `22`, the cPanel account)                                                      |
| `CPANEL_APP_PATH`                           | Application folder, for instance `/home/<account>/kura.nextboxx.net`                                                           |
| `CPANEL_PHP_BIN`                            | `/opt/cpanel/ea-php83/root/usr/bin/php`                                                                                        |
| `KURA_ENV_FILE`                             | The full `.env`, written from `deploy/cpanel/.env.production.example`, with an empty `APP_KEY`. Only used for the installation |

In `KURA_ENV_FILE`, `NEXTBOXX_SITE_API_KEY` must hold exactly the `KURA_SITE_API_KEY` configured on the NextBoxx website. Empty, Kura refuses every call from the website. `SEVE_*` and `WHATSAPP_*` may stay empty at first.

### Running the installation

Actions → **Deploy to cPanel**, `ref` = `master`, **install** ticked. `install.sh`:

- refuses if PHP cannot be found, if the release has no `vendor/`, if the server already has a `.env`, or if the URL, database, its password or the sender address is missing;
- writes `.env` (mode `600`), generates `APP_KEY` and the OAuth keys;
- runs `deploy.sh`, without a backup since the database is empty.

### After the installation

1. Create the first administrator, in the application folder:

   ```bash
   php artisan users:create-admin <email> "<name>"
   ```

   The password is requested on screen, never passed as an argument. The account is verified and holds the Administrator role.

2. **Copy to a safe place** the server's `.env` and `storage/oauth-*.key`. Losing `APP_KEY` makes encrypted data unreadable (2FA secrets, queued jobs). Losing or replacing the OAuth keys signs every Sève user out and invalidates issued tokens.

3. Delete the `KURA_ENV_FILE` secret, now useless: `.env` lives on the server.

## Connecting Sève and WhatsApp

An instance keeps its `.env`, which a deployment never rewrites. A key is therefore set by hand in the server's `.env` (cPanel › File Manager); the next deployment picks it up, or `php artisan optimize` immediately.

- **Sève**: as long as `SEVE_URL` or `SEVE_WS_TOKEN` is empty, nothing is sent; changes wait in the queue and go out as soon as both are set. Once `SEVE_URL` is set, `php artisan seve:client` creates Sève's OAuth client and prints the secret to enter in Moodle's OAuth 2 issuer.
- **WhatsApp**: with `WHATSAPP_TOKEN` and `WHATSAPP_PHONE_NUMBER_ID` empty, messages go out by email only.

## Crons

Installed by `deploy.sh` on the first deployment. Otherwise add them in cPanel (Cron Jobs) from `deploy/cpanel/crontab.example`:

| Task                                                   | Frequency    | Purpose                              |
| ------------------------------------------------------ | ------------ | ------------------------------------ |
| `schedule:run`                                         | Every minute | Fires all scheduled tasks            |
| `queue:work --stop-when-empty --max-time=55 --tries=3` | Every minute | Sends notifications, emails and jobs |
| Cron log cleanup                                       | Weekly       | Keeps the disk from filling up       |

Without `schedule:run`, no scheduled task runs: no Sève sync, no billing, no reminders, no cohort transitions. Without the worker, no notification is sent, **with no visible error**.

## Common operations

| Need                     | Procedure                                                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Deploy                   | Actions → **Deploy to cPanel**, `ref` = `master` (or a branch, tag, commit), **install** unticked                    |
| An email is not arriving | `storage/logs/cron-queue.log`, then `php artisan queue:failed`, fix, `php artisan queue:retry all`                   |
| Restore a backup         | `php artisan down`, then `gunzip -c storage/app/backups/db-….sql.gz \| mysql <database>` with the `.env` credentials |
| Know the live version    | `storage/app/release.json` (branch, commit, date)                                                                    |
| Read the logs            | `storage/logs/laravel-YYYY-MM-DD.log`                                                                                |

## Good practices

- **Never edit code by hand on the server**: the next deployment would overwrite it. Only `.env` is edited in place.
- **Back up before a risky migration**: the deployment does it, but a manual operation deserves its own backup.
- **Test restores**: a backup never restored is not a backup.
- **Watch `/up`** after every deployment, then the queues and logs in the following hour.
- **Never version secrets**: `.env`, OAuth keys and API keys live in the GitHub environment or on the server, never in the repository.

## See also

- [Development](/en/guide/development) for commands and quality.
- [Integrations](/en/guide/integrations) for Sève, WhatsApp and scheduled commands.
