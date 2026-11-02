---
layout: doc
---

# Démarrage

Cette page installe Kura en local et décrit les commandes du quotidien.

## Prérequis

- **PHP 8.3+** avec les extensions `pdo_mysql` (ou `pdo_sqlite`), `mbstring`, `openssl`, `sodium`, `dom`, `xmlreader`, `fileinfo`, `zip` et `gd` (les deux dernières servent aux PDF et aux tableurs).
- **Composer** 2.
- **Node.js 20.19+** (voir `.nvmrc`) et **pnpm** 9+.
- **SQLite** (fourni avec PHP) pour le développement, ou MySQL pour se rapprocher de la production.

## Installation

```bash
composer setup
```

La commande installe les dépendances PHP et JS, copie `.env.example` vers `.env`, génère la clé d'application, lance les migrations, exécute les seeders, crée le lien de stockage et compile les assets.

Lance ensuite la stack de développement :

```bash
composer dev
```

L'application est servie sur `http://localhost:8000`.

## Compte de démonstration

Le seeder crée un compte administrateur :

| Email              | Mot de passe |
| ------------------ | ------------ |
| `test@example.com` | `password`   |

Il porte le rôle `admin` : tu peux te connecter et ouvrir `/admin/users` immédiatement. Pour créer un autre administrateur sur une instance neuve :

```bash
php artisan users:create-admin <email> "<nom>"
```

Le mot de passe est demandé à l'écran, jamais passé en argument.

## Variables d'environnement

Le fichier `.env.example` est commenté ligne à ligne. Les variables à connaître :

| Variable                                     | Rôle                                         | Défaut local                     |
| -------------------------------------------- | -------------------------------------------- | -------------------------------- |
| `APP_ENV`, `APP_URL`                         | Environnement et URL de génération des liens | `local`, `http://localhost:8000` |
| `DB_CONNECTION`                              | `sqlite`, `mysql` ou `pgsql`                 | `sqlite`                         |
| `MAIL_MAILER`                                | Transport des emails                         | `log` (écrit dans les logs)      |
| `QUEUE_CONNECTION`                           | File d'attente                               | `database`                       |
| `NEXTBOXX_SITE_API_KEY`                      | Clé attendue par l'API du site NextBoxx      | vide                             |
| `SEVE_URL`, `SEVE_WS_TOKEN`                  | Connexion aux web services Moodle            | vides                            |
| `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID` | WhatsApp Business Cloud API                  | vides                            |

Tant que les variables Sève et WhatsApp sont vides, Kura fonctionne normalement : les changements destinés à Sève restent dans la file et les messages partent uniquement par email.

## Commandes utiles

| Commande                         | Effet                                                    |
| -------------------------------- | -------------------------------------------------------- |
| `composer dev`                   | Serveur, file d'attente, Vite et logs en parallèle       |
| `composer test`                  | Pint, Larastan puis Pest — la porte de la CI             |
| `composer ci:check`              | Ajoute ESLint, Prettier et `vue-tsc` à la vérification   |
| `pnpm run build`                 | Compile les assets de production                         |
| `php artisan migrate`            | Applique les migrations                                  |
| `php artisan test --compact`     | Lance la suite Pest                                      |
| `php artisan users:create-admin` | Crée un compte administrateur                            |
| `php artisan seve:client`        | Enregistre Sève comme client OAuth et affiche son secret |

## Premiers pas dans l'application

1. Connecte-toi avec le compte de démonstration.
2. Ouvre **Administration → Utilisateurs** (`/admin/users`) pour créer les comptes de l'équipe et attribuer les rôles.
3. Renseigne les **réglages** (`/admin/settings`) : mentions de facture, seuils de mention du certificat, seuils de rentabilité.
4. Publie un premier référentiel dans le **catalogue**, valide sa banque QCM, puis ouvre une **cohorte**.
5. Dépose une candidature depuis l'API ou depuis l'interface pour dérouler le parcours complet.

## Et ensuite

- [Architecture](/guide/architecture) pour comprendre le code.
- [Développement](/guide/development) pour les conventions et les tests.
- [Déploiement](/guide/deployment) pour la mise en production.
