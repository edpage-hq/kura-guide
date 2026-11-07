---
layout: doc
---

# Monitoring and control

## Sève sync

**Administration → Sève sync** shows the calls Kura sends to Sève: opening the account, account status (active, suspended, Canopé), course enrolment, course removal.

Each call is **pending**, **failing** or **sent**. An account's calls go **in order**: a failing call holds back that account's following ones.

- A failure is **retried** automatically, at increasingly spaced intervals. The page shows the number of attempts and the next one.
- At the **fifth failure** of a call, Administrators are **alerted**.
- **Retry** relaunches a call without waiting.
- An account Moodle already knows is found, not created twice.
- As long as Sève is not configured, calls wait, and the page says so.

If a learner says they have no access to Sève, this is where you look to see if their account opening or course enrolment is blocked. A learner is only enrolled in a course if the Coordinator has entered **the cohort's Sève course id**.

## The audit log

**Administration → Audit log** keeps all **sensitive actions**, in order: role approvals and withdrawals, account conversions, user edits, consent changes, signatures, certificate issuances, attendance corrections, and so on.

Each entry carries its date, **action**, **author** (or "System"), **target**, the **channel** and **details** (values before and after). Filter by action or author.

**The log cannot be modified**: no entry is erased or corrected. The actions of privileged accounts (Coordinator, Direction, Administrator) on accounts and roles are always recorded there.

## Deliveries and notification failures

The **deliveries log** under **Training → Communication** shows what the notification engine sent, channel by channel, with failures (see [Communication](../coordinateur/communication#the-deliveries-log)). A failure on one channel does not stop the others.
