---
layout: doc
---

# Déploiement

La production tourne sur le **cPanel d'edPage**, à côté de Naia et du site NextBoxx (ADR-007). Le serveur n'a ni Composer ni Node : les dépendances et les assets sont construits dans GitHub Actions, puis envoyés avec la version.

|             |                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| URL         | `https://kura.nextboxx.net`                                                                                          |
| Serveur     | cPanel d'edPage, Apache, AutoSSL                                                                                     |
| PHP         | 8.3 (MultiPHP), extensions `pdo_mysql`, `mbstring`, `openssl`, `sodium`, `dom`, `xmlreader`, `fileinfo`, `zip`, `gd` |
| Base        | MySQL, base et utilisateur préfixés par le compte cPanel                                                             |
| Déploiement | GitHub Actions → **Deploy to cPanel**, lancé à la main                                                               |
| Scripts     | `deploy/cpanel/` du dépôt `kura-web`                                                                                 |

## Ce que fait un déploiement

1. **Build** : le workflow refuse un commit dont la CI `lint-test` n'est pas verte, sauf si l'option `force` est cochée. Il compile les assets (`pnpm build`) et installe les dépendances PHP de production (`composer install --no-dev`).
2. **Envoi** : rsync de la version vers le compte. Ne sont **jamais** touchés : `.env`, les clés OAuth (`storage/oauth-*.key`), `storage/app` (pièces de candidature, conventions, factures, sauvegardes), `storage/logs`, `storage/framework`, le lien `public/storage`, ni ce que cPanel dépose (`.htaccess` racine, `.well-known`, `cgi-bin`, `error_log`). Le workflow réinscrit dans `public/.htaccess` la version de PHP du sous-domaine, sans quoi Apache retomberait sur PHP 8.2 et Kura ne démarrerait pas.
3. **`deploy.sh`** : `package:discover`, vérification des clés OAuth, sauvegarde de la base (`storage/app/backups/db-*.sql.gz`, les 10 dernières conservées), mise en maintenance, migrations, `RoleSeeder`, caches, redémarrage de la file, pose des crons au premier déploiement, remise en ligne.
4. **Vérification** : `GET /up` doit répondre `200`.

Un déploiement qui échoue après la mise en maintenance **laisse le site en maintenance**. C'est volontaire : mieux vaut un site fermé qu'une base à moitié migrée. Corriger, puis relancer le déploiement, qui remet le site en ligne.

## Première installation

### Dans cPanel

1. **Domains** : créer le sous-domaine avec pour racine web le dossier `public` de l'application (`/home/<compte>/kura.nextboxx.net/public`). Si la racine pointe sur le dossier de l'application, le `.env` et les clés OAuth sont exposés.
2. **MultiPHP Manager** : PHP 8.3 pour le sous-domaine. Pour changer de version plus tard, modifier ici **et** `CPANEL_PHP_BIN`, puis redéployer : le déploiement réécrit le réglage.
3. **PHP Extensions** : activer les extensions du tableau ci-dessus (`dom` et `gd` servent aux PDF, `zip` et `xmlreader` aux imports et exports de tableurs).
4. **MySQL Databases** : une base et son utilisateur, avec tous les droits.
5. **Email Accounts** : l'adresse d'envoi (par exemple `kura@nextboxx.net`).
6. **SSH Access** : générer une clé dédiée sur un poste (`ssh-keygen -t ed25519 -C kura-deploy -f kura-deploy`), importer la clé publique dans cPanel, puis supprimer la clé privée du poste une fois copiée dans GitHub.

### Dans GitHub

Dans `kura-web` → **Settings → Environments → `production`** :

| Secret                                      | Contenu                                                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `CPANEL_SSH_KEY`                            | Clé privée SSH de déploiement                                                                                             |
| `CPANEL_HOST`, `CPANEL_PORT`, `CPANEL_USER` | Accès SSH au compte (`server.sedver.com`, `22`, le compte cPanel)                                                         |
| `CPANEL_APP_PATH`                           | Dossier de l'application, par exemple `/home/<compte>/kura.nextboxx.net`                                                  |
| `CPANEL_PHP_BIN`                            | `/opt/cpanel/ea-php83/root/usr/bin/php`                                                                                   |
| `KURA_ENV_FILE`                             | Le `.env` complet, écrit depuis `deploy/cpanel/.env.production.example`, avec `APP_KEY` vide. Ne sert qu'à l'installation |

Dans `KURA_ENV_FILE`, `NEXTBOXX_SITE_API_KEY` doit valoir exactement le `KURA_SITE_API_KEY` configuré sur le site NextBoxx. Vide, Kura refuse tous les appels du site. `SEVE_*` et `WHATSAPP_*` peuvent rester vides au départ.

