---
layout: doc
---

# Développement

Cette page résume les conventions et les outils du dépôt `kura-web`. Elle ne remplace pas la documentation de référence : les règles métier vivent dans `kura-docs`, et tout changement qui les touche doit être mis à jour dans la même pull request.

## Installer l'environnement

Voir [Démarrage](/guide/getting-started) pour les prérequis et `composer setup`. Une fois la base en place :

```bash
composer dev
```

La commande lance le serveur PHP, le worker de file d'attente, Vite et les logs en parallèle.

## Commandes

| Commande                                | Effet                                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------- |
| `composer setup`                        | Installation complète : dépendances, `.env`, clé, migrations, seeders, stockage, assets |
| `composer dev`                          | Serveur, file d'attente, Vite et logs                                                   |
| `composer test`                         | `config:clear`, Pint en vérification, Larastan, puis Pest                               |
| `composer ci:check`                     | `composer test` + ESLint, Prettier et `vue-tsc`                                         |
| `composer lint` / `composer lint:check` | Pint en correction / en vérification                                                    |
| `composer types:check`                  | Larastan (PHPStan niveau 7)                                                             |
| `pnpm lint` / `pnpm lint:check`         | ESLint en correction / en vérification                                                  |
| `pnpm format` / `pnpm format:check`     | Prettier                                                                                |
| `pnpm types:check`                      | `vue-tsc --noEmit`                                                                      |
| `php artisan test --compact`            | Suite Pest seule                                                                        |

La CI GitHub (`lint-test`) appelle le workflow réutilisable de l'organisation, qui exécute **Pint et Pest** après un `pnpm build`. ESLint, Prettier, `vue-tsc` et Larastan ne sont pas rejoués côté GitHub : il faut les lancer localement avec `composer ci:check` avant de pousser.

## Conventions

- **Langue du code** : identifiants, tables, colonnes, classes, routes et noms de fichiers en anglais. Le français est réservé aux fichiers de traduction de l'interface et aux documents destinés aux utilisateurs.
- **Branches** : `master` par défaut ; `feature/<nom-court>`, `fix/<nom-court>`, `chore/<nom-court>`.
- **Commits** : style Conventional Commits — `feat:`, `fix:`, `chore:`, avec une description courte.
- **Gestionnaire de paquets** : pnpm uniquement. Ne jamais committer `package-lock.json` ni `yarn.lock`.
- **PHP** : Pint avec le preset Laravel ; accolades sur toutes les structures de contrôle ; typage explicite des paramètres et des retours ; propriétés promues dans les constructeurs.
- **Statuts** : toujours des enums PHP (`App\Enums`), jamais des chaînes libres. Les valeurs sont en anglais, en `snake_case`.
- **Montants** : FCFA, `DECIMAL(12,2)`, hors taxe, jamais de flottant.
- **Références** : générées par le trait `HasYearlyReference`, au format `PREFIXE-NB-AAAA-XXX`.
- **Autorisation** : Gates transverses définis dans `AppServiceProvider`, consommés par `can:*`, `Gate::authorize` et `useAccess`. Il n'y a pas de Policies par modèle.

## Le cycle d'une évolution

1. Lire `kura-docs` (`business-logic.md`, `architecture.md`, `api.md`) et l'ADR concerné.
2. Créer la branche et, si le comportement change, le test qui le décrit.
3. Écrire le code en suivant les patterns voisins — même structure de contrôleur, de Form Request et de page Inertia.
4. Lancer les tests ciblés, puis `composer ci:check`.
5. Mettre à jour `kura-docs` dans la même pull request si une règle, un contrat d'API, un modèle de données ou une décision change.

## Tests

Les tests sont en **Pest 4**, sous `tests/Feature` (un dossier par module) et `tests/Unit`. Les tests de fonctionnalité utilisent `RefreshDatabase` et les factories des modèles ; les états personnalisés (`->withRole()`, `->organization()`, `->forCohort()`) évitent de construire les graphes à la main.

```php
it('suspends Sève access thirty days after the due date', function () {
    $enrolment = billedEnrolment();
    $this->travel(31)->days();

    $this->artisan('billing:run')->assertSuccessful();

    expect($enrolment->fresh()->status)->toBe(EnrolmentStatus::Suspended);
});
```

