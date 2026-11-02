---
layout: doc
---

# À propos

**Kura** est la plateforme administrative et financière de **NextBoxx**, l'organisme de formation d'edPage group. Ce guide est sa documentation publique : il explique ce que fait la plateforme, comment elle est organisée et comment la faire tourner.

## À qui s'adresse ce guide

| Public                       | Pages utiles                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Équipe NextBoxx et edPage    | [Présentation](/guide/overview), [Comptes et rôles](/guide/roles), [Modules du socle](/guide/core-modules)    |
| Développeurs et intégrateurs | [Architecture](/guide/architecture), [Intégrations](/guide/integrations), [Développement](/guide/development) |
| Exploitation                 | [Déploiement](/guide/deployment), [Facturation](/guide/billing)                                               |
| Partenaires et financeurs    | [Présentation](/guide/overview), [Parcours apprenant](/guide/learner-journey)                                 |

## Comment il est organisé

- **Découvrir** : ce qu'est Kura, son périmètre, comment l'installer.
- **Comprendre** : architecture, rôles, parcours apprenant et règles métier.
- **Exploiter** : facturation, documents générés, intégrations.
- **Contribuer** : conventions de développement et procédure de déploiement.

Chaque page existe en français et en anglais. La version française sert de référence ; l'anglaise en est la traduction.

## Sources de vérité

Ce guide vulgarise et relie plusieurs documents :

- **`kura-docs`** — règles métier, architecture, contrat d'API et décisions (ADR). C'est la référence à consulter avant toute évolution du code.
- **`kura-web`** — le code de l'application Laravel, qui fait foi sur les détails d'implémentation.
- **Les annexes du cahier des charges** — modèles de documents, grilles tarifaires et barèmes.

En cas de contradiction, `kura-docs` prime sur ce guide, et le code prime sur les deux pour ce qui est effectivement en production.

## Le projet

|                    |                                                |
| ------------------ | ---------------------------------------------- |
| Maîtrise d'ouvrage | NextBoxx (edPage group)                        |
| Maîtrise d'œuvre   | edPage HQ                                      |
| Stack              | Laravel 13, Inertia v3, Vue 3, Tailwind CSS v4 |
| Usage              | Interne à edPage et NextBoxx, et partenaires   |

## Contribuer au guide

Le guide est généré avec [VitePress](https://vitepress.dev). Les pages vivent dans `src/guide` (français) et `src/en/guide` (anglais), la navigation dans `.vitepress/config/locales`.

```bash
pnpm install
pnpm docs:dev     # serveur local
pnpm lint         # ESLint, Prettier et markdownlint
pnpm docs:build   # vérifie les liens et produit le site
```

Une correction de contenu se propose par une pull request sur `edpage-hq/kura-guide`. Pour signaler une erreur sans proposer de correction, ouvrez une issue.

## Contact

- **Documentation de référence** : [github.com/edpage-hq/kura-docs](https://github.com/edpage-hq/kura-docs)
- **Dépôt du guide** : [github.com/edpage-hq/kura-guide](https://github.com/edpage-hq/kura-guide)
- **Support** : l'équipe edPage HQ.
