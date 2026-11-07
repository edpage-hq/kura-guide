---
layout: doc
---

# Catalogue and QCM banks

The Pedagogical Coordinator keeps the catalogue of trainings and the admission test questions. The Administrator can do the same. Everything takes place in the **Training** section.

## The catalogue

**Training → Catalogue** lists the programs with their code, category, formats, duration and status: **Draft**, **Published** or **Archived**. Only a published program is visible on the NextBoxx website.

### Creating a program

**New program** asks for a code, a title, a category and, for the Career Path category, whether it is the **Web & Mobile Development package** (700 h). The code starts with the category prefix followed by two digits (for example `NB.FP.01`). **The code, category and package no longer change after creation**: the code is the program's permanent key.

The teaching content is entered **once per program**: objectives, teaching methods, prerequisites, logistics, and the **competency blocks** in their teaching order, each with its duration in weeks (the total is compared with the program's duration). Each block carries its **Sève gradebook code** (`KURA-BLOC-{id}`), which trainers copy into Sève.

The **formats** offered are to be ticked: online, hybrid, in person.

### Publishing, unpublishing, archiving

| Action                       | Condition                                                                                |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| **Publish**                  | At least one format, objectives and at least one block. The screen lists what is missing |
| **Unpublish** or **Archive** | Impossible if an open, confirmed or in-progress cohort depends on it                     |
| **Restore as draft**         | For an archived program                                                                  |
| **Delete**                   | Only a draft that was never published                                                    |

### The price grid

The price is **never entered freely**: it comes from the **price grid**, by category and format. **Training → Catalogue → Price grid** shows the prices in force (in FCFA, excluding tax) and lets you **schedule a change** from a date. A change only applies to **cohorts opened after that date**: it is never retroactive, and an already open cohort keeps its prices.

## QCM banks

The admission test draws on a bank of **20 questions per program**. **Catalogue → QCM banks** gives the state of each bank: **Validated**, **To validate** or **Missing**. Without a validated bank, candidates cannot take the test and **no cohort of that program can open**.

Only the Pedagogical Coordinator and the Administrator have access. Trainers and advisors do not.

### Importing

1. Download the category's **template**: an `.xlsx` workbook with one sheet per non-archived program, named by its code.
2. Fill in each sheet: **exactly 20 rows**, with the columns `énoncé`, `choix_1` to `choix_4` and `réponse_correcte` (the number of the right choice, from 1 to 4).
3. Choose the category, the workbook, then **Import**.

Each sheet is processed **independently**: a compliant sheet creates a draft batch, a faulty sheet (wrong structure, unknown code, 18 rows instead of 20, answer missing from the choices) is rejected alone, with the **row and column** at fault. A report per sheet is displayed. The file is **never kept**, in success or failure: only its name is logged.

### Validating

Import and validation are **two separate actions**. Open the program's bank, review the questions, then **Validate the bank**. The questions of the program's other batches are then removed from the draw (they stay in the database).

- A **new import** never replaces a validated bank: it creates a batch to validate, and **the old bank stays in service** until the new batch is validated. You can thus re-import a single sheet to correct a program.
- **Editing a validated question** puts it back to "To validate": the bank must be validated again to be used.

The bank is to be reviewed **every year**.
