---
layout: doc
---

# Getting started

This page installs Kura locally and lists the day-to-day commands.

## Prerequisites

- **PHP 8.3+** with the `pdo_mysql` (or `pdo_sqlite`), `mbstring`, `openssl`, `sodium`, `dom`, `xmlreader`, `fileinfo`, `zip` and `gd` extensions (the last two are used for PDFs and spreadsheets).
- **Composer** 2.
- **Node.js 20.19+** (see `.nvmrc`) and **pnpm** 9+.
- **SQLite** (bundled with PHP) for development, or MySQL to get closer to production.

## Installation

```bash
composer setup
```

The command installs the PHP and JS dependencies, copies `.env.example` to `.env`, generates the application key, runs the migrations, seeds the database, creates the storage link and builds the assets.

Then start the development stack:

```bash
composer dev
```

The application is served at `http://localhost:8000`.

## Demo account

The seeder creates an administrator account:

| Email              | Password   |
| ------------------ | ---------- |
| `test@example.com` | `password` |

It holds the `admin` role: you can sign in and open `/admin/users` right away. To create another administrator on a fresh instance:

```bash
php artisan users:create-admin <email> "<name>"
```

The password is requested on screen, never passed as an argument.

## Environment variables

`.env.example` is commented line by line. The variables worth knowing:

| Variable                                     | Purpose                                         | Local default                    |
| -------------------------------------------- | ----------------------------------------------- | -------------------------------- |
| `APP_ENV`, `APP_URL`                         | Environment and base URL used to generate links | `local`, `http://localhost:8000` |
| `DB_CONNECTION`                              | `sqlite`, `mysql` or `pgsql`                    | `sqlite`                         |
| `MAIL_MAILER`                                | Email transport                                 | `log` (writes to the logs)       |
| `QUEUE_CONNECTION`                           | Queue backend                                   | `database`                       |
| `NEXTBOXX_SITE_API_KEY`                      | Key expected by the NextBoxx website API        | empty                            |
| `SEVE_URL`, `SEVE_WS_TOKEN`                  | Connection to the Moodle web services           | empty                            |
| `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID` | WhatsApp Business Cloud API                     | empty                            |

As long as the Sève and WhatsApp variables are empty, Kura works normally: changes destined for Sève stay in the queue and messages are sent by email only.

## Useful commands

| Command                          | Effect                                                  |
| -------------------------------- | ------------------------------------------------------- |
| `composer dev`                   | Server, queue worker, Vite and logs in parallel         |
| `composer test`                  | Pint, Larastan then Pest — the CI gate                  |
| `composer ci:check`              | Adds ESLint, Prettier and `vue-tsc` to the check        |
| `pnpm run build`                 | Builds the production assets                            |
| `php artisan migrate`            | Applies the migrations                                  |
| `php artisan test --compact`     | Runs the Pest suite                                     |
| `php artisan users:create-admin` | Creates an administrator account                        |
| `php artisan seve:client`        | Registers Sève as an OAuth client and prints its secret |

## First steps in the application

1. Sign in with the demo account.
2. Open **Administration → Users** (`/admin/users`) to create the team accounts and grant roles.
3. Fill in the **settings** (`/admin/settings`): invoice legal mentions, certificate mention thresholds, profitability thresholds.
4. Publish a first programme in the **catalogue**, validate its QCM bank, then open a **cohort**.
5. Submit a candidature through the API or the interface to walk the whole journey.

## What next

- [Architecture](/en/guide/architecture) to understand the code.
- [Development](/en/guide/development) for conventions and tests.
- [Deployment](/en/guide/deployment) for going to production.
