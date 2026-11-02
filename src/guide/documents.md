---
layout: doc
---

# Documents générés

Le module 32 rassemble tous les documents produits par Kura. Il n'existe pas de table `document_genere` : chaque document est lu **là où il est rangé**, dans sa table métier, et « Mes documents » en dresse la liste pour un compte.

## Le catalogue

| Document                    | Référence           | Généré quand                                     | Signataires                                           |
| --------------------------- | ------------------- | ------------------------------------------------ | ----------------------------------------------------- |
| Convention de formation     | `CONV-NB-AAAA-XXX`  | Contre-signature edPage                          | Apprenant (ou représentant légal), edPage             |
| Convention tripartite       | `CONVT-NB-AAAA-XXX` | Après la convention, si un financeur est désigné | Apprenant, financeur, edPage                          |
| Convention de stage         | `CONVS-NB-AAAA-XXX` | À l'envoi par le Coordinateur                    | Apprenant (ou représentant légal), entreprise, edPage |
| Livret d'accueil            | `LA-NB-AAAA-XXX`    | Paiement complet de la 1re tranche               | Aucune signature                                      |
| Facture                     | `FAC-NB-AAAA-XXX`   | Émission de la tranche                           | —                                                     |
| Avoir                       | `AV-NB-AAAA-XXX`    | Annulation ou remboursement                      | —                                                     |
| Certificat                  | `CERT-NB-AAAA-XXX`  | Délivrance par le Coordinateur                   | Président du jury                                     |
| Attestation partielle       | `ATP-NB-AAAA-XXX`   | Abandon avec au moins un bloc validé             | Coordinateur                                          |
| Relevé de compétences       | `REL-NB-AAAA-XXX`   | Avec le certificat ou l'attestation              | Coordinateur                                          |
| Lettre de décision          | —                   | Décision rendue                                  | —                                                     |
| Calendrier de cohorte       | —                   | À la demande                                     | —                                                     |
| Rapport d'activité          | —                   | À la demande                                     | —                                                     |
| Procès-verbal de soutenance | `PVS-NB-AAAA-XXX`   | Décisions du jury confirmées                     | Jury                                                  |

Tous les PDF sont générés côté serveur avec `barryvdh/laravel-dompdf`, stockés sur un disque **privé** et protégés par une empreinte SHA-256. Une facture ou un certificat émis ne se réédite pas : il se corrige par un avoir ou un remplacement.

## Conventions

### Convention de formation

Le Coordinateur publie le texte des conditions générales en **versions immuables**. Une nouvelle version ne vaut que pour les signatures suivantes ; chaque convention signée garde la sienne. Sans texte publié, aucune signature n'est possible.

Kura ajoute les conditions particulières : parties, référentiel, cohorte, format, prix HT et échéancier 30/40/30 aux dates de la cohorte. La signature est ouverte quand le dossier est complet (cohorte, consentements).

### Convention tripartite

Préparée à la contre-signature d'une convention de formation avec financeur, dont elle reprend les mentions. Le financeur la signe par code depuis « Apprenants financés » ; edPage contre-signe selon le réglage de l'Administrateur. Elle ne bloque ni l'inscription ni la facturation.

### Convention de stage

Le Coordinateur saisit l'entreprise d'accueil, son contact signataire, le Coach-Tuteur qui encadre le stage, les dates et la mission, modifiables jusqu'à la première signature. À l'envoi :

- l'apprenant signe par code dans son compte (son représentant légal par un lien de 7 jours s'il est mineur) ;
- l'entreprise signe par un lien de 7 jours et un code, sans compte ;
- edPage contre-signe ensuite.

Le jury reprend le nom de l'entreprise dans les décisions de soutenance.

## Signature électronique

| Mécanisme         | Règle                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------- |
| Code de signature | 6 chiffres, envoyé par email, valable 15 minutes, 5 essais, usage unique, stocké hashé      |
| Lien public       | Usage unique, valable 7 jours, stocké hashé, remplacé par tout nouveau lien                 |
| Limite d'envoi    | 5 codes par minute et par route                                                             |
| Scellement        | Empreinte SHA-256 du PDF signé, conservée avec le document                                  |
| Contre-signature  | Automatique au nom du représentant edPage, ou manuelle par le Coordinateur selon le réglage |
| Journalisation    | Signature et contre-signature horodatées, avec nom, email, IP et navigateur                 |

Un mineur ne signe jamais lui-même : son représentant légal reçoit un lien distinct de celui des consentements, et le code part à son adresse.

## Livret d'accueil et documents de cohorte

- Le **livret d'accueil** est généré après le paiement complet de la première tranche, un par convention. Il est envoyé par email et téléchargeable par l'apprenant et le Coordinateur. Un changement de cohorte en produit un nouveau ; l'ancien est conservé.
- Le **calendrier de cohorte** liste blocs, dates clés, échéances, jours de jury et jours fériés. Il est disponible à la demande pour qui voit la cohorte.
- Le **rapport d'activité** (places, présence, résultats) est réservé au Coordinateur et à l'Administrateur.
- Le **procès-verbal de soutenance** est produit par la personne qui saisit le jury, une fois la soutenance de chaque apprenant confirmée. Il est scellé et conservé ; il n'est régénéré que si les décisions du jury ont été corrigées, et le nouveau remplace l'ancien, qui reste consultable.

## Accès aux documents

| Acteur              | Voit                                                                                           |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| Apprenant           | Ses conventions, livret, factures, avoirs, certificat, attestation, relevé, lettre de décision |
| Coordinateur        | Les mêmes documents depuis la gestion des comptes et les pages métier                          |
| Financeur           | La convention tripartite et les factures de sa part                                            |
| Entreprise de stage | La convention de stage, par lien, sans compte                                                  |
| Représentant légal  | Les consentements, la convention et la convention de stage, par lien                           |
| Direction           | Les documents agrégés dans les tableaux de bord, sans pièces individuelles                     |

Les documents sont disponibles en français et en anglais, dans la langue du destinataire.

## Conservation

| Document                           | Durée          |
| ---------------------------------- | -------------- |
| Conventions, factures, avoirs      | 10 ans (OHADA) |
| Certificats, attestations, relevés | Sans limite    |
| Procès-verbaux de soutenance       | Sans limite    |

## Technique

- `App\Services\Documents\DocumentLibrary` recense les documents d'un compte.
- `App\Http\Controllers\Documents\*` sert « Mes documents » et les documents d'un compte.
- `App\Http\Controllers\Cohorts\CohortDocumentController` produit calendrier, rapport d'activité et procès-verbaux.
- `App\Concerns\SealsPdf` calcule et vérifie les empreintes.
- Les vues PDF vivent dans `resources/views/pdf`, avec les modèles A et B des annexes.
