---
layout: doc
---

# Extended activities

Modules 19 to 28, 30, 31 and 33 extend the core without being a prerequisite. They address distinct audiences and actors, but reuse the same accounts, billing and documents.

## B2B training on quotation (module 19)

A company requests training for its employees from the NextBoxx website (API) or from “My company requests”. The request `DEM-NB` carries the company name, programme, format, headcount and desired date.

1. The **Pedagogical Coordinator** sends a quote `DEV-NB` as a PDF: programme, format, headcount, dates, pace, total amount. Above 15 learners, one cohort per block of 15.
2. The contact accepts or refuses the quote in their area; the Coordinator can record the acceptance on their behalf.
3. On acceptance, **dedicated cohorts** are opened in the company's name, without a promotion, and a **single invoice** for the quote amount is issued, due on the first day of training.
4. The contact or the Coordinator adds employees within the 15-seat limit. Account created or reused, enrolment active immediately, Learner role, booklet and Sève access. No candidature, no agreement, no individual invoice.

On non-payment, the dedicated cohorts' enrolments and Sève access are suspended at D+30, then restored on payment. The “settled” condition for a B2B learner is the paid request invoice.

## Matching and recruitment (modules 23 to 26)

An organisation submits a **matching** request (internship, apprenticeship, assignment) or a **recruitment** request (permanent or fixed-term contract) from “My company requests”. The form only shows the fields for the chosen type.

- Only a holder of a **NextBoxx certificate** can become visible to companies, with a PDF CV and a short presentation.
- The **Partnerships Officer** proposes visible profiles, in one or several rounds.
- The organisation sees the first name and last-name initial, the certificates and the presentation. A retained profile reveals the name, email, phone and CV, and the learner is notified.
- As soon as a profile is retained, the Officer confirms the matching: an invoice is issued to the contact, due in 30 days, per retained profile, with the matching flat fee and, if requested, the support flat fee.
- Without both flat fees set by the Administrator, confirmation is impossible. Non-payment follows the reminders and moratorium, without suspension.

## Events (modules 20 to 22)

The **Events Officer** and the Administrator create an event (title, description, dates, venue, seats, price in FCFA, 0 for free), publish it, edit it and cancel it as long as it has not started. Statuses: **draft**, **published**, **cancelled**.

- Registration from the website (API) or from “My events”; **Participant** role added.
- Refused for an organisation account, an already registered account, a closed event, or a suspended account on a paid event.
- Confirmed and pending-payment registrations hold a seat; beyond that, a **waiting list**. A freed seat goes to the first registered person, who is notified.
- Paid event: invoice `FAC-NB` at registration, due **48 hours before the start**. Full payment confirms. Without payment at 48 hours, the registration is cancelled, the outstanding amount cancelled by credit note, and the seat freed.
- A free event confirms immediately and takes registrations until it starts.
- Cancellation: every registrant is notified; paid amounts are refunded by credit note, outstanding amounts cancelled.

Event invoices are excluded from the billing calendar, training reminders, commissions and the Direction and Reporting dashboards.

## Event funding (modules 27 and 28)

An **Event Funder** declares a contribution from “My funding”: event, nature (financial, in kind, other), description, amount in FCFA. The Events Officer can also enter a contribution for an account, even after the event ends.

- A contribution stays **declared** until the Officer validates it and records its receipt with the date. It is never counted automatically.
- The Officer can refuse it with a reason. No invoice is issued.
- Validation issues the **funding agreement** `CONVE-NB-YYYY-XXX`, sent to the funder, without electronic signature.
- The Officer enters the event **expenses** (label, amount, date, optional supporting document) and can correct or delete them.
- **Net balance** = received contributions − expenses. The funder sees the total of their contributions, the event expenses and the net balance, without the details of other funders.
- On event cancellation, declared contributions are cancelled; received contributions remain in the balance and their funder is notified.

## L'Éclosion (modules 30 and 31)

The **Incubation Officer** creates a cycle as a draft (title, submission deadline, start and end), then opens it. Submissions close no later than the start of the incubation.

- Any account applies once per cycle: project name, sector, problem, solution, progress, optional PDF pitch. The **Canopé** path is only offered to an account with Canopé status; others apply as external holders.
- The Officer enters **competition winners** for their account, with the competition name and year.
- The Officer **retains** or **refuses** with a reason. A retained project grants the **Project Holder** role.
- The Officer proposes a **participation**: equity or revenue share, percentage and conditions.
- The **investment committee** votes unanimously: the proposal counts as the Officer's vote, then the Pedagogical Coordinator and Direction vote, each from a different account. A vote against gives a reason for refusal; a new proposal can then be made.

## Technology partnerships (module 33)

The **Partnerships Officer** or the Administrator creates a partnership under negotiation: organisation, solution, nature (pedagogical integration, certification, tool supply), concerned programmes, signing contact, optional end date.

- The partnership is **free**, in exchange for visibility. It is not a marketing partner, which is paid.
- The contract is signed like the Agreement: 7-day email link, full read, code received at the same address, no account. edPage countersigns according to the Administrator's setting.
- On countersignature, the contract receives its reference `CONVP-NB-YYYY-XXX` and its sealed PDF; the partnership becomes **active** and its programmes are frozen.
- Visibility (logo, link, presentation, nature) remains editable and appears on the website and in the “Partners” block of the Sève course of the concerned cohorts, updated every hour.
- The partnership ends the day after its end date. A concerned cohort keeps it until its own end if it has started.

## Notifications

A single engine (email, Sève, WhatsApp) sends all reminders and alerts. Email always goes out; Sève is added for accounts opened in Sève; WhatsApp is added for payment and admission reminders, if the account has a phone number. A failing channel does not block the others.

Triggers cover payment, admission, roles, certification, attendance, B2B training, matching, events, event funding, partnerships and generated documents. Details are in [Integrations](/en/guide/integrations#notifications).
