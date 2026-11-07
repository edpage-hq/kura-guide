---
layout: doc
---

# Les cohortes

Une cohorte est une session programmée d'un programme, rattachée à une promotion. Elle a **15 apprenants au plus** et peut mêler les trois formats : le format et le prix sont portés par chaque inscription, pas par la cohorte.

## Ouvrir une cohorte

**Formation → Cohortes → Ouvrir une cohorte.** Le formulaire liste les programmes et indique, pour chacun, ce qui l'empêche d'ouvrir :

- programme **non publié** ;
- **banque QCM non validée** ;
- **prix manquant** dans la grille pour un format proposé.

Renseignez ensuite :

|                       |                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Promotion et année    | Baobab (septembre), Iroko (décembre), Acacia (mars) ou Karité (juin). Une seule cohorte par programme, promotion et année           |
| Dates                 | Début et fin. La fin au plus tôt à la durée du programme (25 ou 12 semaines) ; le temps partiel l'allonge, saisissez la date réelle |
| Profil de rythme      | Temps plein ou temps partiel, à titre indicatif                                                                                     |
| Formateurs principaux | Au moins un. Obligatoire                                                                                                            |
| Coachs-tuteurs        | Facultatifs                                                                                                                         |

À l'ouverture, **les prix de la grille sont figés** sur la cohorte. La mi-parcours et les dates des trois échéances (30/40/30) sont **calculées**, jamais saisies : 30 % au début (ou à la signature si elle est postérieure), 40 % à la mi-parcours, 30 % à la fin.

## Le cycle de vie

| Statut                    | Ce qui le provoque                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| **Ouverte**               | À l'ouverture                                                                                       |
| **Confirmée**             | Vous cliquez sur **Confirmer**                                                                      |
| **En cours**              | Automatiquement, à la date de début d'une cohorte confirmée                                         |
| **Terminée**              | Automatiquement, après sa date de fin. Ses inscriptions actives et suspendues passent « terminées » |
| **Reportée**, **Annulée** | Vous le décidez, avant le démarrage                                                                 |

Dates, rythme et encadrement restent modifiables **jusqu'au démarrage** ; les prix figés ne changent pas.

### Reporter ou annuler

Un **report** ou une **annulation** n'est possible qu'avant le démarrage, avec un **motif obligatoire**, et la décision est **définitive** et journalisée.

- **Report** : vous choisissez la **cohorte de remplacement**, une cohorte à venir du même programme, avec une place et un prix pour chaque apprenant. Toutes les inscriptions non abandonnées y passent.
- **Annulation** : les inscriptions passent « sans cohorte ». Vous replacez chaque apprenant ou vous enregistrez son abandon.

Les conséquences financières suivent les règles de facturation (voir [Facturation](./facturation#si-une-cohorte-change-ou-est-annulee)).

## Le cours Sève de la cohorte

Sur la fiche de la cohorte, renseignez l'**identifiant du cours Sève**. Chaque apprenant y est inscrit dès sa première tranche payée ; sans identifiant, ses inscriptions attendent. Il est aussi nécessaire pour que les classes virtuelles et les notes remontent dans Kura.

## Les zones de rentabilité

Kura classe chaque cohorte selon son **effectif confirmé** (les inscriptions signées) :

| Zone        | Effectif par défaut |
| ----------- | ------------------- |
| Fragile     | Moins de 7          |
| Viable      | 7 à 11              |
| Confortable | 12 à 15             |

L'Administrateur règle les seuils par catégorie. Une cohorte qui démarre **fige sa zone** avec son effectif : un changement de seuil ne touche que les cohortes à venir.

### Le tableau de bord de rentabilité

**Formation → Rentabilité** présente les cohortes ouvertes et confirmées, avec :

- leur zone et leur effectif face aux seuils ;
- les **recettes signées**, et celles en attente de signature ;
- le **coût de l'encadrement** et la part couverte par les recettes ;
- une cohorte **« À décider »** : fragile à moins d'une semaine du démarrage, placée en tête.

En zone fragile, le tableau recommande d'envisager un report. **Il ne déclenche rien** : la décision vous revient.

## La fiche de la cohorte

La fiche rassemble le calendrier, l'échéancier, les prix figés, le cours Sève, l'encadrement, les apprenants (avec le repère « Pas de droit à l'image »), et des liens vers la **présence** et les **résultats**.

Le panneau **Documents** génère à la demande :

- le **calendrier prévisionnel** (pour tous ceux qui voient la cohorte) ;
- le **rapport d'activité** : places, présence, résultats (pour vous et l'Administrateur) ;
- le **PV de soutenance**, voir [Résultats et certification](./resultats).
