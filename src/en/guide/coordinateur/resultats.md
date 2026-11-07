---
layout: doc
---

# Results and certification

From a cohort page, **Attendance** and **Results** give the tracking of learners. There you enter the jury's decisions, produce the report and issue certificates.

## Following attendance and grades

The pages are the same as the Lead Trainer's: see [Lead Trainer](../equipe/formateur#attendance). In addition, you can **enter and correct in-person attendance** in the trainer's place, and **open retakes**.

Reminder: as long as the **Sève course id** is not entered on the cohort, neither virtual classes nor grades flow back. The page tells you so.

## The jury's decisions

Only you (and the Administrator) enter the jury, **from the cohort's start**. On the **Results** page, click the learner then **Enter decisions**. Each decision stays **pending** until the jury has taken it; grades are optional and **do not count in the average**.

| Decision            | What you enter                                                               |
| ------------------- | ---------------------------------------------------------------------------- |
| **Tutored project** | Subject, validated or not, grade out of 20                                   |
| **Defence**         | Date, validated or not, grade out of 20                                      |
| **Internship**      | Host company (reused from the internship agreement if any), validated or not |

A validated **defence** is one of the certificate's conditions. The **internship** never blocks the certificate.

### The jury president

Enter the **jury president** with the decisions: they sign the certificate, and their name is printed on it. **Without a president, the certificate cannot be issued.**

### The jury members

Under **Jury members**, add for each **defence date** the members present: name and e-mail address, with no Kura account. Each receives a **token**, due once the defences are held. See [Remunerations and commissions](./remunerations).

## The defence report

When the jury has **decided on the defence of every confirmed learner** of the cohort, the page's **Documents** panel offers **Generate the report**. The report is **numbered** (`PVS-NB-YYYY-XXX`), **sealed** and kept.

It is **never regenerated on viewing**. If the jury's decisions are corrected afterwards, the page offers to generate a new one: it **replaces** the old one, which stays downloadable, marked "replaced". As long as a defence has no decision, no report is produced.

## Issuing the certificate

On the results page, the **Certification** block shows each learner's four conditions, met or not:

1. every block graded, **average ≥ 10/20**;
2. **no block under 8/20**;
3. **defence validated** by the jury;
4. **training fees paid in full**.

No condition compensates for another. When all four are met and the jury president is entered, **Deliver the certificate** is available, **once only** per learner.

Issuance:

- freezes a **sealed PDF** (`CERT-NB-YYYY-XXX`) with the **mention** (Passable from 10/20; Assez bien, Bien and Très bien at the thresholds the Administrator sets, 12, 14 and 16 by default), and the **transcript of competencies** (`REL-NB-YYYY-XXX`), sent to the learner by e-mail;
- **ends the enrolment**;
- removes the learner from their cohort's course in Sève;
- moves their account to the **Canopé** state and enrols them in the **Canopé Journey**.

If the Canopé Journey's Sève course is not yet set on the server (it is not a field in Kura), the Canopé enrolment **waits**: the failed call shows in **Administration → Sève sync**, and goes through once the technical team has set the course.

## The partial attestation

For a **dropped** enrolment (voluntary or for non-payment) with **at least one validated block**, **Deliver the partial attestation** produces an attestation that lists the validated blocks, those not validated or not followed, and the reason for the interruption, with the transcript of competencies. There is **never a partial certificate**. If no block is validated, there is nothing to attest.
