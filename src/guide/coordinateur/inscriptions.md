---
layout: doc
---

# Inscriptions et conventions

**Parcours → Inscriptions** liste les apprenants admis, avec leur programme, leur cohorte, leur format, leur statut et leurs consentements. Filtrez par statut (À signer, Actives, Suspendues, Abandons, Terminées), par programme, ou sur **Sans cohorte**.

## Placer un apprenant

Une inscription **sans cohorte** (le conseiller n'en a pas choisi à l'admission, ou la cohorte a été annulée) porte le repère « À placer ». **Placer** ouvre la liste des cohortes qui peuvent l'accueillir : pas encore démarrées, avec une place et un prix pour son format. L'apprenant est prévenu par e-mail. **Déplacer** fait de même pour un apprenant déjà placé, tant qu'il n'a pas signé.

Toute inscription non abandonnée **occupe une place**. L'effectif et la zone de rentabilité ne comptent que les inscriptions **signées**.

## Le financement

Avant la signature, **Financement** permet de désigner un **financeur** (un compte organisation au rôle Financeur) et sa part, de 1 à 100 %. « Aucun » laisse l'apprenant payer l'intégralité. La répartition figure sur la convention. Voir [Financer des apprenants](../entreprises/financeur).

## L'apporteur d'affaires

**Apporteur d'affaires** associe l'inscription au compte qui l'a apportée, s'il y en a un. Le code (`AP-XXXXXX`) est normalement saisi par le candidat ; vous pouvez le corriger **jusqu'au premier paiement**. L'apporteur touche 5 % de chaque encaissement (voir [Rémunérations et commissions](./remunerations)).

## Le texte de la convention

Depuis **Inscriptions**, le **texte de la convention** (les conditions générales) se publie en **versions immuables** : une fois publiée, une version ne se modifie plus. Une nouvelle version vaut pour les signatures **suivantes** ; chaque convention signée garde celle qu'elle a signée. **Sans texte publié, aucune convention ne peut être signée.**

Kura ajoute à ce texte les conditions particulières (parties, programme, cohorte, format, prix hors taxe, échéancier 30/40/30).

## La contre-signature

Quand l'apprenant a signé, edPage group doit contre-signer. L'Administrateur règle si la contre-signature est **automatique** (au nom du représentant, par défaut) ou **manuelle**. En mode manuel, les conventions à contre-signer apparaissent dans les inscriptions, filtrables par **À contre-signer**, avec le bouton **Contre-signer**.

À la contre-signature : la convention reçoit sa référence `CONV-NB-AAAA-XXX` et son PDF scellé, partis à l'apprenant ; l'inscription devient **active** ; le format, la cohorte et le prix sont figés ; la première facture est émise.

### La convention tripartite

Quand une convention avec financeur est contre-signée, Kura prépare la **convention tripartite**. Le financeur la signe ; en mode manuel, vous la contre-signez avec **Contre-signer la tripartite**. Elle ne bloque ni l'inscription ni la facturation.

## La convention de stage

Pour un apprenant dont la formation comporte un stage, **Saisir le stage** (puis **Modifier le stage**) demande :

- l'**entreprise d'accueil** et son **contact signataire** (nom et e-mail) ;
- le **Coach-Tuteur** qui encadre le stage, choisi parmi ceux de la cohorte ;
- les **dates** de début et de fin, et la **mission**.

**Envoyer la convention de stage en signature** lance les signatures : l'apprenant (ou son représentant légal s'il est mineur) et l'entreprise, par lien et code. Tant qu'**aucune signature** n'est donnée, vous pouvez modifier le stage ; **toute modification retire la convention envoyée** et il faut l'envoyer de nouveau. Quand les deux parties ont signé, edPage contre-signe (**Contre-signer le stage** en mode manuel).

Le nom de l'entreprise est repris dans l'évaluation du stage par le jury. Un stage sans convention reste possible : le jury saisit alors l'entreprise à la main.

## Changer de cohorte (force majeure)

**Changer de cohorte (force majeure)** déplace un apprenant sur justificatif : saisissez le **motif et le justificatif** (par exemple « certificat médical du 12 mars »). Il passe à la session suivante du même programme, ses paiements sont conservés, sans nouvelle facture ni attestation partielle.

Après la signature, tout changement de cohorte **remplace la convention** : l'ancienne est conservée, l'inscription repasse en attente de signature, et une nouvelle convention, au même prix et au même format, est à signer. L'apprenant est prévenu.

## Enregistrer un abandon

**Enregistrer un abandon** met fin à l'inscription. Choisissez le motif :

- **Abandon volontaire** ;
- **Désinscription pour impayé** (après J+30, faute de régularisation).

Une note est facultative. La place est libérée et l'apprenant sort de l'effectif. Aucun avoir n'est émis : les tranches non encore facturées ne le seront plus, les factures déjà émises restent dues. Si au moins un bloc est validé, vous pouvez délivrer une **attestation partielle** (voir [Résultats et certification](./resultats#l-attestation-partielle)).

## Les consentements

La colonne **Consentements** montre la réponse de chaque apprenant : « Réutilisation » et « Image », ou « En attente ». Les deux sont requises avant la signature. Un apprenant **mineur** est signalé : ses consentements et sa signature sont ceux de son représentant légal.
