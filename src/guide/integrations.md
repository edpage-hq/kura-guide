---
layout: doc
---

# Intégrations

Kura est au centre de trois flux : le site NextBoxx lui **envoie** des candidatures, demandes et inscriptions ; Sève lui **délivre** l'identité et reçoit ses changements ; WhatsApp et PayGate complètent les notifications et les paiements.

## API du site NextBoxx

Le site appelle Kura **depuis son serveur**, jamais depuis le navigateur, avec une clé d'API dédiée dans l'en-tête `Authorization: Bearer <clé>`. La clé est `NEXTBOXX_SITE_API_KEY` côté Kura, `KURA_SITE_API_KEY` côté site. Limite : 60 requêtes par minute.

| Méthode | Endpoint                            | Effet                                                                              |
| ------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| `POST`  | `/api/candidatures`                 | Crée ou réutilise le compte, ouvre la candidature, renvoie `tracking_token`        |
| `GET`   | `/api/candidatures/status`          | État d'un dossier à partir du `tracking_token`, sans rapatrier les données         |
| `GET`   | `/api/events`                       | Événements publiés à venir, avec places restantes et date limite de paiement       |
| `POST`  | `/api/events/{event}/registrations` | Inscrit un participant, confirme, met en attente de paiement ou en liste d'attente |
| `POST`  | `/api/company-requests`             | Dépose une demande de formation B2B                                                |
| `GET`   | `/api/partnerships`                 | Partenariats technologiques actifs, par référentiel                                |

Codes de réponse notables :

- `401` : clé absente ou invalide.
- `409` : `COOLING_OFF` (redépôt trop tôt après un refus), `CANDIDATURE_IN_PROGRESS`, `EVENT_CLOSED`, `ALREADY_REGISTERED`, `ACCOUNT_SUSPENDED`.
- `422` : validation (référentiel inconnu ou non publié, format non proposé, code apporteur invalide…).

Une réponse acceptée est copiée dans le CMS du site avec son identifiant ; en cas d'erreur, le site ne conserve rien et le candidat resoumet.

## OAuth2 / OpenID Connect pour Sève

Kura est le fournisseur d'identité. Sève ne stocke aucun mot de passe Moodle.

| Endpoint                | Rôle                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| `GET /oauth2/authorize` | Redirige vers la connexion Kura, puis vers Sève avec un code                             |
| `POST /oauth2/token`    | Échange le code contre un jeton d'accès (1 h) et un jeton de rafraîchissement (30 jours) |
| `GET /oauth2/userinfo`  | Renvoie `sub`, `email`, `email_verified`, `name`, `given_name`, `family_name`            |

- Client enregistré par `php artisan seve:client`, avec l'URL de retour `{SEVE_URL}/admin/oauth2callback.php`. Le secret n'est affiché qu'une fois.
- Seuls les comptes `actif` ou `canope` peuvent se connecter ; un compte `suspendu` reçoit `403`.
- Pas de jeton d'identité OpenID Connect : Moodle lit `userinfo` et rapproche les comptes par email.
- Les clés OAuth (`storage/oauth-*.key`) sont critiques : les perdre déconnecte tous les utilisateurs de Sève.

## Web services Sève

Kura appelle Sève ; Sève n'appelle pas Kura. Les appels passent par un service externe « Intégration Kura », avec le token d'un compte de service (`SEVE_WS_TOKEN`), en REST.

### Provisionnement

| Fonction Moodle                | Déclencheur                                                                        |
| ------------------------------ | ---------------------------------------------------------------------------------- |
| `core_user_create_users`       | Première tranche payée, toutes parts comprises — `auth=oauth2`, sans mot de passe  |
| `core_user_update_users`       | Changement de statut : suspension, réactivation, Canopé                            |
| `enrol_manual_enrol_users`     | Inscription au cours de la cohorte, ou au cours Parcours Canopé à la certification |
| `enrol_manual_unenrol_users`   | Abandon, ou bascule Canopé                                                         |
| `core_user_get_users_by_field` | Retrouver un compte Moodle par email, pour rendre un rejeu idempotent              |

Les changements passent par une **file rejouable** (`integration_events`). Un échec reste en attente avec son erreur ; l'Administrateur est alerté au 5e échec. `seve:sync` envoie la file chaque minute, dans l'ordre pour un même compte.

### Partenaires et messages

| Fonction                                                 | Déclencheur                                                                                    |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `core_course_get_courses` / `core_course_update_courses` | `seve:partners`, chaque heure : bloc « Partenaires » du résumé du cours, sans toucher au reste |
| `core_message_send_instant_messages`                     | Annonce ou rappel à un compte ayant un identifiant Moodle                                      |

