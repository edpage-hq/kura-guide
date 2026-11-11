---
layout: doc
---

# Résultats et certification

Depuis la fiche d'une cohorte, **Présence** et **Résultats** donnent le suivi des apprenants. Vous y saisissez les décisions du jury, produisez le procès-verbal et délivrez les certificats.

## Suivre la présence et les notes

Les pages sont les mêmes que celles du Formateur Principal : voir [Formateur Principal](../equipe/formateur#la-presence). En complément, vous pouvez **saisir et corriger la présence en présentiel** à la place du formateur, et **ouvrir des rattrapages**.

Rappel : tant que l'**identifiant du cours Sève** n'est pas renseigné sur la cohorte, ni les classes virtuelles ni les notes ne remontent. La page vous le signale.

## Les décisions du jury

Seul vous (et l'Administrateur) saisissez le jury, **à partir du démarrage de la cohorte**. Sur la page **Résultats**, cliquez sur l'apprenant puis **Saisir les décisions**. Chaque décision reste **en attente** tant que le jury ne l'a pas prise ; les notes sont facultatives et **ne comptent pas dans la moyenne**.

| Décision          | Ce que vous saisissez                                                                   |
| ----------------- | --------------------------------------------------------------------------------------- |
| **Projet tutoré** | Sujet, validé ou non, note sur 20                                                       |
| **Soutenance**    | Date, validée ou non, note sur 20                                                       |
| **Stage**         | Entreprise d'accueil (reprise de la convention de stage s'il y en a une), validé ou non |

La **soutenance** validée est l'une des conditions du certificat. Le **stage** ne bloque jamais le certificat.

### Le président du jury

Indiquez le **président du jury** avec les décisions : c'est lui qui signe le certificat, et son nom y est imprimé. **Sans président, le certificat ne peut pas être délivré.**

### Les membres du jury

Dans **Membres du jury**, ajoutez pour chaque **date de soutenance** les jurés présents : nom et adresse e-mail, sans compte Kura. Chacun reçoit un **jeton**, dû une fois les soutenances tenues. Voir [Rémunérations](./remunerations).

## Le procès-verbal de soutenance

Quand le jury a **statué sur la soutenance de chaque apprenant confirmé** de la cohorte, le panneau **Documents** de la fiche propose **Générer le PV**. Le procès-verbal est **numéroté** (`PVS-NB-AAAA-XXX`), **scellé** et conservé.

Il n'est **jamais régénéré à la consultation**. Si les décisions du jury sont corrigées ensuite, la fiche vous propose d'en générer un nouveau : il **remplace** l'ancien, qui reste téléchargeable, marqué « remplacé ». Tant qu'une soutenance reste sans décision, aucun PV n'est produit.

## Délivrer le certificat

Sur la page de résultats, le bloc **Certification** montre les quatre conditions de chaque apprenant, remplies ou non :

1. tous les blocs notés, **moyenne ≥ 10/20** ;
2. **aucun bloc sous 8/20** ;
3. **soutenance validée** par le jury ;
4. **solde des frais de formation réglé**.

Aucune condition n'en compense une autre. Quand les quatre sont réunies et que le président du jury est saisi, **Délivrer le certificat** est disponible, **une seule fois** par apprenant.

La délivrance :

- fige un **PDF scellé** (`CERT-NB-AAAA-XXX`) avec la **mention** (Passable dès 10/20 ; Assez bien, Bien et Très bien aux seuils que règle l'Administrateur, 12, 14 et 16 par défaut), et le **relevé de compétences** (`REL-NB-AAAA-XXX`), envoyés à l'apprenant par e-mail ;
- **termine l'inscription** ;
- retire l'apprenant du cours de sa cohorte dans Sève ;
- fait passer son compte à l'état **Canopé** et l'inscrit au **Parcours Canopé**.

Si le cours Sève du Parcours Canopé n'est pas encore paramétré sur le serveur (ce n'est pas un champ de Kura), l'inscription Canopé **attend** : l'appel en échec figure dans **Administration → Synchronisation Sève**, et part dès que l'équipe technique a renseigné le cours.

## L'attestation partielle

Pour une inscription **abandonnée** (volontaire ou pour impayé) avec **au moins un bloc validé**, **Délivrer l'attestation partielle** produit une attestation qui reprend les blocs validés, ceux qui ne l'ont pas été ou n'ont pas été suivis, et le motif de l'interruption, avec le relevé de compétences. Il n'y a **jamais de certificat partiel**. S'il n'y a aucun bloc validé, il n'y a rien à attester.
