---
layout: doc
---

# Parcours apprenant

De la candidature au Parcours Canopé, voici le chemin complet d'un apprenant dans Kura. Chaque étape est déclenchée par un acteur identifié et laisse une trace.

```text
Site NextBoxx
    │  dépôt (API)
    ▼
Candidature ──► Entretien ──► Test QCM ──► Décision
                                              │ admis
                                              ▼
                                        Inscription
                                              │
                        consentements ──► Convention ──► 1re tranche
                                              │              │
                                              │              ├─► compte Sève
                                              │              └─► livret d'accueil
                                              ▼
                                 Formation (Sève) · présence · notes
                                              │
                        mi-parcours (40 %) ──► solde (30 %)
                                              │
                                              ▼
                                   Certificat ──► Canopé
```

## 1. Dépôt de la candidature

Le candidat choisit un référentiel publié et un format sur le site NextBoxx, puis dépose son dossier (motivation, pièces éventuelles, signalement de minorité, code apporteur facultatif). Le site transmet à Kura par API.

Kura crée ou réutilise le compte, attribue le rôle **Candidat** et ouvre la candidature. Le candidat reçoit un accusé de réception avec un lien pour choisir son mot de passe s'il est nouveau.

Une seule candidature en cours par compte, quel que soit le référentiel. Après un refus, un nouveau dépôt est possible au bout de **7 jours**, rattaché au même compte et lié à la précédente.

## 2. Entretien

Un Conseiller admissions prend le dossier dans la file partagée et en devient responsable. L'entretien est à mener sous **5 jours ouvrés** ; seul le conseiller responsable le clôt, avec un compte rendu interne. La clôture ouvre le test.

Les jours ouvrés vont du lundi au vendredi, hors jours fériés saisis par l'Administrateur. Une tâche quotidienne relance une fois chaque étape en retard.

## 3. Test d'admission

Le lien part à la clôture de l'entretien si la banque QCM du référentiel est validée. Caractéristiques :

- lien à usage unique, sans connexion, fenêtre de **48 h** pour commencer ;
- **2 tentatives**, **45 minutes** chacune à partir de l'ouverture ;
- **10 questions** tirées parmi les 20 validées ; la 2e tentative exclut celles de la 1re ;
- score affiché dès la soumission, **seuil indicatif de 60 %** (6/10) ;
- une tentative réussie clôt le test ; sinon il se clôt après la 2e.

Le score est indicatif : le dossier va en décision quel que soit le résultat. En cas de lien expiré, le Conseiller est relancé une fois, puis envoie un nouveau lien ou clôt le test.

## 4. Décision

Le conseiller responsable rend une **décision motivée sous 3 jours ouvrés** après le test. Le motif reste interne ; le candidat est prévenu par email.

| Décision   | Effet                                                                             |
| ---------- | --------------------------------------------------------------------------------- |
| **Admis**  | Rôle Apprenant, création de l'inscription, cohorte choisie ou placement ultérieur |
| **Refusé** | Dossier clos, sans paiement ni accès Sève ; conservé 12 mois puis anonymisé       |

La lettre de décision est générée et jointe à l'email, puis téléchargeable depuis « Mes candidatures ».

## 5. Inscription, consentements et convention

L'inscription naît à l'admission, au statut **en attente de signature**. Le Conseiller choisit une cohorte ouverte ou confirmée, pas encore commencée, avec une place et un tarif pour le format ; à défaut, le Coordinateur place l'apprenant avant la signature.

Avant de signer, l'apprenant :

- confirme ou change son **format** parmi ceux tarifés pour la cohorte ;
- donne **deux consentements distincts** : réutilisation pédagogique du projet tutoré et droit à l'image ;
- pour un mineur, fait signer son **représentant légal** par un lien email sans compte, valable 7 jours.

La Convention se signe avec un **code à 6 chiffres** reçu par email : valable 15 minutes, 5 essais, usage unique. La contre-signature edPage est automatique ou manuelle selon le réglage de l'Administrateur. Elle fige le format, la cohorte et le prix, active l'inscription et produit le PDF scellé `CONV-NB-AAAA-XXX`.

## 6. Première tranche et entrée dans Sève

Après la contre-signature, la première facture (30 %) est émise. Dès que **toutes les parts** de cette tranche sont payées — apprenant et financeur — Kura :

- provisionne le compte Sève (SSO, sans mot de passe Moodle) ;
- inscrit l'apprenant au cours de sa cohorte ;
- génère et envoie le **livret d'accueil** `LA-NB-AAAA-XXX`.

Une suspension ou une réactivation est répercutée sur Sève. Un changement de cohorte remplace la convention et produit un nouveau livret.

## 7. Formation, présence et résultats

L'apprenant suit sa formation sur Sève. La présence des séances virtuelles et les notes par bloc remontent dans Kura chaque heure. Le présentiel est saisi par un Formateur Principal.

- Alerte au Coordinateur et à l'apprenant au-delà de **30 % d'absence**.
- Notes sur 20 par bloc ; moyenne pondérée par la durée des blocs.
- Repêchage possible pour un bloc sous 10/20, 15 jours après la dernière note, 2 fois au plus.
- Projet tutoré, soutenance et stage saisis par le Coordinateur ; ces notes restent hors moyenne.

## 8. Facturation du parcours

Les tranches de 40 % (mi-parcours) et 30 % (fin) sont émises au fil de l'eau, 15 jours avant leur échéance, avec les rappels J-15, J-7 et J-1. Le détail de la chronologie d'impayé est dans [Facturation](/guide/billing).

## 9. Certificat et Parcours Canopé

Le certificat est délivré quand **les quatre conditions** sont réunies :

1. moyenne ≥ 10/20 ;
2. aucun bloc < 8/20 ;
3. soutenance validée ;
4. solde intégralement payé.

Aucune condition ne compense une autre. Le certificat `CERT-NB-AAAA-XXX` est figé, scellé par empreinte SHA-256 et signé au nom du président du jury. Sa délivrance termine l'inscription, retire l'apprenant du cours de sa cohorte, fait passer le compte au statut **Canopé** et l'inscrit au Parcours Canopé.

En cas d'interruption avec au moins un bloc validé, le Coordinateur délivre une **attestation partielle** `ATP-NB-AAAA-XXX`, jamais un certificat partiel. Un **relevé de compétences** accompagne le certificat ou l'attestation.

## Ce que voit l'apprenant

| Espace                         | Contenu                                                                |
| ------------------------------ | ---------------------------------------------------------------------- |
| Mes candidatures               | Étapes, décision, lettre de décision                                   |
| Mon inscription                | Cohorte, format, prix, convention, consentements                       |
| Mes documents                  | Conventions, livret, factures, avoirs, certificat, attestation, relevé |
| Mes factures                   | Échéances, paiements, PDF                                              |
| Mes rôles                      | Demandes de rôle et statut                                             |
| Mes événements                 | Inscriptions aux événements                                            |
| Mes projets / Mes financements | L'Éclosion et apports d'événement, selon les rôles                     |
