---
layout: doc
---

# About

**Kura** is the administrative and financial platform of **NextBoxx**, edPage group's training organisation. This guide is its public documentation: it explains what the platform does, how it is organised and how to run it.

## Who this guide is for

| Audience                   | Useful pages                                                                                                         |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| NextBoxx and edPage team   | [Overview](/en/guide/overview), [Accounts and roles](/en/guide/roles), [Core modules](/en/guide/core-modules)        |
| Developers and integrators | [Architecture](/en/guide/architecture), [Integrations](/en/guide/integrations), [Development](/en/guide/development) |
| Operations                 | [Deployment](/en/guide/deployment), [Billing](/en/guide/billing)                                                     |
| Partners and funders       | [Overview](/en/guide/overview), [Learner journey](/en/guide/learner-journey)                                         |

## How it is organised

- **Discover**: what Kura is, its scope, how to install it.
- **Understand**: architecture, roles, learner journey and business rules.
- **Operate**: billing, generated documents, integrations.
- **Contribute**: development conventions and the deployment procedure.

Every page exists in French and English. The French version is the reference; the English one is its translation.

## Sources of truth

This guide summarises and connects several documents:

- **`kura-docs`** — business rules, architecture, API contract and decisions (ADRs). This is the reference to read before changing the code.
- **`kura-web`** — the Laravel application code, which is authoritative on implementation details.
- **The specification appendices** — document templates, price grids and scales.

If they contradict each other, `kura-docs` wins over this guide, and the code wins over both for what is actually in production.

## The project

|               |                                                |
| ------------- | ---------------------------------------------- |
| Product owner | NextBoxx (edPage group)                        |
| Delivery      | edPage HQ                                      |
| Stack         | Laravel 13, Inertia v3, Vue 3, Tailwind CSS v4 |
| Use           | Internal to edPage and NextBoxx, and partners  |

## Contributing to the guide

The guide is built with [VitePress](https://vitepress.dev). Pages live in `src/guide` (French) and `src/en/guide` (English), navigation in `.vitepress/config/locales`.

```bash
pnpm install
pnpm docs:dev     # local server
pnpm lint         # ESLint, Prettier and markdownlint
pnpm docs:build   # checks links and builds the site
```

A content fix is proposed through a pull request on `edpage-hq/kura-guide`. To report an error without proposing a fix, open an issue.

## Contact

- **Reference documentation**: [github.com/edpage-hq/kura-docs](https://github.com/edpage-hq/kura-docs)
- **Guide repository**: [github.com/edpage-hq/kura-guide](https://github.com/edpage-hq/kura-guide)
- **Support**: the edPage HQ team.
