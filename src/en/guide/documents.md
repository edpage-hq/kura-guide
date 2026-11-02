---
layout: doc
---

# Generated documents

Module 32 brings together all documents produced by Kura. There is no `generated_document` table: each document is read **where it is stored**, in its business table, and “My documents” lists them for an account.

## Catalogue

| Document                  | Reference           | Generated when                                 | Signatories                                        |
| ------------------------- | ------------------- | ---------------------------------------------- | -------------------------------------------------- |
| Training agreement        | `CONV-NB-YYYY-XXX`  | edPage countersignature                        | Learner (or legal representative), edPage          |
| Tripartite agreement      | `CONVT-NB-YYYY-XXX` | After the agreement, if a funder is designated | Learner, funder, edPage                            |
| Internship agreement      | `CONVS-NB-YYYY-XXX` | On sending by the Coordinator                  | Learner (or legal representative), company, edPage |
| Welcome booklet           | `LA-NB-YYYY-XXX`    | Full payment of the 1st instalment             | No signature                                       |
| Invoice                   | `FAC-NB-YYYY-XXX`   | Instalment issue                               | —                                                  |
| Credit note               | `AV-NB-YYYY-XXX`    | Cancellation or refund                         | —                                                  |
| Certificate               | `CERT-NB-YYYY-XXX`  | Delivery by the Coordinator                    | Jury president                                     |
| Partial attestation       | `ATP-NB-YYYY-XXX`   | Withdrawal with at least one validated block   | Coordinator                                        |
| Transcript of competences | `REL-NB-YYYY-XXX`   | With the certificate or attestation            | Coordinator                                        |
| Decision letter           | —                   | Decision made                                  | —                                                  |
| Cohort calendar           | —                   | On demand                                      | —                                                  |
| Activity report           | —                   | On demand                                      | —                                                  |
| Defence report            | `PVS-NB-YYYY-XXX`   | Jury decisions confirmed                       | Jury                                               |

Every PDF is generated server-side with `barryvdh/laravel-dompdf`, stored on a **private** disk and protected by a SHA-256 fingerprint. An issued invoice or certificate is not reissued: it is corrected by a credit note or a replacement.

## Agreements

### Training agreement

The Coordinator publishes the general terms as **immutable versions**. A new version only applies to subsequent signatures; every signed agreement keeps its own. Without a published text, no signature is possible.

Kura adds the specific terms: parties, programme, cohort, format, price excluding tax and the 30/40/30 schedule on the cohort dates. Signature opens when the file is complete (cohort, consents).

### Tripartite agreement

Prepared on countersignature of a training agreement with a funder, whose terms it repeats. The funder signs it by code from “Funded learners”; edPage countersigns according to the Administrator's setting. It blocks neither the enrolment nor the billing.

### Internship agreement

The Coordinator enters the host company, its signing contact, the Coach-Tutor supervising the internship, the dates and the mission, editable until the first signature. On sending:

- the learner signs by code in their account (their legal representative through a 7-day link if they are a minor);
- the company signs through a 7-day link and a code, without an account;
- edPage countersigns afterwards.

The jury reuses the company name in the defence decisions.

## Electronic signature

| Mechanism        | Rule                                                                                                      |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Signature code   | 6 digits, sent by email, valid 15 minutes, 5 attempts, single use, stored hashed                          |
| Public link      | Single use, valid 7 days, stored hashed, replaced by any new link                                         |
| Sending limit    | 5 codes per minute per route                                                                              |
| Sealing          | SHA-256 fingerprint of the signed PDF, kept with the document                                             |
| Countersignature | Automatic in the name of the edPage representative, or manual by the Coordinator according to the setting |
| Logging          | Signature and countersignature timestamped, with name, email, IP and browser                              |

A minor never signs themselves: their legal representative receives a link separate from the consent link, and the code goes to their address.

## Welcome booklet and cohort documents

- The **welcome booklet** is generated after full payment of the first instalment, one per agreement. It is emailed and downloadable by the learner and the Coordinator. A cohort change produces a new one; the old one is kept.
- The **cohort calendar** lists blocks, key dates, due dates, jury days and public holidays. It is available on demand to anyone who can see the cohort.
- The **activity report** (seats, attendance, results) is reserved for the Coordinator and the Administrator.
- The **defence report** is produced by the person entering the jury, once each learner's defence is confirmed. It is sealed and kept; it is only regenerated if the jury decisions have been corrected, and the new one replaces the old one, which remains available.

## Document access

| Actor                | Sees                                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| Learner              | Their agreements, booklet, invoices, credit notes, certificate, attestation, transcript, decision letter |
| Coordinator          | The same documents from account management and the business pages                                        |
| Funder               | The tripartite agreement and the invoices for their share                                                |
| Internship company   | The internship agreement, through a link, without an account                                             |
| Legal representative | The consents, the agreement and the internship agreement, through a link                                 |
| Direction            | Aggregated documents in the dashboards, without individual files                                         |

Documents are available in French and English, in the recipient's language.

## Retention

| Document                                | Duration         |
| --------------------------------------- | ---------------- |
| Agreements, invoices, credit notes      | 10 years (OHADA) |
| Certificates, attestations, transcripts | Unlimited        |
| Defence reports                         | Unlimited        |

## Technical

- `App\Services\Documents\DocumentLibrary` lists an account's documents.
- `App\Http\Controllers\Documents\*` serves “My documents” and an account's documents.
- `App\Http\Controllers\Cohorts\CohortDocumentController` produces the calendar, activity report and defence reports.
- `App\Concerns\SealsPdf` computes and verifies fingerprints.
- The PDF views live in `resources/views/pdf`, with models A and B from the appendices.
