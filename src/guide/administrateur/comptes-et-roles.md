---
layout: doc
---

# Comptes et rôles

L'Administrateur a accès à toute l'application. Sa rubrique **Administration** regroupe la gestion des comptes, des rôles et des réglages.

## Les demandes de rôle

**Administration → Demandes de rôle** est l'écran des personnes qui valident des rôles ; l'Administrateur peut tous les valider, en plus de l'acteur désigné pour chacun, afin qu'aucune demande ne reste bloquée par un poste vacant.

| Rôle                                                    | Valide en principe                            |
| ------------------------------------------------------- | --------------------------------------------- |
| Formateur Principal, Coach-Tuteur                       | Coordinateur pédagogique                      |
| Conseiller admissions, Chargés, Direction, Coordinateur | Administrateur                                |
| Financeur                                               | Chargé de partenariats                        |
| Financeur d'événement                                   | Chargé d'événements                           |
| Porteur de projet                                       | Chargé d'incubation, à la rétention du projet |

L'écran comporte :

- **En attente de décision** : chaque demande avec le message de la personne. **Valider** active le rôle aussitôt et prévient la personne par e-mail ; **Refuser** exige un **motif**, envoyé par e-mail. Un refus ne touche pas les autres rôles de la personne ;
- **Titulaires** : les comptes qui ont un rôle que vous validez, avec la date et l'auteur de la validation, **Retirer** (avec un motif) ;
- **Attribuer un rôle** directement à un compte existant, sans demande préalable.

Personne ne décide de ses **propres demandes** et ne retire **son propre rôle**.

## Les utilisateurs

**Administration → Utilisateurs** liste les comptes, que l'on cherche par nom ou e-mail, filtre par rôle, et **exporte en CSV** (en respectant la recherche en cours). Pour chacun : ses rôles, son statut, son état de vérification et sa **dernière connexion**.

- **Nouvel utilisateur** crée un compte, par exemple pour un membre du personnel, avec ses rôles. À la création, vous attribuez n'importe quel rôle, même un rôle que quelqu'un d'autre valide en principe. Un nouveau compte ne peut pas être Financeur, car c'est un compte individu.
- **Modifier** met à jour le nom, l'e-mail, le téléphone (au format international) et, si vous le souhaitez, le mot de passe ; le champ vide conserve l'actuel. Chaque modification est **journalisée**. **Gérer les rôles** renvoie aux demandes de rôle.
- **Supprimer** retire définitivement le compte. Vous ne pouvez pas supprimer **votre propre compte** depuis ce panneau.

### Les statuts d'un compte

| Statut    | Signification                                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| Actif     | Compte normal                                                                                                         |
| Suspendu  | Impayé après J+30 : aucune action payante, quel que soit le module, et plus d'accès à Sève. Le paiement rétablit tout |
| Canopé    | Ancien apprenant certifié                                                                                             |
| Désactivé | Inactif depuis un an : les données sont conservées et le compte se réactive à la prochaine connexion                  |

## Les comptes organisation

**Administration → Comptes organisation** liste les demandes de transformation d'un compte individu en compte organisation, **à l'Administrateur seul**.

- **En attente de décision** : le compte, la raison sociale demandée, le **justificatif** (RCCM ou équivalent, à télécharger), le message de la personne.
- **Valider** : le compte prend la raison sociale comme **nom**, l'**ancien nom est conservé** dans la demande et dans le journal, et la personne est prévenue. Son historique reste consultable en lecture seule.
- **Refuser** : un **motif** est obligatoire, envoyé par e-mail ; le compte reste inchangé et peut redemander.

Vous ne décidez pas votre propre demande. Un compte qui a déjà une demande en cours ne peut pas en déposer une seconde, et un compte organisation ne peut pas en redemander.