Bonnes pratiques :

- tester le comportement observable (statut, facture émise, notification envoyée), pas l'implémentation ;
- geler le temps (`$this->travelTo()`, `$this->travel()`) dès qu'une règle dépend d'une date ;
- simuler les effets de bord (`Notification::fake()`, `Storage::fake()`, `Queue::fake()`) et vérifier ce qui compte ;
- couvrir le cas nominal et la ou les branches d'échec qui portent une règle métier ;
- ne pas dupliquer les tests de validation générés par Laravel.

Pour lancer un seul fichier ou un seul test :

```bash
php artisan test --compact tests/Feature/Billing/BillingTest.php
php artisan test --compact --filter="suspends Sève access"
```

## Frontend

- **Pages Inertia** dans `resources/js/pages`, un dossier par module. Chaque page déclare ses props typées dans `resources/js/types`.
- **Composants** réutilisables dans `resources/js/components` : vérifier l'existant avant d'en écrire un nouveau.
- **Composables** : `useAccess` pour les droits, `useMainNav` pour le menu, `useLocale` pour la langue, `useAppearance` pour le thème.
- **Wayfinder** : les URLs et les actions viennent de `@/actions` et `@/routes`, jamais d'une chaîne écrite à la main. Le plugin est configuré dans `vite.config.ts` avec `formVariants: true` ; les fichiers générés sont versionnés.
- **Styles** : Tailwind CSS v4 et composants shadcn-vue (`components.json`, style `new-york-v4`). La palette, la typographie et les espacements suivent le design system NextBoxx.

## Internationalisation

- `vue-i18n` avec des fichiers JSON par domaine dans `resources/js/lib/locales/fr` et `resources/js/lib/locales/en`.
- La locale est stockée sur le compte et appliquée par le middleware `SetLocale` ; elle est modifiable depuis le profil.
- Toute nouvelle chaîne visible passe par une clé de traduction dans les **deux** langues. Les emails et PDF utilisent la langue du destinataire.
- Les libellés métier (statuts, moyens de paiement, motifs) sont formatés dans `resources/js/lib/*.ts`, pas dans les composants.

## Points de vigilance

- **N+1** : les pages liste doivent charger leurs agrégats avec `withCount`, `withSum` et `with`, pas en appelant une relation ou une méthode par ligne. Surveiller en particulier les tableaux de bord, le reporting et les espaces financeur.
- **Modèles volumineux** : `Enrolment`, `Invoice`, `Cohort` et `CompanyRequest` mêlent requêtes, règles et formatage. Extraire dans un service ou une action plutôt que d'en ajouter.
- **Concurrence** : la numérotation annuelle, l'émission des tranches et l'enregistrement des paiements reposent sur des contraintes d'unicité et des transactions. Conserver les verrous (`lockForUpdate`) et prévoir un rejeu propre en cas de collision.
- **Idempotence** : les commandes planifiées (`billing:run`, `seve:sync`, `events:run`) peuvent être rejouées. Un second passage ne doit ni doubler une facture ni renvoyer deux fois un message.
- **Contrats Inertia** : les props sont des tableaux construits à la main et dupliqués dans `resources/js/types`. Les faire évoluer ensemble, sinon `vue-tsc` ou l'exécution casse silencieusement.
- **PHPStan niveau 7** : les types de collection et les retours nullables sont stricts. Préférer les value objects et les enums aux tableaux associatifs non typés.
- **Sécurité** : les documents PDF sont sur un disque privé, servis par des routes autorisées ; les liens publics sont signés ou à jeton, à usage unique. Ne jamais exposer un chemin de stockage.
- **Données personnelles** : les candidatures refusées sont anonymisées après 12 mois, les comptes inactifs désactivés après un an. Toute nouvelle table contenant des données personnelles doit prévoir sa purge.

## Et ensuite

- [Architecture](/guide/architecture) pour la structure et le modèle de données.
- [Intégrations](/guide/integrations) pour l'API, Sève et WhatsApp.
- [Déploiement](/guide/deployment) pour la mise en production.
