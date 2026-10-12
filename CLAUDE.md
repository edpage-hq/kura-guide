# CLAUDE.md

Guidance for Claude Code when working in a repo cloned from `edpage-hq/guide-starter`.

## Stack

- [VitePress](https://vitepress.dev) (static site generator, Vue-powered)
- [@viteplus/versions](https://github.com/viteplus/versions) — adds multi-version docs on top of VitePress
- TypeScript for config/theme code, Markdown for content
- Package manager: **pnpm only** — never `npm install`/`yarn add`, never commit `package-lock.json`/`yarn.lock`

## Folder structure

```txt
.vitepress/
  config/
    index.ts          # site-wide config: base, head tags, theme, search, locales, versionsConfig
    locales/en.ts      # English nav/sidebar/footer/search strings
    locales/fr.ts       # French (root locale) nav/sidebar/footer/search strings
  theme/
    index.ts           # extends VitePress' DefaultTheme, registers <VersionSwitcher>
    custom.css          # theme overrides (CSS variables)
src/                    # current ("live") version — always the one being edited
  index.md             # French homepage (root locale)
  guide/                # French content
  en/
    index.md            # English homepage
    guide/               # English content, mirrors src/guide/
public/images/           # static assets served as-is, at the site root
archive/                # past versions, one folder per version, same shape as src/
  <version>/
    index.md
    guide/
    en/...
```

`public/` lives at the **repo root**, not under `src/` — @viteplus/versions doesn't set VitePress' `srcDir`, it only rewrites page routes, so VitePress still looks for its public directory relative to the project root. Putting assets under `src/public/` silently drops them from the build (they're never copied) — this bit us once already.

For the same reason (no `srcDir`), VitePress scans the **whole repo root** for markdown, not just `src/`/`archive/` — it would otherwise turn root-level `README.md`/`CLAUDE.md` into stray built pages. `versionsConfig` in `.vitepress/config/index.ts` excludes them via `srcExclude: ['*.md', 'archive/README.md']`. Any new root-level `.md` file is covered automatically (`*.md` only matches depth-0); a new doc-metadata file nested one level under `archive/` or elsewhere would need its own entry.

Every content page must exist in **both** languages: `src/guide/foo.md` and `src/en/guide/foo.md`. Adding a page also means adding its sidebar entry in `locales/fr.ts` and `locales/en.ts` (`sidebarGuide()` functions).

French is the root locale (no `/en/` prefix); English lives under `/en/`.

## Versioning

`versionsConfig` in `.vitepress/config/index.ts` (`current`, `sources: 'src'`, `archive: 'archive'`) drives multi-version docs:

- `src/` is always served unprefixed — it's the "current" version being edited.
- Each subfolder under `archive/` becomes a selectable past version, served under `/<version>/` (and `/en/<version>/`).
- The nav's `{ component: 'VersionSwitcher' }` entry (in both `locales/en.ts` and `locales/fr.ts`) renders the dropdown; it's populated automatically by scanning `archive/`, no manual list to maintain.
- To cut a new version: copy `src/` to `archive/<old-version>/`, then bump `versionsConfig.current`.

## Commands

```bash
pnpm docs:dev       # dev server
pnpm docs:build     # production build — fails on broken links/missing assets
pnpm docs:preview   # preview the production build
pnpm docs:deploy    # build + publish .vitepress/build to gh-pages
pnpm lint           # ESLint + Prettier + markdownlint (must pass before merge)
pnpm lint:md        # markdownlint only
pnpm format         # Prettier --write
```

There is no unit test suite: `pnpm docs:build` is the correctness check (broken internal links/markdown fail the build). CI (`.github/workflows/ci.yml`) calls the org's reusable `node-lint-test.yml` (lint) and `docs-build.yml` (build) workflows from `edpage-hq/.github`.

`node-lint-test.yml` also runs a generic `pnpm build --if-present` step. pnpm appends `--if-present` onto whatever "build" resolves to even when the script exists, and `vitepress build --if-present` misreads that as its root-directory argument (silently building an empty scaffold into a literal `--if-present/` folder instead of failing loudly). `"build"` in `package.json` therefore points at `scripts/ci-build.mjs`, a wrapper that calls `vitepress build` with a fixed argument list — it absorbs whatever pnpm appends without forwarding it. Don't inline `vitepress build` directly as the `"build"` script.

Node/pnpm versions are pinned via `engines` in `package.json` and `.nvmrc` (Node 20) — matches the CI workflows' default.

## Environment variables

Loaded via `dotenv/config` at the top of `.vitepress/config/index.ts`, read from `process.env` (see `.env.example`):

- `VITE_BASE` — public base path (`/docs/` locally; adjust for the actual deployment target)
- `VITE_SITE_URL` — canonical URL used in Open Graph meta tags

## Conventions

- Search is VitePress' local provider (no external service/API keys) — translated strings live in each locale file's `search` export. The key must match the top-level locale key exactly: `root` for French (it's the root locale), `en` for English — not `fr`, which silently matches nothing.
- markdownlint rules live in `.markdownlint-cli2.jsonc` (config + globs + ignores in one file — that's the `-cli2` convention, unlike the older `markdownlint-cli`'s separate `.markdownlintignore`). `archive/` is excluded: frozen versions aren't re-linted against current rules.
- Branch naming, commit format and PR process: see [CONTRIBUTING.md](https://github.com/edpage-hq/.github/blob/master/CONTRIBUTING.md) in `.github`.
- Definition of Done and README template: see [project-guidelines](https://github.com/edpage-hq/project-guidelines).
