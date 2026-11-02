---
layout: doc
---

# Facturation

Toute la facturation est en **FCFA**, hors taxe, stockée en `DECIMAL(12,2)`. Les factures portent une mention d'exonération de TVA et les modalités de paiement réglées par l'Administrateur. Elles sont générées en PDF, stockées de façon privée et envoyées par email au payeur.

## L'échéancier 30/40/30

Chaque inscription produit **trois factures**, aux dates calculées par la cohorte :

| Tranche | Part | Échéance                                                  | Émission                                       |
| ------- | ---- | --------------------------------------------------------- | ---------------------------------------------- |
| 1       | 30 % | Début de la cohorte, ou signature si elle est postérieure | À la contre-signature de la convention         |
| 2       | 40 % | Mi-parcours                                               | 15 jours avant l'échéance, avec le rappel J-15 |
| 3       | 30 % | Fin de la cohorte                                         | 15 jours avant l'échéance, avec le rappel J-15 |

Les dates ne sont jamais saisies : la date de mi-parcours et les trois échéances sont calculées à partir des dates de la cohorte. Les références sont annuelles et lisibles : `FAC-NB-AAAA-XXX` pour les factures, `AV-NB-AAAA-XXX` pour les avoirs.

## Financement partagé

Avant la signature, le Coordinateur désigne un **financeur** (compte organisation au rôle Financeur) et sa part, de 1 à 100 %. La répartition figure dans la convention.

- Chaque tranche est facturée en **une facture par payeur** : l'apprenant et le financeur sont suivis séparément.
- Le financeur voit, dans son espace, les apprenants qu'il finance et les factures de sa part.
- Si le financeur est en retard, l'accès Sève de l'apprenant est suspendu **même si sa propre part est payée**. Le paiement rétablit l'accès.

## Encaissement

Les paiements sont saisis par le Coordinateur : montant, moyen, référence, date. Les paiements **partiels** sont possibles. Un accusé est envoyé au payeur.

| Moyen                         | Saisie   |
| ----------------------------- | -------- |
| Virement                      | Manuelle |
| Chèque                        | Manuelle |
| Mobile Money (Flooz, T-Money) | Manuelle |
| Carte bancaire                | Manuelle |
| Espèces                       | Manuelle |

Le paiement en ligne **PayGate** (Flooz, T-Money) est prévu par l'ADR-006 mais n'est pas encore branché : tant qu'il ne l'est pas, tous les encaissements passent par la saisie manuelle.

## Relances

| Moment         | Événement                                                             | Acteur                   |
| -------------- | --------------------------------------------------------------------- | ------------------------ |
| J-15, J-7, J-1 | Rappel d'échéance (email, Sève, WhatsApp)                             | Kura                     |
| J+1            | Rappel d'échéance non réglée                                          | Kura                     |
| J+7            | Relance personnalisée (email ou appel)                                | Coordinateur pédagogique |
| J+15           | Facture **en retard**, début du **moratoire automatique** de 15 jours | Kura                     |
| J+30           | Sans paiement, **suspension de l'accès Sève**                         | Kura                     |
| Après J+30     | Entretien, plan de régularisation, désinscription si rien             | Coordinateur pédagogique |

Le moratoire est **unique et non renégociable** : il reporte l'échéance de 15 jours et reste visible sur la facture. Le paiement, à toute étape, rétablit automatiquement l'accès.

Cette chronologie remplace les règles antérieures (« en retard » à J+1, moratoire sur demande, suspension à J+15, échéance à 15 jours de l'émission).

## Avoirs et remboursements

Un avoir `AV-NB-AAAA-XXX` porte un type :

- **annulation du reste dû** : les tranches non encore réglées sont annulées ;
- **remboursement** : les sommes déjà payées sont restituées, une fois le remboursement effectué.

Cas principaux :

| Cas                                           | Traitement                                                                                                                   |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Changement de cohorte (report, force majeure) | Paiements conservés ; reste dû annulé par avoir ; nouvelle convention facturant chaque tranche déduction faite des paiements |
| Annulation de cohorte par NextBoxx            | Avoir de remboursement de 100 % des sommes payées ; remboursement enregistré par le Coordinateur                             |
| Abandon volontaire                            | Aucun avoir ; tranches restantes non facturées ; factures émises restant dues ; attestation partielle                        |
| Annulation d'un événement                     | Avoir pour les inscrits payés ; reste dû annulé                                                                              |
| Inscription à un événement non payée à 48 h   | Avoir du reste dû, place libérée                                                                                             |

## Factures hors échéancier

Seuls ces événements facturent en dehors de l'échéancier d'une inscription :

- une demande de rattrapage ou de repêchage, facturée immédiatement ;
- une inscription à un événement payant ;
- un devis B2B accepté ;
- une mise en relation ou un accompagnement confirmé.

Toute autre facture est validée par le Coordinateur.

Les factures d'événement n'ont ni inscription de formation, ni convention, ni tranche. Elles sont échues 48 h avant le début de l'événement et exclues du calendrier de facturation, des relances de formation, des commissions et des tableaux de bord.

## Rémunérations et commissions

| Bénéficiaire         | Base de calcul                                                    | Versement                                     |
| -------------------- | ----------------------------------------------------------------- | --------------------------------------------- |
| Formateur Principal  | Heures du référentiel × taux horaire de la zone, + forfait projet | Validé par le Coordinateur, versé hors Kura   |
| Coach-Tuteur         | Effectif au démarrage × forfait coach, partagé entre co-coachs    | Idem                                          |
| Jury externe         | Jeton dû à la tenue effective de la soutenance                    | Idem                                          |
| Apporteur d'affaires | 5 % de chaque paiement encaissé, part du financeur comprise       | Idem ; ligne négative en cas de remboursement |
| Partenaire marketing | Facture déposée, dans la limite du contrat ou du forfait          | Validée ou rejetée avec motif, puis versée    |

Une cohorte garde les taux et la zone de son **démarrage**, même si un apprenant abandonne ensuite. Les montants calculés sont ajustables par le Coordinateur avant validation ; le versement est toujours enregistré après coup, car il a lieu hors de Kura.

## Indicateurs financiers

| Indicateur  | Définition                                                               |
| ----------- | ------------------------------------------------------------------------ |
| Facturé     | Somme des factures, nette des avoirs d'annulation                        |
| Encaissé    | Somme des paiements, nette des remboursements                            |
| Reste dû    | Facturé − encaissé, dont la part en retard                               |
| Versé       | Rémunérations et commissions versées, plus les factures marketing payées |
| Marge brute | Encaissé − versé                                                         |

La vue Direction ajoute le versé et la marge brute ; le reporting s'arrête au reste dû. Les deux vues excluent les factures d'événement.

## Bonnes pratiques

- Enregistrer un paiement **dans une transaction** et vérifier le solde après verrouillage de la ligne, pour éviter un surpaiement en cas de saisies simultanées.
- Ne jamais émettre une facture sans vérifier qu'elle n'existe pas déjà pour la même convention, le même payeur et la même tranche.
- Conserver les PDF et leurs empreintes : une facture émise ne se réédite pas, elle se corrige par un avoir.
