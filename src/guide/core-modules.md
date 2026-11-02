---
layout: doc
---

# Modules du socle

Les modules 1 à 18, 29 et 32 forment le socle. Cette page résume les règles qui structurent le quotidien ; le détail exhaustif vit dans la documentation de référence.

## Catalogue (module 1)

Un **référentiel** est une formation du catalogue, identifiée par un code stable et immuable `NB.XX.YY`. Le préfixe suit la catégorie :

| Catégorie             | Code                    | Durée                                                                          |
| --------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| Parcours Métiers      | `NB.FP.01` – `NB.FP.10` | 500 h / 25 semaines + stage (700 h pour le package Développement Web & Mobile) |
| Compétences Métiers   | `NB.CM.01` – `NB.CM.12` | 250 h / 12 semaines + stage                                                    |
| Technologies & Outils | `NB.TO.01` – `NB.TO.18` | 250 h / 12 semaines + stage                                                    |

Trois statuts : **brouillon**, **publié**, **archivé**. Seul un référentiel publié est visible sur le site. La dépublication est impossible s'il est lié à une cohorte ouverte, confirmée ou en cours.

Le tarif n'est jamais saisi librement : il dérive de la catégorie et du format, via la grille tarifaire.

| Catégorie                                   | Distanciel | Hybride   | Présentiel |
| ------------------------------------------- | ---------- | --------- | ---------- |
| Parcours Métiers                            | 850 000    | 900 000   | 950 000    |
| Développement Web & Mobile                  | 1 000 000  | 1 100 000 | 1 150 000  |
| Compétences Métiers / Technologies & Outils | 450 000    | 500 000   | 550 000    |

Montants en FCFA, hors taxe. Une modification de tarif est programmée à partir d'une date et ne s'applique qu'aux cohortes ouvertes ensuite.

La **banque QCM** d'un référentiel contient 20 questions validées. L'import se fait par classeur `.xlsx`, un onglet par référentiel, puis une validation explicite : importer et valider sont deux actions distinctes. Le fichier importé n'est jamais conservé.

## Cohortes (module 2)

Une cohorte est une session d'un référentiel, rattachée à une **promotion** annuelle :

| Promotion | Rentrée   |
| --------- | --------- |
| Baobab    | Septembre |
| Iroko     | Décembre  |
| Acacia    | Mars      |
| Karité    | Juin      |

Conditions d'ouverture : référentiel publié, banque QCM validée, un prix pour chaque format proposé, au moins un Formateur Principal affecté. Capacité maximale : **15 apprenants**. Les prix de la grille sont figés à l'ouverture.

Statuts : **ouverte**, **confirmée**, **en cours**, **terminée**, **reportée**, **annulée**.

- Le Coordinateur confirme une cohorte ouverte.
- Une cohorte confirmée démarre seule à sa date de début ; une cohorte en cours se termine seule après sa date de fin.
- Report et annulation sont possibles uniquement avant le démarrage, avec un motif obligatoire, et sont définitifs.
- Une cohorte mêle les trois formats : format et tarif sont portés par chaque inscription.

La **zone de rentabilité** est recalculée à chaque inscription ou désinscription confirmée :

| Effectif confirmé | Zone        |
| ----------------- | ----------- |
| Moins de 7        | Fragile     |
| 7 à 11            | Viable      |
| 12 à 15           | Confortable |

Les seuils Viable et Confortable sont réglables par catégorie. Une cohorte qui démarre fige sa zone et son effectif : les changements de seuil ne touchent que les cohortes à venir.

Le **tableau de bord de rentabilité** (module 13) montre, pour les cohortes ouvertes et confirmées, la zone, l'effectif, les recettes signées et en attente, le coût de l'encadrement et sa couverture. Une cohorte Fragile à moins d'une semaine du démarrage est signalée « à décider » ; rien n'est déclenché automatiquement.

## Candidatures et admission (module 18)

Quatre étapes strictement séquentielles : **dépôt**, **entretien**, **test**, **décision**.

- Entretien sous 5 jours ouvrés, clôturé par le conseiller responsable.
- Test : lien à usage unique, 48 h pour commencer, 2 tentatives de 45 minutes, 10 questions sur 20, seuil indicatif de 60 %.
- Décision motivée sous 3 jours ouvrés.
- Une seule candidature en cours par compte ; redépôt possible 7 jours après un refus.
- Candidature refusée conservée 12 mois, puis anonymisée : les statistiques restent, les données personnelles disparaissent.

Le déroulé complet est décrit dans [Parcours apprenant](/guide/learner-journey).

## Inscriptions et consentements (module 3)

