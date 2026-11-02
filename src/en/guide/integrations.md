---
layout: doc
---

# Integrations

Kura sits at the centre of three flows: the NextBoxx website **sends** it candidatures, requests and registrations; Sève **gets** its identity from Kura and receives its changes; WhatsApp and PayGate complete notifications and payments.

## NextBoxx website API

The website calls Kura **from its server**, never from the browser, with a dedicated API key in the `Authorization: Bearer <key>` header. The key is `NEXTBOXX_SITE_API_KEY` on Kura's side, `KURA_SITE_API_KEY` on the website's side. Limit: 60 requests per minute.

| Method | Endpoint                            | Effect                                                                         |
| ------ | ----------------------------------- | ------------------------------------------------------------------------------ |
| `POST` | `/api/candidatures`                 | Creates or reuses the account, opens the candidature, returns `tracking_token` |
| `GET`  | `/api/candidatures/status`          | Status of a file from the `tracking_token`, without pulling the data back      |
| `GET`  | `/api/events`                       | Published upcoming events, with remaining seats and payment deadline           |
| `POST` | `/api/events/{event}/registrations` | Registers a participant, confirms, puts on payment hold or on the waiting list |
| `POST` | `/api/company-requests`             | Submits a B2B training request                                                 |
| `GET`  | `/api/partnerships`                 | Active technology partnerships, by programme                                   |

Notable response codes:

- `401`: missing or invalid key.
- `409`: `COOLING_OFF` (resubmission too soon after a refusal), `CANDIDATURE_IN_PROGRESS`, `EVENT_CLOSED`, `ALREADY_REGISTERED`, `ACCOUNT_SUSPENDED`.
- `422`: validation (unknown or unpublished programme, format not offered, invalid referral code…).

An accepted response is copied into the website CMS with its identifier; on error, the website keeps nothing and the candidate resubmits.

## OAuth2 / OpenID Connect for Sève

Kura is the identity provider. Sève stores no Moodle password.

| Endpoint                | Role                                                                          |
| ----------------------- | ----------------------------------------------------------------------------- |
| `GET /oauth2/authorize` | Redirects to the Kura sign-in, then to Sève with a code                       |
| `POST /oauth2/token`    | Exchanges the code for an access token (1 hour) and a refresh token (30 days) |
| `GET /oauth2/userinfo`  | Returns `sub`, `email`, `email_verified`, `name`, `given_name`, `family_name` |

- Client registered by `php artisan seve:client`, with the return URL `{SEVE_URL}/admin/oauth2callback.php`. The secret is shown only once.
- Only `active` or `canope` accounts can sign in; a `suspended` account receives `403`.
- No OpenID Connect identity token: Moodle reads `userinfo` and matches accounts by email.
- The OAuth keys (`storage/oauth-*.key`) are critical: losing them signs every Sève user out.

## Sève web services

Kura calls Sève; Sève does not call Kura. Calls go through an external service “Kura Integration”, with the token of a service account (`SEVE_WS_TOKEN`), over REST.

### Provisioning

| Moodle function                | Trigger                                                                           |
| ------------------------------ | --------------------------------------------------------------------------------- |
| `core_user_create_users`       | First instalment paid, all shares included — `auth=oauth2`, without a password    |
| `core_user_update_users`       | Status change: suspension, reactivation, Canopé                                   |
| `enrol_manual_enrol_users`     | Enrolment in the cohort course, or in the Parcours Canopé course on certification |
| `enrol_manual_unenrol_users`   | Withdrawal, or switch to Canopé                                                   |
| `core_user_get_users_by_field` | Find a Moodle account by email, to make a replay idempotent                       |

Changes go through a **replayable queue** (`integration_events`). A failure stays pending with its error; the Administrator is alerted on the fifth failure. `seve:sync` sends the queue every minute, in order for a given account.

### Partners and messages

| Function                                                 | Trigger                                                                                        |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `core_course_get_courses` / `core_course_update_courses` | `seve:partners`, every hour: “Partners” block in the course summary, without touching the rest |
| `core_message_send_instant_messages`                     | Announcement or reminder to an account with a Moodle identifier                                |

