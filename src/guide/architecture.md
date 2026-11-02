---
layout: doc
---

# Architecture

Kura est une application **Laravel monolithique** rendue côté client par Inertia et Vue. Aucune API mobile dédiée : le mobile passe par l'application Moodle de Sève.

## Stack

| Couche               | Technologie                                                           |
| -------------------- | --------------------------------------------------------------------- |
| Langage              | PHP 8.3                                                               |
| Framework            | Laravel 13                                                            |
| Rendu                | Inertia v3 + Vue 3 (TypeScript)                                       |
| Styles               | Tailwind CSS v4, composants shadcn-vue, icônes Phosphor               |
| Authentification web | Laravel Fortify (session, 2FA, passkeys) — pas d'inscription publique |
| API                  | Laravel Sanctum (jetons)                                              |
| OAuth2 / OIDC        | Laravel Passport — Kura est le fournisseur d'identité de Sève         |
| Rôles                | `spatie/laravel-permission`                                           |
| PDF                  | `barryvdh/laravel-dompdf`                                             |
| Tableurs             | `openspout/openspout`                                                 |
| Routes typées        | Laravel Wayfinder (front)                                             |
| Tests                | Pest 4, Pest Plugin Laravel                                           |
| Qualité              | Pint, Larastan niveau 7, ESLint, Prettier, `vue-tsc`                  |
| Base                 | SQLite en local, MySQL en recette et production                       |

## Vue d'ensemble

```text
 Site NextBoxx (sans état)                                  Sève (Moodle LTS)
        │  POST /api/candidatures (clé d'API)                ▲   │
        ▼                                                    │   │
 ┌───────────────────────────────┐   OAuth2 / OIDC (SSO)     │   │
 │ Kura (kura-web)               │◄──────────────────────────┘   │
 │ Laravel + Inertia + Vue       │   Web services Moodle :        │
 │ source de vérité admin/fin.   │   provisionnement, présence,   │
 │                               │   notes, partenaires           │
 │                               │───────────────────────────────►│
 └───────────────────────────────┘◄───────────────────────────────┘
        │
        ▼
 Email · WhatsApp · paiement en ligne · stockage privé des PDF
```

Kura est la source de vérité pour l'identité, les statuts, les candidatures, les inscriptions, la facturation, la certification et les rémunérations. Sève l'est pour les contenus, la présence détaillée, les résultats et la messagerie.

## Structure du dépôt

```text
app/
  Actions/            Actions Fortify et utilisateur
  Concerns/           Traits réutilisables (références annuelles, scellement PDF, règles de mot de passe)
  Console/Commands/   Commandes planifiées (billing:run, seve:sync, cohorts:advance…)
  Enums/              Statuts et typologies du domaine (≈ 60 enums)
  Http/Controllers/   Contrôleurs groupés par module (Admin, Billing, Cohorts, Documents…)
  Http/Middleware/    AuthenticateSiteKey, EnsureSeveAccess, SetLocale, HandleInertiaRequests
  Listeners/          Journalisation des connexions et des envois de notifications
  Models/             Modèles Eloquent (≈ 60)
  Notifications/      Notifications email, Sève et WhatsApp
  Providers/          AppServiceProvider : Gates, Passport, valeurs par défaut
  Services/           Logique métier extraite (documents, Sève, WhatsApp, reporting, direction)
routes/               Un fichier par module : web, api, oauth, billing, cohorts, documents…
resources/js/
  pages/              Pages Inertia (≈ 85), un dossier par module
  components/         Composants réutilisables (UI, candidatures, billing, cohortes…)
  layouts/            AppLayout, AuthLayout, PublicLayout…
  composables/        useAccess, useMainNav, useLocale, useAppearance…
  lib/                Formatage et libellés par domaine (billing.ts, enrolments.ts…)
  types/              Types TypeScript des props Inertia
  actions/ routes/    Fonctions Wayfinder générées
tests/
  Feature/            Tests HTTP et parcours métier, un dossier par module
  Unit/               Tests unitaires ciblés
deploy/cpanel/        Scripts de déploiement (install.sh, deploy.sh, crontab.example)
```

## Cycle d'une requête

1. **Routage** : les routes sont découpées par module dans `routes/`, puis chargées par `routes/web.php`.
2. **Middleware** : `auth`, `verified`, `can:*`, `site.key` (API du site), `throttle:*`, `signed` (liens publics), `SetLocale`.
3. **Contrôleur** : valide la requête (Form Requests), autorise l'action (`Gate::authorize` ou `abort_unless`), exécute la logique métier et retourne une page Inertia ou un fichier.
4. **Props Inertia** : `HandleInertiaRequests` partage l'utilisateur, ses rôles et les booléens `can*` consommés par `useAccess`.
5. **Vue** : la page reçoit des props typées, utilise les composants partagés et Wayfinder pour les URLs.

## Modèle de données

Le modèle relationnel complet vit dans la documentation de référence. Les grands ensembles :

