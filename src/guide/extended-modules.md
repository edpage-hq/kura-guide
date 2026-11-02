---
layout: doc
---

# Activités élargies

Les modules 19 à 28, 30, 31 et 33 prolongent le socle sans le conditionner. Ils s'adressent à des populations et des acteurs distincts, mais réutilisent les mêmes comptes, la même facturation et les mêmes documents.

## Formation B2B sur devis (module 19)

Une entreprise demande une formation pour ses salariés depuis le site NextBoxx (API) ou depuis « Mes demandes entreprise ». La demande `DEM-NB` porte la raison sociale, le référentiel, le format, l'effectif et la date souhaitée.

1. Le **Coordinateur pédagogique** envoie un devis `DEV-NB` en PDF : référentiel, format, effectif, dates, rythme, montant total. Au-delà de 15 apprenants, une cohorte par tranche de 15.
2. Le contact accepte ou refuse le devis dans son espace ; le Coordinateur peut enregistrer l'acceptation pour lui.
3. À l'acceptation, les **cohortes dédiées** sont ouvertes au nom de l'entreprise, sans promotion, et une **facture unique** du montant du devis est émise, échue au premier jour de la formation.
4. Le contact ou le Coordinateur ajoute les salariés dans la limite des 15 places. Compte créé ou réutilisé, inscription active d'emblée, rôle Apprenant, livret et accès Sève. Ni candidature, ni convention, ni facture individuelle.

En cas d'impayé, les inscriptions des cohortes dédiées et leur accès Sève sont suspendus à J+30, puis rétablis au paiement. La condition « soldé » d'un apprenant B2B est la facture de la demande payée.

## Mise en relation et recrutement (modules 23 à 26)

Une organisation dépose une demande de **mise en relation** (stage, alternance, mission) ou de **recrutement** (CDI, CDD) depuis « Mes demandes entreprise ». Le formulaire n'affiche que les champs du type choisi.

- Seul un titulaire d'un **certificat NextBoxx** peut se rendre visible des entreprises, avec un CV PDF et une présentation courte.
- Le **Chargé de partenariats** propose des profils visibles, en une ou plusieurs fois.
- L'organisation voit le prénom et l'initiale du nom, les certificats et la présentation. Un profil retenu révèle le nom, l'email, le téléphone et le CV, et l'apprenant est prévenu.
- Dès qu'un profil est retenu, le Chargé confirme la mise en relation : une facture est émise au contact, échue à 30 jours, par profil retenu, avec le forfait de mise en relation et, si demandé, le forfait d'accompagnement.
- Sans les deux forfaits fixés par l'Administrateur, la confirmation est impossible. L'impayé suit les relances et le moratoire, sans suspension.

## Événements (modules 20 à 22)

Le **Chargé d'événements** et l'Administrateur créent un événement (intitulé, présentation, dates, lieu, places, tarif en FCFA, 0 pour gratuit), le publient, le modifient et l'annulent tant qu'il n'a pas commencé. Statuts : **brouillon**, **publié**, **annulé**.

- Inscription par le site (API) ou depuis « Mes événements » ; rôle **Participant** ajouté.
- Refus pour un compte organisation, un compte déjà inscrit, un événement fermé, ou un compte suspendu sur un événement payant.
- Les inscriptions confirmées et en attente de paiement tiennent une place ; au-delà, **liste d'attente**. Une place libérée passe au premier inscrit, qui est prévenu.
- Événement payant : facture `FAC-NB` à l'inscription, échue **48 h avant le début**. Le paiement complet confirme. Sans paiement à 48 h, l'inscription est annulée, le reste dû annulé par avoir, et la place libérée.
- Un événement gratuit confirme immédiatement et prend des inscriptions jusqu'à son début.
- Annulation : chaque inscrit est prévenu ; le payé est remboursé par avoir, le reste dû annulé.

