---
layout: doc
---

# Enrolments and agreements

**Journeys → Enrolments** lists the admitted learners, with their program, cohort, format, status and consents. Filter by status (To sign, Active, Suspended, Dropped, Completed), by program, or on **Without cohort**.

## Placing a learner

An enrolment **without cohort** (the advisor chose none at admission, or the cohort was cancelled) carries the "To place" marker. **Place** opens the list of cohorts that can take them: not yet started, with a seat and a price for their format. The learner is told by e-mail. **Move** does the same for an already placed learner, as long as they have not signed.

Every non-dropped enrolment **takes a seat**. Headcount and profitability zone only count **signed** enrolments.

## Funding

Before signing, **Funding** lets you designate a **funder** (an organization account with the Funder role) and their share, from 1 to 100%. "None" leaves the learner paying everything. The split appears in the agreement. See [Funding learners](../entreprises/financeur).

## The business referrer

**Business referrer** links the enrolment to the account that brought it, if any. The code (`AP-XXXXXX`) is normally entered by the candidate; you can correct it **until the first payment**. The referrer earns 5% of each payment (see [Remunerations and commissions](./remunerations)).

## The agreement text

From **Enrolments**, the **agreement text** (the general terms) is published in **immutable versions**: once published, a version can no longer be edited. A new version applies to **following** signatures; each signed agreement keeps the one it signed. **Without a published text, no agreement can be signed.**

Kura adds to this text the specific terms (parties, program, cohort, format, price excluding tax, 30/40/30 schedule).

## Counter-signature

When the learner has signed, edPage group must counter-sign. The Administrator sets whether counter-signature is **automatic** (in the representative's name, the default) or **manual**. In manual mode, agreements to counter-sign appear in enrolments, filterable by **To counter-sign**, with the **Counter-sign** button.

On counter-signature: the agreement receives its reference `CONV-NB-YYYY-XXX` and its sealed PDF, sent to the learner; the enrolment becomes **active**; the format, cohort and price are fixed; the first invoice is issued.

### The tripartite agreement

When an agreement with a funder is counter-signed, Kura prepares the **tripartite agreement**. The funder signs it; in manual mode, you counter-sign with **Counter-sign the tripartite**. It blocks neither the enrolment nor billing.

## The internship agreement

For a learner whose training includes an internship, **Enter the internship** (then **Edit the internship**) asks for:

- the **host company** and its **signing contact** (name and e-mail);
- the **Coach-Tutor** supervising the internship, chosen among the cohort's;
- the start and end **dates**, and the **mission**.

**Send the internship agreement to sign** starts the signatures: the learner (or their legal guardian if a minor) and the company, by link and code. As long as **no signature** has been given, you can edit the internship; **any edit withdraws the agreement sent** and it must be sent again. When both parties have signed, edPage counter-signs (**Counter-sign the internship** in manual mode).

The company name is reused in the jury's evaluation of the internship. An internship without an agreement remains possible: the jury then enters the company by hand.

## Changing cohort (force majeure)

**Change cohort (force majeure)** moves a learner on proof: enter the **reason and proof** (for example "medical certificate of 12 March"). They move to the next session of the same program, their payments are kept, with no new invoice or partial attestation.

After signing, any change of cohort **replaces the agreement**: the old one is kept, the enrolment goes back to pending signature, and a new agreement, at the same price and format, is to be signed. The learner is notified.

## Recording a drop-out

**Record a drop-out** ends the enrolment. Choose the reason:

- **Voluntary drop-out**;
- **Unenrolled for non-payment** (after D+30, with no settlement).

A note is optional. The seat is freed and the learner leaves the headcount. No credit note is issued: instalments not yet invoiced will no longer be, invoices already issued remain due. If at least one block is validated, you can issue a **partial attestation** (see [Results and certification](./resultats#the-partial-attestation)).

## Consents

The **Consents** column shows each learner's answer: "Reuse" and "Image", or "Awaited". Both are required before signing. A **minor** learner is flagged: their consents and signature are those of their legal guardian.
