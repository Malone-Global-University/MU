Basic Computer Skills / Spreadsheet Skills

## Lesson 3: Entering and Formatting Data

A neighborhood organization is preparing a list of supplies for a weekend event. One volunteer enters `3` for the number of boxes, another enters `$4.50` for the price of each box, and a third enters `11/21/2026` for the purchase date. The numbers and words look simple. Yet a single unnoticed error—putting a date in the price column, deleting a leading zero from an item code, or confusing `0.15` with `15%`—can change what the worksheet means.

A [[spreadsheet|spreadsheet]] becomes useful when its information is both **accurate** and **understandable**. In Lesson 1, you learned why people use spreadsheets. In Lesson 2, you learned to find [[row|rows]], [[column|columns]], [[cell|cells]], and [[range|ranges]]. Now you will learn to put information into those cells, correct mistakes, and choose clear [[formatting|formats]] for text, numbers, dates, money, and percentages. You will separate the information a cell *stores* from the way it *looks* on the screen.

Microsoft Excel on Windows 11 is the main desktop example. The same concepts apply to Google Sheets and LibreOffice Calc, although menus, icons, automatic conversions, and default date styles may differ. The six guided activities use invented information and can be completed on paper. Live practice is optional: use a new, disposable worksheet rather than an important file.

**Level:** Beginner · **Estimated study time:** 90–120 minutes · **Prerequisites:** Lessons 1–2 recommended · **Practice equipment:** Paper and pencil or Excel, Google Sheets, or LibreOffice Calc · **Safety:** Enter fictional information only; never practice by editing a shared or important financial, academic, medical, or personal record.

> **Essential idea:** **Enter a value accurately, choose a display format that fits its meaning, and verify the result.** A format often changes how a value *appears*, not the value itself. A cell that *looks* correct may still contain the wrong kind of information.

### Learning objectives

After completing this lesson, you should be able to:

1. Distinguish text, numbers, dates, times, and formulas in ordinary worksheet cells.
2. Enter an item in the intended cell and explain how to confirm, edit, replace, or cancel the entry.
3. Organize one fictional record per row with meaningful headings and consistent data types.
4. Explain [[display-format|display formats]] versus [[stored-value|stored values]], including what formatting does **not** repair.
5. Apply suitable number, currency, percentage, and date displays without unintentionally changing meaning.
6. Preserve leading zeros in identifiers that are labels, not quantities.
7. Recognize the difference between a blank cell, a numeric zero, and a text label such as `Unknown`.
8. Use basic visual formatting—headings, alignment, wrapping, column width, and restrained emphasis—to make a worksheet readable.
9. Explain why copying, filling, pasting, and automatic type recognition require verification.
10. Identify warning signs such as `#####`, rounded displays, date conversions, and mixed data in one column.
11. Complete a simple quality check before treating a worksheet as dependable.

### On this page

