---
layout: doc
---

# Architecture

Kura is a **monolithic Laravel** application rendered client-side with Inertia and Vue. There is no dedicated mobile API: mobile access goes through Sève's Moodle app.

## Stack

| Layer              | Technology                                                        |
| ------------------ | ----------------------------------------------------------------- |
| Language           | PHP 8.3                                                           |
| Framework          | Laravel 13                                                        |
| Rendering          | Inertia v3 + Vue 3 (TypeScript)                                   |
| Styling            | Tailwind CSS v4, shadcn-vue components, Phosphor icons            |
| Web authentication | Laravel Fortify (session, 2FA, passkeys) — no public registration |
| API                | Laravel Sanctum (tokens)                                          |
| OAuth2 / OIDC      | Laravel Passport — Kura is Sève's identity provider               |
| Roles              | `spatie/laravel-permission`                                       |
| PDF                | `barryvdh/laravel-dompdf`                                         |
| Spreadsheets       | `openspout/openspout`                                             |
| Typed routes       | Laravel Wayfinder (frontend)                                      |
| Tests              | Pest 4, Pest Plugin Laravel                                       |
| Quality            | Pint, Larastan level 7, ESLint, Prettier, `vue-tsc`               |
| Database           | SQLite locally, MySQL in staging and production                   |

## High-level view

```text
 NextBoxx website (stateless)                              Sève (Moodle LTS)
        │  POST /api/candidatures (API key)                  ▲   │
        ▼                                                    │   │
 ┌───────────────────────────────┐   OAuth2 / OIDC (SSO)     │   │
 │ Kura (kura-web)               │◄──────────────────────────┘   │
 │ Laravel + Inertia + Vue       │   Moodle web services:         │
 │ admin/finance source of truth │   provisioning, attendance,    │
 │                               │   grades, partners             │
 │                               │───────────────────────────────►│
 └───────────────────────────────┘◄───────────────────────────────┘
        │
        ▼
 Email · WhatsApp · online payment · private PDF storage
```

Kura is the source of truth for identity, statuses, candidatures, enrolments, billing, certification and payouts. Sève is the source of truth for contents, detailed attendance, results and messaging.

## Repository structure

```text
app/
  Actions/            Fortify and user actions
  Concerns/           Reusable traits (yearly references, PDF sealing, password rules)
  Console/Commands/   Scheduled commands (billing:run, seve:sync, cohorts:advance…)
  Enums/              Domain statuses and typologies (≈ 60 enums)
  Http/Controllers/   Controllers grouped by module (Admin, Billing, Cohorts, Documents…)
  Http/Middleware/    AuthenticateSiteKey, EnsureSeveAccess, SetLocale, HandleInertiaRequests
  Listeners/          Login and notification delivery logging
  Models/             Eloquent models (≈ 60)
  Notifications/      Email, Sève and WhatsApp notifications
  Providers/          AppServiceProvider: Gates, Passport, defaults
  Services/           Extracted business logic (documents, Sève, WhatsApp, reporting, direction)
routes/               One file per module: web, api, oauth, billing, cohorts, documents…
resources/js/
  pages/              Inertia pages (≈ 85), one folder per module
  components/         Reusable components (UI, candidatures, billing, cohorts…)
  layouts/            AppLayout, AuthLayout, PublicLayout…
  composables/        useAccess, useMainNav, useLocale, useAppearance…
  lib/                Per-domain formatting and labels (billing.ts, enrolments.ts…)
  types/              TypeScript types for Inertia props
  actions/ routes/    Generated Wayfinder functions
tests/
  Feature/            HTTP and business-flow tests, one folder per module
  Unit/               Targeted unit tests
deploy/cpanel/        Deployment scripts (install.sh, deploy.sh, crontab.example)
```

## Request lifecycle

1. **Routing**: routes are split by module under `routes/`, then loaded by `routes/web.php`.
2. **Middleware**: `auth`, `verified`, `can:*`, `site.key` (website API), `throttle:*`, `signed` (public links), `SetLocale`.
3. **Controller**: validates the request (Form Requests), authorises the action (`Gate::authorize` or `abort_unless`), runs the business logic and returns an Inertia page or a file.
4. **Inertia props**: `HandleInertiaRequests` shares the user, their roles and the `can*` booleans consumed by `useAccess`.
5. **Vue**: the page receives typed props, uses shared components and Wayfinder for URLs.

## Data model

