Beginner Practice Labs / Lab 3

## Lesson introduction

A list of monthly costs can be written on paper or in a document, but a [[spreadsheet|spreadsheet]] offers a useful additional ability: it can calculate totals and revise those totals when numbers change. In this third Beginner Practice Lab, you will build a small, understandable **fictional monthly budget**, enter its data in the proper cells, write formulas that add and subtract numbers, format the results, save your workbook, and check that it still works after an edit.

This is a **computer-skills exercise**, not a request to disclose actual income, bills, bank accounts, or debts. Every amount below is invented. You do not need to connect a financial account, install a banking application, purchase Microsoft Office, or share a spreadsheet with anyone. A teacher may approve Microsoft Excel, Google Sheets, LibreOffice Calc, Apple Numbers, or another application that supports the required basic formulas. The primary walkthrough uses **Excel for Windows 11**; the cell addresses and arithmetic also apply in standard spreadsheet applications, although menus and file-saving behavior vary.

This lab follows [Write, Save, and Print a Document](/department/computer-science/basic-computer-skills/beginner-practice-labs/write-save-and-print-a-document/). If you retained the practice folders from Lab 1, use an authorized folder within `MGU-Practice-Files`; otherwise, choose a new folder you control. By the end, you should be able to reopen the original, explain which cells hold numbers and which hold formulas, and demonstrate that changing an expense updates the calculated totals rather than requiring you to recalculate them by hand.

> **Lab objective:** Build one worksheet named `Practice Budget` with six fictional expense categories, planned and actual costs, expense differences, calculated totals, income, and remaining balances. Validate the initial **$1,625 planned expenses**, **$1,649 actual expenses**, **$375 planned remaining**, and **$351 actual remaining**. Change one input, verify recalculation, and save an authorized editable copy.

### Learning objectives

After completing this lab, you should be able to:

1. Identify a [[workbook|workbook]], [[worksheet|worksheet]], [[cell|cell]], [[row|row]], [[column|column]], and [[cell-reference|cell reference]].
2. Set up and name a safe practice workbook in a known [[destination-folder|destination folder]].
3. Enter readable [[label|labels]] and numeric [[value|values]] without accidentally making a number into text.
4. Write and check simple [[formula|formulas]] using subtraction, cell references, and the [[sum-function|SUM function]].
5. Explain what positive, zero, and negative expense differences mean in this specific exercise.
6. Apply simple headers, [[currency-format|currency formatting]], and sensible column widths.
7. Verify expense totals, remaining balances, and [[recalculation|recalculation]] after an authorized edit.
8. Save, reopen, and distinguish an editable spreadsheet file from an exported PDF or CSV.
9. Troubleshoot common formula, saving, and sharing problems without exposing private data.
10. Complete a six-part practical assessment and an auto-scored knowledge check.

### What you need

- **Application:** Excel, Google Sheets, LibreOffice Calc, Apple Numbers, or an equivalent spreadsheet editor. Use an application available to you; the assignment does not depend on a paid license.
- **Device:** A laptop or desktop is recommended because small cell grids and formula entry are easier to inspect; a supported mobile spreadsheet app may be used with adapted controls.
- **Workspace:** A personal or instructor-approved practice folder, preferably `MGU-Practice-Files/02-Projects/Practice-Budget` if you retained Lab 1. You may create a separate `MGU-Budget-Lab` folder instead.
- **Sample data:** All figures are printed in this lesson; no external download is needed.
- **Not required:** A real bank balance, actual salary, personal receipts, account login, online sharing, or physical printout.
- **Accessibility alternative:** If an appropriate editor is unavailable, fill in the provided cell-address plan and calculate the expected figures on paper or with an ordinary calculator. That alternative teaches the logic but does not demonstrate actual spreadsheet saving or automatic recalculation; record which portions were simulated.

### On this page