### Lancer l'installation

Actions → **Deploy to cPanel**, `ref` = `master`, **install** coché. `install.sh` :

- refuse si PHP est introuvable, si la version n'a pas de `vendor/`, si le serveur a déjà un `.env`, ou s'il manque l'URL, la base, son mot de passe ou l'adresse d'expéditeur ;
- écrit le `.env` (droits `600`), génère `APP_KEY` et les clés OAuth ;
- lance `deploy.sh`, sans sauvegarde puisque la base est vide.

### Après l'installation

1. Créer le premier administrateur, dans le dossier de l'application :

   ```bash
   php artisan users:create-admin <email> "<nom>"
   ```

   Le mot de passe est demandé à l'écran, jamais passé en argument. Le compte est vérifié et porte le rôle Administrateur.

2. **Copier en lieu sûr** le `.env` du serveur et `storage/oauth-*.key`. Perdre `APP_KEY` rend illisibles les données chiffrées (secrets 2FA, jobs en file). Perdre ou remplacer les clés OAuth déconnecte tous les utilisateurs de Sève et invalide les jetons émis.

3. Supprimer le secret `KURA_ENV_FILE`, désormais inutile : le `.env` vit sur le serveur.

## Brancher Sève et WhatsApp

Une instance garde son `.env`, que le déploiement ne réécrit jamais. Une clé se renseigne donc à la main dans le `.env` du serveur (cPanel › File Manager) ; le déploiement suivant la prend en compte, ou `php artisan optimize` immédiatement.

- **Sève** : tant que `SEVE_URL` ou `SEVE_WS_TOKEN` est vide, rien ne part ; les changements attendent dans la file et partent dès que les deux sont renseignés. Une fois `SEVE_URL` posé, `php artisan seve:client` crée le client OAuth de Sève et affiche le secret à saisir dans l'émetteur OAuth 2 de Moodle.
- **WhatsApp** : `WHATSAPP_TOKEN` et `WHATSAPP_PHONE_NUMBER_ID` vides, les messages partent uniquement par email.

## Crons

Posés par `deploy.sh` au premier déploiement. À défaut, à ajouter dans cPanel (Cron Jobs) à partir de `deploy/cpanel/crontab.example` :

| Tâche                                                  | Fréquence     | Rôle                                   |
| ------------------------------------------------------ | ------------- | -------------------------------------- |
| `schedule:run`                                         | Chaque minute | Déclenche toutes les tâches planifiées |
| `queue:work --stop-when-empty --max-time=55 --tries=3` | Chaque minute | Envoie notifications, emails et jobs   |
| Vidage des journaux de cron                            | Hebdomadaire  | Évite de saturer le disque             |

Sans `schedule:run`, aucune tâche planifiée ne tourne : ni synchronisation Sève, ni facturation, ni relances, ni passages de cohorte. Sans le worker, aucune notification ne part, **sans erreur visible**.

## Opérations courantes

| Besoin                        | Procédure                                                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Déployer                      | Actions → **Deploy to cPanel**, `ref` = `master` (ou une branche, un tag, un commit), **install** décoché            |
| Un email n'arrive pas         | `storage/logs/cron-queue.log`, puis `php artisan queue:failed`, corriger, `php artisan queue:retry all`              |
| Restaurer une sauvegarde      | `php artisan down`, puis `gunzip -c storage/app/backups/db-….sql.gz \| mysql <base>` avec les identifiants du `.env` |
| Connaître la version en ligne | `storage/app/release.json` (branche, commit, date)                                                                   |
| Lire les journaux             | `storage/logs/laravel-AAAA-MM-JJ.log`                                                                                |

## Bonnes pratiques

- **Ne jamais modifier le code à la main sur le serveur** : le prochain déploiement écraserait la modification. Seul le `.env` se modifie sur place.
- **Sauvegarder avant toute migration risquée** : le déploiement le fait, mais une opération manuelle mérite sa propre sauvegarde.
- **Tester la restauration** : une sauvegarde jamais restaurée n'est pas une sauvegarde.
- **Surveiller `/up`** après chaque déploiement, puis les files et les journaux dans l'heure qui suit.
- **Ne pas versionner les secrets** : `.env`, clés OAuth et clés d'API vivent dans l'environnement GitHub ou sur le serveur, jamais dans le dépôt.

## Voir aussi

- [Développement](/guide/development) pour les commandes et la qualité.
- [Intégrations](/guide/integrations) pour Sève, WhatsApp et les commandes planifiées.
