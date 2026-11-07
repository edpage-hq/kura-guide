---
layout: doc
---

# Cohorts

A cohort is a scheduled session of a program, attached to a promotion. It has **15 learners at most** and can mix the three formats: the format and price are carried by each enrolment, not by the cohort.

## Opening a cohort

**Training → Cohorts → Open a cohort.** The form lists the programs and shows, for each, what prevents it from opening:

- program **not published**;
- **QCM bank not validated**;
- **price missing** from the grid for an offered format.

Then fill in:

|                    |                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Promotion and year | Baobab (September), Iroko (December), Acacia (March) or Karité (June). One cohort per program, promotion and year              |
| Dates              | Start and end. The end at the earliest at the program's duration (25 or 12 weeks); part-time lengthens it, enter the real date |
| Pace profile       | Full-time or part-time, for information                                                                                        |
| Lead trainers      | At least one. Mandatory                                                                                                        |
| Coach-tutors       | Optional                                                                                                                       |

On opening, **the grid prices are frozen** on the cohort. The mid-point and the dates of the three instalments (30/40/30) are **calculated**, never entered: 30% at the start (or at signing if later), 40% at the mid-point, 30% at the end.

## The life cycle

| Status                       | What triggers it                                                                          |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| **Open**                     | On opening                                                                                |
| **Confirmed**                | You click **Confirm**                                                                     |
| **In progress**              | Automatically, on the start date of a confirmed cohort                                    |
| **Completed**                | Automatically, after its end date. Its active and suspended enrolments become "completed" |
| **Postponed**, **Cancelled** | You decide, before the start                                                              |

Dates, pace and staffing stay editable **until the start**; frozen prices do not change.

### Postponing or cancelling

A **postponement** or **cancellation** is only possible before the start, with a **mandatory reason**, and the decision is **final** and logged.

- **Postponement**: you choose the **replacement cohort**, an upcoming cohort of the same program, with a seat and a price for each learner. All non-dropped enrolments move there.
- **Cancellation**: enrolments become "without cohort". You place each learner again or record their drop-out.

The financial consequences follow the billing rules (see [Billing](./facturation#if-a-cohort-changes-or-is-cancelled)).

## The cohort's Sève course

On the cohort page, enter the **Sève course id**. Each learner is enrolled in it as soon as their first instalment is paid; without an id, their enrolments wait. It is also needed for virtual classes and grades to flow back into Kura.

## Profitability zones

Kura classifies each cohort by its **confirmed headcount** (signed enrolments):

| Zone        | Default headcount |
| ----------- | ----------------- |
| Fragile     | Fewer than 7      |
| Viable      | 7 to 11           |
| Comfortable | 12 to 15          |

The Administrator sets the thresholds per category. A cohort that starts **freezes its zone** with its headcount: a threshold change only touches upcoming cohorts.

### The profitability dashboard

**Training → Profitability** presents open and confirmed cohorts, with:

- their zone and headcount against the thresholds;
- the **signed revenue**, and that awaiting signature;
- the **staffing cost** and the share covered by revenue;
- a cohort **"To decide"**: fragile less than a week before the start, placed first.

In the fragile zone, the dashboard recommends considering a postponement. **It triggers nothing**: the decision is yours.

## The cohort page

The page gathers the calendar, schedule, frozen prices, the Sève course, staffing, learners (with the "No image rights" marker), and links to **attendance** and **results**.

The **Documents** panel generates on demand:

- the **provisional calendar** (for everyone who sees the cohort);
- the **activity report**: seats, attendance, results (for you and the Administrator);
- the **defence report**, see [Results and certification](./resultats).
