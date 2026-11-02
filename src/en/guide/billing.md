---
layout: doc
---

# Billing

All billing is in **FCFA**, excluding tax, stored as `DECIMAL(12,2)`. Invoices carry a VAT exemption mention and the payment terms set by the Administrator. They are generated as PDFs, stored privately and emailed to the payer.

## The 30/40/30 schedule

Each enrolment produces **three invoices**, on dates calculated by the cohort:

| Instalment | Share | Due date                            | Issued                                              |
| ---------- | ----- | ----------------------------------- | --------------------------------------------------- |
| 1          | 30%   | Cohort start, or signature if later | On countersignature of the agreement                |
| 2          | 40%   | Mid-course                          | 15 days before the due date, with the D-15 reminder |
| 3          | 30%   | Cohort end                          | 15 days before the due date, with the D-15 reminder |

Dates are never entered: the mid-course date and the three due dates are calculated from the cohort dates. References are yearly and readable: `FAC-NB-YYYY-XXX` for invoices, `AV-NB-YYYY-XXX` for credit notes.

## Shared funding

Before signature, the Coordinator designates a **funder** (organisation account with the Funder role) and its share, from 1 to 100%. The split appears in the agreement.

- Each instalment is billed as **one invoice per payer**: the learner and the funder are tracked separately.
- The funder sees, in their area, the learners they fund and the invoices for their share.
- If the funder is late, the learner's Sève access is suspended **even if their own share is paid**. Payment restores access.

## Collection

Payments are entered by the Coordinator: amount, method, reference, date. **Partial** payments are allowed. A receipt is sent to the payer.

| Method                        | Entry  |
| ----------------------------- | ------ |
| Bank transfer                 | Manual |
| Cheque                        | Manual |
| Mobile Money (Flooz, T-Money) | Manual |
| Bank card                     | Manual |
| Cash                          | Manual |

Online payment through **PayGate** (Flooz, T-Money) is planned by ADR-006 but not wired yet: until it is, every payment goes through manual entry.

## Reminders

| When           | Event                                                             | Actor                   |
| -------------- | ----------------------------------------------------------------- | ----------------------- |
| D-15, D-7, D-1 | Due-date reminder (email, Sève, WhatsApp)                         | Kura                    |
| D+1            | Unpaid due-date reminder                                          | Kura                    |
| D+7            | Personal follow-up (email or call)                                | Pedagogical Coordinator |
| D+15           | Invoice **overdue**, start of the automatic **15-day moratorium** | Kura                    |
| D+30           | Without payment, **Sève access suspension**                       | Kura                    |
| After D+30     | Interview, payment plan, withdrawal if nothing                    | Pedagogical Coordinator |

The moratorium is **single and non-negotiable**: it postpones the due date by 15 days and remains visible on the invoice. Payment, at any stage, restores access automatically.

This timeline replaces the earlier rules (“overdue” at D+1, moratorium on request, suspension at D+15, due date 15 days after issue).

## Credit notes and refunds

A credit note `AV-NB-YYYY-XXX` carries a type:

- **cancellation of the outstanding balance**: unpaid instalments are cancelled;
- **refund**: amounts already paid are returned, once the refund is made.

Main cases:

| Case                                        | Treatment                                                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Cohort change (postponement, force majeure) | Payments kept; outstanding balance cancelled by credit note; new agreement bills each instalment minus payments |
| Cohort cancelled by NextBoxx                | 100% refund credit note for amounts paid; refund recorded by the Coordinator                                    |
| Voluntary withdrawal                        | No credit note; remaining instalments not billed; issued invoices remain due; partial attestation               |
| Event cancelled                             | Credit note for paid registrants; outstanding balance cancelled                                                 |
| Event registration unpaid at 48 hours       | Credit note for the outstanding balance, seat freed                                                             |

## Invoices outside the schedule

Only these events invoice outside an enrolment schedule:

- a catch-up or retake request, invoiced immediately;
- registration to a paid event;
- an accepted B2B quote;
- a confirmed matching or support engagement.

Any other invoice is validated by the Coordinator.

Event invoices have no training enrolment, agreement or instalment. They are due 48 hours before the event starts and excluded from the billing calendar, training reminders, commissions and dashboards.

## Remuneration and commissions

| Beneficiary       | Calculation basis                                              | Payment                                        |
| ----------------- | -------------------------------------------------------------- | ---------------------------------------------- |
| Lead Trainer      | Programme hours × hourly rate for the zone, + project flat fee | Approved by the Coordinator, paid outside Kura |
| Coach-Tutor       | Headcount at start × coach flat fee, shared between co-coaches | Same                                           |
| External jury     | Token due for actually holding the defence                     | Same                                           |
| Business referrer | 5% of each payment collected, including the funder's share     | Same; negative line on refund                  |
| Marketing partner | Invoice submitted, within the contract or flat fee             | Approved or rejected with a reason, then paid  |

A cohort keeps the rates and zone of its **start**, even if a learner later withdraws. Calculated amounts can be adjusted by the Coordinator before approval; the payment is always recorded afterwards, because it happens outside Kura.

## Financial indicators

| Indicator    | Definition                                                      |
| ------------ | --------------------------------------------------------------- |
| Invoiced     | Sum of invoices, net of cancellation credit notes               |
| Collected    | Sum of payments, net of refunds                                 |
| Outstanding  | Invoiced − collected, including the overdue part                |
| Paid out     | Remuneration and commissions paid, plus paid marketing invoices |
| Gross margin | Collected − paid out                                            |

The Direction view adds paid out and gross margin; reporting stops at outstanding. Both views exclude event invoices.

## Good practices

- Record a payment **in a transaction** and check the balance after locking the row, to avoid overpayment when entries are simultaneous.
- Never issue an invoice without checking that none already exists for the same agreement, payer and instalment.
- Keep the PDFs and their fingerprints: an issued invoice is not reissued, it is corrected by a credit note.