- [1. Choosing what belongs in a cell](#1-what-kind-of-information-can-a-cell-hold)
- [2. Entering and correcting information](#2-how-do-you-enter-and-edit-data)
- [3. Organizing a reliable list](#3-how-do-you-organize-data-into-a-usable-list)
- [4. Understanding stored values and display formats](#4-what-is-the-difference-between-a-value-and-its-format)
- [5. Formatting numbers, money, percentages, and dates](#5-how-do-you-format-common-data-types)
- [6. Making a sheet readable and checking entries](#6-how-do-you-make-data-readable-and-reliable)
- [7. Guided practice](#7-guided-practice-enter-format-and-check-data)
- [8. Common misconceptions](#8-common-misconceptions)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. MGU Library connections and next steps](#11-mgu-library-connections-and-next-steps)

## 1. What kind of information can a cell hold?

A worksheet is a [[grid|grid]] of addressable cells. Each ordinary cell has a position such as `A1` or `C4`. Its position tells you *where* the entry belongs; its content tells you *what* the entry means. Most beginner worksheets contain several kinds of information. The distinction matters because a program may calculate with a numeric value but treat a word or identification code as text.

### Five common kinds of entries

| Entry category | Example entered | Common meaning | Appropriate use |
| --- | --- | --- | --- |
| Text | `Notebooks` | A name or description | Item names, statuses, notes |
| Number | `4` | A quantity that could be counted | Units ordered or items in stock |
| Currency amount | `12.50` | A numerical amount of money | Costs and prices when shown as `$12.50` |
| Date | `2026-11-21` | A particular calendar day | Order or event date when recognized correctly |
| Formula | `=B2*C2` | Instructions to compute a result | A calculated total, covered in Lesson 4 |

The entries in this table are instructional examples; no formula must be entered or executed to complete this lesson. Some programs automatically recognize what you type. For example, an input that resembles a date may become a date value, and a number-like identifier may lose leading zeros. Recognition depends on software settings and [[locale|locale]], so look at the result rather than assuming an entry was stored in the intended form.

### Text is not inferior to numbers

A cell holding `On order` can be entirely correct when it describes status. A cell holding `0027` may also correctly contain *text* if it means a product code. The important question is **what the characters represent**, not merely whether they look numeric. A telephone number, ZIP code, membership identifier, room number, invoice code, and account number are normally identifiers—not amounts to add or average.

Compare these values:

| You see | Intended meaning | Preferred treatment | Reason |
| --- | --- | --- | --- |
| `7` | Seven folders | Number | It measures quantity |
| `0007` | Product code | Text | All four characters identify an item |
| `15%` | A rate of fifteen percent | Percentage | Its mathematical value is `0.15` |
| `$15.00` | Fifteen dollars | Currency | The unit is money, not a count |
| `2026-11-21` | November 21, 2026 | Date | Supports calendar interpretation |
| `Pending` | A status | Text | It describes a condition |

> **Important:** Formatting cells as **Text before entering** a code can help preserve leading zeros. Changing the display to Text *after* an automatic conversion may not restore characters that were already discarded. If the entry is wrong, re-enter it correctly and verify.

### Formulas are special entries

A [[formula|formula]] usually begins with `=` in common spreadsheet applications and directs the application to calculate. Typing `=2+3` is not the same as typing the text `2+3`. A formula's displayed result can differ from its underlying expression. This course treats formulas in the next lesson; for today, recognize that a leading `=` may start a calculation or expression rather than remain ordinary text.

If you need to keep a literal text string that begins with `=`, use the application's documented plain-text approach in a trusted practice file. Avoid copying untrusted strings into a sheet as if they were harmless: a pasted string beginning with certain characters may be interpreted as a formula, depending on the application and its import settings.

### How to decide a cell's type

Ask three questions about a prospective entry: (1) **What does it stand for?** (2) **Will anyone do arithmetic with it?** (3) **What characters must be preserved exactly?** The answers help you select number, text, date, or another appropriate treatment.

## 2. How do you enter and edit data?

Entering data is the process of placing new information into the selected [[active-cell|active cell]]. Editing is changing information already present. Replacing is different: simply typing while a filled cell is selected may overwrite the entire contents, even when you meant to adjust only one character. Learn the difference before entering an important value.

### A repeatable entry procedure

1. Identify the intended cell address, such as `A2`, and make sure you are in the correct worksheet.
2. Click or navigate to that cell; confirm that it is the [[active-cell|active cell]].
3. Type a value suitable for the column: for example, `Markers` in an Item column.
4. **Commit the entry**, typically by pressing Enter or selecting another cell. Pressing Tab often commits and moves in a different direction. Exact behavior depends on application and state.
5. Inspect the cell and, where available, the [[formula-bar|formula bar]] for the information you meant to store.
6. Save according to your application's workflow and confirm that the saved file is the correct one. Some cloud services autosave; others require an explicit save action.

| Your intention | Typical action | Caution |
| --- | --- | --- |
| Add a value | Select empty cell, type, confirm | Check address first |
| Replace contents | Select cell, type new value, confirm | Prior contents may be lost |
| Edit a small part | Use the editing control, formula bar, or supported edit shortcut | Do not mistake replacing for editing |
| Cancel an uncommitted entry | Use a supported cancel action such as Esc | Test in a disposable file; behavior may vary |
| Reverse a recent error | Use Undo when available | Undo may not restore every action or earlier version |
| Remove content | Use the application's clear-content command | Clear is different from deleting a row or column |

### Enter versus Tab

In many desktop spreadsheet programs, Enter commits an entry and moves the active selection down; Tab commits and moves right. That is convenient when recording one record across several columns, but the exact direction can depend on the app, preferences, and mode. Confirm the active address before the next entry. If you type `4` into the wrong column, the program may accept it without warning.

### Replace, edit, and clear are not interchangeable

Suppose `A2` contains `Notebooks`. If you select `A2` and begin typing `Folders`, you generally replace the old entry. If you enter an editing mode or place the cursor within the entry, you can instead modify individual characters. Clearing contents removes data from cells; it typically does not delete the underlying row or column. Deleting a whole row is a structural operation that can shift other entries and their addresses.

### Correcting an error without creating another

If an item name reads `Noteoboks`, locate that exact cell, edit it to `Notebooks`, commit the change, and read it again. If a numeric quantity is `40` but the intended quantity is `4`, replace it and verify the corrected value. When the wrong data type or automatic conversion is involved, inspect the original record before deciding whether formatting alone is enough.

### Pasting and autofill need supervision

A [[copy-paste|copy-and-paste]] action can move both information and formatting, depending on how and where you paste. A multi-cell paste usually fills a block of cells. A [[fill-handle|fill handle]] or [[autofill|AutoFill]] feature may copy a value, generate a series, or extend patterns. Those behaviors are useful but not always obvious, and some pasted content can be treated as formulas.

For this beginner lesson, it is perfectly reasonable to enter short sample records one cell at a time. When later practicing Paste or Fill, stop and inspect the entire destination range, not just its first cell. If an unexpected change occurs, use Undo only when supported and immediately verify the recovery.

### Work from a trusted original

Use a new practice workbook or a copy you are authorized to modify. Confirm the file name before editing and do not turn an exercise into a live organizational record. Real names, account codes, access credentials, addresses, and medical information are unnecessary for these activities. Keep any fictional sample data separate from actual sensitive information.

## 3. How do you organize data into a usable list?

A spreadsheet is easier to read and eventually sort, filter, or calculate when a row records **one item or event** and each column consistently describes **one characteristic**. This is a useful beginner habit, not a rule that every spreadsheet must use the same structure. A project calendar, financial model, and printed form can have other layouts; ordinary item lists benefit from regular columns.

### Example: the fictional community supply list

| Worksheet row | A: Item | B: Quantity | C: Unit price | D: Needed by | E: Status |
| --- | --- | --- | --- | --- | --- |
| **1** | Item | Quantity | Unit price | Needed by | Status |
| **2** | Markers | 3 | 4.50 | 2026-11-21 | Ready |
| **3** | Notebooks | 8 | 2.25 | 2026-11-22 | Ordered |
| **4** | Folders | 5 | 1.20 | 2026-11-21 | Ready |
| **5** | Tape | 2 | 3.75 | 2026-11-23 | Pending |

In this teaching map, row 1 contains column labels. Row 2 is the first supply record. The visible `4.50` is a unit-price number; when formatted as US currency, it can display as `$4.50`. The date strings are unambiguous ISO-style examples, but you still need to confirm the application recognized them as dates when you enter them.

Locate these entries: `A3` is **Notebooks**; `B4` is **5**; `C5` is **3.75**; `D2` is the intended date **November 21, 2026**; and `E5` is **Pending**. These addresses are positions; the words in row 1 are user-entered labels and do not rename the built-in A–E columns.

### One kind of information in each column

| Column | Meaning | Good example | Poorly matched example |
| --- | --- | --- | --- |
| A | Item | `Markers` | `4.50` |
| B | Quantity | `3` | `Three boxes maybe` |
| C | Unit price | `4.50` as a number | `Unknown` mixed among prices without a clear missing-data policy |
| D | Needed by | Recognized date | A date-like word that the application stores as unrelated text |
| E | Status | `Ready` | A monetary amount |

A column can contain blanks when information is not known. Do not silently enter zero simply to make the column look complete. In a price column, `0.00` asserts a zero-dollar price; a blank may mean **not entered** or **not yet known**. If your project needs to distinguish several kinds of missing information, use a documented status or notes field rather than inventing a false amount.

### Add labels before detailed formatting

Place concise headings in the first row of an ordinary list: `Item`, `Quantity`, `Unit price`, `Needed by`, `Status`. Each label should describe the information underneath. Avoid two different column meanings under one vague heading such as `Info`.

Try to keep one record together on one row. If you insert blank decorative rows between records, some sorting, filtering, and data-selection workflows become more difficult. For a basic list, use a single header row and continuous entries. An extra title above the table may be appropriate for a report, but it should not be confused with the row containing actual field names.

### Keep the meaning stable as the list grows

If the Quantity column counts individual supplies, do not suddenly enter a box count in the same column unless the unit is explained. If unit price means dollars per individual item, do not mix per-box prices without a unit field. Formatting will not solve a units problem.

| Record | Quantity | Unit | Unit price | Interpretable? |
| --- | --- | --- | --- | --- |
| Markers | 3 | Packs | `$4.50` per pack | Yes, units are named |
| Notebooks | 8 | Each | `$2.25` each | Yes, units are named |
| Tape | 2 | Rolls | `$3.75` per roll | Yes, units are named |
| Unlabeled example | 5 | *(missing)* | `$1.20` | Not fully; unit is unclear |

The lesson's activities use the simpler five-column version above, but the optional Unit field illustrates how to improve precision when different quantities represent different things.

## 4. What is the difference between a value and its format?

A cell's [[stored-value|stored value]] is the underlying information the spreadsheet holds. Its [[display-format|display format]] affects how that information is presented. A numeric entry such as `4.5` may display as `4.5`, `4.50`, `$4.50`, or another style, depending on the format. The format does not generally change the numeric quantity used by the application's calculations. Some editing, conversion, rounding, formulas, or imports **do** change underlying values; do not confuse those operations with display-only formatting.

### One value, several appearances

| Illustrative stored number | Display format | Possible on-screen appearance | Underlying numeric meaning |
| --- | --- | --- | --- |
| `4.5` | General | `4.5` | Four and one-half |
| `4.5` | Number, two decimals | `4.50` | Four and one-half |
| `4.5` | US currency | `$4.50` | Four and one-half units of currency |
| `4.5` | Percentage | `450%` | Four and one-half, expressed as percent of one |
| `0.15` | Percentage | `15%` | Fifteen hundredths |
| `0.15` | Number, two decimals | `0.15` | Fifteen hundredths |

This is the key reason to check a percentage before clicking a percent-format button. In common applications, changing an existing cell holding `15` to Percentage may display **`1500%`**, not `15%`. To represent fifteen percent mathematically, the underlying number is `0.15`. Some applications also understand direct entry of `15%`; verify the result and the stored value.

### Appearance is not proof of accuracy

A cell displaying `$4.50` can still be wrong if the intended price was `$5.40`. A cell showing `4.5` without a dollar sign may still hold the right numeric amount, but its intended unit is less clear. Good spreadsheets need **both** accurate content and clear labeling/formatting.

### Display rounding versus changing the value

Suppose the underlying value is `3.756`. Displaying it to two decimal places will typically show `3.76`, but it may still retain `3.756` for subsequent calculations. This is [[display-rounding|display rounding]], not necessarily the same thing as permanently replacing the value with `3.76`.

| Stored amount | Display setting | Displayed amount | What to check |
| --- | --- | --- | --- |
| `3.756` | Three decimals | `3.756` | Precise original entry |
| `3.756` | Two decimals | `3.76` | Hidden third decimal still may exist |
| `3.756` | One decimal | `3.8` | Display is more approximate |
| `3.756` | Whole number | `4` | Do not assume the stored amount became four |

If several values are added in a future lesson, totals can reflect their underlying precision instead of the rounded numbers you see on screen. When exact pricing or financial reporting matters, verify the required rounding policy and calculations rather than making values merely look right.

### Alignment is not a dependable type test

Many spreadsheet programs put default text on one side of a cell and default numbers on the other. But users can change [[alignment|alignment]], and application defaults vary. A right-aligned item code might still be text; a left-aligned numeric value might still be a number. Use cell information, editing controls, and appropriate checks, not just visual position, to determine content type.

### When a cell looks like `#####`

In Excel, a series of hash marks such as `#####` often signals that the column is too narrow to display a number or a date in its current format. Other causes are possible, including certain negative date/time results. Increase the column width or inspect the underlying entry; do not replace the data with hash marks. A small mobile screen or a different spreadsheet program may show overflow differently.

> **Verification habit:** Before changing a stored value to fix its appearance, first check whether the problem is the column width, the selected format, or the underlying information.

## 5. How do you format common data types?

[[number-format|Number formats]] communicate how to interpret values. The following examples assume a US-English context for symbols and dates. Different country and language settings may use different currency signs, decimal separators, thousands separators, or date orders. The safest format is one that represents the intended meaning clearly **and** is recognized by the program.

### Ordinary numbers and decimal places

Numbers count or measure: `8` notebooks, `1.5` hours, or `27.25` units. Use a reasonable number of decimal places for the task. Showing two decimals is common for US-dollar currency, but an item count generally does not need `8.00` unless that precision is meaningful. Displaying a number with a [[thousands-separator|thousands separator]] such as `1,250` can improve readability; remember that regional conventions vary.

| Meaning | Stored numerical example | Possible display | Note |
| --- | --- | --- | --- |
| Number of items | `8` | `8` | Whole number is natural |
| Length | `1.5` | `1.5` | One decimal may be meaningful |
| Large count | `1250` | `1,250` | Grouping helps reading |
| Price per item | `2.25` | `$2.25` | Currency shows the unit |
| Fraction of one | `0.2` | `20%` | Percent format expresses the fraction |

### Currency and accounting styles

If the value means money, select a [[currency|currency format]] appropriate to the activity—for example, US Dollars when the exercise states dollars. A currency format may add `$`, show two decimals, and present negative values in a specified style. Accounting formats may align symbols and decimal points differently from ordinary currency. Neither style automatically verifies that a price was entered correctly.

Be precise about [[unit-price|unit price]] versus [[line-total|line total]]. Unit price is the cost of one relevant unit. A line total combines a quantity and its unit price, usually using a formula in the next lesson. The formatted display `3 × $4.50` does not itself produce a stored calculated total.

### Percentages

A percentage means “per hundred.” In ordinary decimal arithmetic, `0.25` represents one quarter, which is `25%`; `1` represents a full unit, which is `100%`. Pay close attention to whether you entered a decimal or a complete percent literal.

| Intended rate | Appropriate underlying number | Percentage display | Frequent mistake |
| --- | --- | --- | --- |
| 5 percent | `0.05` | `5%` | Entering `5` then applying % can show `500%` |
| 12 percent | `0.12` | `12%` | Assuming `12` and `0.12` are equivalent |
| 25 percent | `0.25` | `25%` | Confusing one-quarter with twenty-five whole units |
| 100 percent | `1` | `100%` | Assuming `100` must be the stored number |
| 150 percent | `1.5` | `150%` | Treating any value above 100% as automatically invalid |

Some programs can interpret entering `12%` directly as `0.12`, while the result of typing `12` into an already percentage-formatted cell may follow software-specific rules. The dependable action is to read the displayed outcome and check the underlying value before relying on it.

### Dates and times

A recognized [[date-value|date]] is more than text that *looks* date-like: the spreadsheet may store it in a form suitable for date-related calculations. For example, `2026-11-21` means November 21, 2026. A display format might show `11/21/2026`, `21 Nov 2026`, or `November 21, 2026` depending on the software and regional settings. For teaching and data exchange, an ISO-style year–month–day representation is often clearer than `03/04/2026`, which can be interpreted as March 4 or April 3.

| Written entry | Possible interpretation | Safer action |
| --- | --- | --- |
| `2026-11-21` | November 21, 2026 | Confirm the application recognized the date |
| `11/21/2026` | US-style November 21, 2026 | Use in appropriate locale and verify |
| `03/04/2026` | March 4 or April 3, 2026 | Resolve the intended locale/date explicitly |
| `9:30 AM` | A time of day | Check that the program recognizes the time |
| `12/4` | A date or fraction-like input | Avoid ambiguous entry and inspect conversion |

A spreadsheet's [[locale|locale]] may affect date parsing and appearance. Dates stored as text may be harder to sort chronologically or use in formulas. Conversely, an item code that looks like `1-2` may be mistakenly interpreted as a date. Choose the intended category before data entry and verify after.

### Leading zeros and text-formatted identifiers

Suppose your inventory code is `0042`, not the quantity forty-two. In a normal numeric cell, entering `0042` may become `42` because leading zeros do not change its mathematical value. For a four-character code, preserving the initial zeros matters. Format **empty destination cells** as Text or Plain Text before entering codes, or follow the supported text-entry convention of your application. The apostrophe prefix used in many spreadsheet programs is one such entry convention, but the final display and export behavior should be checked.

| Entry | If treated as a number | If treated as a text code | Correct choice for an ID |
| --- | --- | --- | --- |
| `0042` | Often appears as `42` | Retains `0042` | Text |
| `0008` | Often appears as `8` | Retains `0008` | Text |
| `01001` | Often appears as `1001` | Retains `01001` | Text |
| `12` as an actual count | Remains twelve | Could remain characters `12` | Number |

Do not put real account numbers, government identifiers, or personal contact data into class practice. These examples are entirely fictional.

### A compact application-agnostic formatting workflow

1. **Select** the intended cell or range, such as `C2:C5` for prices.
2. **Identify meaning:** Is this count, money, date, percentage, or an identifier?
3. **Choose the format** from the application's number-format or cell-format controls.
4. **Specify detail** only as needed—currency, decimal places, date order, or text preservation.
5. **Inspect multiple examples** in the selected range, especially zero, blank, negative, long, and unusual entries if present.
6. **Verify the source** against the fictional worksheet or authorized record. Do not assume a format repaired incorrect entry.

In Excel, number formats are available through the Home tab's Number controls and the Format Cells dialog. In Google Sheets, number/date/currency formatting is available through the toolbar and Format menu. In LibreOffice Calc, Format Cells offers number categories. The exact labels can differ between versions, operating systems, and screen-reader interfaces.

## 6. How do you make data readable and reliable?

Visual formatting should help someone understand information without obscuring or changing it. Emphasize the [[header-row|header row]], allow long labels to fit, use suitable formats, and maintain a consistent arrangement. A visually polished sheet is still unreliable if rows are mismatched or data types are inconsistent. Verification has priority over decoration.

### Simple improvements to the supply list

| Feature | Purpose | A restrained choice | Risk if overused |
| --- | --- | --- | --- |
| Bold headings | Identify column meanings | Bold row 1 | Too much bold loses meaning |
| Cell background | Distinguish headings | One subtle heading fill | Strong or inconsistent colors distract |
| Borders | Separate nearby values | Light borders where helpful | Dense gridlines make a list crowded |
| Column width | Show entire entries | Widen Item and Needed by columns | Narrow columns hide text or numbers |
| Wrap text | Show long labels on more than one line | Wrap long headings | Excessive wrapping makes rows tall |
| Alignment | Make a column visually coherent | Consistent within a column | Alignment is not proof of stored type |
| Number format | Communicate units and precision | Currency for prices; dates for deadlines | Wrong percentage or date display misleads |

### Contrast, color, and accessibility

Use descriptive text labels and readable contrast. Do not rely on color alone to convey meaning: a green fill might mean “Ready” to one person, but be invisible or ambiguous in a monochrome printout, to a screen-reader user, or to someone with a color-vision difference. Keep the word `Ready` in the Status cell. The same applies to negative values: a red font is not a substitute for an explicit minus sign, parentheses, or an accessible label when appropriate.

Avoid merging cells inside an ordinary data list. Merged cells can complicate selection, navigation, sorting, and accessibility. If a title is necessary, place it above the list or use another accessible layout that does not interfere with the table's data columns. Distinguish [[visual-style|visual styling]] from the information itself.

### Increasing column width versus changing contents

If a price appears as `#####` or an item label seems clipped, first adjust the column width or examine wrapping. Widening a column usually does not modify the underlying value or the cell address. Do not delete digits from an item code simply because it does not fit. If a displayed money value has excessive decimal places, you may adjust its display precision—but check whether the stored precision matters.

### Make copying and pasting deliberate

A paste may replace existing values, shift formatting, split rows/columns, or bring formula-like strings into the destination. You may use [[paste-values|Paste Values]] where supported when you want entries without source formatting; still inspect data types afterward. Do not paste unknown internet content into a workbook you depend on. For multi-cell exercises, count the destination rows and columns before committing the paste.

### Review after entry, not only at the end

Use a simple [[quality-check|quality check]] after every short batch of entries:

1. **Address:** Am I on the correct worksheet and in the intended cell or range?
2. **Meaning:** Is this a label, quantity, amount, date, percentage, or code?
3. **Accuracy:** Does the entry match the fictional or authorized source?
4. **Display:** Are symbols, date order, decimal places, and column widths clear?
5. **Consistency:** Do entries in the same column mean the same thing?
6. **Completeness:** Are blanks genuinely unknown rather than accidentally omitted?
7. **Safety:** Have I avoided private records and saved the work correctly?

| Check item | Example of a problem | Better resolution |
| --- | --- | --- |
| Correct address | The status `Ready` is in the price column | Move or re-enter status in Status; verify both cells |
| Correct type | `0042` turned into `42` | Re-enter as text after setting up the cell appropriately |
| Correct unit | A price appears as `4.50` without known currency | Identify the currency and apply its format |
| Correct percent | A 12% rate shows `1200%` | Correct the stored amount or intended percentage entry |
| Correct date | `03/04/2026` is ambiguous | Verify the intended calendar date and locale |
| Correct visibility | `#####` conceals a number | Widen column or examine the underlying cause |
| Missing versus zero | Unknown price is entered as `$0.00` | Use blank/status field if price is truly unknown |
| Correct record | An entry is on the wrong row | Restore the correct row assignment before calculations |

### Saving and sharing

A finished-looking screen is not proof that a file is saved. Some applications show a save indicator; other programs require Save or Save As. If using a collaborative spreadsheet, permissions and changes can be shared with others. Class exercises should be completed in a private practice document, not a team spreadsheet. If an important record was damaged, stop editing it and use an authorized recovery or version-history procedure where available.

> **Reliable-workflow rule:** **Choose the right cell → enter the right type → format for clarity → review the original → confirm the saved result.** This sequence is more valuable than memorizing a particular toolbar icon.

## 7. Guided practice: Enter, format, and check data

You can perform all six activities with paper and pencil. If using software, open a **new practice worksheet** and enter only the fictional values shown here. Each activity begins from a stated example; do not change an actual business or household spreadsheet. Menu positions may vary, so the expected outcome matters more than a particular mouse sequence.

### Activity 1: Classify entries before typing (about 10 minutes)

For each fictional entry, decide whether it should be a **number**, **text**, **date**, or **percentage**. Then explain why.

| Entry | Meaning | Your category |
| --- | --- | --- |
| `5` | Five packs | ________ |
| `0025` | A four-character supply code | ________ |
| `Ready` | Work status | ________ |
| `2026-11-21` | Calendar deadline | ________ |
| `0.10` | Ten-percent discount | ________ |
| `4.75` | Unit price in dollars | ________ |

Pay special attention to the four-character code: it is not a quantity even though every character is a digit.

:::answer Show Activity 1 answers
1. Number; it is a count.
2. Text; the four-character identifier must preserve its zeros.
3. Text; a status is descriptive.
4. Date; it identifies a calendar day, provided the application recognizes it as a date.
5. Percentage; the stored fraction `0.10` can display as `10%`.
6. Number with currency format; the underlying numeric amount is `4.75`, displayed as `$4.75` when using US-dollar currency.

:::

### Activity 2: Build a four-row supply list (about 15–20 minutes)

Draw columns A–E and rows 1–5 on paper, or use a new blank worksheet. Place these headings in row 1: `Item`, `Quantity`, `Unit price`, `Needed by`, `Status`. Enter the four fictional records from Section 3, one item per row. Use these exact locations to check your work:

1. Enter `Markers` in `A2` and `3` in `B2`.
2. Enter `4.50` in `C2`, the intended date November 21, 2026 in `D2`, and `Ready` in `E2`.
3. Enter the notebook record across row 3, the folder record across row 4, and the tape record across row 5.
4. Inspect `B4`, `C5`, and `E3` without modifying them.
5. Explain why the first record is in row 2 instead of row 1.

:::answer Show Activity 2 expected worksheet
| Cell | Expected content |
| --- | --- |
| `B4` | `5` |
| `C5` | `3.75` |
| `E3` | `Ordered` |
| Row 1 | Headings identifying the five kinds of information |
| Row 2 | First complete item record: Markers |

The completed records should match the Section 3 teaching map. Date appearance may vary, but their intended calendar dates must remain correct. If using Excel or another app, check recognition and format before assuming a typed date was stored correctly.

:::

### Activity 3: Correct three ordinary entry mistakes (about 10–12 minutes)

Consider a copy of the list from Activity 2. Imagine these mistakes appear independently; **do not** perform the exercise on a real file:

- `A3` says `Noteoboks` rather than `Notebooks`.
- `B4` says `50` instead of `5`.
- `E5` is blank even though the fictional source says `Pending`.

For each mistake, explain what cell to select, what should change, and how you would verify it. Then answer: why could beginning to type while a filled cell is selected be risky?

:::answer Show Activity 3 sample corrections
1. In `A3`, change `Noteoboks` to `Notebooks`; reread the full name.
2. In `B4`, replace the quantity with numeric `5`; check the intended item remains Folders.
3. In `E5`, enter `Pending` as a text status; confirm it stays on the Tape row.
4. Typing directly into a selected filled cell may replace its entire contents. Edit or replace intentionally and verify the result. Undo can help in some circumstances, but should not be the sole safety plan.

:::

### Activity 4: Separate a stored number from its display (about 12–15 minutes)

Assume that the numbers in the **Stored number** column below are already in cells. Complete the expected display using ordinary US-English number formats. These are conceptual format changes, not instructions to change the underlying amount.

| Stored number | Chosen format | Expected display (fill in) |
| --- | --- | --- |
| `4.5` | Currency, two decimals | ________ |
| `4.5` | Number, two decimals | ________ |
| `0.25` | Percentage, zero decimals | ________ |
| `15` | Percentage, zero decimals | ________ |
| `3.756` | Number, two decimals | ________ |
| `1250` | Number with US thousands separator | ________ |

Explain which answer is a common trap when people confuse a whole number with a decimal fraction.

:::answer Show Activity 4 answers
| Stored number | Expected display |
| --- | --- |
| `4.5` with currency | `$4.50` |
| `4.5` with two decimals | `4.50` |
| `0.25` as percentage | `25%` |
| `15` as percentage | `1500%` |
| `3.756` with two decimals | `3.76` |
| `1250` with US grouping | `1,250` |

The common trap is `15` becoming `1500%` when a Percentage format is applied. Fifteen percent is mathematically `0.15`. Also, showing `3.76` does not automatically change the underlying `3.756`.

:::

### Activity 5: Inspect a messy dataset (about 12–15 minutes)

The table below represents a fictional sheet copied from different sources. Find **at least six** issues or items to verify. Some are definitely problematic; some require clarifying the intended meaning rather than making an automatic change.

| Record | Item code | Quantity | Unit price | Needed by | Status |
| --- | --- | --- | --- | --- | --- |
| A | `0042` | `3` | `$4.50` | `2026-11-21` | `Ready` |
| B | `42` | `Seven` | `2.25` | `03/04/2026` | `Ordered` |
| C | `0091` | *(blank)* | `0.00` | `2026-11-23` | *(blank)* |
| D | `0015` | `2` | `#####` | `2026-11-22` | `Pending` |

Consider codes, numeric types, missing entries, ambiguous dates, display width, currency, and whether zero means a true zero. Do not assume that records A and B refer to the same item merely because their codes look related.

:::answer Show Activity 5 findings
Possible findings include:

1. `0042` and `42` may be different identifiers; verify whether Record B lost leading zeros and whether it should be `0042` or a distinct code.
2. Quantity `Seven` is text; if the intended quantity is seven, confirm source information and enter numeric `7`.
3. `03/04/2026` is locale-ambiguous; confirm March 4 versus April 3 before converting it to a recognized date.
4. Record C has a blank quantity; identify whether it is unknown, zero, or accidentally omitted.
5. Record C's `0.00` price may mean free or unknown; do not silently turn it into a zero-dollar price without evidence.
6. Record C has a blank status; check the fictional source rather than inventing a status.
7. Record D's `#####` may reflect a narrow column or another display issue; inspect the underlying entry before making changes.
8. The prices have inconsistent visible currency formatting; identify the intended currency and apply a consistent format.
9. The item-code column needs text treatment so all intended characters remain intact.

Several of these issues require **verification**, not automatic correction. An uncertain value should not become a confident but fabricated one.

:::

### Activity 6: Optional live formatting and final review (about 15–20 minutes)

In a **new disposable spreadsheet**, build the Activity 2 list or recreate it from the fictional records. Then:

1. Apply a readable, consistent style to the row-1 headings; keep words such as `Status` explicitly written.
2. Select the `C2:C5` price range and choose a US-dollar currency format with two decimal places.
3. Apply a date format to `D2:D5`, verifying that each resulting date is the intended calendar day.
4. Widen columns or wrap text as necessary so labels and numbers are readable.
5. Add a new empty `Item code` column only if comfortable doing so in the disposable file. Enter the text code `0042` with leading zeros preserved. If insertion seems confusing, skip it and practice on paper.
6. Inspect three cells for content, meaning, and presentation; confirm the right workbook is saved or explicitly discard it.
7. Do not paste unknown online data, run formulas from strangers, or connect the sample to any real account.

If you do not have spreadsheet software, write down the selected ranges and expected displays and complete the entire exercise as a paper review.

:::answer Show Activity 6 expected outcome
- Row 1 clearly identifies the five data categories; formatting makes it readable without replacing labels with color.
- `C2:C5` displays `$4.50`, `$2.25`, `$1.20`, and `$3.75` when using the US-dollar currency format.
- Dates represent November 21, November 22, November 21, and November 23, 2026 respectively, regardless of an approved alternative display style.
- Long entries are visible after suitable width or wrap adjustments.
- If included, the sample item code remains `0042`, not the quantity `42`.
- All records stay aligned with the correct item and row.

:::

### Practice reflection

Explain these two questions in your own words: **Why can a cell display `$4.50` while storing the number `4.5`?** And **why is it safer to confirm a date or code after entering it instead of trusting that the program interpreted it correctly?** A clear explanation is more important than the speed of your typing.

## 8. Common misconceptions

### “Formatting a cell corrects inaccurate information.”

No. A Currency format can display the wrong price with a dollar sign. Verify the actual entered value against the source.

### “If I type `0042`, the zeros will always be preserved.”

Not if the program interprets the entry as an ordinary number. Use an appropriate text treatment for identifiers and verify the result.

### “Typing `15` and applying percentage format produces `15%`.”

In common spreadsheet programs, formatting stored `15` as a percentage produces `1500%`. Fifteen percent corresponds to `0.15`; direct percentage entry behavior should still be checked.

### “If the screen shows `3.76`, the cell must store `3.76`.”

Not necessarily. The cell may store `3.756` and only round the display to two decimal places.

### “A blank price proves an item is free.”

No. A blank usually means no entry; a true numeric zero makes a different assertion. Record the missing information explicitly when necessary.

### “Anything made of digits must be a number.”

Not always. Product codes, postal codes, and many identifiers should be kept as text to preserve exact characters.

### “A date written with slashes is always understood the same way.”

No. `03/04/2026` can be interpreted differently by locale. Confirm the actual intended day, month, and year.

### “Right-aligned content proves it is numeric.”

No. Alignment is visual styling and can be changed. Inspect content and type directly.

### “Hash marks mean the number was deleted.”

Not usually. In Excel, `#####` may be a display-width issue. Inspect the cell, widen the column, and investigate if it persists.

### “Typing into a filled cell only adds another letter.”

Starting to type over a selected cell can replace its contents. Use the application's editing method if you mean to modify only part of an entry.

### “Pasting always transfers only the visible words.”

Paste actions can include numbers, formulas, styles, and multiple cells. Review destination range and type interpretation.

### “Using more color always makes a sheet easier to understand.”

Excessive or color-only encoding can make data harder to read. Use explicit labels, sufficient contrast, and consistent formatting.

### “A beautiful table is a reliable table.”

Visual polish cannot replace correct values, meaningful units, and verification against the original source.

### “A number displayed as `$4.50` means four and a half items.”

It represents a monetary amount when the column and format indicate currency. Quantities and prices should be separated and labeled.

### “Every program uses the same menus and date conventions.”

No. Excel, Google Sheets, and Calc share core concepts but differ in details. Choose the correct application help and confirm visible results.

### “A saved workbook cannot contain errors.”

Saving preserves a file state; it does not verify its contents. Read the entries, check the source, and confirm the save destination.

## 9. Essential vocabulary

These definitions support the linked terms throughout the lesson. A dotted-underlined term can open a short explanatory panel when the MGU dashboard supports tooltips. The complete vocabulary remains available here if tooltips are disabled. The final `:::terms` block provides corresponding machine-readable definitions; definitions do not require a live web connection.

### Worksheet structure and entry

- **Spreadsheet:** A digital grid-based document or system for organizing information and performing calculations.
- **Workbook:** A spreadsheet file that may contain one or more worksheets, particularly in Excel.
- **Worksheet:** One grid of rows and columns within the file.
- **Grid:** The arrangement of intersecting rows and columns.
- **Row:** A horizontal sequence of cells identified by a number.
- **Column:** A vertical sequence of cells identified by letters.
- **Cell:** An addressable place in a worksheet, such as `A2`.
- **Active cell:** The current location targeted for entry or another operation.
- **Cell reference:** An address such as `C3` that names a cell's location.
- **Range:** A group of cells, such as `C2:C5`.
- **Header row:** A row of labels that explains what columns contain.
- **Record:** One structured item or event commonly placed across a row.
- **Field:** A category of data commonly stored in one column.
- **Data entry:** Putting or recording information into cells.
- **Edit:** Modifying existing contents of a cell.
- **Replace:** Overwriting old contents with a new entry.
- **Commit entry:** Confirming an entered value so it becomes cell content.
- **Undo:** A command that reverses an available recent action.
- **Clear contents:** Remove a cell's entry while generally leaving the cell's grid position intact.
- **Formula bar:** The interface area used to view or edit underlying cell entries in many apps.

### Values, types, and formatting

- **Data type:** A category describing how an item of information should be interpreted or processed.
- **Text value:** Characters stored as descriptive text rather than a quantity for arithmetic.
- **Numeric value:** A number available for arithmetic, subject to app behavior and format.
- **Date value:** A recognized calendar date represented so the application can work with dates.
- **Time value:** A recognized time of day or duration, with meaning dependent on context.
- **Formula:** An expression instructing the spreadsheet to perform a calculation, often introduced with `=`.
- **Stored value:** The underlying value kept by a cell, distinct from its display appearance.
- **Display format:** A rule controlling how stored data appears on screen or in print.
- **Formatting:** Adjusting display or styling without necessarily changing the underlying value.
- **Number format:** Rules for displaying numbers as decimals, currency, percentages, dates, and more.
- **General format:** A default display category in many spreadsheet programs.
- **Decimal place:** A digit position to the right of a decimal separator.
- **Display rounding:** Showing fewer digits for readability without necessarily replacing the stored value.
- **Currency:** A format or unit indicating a monetary amount, such as US dollars.
- **Accounting format:** A money display that often aligns symbols and values differently from ordinary Currency format.
- **Percentage:** A fraction represented per hundred; e.g., `0.15` is `15%`.
- **Locale:** A regional/language setting that can affect number, currency, and date interpretation or display.
- **Thousands separator:** A grouping mark such as the comma in US-style `1,250`.
- **Identifier:** A code used to label something rather than quantify it.
- **Leading zeros:** Zero characters at the beginning of a code such as `0042`.
- **Plain text:** A treatment that preserves characters as text without interpreting them as numbers or dates.
- **Unit price:** The price associated with one stated unit, such as one pack or one item.
- **Line total:** An amount calculated for a particular record, often from quantity times unit price.

### Readability, changes, and checks

- **Alignment:** Positioning displayed contents within a cell.
- **Header styling:** Formatting that visually distinguishes column headings from data.
- **Bold:** A text style using thicker letter strokes for emphasis.
- **Cell border:** A line drawn around cell edges or sections of a table.
- **Column width:** The visible horizontal space available for a column.
- **Row height:** The visible vertical space available for a row.
- **Wrap text:** Showing long cell entries on additional lines within a cell.
- **Visual style:** The appearance of cells without changing the intended meaning of their data.
- **Copy and paste:** Moving or duplicating content between locations, potentially including styles or formulas.
- **Paste Values:** A paste choice that transfers result/content values without all source styling or formulas, where supported.
- **Fill handle:** A control for copying or extending data into nearby cells.
- **AutoFill:** A feature that copies a value or continues an inferred pattern.
- **Missing value:** Information not known, not provided, or not recorded at a location.
- **Blank cell:** A cell without an entered value.
- **Zero:** The numerical value `0`, distinct from unknown or missing data.
- **Data consistency:** Applying stable meanings and types to entries in a dataset.
- **Quality check:** A structured review for accuracy, interpretation, completeness, and presentation.
- **Accessibility:** Making information and controls usable by people with varied abilities and assistive technologies.
- **Contrast:** The visual difference that helps text and backgrounds remain legible.
- **Save:** Recording a document's changes in a persistent location.
- **Autosave:** Software automatically recording changes, subject to its settings and connection conditions.
- **Version history:** Previously recorded file states where the system supports them.
- **Sharing permission:** A rule controlling who can view or edit a file.

## 10. Knowledge check

Choose one answer per question. The dashboard can grade the questions locally with **Check answers**; explanations and a manual key follow. The fictional scenarios require no account, download, payment, or live spreadsheet. Answer based on the meaning of the information, not on a particular version of a toolbar.

:::quiz
? Which entry represents a count that can ordinarily be used in arithmetic?
- [x] The number 8 in a Quantity column
- [ ] The item name Notebooks
- [ ] The status Ready
! A quantity must be numeric if it represents a count.

? What is the best data treatment for a four-character item code 0042?
- [ ] An ordinary number displayed as 42
- [x] Text that preserves all four digits
- [ ] A date chosen automatically by the program
! An identifier should retain its exact characters, including leading zeros.

? In a typical list, what belongs in the first row of the example from this lesson?
- [ ] The first complete supply record
- [ ] A repeated copy of the final row
- [x] Labels describing the columns
! Row 1 contains field names; the first item is in row 2.

? What is the main risk of typing while an existing filled cell is selected?
- [x] The old contents may be replaced
- [ ] Only the font size will change
- [ ] The entire worksheet must close
! Typing into a selected cell may overwrite the previous entry.

? What should you verify before entering the word Pending?
- [ ] That every column is already bold
- [x] That the active cell is in the correct Status column and record row
- [ ] That the worksheet has at least one formula
! Location must be checked before changing data.

? What is the common difference between Enter and Tab after typing in a desktop sheet?
- [ ] Enter always deletes a row and Tab always inserts a column
- [ ] Both are guaranteed to close the file
- [x] They may commit the entry and move the selection in different directions
! Entry keys may confirm an entry and move to a new cell; app settings can affect behavior.

? Which statement best describes a stored value versus a display format?
- [x] The stored value is underlying data; a display format controls its appearance
- [ ] The display format always changes the numerical value permanently
- [ ] Stored values exist only in text cells
! A number can have different appearances while keeping the same underlying quantity.

? If the number 4.5 is displayed as US currency with two decimals, what do you see?
- [ ] 450%
- [x] $4.50
- [ ] $45.00
! Currency formatting can show $4.50 while the stored number remains 4.5.

? If a cell stores 0.25 and is shown as a percentage with zero decimals, what appears?
- [ ] 0.25%
- [ ] 2500%
- [x] 25%
! 0.25 is 25 hundredths, equivalent to 25%.

? What will a common spreadsheet display when stored 15 is formatted as a percentage?
- [x] 1500%
- [ ] 15%
- [ ] 0.15%
! Fifteen whole units expressed as percentage points is 1500%; 0.15 is 15%.

? Which underlying number correctly represents twelve percent?
- [ ] 12
- [x] 0.12
- [ ] 1200
! Twelve percent equals twelve hundredths, or 0.12.

? What is the strongest reason to verify a date typed as 03/04/2026?
- [ ] Dates can never be entered into spreadsheets
- [ ] Every spreadsheet treats slashes as a formula
- [x] Different locale conventions may interpret the month and day differently
! The same slash-delimited digits can correspond to different dates across locales.

? Which statement about number formatting and rounding is correct?
- [x] A displayed 3.76 can still have the stored value 3.756
- [ ] Displaying two decimals always deletes other digits from the stored number
- [ ] Number formats automatically make all prices correct
! Display rounding usually alters appearance without necessarily changing the underlying value.

? What should you do if a cell shows ##### in Excel?
- [ ] Replace the original value with five hash symbols
- [x] Inspect the cell and try widening its column or checking its format
- [ ] Assume that the workbook was deleted
! Hash marks frequently indicate that the displayed value does not fit the column; other causes can exist.

? Which entry most clearly represents a missing value rather than a definite quantity?
- [ ] The numeric value 0
- [ ] The text label Zero items confirmed
- [x] An empty cell in a quantity column with no recorded source value
! Blank is not equivalent to known zero.

? What does entering 0.00 in a price column assert when it is stored as numeric zero?
- [x] A recorded zero-dollar amount, not simply an unknown price
- [ ] The price has not yet been checked
- [ ] The cell contains no value
! An explicit zero is different from absent or unknown information.

? Why does the course recommend one ordinary supply record per row?
- [ ] So every row must have a different font
- [x] So each row keeps related item information together
- [ ] So all headings can be removed
! A record-oriented layout keeps fields aligned with their item.

? Which example demonstrates inconsistent data types in a Quantity column?
- [ ] Every cell contains a whole-number count
- [ ] The header states Quantity above the numbers
- [x] Most cells contain numbers but one contains the word Seven
! Mixing text descriptions and numerical counts should prompt checking and standardization.

? What is an appropriate display for a stored unit-price number 2.25 in US dollars?
- [x] $2.25
- [ ] 225%
- [ ] 2025-02-25
! Currency formatting conveys that 2.25 is an amount of money.

? How should you treat a postal code or item code with meaningful leading zeros?
- [ ] Treat it as a number because it has only digits
- [x] Store it as text using a method that preserves its digits
- [ ] Delete zeros to improve the column width
! Identifiers are labels and may require exact character preservation.

? Which action typically adjusts visibility without changing a numeric stored value?
- [ ] Replacing 3.5 with 35
- [ ] Deleting the row containing the value
- [x] Widening a column
! Column width is a display/layout property.

? What is the purpose of wrapping text in a cell?
- [x] Show long text across additional lines inside that cell
- [ ] Automatically calculate a subtotal
- [ ] Change a number to an identifier
! Wrap Text affects display of long content, not its intended data type.

? Which practice communicates status most accessibly?
- [ ] Use green without any text or legend
- [x] Write the word Ready rather than relying only on a green fill
- [ ] Hide the Status column and ask users to guess
! Explicit status labels are useful across color, print, and assistive-technology contexts.

? What is a potential consequence of pasting multiple cells from another source?
- [ ] Pasting can never alter a numeric value
- [ ] The destination data always becomes plain text
- [x] The destination may receive values, formulas, and formatting that need review
! Paste behavior depends on the application and option, so inspect the selected destination.

? What is the right first step when an item code unexpectedly appears as 42 instead of 0042?
- [x] Check whether it was interpreted as a number and re-enter correctly as text if needed
- [ ] Change the column background to green
- [ ] Assume the zeros are still stored without checking
! Prevent or correct automatic conversion; formatting text afterward may not recover lost zeros.

? Which example is an underlying value rather than only its visual display?
- [ ] The bold typeface used on a heading
- [x] The number 0.15 used to represent fifteen percent
- [ ] The light border drawn around a cell
! The stored decimal fraction supplies the quantity; styling is presentation.

? What is the best response to a date-like entry that the program interprets incorrectly?
- [ ] Change only the font color
- [ ] Ignore it because it looks like a date
- [x] Confirm the intended date, correct the entry, and verify its recognized value
! Correct date meaning and type, not merely appearance.

? What does the line total of an item generally mean?
- [x] The amount for a record based on quantity and unit price
- [ ] The size of the font used for prices
- [ ] The number of columns in a worksheet
! A line total typically combines the number of units and the corresponding unit price.

? Before saving and sharing an edited list, which review is most useful?
- [ ] Add many different colors without checking entries
- [x] Confirm locations, values, types, displays, missing data, and permissions
- [ ] Assume the formatted table proves every value correct
! A systematic quality check is stronger than visual polish.

? What is the safest place to practice destructive edits or formatting experiments?
- [ ] An important shared budget maintained by others
- [ ] A live payroll workbook
- [x] A new disposable workbook with fictional information
! Class exercises should not put real or shared data at risk.

:::

:::answer Show the quiz answer key with explanations
1. **A.** A quantity must be numeric if it represents a count.
2. **B.** An identifier should retain its exact characters, including leading zeros.
3. **C.** Row 1 contains field names; the first item is in row 2.
4. **A.** Typing into a selected cell may overwrite the previous entry.
5. **B.** Location must be checked before changing data.
6. **C.** Entry keys may confirm an entry and move to a new cell; app settings can affect behavior.
7. **A.** A number can have different appearances while keeping the same underlying quantity.
8. **B.** Currency formatting can show $4.50 while the stored number remains 4.5.
9. **C.** 0.25 is 25 hundredths, equivalent to 25%.
10. **A.** Fifteen whole units expressed as percentage points is 1500%; 0.15 is 15%.
11. **B.** Twelve percent equals twelve hundredths, or 0.12.
12. **C.** The same slash-delimited digits can correspond to different dates across locales.
13. **A.** Display rounding usually alters appearance without necessarily changing the underlying value.
14. **B.** Hash marks frequently indicate that the displayed value does not fit the column; other causes can exist.
15. **C.** Blank is not equivalent to known zero.
16. **A.** An explicit zero is different from absent or unknown information.
17. **B.** A record-oriented layout keeps fields aligned with their item.
18. **C.** Mixing text descriptions and numerical counts should prompt checking and standardization.
19. **A.** Currency formatting conveys that 2.25 is an amount of money.
20. **B.** Identifiers are labels and may require exact character preservation.
21. **C.** Column width is a display/layout property.
22. **A.** Wrap Text affects display of long content, not its intended data type.
23. **B.** Explicit status labels are useful across color, print, and assistive-technology contexts.
24. **C.** Paste behavior depends on the application and option, so inspect the selected destination.
25. **A.** Prevent or correct automatic conversion; formatting text afterward may not recover lost zeros.
26. **B.** The stored decimal fraction supplies the quantity; styling is presentation.
27. **C.** Correct date meaning and type, not merely appearance.
28. **A.** A line total typically combines the number of units and the corresponding unit price.
29. **B.** A systematic quality check is stronger than visual polish.
30. **C.** Class exercises should not put real or shared data at risk.

:::

### Exit task: Explain data and display

Without consulting the lesson, complete these statements:

1. A cell storing `0.15` can display as ________ when a percentage format is selected.
2. I would treat `0042` as ________ when it identifies an item, because ________.
3. A displayed price of `$3.76` might still store ________ if the number format shows only two decimals.
4. Before entering a value, I should check ________.
5. One difference between a blank quantity and zero is ________.

:::answer Show exit task sample responses
1. `15%`.
2. Text; every character, including the first two zeros, must be preserved.
3. A more precise value such as `3.756`.
4. The correct worksheet, active cell, and intended data type.
5. Blank means no value is recorded; zero is an explicit numeric quantity.

:::

## 11. MGU Library connections and next steps

This lesson completes the basic entry-and-presentation foundation. In Lesson 4 you will begin using simple formulas to calculate results from correctly entered numbers. The next lesson assumes you can distinguish numeric values from text codes, read `B2`-style cell references, and verify that prices and percentages mean what they appear to mean.

### MGU course connections

- [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) — the nine-lesson beginner sequence.
- [Lesson 1: What Is a Spreadsheet?](/department/computer-science/basic-computer-skills/spreadsheet-skills/what-is-a-spreadsheet/) — the purpose of a spreadsheet and its everyday uses.
- [Lesson 2: Rows, Columns, and Cells](/department/computer-science/basic-computer-skills/spreadsheet-skills/rows-columns-and-cells/) — locating entries, selecting ranges, and navigating the grid.
- [Lesson 4: Simple Formulas](/department/computer-science/basic-computer-skills/spreadsheet-skills/simple-formulas/) — the next lesson, introducing calculated results.

### Official application guides

- [Microsoft Support: Enter data manually in worksheet cells](https://support.microsoft.com/en-us/excel/enter-data-manually-in-worksheet-cells) — text, numbers, and dates in cells.
- [Microsoft Support: Quick Start—Format numbers in a worksheet](https://support.microsoft.com/en-us/excel/quick-start-format-numbers-in-a-worksheet) — currency, decimals, percentages, and width-related displays.
- [Microsoft Support: Format numbers as percentages in Excel](https://support.microsoft.com/en-us/excel/format-numbers-as-percentages-in-excel) — how whole numbers and decimal fractions display as percentages.
- [Google Docs Editors Help: Format numbers in a spreadsheet](https://support.google.com/docs/answer/56470?hl=en) — numbers, dates, and currencies in Sheets.
- [Google Docs Editors Help: Edit and format a spreadsheet](https://support.google.com/docs/answer/46973) — general cell editing and visual formatting.
- [LibreOffice Help: Formatting Numbers as Text](https://help.libreoffice.org/latest/en-US/text/scalc/guide/text_numbers.html) — preventing the loss of leading zeros in identifiers.
- [LibreOffice Help: Format Cells](https://help.libreoffice.org/latest/en-US/text/scalc/01/05020000.html) — display categories and appearance controls in Calc.

These are explanatory resources, not steps that learners must execute. If menu labels differ, use the help for the application and version you actually have.

### Continue the Spreadsheet Skills course

[← Previous lesson: Rows, Columns, and Cells](/department/computer-science/basic-computer-skills/spreadsheet-skills/rows-columns-and-cells/) · [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) · [Next lesson: Simple Formulas →](/department/computer-science/basic-computer-skills/spreadsheet-skills/simple-formulas/)

> **Lesson completion checklist:** I can identify appropriate data types; enter, edit, and verify an intended cell; keep one item per row; distinguish values from formats; display currency and percentages correctly; preserve leading zeros; interpret date-entry ambiguity; recognize display rounding and `#####`; format headings readably; and apply a source-based quality check before saving.

:::terms
spreadsheet | Spreadsheet | A digital grid-based file or system for recording, organizing, and calculating data. | 
workbook | Workbook | A spreadsheet file that can contain one or more worksheets, especially in Excel. | 
worksheet | Worksheet | One row-and-column sheet within a spreadsheet file. | 
grid | Grid | The structure formed by intersecting worksheet rows and columns. | 
row | Row | A horizontal series of cells ordinarily identified by a number. | 
column | Column | A vertical series of cells ordinarily identified by a letter or letters. | 
cell | Cell | An addressable location at the intersection of a row and a column. | 
range | Range | A group of worksheet cells, such as C2:C5. | 
active-cell | Active cell | The current cell to which a typing or editing operation would be directed. | 
cell-reference | Cell reference | The column-and-row address of a cell, such as C3. | 
header-row | Header row | A row containing labels that identify the information in each column. | 
record | Record | One item or event represented by a set of related fields, commonly a worksheet row. | 
field | Field | A category of information generally represented by one list column. | 
data-entry | Data entry | Adding or recording information in a worksheet. | 
edit | Edit | Change the existing entry in a cell. | 
replace | Replace | Overwrite existing cell contents with a new entry. | 
commit-entry | Commit entry | Confirm typed information so the spreadsheet stores it as a cell entry. | 
undo | Undo | Reverse a recent operation when the software supports doing so. | 
clear-contents | Clear contents | Remove an entry without necessarily deleting its worksheet row or column. | 
formula-bar | Formula bar | A control showing or editing underlying entries or formulas in many spreadsheet applications. | 
data-type | Data type | The category used to interpret information, such as text, number, or date. | 
text-value | Text value | An entry interpreted as characters or descriptive text rather than a numerical quantity. | 
numeric-value | Numeric value | A number that can normally be used for arithmetic. | 
date-value | Date value | A recognized calendar date stored for date interpretation or calculations. | 
time-value | Time value | A recognized time or duration represented in a spreadsheet. | 
formula | Formula | An expression that tells a spreadsheet to calculate, often starting with an equals sign. | 
stored-value | Stored value | The underlying cell value, potentially different in appearance from what is displayed. | 
display-format | Display format | Rules that control how the underlying cell value appears. | 
formatting | Formatting | Changing presentation, style, or numeric display settings without necessarily changing stored contents. | 
number-format | Number format | Display rules for numeric values, including currency, percentages, and dates. | 
general-format | General format | A default number display category used by many spreadsheet applications. | 
decimal-place | Decimal place | A digit position to the right of a decimal separator. | 
display-rounding | Display rounding | Showing fewer digits without necessarily replacing the stored number. | 
currency | Currency | Money as a unit and a display format, such as U.S. dollars. | 
accounting-format | Accounting format | A monetary display style that often aligns symbols and numbers in columns. | 
percentage | Percentage | A fraction of one hundred; 0.15 represents fifteen percent. | 
locale | Locale | Language and regional conventions that affect interpretation or display of numbers and dates. | 
thousands-separator | Thousands separator | A grouping mark, such as a comma in US-style 1,250. | 
identifier | Identifier | A code used to label a person, item, or record rather than describe a quantity. | 
leading-zeros | Leading zeros | Initial zero characters in codes such as 0042 that may be meaningful. | 
plain-text | Plain text | A text category that can help retain exact characters instead of automatic numeric/date conversion. | 
unit-price | Unit price | The cost associated with one identified unit of an item. | 
line-total | Line total | An amount associated with one record, typically calculated using quantity and unit price. | 
alignment | Alignment | The visible positioning of content inside cells. | 
header-styling | Header styling | Visual emphasis used to separate column labels from underlying data. | 
bold | Bold | A thicker font presentation used for emphasis. | 
cell-border | Cell border | A visible line along one or more edges of cells. | 
column-width | Column width | The horizontal space used to display a worksheet column. | 
row-height | Row height | The vertical space used to display a worksheet row. | 
wrap-text | Wrap text | A setting that displays long cell text on additional lines. | 
visual-style | Visual style | Display choices such as color, fonts, fills, borders, and alignment. | 
copy-paste | Copy and paste | Duplicate or transfer content, sometimes including formulas and formatting. | 
paste-values | Paste Values | A supported paste choice that transfers values without all original formulas or styling. | 
fill-handle | Fill handle | An on-screen control for copying entries or extending a pattern into neighboring cells. | 
autofill | AutoFill | A feature that copies data or continues inferred sequences. | 
missing-value | Missing value | Data that is unknown, unrecorded, or not yet supplied. | 
blank-cell | Blank cell | A cell where no entry has been supplied. | 
zero | Zero | The numeric value 0; not automatically the same as a blank or unknown value. | 
data-consistency | Data consistency | Comparable meaning, units, and data types across related entries. | 
quality-check | Quality check | A deliberate review of content accuracy, interpretation, completeness, and formatting. | 
accessibility | Accessibility | Design and technology practices that support people with varied abilities. | 
contrast | Contrast | A visual difference that helps distinguish text from its background. | 
save | Save | Record changes in the document's persistent storage location. | 
autosave | Autosave | Automatic recording of changes by a supported application or service. | 
version-history | Version history | Previously recorded versions or states of a document when supported. | 
sharing-permission | Sharing permission | An access rule controlling who can view or edit a file. | 

:::

