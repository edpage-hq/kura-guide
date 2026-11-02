---
layout: doc
---

# Overview

**Kura** is the administrative and financial platform of **NextBoxx**, edPage group's training organisation. It centralises the catalogue, cohorts, candidatures, enrolments, billing, certification and payouts. It is the single source of truth for everything that is not pedagogical.

## The NextBoxx ecosystem

The business rests on four distinct building blocks:

| Building block       | Role                                                                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **NextBoxx website** | Public storefront: catalogue, candidature submission, event registration. Stateless, it sends data to Kura through an API.               |
| **Kura**             | Administrative and financial backbone: identity, admission, cohorts, enrolments, billing, certification, payouts, documents. This guide. |
| **Sève**             | Rebranded Moodle LMS: contents, virtual classrooms, assessments, attendance, coaching.                                                   |
| **Parcours Canopé**  | Status and community of certified alumni.                                                                                                |

Kura is Sève's **identity provider** (OAuth2/OpenID Connect): a NextBoxx account grants access to Sève through SSO, with no Moodle password. Sève stores no financial or contractual data and only sends aggregated data back to Kura (attendance, completion, grades).

## Guiding principles

- **One account per person**, deduplicated by email; roles accumulate and accounts are never recreated.
- **Kura decides, Sève executes.** No administrative or financial decision (opening a cohort, validating an enrolment, billing, certification) happens in Sève.
- **The public website is stateless.** An accepted candidature or registration is copied back to the website CMS, never the other way round.
- **Notifications decide nothing.** They remind and alert; decisions remain human, except for the automatic transitions defined by the business rules.
- **Amounts in FCFA**, stored as `DECIMAL(12,2)`, expressed excluding tax.
- **Traceability**: actions by privileged accounts on accounts and roles are logged.

## Scope

The **core** covers modules 1 to 18, module 29 (NextBoxx account), which is cross-cutting, and module 32 (Generated documents), required for welcome booklets, agreements, invoices and certificates.

The **extended activities** (modules 19 to 28, 30, 31 and 33) extend the core: B2B training on quotation, events, company requests and recruitment, event funding, L'Éclosion incubation and technology partnerships.

| #     | Module                                                    | Block         |
| ----- | --------------------------------------------------------- | ------------- |
| 1     | Training catalogue                                        | Core          |
| 2     | Cohort management                                         | Core          |
| 3     | Enrolments and learner file                               | Core          |
| 4     | Attendance tracking (Kura view)                           | Core          |
| 5     | Assessments and results (Kura view)                       | Core          |
| 6     | Certification (certificate, partial attestation)          | Core          |
| 7     | NextBoxx billing (30/40/30, online payment)               | Core          |
| 8     | Communication (announcements, reminders)                  | Core          |
| 9     | Reporting                                                 | Core          |
| 10    | Trainer and coach remuneration                            | Core          |
| 11    | Business referrer commissions                             | Core          |
| 12    | Marketing partners                                        | Core          |
| 13    | Dashboard — session postponement decision                 | Core          |
| 14    | Sève integration                                          | Core          |
| 15    | Direction dashboard                                       | Core          |
| 16    | Funder area (company)                                     | Core          |
| 17    | Electronic signature                                      | Core          |
| 18    | Candidature management and admission (including QCM test) | Core          |
| 19    | B2B training on quotation                                 | Extended      |
| 20–22 | Events (creation, registrations, funding)                 | Extended      |
| 23–26 | Company requests, matching and recruitment                | Extended      |
| 27–28 | Event funding and event funder area                       | Extended      |
| 29    | NextBoxx account (one account, several roles)             | Cross-cutting |
| 30–31 | L'Éclosion incubation and participations                  | Extended      |
| 32    | Generated documents                                       | Core          |
| 33    | Technology partnerships                                   | Extended      |

## Key figures

| Figure                               | Value                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------- |
| Programmes at launch                 | 40, in 3 categories                                                               |
| Yearly intakes                       | 4 promotions: Baobab (September), Iroko (December), Acacia (March), Karité (June) |
| Cohort capacity                      | 15 learners                                                                       |
| Simultaneous virtual classrooms      | 10 at most, 15 participants per classroom                                         |
| Instalments                          | 3 tranches: 30% on signature, 40% mid-course, 30% at the end                      |
| Admission test pass mark             | 60%, i.e. 6 correct answers out of 10                                             |
| Absence alert threshold              | 30% of the total hours                                                            |
| Business referrer commission         | 5% of amounts collected                                                           |
| Retention of invoices and agreements | 10 years (OHADA)                                                                  |

## Where to go next

- [Getting started](/en/guide/getting-started) — install and run Kura locally.
- [Architecture](/en/guide/architecture) — stack, code structure and data model.
- [Accounts and roles](/en/guide/roles) — who can do what.
- [Learner journey](/en/guide/learner-journey) — from candidature to Parcours Canopé.
- [Core modules](/en/guide/core-modules) — the day-to-day business rules.
