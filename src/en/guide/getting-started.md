---
layout: doc
---

# Getting started

## Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/) 9+

## Installation

```bash
pnpm install
cp .env.example .env
pnpm docs:dev
```

The site is served locally at `http://localhost:5173/docs/`.

## Adding a page

1. Create the Markdown file under `src/<segment>.md` (French, root) and its counterpart under `src/en/<segment>.md` (English).
2. Add the matching sidebar entry in both `.vitepress/config/locales/fr.ts` and `.vitepress/config/locales/en.ts`.

## Production build

```bash
pnpm docs:build
```

The command fails if an internal link or referenced image is broken.
