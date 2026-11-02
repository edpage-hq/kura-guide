---
layout: doc
---

# Core modules

Modules 1 to 18, 29 and 32 form the core. This page summarises the rules that shape day-to-day work; the exhaustive detail lives in the reference documentation.

## Catalogue (module 1)

A **programme** is a training course in the catalogue, identified by a stable, immutable code `NB.XX.YY`. The prefix follows the category:

| Category             | Code                    | Duration                                                                       |
| -------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| Career Paths         | `NB.FP.01` – `NB.FP.10` | 500 h / 25 weeks + internship (700 h for the Web & Mobile Development package) |
| Business Skills      | `NB.CM.01` – `NB.CM.12` | 250 h / 12 weeks + internship                                                  |
| Technologies & Tools | `NB.TO.01` – `NB.TO.18` | 250 h / 12 weeks + internship                                                  |

Three statuses: **draft**, **published**, **archived**. Only a published programme is visible on the website. Unpublishing is impossible while it is linked to an open, confirmed or running cohort.

The price is never entered freely: it derives from the category and the format, through the price grid.

| Category                               | Online    | Hybrid    | In person |
| -------------------------------------- | --------- | --------- | --------- |
| Career Paths                           | 850,000   | 900,000   | 950,000   |
| Web & Mobile Development               | 1,000,000 | 1,100,000 | 1,150,000 |
| Business Skills / Technologies & Tools | 450,000   | 500,000   | 550,000   |

Amounts in FCFA, excluding tax. A price change is scheduled from a date and only applies to cohorts opened afterwards.

A programme's **QCM bank** holds 20 validated questions. Import uses an `.xlsx` workbook, one tab per programme, followed by an explicit validation: importing and validating are two distinct actions. The imported file is never kept.

## Cohorts (module 2)

A cohort is a session of a programme, attached to a yearly **promotion**:

| Promotion | Intake    |
| --------- | --------- |
| Baobab    | September |
| Iroko     | December  |
| Acacia    | March     |
| Karité    | June      |

Opening conditions: published programme, validated QCM bank, a price for every proposed format, at least one Lead Trainer assigned. Maximum capacity: **15 learners**. Grid prices are frozen when the cohort opens.

Statuses: **open**, **confirmed**, **in progress**, **completed**, **postponed**, **cancelled**.

- The Coordinator confirms an open cohort.
- A confirmed cohort starts on its start date on its own; a running cohort completes on its own after its end date.
- Postponement and cancellation are only possible before the start, require a reason, and are final.
- A cohort mixes the three formats: format and price are carried by each enrolment.

The **profitability zone** is recalculated on every confirmed enrolment or withdrawal:

| Confirmed headcount | Zone        |
| ------------------- | ----------- |
| Fewer than 7        | Fragile     |
| 7 to 11             | Viable      |
| 12 to 15            | Comfortable |

The Viable and Comfortable thresholds are configurable per category. A cohort freezes its zone and headcount when it starts: threshold changes only affect future cohorts.

The **profitability dashboard** (module 13) shows, for open and confirmed cohorts, the zone, headcount, signed and pending revenue, staffing cost and its coverage. A Fragile cohort less than a week from starting is flagged “to decide”; nothing happens automatically.

## Candidatures and admission (module 18)

Four strictly sequential steps: **submission**, **interview**, **test**, **decision**.

- Interview within 5 business days, closed by the responsible advisor.
- Test: single-use link, 48 hours to start, 2 attempts of 45 minutes, 10 questions out of 20, indicative 60% pass mark.
- Reasoned decision within 3 business days.
- One candidature in progress per account; resubmission possible 7 days after a refusal.
- Refused candidature kept 12 months, then anonymised: statistics remain, personal data disappears.

The full flow is described in [Learner journey](/en/guide/learner-journey).

## Enrolments and consents (module 3)

The enrolment is created on admission, with the status **pending signature**. Statuses: `pending_signature`, `active`, `suspended`, `dropped`, `completed`.

- Any non-dropped enrolment holds a seat; headcount and zone only count signed enrolments.
- The format can be changed until signature, among the formats priced for the cohort.
- Two separate consents are required before signature: pedagogical reuse of the tutored project and image rights. Every change is logged.
- For a minor, only the legal representative's consents count, collected through a single-use 7-day email link.
- **Shared funding** designates an organisation account with the Funder role and its share (1 to 100%), frozen in the agreement.

## Attendance (module 4)

- Virtual sessions are read every hour from `mod_attendance` and cannot be edited in Kura.
- An in-person session is entered by a Lead Trainer of the cohort or by the Coordinator, once held.
- Lateness counts as attendance; an excused absence counts as an absence.
- Absence rate = missed minutes ÷ programme hours. The alert fires **once** above 30%, and re-arms if a correction brings it back below the threshold.

## Results (module 5)

- Per-block grades flow back from Sève through the `KURA-BLOC-{id}` code, out of 20.
- Average weighted by block duration, recalculated on every read.
- A block is validated at 10/20, compensable from 8 to 10, eliminatory below 8. The retained grade is the last graded attempt.
- Retake opened by a Lead Trainer or the Coordinator: block below 10/20, 15 days after the last grade, at most twice. It is filled by the first Sève grade given after opening.
- Jury entered by the Coordinator: tutored project, defence, internship. These grades stay **out of the average**; the internship does not block the certificate.

## Certification (module 6)

The certificate requires **four cumulative conditions**:

1. average ≥ 10/20;
2. no block below 8/20;
3. defence validated;
4. balance fully paid.

None compensates another. The certificate is delivered once by the Coordinator, in the name of the jury president, as a sealed PDF. Mentions: Passable from 10/20, then Assez bien, Bien and Très bien according to configurable thresholds (12, 14 and 16 by default).

Delivery completes the enrolment, removes the learner from their cohort course, moves the account to the **Canopé** status and enrols it in Parcours Canopé.

A **partial attestation** is reserved for a dropped enrolment with at least one validated block. A **transcript of competences** accompanies the certificate or attestation.

## Communication (module 8)

- Announcements from the Coordinator or Administrator to one cohort, or to all cohorts of a programme.
- Recipients: pending, active or suspended enrolments, and by default assigned trainers and coaches.
- Channels: email and Sève, sent immediately. No WhatsApp for announcements.
- Every delivery is logged, channel by channel, with its status and error.

## Reporting and Direction (modules 9 and 15)

Both views are **read-only**, over the same period and with the same definitions.

| Indicator                        | Reporting | Direction |
| -------------------------------- | --------- | --------- |
| Fill rate, success, attestations | Yes       | Yes       |
| Invoiced, collected, outstanding | Yes       | Yes       |
| Attendance, overall average      | Yes       | Yes       |
| Paid out and gross margin        | No        | Yes       |
| L'Éclosion portfolio             | No        | Yes       |

Reporting exports the cohort list as CSV (semicolon, UTF-8 with BOM, in the user's language).

## Remuneration and commissions (modules 10 to 12)

- **Trainers and coaches**: hourly rate by zone, project flat fee, coach flat fee per learner, external jury token. The grid is configurable and each rate takes effect on a date. A cohort keeps the rates and zone of its start.
- **Business referrers**: 5% of amounts collected, instalment by instalment, including the funder's share. A refund reverses the commission with a negative line.
- **Marketing partners**: paid on invoice submission, within the contract or campaign flat fee; reasoned validation or rejection by the Coordinator.

The calculation and payout details are in [Billing](/en/guide/billing#remuneration-and-commissions).