L'inscription est créée à l'admission, au statut **en attente de signature**. Statuts : `pending_signature`, `active`, `suspended`, `dropped`, `completed`.

- Toute inscription non abandonnée occupe une place ; l'effectif et la zone ne comptent que les inscriptions signées.
- Le format est modifiable jusqu'à la signature, parmi les formats tarifés de la cohorte.
- Deux consentements distincts sont requis avant la signature : réutilisation pédagogique du projet tutoré et droit à l'image. Chaque changement est journalisé.
- Pour un mineur, seuls comptent les consentements du représentant légal, recueillis par un lien email à usage unique de 7 jours.
- Le **financement partagé** désigne un compte organisation au rôle Financeur et sa part (1 à 100 %), figée dans la convention.

## Présence (module 4)

- Les séances virtuelles sont relues chaque heure depuis `mod_attendance` et ne se modifient pas dans Kura.
- Une séance en présentiel est saisie par un Formateur Principal de la cohorte ou par le Coordinateur, une fois tenue.
- Un retard compte comme une présence ; une absence excusée comme une absence.
- Taux d'absence = minutes manquées ÷ heures du référentiel. L'alerte part **une seule fois** au-delà de 30 %, et se réarme si une correction repasse sous le seuil.

## Résultats (module 5)

- Notes par bloc remontées de Sève par le code `KURA-BLOC-{id}`, sur 20.
- Moyenne pondérée par la durée des blocs, recalculée à chaque lecture.
- Bloc validé à 10/20, compensable de 8 à 10, éliminatoire sous 8. La note retenue est celle de la dernière tentative notée.
- Repêchage ouvert par un Formateur Principal ou le Coordinateur : bloc sous 10/20, 15 jours après la dernière note, 2 fois au plus. Il est rempli par la première note Sève donnée après son ouverture.
- Jury saisi par le Coordinateur : projet tutoré, soutenance, stage. Ces notes restent **hors moyenne** ; le stage ne bloque pas le certificat.

## Certification (module 6)

Le certificat exige **quatre conditions cumulatives** :

1. moyenne ≥ 10/20 ;
2. aucun bloc < 8/20 ;
3. soutenance validée ;
4. solde intégralement payé.

Aucune ne compense une autre. Le certificat est délivré une seule fois par le Coordinateur, au nom du président du jury, en PDF scellé. Mentions : Passable dès 10/20, puis Assez bien, Bien et Très bien selon des seuils réglables (12, 14 et 16 par défaut).

La délivrance termine l'inscription, retire l'apprenant du cours de sa cohorte, fait passer le compte au statut **Canopé** et l'inscrit au Parcours Canopé.

Une **attestation partielle** est réservée à une inscription abandonnée avec au moins un bloc validé. Un **relevé de compétences** accompagne le certificat ou l'attestation.

## Communication (module 8)

- Annonces du Coordinateur ou de l'Administrateur à une cohorte, ou à toutes les cohortes d'un référentiel.
- Destinataires : inscriptions en attente, actives ou suspendues, et par défaut formateurs et coachs affectés.
- Canaux : email et Sève, envoi immédiat. Pas de WhatsApp pour les annonces.
- Chaque envoi est journalisé, canal par canal, avec son statut et son erreur.

## Reporting et Direction (modules 9 et 15)

Les deux vues sont en **lecture seule**, sur la même période et avec les mêmes définitions.

| Indicateur                          | Reporting | Direction |
| ----------------------------------- | --------- | --------- |
| Remplissage, réussite, attestations | Oui       | Oui       |
| Facturé, encaissé, reste dû         | Oui       | Oui       |
| Assiduité, moyenne générale         | Oui       | Oui       |
| Versé et marge brute                | Non       | Oui       |
| Portefeuille L'Éclosion             | Non       | Oui       |

Le reporting exporte la liste des cohortes en CSV (point-virgule, UTF-8 avec BOM, dans la langue de l'utilisateur).

## Rémunérations et commissions (modules 10 à 12)

- **Formateurs et coachs** : tarif horaire par zone, forfait projet, forfait coach par apprenant, jeton de jury externe. La grille est paramétrable et chaque taux prend effet à une date. Une cohorte garde les taux et la zone de son démarrage.
- **Apporteurs d'affaires** : 5 % des sommes encaissées, tranche par tranche, part du financeur comprise. Un remboursement reprend la commission par une ligne négative.
- **Partenaires marketing** : rémunération sur dépôt de facture, dans la limite du contrat ou du forfait de campagne ; validation ou rejet motivé par le Coordinateur.

Le détail des calculs et des versements est dans [Facturation](/guide/billing#remunerations-et-commissions).
