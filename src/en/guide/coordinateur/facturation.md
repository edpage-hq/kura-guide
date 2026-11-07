---
layout: doc
---

# Billing

**Finance → Billing** gathers invoices, payments, follow-ups and credit notes. Kura **collects nothing**: payments arrive outside Kura, and you record them there.

## Invoices

Each enrolment gives three invoices, on the dates calculated by the cohort: signature (30%), mid-point (40%), balance (30%). They are **issued as you go**: the first at the agreement's counter-signature, the others **15 days before their due date**. The reference is `FAC-NB-YYYY-XXX`; the PDF goes by e-mail to the payer.

Amounts are **excluding tax**: the invoice carries the exemption mention and the payment details, which the Administrator sets.

In shared funding, each instalment gives **one invoice per payer**, followed separately. The page also lists invoices for paid events, company quotes and placements.

The list is filtered by status (**Issued**, **Overdue**, **Paid**, **Cancelled**) and searched by reference, payer or learner.

## Recording a payment

On an invoice, **Payment** asks for:

- the **amount received** (in FCFA), which can never exceed what remains due;
- the **payment method**: bank transfer, cheque, Mobile Money, card or cash;
- the transaction **reference**;
- the **date** received.

A **partial** payment is possible. The payer receives an acknowledgement. When the invoice's balance is reached, it becomes "Paid".

**Paying restores access**: an account suspended for non-payment is reactivated automatically, in Kura and in Sève.

## Chasing

Kura sends the reminders before the due date (D-15, D-7, D-1) and the day after (D+1) by itself. **The D+7 follow-up is yours**: the **To chase (D+7)** filter lists the invoices concerned. Contact the learner or funder by e-mail or phone, then click **Chased**: the date is kept.

| When       | Who acts                                                           |
| ---------- | ------------------------------------------------------------------ |
| D+1        | Kura: reminder                                                     |
| D+7        | **You**: personal follow-up                                        |
| D+15       | Kura: the invoice becomes "Overdue", automatic 15-day moratorium   |
| D+30       | Kura: suspension of access to Sève                                 |
| After D+30 | **You**: interview, possible repayment plan, otherwise unenrolment |

The moratorium is **unique** and not renegotiable. When the late payer is the **funder**, the learner is suspended too. For a company's dedicated cohorts, the suspension concerns the cohort's enrolments, not the accounts.

## If a cohort changes or is cancelled

- **Change of cohort.** Payments are kept; what remained due on invoices already issued is cancelled by a **cancellation credit note** (`AV-NB-YYYY-XXX`). The new agreement re-invoices each instalment, deducting what the payer has already paid.
- **Cancellation by NextBoxx.** Kura issues a **refund credit note** for 100% of the sums paid. It appears "To refund" under **Credit notes**: once the refund is made, click **Refunded** and give the date.
- **Drop-out.** No credit note: see [Enrolments](./inscriptions#recording-a-drop-out).

## What is invoiced

Only certain events trigger an invoice: the schedule's instalments, registration for a paid event, an accepted company quote, a confirmed placement.
