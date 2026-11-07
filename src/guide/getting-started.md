---
layout: doc
---

# Pour commencer

## Prérequis

- Node.js 20+
- [pnpm](https://pnpm.io/) 9+

## Installation

```bash
pnpm install
cp .env.example .env
pnpm docs:dev
```

Le site est servi en local sur `http://localhost:5173/docs/`.

## Ajouter une page

1. Créer le fichier Markdown dans `src/<segment>.md` (français, racine) et son équivalent dans `src/en/<segment>.md` (anglais).
2. Ajouter l'entrée correspondante dans la sidebar : `.vitepress/config/locales/fr.ts` et `.vitepress/config/locales/en.ts`.

## Build de production

```bash
pnpm docs:build
```

La commande échoue si un lien interne ou une image référencée est cassé.
