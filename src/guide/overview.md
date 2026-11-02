---
layout: doc
---

# Présentation

**Kura** est la plateforme administrative et financière de **NextBoxx**, l'organisme de formation d'edPage group. Elle centralise le catalogue, les cohortes, les candidatures, les inscriptions, la facturation, la certification et les rémunérations. C'est le système de vérité unique pour tout ce qui n'est pas pédagogique.

## L'écosystème NextBoxx

L'activité repose sur quatre briques distinctes :

| Brique              | Rôle                                                                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Site NextBoxx**   | Vitrine publique : catalogue, dépôt de candidature, inscription aux événements. Sans état, il transmet à Kura par API.                          |
| **Kura**            | Socle administratif et financier : identité, admission, cohortes, inscriptions, facturation, certification, rémunérations, documents. Ce guide. |
| **Sève**            | LMS Moodle rebrandé : contenus, classes virtuelles, évaluations, présence, accompagnement.                                                      |
| **Parcours Canopé** | Statut et communauté des anciens apprenants certifiés.                                                                                          |

Kura est le **fournisseur d'identité** OAuth2/OpenID Connect de Sève : un compte NextBoxx donne accès à Sève par SSO, sans mot de passe Moodle. Sève ne stocke aucune donnée financière ou contractuelle et ne remonte à Kura que des données agrégées (présence, complétion, notes).

## Principes directeurs

- **Un seul compte par personne**, dédoublonné par email ; les rôles se cumulent, on ne recrée jamais de compte.
- **Kura décide, Sève exécute.** Aucune décision administrative ou financière (ouverture de cohorte, validation d'inscription, facturation, certificat) n'a lieu dans Sève.
- **Le site public est sans état.** Une candidature ou une inscription acceptée est renvoyée au CMS du site, jamais l'inverse.
- **Les notifications n'exécutent rien.** Elles rappellent et alertent ; les décisions restent humaines, sauf les passages automatiques prévus par les règles métier.
- **Montants en FCFA**, stockés en `DECIMAL(12,2)`, exprimés hors taxe.
- **Traçabilité** : les actions des comptes à privilèges sur les comptes et les rôles sont journalisées.

## Périmètre

Le **socle** couvre les modules 1 à 18, le module 29 (Compte NextBoxx), transversal, et le module 32 (Documents générés), nécessaire aux livrets, conventions, factures et certificats.

Les **activités élargies** (modules 19 à 28, 30, 31 et 33) prolongent le socle : formation B2B sur devis, événements, demandes entreprises et recrutement, financement d'événements, incubation L'Éclosion et partenariats technologiques.

| #     | Module                                                   | Bloc        |
| ----- | -------------------------------------------------------- | ----------- |
| 1     | Catalogue de formations                                  | Socle       |
| 2     | Gestion des cohortes                                     | Socle       |
| 3     | Inscriptions et dossier apprenant                        | Socle       |
| 4     | Suivi de présence (vue Kura)                             | Socle       |
| 5     | Évaluations et résultats (vue Kura)                      | Socle       |
| 6     | Certification (certificat, attestation partielle)        | Socle       |
| 7     | Facturation NextBoxx (30/40/30, paiement en ligne)       | Socle       |
| 8     | Communication (annonces, rappels)                        | Socle       |
| 9     | Reporting                                                | Socle       |
| 10    | Rémunération des formateurs et coachs                    | Socle       |
| 11    | Commissions apporteurs d'affaires                        | Socle       |
| 12    | Partenaires marketing                                    | Socle       |
| 13    | Tableau de bord — décision de report de session          | Socle       |
| 14    | Intégration avec Sève                                    | Socle       |
| 15    | Tableau de bord Direction                                | Socle       |
| 16    | Espace financeur (entreprise)                            | Socle       |
| 17    | Signature électronique                                   | Socle       |
| 18    | Gestion des candidatures et admission (dont test QCM)    | Socle       |
| 19    | Formation B2B sur devis                                  | Élargi      |
| 20–22 | Événements (création, inscriptions, financement)         | Élargi      |
| 23–26 | Demandes entreprises, mise en relation et recrutement    | Élargi      |
| 27–28 | Financement d'événements et espace financeur d'événement | Élargi      |
| 29    | Compte NextBoxx (un compte, plusieurs rôles)             | Transversal |
| 30–31 | Incubation L'Éclosion et participations                  | Élargi      |
| 32    | Documents générés                                        | Socle       |
| 33    | Partenariats technologiques                              | Élargi      |

## Repères chiffrés

| Repère                                   | Valeur                                                                            |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| Référentiels au lancement                | 40, en 3 catégories                                                               |
| Rentrées annuelles                       | 4 promotions : Baobab (septembre), Iroko (décembre), Acacia (mars), Karité (juin) |
| Capacité d'une cohorte                   | 15 apprenants                                                                     |
| Classes virtuelles simultanées           | 10 au maximum, 15 participants par classe                                         |
| Échéancier                               | 3 tranches : 30 % à la signature, 40 % à mi-parcours, 30 % à la fin               |
| Seuil de réussite du test d'admission    | 60 %, soit 6 bonnes réponses sur 10                                               |
| Seuil d'alerte d'absence                 | 30 % du volume horaire                                                            |
| Commission apporteur d'affaires          | 5 % des sommes encaissées                                                         |
| Conservation des factures et conventions | 10 ans (OHADA)                                                                    |

## Par où continuer

- [Démarrage](/guide/getting-started) — installer et lancer Kura en local.
- [Architecture](/guide/architecture) — stack, structure du code et modèle de données.
- [Comptes et rôles](/guide/roles) — qui peut faire quoi.
- [Parcours apprenant](/guide/learner-journey) — de la candidature au Parcours Canopé.
- [Modules du socle](/guide/core-modules) — les règles métier du quotidien.
