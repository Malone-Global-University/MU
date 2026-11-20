Basic Computer Skills / Spreadsheet Skills

## Lesson 9: Checking Spreadsheet Errors

A volunteer prepares a fictional supply report in a spreadsheet. Five items should cost **$85** in total, but the summary shows **$73**. There is no red warning, no alarming message, and no unusual symbol in the total cell. The formula appears to work. The problem is that it stops one row too early. In a second example, a cell displays `#DIV/0!` instead of a number. Both are errors, but only one announces itself. This is why a reliable spreadsheet needs both technical checks and careful human review.

[[spreadsheet-error|Spreadsheet errors]] include incorrect entries, broken [[formula|formulas]], wrong [[cell-reference|cell references]], missing or duplicated records, misleading [[formatting|formatting]], and mistakes in the way results are interpreted. Some produce recognizable [[error-value|error values]], while others are [[silent-error|silent errors]]: the worksheet gives an ordinary-looking answer that happens to be wrong. A good reviewer learns to distinguish the two and to correct the underlying cause rather than merely making an unwanted message disappear.

This final lesson brings together Spreadsheet Skills Lessons 1–8. You will inspect [[data-type|data types]], check calculations with [[independent-check|independent checks]], verify [[range|ranges]], examine [[sort|sorts]] and [[filter|filters]], and review charts and budgets before sharing them. The examples use Microsoft Excel, Google Sheets, and LibreOffice Calc. Menus, warnings, function separators, and specific error displays may differ by product, version, and regional settings; the reasoning process is more durable than any particular button name.

All names, inventory records, and financial amounts in this lesson are **fictional**. You can complete every exercise on paper without accessing an account or making changes to a shared file. When working with real records, first confirm that you have authorization to view, edit, correct, or share them. Do not upload confidential business, personal, financial, health, or student information into an unfamiliar troubleshooting website or AI tool.

**Level:** Beginner · **Estimated study time:** 110–150 minutes · **Prerequisites:** Spreadsheet Skills Lessons 1–8 recommended · **Practice equipment:** Paper and pencil, or a blank worksheet in Excel, Google Sheets, or LibreOffice Calc · **Safety:** Work from fictional records and a reversible copy; never replace source evidence with a guessed answer.

> **Essential idea:** **PAUSE → PRESERVE → IDENTIFY → TRACE → VERIFY → CORRECT → RETEST.** Notice what seems wrong, keep the original available, locate the affected cell or record, trace its inputs and formula, compare against reliable evidence, make a justified correction, and check that the surrounding results still agree.

### Learning objectives

After completing this lesson, you should be able to:

1. Distinguish a visible error message from a plausible but incorrect result.
2. Explain why an error indicator is useful evidence, not an instruction to replace everything with zero.
3. Recognize common spreadsheet messages such as `#DIV/0!`, `#REF!`, `#VALUE!`, `#NAME?`, and `#N/A`, while allowing for software differences.
4. Distinguish a display-width problem from a calculation error.
5. Find common entry problems involving blanks, numeric text, dates, units, and duplicate IDs.
6. Inspect a formula and confirm its referenced cells and arithmetic before changing it.
7. Detect omitted rows, accidental double counting, and inconsistent copied formulas.
8. Explain why sorting a single column or reading a filtered list without context can produce misleading records or totals.
9. Check that a chart's source data, scale, titles, and labels match the question being answered.
10. Use a small [[audit-checklist|audit checklist]] and a [[correction-log|correction log]] to document a justified fix.
11. Preserve original work, verify changes, and avoid exposing private records during troubleshooting.
12. Complete six guided activities that combine the entire beginner Spreadsheet Skills sequence.

### On this page

