---
layout: doc
---

# Comptes et rôles

Kura ne connaît qu'**un seul compte par personne**, identifié par son email. Un compte cumule des rôles au fil du temps ; on ne recrée jamais de compte, même après une transformation en organisation.

## Le compte NextBoxx

| Attribut      | Valeurs                                                           |
| ------------- | ----------------------------------------------------------------- |
| Type          | `individu` ou `organisation`                                      |
| Statut global | `actif`, `suspendu` (impayé), `canope` (certifié)                 |
| Identifiant   | email, sans tenir compte de la casse                              |
| Désactivation | automatique un an après la dernière connexion, données conservées |

Un compte **organisation** naît uniquement de la transformation d'un compte individu, validée par l'Administrateur. L'historique individuel (formations, statut Canopé) reste consultable en lecture seule ; la raison sociale devient le nom du compte et l'ancien nom reste dans la demande et le journal.

Le statut `suspendu` bloque toute action payante, quel que soit le module. Le statut `canope` est attribué à la délivrance du certificat.

## Les rôles

| Rôle                         | Attribué par                               | Périmètre                                                                                                                 |
| ---------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **Candidat**                 | Automatique au dépôt                       | Passer le test, suivre son dossier                                                                                        |
| **Participant**              | Automatique à l'inscription à un événement | S'inscrire aux événements, aucun accès formation                                                                          |
| **Apprenant**                | Automatique à l'admission                  | Signer, payer, consulter ses documents, suivre sa formation sur Sève, se rendre visible des entreprises une fois certifié |
| **Formateur Principal**      | Coordinateur pédagogique                   | Ses cohortes, sa rémunération, la présence en présentiel, les repêchages ; aucun accès à la banque QCM                    |
| **Coach-Tuteur**             | Coordinateur pédagogique                   | Ses apprenants suivis, sa rémunération, son espace Sève                                                                   |
| **Coordinateur pédagogique** | Administrateur                             | Catalogue, QCM, cohortes, inscriptions, facturation, certification, rémunérations, annonces, RGPD                         |
| **Conseiller admissions**    | Administrateur                             | Instruction des candidatures : entretien, relance du test, décision motivée                                               |
| **Apporteur d'affaires**     | Chargé de partenariats                     | Inscriptions apportées et commissions                                                                                     |
| **Partenaire marketing**     | Chargé de partenariats                     | Dépôt de factures et suivi du paiement                                                                                    |
| **Financeur**                | Chargé de partenariats                     | Espace financeur : apprenants financés, progression simplifiée, factures de sa part                                       |
| **Financeur d'événement**    | Chargé d'événements                        | Déclaration d'apports et espace de financement                                                                            |
| **Porteur de projet**        | Chargé d'incubation, à la rétention        | Suivi de son projet L'Éclosion et de sa participation                                                                     |
| **Chargé d'événements**      | Administrateur                             | Module événements et validation des rôles associés                                                                        |
| **Chargé de partenariats**   | Administrateur                             | Mise en relation, recrutement, partenariats marketing et technologiques                                                   |
| **Chargé d'incubation**      | Administrateur                             | Module L'Éclosion et validation des porteurs                                                                              |
| **Direction**                | Administrateur                             | Tableau de bord consolidé en lecture seule, comité d'investissement                                                       |
| **Administrateur**           | Administrateur                             | Transformation de compte, rôles à privilèges, journaux, régénération du token Sève                                        |

Trois rôles sont attribués par le système à un événement métier : Candidat, Participant et Apprenant. Tous les autres passent par une demande validée par l'acteur désigné — jamais automatiquement.

## Rôles demandables

Depuis ses paramètres, un compte peut demander :

- Formateur Principal
- Coach-Tuteur
- Apporteur d'affaires
- Partenaire marketing
- Financeur (compte organisation obligatoire)
- Financeur d'événement

Les rôles d'état-major (Coordinateur, Conseillers, Chargés, Direction, Administrateur) sont attribués directement par l'Administrateur.

## Règles de validation

- L'Administrateur peut valider **tous** les rôles, en plus de l'acteur désigné, pour qu'aucune demande ne reste bloquée par un poste vacant.
- Personne ne décide de sa propre demande et personne ne retire son propre rôle.
- Un rôle refusé n'est jamais activé ; les rôles existants restent intacts.
- Le rôle Financeur exige un compte organisation ; le Financeur d'événement reste ouvert aux comptes individu.
- Les actions des comptes à privilèges (Coordinateur pédagogique, Direction, Administrateur) sur les comptes et les rôles sont journalisées avec l'acteur et l'horodatage.

## Autorisations techniques

Les Gates sont définis dans `AppServiceProvider` et consommés par les routes (`can:*`), les contrôleurs (`Gate::authorize`) et le front (`useAccess`).

| Gate                                            | Usage                                      |
| ----------------------------------------------- | ------------------------------------------ |
| `approve-roles`                                 | Instruction des demandes de rôle           |
| `view-candidatures`                             | File et dossiers de candidature            |
| `manage-catalogue`                              | Référentiels, grille tarifaire, banque QCM |
| `view-cohorts`, `manage-cohorts`                | Consultation et pilotage des cohortes      |
| `manage-enrolments`                             | Inscriptions, placements, consentements    |
| `manage-billing`                                | Factures, paiements, avoirs, relances      |
| `view-funded-learners`                          | Espace financeur                           |
| `view-own-commissions`, `view-own-remuneration` | Espaces personnels apporteur et formateur  |
| `submit-marketing-invoices`                     | Dépôt de factures marketing                |
| `view-direction-dashboard`                      | Tableau de bord Direction                  |
| `view-reporting`                                | Reporting et exports                       |
| `manage-communication`                          | Annonces et journal des envois             |
| `manage-events`, `manage-company-requests`      | Modules événements et demandes entreprises |
| `manage-incubation`, `sit-investment-committee` | L'Éclosion et comité d'investissement      |
| `manage-tech-partnerships`                      | Partenariats technologiques                |

## Parcours d'une demande de rôle

1. Le titulaire dépose une demande depuis ses paramètres (ou l'Administrateur crée le compte).
2. L'acteur désigné — ou l'Administrateur — instruit la demande.
3. Il valide ou refuse en motivant.
4. Le titulaire est notifié ; un rôle validé se cumule aux rôles existants.

Voir aussi [Parcours apprenant](/guide/learner-journey) et [Modules du socle](/guide/core-modules).
