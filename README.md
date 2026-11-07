# kura-guide

## Description

The user guide of Kura, the administrative and financial platform of NextBoxx (edPage group). It explains, role by role, what each person does in Kura: learners, funders and companies, the pedagogical team, the Pedagogical Coordinator, extended activities, Direction and the Administrator. French is the source language; the English edition follows page by page.

Published at <https://edpage-hq.github.io/kura-guide/>, redeployed on every merge to `master`.

The guide speaks the language of the screen and the rules Kura actually applies. Its sources are [kura-docs](https://github.com/edpage-hq/kura-docs) (`business-logic.md` and the ADRs) and the behaviour of [kura-web](https://github.com/edpage-hq/kura-web); the labels it quotes come from kura-web's translation files (`resources/js/lib/locales/`).

## Tech stack

- [VitePress](https://vitepress.dev) (Vue-powered static site generator)
- [@viteplus/versions](https://github.com/viteplus/versions) for multi-version documentation
- TypeScript for site config/theme
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

The site is served locally at `http://localhost:5173/kura-guide/` (French root at `/kura-guide/`, English at `/kura-guide/en/`).

## Versioning the docs

The current content in `src/` is always served as the "live" version (the one visible without a version prefix). To cut a new version when the documented project releases a breaking change:

1. Copy `src/` into `archive/<version>/` (e.g. `archive/1.0.0/`), keeping the same `en/`/root structure.
2. Bump `versionsConfig.current` in `.vitepress/config/index.ts` to the new version.
3. Keep editing `src/` for the new current version going forward.

Archived versions are served under `/<version>/` (and `/en/<version>/` for the English locale). The version switcher in the nav is generated automatically from the folders under `archive/`.

## Environment variables

| Variable        | Description                                            | Example                                   |
| --------------- | ------------------------------------------------------ | ----------------------------------------- |
| `VITE_BASE`     | Public base path the site is served from               | `/kura-guide/`                            |
| `VITE_SITE_URL` | Canonical site URL, used in Open Graph / SEO meta tags | `https://edpage-hq.github.io/kura-guide/` |

## Running tests

There's no separate test suite — the production build itself is the check: it fails on broken internal links or missing referenced assets.

```bash
pnpm lint         # ESLint + Prettier + markdownlint
pnpm docs:build   # fails on broken links/markdown
```

## Environments

| Env        | URL                                       | Deployment                                                   |
| ---------- | ----------------------------------------- | ------------------------------------------------------------ |
| Staging    | None                                      |                                                              |
| Production | <https://edpage-hq.github.io/kura-guide/> | GitHub Actions, workflow `Deploy`, on every push to `master` |

`pnpm docs:deploy` builds the site and publishes `.vitepress/build` to the `gh-pages` branch via [gh-pages](https://github.com/tschaub/gh-pages). Adjust `VITE_BASE` to match how the site is actually served (root domain vs. GitHub Pages project path) before deploying.

## Contacts

- edPage group, project Kura & Sève