| Ensemble           | Entités principales                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| Comptes            | `User`, rôles spatie, demandes de rôle, transformations individu → organisation, journal d'audit |
| Catalogue          | `Program` (référentiel), blocs de compétences, grille tarifaire, banque QCM et lots d'import     |
| Cohortes           | `Cohort`, affectations formateurs / coachs, jours fériés, séances                                |
| Admission          | `Candidature`, étapes, pièces, tentatives de test                                                |
| Inscriptions       | `Enrolment`, conventions, versions de convention, consentements, financement                     |
| Facturation        | `Invoice`, `Payment`, `CreditNote`, rémunérations, commissions, contrats et factures marketing   |
| Résultats          | résultats par bloc, décisions de jury, certificats, attestations, relevés                        |
| Documents          | conventions tripartites, conventions de stage, livrets d'accueil, procès-verbaux de soutenance   |
| Activités élargies | devis B2B, événements et inscriptions, demandes entreprises, profils, incubation, partenariats   |
| Intégration        | événements d'intégration vers Sève, curseurs de synchronisation, livraisons de notifications     |

Conventions structurantes :

- clés primaires entières auto-incrémentées ;
- montants en FCFA, `DECIMAL(12,2)`, hors taxe ;
- références lisibles et annuelles (`FAC-NB-AAAA-XXX`, `CONV-…`, `CERT-…`) générées par le trait `HasYearlyReference` ;
- statuts portés par des enums PHP, jamais par des chaînes libres ;
- documents PDF stockés sur disque privé, scellés par une empreinte SHA-256.

## Autorisation

L'autorisation est centralisée dans `AppServiceProvider` sous forme de **Gates** nommés (`view-cohorts`, `manage-billing`, `manage-incubation`…), alimentés par les rôles spatie. Le front consomme les mêmes décisions via les props `can*` partagées par Inertia et le composable `useAccess`.

Trois niveaux coexistent :

- **middleware de route** (`can:manage-cohorts`) pour bloquer une section entière ;
- **`Gate::authorize`** dans les contrôleurs pour les actions fines ;
- **`abort_unless`** dans quelques contrôleurs, lorsque la règle dépend de la ressource et non du rôle.

Il n'y a pas de Policies par modèle : le choix assume des Gates transverses. Voir [Développement](/guide/development#points-de-vigilance) pour les garde-fous à respecter.

## Frontend

- **Pages** dans `resources/js/pages`, un dossier par module, rendues par `Inertia::render`.
- **Composants** partagés dans `resources/js/components` : UI (boutons, cartes, tableaux), marqueurs d'étapes, tableaux de factures, filtres segmentés.
- **Composables** : `useAccess` (droits), `useMainNav` (menu et groupes), `useLocale`, `useAppearance`, `useCurrentUrl`.
- **i18n** : `vue-i18n`, messages dans `resources/js/lib/locales`, locale pilotée par `SetLocale` et le profil.
- **Wayfinder** : les URLs et actions sont importées depuis `@/actions` et `@/routes`, jamais écrites à la main.
- **Design system** : palette forêt / vert / or, typographie Plus Jakarta Sans, barre latérale pleine hauteur, badges d'état colorés.

## Services et traits

La logique qui ne tient pas dans un modèle vit dans `app/Services` :

| Service                          | Rôle                                                     |
| -------------------------------- | -------------------------------------------------------- |
| `Documents/DocumentLibrary`      | Recense les documents d'un compte pour « Mes documents » |
| `Documents/CohortCalendar`       | Construit le calendrier d'une cohorte                    |
| `Seve/MoodleClient`              | Appels REST aux web services Moodle                      |
| `WhatsApp/WhatsAppClient`        | Envoi de modèles WhatsApp Cloud API                      |
| `Catalogue/QcmImporter`          | Import et validation des banques QCM                     |
| `Direction/ActivityOverview`     | Agrégats du tableau de bord Direction                    |
| `Reporting/ActivityReport`       | Indicateurs et export CSV du reporting                   |
| `Partnerships/SevePartnersBlock` | Bloc « Partenaires » écrit dans le résumé du cours Sève  |
| `Auth/TwoFactorTicketBroker`     | Tickets temporaires de la double authentification        |

Les traits `HasYearlyReference`, `SealsPdf`, `PasswordValidationRules`, `ProfileValidationRules` et `AvatarValidationRules` portent les comportements transverses.

## Points de vigilance

Quelques choix hérités méritent attention lors d'une évolution :

- certains modèles sont volumineux (`Enrolment`, `Invoice`, `Cohort`, `CompanyRequest`) et mêlent requêtes, règles métier et formatage ;
- les pages liste doivent charger leurs agrégats avec `withCount` / `withSum` plutôt qu'en appelant des méthodes par ligne (risque de N+1) ;
- la numérotation annuelle et les paiements s'appuient sur des contraintes d'unicité et des transactions : conserver les verrous et prévoir un rejeu en cas de collision ;
- les payloads Inertia sont des tableaux construits à la main, dupliqués dans `resources/js/types` : les faire évoluer ensemble.