The full relational model lives in the reference documentation. The main groups:

| Group               | Main entities                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| Accounts            | `User`, spatie roles, role requests, individual → organisation conversions, audit log           |
| Catalogue           | `Program`, competency blocks, price grid, QCM bank and import batches                           |
| Cohorts             | `Cohort`, trainer / coach assignments, public holidays, class sessions                          |
| Admission           | `Candidature`, steps, documents, test attempts                                                  |
| Enrolments          | `Enrolment`, agreements, agreement versions, consents, funding                                  |
| Billing             | `Invoice`, `Payment`, `CreditNote`, remuneration, commissions, marketing contracts and invoices |
| Results             | block results, jury decisions, certificates, attestations, transcripts                          |
| Documents           | tripartite agreements, internship agreements, welcome booklets, defence reports                 |
| Extended activities | B2B quotes, events and registrations, company requests, profiles, incubation, partnerships      |
| Integration         | integration events towards Sève, sync cursors, notification deliveries                          |

Structural conventions:

- auto-incrementing integer primary keys;
- amounts in FCFA, `DECIMAL(12,2)`, excluding tax;
- readable yearly references (`FAC-NB-YYYY-XXX`, `CONV-…`, `CERT-…`) generated by the `HasYearlyReference` trait;
- statuses carried by PHP enums, never free-form strings;
- PDF documents stored on a private disk, sealed with a SHA-256 fingerprint.

## Authorisation

Authorisation is centralised in `AppServiceProvider` as named **Gates** (`view-cohorts`, `manage-billing`, `manage-incubation`…), backed by spatie roles. The frontend consumes the same decisions through the `can*` props shared by Inertia and the `useAccess` composable.

Three levels coexist:

- **route middleware** (`can:manage-cohorts`) to block a whole section;
- **`Gate::authorize`** in controllers for fine-grained actions;
- **`abort_unless`** in a few controllers, when the rule depends on the resource rather than the role.

There are no per-model Policies: the choice relies on cross-cutting Gates. See [Development](/en/guide/development#known-pitfalls) for the guardrails to follow.

## Frontend

- **Pages** under `resources/js/pages`, one folder per module, rendered by `Inertia::render`.
- **Shared components** under `resources/js/components`: UI (buttons, cards, tables), step markers, invoice tables, segmented filters.
- **Composables**: `useAccess` (permissions), `useMainNav` (menu and groups), `useLocale`, `useAppearance`, `useCurrentUrl`.
- **i18n**: `vue-i18n`, messages in `resources/js/lib/locales`, locale driven by `SetLocale` and the profile.
- **Wayfinder**: URLs and actions are imported from `@/actions` and `@/routes`, never hard-coded.
- **Design system**: forest / green / gold palette, Plus Jakarta Sans typography, full-height sidebar, coloured status badges.

## Services and traits

Logic that doesn't fit in a model lives in `app/Services`:

| Service                          | Role                                                  |
| -------------------------------- | ----------------------------------------------------- |
| `Documents/DocumentLibrary`      | Lists an account's documents for “My documents”       |
| `Documents/CohortCalendar`       | Builds a cohort calendar                              |
| `Seve/MoodleClient`              | REST calls to the Moodle web services                 |
| `WhatsApp/WhatsAppClient`        | Sends WhatsApp Cloud API templates                    |
| `Catalogue/QcmImporter`          | Imports and validates QCM banks                       |
| `Direction/ActivityOverview`     | Aggregates for the Direction dashboard                |
| `Reporting/ActivityReport`       | Reporting indicators and CSV export                   |
| `Partnerships/SevePartnersBlock` | “Partners” block written into the Sève course summary |
| `Auth/TwoFactorTicketBroker`     | Temporary two-factor authentication tickets           |

The `HasYearlyReference`, `SealsPdf`, `PasswordValidationRules`, `ProfileValidationRules` and `AvatarValidationRules` traits carry cross-cutting behaviour.

## Known pitfalls

A few inherited choices deserve attention when changing the code:

- some models are large (`Enrolment`, `Invoice`, `Cohort`, `CompanyRequest`) and mix queries, business rules and formatting;
- list pages should load their aggregates with `withCount` / `withSum` rather than calling per-row methods (N+1 risk);
- yearly numbering and payments rely on unique constraints and transactions: keep the locks and plan a retry on collision;
- Inertia payloads are hand-built arrays duplicated in `resources/js/types`: evolve both together.
