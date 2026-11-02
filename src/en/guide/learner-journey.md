---
layout: doc
---

# Learner journey

From candidature to Parcours Canopé, this is a learner's full path through Kura. Every step is triggered by an identified actor and leaves a trace.

```text
NextBoxx website
    │  submission (API)
    ▼
Candidature ──► Interview ──► QCM test ──► Decision
                                            │ admitted
                                            ▼
                                        Enrolment
                                            │
                    consents ──► Agreement ──► 1st instalment
                                            │           │
                                            │           ├─► Sève account
                                            │           └─► welcome booklet
                                            ▼
                              Training (Sève) · attendance · grades
                                            │
                      mid-course (40%) ──► balance (30%)
                                            │
                                            ▼
                                 Certificate ──► Canopé
```

## 1. Candidature submission

The candidate chooses a published programme and a format on the NextBoxx website, then submits their file (motivation, optional documents, minor flag, optional referral code). The website sends it to Kura through the API.

Kura creates or reuses the account, grants the **Candidate** role and opens the candidature. The candidate receives an acknowledgement with a link to choose a password if the account is new.

One candidature in progress per account, whatever the programme. After a refusal, a new submission is possible after **7 days**, attached to the same account and linked to the previous one.

## 2. Interview

An Admissions Advisor takes the file from the shared queue and becomes responsible for it. The interview must be held within **5 business days**; only the responsible advisor closes it, with an internal report. Closing opens the test.

Business days run Monday to Friday, excluding public holidays entered by the Administrator. A daily task reminds once about each overdue step.

## 3. Admission test

The link is sent when the interview closes if the programme's QCM bank is validated. Characteristics:

- single-use link, no sign-in, **48-hour** window to start;
- **2 attempts**, **45 minutes** each from opening;
- **10 questions** drawn from the 20 validated ones; the second attempt excludes those from the first;
- score shown on submission, **indicative 60% pass mark** (6/10);
- a successful attempt closes the test; otherwise it closes after the second attempt.

The score is indicative: the file goes to decision whatever the result. If the link expires, the Advisor is reminded once, then sends a new link or closes the test.

## 4. Decision

The responsible advisor makes a **reasoned decision within 3 business days** after the test. The reason stays internal; the candidate is notified by email.

| Decision     | Effect                                                                 |
| ------------ | ---------------------------------------------------------------------- |
| **Admitted** | Learner role, enrolment created, cohort chosen or placement later      |
| **Refused**  | File closed, no payment or Sève access; kept 12 months then anonymised |

The decision letter is generated, attached to the email and downloadable from “My candidatures”.

## 5. Enrolment, consents and agreement

The enrolment is created on admission, with the status **pending signature**. The Advisor chooses an open or confirmed cohort that has not started yet, with a seat and a price for the format; otherwise the Coordinator places the learner before signature.

Before signing, the learner:

- confirms or changes their **format** among those priced for the cohort;
- gives **two separate consents**: pedagogical reuse of the tutored project and image rights;
- for a minor, has their **legal representative** sign through a 7-day email link, without an account.

The Agreement is signed with a **6-digit code** received by email: valid 15 minutes, 5 attempts, single use. The edPage countersignature is automatic or manual according to the Administrator's setting. It freezes the format, cohort and price, activates the enrolment and produces the sealed PDF `CONV-NB-YYYY-XXX`.

## 6. First instalment and Sève access

After countersignature, the first invoice (30%) is issued. As soon as **all shares** of that instalment are paid — learner and funder — Kura:

- provisions the Sève account (SSO, no Moodle password);
- enrols the learner in their cohort's course;
- generates and sends the **welcome booklet** `LA-NB-YYYY-XXX`.

A suspension or reactivation is mirrored in Sève. A cohort change replaces the agreement and produces a new booklet.

## 7. Training, attendance and results

The learner follows their training on Sève. Virtual session attendance and per-block grades flow back into Kura every hour. In-person attendance is entered by a Lead Trainer.

- Alert to the Coordinator and the learner above **30% absence**.
- Grades out of 20 per block; weighted average by block duration.
- Retake possible for a block below 10/20, 15 days after the last grade, at most twice.
- Tutored project, defence and internship are entered by the Coordinator; these grades stay out of the average.

## 8. Billing the journey

The 40% (mid-course) and 30% (end) instalments are issued as they fall due, 15 days before their due date, with reminders at D-15, D-7 and D-1. The unpaid timeline is detailed in [Billing](/en/guide/billing).

## 9. Certificate and Parcours Canopé

The certificate is delivered when **all four conditions** are met:

1. average ≥ 10/20;
2. no block below 8/20;
3. defence validated;
4. balance fully paid.

No condition compensates another. The certificate `CERT-NB-YYYY-XXX` is frozen, sealed with a SHA-256 fingerprint and signed in the name of the jury president. Delivery completes the enrolment, removes the learner from their cohort course, moves the account to the **Canopé** status and enrols it in Parcours Canopé.

On interruption with at least one validated block, the Coordinator delivers a **partial attestation** `ATP-NB-YYYY-XXX`, never a partial certificate. A **transcript of competences** accompanies the certificate or attestation.

## What the learner sees

| Area                     | Content                                                                           |
| ------------------------ | --------------------------------------------------------------------------------- |
| My candidatures          | Steps, decision, decision letter                                                  |
| My enrolment             | Cohort, format, price, agreement, consents                                        |
| My documents             | Agreements, booklet, invoices, credit notes, certificate, attestation, transcript |
| My invoices              | Due dates, payments, PDFs                                                         |
| My roles                 | Role requests and status                                                          |
| My events                | Event registrations                                                               |
| My projects / My funding | L'Éclosion and event contributions, depending on roles                            |
