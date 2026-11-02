---
layout: doc
---

# Accounts and roles

Kura knows only **one account per person**, identified by email. An account accumulates roles over time; accounts are never recreated, even after a conversion to an organisation.

## The NextBoxx account

| Attribute     | Values                                                   |
| ------------- | -------------------------------------------------------- |
| Type          | `individual` or `organisation`                           |
| Global status | `active`, `suspended` (unpaid), `canope` (certified)     |
| Identifier    | email, case-insensitive                                  |
| Deactivation  | automatic one year after the last sign-in, data retained |

An **organisation** account only ever comes from converting an individual account, approved by the Administrator. The individual history (training, Canopé status) remains readable; the company name becomes the account name and the previous name stays in the request and the audit log.

The `suspended` status blocks any paid action, whatever the module. The `canope` status is granted when the certificate is delivered.

## Roles

| Role                        | Granted by                          | Scope                                                                                                  |
| --------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Candidate**               | Automatically on submission         | Take the test, follow their file                                                                       |
| **Participant**             | Automatically on event registration | Register for events, no training access                                                                |
| **Learner**                 | Automatically on admission          | Sign, pay, access their documents, follow training on Sève, become visible to companies once certified |
| **Lead Trainer**            | Pedagogical Coordinator             | Their cohorts, their remuneration, in-person attendance, retakes; no access to the QCM bank            |
| **Coach-Tutor**             | Pedagogical Coordinator             | Their followed learners, their remuneration, their Sève space                                          |
| **Pedagogical Coordinator** | Administrator                       | Catalogue, QCM, cohorts, enrolments, billing, certification, payouts, announcements, GDPR              |
| **Admissions Advisor**      | Administrator                       | Candidature handling: interview, test reminder, reasoned decision                                      |
| **Business Referrer**       | Partnerships Officer                | Referred enrolments and commissions                                                                    |
| **Marketing Partner**       | Partnerships Officer                | Invoice submission and payment tracking                                                                |
| **Funder**                  | Partnerships Officer                | Funder area: funded learners, simplified progress, invoices for their share                            |
| **Event Funder**            | Events Officer                      | Contribution declarations and funding area                                                             |
| **Project Holder**          | Incubation Officer, on retention    | Follow their L'Éclosion project and their participation                                                |
| **Events Officer**          | Administrator                       | Events module and approval of related roles                                                            |
| **Partnerships Officer**    | Administrator                       | Matching, recruitment, marketing and technology partnerships                                           |
| **Incubation Officer**      | Administrator                       | L'Éclosion module and approval of project holders                                                      |
| **Direction**               | Administrator                       | Consolidated read-only dashboard, investment committee                                                 |
| **Administrator**           | Administrator                       | Account conversion, privileged roles, logs, Sève token regeneration                                    |

Three roles are granted by the system on a business event: Candidate, Participant and Learner. All the others go through a request approved by the designated actor — never automatically.

## Requestable roles

From their settings, an account can request:

- Lead Trainer
- Coach-Tutor
- Business Referrer
- Marketing Partner
- Funder (organisation account required)
- Event Funder

Staff roles (Coordinator, Advisors, Officers, Direction, Administrator) are granted directly by the Administrator.

## Approval rules

- The Administrator can approve **all** roles, in addition to the designated actor, so that no request is stuck behind a vacant position.
- Nobody decides their own request and nobody removes their own role.
- A refused role is never activated; existing roles remain untouched.
- The Funder role requires an organisation account; Event Funder remains open to individual accounts.
- Actions by privileged accounts (Pedagogical Coordinator, Direction, Administrator) on accounts and roles are logged with the actor and timestamp.

## Technical permissions

Gates are defined in `AppServiceProvider` and consumed by routes (`can:*`), controllers (`Gate::authorize`) and the frontend (`useAccess`).

| Gate                                            | Purpose                                     |
| ----------------------------------------------- | ------------------------------------------- |
| `approve-roles`                                 | Handling role requests                      |
| `view-candidatures`                             | Candidature queue and files                 |
| `manage-catalogue`                              | Programmes, price grid, QCM bank            |
| `view-cohorts`, `manage-cohorts`                | Viewing and running cohorts                 |
| `manage-enrolments`                             | Enrolments, placements, consents            |
| `manage-billing`                                | Invoices, payments, credit notes, reminders |
| `view-funded-learners`                          | Funder area                                 |
| `view-own-commissions`, `view-own-remuneration` | Personal referrer and trainer areas         |
| `submit-marketing-invoices`                     | Marketing invoice submission                |
| `view-direction-dashboard`                      | Direction dashboard                         |
| `view-reporting`                                | Reporting and exports                       |
| `manage-communication`                          | Announcements and delivery log              |
| `manage-events`, `manage-company-requests`      | Events and company request modules          |
| `manage-incubation`, `sit-investment-committee` | L'Éclosion and investment committee         |
| `manage-tech-partnerships`                      | Technology partnerships                     |

## Role request flow

1. The account holder submits a request from their settings (or the Administrator creates the account).
2. The designated actor — or the Administrator — reviews the request.
3. They approve or refuse with a reason.
4. The holder is notified; an approved role accumulates with existing roles.

See also [Learner journey](/en/guide/learner-journey) and [Core modules](/en/guide/core-modules).