### Remontée

| Fonction                                                   | Alimente                          | Fréquence                 |
| ---------------------------------------------------------- | --------------------------------- | ------------------------- |
| `core_completion_get_course_completion_status`             | Progression                       | Planifiée                 |
| `gradereport_user_get_grade_items`                         | Notes par bloc (`KURA-BLOC-{id}`) | `seve:pull`, chaque heure |
| `core_course_get_contents` + `mod_attendance_get_sessions` | Présence                          | `seve:pull`, chaque heure |

Correspondance des statuts de présence : `P` présent ; `L` ou `R` retard ; `A`, `E` et tout autre absent. Une absence excusée reste une absence pour le seuil de 30 %.

## WhatsApp Business Cloud API

`POST https://graph.facebook.com/{WHATSAPP_API_VERSION}/{WHATSAPP_PHONE_NUMBER_ID}/messages`, avec `Authorization: Bearer {WHATSAPP_TOKEN}`. Message de type `template`, dans la langue du destinataire (`fr` ou `en`).

| Modèle                      | Notification                       |
| --------------------------- | ---------------------------------- |
| `kura_invoice_reminder`     | Rappel d'échéance (J-15, J-7, J-1) |
| `kura_invoice_unpaid`       | Rappel J+1                         |
| `kura_invoice_overdue`      | Passage en retard et moratoire     |
| `kura_access_suspended`     | Suspension J+30                    |
| `kura_access_restored`      | Réactivation                       |
| `kura_candidature_admitted` | Décision « admis »                 |
| `kura_candidature_refused`  | Décision « refusé »                |
| `kura_candidature_overdue`  | Étape de candidature en retard     |

Tant que `WHATSAPP_TOKEN` et `WHATSAPP_PHONE_NUMBER_ID` sont vides, les messages partent uniquement par email. Un échec WhatsApp n'empêche pas l'email.

## Notifications

Un moteur unique, trois canaux :

| Canal    | Quand                                                           |
| -------- | --------------------------------------------------------------- |
| Email    | Toujours                                                        |
| Sève     | Comptes ouverts dans Sève (message Moodle du compte de service) |
| WhatsApp | Rappels de paiement et d'admission, si le compte a un numéro    |

Chaque envoi est enregistré dans `notification_deliveries` (destinataire, type, canal, statut, erreur, date). Le journal est filtrable par canal et statut, avec le nombre d'échecs des 30 derniers jours.

Déclencheurs : paiement (J-15/J-7/J-1, J+1, retard, suspension, réactivation), admission (entretien, test, décision), rôles, certification, présence, formation B2B, mise en relation, événements, financement d'événement, partenariats et documents générés.

## Paiement en ligne (prévu)

PayGate (Flooz, T-Money) est le prestataire retenu par l'ADR-006. Le contrat prévoit un retour sur `POST /api/paiements/callback`, qui mettra à jour la facture et le paiement, puis déclenchera les effets : provisionnement Sève quand toutes les parts de la première tranche sont payées, levée de suspension, commission d'apporteur.

Tant que ce branchement n'est pas fait dans `kura-web`, les paiements sont saisis manuellement par le Coordinateur et aucun appelant externe ne touche aux factures.

## Commandes et planification

| Commande                       | Fréquence     | Rôle                                                     |
| ------------------------------ | ------------- | -------------------------------------------------------- |
| `seve:sync`                    | Chaque minute | Envoie les changements en attente vers Sève              |
| `seve:pull`                    | Chaque heure  | Relit présence et notes des cohortes en cours            |
| `seve:partners`                | Chaque heure  | Met à jour le bloc « Partenaires » des cours             |
| `billing:run`                  | Quotidienne   | Émet les tranches dues, relance, moratoires, suspensions |
| `events:run`                   | Horaire       | Annule les inscriptions non payées à 48 h                |
| `cohorts:advance`              | Quotidienne   | Démarre et termine les cohortes                          |
| `candidatures:remind`          | Quotidienne   | Relance les étapes de candidature en retard              |
| `candidatures:anonymize`       | Quotidienne   | Anonymise les candidatures refusées depuis 12 mois       |
| `accounts:deactivate-inactive` | Quotidienne   | Désactive les comptes inactifs depuis un an              |
| `partnerships:end`             | Quotidienne   | Termine les partenariats échus                           |
| `passport:purge`               | Quotidienne   | Purge les jetons OAuth expirés                           |
