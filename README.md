# kura-guide

## Description

Documentation site for **Kura**, the administrative and financial platform of NextBoxx, edPage group's training organisation. Built with [VitePress](https://vitepress.dev), in French (root) and English (`/en/`), with local search.

The guide covers the platform's purpose, architecture, accounts and roles, the learner journey, business modules, billing, generated documents, integrations, development conventions and deployment.

## Tech stack

- [VitePress](https://vitepress.dev) (Vue-powered static site generator)
- [@viteplus/versions](https://github.com/viteplus/versions) for multi-version documentation
- TypeScript for site config and theme
- pnpm

## Prerequisites

- Node.js 20+ (see `.nvmrc`)
- [pnpm](https://pnpm.io/) 9+

## Installation

```bash
pnpm install
cp .env.example .env
pnpm docs:dev
```

The site is served locally at `http://localhost:5173/docs/` (French root at `/docs/`, English at `/docs/en/`).

## Content structure

```text
src/
  index.md              French homepage
  guide/                French content
    overview.md         Presentation, scope, key figures
    getting-started.md  Local install and day-to-day commands
    architecture.md     Stack, folder structure, data model
    roles.md            Accounts, roles and gates
    learner-journey.md  From candidature to Parcours Canopé
    core-modules.md     Core business rules (modules 1–18, 29, 32)
    extended-modules.md Events, B2B, incubation, partnerships
    billing.md          30/40/30 schedule, reminders, payouts
    documents.md        Generated documents and signatures
    integrations.md     NextBoxx site API, Sève, WhatsApp, PayGate
    development.md      Conventions, tests, quality, pitfalls
    deployment.md       cPanel runbook
    about.md            About this guide
  en/                   English mirror (index.md + guide/)
.vitepress/
  config/               Site config and per-locale nav/sidebar/search
  theme/                Theme extension and Kura colours
```

The sidebar in `.vitepress/config/locales/fr.ts` and `en.ts` must list every page in both languages; `pnpm docs:build` fails on a broken internal link.

## Sources of truth

- `edpage-hq/kura-docs` — business rules, architecture, API contract and ADRs.
- `edpage-hq/kura-web` — the Laravel application.

Update this guide in the same pull request when a rule, command or procedure it describes changes.

## Versioning the docs

The current content in `src/` is always served as the "live" version (the one visible without a version prefix). To cut a new version when the documented project releases a breaking change:

1. Copy `src/` into `archive/<version>/` (e.g. `archive/1.0.0/`), keeping the same `en/`/root structure.
2. Bump `versionsConfig.current` in `.vitepress/config/index.ts` to the new version.
3. Keep editing `src/` for the new current version going forward.

Archived versions are served under `/<version>/` (and `/en/<version>/` for the English locale). The version switcher in the nav is generated automatically from the folders under `archive/`.

## Environment variables

| Variable        | Description                                            | Example                   |
| --------------- | ------------------------------------------------------ | ------------------------- |
| `VITE_BASE`     | Public base path the site is served from               | `/docs/`                  |
| `VITE_SITE_URL` | Canonical site URL, used in Open Graph / SEO meta tags | `https://docs.edpage.net` |

Set both to the real deployment values before publishing.

## Checks

There is no separate test suite — the production build itself is the check: it fails on broken internal links or missing referenced assets.

```bash
pnpm lint         # ESLint + Prettier + markdownlint
pnpm docs:build   # fails on broken links/markdown
pnpm format       # rewrites files with Prettier
```

## Deployment

`pnpm docs:deploy` builds the site and publishes `.vitepress/build` to the `gh-pages` branch via [gh-pages](https://github.com/tschaub/gh-pages). Adjust `VITE_BASE` and `VITE_SITE_URL` to match how the site is actually served before deploying.

## Contacts

- Tech lead: edPage HQ
- Product owner: NextBoxx (edPage group)