- [1. Recognizing spreadsheet errors](#1-what-counts-as-a-spreadsheet-error)
- [2. Checking data entries](#2-how-do-you-check-the-entered-data)
- [3. Understanding formula error messages](#3-how-do-you-interpret-formula-error-messages)
- [4. Checking formulas, ranges, and totals](#4-how-do-you-find-wrong-results-without-error-messages)
- [5. Reviewing sorts, filters, and charts](#5-how-do-you-check-organized-data-and-charts)
- [6. Using a careful correction workflow](#6-how-do-you-correct-and-verify-errors-safely)
- [7. Guided practice](#7-guided-practice-audit-a-small-spreadsheet)
- [8. Common misconceptions](#8-common-misconceptions)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. MGU Library connections and next steps](#11-mgu-library-connections-and-next-steps)

## 1. What counts as a spreadsheet error?

An error is a mismatch between what a spreadsheet is supposed to represent or calculate and what it actually represents or calculates. Not every unusual-looking value is wrong. A negative amount may accurately show a shortfall. A blank cell may intentionally mean information has not been collected. A zero may be a verified measurement. Checking errors begins by understanding the intended meaning of the worksheet, not by demanding that every cell look alike.

### Visible errors and silent errors

Some formula problems cause the spreadsheet application to display a special message. If a calculation tries to divide by zero, for example, Excel or Google Sheets commonly displays `#DIV/0!`. Such a message indicates a particular evaluation problem and often points the reviewer toward the inputs that need inspection. Other problems are subtler: `=SUM(E2:E5)` can return a perfectly ordinary number even when E6 should have been included.

| What you see | Possible issue | Why the appearance matters | First useful check |
| --- | --- | --- | --- |
| `#DIV/0!` | Division has a zero or missing denominator | Calculation cannot produce the intended finite quotient | Inspect denominator and its source |
| `#REF!` | A referenced cell or range is no longer valid | Formula cannot locate an expected input | Inspect formula and recent deletion or movement |
| `#VALUE!` | A formula has incompatible input types or arguments | Arithmetic may be receiving text or another unsuitable input | Inspect individual input cells |
| `#NAME?` | An application does not recognize part of a formula | A function or defined name may be misspelled | Review spelling and syntax |
| `#N/A` | Requested lookup value is unavailable | Matching data may be absent or inconsistent | Examine the lookup value and source list |
| `#####` in some Excel cells | Column too narrow, or an unsupported date/time display | Display may be blocked without the underlying number being wrong | Check column width, cell value, and format |
| Ordinary-looking `$73` | Range omits a valid line | Technically valid calculation, incorrect business total | Compare range with source records |
| Ordinary-looking `15` | Numeric entry is correct but units are unclear | Reader could mistake hours for dollars or items | Read heading and reporting note |

The exact message is **not** a complete diagnosis. For example, a `#REF!` message can result from several kinds of invalid reference; `#VALUE!` may involve more than one data-type issue. Excel, Google Sheets, and LibreOffice Calc share many concepts but do not provide identical error lists or screen displays. LibreOffice may also display numeric error codes such as `Err:522` for circular references. Use the message as a clue, not as a substitute for examining the formula.

### The five layers of a useful error check

1. **Purpose:** What question should this table answer, and what period and units does it cover?
2. **Inputs:** Are the labels, numbers, dates, and status values complete and supported by the source?
3. **Calculations:** Do the formulas refer to the intended cells and apply the correct operation?
4. **Presentation:** Are the totals, rows, filters, charts, and labels displayed accurately?
5. **Communication:** Could a reasonable reader misunderstand a missing value, estimate, date, or filtered count?

A technically valid formula can still be inappropriate for the business question. For example, `=AVERAGE(C2:C6)` may correctly compute a mathematical mean, but that mean could be misleading if the column mixes counts from different time periods or contains a missing observation that the reviewer did not notice.

### Find the expected answer before changing a formula

Suppose the following practice table lists five fictional supply line estimates. All quantities and prices are already checked for the purposes of this example.

| Source row | Item ID | Quantity | Unit price | Correct line estimate |
| --- | --- | ---: | ---: | ---: |
| 2 | KIT-101 | 8 | $2.50 | $20.00 |
| 3 | KIT-102 | 12 | $1.25 | $15.00 |
| 4 | KIT-103 | 6 | $3.00 | $18.00 |
| 5 | KIT-104 | 4 | $5.00 | $20.00 |
| 6 | KIT-105 | 3 | $4.00 | $12.00 |
| **Total** | **Five records** | **33 items** | **Different prices** | **$85.00** |

The five amounts sum to **$85** (`20 + 15 + 18 + 20 + 12`). If the total formula uses `=SUM(E2:E5)`, the result is **$73**, because the final $12 is omitted. The software is following the formula accurately; the formula is answering the wrong question. Changing the font color cannot fix that omission.

> **Principle:** A spreadsheet's absence of a warning is not proof of accuracy. A useful audit compares the result to an independent expectation and its underlying records.

## 2. How do you check the entered data?

Even a correct formula produces an unhelpful result when the input data does not represent the intended facts. Reviewers should separate **data-entry accuracy** from **display formatting** and **calculation correctness**. Start with a small sample of source records, check their headings and units, and then examine unusual or incomplete cells.

### Numbers stored as text

A cell can look like a number while being stored as [[numeric-text|numeric text]]. This may happen after pasting data from another source, including a leading apostrophe, or entering a number in a cell that has been set to text format. A formula may ignore such cells, treat them differently, or return an error depending on the operation and application.

Do not convert every digit-looking entry into a number. An item ID such as `0017`, a ZIP code, or an account reference is an **identifier**, not a quantity; forcing it into a number can remove meaningful leading zeros. Conversely, a unit price intended for arithmetic should normally be an actual numeric value with currency *display formatting*, not a text string that contains typed currency symbols in an unsuitable import.

### Blank cells, zero, and unavailable data

A [[blank-cell|blank cell]] means there is no entered value; a [[zero-value|zero]] records a numeric amount of none. These are not equivalent when data quality matters. The `COUNT` function counts numeric cells; `COUNTA` counts cells that are not empty. Some functions omit blanks from their calculation, so a missing value can change an average without creating an error.

| Entry in a record | What it might mean | Can you safely replace it with zero? |
| --- | --- | --- |
| Empty quantity cell | No count recorded yet | No; verify before changing |
| Numeric `0` in quantity | Verified none available | Keep if the record supports it |
| Text `TBD` in unit price | Price has not been determined | No; mark as pending rather than inventing $0 |
| Text `0042` as supply ID | Identifier with required leading zeros | No; preserve as text |
| Numeric `42` in a count field | Forty-two units counted | Yes as numeric input, if supported by source |
| Date displayed as `01/02/26` | Ambiguous month/day convention | No; confirm date and locale |

### Data quality questions worth asking

- **Completeness:** Are required records or fields missing, including records hidden by a filter?
- **Uniqueness:** Is the same [[record-id|record ID]] used twice? A repeated ID may be a true error or a valid repeated event; verify its meaning.
- **Consistency:** Do statuses use a controlled vocabulary, such as `Ready`, `Needed`, and `Ordered`, instead of inconsistent spellings or trailing spaces?
- **Correct data type:** Are measured numbers numeric, identifiers stored safely, dates recognized appropriately, and labels treated as text?
- **Plausibility:** Are negative quantities, very large values, or future dates reasonable for this task, or do they warrant investigation?
- **Evidence:** Does an invoice, counting sheet, approved source list, or authorized record support the number?

### Input checks and formatting checks are different

A number displayed as `$2.50` might be stored as numeric `2.5` with a currency format: this is normal. The string `2.50` entered as text may look nearly identical but behave differently in a calculation. Similarly, a column displaying `#####` in Excel may need more width rather than a changed formula. Never replace a correct source number simply because its format is inconvenient.

| Symptom | Inspect first | Possible justified response |
| --- | --- | --- |
| Total omits an apparent price | Data type of price cell | Convert confirmed numeric input without changing its meaning |
| ID changed from `0042` to `42` | Source identifier and cell type | Restore identifier as text from a trusted record |
| Date appears one day or month off | Date value, regional parsing, display format | Confirm intended date before editing |
| Multiple rows show `Ready ` with extra space | Status text and entry workflow | Standardize approved status values after verifying records |
| Blank cost is counted as zero in a report | Meaning of the blank and report policy | Report missing input explicitly; do not imply a confirmed $0 |
| Several items appear identical | Stable IDs and transaction history | Determine whether records are truly duplicates before removal |

### Use validation to prevent, not erase, mistakes

[[data-validation|Data validation]] can offer choices for a status column or flag entries that do not fit an expected pattern. It is useful but not foolproof: imported data, existing values, permissions, or application behavior can still leave errors. A status dropdown cannot verify that the physical item was actually delivered. Its purpose is to reduce inconsistent entries, not to replace evidence.

> **Remember:** Check meaning before formatting. A cell that *looks* like a number may not act like one, and a value that looks unusual may be a valid ID, a missing observation, or a legitimate negative number.

## 3. How do you interpret formula error messages?

A [[formula-error|formula error]] arises when a spreadsheet cannot interpret or compute an expression as intended. The most efficient response is usually to examine the formula bar, identify the referenced inputs, and narrow the issue to syntax, reference, or data type. The examples below use familiar Excel and Google Sheets-style error messages. LibreOffice Calc may display an equivalent message or a separate code.

### Common errors at a glance

| Error or symptom | Typical meaning | Example to inspect | First repair question |
| --- | --- | --- | --- |
| `#DIV/0!` | Dividing by zero or an empty denominator | `=B2/C2` where C2 is `0` | Is zero valid or is a required count missing? |
| `#REF!` | Invalid reference | Formula refers to a removed source cell | Was a source range moved or deleted? |
| `#VALUE!` | Unsuitable input type | `=B2+C2` where C2 contains nonnumeric text | Which argument is not appropriate? |
| `#NAME?` | Unrecognized formula text or name | `=SOM(E2:E6)` instead of `SUM` | Is the function name spelled correctly? |
| `#N/A` | A requested value is unavailable | Lookup cannot find an ID | Is the ID absent, different, or mistyped? |
| `#NUM!` | Invalid numerical argument or unsupported calculation | Certain functions with unsuitable numeric inputs | What numerical constraint was violated? |
| `#NULL!` in Excel | Invalid range intersection | Incorrect reference intersection syntax | Did you intend a union, a range, or a different cell? |
| `Err:522` in Calc | Circular reference | Formula depends on its own result | Does the dependency loop back? |
| `#####` in Excel | Display is too narrow, or date/time display issue | Long currency display | What value is actually stored? |

Error indicators and messages vary. Google Sheets may describe a malformed formula as a **formula parse error**; Excel may open a dialog about a problem with the formula; Calc has its own error numbers. Do not expect the same punctuation or label in every product.

### Divide-by-zero: inspect the denominator

If C2 is `0`, then `=B2/C2` is not a usable ordinary ratio. The message `#DIV/0!` is doing something important: preventing the calculation from being treated as a valid finite number. First ask why C2 is zero. Does it mean there really were zero participants, is the count missing, or was the wrong cell referenced?

Entering `1` only to make the error vanish would falsify the source. Replacing the error with a bare `0` may imply a meaningful ratio of zero even when the ratio is **undefined**. In a real report, the correct response might be to show `Not applicable` under an approved reporting convention and clearly state why; that decision comes after understanding the data.

### Reference problems: check what moved or disappeared

`#REF!` commonly signals that part of a formula no longer points to a valid location. A deleted row, cut-and-paste operation, or structural change may be responsible. Review the original column and row structure, inspect the formula, and consider a reversible undo if the mistake just occurred. When editing a shared workbook, coordinate restoration instead of independently rearranging other people's data.

### Incorrect types or names: do not guess

In `=B2+C2`, a cell containing the literal text `pending` is not an ordinary numeric amount. Some operations show `#VALUE!`; other functions handle text inputs differently. Check the specific operation and cell values. Likewise, `=SOM(E2:E6)` is not the standard English `SUM` function. If the program does not recognize it, correct the **function name**, not the source prices.

### A circular reference needs explanation

A [[circular-reference|circular reference]] occurs when a formula depends on itself directly or indirectly. For example, a total in E7 that references `E2:E7` includes its own cell. A beginner's total usually should use `=SUM(E2:E6)`, not a range that includes E7. Some advanced workbooks intentionally enable iterative calculations, but that is not a beginner troubleshooting shortcut. Identify the loop and confirm the intended dependency first.

### Do not silence the message instead of finding the cause

Some applications support `IFERROR` or other conditional formulas that replace error outputs with a selected fallback. That can be useful **after** you understand the reason and define a sound reporting policy. It can also hide broken source references and missing inputs. For this lesson, first fix or explicitly document the underlying problem; do not automatically convert every error to zero or blank.

> **Technical distinction:** A visible error code, an application warning, and a logically wrong answer are three different situations. Check the underlying values, not just the wording on the screen.

## 4. How do you find wrong results without error messages?

[[silent-error|Silent errors]] are common because the spreadsheet is usually following the instructions it was given. An incorrect formula may be syntactically valid. An inconsistent data range may be entirely legal. Detecting these problems requires checking the **intended scope**, comparing formulas in nearby rows, and recomputing a sample independently.

### Check whether the selected range includes every intended record

Return to the five supply entries in rows 2–6. If E7 is the total cell, the formula should normally be `=SUM(E2:E6)`.

| Formula in E7 | Result | Interpretation |
| --- | ---: | --- |
| `=SUM(E2:E6)` | $85.00 | Includes all five intended line estimates |
| `=SUM(E2:E5)` | $73.00 | Omits E6, a $12.00 line estimate |
| `=SUM(E2:E4)` | $53.00 | Omits E5 and E6 |
| `=SUM(E2:E6)+E2` | $105.00 | Counts the first $20.00 twice |
| `=SUM(E2:E7)` placed in E7 | No ordinary final total expected | Formula refers to its own cell and creates a circular dependency |

A [[range-boundary|range boundary]] is not simply where the highlighted cells happen to end. It should follow the stated reporting scope. Review row 2, row 6, the headers, and any total or summary row. If data is added later, verify that formulas and chart sources have expanded appropriately.

### Compare formulas, not just displayed numbers

Suppose E2 is `=C2*D2`, E3 is `=C3*D3`, and E4 is `=C3*D4`. E4 might still return a believable-looking number, but it uses the quantity from **row 3**, not row 4. A reviewer can inspect one formula in each row or compare a pattern of adjacent formulas. When a formula has been copied, ordinary [[relative-reference|relative references]] should normally adjust by row. Exceptions may be intentional, especially with [[absolute-reference|absolute references]] such as `$B$1`; verify their purpose before changing them.

### Recalculate a small sample outside the formula

An [[independent-recalculation|independent recalculation]] does not need special software. Multiply 6 folders by $3.00 each on paper to confirm $18.00. Add the five line estimates to confirm $85.00. For high-stakes data, independence also means confirming that the **inputs** are trustworthy; repeating arithmetic on the same incorrect source amounts is not enough.

| Check | Expected value | Useful confirmation |
| --- | ---: | --- |
| KIT-101 line | $20.00 | 8 × $2.50 |
| KIT-103 line | $18.00 | 6 × $3.00 |
| Five-line total | $85.00 | 20 + 15 + 18 + 20 + 12 |
| All quantities | 33 | 8 + 12 + 6 + 4 + 3 |
| Number of distinct sample item IDs | 5 | Compare source IDs, not just visible row count |
| Ready-status estimate | $55.00 | 20 + 15 + 20 |
| Needed-status estimate | $30.00 | 18 + 12 |

### Use functions with the correct question in mind

`SUM` adds applicable numeric values in a chosen range. `COUNT` counts numeric cells; `COUNTA` counts nonempty cells. These functions do **not** answer the same question. A list may have five item IDs, five quantities, and one summary total. Counting the wrong column or including the summary row can misstate how many items are on the list. Similarly, an `AVERAGE` across missing values is not the same as an average that deliberately includes verified zero observations.

### Check whether the summary includes filtered or hidden data

Sorting changes the order of records; filtering typically changes which records are visible. A simple `SUM(E2:E6)` normally sums referenced values even when their rows are filtered out. Consequently, a worksheet that shows only Ready items may still display a grand total for both Ready and Needed items. That is not a broken `SUM`; it is a mismatch between the calculation and the label or user's expectation.

Applications offer functions and options for visible-row summaries, including `SUBTOTAL` in common spreadsheet programs. Such functions require understanding whether a row is hidden by a filter or manually, and the relevant function options. Beginners should first label a grand total clearly and independently add the visible items; use an advanced visible-row summary only after checking the product's instructions.

### Test one controlled change

In a disposable practice copy, changing a quantity from 6 to 7 should increase the relevant line estimate from $18 to $21 and the whole five-item total from $85 to $88, **if** the expected formula references the right cells. Restore the original six items afterward. This small experiment tests recalculation and formula links, but it does not replace source verification. Never perform a test on an authoritative shared workbook without permission.

## 5. How do you check organized data and charts?

Spreadsheet errors can arise even where no arithmetic appears. A sort may separate item names from their quantities; a filter may hide important records; a chart may present a correct series under a misleading label. The goal is to preserve the relationship among records, calculations, and the story told by the display.

### Do not sort one column independently of its records

A [[record|record]] usually occupies one row: ID, item, quantity, unit price, estimate, and status must stay together. Sorting just the quantities while leaving the item names and prices untouched destroys the meaning of the table. When sorting, confirm the complete table range, the header row, and the sort key. In a collaborative file, preserve a stable [[record-id|record ID]] to recover or verify relationships if the order changes.

### Count what a filter shows—and what it hides

The practice records include three `Ready` items and two `Needed` items. A Ready filter displays three records with a total estimate of $55; Needed rows remain in the source dataset and total $30. A label such as “All supply costs: $85” may be correct even while Ready-only rows are visible. A label such as “Visible Ready cost: $85” would be wrong. A filter is not a deletion, and a visible result is not necessarily the full dataset.

| Filter state | Visible IDs | Visible line estimates | Visible-only sum | Entire-source sum |
| --- | --- | --- | ---: | ---: |
| No status filter | KIT-101 to KIT-105 | $20, $15, $18, $20, $12 | $85 | $85 |
| Ready only | KIT-101, KIT-102, KIT-104 | $20, $15, $20 | $55 | $85 |
| Needed only | KIT-103, KIT-105 | $18, $12 | $30 | $85 |

### Verify a chart against its source table

A chart can appear polished and still be wrong. Before relying on it, check the [[chart-source-range|chart source range]], categories, series, period, scale, and units. If the underlying data changed after the chart was created, verify that the chart actually reflects the current relevant range. Do not assume every chart updates correctly after structural changes or exports.

| Chart issue | What the reader might think | What the reviewer should verify |
| --- | --- | --- |
| New row excluded from chart range | Five items are represented when only four are plotted | Data-source selection includes all intended rows |
| Axis starts high without explanation | A small difference appears dramatic | Axis scale and whether it misleads the comparison |
| Bar chart mixes counts and dollars | Both bars represent the same unit | Each series' unit and whether separate charts are needed |
| Pie chart leaves out a category | Displayed slices represent 100% of all items | Selected categories and total denominator |
| Title refers to October but data is September | The result covers the named month | Data dates, worksheet name, and chart title |
| Filter changes visible data but not claimed scope | Visible subset is mistaken for all records | Whether chart and caption describe the same population |

### Errors of interpretation need plain-language corrections

A report might calculate `3/5 = 60%` correctly but describe it as “60% of total supply cost is Ready.” In the sample, **60% is the share of items by record count** (three of five). The Ready items account for **$55 of $85**, or approximately **64.7% of the estimated cost**. Both are legitimate ratios, but they answer different questions. Labels must identify the numerator and denominator.

This distinction applies to attendance rates, household budgets, inventory reports, and basic charts. Never substitute a visually convenient percentage for the one the decision actually requires.

## 6. How do you correct and verify errors safely?

A responsible [[audit-workflow|audit workflow]] is small, repeatable, and reversible. It begins with the actual purpose and evidence, not a search for a formula that produces the preferred number. In real organizations, corrected records may also require approval, documentation, and a designated responsible person.

### A seven-step correction process

1. **Pause:** Identify the suspected issue and the decision that depends on it. Do not change several cells at once.
2. **Preserve:** Make an authorized [[working-copy|working copy]] or preserve the available [[version-history|version history]]. Avoid overwriting the only good source.
3. **Identify:** Record the affected sheet, row, cell, value, formula, time period, and expected scope.
4. **Trace:** Inspect original input evidence and every relevant reference or formula dependency. Confirm whether the error is entry, logic, display, or interpretation.
5. **Verify:** Calculate a sample separately or reconcile it to source records; do not guess missing values.
6. **Correct:** Apply the smallest justified change, within your editing authority. Record what changed and why.
7. **Retest:** Recalculate the affected total, inspect neighboring formulas, review filtered views and chart ranges, and confirm the intended reader can understand the result.

### A compact checklist for beginners

| Checkpoint | Question | Evidence of completion |
| --- | --- | --- |
| Purpose | Is the worksheet's question, period, and unit clear? | Title, date, and units inspected |
| Inputs | Are values supported and stored appropriately? | Sample records compared with source |
| Blanks | Are missing values distinguished from verified zeros? | Missing-data convention confirmed |
| Records | Are IDs unique where required and all expected rows included? | Record count and ID review |
| Calculations | Do formulas reference the correct cells and range? | Formula inspection and independent arithmetic |
| Status view | Is a filter hiding information used in a summary? | Filter state checked and total scope labeled |
| Charts | Are series, axes, labels, and data ranges accurate? | Chart checked against source table |
| Corrections | Are changes authorized, documented, and reversible? | Copy or version and correction note retained |
| Final review | Does the result still reconcile after the fix? | A second calculation or reviewer sign-off |

### Record the reason for a correction

A simple [[correction-log|correction log]] makes a worksheet easier to maintain. It should explain what was wrong, the evidence used, and the impact on the final result. Do not add personal information unnecessarily. For a fictional example:

| Field | Before | After | Evidence or reason |
| --- | --- | --- | --- |
| Total formula in E7 | `=SUM(E2:E5)` | `=SUM(E2:E6)` | Five item records occupy rows 2–6 |
| Reported total | $73.00 | $85.00 | Independent addition of five source line estimates |
| Review note | No scope note | All five fictional supply records | Avoids confusing visible filters with full totals |

The first two lines record one connected correction, not two unrelated changes. If an actual source quantity was uncertain, the note would say it remained unresolved; it would not invent a value to force reconciliation.

### Keep real data secure during troubleshooting

Only use practice or authorized records. Avoid emailing spreadsheets with unnecessary personal identifiers. Check who can view a shared link; edit access should be limited appropriately. A worksheet password, hidden tab, or protected sheet does not necessarily encrypt confidential information. When asking for help, describe the cell structure and formula using fabricated example values instead of disclosing private transactions or identifying details.

### Recognize your stopping point

Not every disagreement can be resolved by a beginner. If the original source is missing, the worksheet contains unexplained financial changes, formulas refer to external workbooks, or you do not have authority to correct the records, stop and escalate to the owner or an appropriate reviewer. Document what you observed without claiming certainty. Accuracy includes admitting when the data cannot yet support an answer.

> **Completion standard:** You have not finished troubleshooting merely because the warning disappeared. You finish when the intended scope, source inputs, calculation, display, and documented conclusion agree—or when you clearly identify what remains unresolved.

## 7. Guided practice: Audit a small spreadsheet

These six activities use fictional records only. They can be completed on paper or in an **unshared practice workbook**. Do not change real financial or institutional data. A valid paper answer includes the problem, the reason, and the verification step. If you work in software, choose your application's equivalent controls without assuming the menus are identical.

### Practice dataset and layout

Create a worksheet named `Supply Check`. Enter the following headers in A1:F1 and five records in rows 2–6. Column E contains **line estimates**, calculated as quantity × estimated unit price. Enter `=C2*D2` in E2 and copy the relative-reference formula down through E6. Enter `=SUM(E2:E6)` in E7 as the total and label row 7 in column B `Total estimate`.

| Row | A: ID | B: Item | C: Quantity | D: Estimated unit price | E: Line estimate | F: Status |
| --- | --- | --- | ---: | ---: | ---: | --- |
| 2 | KIT-101 | Notebooks | 8 | $2.50 | $20.00 | Ready |
| 3 | KIT-102 | Pens | 12 | $1.25 | $15.00 | Ready |
| 4 | KIT-103 | Folders | 6 | $3.00 | $18.00 | Needed |
| 5 | KIT-104 | Markers | 4 | $5.00 | $20.00 | Ready |
| 6 | KIT-105 | Tape | 3 | $4.00 | $12.00 | Needed |
| 7 | — | **Total estimate** | — | — | **$85.00** | — |

All values in the practice data are invented. The displayed dollar amounts are currency-formatted numbers. If you are entering the worksheet, enter the price as a numeric value and apply a currency format, rather than treating the dollar sign as mandatory text. The column letters are headers of the spreadsheet grid; the `A: ID` wording above tells you which field to place under which letter.

### Activity 1: Identify the kind of error (10–15 minutes)

For each example, identify whether you would first check **data entry**, **formula/reference**, **display**, or **report interpretation**. Some examples need more than one check; choose the most direct starting point.

| Observation | Your first check |
| --- | --- |
| A line formula reads `=C4*D3` instead of `=C4*D4` | ______ |
| KIT-105 is entered twice with no explanation | ______ |
| A currency value shows `#####` in Excel | ______ |
| A report says three Ready records equal 60% of the estimated total cost | ______ |
| A price cell contains literal text `pending` | ______ |
| A formula shows `#DIV/0!` after dividing by a blank count | ______ |

:::answer Show Activity 1 sample responses
1. **Formula/reference:** Row 4 should use the unit price on row 4, if that is what the calculation intends.
2. **Data entry and records:** Check whether KIT-105 was inadvertently duplicated; do not delete without verifying.
3. **Display:** Review column width and underlying date/time or numeric formatting before editing the value.
4. **Report interpretation:** Three of five is 60% of **record count**, not of **cost**. Ready cost is $55 of $85, approximately 64.7%.
5. **Data entry:** Determine whether the unit price is genuinely unknown. Do not substitute zero without evidence.
6. **Formula/input:** Inspect the denominator and its meaning. Do not force an arbitrary value into the count field.

:::

### Activity 2: Find entry problems in a separate copy (15–20 minutes)

Imagine a newly imported **separate copy** of the five-record list contains the following variations. Do not alter the original practice dataset. For each variation, write the source question you would ask and the smallest appropriate action.

| Imported observation | Source question | Possible action after verification |
| --- | --- | --- |
| KIT-102 quantity displays `12` but is stored as text | Was it intended as a numeric count? | Convert to a numeric 12 if confirmed |
| KIT-103 quantity is blank | Was it never recorded or truly zero? | Leave as missing pending confirmation |
| KIT-104 ID appears as `0104` while approved ID is `KIT-104` | Was an identifier truncated or transformed? | Restore approved ID as text |
| KIT-105 has status `Needed ` with a trailing space | Is this the approved status? | Standardize if source agrees |
| KIT-101 unit price is entered as `250` | Is the unit cents or dollars? | Check invoice or approved list before correcting |

Write down which changes can be decided from an approved source and which require follow-up. Explain why `250` should not be automatically changed to `2.50` just because that matches the expected example.

:::answer Show Activity 2 expected responses
- A numeric quantity is generally stored as a number so calculations can use it consistently, **after confirming it represents twelve items**.
- A blank quantity is unresolved. Zero would assert no items and is not interchangeable with missing data.
- An item ID is text identifying the record; restore the source identifier without using numeric conversion that strips characters.
- `Needed ` is a likely inconsistent status entry, but confirm the workflow before standardizing.
- The unit price `250` might be cents, dollars, or an error. Verify the original record and unit before correction; matching a practice answer is not sufficient evidence.

:::

### Activity 3: Inspect formulas and reconcile the total (15–20 minutes)

On a **fresh copy** of `Supply Check`, imagine E7 has been changed to `=SUM(E2:E5)`. Answer these questions before changing it:

1. Which intended row is omitted?
2. What amount is excluded?
3. What wrong total does the formula return?
4. What formula restores the intended five-line total?
5. Suppose E4 contains `=C3*D4` rather than `=C4*D4`. What result would E4 show, and what would the worksheet total show if the total range otherwise includes E2:E6?
6. How could you check the correction independently?

:::answer Show Activity 3 expected results
1. The omitted record is row 6, KIT-105 (Tape).
2. Its line estimate is **$12.00**.
3. `=SUM(E2:E5)` returns **$73.00**.
4. The intended total formula in E7 is `=SUM(E2:E6)`, which returns **$85.00** after the row formulas are correct.
5. If E4 incorrectly uses C3 (12 pens) × D4 ($3.00 per folder), E4 shows **$36.00** instead of **$18.00**; the grand total with the full range becomes **$103.00**. This is a distinct scenario from the omitted-row scenario.
6. Check each quantity × unit price independently, add the five correct line values (20 + 15 + 18 + 20 + 12), and confirm the $85.00 total. The fact that $103 looks ordinary would not make it correct.

:::

### Activity 4: Match formula symptoms to causes (15–20 minutes)

For each fictional formula situation, select the likely starting diagnosis. Write a safe next step, rather than immediately inserting a new number. The displayed message is an **illustrative common result**, not a guarantee that every application shows the same text.

| Situation | Common symptom | First diagnosis |
| --- | --- | --- |
| `=B2/C2` with C2 equal to `0` | `#DIV/0!` | Zero denominator |
| `=SOM(E2:E6)` under English function names | `#NAME?` | Unrecognized function name |
| `=B2+C2` with C2 containing text `pending` | `#VALUE!` | Incompatible argument type |
| Formula references a cell removed by deletion | `#REF!` | Invalid reference |
| E7 uses `=SUM(E2:E7)` | Circular-reference warning or application-specific error | Formula includes itself |
| Column too narrow for a currency number in Excel | `#####` | Display width or formatting, not necessarily wrong arithmetic |

On a separate practice copy, if available, try one scenario at a time and use **Undo** or restore the saved copy before proceeding. Do not delete real worksheet columns merely to see an error.

:::answer Show Activity 4 expected reasoning
- Divide by zero: determine whether the count is legitimately zero or missing; report an undefined ratio appropriately rather than changing it without evidence.
- Unrecognized function: verify the intended function name (`SUM` in standard English examples) and relevant locale settings.
- Incompatible type: verify which input is supposed to be a number and whether `pending` represents missing data.
- Invalid reference: identify the former source location and use a saved version or evidence to restore the correct relationship.
- Circular reference: exclude the total cell; E7 can sum E2:E6 if those are the intended source rows.
- Display width: inspect the underlying value and widen the column or adjust display formatting if appropriate.

:::

### Activity 5: Check a filter, a sort, and a chart (15–20 minutes)

Return to the correct **five-record** dataset and answer the following:

1. After filtering Status to `Ready`, which item IDs remain visible?
2. What is the sum of the visible Ready line estimates?
3. What does ordinary `=SUM(E2:E6)` still return, assuming all five numeric source values remain in the range?
4. What is the sum for the hidden Needed records?
5. What is the percentage of **records** marked Ready? What is the approximate percentage of **estimated cost** associated with Ready items?
6. A bar chart titled `All five supply items` omits KIT-105. What would you check?
7. Someone sorts only column C (Quantity), leaving the other columns unchanged. Why is the resulting table unreliable?

:::answer Show Activity 5 expected results
1. The Ready IDs are **KIT-101, KIT-102, KIT-104**.
2. Their visible line estimates add to **$55.00** (20 + 15 + 20).
3. Ordinary `=SUM(E2:E6)` returns **$85.00**, because filtering does not normally change the referenced values.
4. The two Needed records add to **$30.00** (18 + 12).
5. Ready is **3 of 5 = 60% of records**; Ready cost is **55/85 ≈ 64.7% of total estimated cost**.
6. Inspect the chart's selected source range, category labels, data series, and title. Include the fifth record if the chart is supposed to show all five.
7. The quantities would no longer align with the correct item names, IDs, prices, and statuses. Restore from an authoritative copy and sort complete records as a table.

:::

### Activity 6: Final capstone—review a fictional budget report (20–25 minutes)

A monthly practice budget from Lesson 8 uses **$3,200 income**, **$3,040 planned allocations**, and **$3,142 actual allocations**. The allocations include a savings transfer, which is an allocation of available funds rather than an ordinary spending expense. The report is supposed to describe how much cash remains after **actual allocations**, and how actual allocations compare with the plan.

The draft report contains these statements:

| Draft statement | Audit question |
| --- | --- |
| “After actual allocations, $160 remains.” | Was the planned figure used instead of the actual one? |
| “Actual allocations were $102 below plan.” | Is the sign and interpretation correct? |
| “The savings transfer is a regular purchase expense.” | Are allocation and expense definitions being confused? |
| “No spreadsheet warning appeared, so the figures are verified.” | Was the answer independently reconciled? |
| “Post a public workbook link so others can inspect personal transactions.” | Does public disclosure have a legitimate authorization? |

Write a corrected four-sentence report, identify the arithmetic checks, and give two steps you would take before delivering it to a reviewer.

:::answer Show Activity 6 model audit
1. **Planned remaining:** $3,200 − $3,040 = **$160**.
2. **Actual remaining:** $3,200 − $3,142 = **$58**.
3. **Actual-minus-planned allocations:** $3,142 − $3,040 = **+$102**. Actual allocations were **$102 above** plan, not below.
4. **Distinction:** A savings transfer moves funds to savings; it is part of the cash allocation plan, but should not automatically be called a purchase expense.

**Sample four-sentence report:** “For the fictional month, available income was $3,200. Planned allocations totaled $3,040, leaving $160 unallocated in the plan. Actual allocations totaled $3,142, which is $102 above the plan, leaving $58 of the month's income after those allocations. The allocation total includes a savings transfer that is distinguished from ordinary expenses.”

Before delivery: (a) reconcile the category amounts to approved underlying practice records and verify the total formulas; (b) use an authorized saved version, confirm sharing permissions, and add a reporting note describing period, units, and whether figures are actual or estimated. Do not publish sensitive personal transactions for peer inspection.

:::

### Reflection: Can you distinguish a warning from a wrong answer?

Explain the difference between the $73 incomplete-range error, the `#DIV/0!` visible formula error, and the misleading statement that $85 represents Ready-only cost. They require different corrections: **range selection**, **investigation of a denominator**, and **accurate interpretation of a filtered view**. If you can explain why each is wrong without merely memorizing an error code, you are practicing meaningful spreadsheet checking.

## 8. Common misconceptions

### “No visible error message means the spreadsheet is correct.”

False. A formula can return a normal number while omitting the last row, duplicating a cost, or referencing a nearby incorrect input. Independent checks and source reconciliation are essential.

### “Every error should be replaced with zero.”

False. Zero can be a real value, while a blank may mean unknown and `#DIV/0!` may represent an undefined ratio. Replacing every problem with zero can misstate the meaning of the data.

### “If Excel shows `#####`, the calculation is broken.”

Not necessarily. It can be a display-width issue or a date/time representation problem. Inspect the underlying value and format before changing the formula.

### “A row hidden by a filter was deleted.”

False. Filtering normally changes visibility, not the stored records. The same worksheet can show a three-record subset while an ordinary SUM still covers five records.

### “Sorting one column is the same as sorting the table.”

False. Sorting a lone field can separate it from the other fields that belong to the same item. Keep complete records intact.

### “A chart is reliable when it is attractive.”

False. Verify its source range, title, axes, scale, labels, units, and categories. Visual polish does not establish data accuracy.

### “A copy of an incorrect report verifies the report.”

False. Two identical files can contain the same error. An independent check should recompute the arithmetic or compare against an authoritative source, not simply reproduce the same formula.

### “`COUNT` and `COUNTA` tell me how many valid records I have.”

Not necessarily. They count numeric or nonempty cells, respectively; they do not establish whether records are complete, approved, unique, or genuine.

### “A correction is complete when the result matches the number I expected.”

False. A lucky-looking total can come from compensating errors. Reinspect the inputs, range, references, and other affected outputs. Document the evidence and reason for the change.

### “All spreadsheet programs display every error the same way.”

False. Excel, Google Sheets, and LibreOffice Calc share concepts but vary in message wording, available checking tools, locale behavior, and error codes. Learn how to interpret the cause rather than memorizing only an icon.

### “I should repair a live shared workbook while I experiment.”

False. Use a permitted working copy or reversible version and protect authoritative records. Structural experiments belong in fictional practice files unless an owner authorizes a controlled change.

### “If a source is missing, I can invent a reasonable value to finish the report.”

False. A plausible estimate is not source evidence. Mark the item as unresolved, communicate its impact, and seek authorization or reliable documentation before reporting it as actual.

## 9. Essential vocabulary

The reading uses the MGU dashboard’s linked-vocabulary notation to identify optional glossary tooltips. A supported term displays a short explanation; some terms may link to further reference material. This section provides readable definitions even if interactive tooltips are unavailable. The machine-readable `:::terms` block at the end contains the matching identifiers.

### Errors, interpretation, and reporting

- **Spreadsheet error:** A mismatch between the intended input, calculation, or meaning and the workbook's actual contents or output.
- **Error value:** An application's special result indicating that a formula could not evaluate as intended.
- **Silent error:** A wrong result that looks ordinary and may not generate a warning.
- **Formula error:** A problem interpreting or computing a spreadsheet formula.
- **Data-entry error:** An inaccurate, incomplete, or improperly encoded value in a cell.
- **Display problem:** A visual issue that obscures or misrepresents an underlying value.
- **Data integrity:** Accuracy, consistency, and appropriate preservation of data and relationships.
- **Accuracy:** Closeness of recorded data or conclusions to verified intended facts.
- **Verification:** Confirming a statement or value against supporting evidence.
- **Reconciliation:** Comparing totals, source records, and related results to identify disagreements.
- **Reporting scope:** The intended records, time period, and units included in a report.
- **Silent omission:** An intended record or value missing from a summary without a visible error message.
- **Double counting:** Including the same amount or record more than once.
- **Independent check:** Confirmation using separate arithmetic or evidence, not only repeating the same formula.
- **Correction log:** A record of what changed, why, and how the correction was verified.
- **Audit checklist:** A short list of review questions used consistently before release.

### Cells, formulas, and functions

- **Spreadsheet:** An electronic grid that stores and calculates information.
- **Workbook:** A document containing one or more spreadsheet worksheets.
- **Worksheet:** One grid of rows and columns within a workbook.
- **Cell:** A specific location at the intersection of a row and column.
- **Cell reference:** An address such as E4 used to locate a cell.
- **Range:** A group of referenced cells such as E2:E6.
- **Range boundary:** The first or last cell included by a selected range.
- **Formula:** A spreadsheet expression, often beginning with an equal sign, that computes a result.
- **Function:** A built-in named calculation or operation such as `SUM`.
- **SUM:** A function that totals relevant numeric inputs across a specified range.
- **COUNT:** A function that counts numeric cells within a specified selection.
- **COUNTA:** A function that counts cells that are not empty.
- **AVERAGE:** A function that computes a mean over qualifying numeric entries.
- **Relative reference:** A cell reference that normally adjusts when a formula is copied to a different location.
- **Absolute reference:** A reference such as `$B$1` designed to keep a row and column fixed when copied.
- **Denominator:** The quantity by which another amount is divided.
- **Circular reference:** A calculation that depends on itself, directly or through other formulas.
- **Formula dependency:** A relationship in which a formula uses an input from another cell.
- **Recalculation:** Updating formula results when underlying data or calculation settings change.
- **Independent recalculation:** Reworking an arithmetic result separately to see whether it agrees.
- **IFERROR:** A function that replaces certain error outputs with a chosen alternative and can conceal unresolved issues if misused.

### Data quality and types

- **Data type:** How a spreadsheet treats a value, such as number, text, or date.
- **Numeric text:** A string that looks numeric but is stored as text.
- **Blank cell:** A cell without entered content; it may represent missing information rather than zero.
- **Zero value:** A recorded numeric zero.
- **Missing value:** Information that has not been supplied or confirmed.
- **Identifier:** Text or a code used to distinguish one item or record, not necessarily a quantity.
- **Record ID:** An identifier intended to remain stable across sort and filter operations.
- **Duplicate record:** A repeated entry that may or may not be erroneous depending on the context.
- **Data validation:** Rules or prompts that help guide acceptable input values.
- **Formatting:** The visual display of a value, such as currency, date, decimal places, or color.
- **Source record:** Original documentation or trusted evidence for an entered observation.
- **Unit:** The measurement represented by a figure, such as dollars, people, or items.
- **Status:** An agreed description of an item or task's state.
- **Plausibility check:** Reviewing whether an entry makes sense in context, without assuming unusual values are wrong.
- **Locale:** A set of regional conventions influencing dates, decimal marks, and formula punctuation.

### Organizing, visualizing, and controlling changes

- **Record:** A related set of fields describing one item or event, often on one row.
- **Field:** One consistently defined attribute recorded in a column.
- **Sort:** Arranging records by a chosen ordering rule while keeping fields together.
- **Filter:** Displaying records that meet criteria while normally retaining hidden records.
- **Hidden row:** A row not currently visible, which may still contain values used by formulas.
- **Summary:** A combined count, total, average, or other result describing selected records.
- **Chart source range:** The cells that a chart uses as its data input.
- **Axis:** A reference line used to position numeric or category values in a chart.
- **Legend:** A key that identifies a chart's data series.
- **Percent:** A rate expressed per 100 of a clearly defined whole.
- **Working copy:** A separate authorized version used for safe inspection or testing.
- **Version history:** A retained record of earlier file states when the software or service supports it.
- **Backup:** An additional copy kept to recover lost or damaged information.
- **Audit workflow:** A repeatable method for reviewing, correcting, and verifying data.
- **Edit permission:** Authorization to modify file contents.
- **Share permission:** Authorization to let others view or edit a file.
- **Confidential information:** Material whose access or distribution should be restricted.
- **Escalation:** Referring an unresolved or unauthorized issue to an appropriate owner or reviewer.
- **Reporting note:** A short statement of scope, period, units, sources, and limitations.
- **Quality control:** Practices used to reduce and detect defects before information is used.

## 10. Knowledge check

Choose **one answer** per question. The MGU dashboard can grade the 30 multiple-choice items locally when its interactive quiz feature is enabled. Use the expandable key for paper-based review. The fictional scenarios do not require accounts, purchases, private information, or access to shared files.

:::quiz
? Which description best fits a silent spreadsheet error?
- [x] A plausible-looking result that is wrong
- [ ] Any result that produces a red warning
- [ ] An empty row that is intentionally unused
! A silent error may return a normal-looking number.

? What is the safest first step when a trusted worksheet total seems wrong?
- [ ] Delete every row below the total
- [x] Preserve a copy and inspect the intended records
- [ ] Replace the result with the expected number
! Preserve evidence before making changes.

? The five sample line estimates are $20, $15, $18, $20, and $12. What is their total?
- [ ] $73
- [ ] $103
- [x] $85
! Adding all five estimates gives $85.

? Which formula in E7 includes rows E2 through E6?
- [x] =SUM(E2:E6)
- [ ] =SUM(E2:E5)
- [ ] =SUM(E2:E7)
! The full five-line range ends in E6 and excludes the total cell E7.

? Why does =SUM(E2:E5) return $73 in the practice dataset?
- [ ] It automatically excludes all Ready items
- [x] It omits the $12 entry in E6
- [ ] It counts the $20 entry twice
! The range ends before the last source row.

? What error is commonly associated with dividing by numeric zero?
- [ ] #REF!
- [ ] #NAME?
- [x] #DIV/0!
! A zero denominator makes the intended quotient undefined.

? A formula displays #REF!. What should you examine?
- [x] Whether a referenced cell or range became invalid
- [ ] Whether the chart title is bold
- [ ] Whether the column header has enough color
! A reference error points toward an invalid reference.

? A formula uses SOM instead of SUM in an English-function workbook. What is a likely issue?
- [ ] The table has too many filtered rows
- [x] An unrecognized function name
- [ ] The displayed currency symbol is missing
! A misspelled function may cause an unrecognized-name error.

? What should you do when a price cell says pending?
- [ ] Delete the related record immediately
- [ ] Report a verified $0 price
- [x] Verify its meaning rather than assume it is zero
! Text indicating a pending price is not proof of a zero cost.

? How should the identifier 0042 generally be treated?
- [x] As text if leading zeros carry meaning
- [ ] As the numeric value 42 regardless of source
- [ ] As a formula that adds four and two
! Identifiers are labels rather than quantities.

? Which statement about an empty cell and numeric zero is correct?
- [ ] They are always interchangeable in audits
- [x] They can represent different facts
- [ ] The application always converts blanks to zero
! A blank can indicate no recorded input, while zero asserts a value.

? In an Excel cell, ##### can indicate what?
- [ ] The worksheet was permanently deleted
- [ ] Every formula on the sheet is wrong
- [x] The display width is insufficient
! An underlying value may be valid but not fit the current display.

? What does =C3*D4 in E4 risk doing in the sample?
- [x] Using the quantity from the wrong row
- [ ] Including the total row in the source range
- [ ] Sorting all records by status
! E4 is intended to use C4 and D4 for row 4.

? If E4 is $36 instead of $18 and every row is included, what total appears?
- [ ] $85
- [x] $103
- [ ] $73
! Replacing $18 with $36 increases the correct $85 total by $18.

? Which formula in E7 creates a direct circular reference?
- [ ] =SUM(E2:E6)
- [ ] =C2*D2
- [x] =SUM(E2:E7)
! A total in E7 must not include itself in its input range.

? What does COUNT generally measure?
- [x] Cells containing numeric values in its selected inputs
- [ ] All unique, authorized records in a workbook
- [ ] Only the rows visible under a filter
! COUNT counts numeric cells, not verified records.

? What does COUNTA generally count?
- [ ] Only decimal-number entries
- [x] Cells that are not empty
- [ ] Only dates recognized by the locale
! COUNTA counts nonempty cells, not just numbers.

? After filtering to Ready, what does ordinary =SUM(E2:E6) normally return?
- [ ] $55
- [ ] $30
- [x] $85
! The referenced values remain present despite the filtered view.

? What is the sum of visible Ready line estimates in the sample?
- [x] $55
- [ ] $30
- [ ] $85
! Ready items are KIT-101, KIT-102, and KIT-104: 20 + 15 + 20.

? What share of the five records is Ready?
- [ ] 64.7%
- [x] 60%
- [ ] 40%
! Three of five records gives 3/5 = 60%.

? Approximately what share of the total estimated cost is Ready?
- [ ] 60.0%
- [ ] 35.3%
- [x] 64.7%
! Ready estimated cost $55 divided by total cost $85 is about 64.7%.

? What may happen if only quantities are sorted and other fields stay still?
- [x] Quantities can become attached to the wrong items
- [ ] All formulas are automatically converted to text
- [ ] Hidden rows are permanently deleted
! Keep each record’s fields together in the sort.

? A chart titled All five items omits KIT-105. What should be checked?
- [ ] Only the title font size
- [x] The chart source range and category selection
- [ ] Whether the cursor is blinking
! A missing chart item may indicate an incomplete source range.

? Which is the best example of an independent arithmetic check?
- [ ] Copy the same wrong SUM formula to another cell
- [ ] Hide the source rows so the result looks clean
- [x] Add the five line estimates separately and compare with SUM
! Independent arithmetic helps detect incorrect ranges or references.

? Why should IFERROR not be used automatically to show zero for all errors?
- [x] It can conceal missing inputs or broken references
- [ ] It always deletes source workbooks
- [ ] It prevents all cells from being formatted
! A fallback may mask the cause and misrepresent missing data.

? What is the correct actual remainder from $3,200 income and $3,142 allocations?
- [ ] $160
- [x] $58
- [ ] $102
! Subtracting actual allocations from income gives $58.

? Actual allocations of $3,142 versus planned $3,040 are how different?
- [ ] $102 below plan
- [ ] $58 above plan
- [x] $102 above plan
! 3142 − 3040 = +102 using actual minus planned.

? What should a correction log explain?
- [x] The original issue, reason for change, and verification
- [ ] Only the final preferred number
- [ ] The reviewer’s favorite spreadsheet theme
! Record enough context so another authorized person can follow the correction.

? Which action is appropriate if the original source is missing?
- [ ] Invent a plausible number and label it actual
- [x] Mark the item unresolved and seek reliable evidence
- [ ] Post private records publicly for suggestions
! Unverified information should not be presented as confirmed actual data.

? When is the error-checking workflow complete?
- [ ] When no warning icon remains anywhere
- [ ] When the chart is colorful and the table fits on a page
- [x] When source, formula, scope, display, and conclusion reconcile or limitations are documented
! The check is complete only with supported findings and clear unresolved limits.

:::

:::answer Show the quiz answer key with explanations
1. **A.** A silent error may return a normal-looking number.
2. **B.** Preserve evidence before making changes.
3. **C.** Adding all five estimates gives $85.
4. **A.** The full five-line range ends in E6 and excludes the total cell E7.
5. **B.** The range ends before the last source row.
6. **C.** A zero denominator makes the intended quotient undefined.
7. **A.** A reference error points toward an invalid reference.
8. **B.** A misspelled function may cause an unrecognized-name error.
9. **C.** Text indicating a pending price is not proof of a zero cost.
10. **A.** Identifiers are labels rather than quantities.
11. **B.** A blank can indicate no recorded input, while zero asserts a value.
12. **C.** An underlying value may be valid but not fit the current display.
13. **A.** E4 is intended to use C4 and D4 for row 4.
14. **B.** Replacing $18 with $36 increases the correct $85 total by $18.
15. **C.** A total in E7 must not include itself in its input range.
16. **A.** COUNT counts numeric cells, not verified records.
17. **B.** COUNTA counts nonempty cells, not just numbers.
18. **C.** The referenced values remain present despite the filtered view.
19. **A.** Ready items are KIT-101, KIT-102, and KIT-104: 20 + 15 + 20.
20. **B.** Three of five records gives 3/5 = 60%.
21. **C.** Ready estimated cost $55 divided by total cost $85 is about 64.7%.
22. **A.** Keep each record’s fields together in the sort.
23. **B.** A missing chart item may indicate an incomplete source range.
24. **C.** Independent arithmetic helps detect incorrect ranges or references.
25. **A.** A fallback may mask the cause and misrepresent missing data.
26. **B.** Subtracting actual allocations from income gives $58.
27. **C.** 3142 − 3040 = +102 using actual minus planned.
28. **A.** Record enough context so another authorized person can follow the correction.
29. **B.** Unverified information should not be presented as confirmed actual data.
30. **C.** The check is complete only with supported findings and clear unresolved limits.

:::

### Exit task: Explain the correction process

Without looking back, complete these four statements:

1. A visible error value is __________; a silent error is __________.
2. If my total omits an intended row, I should inspect __________.
3. A filter changes what I __________, but does not normally delete the __________.
4. Before correcting an authoritative workbook, I should __________.

:::answer Show exit task sample responses
1. A visible error is an application indicator such as `#DIV/0!`; a silent error is a believable but incorrect result with no special warning.
2. Inspect the formula range and reconcile its row boundaries to source records.
3. A filter changes what I **see**, not the underlying **records**.
4. Preserve an authorized copy or version, confirm the source and my editing permission, document the reason, and retest the correction.

:::

## 11. MGU Library connections and next steps

This completes the **nine-lesson Basic Computer Skills — Spreadsheet Skills** sequence. The lessons form a practical progression: understand the grid; navigate cells; enter trustworthy data; create formulas; apply common functions; organize lists; read charts; build budgets and lists; and audit the final result before sharing. Completion means you have worked through the instructional material and practice checks. It does **not** mean the MGU website has independently verified or certified a learner's proficiency.

### Review the earlier MGU Spreadsheet Skills lessons

- [Lesson 1: What Is a Spreadsheet?](/department/computer-science/basic-computer-skills/spreadsheet-skills/what-is-a-spreadsheet/) — the purpose and scope of a spreadsheet.
- [Lesson 2: Rows, Columns, and Cells](/department/computer-science/basic-computer-skills/spreadsheet-skills/rows-columns-and-cells/) — addresses, ranges, and selecting the right location.
- [Lesson 3: Entering and Formatting Data](/department/computer-science/basic-computer-skills/spreadsheet-skills/entering-and-formatting-data/) — distinguish stored values from display formats.
- [Lesson 4: Simple Formulas](/department/computer-science/basic-computer-skills/spreadsheet-skills/simple-formulas/) — arithmetic and cell references.
- [Lesson 5: Common Functions](/department/computer-science/basic-computer-skills/spreadsheet-skills/common-functions/) — `SUM`, `COUNT`, `AVERAGE`, and related operations.
- [Lesson 6: Sorting and Filtering](/department/computer-science/basic-computer-skills/spreadsheet-skills/sorting-and-filtering/) — preserve complete records while organizing them.
- [Lesson 7: Basic Charts](/department/computer-science/basic-computer-skills/spreadsheet-skills/basic-charts/) — chart source selection, labels, and scale.
- [Lesson 8: Budgets and Lists](/department/computer-science/basic-computer-skills/spreadsheet-skills/budgets-and-lists/) — put formulas, tables, and recordkeeping together.

### Official software documentation

- [Microsoft Excel: Detect formula errors](https://support.microsoft.com/en-us/excel/detect-formula-errors-in-excel) — error checking, formula diagnostics, invalid references, inconsistent formulas, and display problems.
- [Microsoft Excel: How to avoid broken formulas](https://support.microsoft.com/en-us/excel/how-to-avoid-broken-formulas-in-excel) — syntax, data-type, and formula-repair principles.
- [Microsoft Excel: How to correct a #REF! error](https://support.microsoft.com/en-us/excel/how-to-correct-a-ref-error) — invalid references after cell or column changes.
- [Google Sheets: Add formulas and functions](https://support.google.com/docs/answer/46977?hl=en) — editing and using formulas in Sheets.
- [Google Sheets: ERROR.TYPE](https://support.google.com/docs/answer/3238305?hl=en) — recognizing common calculation error categories in Sheets.
- [Google Sheets: Sort and filter your data](https://support.google.com/docs/answer/3540681?hl=en) — careful use of filtered and sorted views.
- [LibreOffice Calc: Error codes](https://help.libreoffice.org/latest/en-US/text/scalc/05/02140000.html) — Calc-specific diagnostic codes and descriptions.
- [LibreOffice Calc: Instructions for Using LibreOffice Calc](https://help.libreoffice.org/latest/en-US/text/scalc/guide/main.html) — application-specific guidance for Calc.

### Course completion review

A successful beginner can use the following **repeatable workflow** on a small practice sheet:

1. Define the intended result and identify the included records.
2. Confirm values, types, units, blank entries, and record IDs.
3. Review formulas and source ranges for omissions, duplication, or invalid references.
4. Recalculate a small sample independently.
5. Check whether filters, sorting, and charts change the interpretation.
6. Preserve an authorized copy, correct only what is supported, and verify the outcome.

[← Previous lesson: Budgets and Lists](/department/computer-science/basic-computer-skills/spreadsheet-skills/budgets-and-lists/) · [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) · [Basic Computer Skills overview](/department/computer-science/basic-computer-skills/)

> **Lesson completion checklist:** I can recognize common error messages; distinguish an error code from a silent mistake; check source data, formulas, and ranges; reconcile a simple total; explain the effect of a filter; spot misleading chart labels; correct a practice file without falsifying records; and document what remains unresolved.

:::terms
spreadsheet-error | Spreadsheet error | A mismatch between intended data, formula, display, or interpretation and what a spreadsheet actually shows or calculates. |
error-value | Error value | A special result indicating that a spreadsheet formula could not evaluate as intended. |
silent-error | Silent error | An ordinary-looking but incorrect result that does not necessarily cause an application warning. |
formula-error | Formula error | A problem with the syntax, references, inputs, or evaluation of a spreadsheet formula. |
data-entry-error | Data-entry error | An incorrect, missing, inconsistent, or improperly encoded entry. |
display-problem | Display problem | A visual presentation issue that hides or distorts the underlying value. |
data-integrity | Data integrity | The accuracy, consistency, and preservation of records and their relationships. |
accuracy | Accuracy | Agreement between reported information and verified intended facts. |
verification | Verification | Checking a value or conclusion against reliable support. |
reconciliation | Reconciliation | Comparing totals and records to find and explain differences. |
reporting-scope | Reporting scope | The records, units, period, and boundaries included in a stated result. |
silent-omission | Silent omission | An intended source item missing from a calculation without a visible error message. |
double-counting | Double counting | Including the same record or amount multiple times in a result. |
independent-check | Independent check | Confirmation by separate arithmetic or reliable source evidence rather than copying the same computation. |
correction-log | Correction log | A short record of a change, its reason, its evidence, and verification. |
audit-checklist | Audit checklist | A repeatable set of review questions used to check data and results before use. |
spreadsheet | Spreadsheet | A digital grid for storing, organizing, calculating, and displaying information. |
workbook | Workbook | A document holding one or more spreadsheet worksheets. |
worksheet | Worksheet | A grid of rows and columns within a workbook. |
cell | Cell | One location where a worksheet row and column meet. |
cell-reference | Cell reference | An address, such as E4, identifying a spreadsheet cell. |
range | Range | A selected collection of cells, such as E2:E6. |
range-boundary | Range boundary | The first or last included row or cell defining a selected set of input cells. |
formula | Formula | A spreadsheet expression, typically starting with an equals sign, that computes a result. |
function | Function | A built-in named spreadsheet operation. |
sum | SUM | A common spreadsheet function for adding qualifying numeric values across inputs. |
count | COUNT | A function that counts numeric values in specified cells. |
counta | COUNTA | A function that counts cells that are not empty. |
average | AVERAGE | A function that calculates the mean of qualifying numeric inputs. |
relative-reference | Relative reference | A cell reference that usually shifts with the copied formula's destination. |
absolute-reference | Absolute reference | A reference such as $B$1 that remains fixed when a formula is copied. |
denominator | Denominator | The value by which another quantity is divided. |
circular-reference | Circular reference | A formula dependency that directly or indirectly loops back to itself. |
formula-dependency | Formula dependency | A relationship in which a formula relies on another cell's value. |
recalculation | Recalculation | Updating calculated outputs when inputs or calculation settings change. |
independent-recalculation | Independent recalculation | Separately working through arithmetic and comparing it with the sheet's result. |
iferror | IFERROR | A function that supplies a replacement when a formula yields an error, requiring cautious use. |
data-type | Data type | The representation of content such as number, text, or date. |
numeric-text | Numeric text | Text that looks like a number but is stored as a character string. |
blank-cell | Blank cell | A cell with no recorded content, which may indicate missing information. |
zero-value | Zero value | An explicitly recorded numeric value of zero. |
missing-value | Missing value | An observation that has not been recorded or confirmed. |
identifier | Identifier | A label or code distinguishing a record rather than measuring a quantity. |
record-id | Record ID | A stable unique or otherwise defined code identifying an item or event. |
duplicate-record | Duplicate record | A repeated entry requiring source/context review to determine its validity. |
data-validation | Data validation | Rules or controls intended to guide or restrict spreadsheet input. |
formatting | Formatting | The visual display of cell content, including dates, currency, color, and decimal places. |
source-record | Source record | Trusted original documentation supporting a reported input. |
unit | Unit | The measurement represented by an amount, such as dollars or items. |
status | Status | An item's recorded stage or condition under agreed vocabulary. |
plausibility-check | Plausibility check | An initial assessment of whether a value is reasonable for its context. |
locale | Locale | Regional conventions that can affect number, date, and formula interpretation. |
record | Record | A set of related fields describing one item or event, often stored in a row. |
field | Field | A consistently defined type of information stored for every record. |
sort | Sort | Arranging complete records according to an ordering rule. |
filter | Filter | Showing only records that match criteria without normally removing the others. |
hidden-row | Hidden row | A row not currently visible but potentially still present in calculations. |
summary | Summary | An aggregate or concise result about specified source records. |
chart-source-range | Chart source range | The selected worksheet cells from which a chart draws its displayed values. |
axis | Axis | A chart reference line for categories or numerical values. |
legend | Legend | A chart key explaining the series or categories represented. |
percent | Percent | A proportion expressed per hundred of a specified whole. |
working-copy | Working copy | A separate, authorized file version used to test or review changes safely. |
version-history | Version history | A record of earlier saved states when available in an application. |
backup | Backup | An extra copy intended to help restore lost or damaged data. |
audit-workflow | Audit workflow | A repeatable sequence for identifying, tracing, correcting, and verifying issues. |
edit-permission | Edit permission | Authorization to change a workbook or its contents. |
share-permission | Share permission | Authorization determining who may access a workbook. |
confidential-information | Confidential information | Information requiring access and disclosure restrictions. |
escalation | Escalation | Referring an unresolved issue to a responsible person with appropriate authority. |
reporting-note | Reporting note | A statement clarifying a result's period, sources, units, and limitations. |
quality-control | Quality control | Practices aimed at detecting and preventing mistakes before outputs are used. |
:::
