---
layout: doc
---

# Suivi et contrôle

## La synchronisation Sève

**Administration → Synchronisation Sève** montre les appels que Kura envoie à Sève : ouverture du compte, statut du compte (actif, suspendu, Canopé), inscription au cours, retrait du cours.

Chaque appel est **en attente**, **en échec** ou **envoyé**. Les appels d'un même compte partent **dans l'ordre** : un appel en échec retient les suivants de ce compte.

- Un échec est **réessayé** automatiquement, à des intervalles de plus en plus espacés. La page indique le nombre d'essais et le prochain.
- Au **cinquième échec** d'un appel, les Administrateurs sont **alertés**.
- **Réessayer** relance un appel sans attendre.
- Un compte que Moodle connaît déjà est retrouvé, pas créé en double.
- Tant que Sève n'est pas configuré, les appels attendent, et la page l'indique.

Si un apprenant dit ne pas avoir accès à Sève, c'est ici que l'on regarde si son ouverture de compte ou son inscription au cours est bloquée. Un apprenant n'est inscrit à un cours que si le Coordinateur a renseigné **l'identifiant du cours Sève de la cohorte**.

## Le journal d'audit

**Administration → Journal d'audit** conserve toutes les **actions sensibles**, dans l'ordre : validations et retraits de rôles, transformations de comptes, modifications d'utilisateurs, changements de consentements, signatures, délivrances de certificats, corrections de présence, etc.

Chaque entrée porte sa date, son **action**, son **auteur** (ou « Système »), sa **cible**, le **canal** et les **détails** (valeurs avant et après). Filtrez par action ou par auteur.

**Le journal ne peut pas être modifié** : aucune entrée ne s'efface ni ne se corrige. Les actions des comptes à privilèges (Coordinateur, Direction, Administrateur) sur les comptes et les rôles y sont toujours consignées.

## Les envois et les échecs de notification

Le **journal des envois** de **Formation → Communication** montre ce que le moteur de notifications a envoyé, canal par canal, avec les échecs (voir [Communication](../coordinateur/communication#le-journal-des-envois)). Un échec d'un canal n'empêche pas les autres.
