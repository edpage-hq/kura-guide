---
layout: doc
---

# Catalogue et banques QCM

Le Coordinateur pédagogique tient le catalogue des formations et les questions du test d'admission. L'Administrateur peut faire la même chose. Tout se passe dans la rubrique **Formation**.

## Le catalogue

**Formation → Catalogue** liste les programmes (les « référentiels ») avec leur code, leur catégorie, leurs formats, leur durée et leur statut : **Brouillon**, **Publié** ou **Archivé**. Seul un programme publié est visible sur le site NextBoxx.

### Créer un programme

**Nouveau programme** demande un code, un titre, une catégorie et, pour la catégorie Parcours Métiers, s'il s'agit du **package Développement Web & Mobile** (700 h). Le code commence par le préfixe de la catégorie suivi de deux chiffres (par exemple `NB.FP.01`). **Le code, la catégorie et le package ne changent plus après la création** : le code est la clé définitive du programme.

Le contenu pédagogique se saisit **une fois par programme** : objectifs, méthodes pédagogiques, prérequis, logistique, et les **blocs de compétences** dans leur ordre d'enseignement, chacun avec sa durée en semaines (le total est comparé à la durée du programme). Chaque bloc porte le **code de son carnet de notes Sève** (`KURA-BLOC-{id}`), que les formateurs reportent dans Sève.

Les **formats** proposés sont à cocher : distanciel, hybride, présentiel.

### Publier, dépublier, archiver

| Action                        | Condition                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| **Publier**                   | Au moins un format, des objectifs et au moins un bloc. L'écran liste ce qui manque |
| **Dépublier** ou **Archiver** | Impossible si une cohorte ouverte, confirmée ou en cours en dépend                 |
| **Restaurer en brouillon**    | Pour un programme archivé                                                          |
| **Supprimer**                 | Seulement un brouillon jamais publié                                               |

### La grille tarifaire

Le prix n'est **jamais saisi librement** : il vient de la **grille tarifaire**, selon la catégorie et le format. **Formation → Catalogue → Grille tarifaire** montre les prix en vigueur (en FCFA, hors taxe) et permet de **programmer un changement** à partir d'une date. Un changement ne s'applique qu'aux **cohortes ouvertes après cette date** : il n'est jamais rétroactif, et une cohorte déjà ouverte garde ses prix.

## Les banques QCM

Le test d'admission puise dans une banque de **20 questions par programme**. **Catalogue → Banques QCM** donne l'état de chaque banque : **Validée**, **À valider** ou **Absente**. Sans banque validée, les candidats ne peuvent pas passer le test et **aucune cohorte de ce programme ne peut s'ouvrir**.

Seuls le Coordinateur pédagogique et l'Administrateur y ont accès. Les formateurs et les conseillers n'y accèdent pas.

### Importer

1. Téléchargez le **modèle** de la catégorie : un classeur `.xlsx` avec un onglet par programme non archivé, nommé par son code.
2. Remplissez chaque onglet : **exactement 20 lignes**, avec les colonnes `énoncé`, `choix_1` à `choix_4` et `réponse_correcte` (le numéro du bon choix, de 1 à 4).
3. Choisissez la catégorie, le classeur, puis **Importer**.

Chaque onglet est traité **indépendamment** : un onglet conforme crée un lot en brouillon, un onglet en erreur (structure incorrecte, code inconnu, 18 lignes au lieu de 20, réponse absente des choix) est rejeté seul, avec la **ligne et la colonne** fautives. Un rapport par onglet s'affiche. Le fichier n'est **jamais conservé**, en succès comme en échec : seul son nom est tracé.

### Valider

L'import et la validation sont **deux actions distinctes**. Ouvrez la banque du programme, relisez les questions, puis **Valider la banque**. Les questions des autres lots du programme sont alors retirées du tirage (elles restent en base).

- Un **nouvel import** ne remplace jamais une banque validée : il crée un lot à valider, et **l'ancienne banque reste en service** jusqu'à la validation du nouveau lot. On peut ainsi réimporter un seul onglet pour corriger un programme.
- **Modifier une question validée** la repasse « À valider » : la banque doit être validée à nouveau pour être utilisée.

La banque est à relire **chaque année**.
