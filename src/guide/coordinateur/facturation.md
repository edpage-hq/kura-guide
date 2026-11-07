---
layout: doc
---

# Facturation

**Finance → Facturation** rassemble les factures, les paiements, les relances et les avoirs. Kura **n'encaisse rien** : les paiements arrivent hors de Kura, et vous les y enregistrez.

## Les factures

Chaque inscription donne trois factures, aux dates calculées par la cohorte : signature (30 %), mi-parcours (40 %), solde (30 %). Elles sont **émises au fil de l'eau** : la première à la contre-signature de la convention, les autres **15 jours avant leur échéance**. La référence est `FAC-NB-AAAA-XXX` ; le PDF part par e-mail au payeur.

Les montants sont **hors taxe** : la facture porte la mention d'exonération et les modalités de paiement, que l'Administrateur règle.

En financement partagé, chaque tranche donne **une facture par payeur**, suivie séparément. La page liste aussi les factures des événements payants, des devis entreprise et des mises en relation.

La liste se filtre par statut (**Émises**, **En retard**, **Payées**, **Annulées**) et se recherche par référence, payeur ou apprenant.

## Enregistrer un paiement

Sur une facture, **Paiement** demande :

- le **montant reçu** (en FCFA), qui ne peut jamais dépasser le reste dû ;
- le **moyen de paiement** : virement, chèque, Mobile Money, carte bancaire ou espèces ;
- la **référence** de la transaction ;
- la **date** de réception.

Un paiement **partiel** est possible. Le payeur reçoit un accusé. Quand le solde de la facture est atteint, elle passe « Payée ».

**Payer rétablit l'accès** : un compte suspendu pour impayé est réactivé automatiquement, dans Kura et dans Sève.

## Relancer

Kura envoie seul les rappels avant l'échéance (J-15, J-7, J-1) et le lendemain (J+1). **La relance de J+7 est la vôtre** : le filtre **À relancer (J+7)** liste les factures concernées. Contactez l'apprenant ou le financeur par e-mail ou par téléphone, puis cliquez sur **Relance faite** : la date est conservée.

| Moment     | Qui agit                                                                    |
| ---------- | --------------------------------------------------------------------------- |
| J+1        | Kura : rappel                                                               |
| J+7        | **Vous** : relance personnalisée                                            |
| J+15       | Kura : la facture passe « En retard », moratoire automatique de 15 jours    |
| J+30       | Kura : suspension de l'accès à Sève                                         |
| Après J+30 | **Vous** : entretien, plan de régularisation éventuel, sinon désinscription |

Le moratoire est **unique** et non renégociable. Quand le payeur en retard est le **financeur**, l'apprenant est suspendu aussi. Pour les cohortes dédiées d'une entreprise, la suspension porte sur les inscriptions de la cohorte, pas sur les comptes.

## Si une cohorte change ou est annulée

- **Changement de cohorte.** Les paiements sont conservés ; le reste dû des factures déjà émises est annulé par un **avoir d'annulation** (`AV-NB-AAAA-XXX`). La nouvelle convention refacture chaque tranche en déduisant ce que le payeur a déjà réglé.
- **Annulation par NextBoxx.** Kura émet un **avoir de remboursement** de 100 % des sommes payées. Il apparaît « À rembourser » dans **Avoirs** : une fois le remboursement effectué, cliquez sur **Remboursement fait** et indiquez la date.
- **Abandon.** Pas d'avoir : voir [Inscriptions](./inscriptions#enregistrer-un-abandon).

## Ce qui est facturé

Seuls certains événements déclenchent une facture : les échéances de l'échéancier, l'inscription à un événement payant, un devis entreprise accepté, une mise en relation confirmée.