- [1. Understand the spreadsheet deliverable](#1-what-will-you-build)
- [2. Prepare a workbook and location](#2-how-do-you-set-up-the-practice-workbook)
- [3. Enter the fictional budget](#3-how-do-you-enter-data-in-the-right-cells)
- [4. Add calculations](#4-how-do-you-write-and-check-the-formulas)
- [5. Make the worksheet readable and save it](#5-how-do-you-format-save-and-reopen-the-budget)
- [6. Test changes and interpret results](#6-how-do-you-test-a-change-and-explain-the-results)
- [7. Complete the guided lab activities](#7-guided-practice-complete-the-budget-lab)
- [8. Work on other platforms and troubleshoot](#8-how-do-you-adapt-the-lab-and-fix-common-problems)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Completion review and further learning](#11-completion-review-and-further-learning)

## 1. What will you build?

A spreadsheet is a grid designed to organize information in rows and columns. Each intersection is a [[cell|cell]], addressed by its column letter and row number. `B5` refers to column B, row 5; it is **not** the fifth column or the second row. A spreadsheet file is typically a [[workbook|workbook]] containing one or more worksheets. A [[worksheet|worksheet]] is one named grid within that workbook. This exercise needs only **one** worksheet.

You will create a basic monthly budget for a fictional person. Its numbers show two versions of the same month: **planned** amounts and **actual** amounts. A person might plan to spend $260 on groceries but end up spending $284. The budget should show that difference and also calculate the combined result across six categories.

### Required deliverables

| Deliverable | Expected result | How to verify |
| --- | --- | --- |
| One editable workbook | Named `fictional-monthly-budget.xlsx`, or an appropriate native format | Find it in the approved location and reopen it |
| One named worksheet | `Practice Budget` | Inspect the sheet tab or app's sheet list |
| Six expense categories | Rows 5–10 | Read labels and numeric amounts side by side |
| Six expense-difference formulas | Cells `D5:D10` | Each cell is computed from the planned and actual amounts on its row |
| Expense totals | Planned $1,625; actual $1,649 | Verify `B11`, `C11`, and `D11` |
| Income and remaining balances | Income $2,000; remaining $375 planned and $351 actual | Verify `B13:C14` |
| Revision test | Editing `C6` changes calculated totals | Compare results before and after an edit |
| Final inspection | File is readable, formulas remain editable, no private data | Reopen and review the workbook |

This is not a financial plan for any real person. The budget is deliberately small enough that you can check the sums without needing sophisticated accounting knowledge. A [[budget|budget]] in this lesson is simply a structured comparison of anticipated and example spending, with income and a calculated remainder. More specialized tools and accounting practices are outside this beginner lab.

### Read the cell-address map

| Address or range | What belongs there | Type of entry |
| --- | --- | --- |
| `A1` | `PRACTICE MONTHLY BUDGET — FICTIONAL` | Text title |
| `A2` | `Sample data only — do not enter real financial details` | Text notice |
| `A4:E4` | Category, Planned, Actual, Difference, Notes | Header labels |
| `A5:A10` | Six expense category names | Text labels |
| `B5:C10` | Planned and actual fictional amounts | Numbers |
| `D5:D10` | Planned minus actual for each expense | Formulas |
| `A11:D11` | Expense totals | Label and formulas |
| `A13:C13` | Income | Label and numbers |
| `A14:D14` | Remaining after expenses | Label and formulas |

The `E` column is optional for short explanatory notes but helps practice making a readable table. All formulas belong inside spreadsheet cells; typing a formula into this lesson does not calculate it. You will enter the formulas directly into the workbook.

### Why a formula matters

If you type `1625` into the total cell, it may show today's correct answer, but it will remain `1625` after an expense changes. If instead you type `=SUM(B5:B10)`, the result is calculated from the current values in the six cells. The spreadsheet can then [[recalculation|recalculate]] when one of those inputs changes. That is the defining behavior you must demonstrate, not merely matching the example numbers once.

### What the figures mean

For **expense rows**, the Difference column uses the rule **Planned minus Actual**. A positive figure means the actual expense is below the plan; a negative figure means actual spending exceeded the plan; zero means the amounts match. That is a convention for this specific worksheet, not a universal accounting sign rule. The remaining-balance row uses a different but intuitive comparison: **Actual remaining minus Planned remaining** in `D14`. Both difference totals should be `-24` initially because the budget ends with $24 less than planned.

> **Key principle:** A spreadsheet can display a correct-looking number without using a working formula. Verify the **formula itself**, its **references**, and its **result**.

## 2. How do you set up the practice workbook?

Before entering a single amount, establish a safe editing location and choose an editor. In a company or school, use only accounts and folders you are authorized to use. A cloud-hosted spreadsheet may be stored in an organization-managed space or could have sharing rules you do not control. This lab never requires creating a publicly accessible link.

### Windows 11 and Excel: create a blank workbook

1. Open **Excel** using the Start menu or an existing shortcut. If Excel is unavailable, use one of the supported alternatives below.
2. Choose **Blank workbook** or the equivalent **New** command.
3. Observe the grid. Column letters run across the top; row numbers run down the side.
4. Find the [[name-box|Name Box]] beside the formula bar, if displayed. It typically shows the currently selected cell's address.
5. Select `A1`. In Excel, you can click it or type `A1` into the Name Box and press Enter.
6. Find the worksheet tab at the bottom, often initially named `Sheet1`. Rename the tab `Practice Budget`, using the tab's context menu or double-click where supported.
7. Do not delete any other sheets until you understand the workbook. Only the one named practice worksheet is required.
8. Save the workbook early under the intended name and in a known authorized folder; saving is explained in Section 5.

Excel's menu labels and placement can vary across installed, browser-based, and device versions. Do not treat a missing command in the exact position shown here as a failure; locate the equivalent new-workbook or rename command using the app's help or instructor guidance.

### Understand the grid before typing

The selected [[active-cell|active cell]] is where a typed value or formula will go. Pressing **Enter** usually commits an entry and moves the selection according to the application's settings. Pressing **Tab** commonly advances to the next column. You can also click a specific cell, use the arrow keys, or use the Name Box in applications that offer one. Look at the cell address **before** entering data; beginners sometimes accidentally type a second category over a header or place a formula one row too high.

A cell can contain text, a number, a date, or a formula. The number `900` should be entered as a number. The currency symbol will be applied with formatting later; typing `USD 900` or an apostrophe in front of a number may cause an application to treat it as text, disrupting calculations.

| Entry | Where it belongs | What to expect |
| --- | --- | --- |
| `Housing` | `A5` | Text label on expense row 5 |
| `900` | `B5` | Numeric planned expense |
| `900` | `C5` | Numeric actual expense |
| `=B5-C5` | `D5` | Formula displaying `0` |
| `Housing costs` | `E5` | Optional explanatory text |

### Files and extensions: keep a real workbook

For Excel, `fictional-monthly-budget.xlsx` is an appropriate editable file name. LibreOffice Calc may offer `.ods` as its native editable format; Google Sheets stores an editable cloud file under a document title and may allow downloading an `.xlsx` copy. Apple Numbers uses its own workbook format. Choose a supported editable native format **first**, not a PDF or text-only export. A PDF can be useful for printing a static summary, but it is not a substitute for verifying formulas. A [[csv|CSV]] export generally does not preserve multiple sheets, rich cell formatting, or ordinary live spreadsheet formula behavior reliably across applications. Do not use CSV as your sole graded deliverable.

### Avoid making a real budget by accident

Use exactly the fictional amounts supplied below. Do not pull figures from your bank, credit report, payroll, or household records. Practice data is also useful because everyone can compare results with the same answer key. If you accidentally enter a real financial detail, remove it from the practice file and avoid sharing that version. Saving a file in a cloud folder does not automatically make it private or public; inspect account and sharing permissions instead of assuming.

## 3. How do you enter data in the right cells?

The first data-entry phase creates the **worksheet skeleton**. You will put the labels in column A, the planned numbers in column B, the actual numbers in column C, optional descriptions in column E, and formulas in column D later. Leave the difference and total calculation cells blank for now; this prevents an answer from being manually typed where a formula should be.

### Step A: enter the title and column headers

1. Select `A1` and type `PRACTICE MONTHLY BUDGET — FICTIONAL`.
2. Select `A2` and type `Sample data only — do not enter real financial details`.
3. Enter `Category` in `A4`, `Planned` in `B4`, `Actual` in `C4`, `Difference` in `D4`, and `Notes` in `E4`.
4. Leave row 3 empty to separate the title from the table.
5. If the title is wider than column A, let it extend across empty cells temporarily. You will adjust widths and formatting in Section 5; do not force the entire title into a narrow cell.

### Step B: enter six expense rows

| Row | Column A — Category | Column B — Planned | Column C — Actual | Column E — Notes |
| --- | --- | --- | --- | --- |
| 5 | Housing | 900 | 900 | Fixed example cost |
| 6 | Groceries | 260 | 284 | Example food spending |
| 7 | Transportation | 110 | 95 | Example travel costs |
| 8 | Utilities | 150 | 143 | Example service bills |
| 9 | Phone & Internet | 85 | 85 | Example connection costs |
| 10 | Personal & Other | 120 | 142 | Example incidental costs |

These are six distinct rows. Row 11 will be the calculated total and **must not be included as an input expense**. Record a category label as ordinary text; record each amount as a number without a currency symbol. For instance, `284` is the number to type in `C6`, not the character string `$284` copied from this lesson.

### Step C: reserve the total and income rows

1. In `A11`, enter `Total Expenses`. Do not enter planned or actual totals by hand.
2. Leave row 12 empty to create a visible separation.
3. In `A13`, enter `Income`. In `B13`, enter the fictional planned income `2000`; in `C13`, enter the fictional actual income `2000`.
4. In `A14`, enter `Remaining After Expenses`. Keep `B14`, `C14`, and `D14` empty until Section 4.
5. Leave `D13` empty, since this practice layout does not need an income-difference calculation.
6. You may put a short note in `E13` such as `Fictional income`, but do not enter identifying or sensitive details.

### Why the row numbers are important

A formula that sums `B5:B10` includes six expense values. A formula that sums `B5:B11` includes those values **and** the total in `B11`, effectively counting the expenses twice if placed elsewhere. A formula referencing `C5:C9` misses the sixth actual expense. Small errors in the ending row can produce plausible but incorrect outcomes. The column letters matter as much as the row numbers: planned expenses are **B**, actual expenses are **C**, and differences belong in **D**.

### Exact entry checklist

| Check | Correct answer | Why it matters |
| --- | --- | --- |
| How many category rows are there? | Six: rows 5 through 10 | Every category must appear once |
| What is in `B6`? | `260` | Planned grocery amount |
| What is in `C6`? | `284` | Actual grocery amount |
| What is in `C10`? | `142` | Actual personal/other amount |
| What is in `B13` and `C13`? | `2000` and `2000` | Fictional income for comparison |
| Where is the total label? | `A11` | Distinguishes total from an input row |
| Which column will hold differences? | D | Calculations can be reviewed separately |

### If a number appears as text

A text-like number may line up differently or be ignored by some sum operations. Check that the cell is not formatted as Text and does not contain an unintended leading apostrophe, hidden space, or unit word. Re-enter the value as a normal number if you can safely do so. Do not assume alignment alone proves the underlying data type. You can test that a calculation referencing the cell produces the expected result.

> **Checkpoint:** Before entering formulas, you should see six readable categories, twelve input expense amounts, the income numbers, and empty cells where calculated results will go.

## 4. How do you write and check the formulas?

A [[formula|formula]] instructs the spreadsheet to calculate an answer rather than store a manually typed result. In Excel, Google Sheets, and LibreOffice Calc, formulas begin with an equal sign `=`. A [[cell-reference|cell reference]] tells the formula which cell's current content to use. A [[range|range]] uses a colon between its first and last addresses, such as `B5:B10`, to mean the contiguous group of cells from B5 through B10.

### Step A: calculate each expense difference

Select `D5` and enter:

```text
=B5-C5
```

Press Enter to calculate the result. It should display `0` because planned housing and actual housing both equal 900. Now fill the other difference cells by selecting each listed address and typing the corresponding expression:

| Cell | Enter this exact formula | Expected baseline result | Interpretation |
| --- | --- | --- | --- |
| `D5` | `=B5-C5` | `0` | Housing matched plan |
| `D6` | `=B6-C6` | `-24` | Groceries exceeded plan by $24 |
| `D7` | `=B7-C7` | `15` | Transportation cost $15 less than plan |
| `D8` | `=B8-C8` | `7` | Utilities cost $7 less than plan |
| `D9` | `=B9-C9` | `0` | Phone and internet matched plan |
| `D10` | `=B10-C10` | `-22` | Personal/other exceeded plan by $22 |

An optional faster method is to enter `=B5-C5` once and use your app's [[fill-handle|fill handle]] or copy-down command to fill `D6:D10`. With ordinary [[relative-reference|relative references]], the spreadsheet adjusts the row numbers. Always inspect `D6` and `D10` afterward to confirm they refer to the correct rows. Manual entry is a valid option and is often easier for a first practice exercise.

### Step B: add expense totals using SUM

Select `B11` and type `=SUM(B5:B10)`. Select `C11` and type `=SUM(C5:C10)`. Select `D11` and type `=B11-C11`. The `SUM` [[function|function]] adds the numerical values in a specified range. The third formula subtracts the calculated actual total from the calculated planned total.

```text
B11  =SUM(B5:B10)
C11  =SUM(C5:C10)
D11  =B11-C11
```

The expected baseline results are `1625` for `B11`, `1649` for `C11`, and `-24` for `D11`. You can independently check the first two with simple addition:

```text
Planned: 900 + 260 + 110 + 150 + 85 + 120 = 1625
Actual:  900 + 284 +  95 + 143 + 85 + 142 = 1649
```

### Step C: calculate what remains after expenses

The sample income appears in `B13` and `C13`, each set to `2000`. Use the expense totals you already calculated rather than retyping six amounts in a second place.

```text
B14  =B13-B11
C14  =C13-C11
D14  =C14-B14
```

This produces **$375 planned remaining**, **$351 actual remaining**, and a **-$24 change in the remainder**. `D14` is defined as actual remaining minus planned remaining; this keeps a negative amount associated with having less left than expected. Notice that `D11` and `D14` both show `-24` in this specific example, but their formulas are different and must not be interchanged.

### Entire formula reference

| Target cell | Formula to type | Expected baseline displayed value |
| --- | --- | --- |
| `D5` | `=B5-C5` | 0 |
| `D6` | `=B6-C6` | -24 |
| `D7` | `=B7-C7` | 15 |
| `D8` | `=B8-C8` | 7 |
| `D9` | `=B9-C9` | 0 |
| `D10` | `=B10-C10` | -22 |
| `B11` | `=SUM(B5:B10)` | 1625 |
| `C11` | `=SUM(C5:C10)` | 1649 |
| `D11` | `=B11-C11` | -24 |
| `B14` | `=B13-B11` | 375 |
| `C14` | `=C13-C11` | 351 |
| `D14` | `=C14-B14` | -24 |

### Inspect the formula rather than just the result

Click `B11`. Many spreadsheet editors show its expression in a [[formula-bar|formula bar]] or allow you to see it by editing the cell. If it reads simply `1625`, you entered a fixed value instead of `=SUM(B5:B10)`; replace the manual total with the formula. If you see `=SUM(B5:B11)`, the range includes the total cell itself and causes a [[circular-reference|circular reference]]. Change it to `B5:B10`.

### Calculations must remain auditable

The numbers in `B5:C10` and `B13:C13` are the **editable inputs**; `D5:D10`, `B11:D11`, and `B14:D14` are **calculated outputs**. If you want to change the budget, edit an input. Do not type a new number over the result of a formula. This separation makes later changes predictable and easier to check.

> **Calculation checkpoint:** You have 12 calculated cells: six row differences, three expense totals/difference outputs, and three remaining-balance outputs. All should contain formulas, not hard-coded answers.

## 5. How do you format, save, and reopen the budget?

Formatting helps someone read the worksheet; it does not fix inaccurate formulas. Apply only enough presentation to distinguish labels, money amounts, and results. A useful beginner worksheet is readable without special colors, complicated charts, or hidden cells.

### Simple formatting sequence

1. Make `A1` easy to recognize as the title; bold text is sufficient. You may increase its font size modestly.
2. Make the header range `A4:E4` bold, with strong contrast and a clearly readable background if desired.
3. Make `A11:D11` and `A13:C14` visually distinct as total, income, and remaining-balance rows. You can use bold text or a top border.
4. Select `B5:D11` and the numeric cells in `B13:D14`; apply an appropriate U.S. [[currency-format|currency or accounting number format]] if your classroom uses U.S. dollars.
5. Widen columns A and E enough that category labels and notes are readable. Widen B through D if numbers show `#####` or become cut off.
6. If a number appears with an unexpected currency symbol, review the app's locale and currency choice; applying formatting does not exchange currencies or convert values.
7. Do not merge cells across the expense table; merged input regions can make editing and selection confusing.
8. Confirm that negative figures are still recognizable even if displayed in parentheses under some accounting formats.

| Feature | A practical choice | What to avoid |
| --- | --- | --- |
| Title | Bold, clearly labeled fictional | A title implying the figures are real |
| Headers | Simple bold row | Tiny text or faint contrast |
| Currency | Consistent two-decimal display if desired | Typing dollar signs as unstructured text |
| Column widths | Labels and amounts visible | `#####` or hidden content |
| Formula cells | Readable and optionally visually identified | Replacing them with fixed numbers |
| Negative differences | Visible minus sign or accounting-style negative | Relying solely on red color |
| Print orientation | Landscape or scaling only if needed | Shrinking to unreadably small text |

### Save the editable original

In desktop Excel, use **File → Save As** or the available Save command, choose an authorized local or cloud folder, and name the workbook `fictional-monthly-budget.xlsx`. If your application offers an [[autosave|AutoSave]] feature, verify the actual storage location and account. AutoSave in one app or account does not guarantee a file exists in the folder you intended. In LibreOffice Calc, a native `.ods` file is acceptable. Google Sheets users should give the cloud file the title `Fictional Monthly Budget` and confirm where it is stored; download an `.xlsx` copy only if required by the instructor. Do not change a file extension merely by typing a different suffix onto the name.

### Reopen to verify persistence

1. After saving, note the actual folder or cloud location you selected.
2. Close the spreadsheet when it is safe to do so and ensure no unsaved-work warning is ignored.
3. Find and reopen the editable workbook using File Explorer, the app's recent/open feature, or the authorized cloud account.
4. Confirm the worksheet is still named `Practice Budget` and the table is intact.
5. Select `B11` and verify the expression is `=SUM(B5:B10)`, not merely a displayed `1625`.
6. Select `C14` and verify the formula is `=C13-C11` and displays the expected baseline amount.
7. Check the file name and location again; a workbook shown in a recent-files list might be stored somewhere other than your intended folder.

### Optional print preview or PDF

A spreadsheet is wider than an ordinary text document. If you choose to print or export, inspect the print preview first. Confirm that the title, all five columns, and rows 4–14 are legible, and that no extra blank pages will be produced. If using a print area, use `A1:E14` or a comparably appropriate selection. PDF output is optional. **Do not** print private financial data on a shared printer, and never treat an optional PDF as the editable workbook needed for this assignment.

### File types are not interchangeable

| Format or service | What it preserves well | Limitation in this lab |
| --- | --- | --- |
| `.xlsx` workbook | Typical Excel-compatible worksheets and formulas | Compatibility may vary by app and features |
| `.ods` workbook | LibreOffice/OpenDocument editing and formulas | Some cross-app formatting or features may differ |
| Google Sheets cloud file | Online editable cells and formulas | Requires appropriate account, permissions, and connectivity for many workflows |
| `.numbers` document | Apple Numbers editing | Layout and exchange may differ from Excel-style sheets |
| `.pdf` export | Page-oriented static appearance | Not the editable formula-based original |
| `.csv` export | Rows of plain values or fields for data interchange | No normal multi-sheet layout, rich formats, or dependable retained formulas |

> **Saving checkpoint:** A finished workbook must be found and reopened, not just seen on the screen. Its totals must remain formulas after reopening.

## 6. How do you test a change and explain the results?

This is the most important practical test. A beginner can make a spreadsheet that looks correct once by copying answers. A working spreadsheet should respond when an original input changes, and the change should be explainable using the formulas.

### Baseline: check the original example

Before making an edit, record the original actual grocery amount `C6 = 284`. Then check these four results:

| Cell | What it measures | Baseline result |
| --- | --- | --- |
| `D6` | Grocery difference | -24 |
| `C11` | Total actual expenses | 1649 |
| `C14` | Actual remaining after expenses | 351 |
| `D14` | Actual remaining versus planned remaining | -24 |

If you do not get these numbers, do not proceed to the edit test. Review the entry rows and the formulas in Section 4 first. Using the revision test to disguise an earlier input error makes the lesson harder to interpret.

### Controlled edit: one number changes

Now change the **input** `C6` from `284` to `274`, leaving every other value untouched. You have reduced the fictional grocery expense by $10. In a functioning worksheet, the related calculated cells will change accordingly. You should not have to type any new totals.

| Cell | Before changing `C6` | After changing `C6` to `274` | Reason |
| --- | --- | --- | --- |
| `C6` | 284 | 274 | This is the single edited input |
| `D6` | -24 | -14 | `260 - 274` |
| `C11` | 1649 | 1639 | Total actual expenses fall by 10 |
| `D11` | -24 | -14 | Planned minus actual expenses |
| `C14` | 351 | 361 | Income minus actual expenses grows by 10 |
| `D14` | -24 | -14 | Actual remaining minus planned remaining |
| `B11` | 1625 | 1625 | Planned amounts were not changed |
| `B14` | 375 | 375 | Planned remaining is unchanged |

The revised sample should still use the same fictional income `2000`. Notice the relationship: **$10 lower actual expense → $10 higher actual remaining balance**. If the calculated totals do not update, a formula may have been overwritten, a cell might contain text rather than a number, or a desktop app's calculation mode might not be set to update automatically. Inspect the formulas and calculation settings rather than manually fixing the displayed totals.

### Decide what to save

For classroom comparison, you may maintain the **baseline version** with `C6 = 284` and save a separate **revised practice copy** after changing `C6` to `274`. Use a clear second name such as `fictional-monthly-budget-revised.xlsx`. This is optional: an instructor may instead ask for one finished revised workbook. Whichever approach you use, **record clearly which values are expected**. If you need to restore the baseline, re-enter `284` in `C6` and confirm that `C11` returns to `1649` and `C14` to `351`. Do not change formulas to force those results.

### Practical interpretation without personal advice

At baseline, the fictional household planned $1,625 of expenses and recorded $1,649, a $24 difference above the plan. The fictional income is $2,000, so $351 remains after the listed expenses. The remaining balance is a mathematical result of this incomplete example; it does **not** certify that every necessary household cost, tax, saving target, or emergency item has been included. This practice is about spreadsheet mechanics, not assessing anyone's ability to meet their obligations.

A negative difference is not evidence that the software is broken. It can be the correct answer. A positive number is not automatically a profit. Correct interpretation depends on the formula and the row label. For example, `D7 = 110 - 95 = 15` means transportation cost less than planned, while `D6 = 260 - 284 = -24` means grocery costs exceeded plan.

### A second, small reasoning test

Without changing anything, ask: *If actual transportation increased from $95 to $100 while all other data stayed at the original baseline, what should happen?* The actual-expense total would increase by $5 from $1,649 to **$1,654**; actual remaining would fall from $351 to **$346**; transportation difference would become **$10**. This hypothetical test is not required to be entered, and it assumes the original baseline has been restored. It illustrates that a spreadsheet's outputs depend on which input you change.

> **Recalculation checkpoint:** The assignment is complete only when you can name the edited input, show at least one recalculated formula, and explain in a sentence why the resulting number changed.

## 7. Guided practice: complete the budget lab

Use the six activities as one continuous practical assignment. Each includes an accessible paper-based or discussion alternative if you do not have an approved spreadsheet editor. For computer-based completion, do not skip directly to the sample answer: first attempt the requested actions and inspect your work. The solutions are intentionally expandable rather than displayed in the activity instructions.

### Activity 1 — Create and identify the workbook

**Goal:** Start an editable file and correctly distinguish the workbook, worksheet, and active cell.

1. Open a blank workbook in the spreadsheet application available to you.
2. Rename the first working sheet `Practice Budget`.
3. Select `A1` and enter `PRACTICE MONTHLY BUDGET — FICTIONAL`.
4. Enter the practice-only notice in `A2`.
5. Identify column B, row 6, and the cell that joins them.
6. Decide which approved folder or cloud location will hold the file.
7. **Evidence:** The sheet name, title, notice, and selected `B6` location are identifiable. A paper alternative can draw a grid with named columns and numbered rows.

:::answer Show Activity 1 solution
**Expected result:** There is one usable sheet named `Practice Budget`, `A1` has the fictional title, and `A2` carries the practice-data warning. `B6` means **column B, row 6**. This is a *cell address*, not a cost or the name of a worksheet. The workbook still needs to be saved and verified in a location the learner controls.
:::

### Activity 2 — Enter and verify the six categories

**Goal:** Place text and numeric inputs in the correct cells without manually calculating totals.

1. Enter the five headers in `A4:E4`.
2. Enter the six category labels and their numbers exactly as shown in Section 3.
3. Enter `Total Expenses` in `A11` but leave the calculated total cells blank.
4. Enter `Income` in `A13`, then `2000` in both `B13` and `C13`.
5. Enter `Remaining After Expenses` in `A14` and leave the result cells blank.
6. Confirm that `B6 = 260`, `C6 = 284`, and `C10 = 142`.
7. **Evidence:** The teacher or learner can point to all six categories and distinguish inputs from future formulas.

:::answer Show Activity 2 solution
**Expected result:** Rows 5–10 contain Housing (`900`, `900`), Groceries (`260`, `284`), Transportation (`110`, `95`), Utilities (`150`, `143`), Phone & Internet (`85`, `85`), and Personal & Other (`120`, `142`). Rows 11, 13, and 14 are labeled as specified. Numeric entries contain no forced dollar-sign text. The difference column and calculated totals are still awaiting formulas.
:::

### Activity 3 — Build and audit the difference formulas

**Goal:** Use each row's planned and actual numbers to calculate the correct expense difference.

1. Enter `=B5-C5` in `D5`.
2. Enter or correctly fill the corresponding formulas through `D10`.
3. Inspect the formula in `D6`: it should be `=B6-C6`.
4. Inspect the formula in `D10`: it should be `=B10-C10`.
5. Check that the six results are `0`, `-24`, `15`, `7`, `0`, and `-22`.
6. Explain what the negative figure in `D10` signifies.
7. **Evidence:** Six formula cells with the correct references and results, not numbers copied over the formulas.

:::answer Show Activity 3 solution
**Expected result:** `D5:D10` contain `=B5-C5`, `=B6-C6`, `=B7-C7`, `=B8-C8`, `=B9-C9`, and `=B10-C10`. Their results are `0`, `-24`, `15`, `7`, `0`, and `-22`. The `-22` in `D10` is correct because actual Personal & Other spending (`142`) exceeded the plan (`120`) by $22.
:::

### Activity 4 — Calculate and verify totals

**Goal:** Build the grand totals and remaining amounts by referencing source data and formulas.

1. Enter `=SUM(B5:B10)` in `B11`.
2. Enter `=SUM(C5:C10)` in `C11`.
3. Enter `=B11-C11` in `D11`.
4. Enter `=B13-B11` in `B14` and `=C13-C11` in `C14`.
5. Enter `=C14-B14` in `D14`.
6. Inspect each total to confirm it is calculated, not a manually entered answer.
7. **Evidence:** The planned total is 1625, actual total 1649, and planned/actual remaining balances are 375 and 351.

:::answer Show Activity 4 solution
**Expected result:** `B11=1625`, `C11=1649`, `D11=-24`, `B14=375`, `C14=351`, and `D14=-24`. The sum ranges end at row 10 because row 11 is the total. For the paper alternative, show all six computations explicitly and label which formulas would be used in software.
:::

### Activity 5 — Format, save, and reopen

**Goal:** Produce a readable, persistent editable workbook without exposing data or substituting a noneditable export.

1. Bold the headers and total/remaining labels.
2. Apply consistent currency formatting to numeric money cells where available.
3. Widen columns as necessary to display the text and amounts.
4. Save the editable workbook in the chosen approved location with a clear name.
5. Close and reopen the workbook or deliberately reopen it from the app's saved file list.
6. Inspect `B11` and `C14` to confirm that the correct formulas still exist.
7. **Evidence:** A file or cloud document in a known location whose numbers remain calculable; physical printing is not required.

:::answer Show Activity 5 solution
**Expected result:** The title, headers, six categories, expense totals, and remaining balances are legible, including negative figures. The editable file can be reopened in the chosen spreadsheet application, and `B11` still contains `=SUM(B5:B10)`. A PDF screenshot or exported page alone does **not** satisfy the editable-workbook requirement.
:::

### Activity 6 — Change one value and explain the outcome

**Goal:** Demonstrate automatic formula behavior and keep a defensible revision record.

1. Confirm your original baseline: `C6=284`, `C11=1649`, and `C14=351`.
2. Change only `C6` to `274`.
3. Observe `D6`, `C11`, `D11`, `C14`, and `D14`.
4. Record the revised actual total and revised actual remainder.
5. Explain why the remaining balance increased.
6. Save this edited version or restore the baseline, according to the instructor's required deliverable.
7. **Evidence:** A clearly identified edited input and the correct recalculated output values, not a hand-edited total.

:::answer Show Activity 6 solution
**Expected result after changing `C6` to `274`:** `D6=-14`, `C11=1639`, `D11=-14`, `C14=361`, `D14=-14`. Planned expenses and the planned remainder remain `1625` and `375`. Lowering an actual expense by $10 raises the remaining amount by $10 because the same fictional income is reduced by a smaller total of expenses.
:::

### Optional extension — Print-preview and explain a second scenario

If the application supports print preview, inspect `A1:E14` without printing. Verify all headings, numbers, and notes are visible, and identify the selected output destination. Separately, describe what would happen if a fictional $5 increase were made to transportation at the **original baseline** without actually editing the workbook. The expected actual total would be $1,654 and remaining amount $346. This extension is not required and should not introduce real financial data.

:::answer Show optional extension solution
**Expected result:** The print preview preserves all relevant columns and does not unintentionally produce blank pages or disclose private information. At the original baseline, changing `C7` from 95 to 100 would increase `C11` by 5 to 1654, decrease `C14` by 5 to 346, and change `D7` from 15 to 10. If the grocery-edit test remains in place, these hypothetical figures will differ; restore the baseline before testing this extension on-screen.
:::

### Practical assessment rubric

| Criterion | Meets standard | Needs review |
| --- | --- | --- |
| Setup | Authorized editable workbook, correct worksheet name | Wrong location or no usable workbook |
| Data placement | Six categories, labels, and all numeric inputs in correct cells | Missing, shifted, or text-typed numbers |
| Difference formulas | `D5:D10` use the correct row references | Values hard-coded or rows mismatched |
| Total formulas | All six aggregate/remaining results use formulas | Missing, circular, or incorrectly ranged formulas |
| Accuracy | Baseline totals and remainder match the answer key | Any unexplained mismatch |
| Presentation | Clear title, headings, money formatting, and widths | Important information unreadable |
| Persistence | File reopened and formulas checked | Unsaved work or PDF-only deliverable |
| Revision test | Edit of `C6` changes calculated results correctly | Totals manually replaced or not recalculated |
| Privacy | Fictional data only, no unauthorized sharing | Personal or confidential information entered |

An instructor may grade each criterion as demonstrated, partially demonstrated, or not yet demonstrated. In a paper simulation, distinguish conceptual mastery from hands-on operation: drawing a correct formula plan is valuable but does not independently prove the learner saved and reopened a real spreadsheet.

## 8. How do you adapt the lab and fix common problems?

The addresses and arithmetic remain consistent, but an editor's buttons, menus, file type, and synchronization behavior can differ. Do not interpret these interface differences as evidence that a formula is wrong. Use the exact cell-address plan and verified totals as the common standard.

### Microsoft Excel on Windows

Excel provides an addressable grid, formulas beginning with `=`, a formula bar, number-format controls, and an editable `.xlsx` workbook. To enter a formula, click the target cell, type the expression, and press Enter. Select the cell again to inspect the formula. You can typically find currency formats in **Home → Number** and save controls under **File**. Excel may also offer **AutoSum**, which can produce a `SUM` formula automatically, but check that the selected range is exactly `B5:B10` or `C5:C10`. On desktop installations, the calculation mode can affect when results refresh; use the normal automatic mode for this lab.

### Google Sheets in a browser

In Google Sheets, open a new blank spreadsheet under an account you are authorized to use, name the document `Fictional Monthly Budget`, and rename the worksheet tab `Practice Budget`. Enter the exact cells and formulas. Google Sheets can store edits online; inspect the document name, account, sharing settings, and save/sync state. Use **Format → Number** to choose currency or another suitable number format. If a downloaded editable file is required, use the available **File → Download** option and choose a spreadsheet workbook format supported by the instructor. A cloud document title is not itself an assurance that a local `.xlsx` file exists.

### LibreOffice Calc on Windows, Mac, or Linux

Calc also supports cell references and `SUM` formulas. Make a new spreadsheet, rename the sheet, enter the same values and formulas, and use the app's number-format controls. Save the editable original in `.ods` unless the instructor requires another compatible format. Formula entry conventionally begins with `=`; localized function argument separators can vary for advanced functions, but the single-range `SUM` used here avoids a list of separate arguments. Verify numeric results after reopening and particularly after importing or exporting to other formats.

### Apple Numbers or mobile apps

Apple Numbers organizes data through tables on sheets and can use a different visual layout from Excel's continuous grid. You can still create a table with clear expense labels, planned and actual values, and SUM/subtraction calculations. If the same `A1:E14` cell coordinates are not exposed in a matching way, document a clear mapping between your table's cells and the reference plan. In a smartphone or tablet spreadsheet app, menus may appear under a toolbar or overflow menu, and some printing or export choices differ. The objective is **accurate data, working formulas, safe saving, and verification**, not reproducing one brand's interface exactly.

### Troubleshooting reference

| What you see | Likely reason | Safe next step |
| --- | --- | --- |
| `#REF!` or similar reference error | Formula points to an invalid or removed cell | Restore the correct references from Section 4 |
| `#VALUE!` or unexpected nonnumeric calculation | One or more cells contain incompatible text or content | Inspect the referenced input cells; correct the entry type |
| `#####` in a money cell | Column too narrow to display formatted value, commonly in Excel | Widen column and check the number format |
| Total is much too large | Sum range includes a total cell or wrong rows | Check endpoints; use `B5:B10` or `C5:C10` |
| Total fails to change after edit | Output is hard-coded, wrong cell was edited, or calculation is not updating | Inspect actual formula and calculation settings |
| Text shows instead of a formula result | Cell is stored/formatted as text or formulas are being displayed | Inspect cell format and formula-display setting |
| Negative difference seems alarming | Difference formula reports actual spending over plan | Confirm sign rule before assuming an error |
| Another currency symbol appears | Workbook locale or default number format differs | Choose explicit U.S. dollar format for this example |
| Workbook appears missing | Wrong save folder, cloud account, or filename | Use the actual save/open location and search carefully |
| File opens without formulas | Exported PDF/CSV or noneditable view was used | Reopen the original workbook or native cloud sheet |
| Permission or sharing warning | Location or account restricts access | Use an approved personal workspace; do not bypass controls |
| Spreadsheet opens in read-only mode | Permissions, protected location, or file status limit edits | Save an authorized editable copy if permitted |

### Fix one problem at a time

When a result is wrong, start with the smallest [[dependency|dependency]]: the input cells. If `C11` is incorrect, check all of `C5:C10` and the formula in `C11`. If `C14` is incorrect but `C11` is correct, check `C13` and the expression `=C13-C11`. If `D14` differs unexpectedly, compare `C14` and `B14`. This chain of dependencies is easier to audit than randomly changing figures until they look plausible.

If you accidentally overwrite a calculated cell, do not type its correct numeric result. Reenter the intended expression from the formula table. Undo may help with a very recent edit, but it is not a guaranteed recovery method after closing, synchronizing, or making other changes. Save a separate copy before experimenting if losing your baseline would disrupt the assignment.

### Protect privacy and access

A spreadsheet can contain private financial information, and online files may be easy to share accidentally. This lab forbids real personal data because it teaches workflow rather than financial analysis. Do not publish sharing links, invite an unknown collaborator, turn on broad access, or upload a workbook containing private information to an unfamiliar app. On shared computers, follow classroom sign-out rules, and check whether the practice file resides in a managed or synchronized account. **A folder name, file name, or password field alone does not establish confidentiality**.

### Accessibility and alternative completion

Learners can use keyboard navigation, enlarged text or display scaling, a screen reader with a supported spreadsheet application, spoken instructions, or instructor assistance to reach the same learning objective. Avoid grading by mouse speed. Provide the cell-reference table in an accessible text format if a large grid is difficult to inspect. If someone cannot operate the target software, they can identify the input cells, formulas, and expected results in an equivalent grid on paper while making clear that the practical save/reopen and live recalculation steps remain to be demonstrated on an accessible device.

### Principles worth keeping

- **One controlled workbook:** Do not scatter unnamed copies across Downloads and Desktop.
- **Inputs are separate from calculations:** Edit a value; do not overwrite a formula to force a result.
- **References are testable:** Review the formula and check its expected output.
- **Formatting is not arithmetic:** Currency symbols change display, not the underlying amount.
- **Save and verify:** Reopening is stronger evidence than assuming the file was stored.
- **Check permissions:** Use only authorized locations and fictional information.
- **Explain the change:** A correct revision test includes both numbers and reasoning.

## 9. Essential vocabulary

The following terms are used to describe the grid, calculations, file handling, and quality checks. Some are marked with interactive definitions elsewhere in the lesson. The full list remains readable without the tooltip feature.

- **Spreadsheet:** Application or file using a grid of cells to organize data and perform calculations.
- **Workbook:** Spreadsheet document containing one or more worksheets or tables.
- **Worksheet:** Named grid or working sheet within a spreadsheet workbook.
- **Sheet tab:** Interface control identifying and selecting a worksheet.
- **Cell:** Single position in a worksheet where data or a formula can be entered.
- **Cell reference:** Letter-and-number address identifying a worksheet cell, such as B5.
- **Row:** Horizontal sequence of cells identified by a number.
- **Column:** Vertical sequence of cells identified by a letter in most spreadsheet grids.
- **Active cell:** Currently selected cell that will receive the next data entry.
- **Name Box:** Spreadsheet interface field that displays or accepts a selected cell reference.
- **Formula bar:** Area that shows or edits the contents or expression of a selected cell.
- **Label:** Text that identifies a row, column, category, or value.
- **Value:** Entered or calculated information in a cell; numeric values can be used in arithmetic.
- **Numeric data:** Quantities recognized as numbers rather than as text.
- **Text data:** Words or characters treated primarily as text rather than numbers.
- **Formula:** Expression that calculates a result, ordinarily starting with an equal sign.
- **Function:** Named operation supported by a spreadsheet to perform a calculation.
- **SUM function:** Spreadsheet function that adds numeric values in selected cells or ranges.
- **Range:** One or more cells identified together, such as B5:B10.
- **Relative reference:** Cell reference that normally adjusts its position when a formula is copied.
- **Absolute reference:** Reference typically marked with dollar signs to keep parts fixed during copying.
- **Fill handle:** Small control that can copy values or formulas to neighboring cells.
- **Copy down:** Operation that duplicates content or adjusted formulas into lower rows.
- **Input cell:** Cell containing original information typed by the learner.
- **Output cell:** Cell containing a computed result derived from other cells.
- **Calculation:** Arithmetic or logical operation that produces a result.
- **Recalculation:** Updating calculated results when their source data or formulas change.
- **Automatic calculation:** Setting or behavior that updates formula results as values change.
- **Manual calculation:** Setting that may require a requested recalculation to refresh results.
- **Difference:** Result of subtracting one quantity from another.
- **Expense:** Amount representing a cost or spending in the fictional example.
- **Income:** Amount representing money coming in for the fictional calculation.
- **Budget:** Plan for estimated resources and expenses over a stated period.
- **Planned amount:** Amount entered as the expected or budgeted cost.
- **Actual amount:** Amount used as the recorded example cost.
- **Variance:** Difference between compared amounts under a defined sign convention.
- **Remaining balance:** Amount left after subtracting specified expenses from income.
- **Negative number:** Value smaller than zero, often displayed with a minus sign.
- **Positive number:** Value greater than zero.
- **Zero:** Number indicating no difference or amount in a calculation.
- **Currency formatting:** Display setting that presents numeric amounts as money with chosen symbols and decimals.
- **Accounting format:** Number display style used for money, sometimes with aligned symbols and parentheses.
- **Number format:** Rule affecting how numeric values appear without changing the stored quantity.
- **Column width:** Amount of horizontal space allotted to a worksheet column.
- **Header row:** Row of labels naming the meaning of columns.
- **Bold formatting:** Text emphasis that helps identify headings or totals.
- **Print preview:** View of how sheet contents would be arranged for printing.
- **Print area:** Selected portion of a worksheet designated for print output.
- **Workbook file:** Saved editable spreadsheet document in a format such as XLSX or ODS.
- **XLSX:** Widely used editable Excel workbook file format.
- **ODS:** OpenDocument spreadsheet format used by LibreOffice Calc and other software.
- **CSV:** Comma-separated values plain-text data interchange format.
- **PDF:** Page-oriented document format commonly used for viewing and printing.
- **Cloud file:** Document stored in a connected online service or account.
- **Destination folder:** Location chosen to hold the editable workbook or export.
- **Save:** Store the current version of an editable document.
- **Save As:** Save with a chosen name, location, or compatible file format.
- **AutoSave:** Feature that stores document changes automatically under application-specific conditions.
- **Sync status:** Indication of whether online or local copies have synchronized.
- **Permission:** Rule determining whether an account may open, edit, or share an item.
- **Share link:** URL enabling some form of access to a cloud document under configured rules.
- **Read-only:** State where an item can be viewed but not normally modified.
- **Formula error:** Message indicating that a spreadsheet cannot evaluate an expression as written.
- **REF error:** Error often displayed as #REF! when a formula references a missing or invalid location.
- **VALUE error:** Error often displayed as #VALUE! when incompatible types occur in an expression.
- **Circular reference:** Formula that depends on its own result directly or through other cells.
- **Hard-coded total:** Manually entered result replacing a formula-driven calculation.
- **Verification:** Checking entered work against expected conditions and results.
- **Baseline:** Original set of example inputs and calculated results before a controlled change.
- **Revision test:** Deliberate input edit used to check whether calculated outputs update correctly.
- **Dependency:** Relationship in which a calculated cell relies on values of other cells.
- **Audit trail:** Record or explanation of changes and checks sufficient to reconstruct what happened.
- **Rubric:** Criteria used to assess whether an activity meets the expected standard.
- **Accessible alternative:** Another supported way to complete or demonstrate learning when a method is inaccessible.
- **Practice data:** Fictional information used for learning without exposing private facts.
- **Sheet protection:** Spreadsheet setting that can restrict changes to selected worksheet elements.
- **Export:** Create a copy in another supported format while preserving the original where appropriate.
- **File extension:** Filename suffix such as .xlsx often signaling the file format.
- **File path:** Ordered location identifying where a file is stored.
- **Locale:** Language and region settings that can affect formatting and separators.
- **Sign convention:** Rule defining what positive and negative values represent.

## 10. Knowledge check

Choose one answer for each question and select **Check answers** in the MGU lesson dashboard. These are self-study questions; the answer key is available below the quiz. Questions use the original baseline except when an edit is explicitly described.

:::quiz
? 1. Which feature makes a budget spreadsheet different from a plain list of numbers?
- [x] Formulas can update calculated results when inputs change.
- [ ] Every spreadsheet automatically checks a bank balance.
- [ ] Every spreadsheet must be printed to calculate.
! A working formula can recompute totals from changed source values.

? 2. What does `B6` identify in the practice worksheet?
- [ ] Row B, column 6.
- [x] Column B, row 6.
- [ ] The sixth worksheet.
! A cell reference combines a column letter and a row number.

? 3. Which entry belongs in `C6` at the original baseline?
- [ ] `260`.
- [ ] `274`.
- [x] `284`.
! The original actual grocery amount is 284; 274 is used only in the revision test.

? 4. Where is the planned total-expenses formula?
- [x] `B11`.
- [ ] `B13`.
- [ ] `D6`.
! B11 adds the planned cost inputs in B5:B10.

? 5. Which formula correctly totals all six actual expense rows?
- [ ] `=SUM(C5:C11)`.
- [x] `=SUM(C5:C10)`.
- [ ] `=SUM(B5:B10)`.
! Actual expenses are in C5:C10, and row 11 is the total rather than an expense input.

? 6. What is the correct baseline planned-expense total?
- [ ] `1649`.
- [ ] `2000`.
- [x] `1625`.
! The six planned amounts add to 1625.

? 7. What is the correct baseline actual-expense total?
- [x] `1649`.
- [ ] `1625`.
- [ ] `351`.
! The six original actual amounts add to 1649.

? 8. What should you enter in `D6`?
- [ ] `=C6-B6`.
- [x] `=B6-C6`.
- [ ] `-24` as a fixed value.
! Use a formula that subtracts actual groceries from planned groceries.

? 9. What does a baseline difference of `-24` in `D6` mean?
- [ ] Grocery spending is $24 below the plan.
- [ ] The program has suffered a calculation error.
- [x] The actual grocery example exceeds the plan by $24.
! 260 minus 284 equals negative 24 in this sign convention.

? 10. Which value should appear in `B14` at the original baseline?
- [x] `375`.
- [ ] `351`.
- [ ] `-24`.
! Planned income of 2000 minus planned expenses of 1625 leaves 375.

? 11. Which value should appear in `C14` at the original baseline?
- [ ] `375`.
- [x] `351`.
- [ ] `1649`.
! Actual income of 2000 minus actual expenses of 1649 leaves 351.

? 12. Which formula calculates actual remaining balance?
- [ ] `=C11-C13`.
- [ ] `=SUM(C5:C11)`.
- [x] `=C13-C11`.
! Remaining is income less the calculated expense total.

? 13. What is the role of row 11?
- [x] It holds the expense totals.
- [ ] It is the seventh expense category.
- [ ] It holds monthly income.
! Row 11 summarizes expense rows 5 through 10.

? 14. What is the intended use of `D14`?
- [ ] Planned income minus actual income.
- [x] Actual remaining minus planned remaining.
- [ ] The number of expense categories.
! D14 uses =C14-B14 to compare the remaining balances.

? 15. What happens to `C11` when `C6` changes from 284 to 274 and formulas work?
- [ ] It remains 1649 by design.
- [ ] It becomes 1625.
- [x] It becomes 1639.
! Reducing one actual expense by 10 reduces the actual total by 10.

? 16. After that grocery edit, what should `C14` display?
- [x] `361`.
- [ ] `351`.
- [ ] `375`.
! 2000 minus 1639 equals 361.

? 17. After that grocery edit, what should `D6` display?
- [ ] `-24`.
- [x] `-14`.
- [ ] `14`.
! 260 minus 274 equals -14.

? 18. After changing only `C6`, what should happen to `B11`?
- [ ] It becomes 1639.
- [ ] It becomes 1615.
- [x] It stays 1625.
! Planned expenses in column B were not edited.

? 19. What is the best way to make `B11` respond to changes?
- [x] Use `=SUM(B5:B10)` rather than typing `1625`.
- [ ] Type a new total every time.
- [ ] Convert the worksheet into a PDF.
! Formula-driven totals are calculated from source cells.

? 20. What does a range such as `B5:B10` mean?
- [ ] Only B5 and B10, ignoring the middle.
- [x] The contiguous cells from B5 through B10.
- [ ] All values in rows 5 through 10 across the workbook.
! The colon identifies the continuous set of cells between its endpoints.

? 21. How should a learner display dollar symbols reliably?
- [ ] Type `USD` into every numeric input cell.
- [ ] Save only a screenshot of the table.
- [x] Apply a currency number format to numeric cells.
! Number formatting changes display without normally turning numbers into text.

? 22. What is a common reason Excel shows `#####` in a money cell?
- [x] The column is too narrow to show the formatted value.
- [ ] The workbook has definitely been hacked.
- [ ] The cell must contain a negative number.
! Widen the column and verify formatting before assuming arithmetic is wrong.

? 23. Which format is best as the sole deliverable for checking working formulas in desktop Excel?
- [ ] `PDF`.
- [x] `XLSX`.
- [ ] `CSV`.
! An editable Excel workbook retains the formulas for inspection.

? 24. Which statement about PDF export is correct?
- [ ] PDF always preserves live spreadsheet formulas for editing.
- [ ] PDF automatically makes private figures anonymous.
- [x] A PDF can show a static printable result but does not replace the editable original.
! Exporting is optional and not a substitute for a working workbook.

? 25. Why should you reopen the saved workbook?
- [x] To verify the file and formulas persist in the intended location.
- [ ] To make the formulas calculate for the first time in every application.
- [ ] To make the sample figures become real financial information.
! Reopening tests both file location and editability.

? 26. What should a learner do when `=SUM(B5:B11)` is used in `B11`?
- [ ] Leave it because totals always include themselves.
- [x] Correct it to `=SUM(B5:B10)`.
- [ ] Replace the formula with the number `1625`.
! Including the total cell creates a self-reference or other invalid calculation.

? 27. What should you do with actual personal bank information during this exercise?
- [ ] Share it with the class to improve accuracy.
- [ ] Paste it into the Notes column for realism.
- [x] Do not enter it; use the provided fictional data.
! The task is about computer skills and never needs private financial information.

? 28. If the cloud spreadsheet shows a sharing warning, what is the safest response?
- [x] Check account and sharing permissions; use an approved private workspace.
- [ ] Enable anyone-with-the-link access immediately.
- [ ] Publish the file so the warning disappears.
! Students should not bypass permission rules or expose practice documents unnecessarily.

? 29. What is the best first check if `C14` is wrong but `C11` is correct?
- [ ] Change `B5` at random.
- [x] Inspect `C13` and the formula `=C13-C11`.
- [ ] Delete every worksheet except the first.
! The remaining balance depends directly on income C13 and total expenses C11.

? 30. What qualifies as a valid revision test?
- [ ] Type the correct new answer directly into a calculated total.
- [ ] Change the workbook title without checking a formula.
- [x] Change an input and verify that the dependent formula results update.
! The point is to demonstrate live dependencies, not simply a different displayed number.

:::

:::answer Show the knowledge-check answer key
1. **A — Formulas can update calculated results when inputs change.** A working formula can recompute totals from changed source values.
2. **B — Column B, row 6.** A cell reference combines a column letter and a row number.
3. **C — `284`.** The original actual grocery amount is 284; 274 is used only in the revision test.
4. **A — `B11`.** B11 adds the planned cost inputs in B5:B10.
5. **B — `=SUM(C5:C10)`.** Actual expenses are in C5:C10, and row 11 is the total rather than an expense input.
6. **C — `1625`.** The six planned amounts add to 1625.
7. **A — `1649`.** The six original actual amounts add to 1649.
8. **B — `=B6-C6`.** Use a formula that subtracts actual groceries from planned groceries.
9. **C — The actual grocery example exceeds the plan by $24.** 260 minus 284 equals negative 24 in this sign convention.
10. **A — `375`.** Planned income of 2000 minus planned expenses of 1625 leaves 375.
11. **B — `351`.** Actual income of 2000 minus actual expenses of 1649 leaves 351.
12. **C — `=C13-C11`.** Remaining is income less the calculated expense total.
13. **A — It holds the expense totals.** Row 11 summarizes expense rows 5 through 10.
14. **B — Actual remaining minus planned remaining.** D14 uses =C14-B14 to compare the remaining balances.
15. **C — It becomes 1639.** Reducing one actual expense by 10 reduces the actual total by 10.
16. **A — `361`.** 2000 minus 1639 equals 361.
17. **B — `-14`.** 260 minus 274 equals -14.
18. **C — It stays 1625.** Planned expenses in column B were not edited.
19. **A — Use `=SUM(B5:B10)` rather than typing `1625`.** Formula-driven totals are calculated from source cells.
20. **B — The contiguous cells from B5 through B10.** The colon identifies the continuous set of cells between its endpoints.
21. **C — Apply a currency number format to numeric cells.** Number formatting changes display without normally turning numbers into text.
22. **A — The column is too narrow to show the formatted value.** Widen the column and verify formatting before assuming arithmetic is wrong.
23. **B — `XLSX`.** An editable Excel workbook retains the formulas for inspection.
24. **C — A PDF can show a static printable result but does not replace the editable original.** Exporting is optional and not a substitute for a working workbook.
25. **A — To verify the file and formulas persist in the intended location.** Reopening tests both file location and editability.
26. **B — Correct it to `=SUM(B5:B10)`.** Including the total cell creates a self-reference or other invalid calculation.
27. **C — Do not enter it; use the provided fictional data.** The task is about computer skills and never needs private financial information.
28. **A — Check account and sharing permissions; use an approved private workspace.** Students should not bypass permission rules or expose practice documents unnecessarily.
29. **B — Inspect `C13` and the formula `=C13-C11`.** The remaining balance depends directly on income C13 and total expenses C11.
30. **C — Change an input and verify that the dependent formula results update.** The point is to demonstrate live dependencies, not simply a different displayed number.
:::

## 11. Completion review and further learning

### Final audit: check the workbook, not just its appearance

Before marking this lab complete, inspect the actual spreadsheet file or approved cloud document. Confirm that it contains only fictional data, is stored in a known authorized location, uses the required worksheet name, and can be reopened for editing. Verify `B11`, `C11`, `B14`, and `C14` directly against the baseline results. Where the revision test was completed, verify that it was an **input** that changed and that the dependent **formulas** produced the new results.

| Final inspection | Baseline workbook | Revised test workbook |
| --- | --- | --- |
| Grocery actual `C6` | 284 | 274 |
| Total planned expenses `B11` | 1625 | 1625 |
| Total actual expenses `C11` | 1649 | 1639 |
| Planned remaining `B14` | 375 | 375 |
| Actual remaining `C14` | 351 | 361 |
| Total expense difference `D11` | -24 | -14 |
| Remaining-balance difference `D14` | -24 | -14 |

These figures are the answer key for **two different input states**. Do not combine figures from the baseline and the revised test in the same row of an assessment without explaining the difference. A workbook can be correct in either state if it contains the expected source values and working formulas.

### Completion statement

A learner can report successful computer-based completion when they can explain what `B6` means; identify their worksheet name and storage location; show all six categories; demonstrate formula-driven differences and totals; format the monetary values readably; reopen the editable workbook; and make the controlled grocery edit with the expected recalculation. If an accessibility or software limitation required a paper simulation, record what was demonstrated conceptually and what remains to be tested in an actual application.

### Reference materials

- [Microsoft: SUM function](https://support.microsoft.com/en-us/excel/functions/sum-function) — adding numeric ranges with `SUM`.
- [Microsoft: Use Excel as your calculator](https://support.microsoft.com/en-us/excel/get-started/use-excel-as-your-calculator) — subtraction and simple arithmetic expressions.
- [Microsoft: Format numbers in a worksheet](https://support.microsoft.com/en-us/excel/quick-start-format-numbers-in-a-worksheet) — currency displays and number formatting.
- [Google: Add formulas and functions in Sheets](https://support.google.com/docs/answer/46977?co=GENIE.Platform%3DDesktop) — entering and checking formulas in a cloud spreadsheet.
- [Google: Edit and format a spreadsheet](https://support.google.com/docs/answer/46973?co=GENIE.Platform%3DDesktop) — entering data and applying number formats.
- [Google: Print a file](https://support.google.com/docs/answer/143346?hl=en) — optional print or PDF checks.
- [LibreOffice: Calculating with formulas](https://help.libreoffice.org/latest/en-US/text/scalc/guide/formulas.html) — equation and function basics in Calc.

### Continue learning at MGU

- [Previous lab: Write, Save, and Print a Document](/department/computer-science/basic-computer-skills/beginner-practice-labs/write-save-and-print-a-document/) — practice reliable document creation and saving.
- [Beginner Practice Labs course index](/department/computer-science/basic-computer-skills/beginner-practice-labs/) — return to the complete lab sequence.
- [Next lab: Create a Short Presentation](/department/computer-science/basic-computer-skills/beginner-practice-labs/create-a-short-presentation/) — organize information into concise slides.
- [Everyday Productivity course index](/department/computer-science/basic-computer-skills/everyday-productivity/) — related computer productivity skills.
- [File and Folder Skills course index](/department/computer-science/basic-computer-skills/file-and-folder-skills/) — refresh file names, storage locations, and folder navigation.

> **Lesson completion checklist:** I built an editable practice spreadsheet; entered six categories and fictional numbers in the correct cells; created formulas for row differences, totals, and remaining balances; verified the baseline amounts; formatted the table; saved and reopened it; changed one input and saw dependent formulas update; and kept personal financial information out of the file.

:::terms
spreadsheet | Spreadsheet | Application or file using a grid of cells to organize data and perform calculations. |
workbook | Workbook | Spreadsheet document containing one or more worksheets or tables. |
worksheet | Worksheet | Named grid or working sheet within a spreadsheet workbook. |
sheet-tab | Sheet tab | Interface control identifying and selecting a worksheet. |
cell | Cell | Single position in a worksheet where data or a formula can be entered. |
cell-reference | Cell reference | Letter-and-number address identifying a worksheet cell, such as B5. |
row | Row | Horizontal sequence of cells identified by a number. |
column | Column | Vertical sequence of cells identified by a letter in most spreadsheet grids. |
active-cell | Active cell | Currently selected cell that will receive the next data entry. |
name-box | Name Box | Spreadsheet interface field that displays or accepts a selected cell reference. |
formula-bar | Formula bar | Area that shows or edits the contents or expression of a selected cell. |
label | Label | Text that identifies a row, column, category, or value. |
value | Value | Entered or calculated information in a cell; numeric values can be used in arithmetic. |
numeric-data | Numeric data | Quantities recognized as numbers rather than as text. |
text-data | Text data | Words or characters treated primarily as text rather than numbers. |
formula | Formula | Expression that calculates a result, ordinarily starting with an equal sign. |
function | Function | Named operation supported by a spreadsheet to perform a calculation. |
sum-function | SUM function | Spreadsheet function that adds numeric values in selected cells or ranges. |
range | Range | One or more cells identified together, such as B5:B10. |
relative-reference | Relative reference | Cell reference that normally adjusts its position when a formula is copied. |
absolute-reference | Absolute reference | Reference typically marked with dollar signs to keep parts fixed during copying. |
fill-handle | Fill handle | Small control that can copy values or formulas to neighboring cells. |
copy-down | Copy down | Operation that duplicates content or adjusted formulas into lower rows. |
input-cell | Input cell | Cell containing original information typed by the learner. |
output-cell | Output cell | Cell containing a computed result derived from other cells. |
calculation | Calculation | Arithmetic or logical operation that produces a result. |
recalculation | Recalculation | Updating calculated results when their source data or formulas change. |
automatic-calculation | Automatic calculation | Setting or behavior that updates formula results as values change. |
manual-calculation | Manual calculation | Setting that may require a requested recalculation to refresh results. |
difference | Difference | Result of subtracting one quantity from another. |
expense | Expense | Amount representing a cost or spending in the fictional example. |
income | Income | Amount representing money coming in for the fictional calculation. |
budget | Budget | Plan for estimated resources and expenses over a stated period. |
planned-amount | Planned amount | Amount entered as the expected or budgeted cost. |
actual-amount | Actual amount | Amount used as the recorded example cost. |
variance | Variance | Difference between compared amounts under a defined sign convention. |
remaining-balance | Remaining balance | Amount left after subtracting specified expenses from income. |
negative-number | Negative number | Value smaller than zero, often displayed with a minus sign. |
positive-number | Positive number | Value greater than zero. |
zero | Zero | Number indicating no difference or amount in a calculation. |
currency-format | Currency formatting | Display setting that presents numeric amounts as money with chosen symbols and decimals. |
accounting-format | Accounting format | Number display style used for money, sometimes with aligned symbols and parentheses. |
number-format | Number format | Rule affecting how numeric values appear without changing the stored quantity. |
column-width | Column width | Amount of horizontal space allotted to a worksheet column. |
header-row | Header row | Row of labels naming the meaning of columns. |
bold-formatting | Bold formatting | Text emphasis that helps identify headings or totals. |
print-preview | Print preview | View of how sheet contents would be arranged for printing. |
print-area | Print area | Selected portion of a worksheet designated for print output. |
workbook-file | Workbook file | Saved editable spreadsheet document in a format such as XLSX or ODS. |
xlsx | XLSX | Widely used editable Excel workbook file format. |
ods | ODS | OpenDocument spreadsheet format used by LibreOffice Calc and other software. |
csv | CSV | Comma-separated values plain-text data interchange format. |
pdf | PDF | Page-oriented document format commonly used for viewing and printing. |
cloud-file | Cloud file | Document stored in a connected online service or account. |
destination-folder | Destination folder | Location chosen to hold the editable workbook or export. |
save | Save | Store the current version of an editable document. |
save-as | Save As | Save with a chosen name, location, or compatible file format. |
autosave | AutoSave | Feature that stores document changes automatically under application-specific conditions. |
sync-status | Sync status | Indication of whether online or local copies have synchronized. |
permission | Permission | Rule determining whether an account may open, edit, or share an item. |
share-link | Share link | URL enabling some form of access to a cloud document under configured rules. |
read-only | Read-only | State where an item can be viewed but not normally modified. |
formula-error | Formula error | Message indicating that a spreadsheet cannot evaluate an expression as written. |
ref-error | REF error | Error often displayed as #REF! when a formula references a missing or invalid location. |
value-error | VALUE error | Error often displayed as #VALUE! when incompatible types occur in an expression. |
circular-reference | Circular reference | Formula that depends on its own result directly or through other cells. |
hard-coded-total | Hard-coded total | Manually entered result replacing a formula-driven calculation. |
verification | Verification | Checking entered work against expected conditions and results. |
baseline | Baseline | Original set of example inputs and calculated results before a controlled change. |
revision-test | Revision test | Deliberate input edit used to check whether calculated outputs update correctly. |
dependency | Dependency | Relationship in which a calculated cell relies on values of other cells. |
audit-trail | Audit trail | Record or explanation of changes and checks sufficient to reconstruct what happened. |
rubric | Rubric | Criteria used to assess whether an activity meets the expected standard. |
accessible-alternative | Accessible alternative | Another supported way to complete or demonstrate learning when a method is inaccessible. |
practice-data | Practice data | Fictional information used for learning without exposing private facts. |
sheet-protection | Sheet protection | Spreadsheet setting that can restrict changes to selected worksheet elements. |
export | Export | Create a copy in another supported format while preserving the original where appropriate. |
file-extension | File extension | Filename suffix such as .xlsx often signaling the file format. |
file-path | File path | Ordered location identifying where a file is stored. |
locale | Locale | Language and region settings that can affect formatting and separators. |
sign-convention | Sign convention | Rule defining what positive and negative values represent. |
:::