### Pull

| Function                                                   | Feeds                               | Frequency               |
| ---------------------------------------------------------- | ----------------------------------- | ----------------------- |
| `core_completion_get_course_completion_status`             | Progress                            | Scheduled               |
| `gradereport_user_get_grade_items`                         | Per-block grades (`KURA-BLOC-{id}`) | `seve:pull`, every hour |
| `core_course_get_contents` + `mod_attendance_get_sessions` | Attendance                          | `seve:pull`, every hour |

Attendance status mapping: `P` present; `L` or `R` late; `A`, `E` and anything else absent. An excused absence remains an absence for the 30% threshold.

## WhatsApp Business Cloud API

`POST https://graph.facebook.com/{WHATSAPP_API_VERSION}/{WHATSAPP_PHONE_NUMBER_ID}/messages`, with `Authorization: Bearer {WHATSAPP_TOKEN}`. Message of type `template`, in the recipient's language (`fr` or `en`).

| Template                    | Notification                       |
| --------------------------- | ---------------------------------- |
| `kura_invoice_reminder`     | Due-date reminder (D-15, D-7, D-1) |
| `kura_invoice_unpaid`       | D+1 reminder                       |
| `kura_invoice_overdue`      | Overdue status and moratorium      |
| `kura_access_suspended`     | D+30 suspension                    |
| `kura_access_restored`      | Reactivation                       |
| `kura_candidature_admitted` | “Admitted” decision                |
| `kura_candidature_refused`  | “Refused” decision                 |
| `kura_candidature_overdue`  | Overdue candidature step           |

As long as `WHATSAPP_TOKEN` and `WHATSAPP_PHONE_NUMBER_ID` are empty, messages go out by email only. A WhatsApp failure does not block email.

## Notifications

A single engine, three channels:

| Channel  | When                                                               |
| -------- | ------------------------------------------------------------------ |
| Email    | Always                                                             |
| Sève     | Accounts opened in Sève (Moodle message from the service account)  |
| WhatsApp | Payment and admission reminders, if the account has a phone number |

Every delivery is recorded in `notification_deliveries` (recipient, type, channel, status, error, date). The log is filterable by channel and status, with the number of failures over the last 30 days.

Triggers: payment (D-15/D-7/D-1, D+1, overdue, suspension, reactivation), admission (interview, test, decision), roles, certification, attendance, B2B training, matching, events, event funding, partnerships and generated documents.

## Online payment (planned)

PayGate (Flooz, T-Money) is the provider chosen by ADR-006. The contract plans a callback on `POST /api/paiements/callback`, which will update the invoice and the payment, then trigger the effects: Sève provisioning when all shares of the first instalment are paid, suspension lifted, referrer commission.

Until that wiring exists in `kura-web`, payments are entered manually by the Coordinator and no external caller touches invoices.

## Commands and scheduling

| Command                        | Frequency    | Purpose                                                     |
| ------------------------------ | ------------ | ----------------------------------------------------------- |
| `seve:sync`                    | Every minute | Sends pending changes to Sève                               |
| `seve:pull`                    | Every hour   | Reads attendance and grades of running cohorts              |
| `seve:partners`                | Every hour   | Updates the “Partners” block of the courses                 |
| `billing:run`                  | Daily        | Issues due instalments, reminders, moratoriums, suspensions |
| `events:run`                   | Hourly       | Cancels registrations unpaid at 48 hours                    |
| `cohorts:advance`              | Daily        | Starts and completes cohorts                                |
| `candidatures:remind`          | Daily        | Reminds about overdue candidature steps                     |
| `candidatures:anonymize`       | Daily        | Anonymises candidatures refused 12 months ago               |
| `accounts:deactivate-inactive` | Daily        | Deactivates accounts inactive for a year                    |
| `partnerships:end`             | Daily        | Ends expired partnerships                                   |
| `passport:purge`               | Daily        | Purges expired OAuth tokens                                 |