Les factures d'événement n'entrent ni dans le calendrier de facturation, ni dans les relances de formation, ni dans les commissions, ni dans les tableaux de bord Direction et Reporting.

## Financement des événements (modules 27 et 28)

Un **Financeur d'événement** déclare un apport depuis « Mes financements » : événement, nature (financier, en nature, autre), description, montant en FCFA. Le Chargé d'événements peut aussi saisir un apport pour un compte, même après la fin.

- Un apport reste **déclaré** jusqu'à la validation du Chargé, qui constate sa réception avec la date. Il n'est jamais compté automatiquement.
- Le Chargé peut le refuser avec un motif. Aucune facture n'est émise.
- La validation émet la **convention de financement** `CONVE-NB-AAAA-XXX`, envoyée au financeur, sans signature électronique.
- Le Chargé saisit les **dépenses** de l'événement (libellé, montant, date, justificatif facultatif). Il peut les corriger ou les supprimer.
- **Solde net** = apports reçus − dépenses. Le financeur voit le total de ses apports, les dépenses de l'événement et le solde net, sans le détail des autres financeurs.
- À l'annulation de l'événement, les apports déclarés sont annulés ; les apports reçus restent au bilan et leur financeur est prévenu.

## L'Éclosion (modules 30 et 31)

Le **Chargé d'incubation** crée un cycle en brouillon (titre, clôture des dépôts, début et fin), puis l'ouvre. Les dépôts ferment au plus tard au début de l'incubation.

- Tout compte candidate une fois par cycle : nom du projet, secteur, problème, solution, avancement, pitch PDF facultatif. La voie **Canopé** n'est proposée qu'à un compte au statut Canopé ; les autres candidatent comme porteur externe.
- Le Chargé saisit les **lauréats de concours** pour leur compte, avec le nom et l'année du concours.
- Le Chargé **retient** ou **refuse** avec un motif. Un projet retenu donne le rôle **Porteur de projet**.
- Le Chargé propose une **participation** : capital ou chiffre d'affaires, pourcentage et conditions.
- Le **comité d'investissement** vote à l'unanimité : la proposition vaut vote du Chargé, puis le Coordinateur pédagogique et la Direction votent, chacun depuis un compte différent. Un vote contre motive un refus ; une nouvelle proposition peut alors être faite.

## Partenariats technologiques (module 33)

Le **Chargé de partenariats** ou l'Administrateur saisit un partenariat en négociation : organisation, solution, nature (intégration pédagogique, certification, fourniture d'outils), référentiels concernés, contact signataire, date de fin facultative.

- Le partenariat est **gratuit**, en échange d'une visibilité. Il ne se confond pas avec un partenaire marketing, qui est facturé.
- Le contrat se signe comme la Convention : lien email de 7 jours, lecture complète, code reçu à la même adresse, sans compte. edPage contre-signe selon le réglage de l'Administrateur.
- À la contre-signature, le contrat reçoit sa référence `CONVP-NB-AAAA-XXX` et son PDF scellé ; le partenariat devient **actif** et ses référentiels sont figés.
- La visibilité (logo, lien, présentation, nature) reste modifiable et s'affiche sur le site et dans le bloc « Partenaires » du cours Sève des cohortes concernées, mis à jour chaque heure.
- Le partenariat prend fin le lendemain de sa date de fin. Une cohorte concernée le garde jusqu'à sa propre fin si elle a commencé.

## Notifications

Un moteur unique (email, Sève, WhatsApp) envoie tous les rappels et alertes. L'email part toujours ; Sève s'ajoute pour les comptes ouverts dans Sève ; WhatsApp s'ajoute pour les rappels de paiement et d'admission, si le compte a un numéro. Un canal en échec n'empêche pas les autres.

Les déclencheurs couvrent le paiement, l'admission, les rôles, la certification, la présence, la formation B2B, la mise en relation, les événements, le financement d'événement, les partenariats et les documents générés. Le détail est dans [Intégrations](/guide/integrations#notifications).
