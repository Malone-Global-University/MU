Basic Computer Skills / Spreadsheet Skills

## Lesson 8: Budgets and Lists

A neighborhood learning center wants to know whether its fictional monthly spending is staying within a plan. At the same time, a volunteer needs to track which classroom supplies have been ordered and which are still needed. These sound like different tasks, but a spreadsheet can help with both. A [[budget|budget]] compares planned resources with actual use. A [[list|list]] organizes related records so people can find, update, sort, or filter them. The most useful worksheet is not the one with the most colors or complicated formulas: it is the one that accurately answers a real question.

This lesson applies the skills from Spreadsheet Skills Lessons 1–7: navigating [[rows|rows]] and [[columns|columns]], entering [[numeric-value|numeric values]] and [[text-value|text values]], using [[cell-reference|cell references]], creating [[formula|formulas]], applying [[function|functions]], and working with [[sort|sorts]] and [[filter|filters]]. You will now combine these basic techniques into two simple, useful projects: a monthly budget and a supply list. The examples work in Microsoft Excel, Google Sheets, and LibreOffice Calc, although menus and features differ by application and version.

All personal, organizational, and financial figures in this lesson are **fictional** and are supplied strictly for practice. You may complete every activity on paper. Do not enter your own account numbers, private financial details, real employee records, or other sensitive information in a classroom file or a publicly shared spreadsheet. For live records, follow the rules of the organization responsible for them.

**Level:** Beginner · **Estimated study time:** 105–145 minutes · **Prerequisites:** Spreadsheet Skills Lessons 1–7 recommended · **Practice equipment:** Paper and pencil, or a blank worksheet in Excel, Google Sheets, or LibreOffice Calc · **Safety:** Use fictional records, verify calculations, protect sensitive information, and save copies before major changes.

> **Essential idea:** **Define the purpose → organize the columns → enter trustworthy data → calculate carefully → inspect the results → update and save safely.** A budget supports decisions; a list supports organized action. Neither is reliable without consistent entries and routine review.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain the difference between a budget, a list, and a table that is only decorative.
2. Identify [[income|income]], [[expense|expenses]], [[savings-allocation|savings allocations]], and money that remains unallocated.
3. Create a simple monthly plan with a time period, headings, one category per row, and separate planned and actual columns.
4. Use `SUM` and subtraction formulas to calculate outflows, remaining money, and category differences.
5. Explain why positive and negative [[variance|variances]] depend on a stated formula and interpretation.
6. Distinguish an [[estimated-cost|estimated cost]] from a confirmed payment, and a blank entry from a recorded zero.
7. Structure a useful list with one record per row, a unique [[record-id|record ID]], consistent columns, and controlled status terms.
8. Calculate line estimates from quantity and unit cost without changing the meaning of the data.
9. Sort and filter an entire list while preserving the connection between its fields.
10. Review a budget or list for inaccurate entries, duplicate records, missing details, and misleading totals.
11. Save, share, and maintain practice files with version awareness and appropriate privacy controls.
12. Complete six guided activities and explain how a spreadsheet helped answer a practical question.

### On this page

- [1. Budgets and lists in everyday work](#1-what-are-budgets-and-lists)
- [2. Planning a simple budget](#2-how-do-you-plan-a-simple-budget)
- [3. Recording planned and actual amounts](#3-how-do-you-record-planned-and-actual-amounts)
- [4. Calculating and interpreting a budget](#4-how-do-you-calculate-and-interpret-a-budget)
- [5. Creating dependable lists](#5-how-do-you-create-and-use-a-dependable-list)
- [6. Maintaining and sharing your files](#6-how-do-you-maintain-and-share-budgets-and-lists)
- [7. Guided practice](#7-guided-practice-build-a-budget-and-a-list)
- [8. Common misconceptions](#8-common-misconceptions)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. MGU Library connections and next steps](#11-mgu-library-connections-and-next-steps)

## 1. What are budgets and lists?

A [[spreadsheet|spreadsheet]] is a grid of cells that can hold labels, numbers, dates, and calculations. You can use its grid in many ways, but the layout should follow the work you need to accomplish. One worksheet might calculate a total; another might simply track whether tasks have been completed.

### A budget answers a resource question

A budget is a plan for how available resources, often money, will be received, used, or set aside during a particular [[time-period|time period]]. The period might be a week, a month, an event, or a project. A simple monthly budget can show a person's planned income and allocations for housing, food, transportation, savings, and other categories. A program budget can show expected costs for supplies and activities.

A budget is **not** a bank statement or a guarantee of future conditions. It contains assumptions and estimates. The [[actual-amount|actual amounts]] recorded later allow you to compare the plan with what happened. When a category exceeds its plan, that information may support a decision; it does not automatically explain why the difference occurred.

### A list answers an organization question

A list is an organized collection of related items. In a spreadsheet, each [[record|record]] is usually one row and each [[field|field]] is one kind of information stored in a column. A list of supplies might record an item ID, item name, quantity, unit cost, and status. A reading list might record the title, author, completion status, and date. A list does not need financial calculations to be useful.

| Everyday question | Suitable worksheet | Important information | Possible action |
| --- | --- | --- | --- |
| How much can we allocate this month? | Monthly budget | Income, planned outflows, remainder | Adjust the plan |
| Did spending exceed the plan? | Plan-versus-actual budget | Planned amounts, actual amounts, differences | Review the affected categories |
| Which items still need ordering? | Supply list | Item ID, name, quantity, status | Filter to Needed |
| What will six supplies probably cost? | Cost-estimate list | Quantity, estimated unit cost, line estimate | Calculate a projected total |
| Which tasks remain unfinished? | Task list | Task ID, description, status, due date | Review the open tasks |
| Which month had the highest total? | Summary table or chart | Month, consistently measured total | Compare periods |

### Keep the purpose visible

A worksheet with dozens of colorful columns can be harder to maintain than a small, clear table. Before entering anything, write the question you want to answer. Then choose the few columns required for that question. If two tasks have different meanings—such as financial allocations and supply fulfillment—two clearly named worksheets are often easier to maintain than a single mixed grid.

The spreadsheet can calculate and organize, but it cannot determine whether a spending decision is appropriate or whether a record was entered truthfully. The learner still needs [[verification|verification]] and context.

### Distinguish a plan from a transaction history

A budget plans or summarizes categories; a [[transaction-log|transaction log]] records individual events such as purchases or deposits. One can support the other, but they are not interchangeable. A monthly food total of $482 may be supported by several recorded purchases. A planned food allocation of $440, by contrast, is a target rather than proof that $440 was spent.

> **Working rule:** Never present a planned amount, projected estimate, or calculated result as if it were a verified transaction. Put clear headings on each type of value.

## 2. How do you plan a simple budget?

Begin with a specific [[budget-period|budget period]] and a realistic definition of the resources available for that period. For this lesson, imagine a fictional household with monthly income of **$3,200**. This is an illustrative fixed amount—not advice about how much anyone should earn, spend, or save.

### Choose categories that answer the question

A [[category|category]] groups related uses of money. The practice budget uses ten named allocations. Its **outflows** include ordinary expenses and a transfer to savings. Keeping the savings transfer visible helps describe the plan, but it matters to distinguish that transfer from an expense when preparing financial statements or other accounting reports.

| Category | Planned monthly amount | What the category describes |
| --- | ---: | --- |
| Housing | $1,100 | Fictional housing payment |
| Utilities | $220 | Electricity, water, and related services |
| Food | $440 | Planned food purchases |
| Transportation | $210 | Transit and other travel costs |
| Communications | $90 | Phone and internet services |
| Household supplies | $120 | Household consumables |
| Health | $100 | Planned healthcare-related costs |
| Savings transfer | $400 | Money set aside; **not an expense** |
| Discretionary | $260 | Optional personal spending |
| Miscellaneous | $100 | Small or unassigned costs |
| **Total planned outflows and savings** | **$3,040** | **Sum of all ten allocations** |
| **Monthly income** | **$3,200** | **Money available in this fictional plan** |
| **Remaining unallocated** | **$160** | **$3,200 − $3,040** |

### Check the arithmetic before opening software

To find the planned total, add all ten allocations:

`1100 + 220 + 440 + 210 + 90 + 120 + 100 + 400 + 260 + 100 = 3040`

Then subtract this total from income:

`3200 - 3040 = 160`

The $160 is [[unallocated-amount|unallocated money]] in this example. It is not automatically additional savings, profit, a bank balance, or guaranteed cash available for spending. It is the remainder within the specified planning model. The user must check whether the income and categories are complete and whether timing, debts, taxes, or irregular obligations are relevant. This exercise is about spreadsheet literacy, not a complete financial plan.

### Define your accounting convention

Two people might create different budget sheets for the same household because one treats savings as a planned allocation, while another reports expenses separately from savings. Neither convention should be hidden. In this lesson:

- **Expenses** are the nine cost categories excluding savings transfer.
- **Savings transfer** is a separate allocation, shown with outflows because it reduces money remaining for other uses.
- **Total allocated** means expenses plus that savings transfer.
- **Remaining** means income minus the full allocated amount.

Under this convention, planned expenses **excluding savings** equal `$2,640`; adding the separate `$400` savings transfer gives total planned allocations of `$3,040`. This distinction keeps an everyday budgeting worksheet clear without pretending it is a formal accounting report.

### Set up an understandable sheet

Create a sheet named `Monthly Budget - Practice`. Put the main table in columns A through D. Column A holds category names, column B planned amounts, column C actual amounts, and column D the difference. A short note above or beside the table can identify the month and the fact that the data is fictional. Avoid merged cells within the main dataset; they can complicate selecting, sorting, and copying.

| Cell | Enter | Meaning |
| --- | --- | --- |
| A1 | Category | Name of each allocation |
| B1 | Planned | Intended allocation |
| C1 | Actual | Recorded amount for the period |
| D1 | Planned − Actual | Difference using the stated formula |
| A2 | Housing | First category |
| B2 | 1100 | Numeric planned amount, not a text dollar sign |
| A11 | Miscellaneous | Tenth category |
| A12 | Total allocations | Summary row |
| A13 | Income | Amount available in the period |
| A14 | Remaining | Income less the allocations |

**Important:** If you add, delete, or rearrange rows, references in the examples may need to change. The row numbers above are a teaching layout, not universal spreadsheet addresses.

### Make labels usable without decoration

Write the category once per row. Use distinctive headings and consistent spelling. Apply [[currency-format|currency formatting]] to numeric monetary cells so values such as `1100` display as `$1,100.00` or another appropriate currency convention. The underlying number should remain numeric. Do not type explanatory words, such as `about $1100`, into cells you expect to add.

Avoid including unrelated notes or second tables inside the range used by totals. If necessary, move commentary onto a notes area or another sheet and keep the calculated table contiguous.

## 3. How do you record planned and actual amounts?

The [[planned-amount|planned column]] describes what was intended. The actual column records what occurred, according to the period and method chosen. A beginner's budget becomes much more useful when these are separate. Changing a plan after observing actual expenses may be appropriate, but it should be done explicitly; silently rewriting the original plan destroys the ability to compare it with results.

### Worked example: one month of fictional amounts

The same ten categories now have hypothetical actual totals. The final column is **Planned minus Actual** for the allocation rows. Positive values indicate an allocation came in under its plan, and negative values indicate it came in over its plan. A negative difference is not a spreadsheet error: it is a mathematically correct result with a specific meaning.

| Row | Category | Planned (B) | Actual (C) | Difference (B − C) |
| --- | --- | ---: | ---: | ---: |
| 2 | Housing | $1,100 | $1,100 | $0 |
| 3 | Utilities | $220 | $245 | −$25 |
| 4 | Food | $440 | $482 | −$42 |
| 5 | Transportation | $210 | $195 | +$15 |
| 6 | Communications | $90 | $90 | $0 |
| 7 | Household supplies | $120 | $108 | +$12 |
| 8 | Health | $100 | $145 | −$45 |
| 9 | Savings transfer | $400 | $400 | $0 |
| 10 | Discretionary | $260 | $312 | −$52 |
| 11 | Miscellaneous | $100 | $65 | +$35 |
| 12 | **Total allocations** | **$3,040** | **$3,142** | **−$102** |
| 13 | **Income** | **$3,200** | **$3,200** | *Separate income comparison* |
| 14 | **Remaining** | **$160** | **$58** | *Compare actual with planned remainder* |

The total actual expenses **excluding savings** are `$2,742`. Adding the `$400` savings transfer gives total actual allocations of `$3,142`. The amount remaining after these allocations is `$3,200 − $3,142 = $58`.

### Enter amounts as numbers

To enter $245, type `245` into the appropriate numeric cell and then apply a currency format. A spreadsheet typically stores the number independently of its display format. You can therefore calculate with `245` or with a properly formatted currency cell. In contrast, text such as `paid 245` may be ignored by `SUM` or lead to errors depending on the formula.

Keep the meanings of the columns consistent. A budget might record a housing payment of $1,100, while a separate household checklist shows that the payment has been completed. Do not mix status words with numeric amounts in the same column.

### Blank is not always zero

A [[blank-cell|blank cell]] could mean that the figure has not yet been collected. A numeric [[zero-value|zero]] means an amount of none has been recorded. They are not always equivalent. For example, a blank actual amount for an invoice still under review does not prove the charge was $0. Some formulas treat blanks like zeros, and that can make an incomplete budget appear more favorable than it is.

| Entry in the Actual column | Possible interpretation | What to check |
| --- | --- | --- |
| `0` | Confirmed no amount for that item | Was it genuinely zero for this period? |
| Blank | No value entered yet | Is the record incomplete? |
| `245` | Numeric actual amount of 245 | Is the amount correct and in the right period? |
| `about 245` | Text instead of a normal numeric entry | Can it be verified and entered numerically? |
| `-25` | Negative numeric amount | Is it a refund, correction, or entry mistake? |
| `04/05/2026` | A date-like value | Does it match the intended date locale and meaning? |

### Compare similar periods and units

Do not compare a weekly actual amount with a monthly plan or combine dollars with counts of items in a total. Make sure each column uses the same [[unit|unit]] and [[scope|scope]]. If the plan covers November, the actual amounts should follow the defined November reporting rule. If income includes only wages but the budget includes expected reimbursements, document the difference rather than assuming all values are comparable.

### Record revisions deliberately

If you discover that an actual entry was recorded under the wrong category, correct it and write down the reason when the spreadsheet is used collaboratively or for formal reporting. Where appropriate, save a dated [[version|version]] or use supported change history before adjusting consequential data. Never fabricate source details to make the budget balance.

> **Review question:** Which category is most over its plan? In the table above, **Discretionary** is $52 over; Health is $45 over, Food is $42 over, and Utilities is $25 over. These figures answer “by how many dollars?”—not “which category is most important?”

## 4. How do you calculate and interpret a budget?

You can calculate a full beginner budget with the same simple formulas from the previous Spreadsheet Skills lessons. The formulas below follow the example layout exactly; if your sheet differs, adjust each [[cell-reference|cell reference]].

### Calculate totals and remaining amounts

| Cell | Enter this formula | Expected result | Why it matters |
| --- | --- | --- | --- |
| B12 | `=SUM(B2:B11)` | 3040 | Adds planned allocations |
| C12 | `=SUM(C2:C11)` | 3142 | Adds recorded actual allocations |
| B13 | `3200` | 3200 | Planned income as a number |
| C13 | `3200` | 3200 | Actual income as a number |
| B14 | `=B13-B12` | 160 | Planned remaining money |
| C14 | `=C13-C12` | 58 | Actual remaining money |
| D2 | `=B2-C2` | 0 | Housing difference |
| D3 | `=B3-C3` | -25 | Utilities difference |
| D11 | `=B11-C11` | 35 | Miscellaneous difference |
| D12 | `=B12-C12` | -102 | Difference between total planned and actual allocations |

A formula begins with `=`. The `SUM` [[function|function]] adds the numeric amounts within a [[cell-range|cell range]]. The subtraction formula compares two cells directly. You can enter `=B2-C2` in D2 and fill it down through D11; because these are [[relative-reference|relative references]], the next row typically becomes `=B3-C3`. Always inspect the first, last, and several middle results after copying.

For clarity, cells **D13 and D14 may remain blank**, because the column heading *Planned − Actual* describes allocations, not the meaning of changes in income or remaining money. If you want to compare remaining amounts, calculate `=C14-B14` in a separately labeled review cell; it returns `-102` and means the actual remainder is $102 below the planned remainder. A clear label is more important than filling every cell in a summary row.

### Understand the sign before making a decision

In the allocation rows, the calculation is:

`Planned − Actual = Allocation difference`

| Example | Calculation | Result | Interpretation |
| --- | --- | --- | --- |
| Utilities | `220 - 245` | `-25` | $25 over the plan |
| Transportation | `210 - 195` | `15` | $15 under the plan |
| Housing | `1100 - 1100` | `0` | Exactly on the plan |
| Discretionary | `260 - 312` | `-52` | $52 over the plan |
| Total allocations | `3040 - 3142` | `-102` | Allocations were $102 above the plan |

Not every organization uses this sign convention. Some use `Actual − Planned`, which reverses the signs. Neither is intrinsically wrong. State the formula and then interpret it correctly. Do not automatically call any negative number “bad”; a negative remaining amount, a refund, and a negative expense difference represent different things.

### Why the budget totals reconcile

In the example, planned and actual income are the same ($3,200). Actual total allocations are $102 greater than planned. Therefore actual remaining money is $102 smaller than planned:

`Planned remainder 160 − 102 = Actual remainder 58`

You can verify the same relationship independently with `3200 - 3142 = 58`. This is a [[reconciliation|reconciliation]] check: two calculations based on the same records agree. It does not certify that all entries are true or complete, but it catches some arithmetic and range errors.

### Recognize summary errors

A summary row can be wrong even if every individual cell is a valid number. For example, `=SUM(C2:C10)` leaves out Miscellaneous in C11. Adding C12 to its own underlying rows can double-count the total. A copied formula might refer to the wrong column, or an incorrectly entered amount may change the result without producing an error message.

| Symptom | Likely cause | Practical review |
| --- | --- | --- |
| Total is too low | A row was omitted from `SUM` | Check the first and last referenced cells |
| Total is unexpectedly high | Summary included twice | Verify that the range excludes summary rows |
| Amount looks like text | Text entry or wrong number format | Inspect the cell's stored value |
| Difference has the “wrong” sign | Formula convention reversed | Compare heading with formula |
| Remaining is negative | Allocations exceed income under this model | Confirm entries and scope; do not hide the result |
| Values look rounded | Display formatting limits decimal places | Inspect underlying amounts before rounding |
| A blank actual is treated as zero | Data not yet complete | Mark incomplete records and review before reporting |
| Copied formula changes unexpectedly | Relative references shifted | Read the formula and check several rows |

### Avoid mixing estimated and actual amounts

A [[forecast|forecast]] predicts a future amount; an actual amount is based on an observed event under a specified recording policy. A budget may include a third column for forecast amounts later, but a beginner sheet should label its measures carefully and not disguise estimates as facts. Likewise, a projected cost of ordering supplies is not a payment until supported by real purchasing records.

### When to use a chart

A basic column chart can compare planned and actual spending across categories. A line chart can compare totals across several months when periods are consistent. But a single month with ten category values may be clearest as a table, especially when the audience needs exact numbers. Use a chart only if it improves the reader's understanding; verify the source range and do not include the summary total as though it were an eleventh spending category.

## 5. How do you create and use a dependable list?

Budgets are one practical spreadsheet application. Lists are another, and many lists work well without a budget at all. A well-structured list keeps related data together so that it can be sorted, filtered, checked, and maintained. It should have one header row and one distinct record per following row.

### Example: Classroom supply request list

Imagine a fictional learning center preparing a supply order. The center tracks six different types of supply. Each has a unique ID, a quantity, an estimated price per unit, a projected line cost, and a status. The numbers are **illustrative estimates**, not real purchasing information.

| Record ID | Item | Quantity | Estimated unit cost | Line estimate | Status |
| --- | --- | ---: | ---: | ---: | --- |
| S-101 | Notebooks | 12 | $2.50 | $30.00 | Needed |
| S-102 | Pens | 24 | $0.75 | $18.00 | Ordered |
| S-103 | Folders | 15 | $1.20 | $18.00 | Needed |
| S-104 | Labels | 3 | $4.00 | $12.00 | Received |
| S-105 | Markers | 8 | $1.50 | $12.00 | Needed |
| S-106 | Tape | 5 | $2.00 | $10.00 | Received |
| **Total estimate** | — | — | — | **$100.00** | — |

The numbers represent quantities and price estimates, not verified expenditures. If a status is `Received`, that does not alone prove the item was paid for. Payment, shipment, and delivery are separate events that require appropriate records.

### Give each field one meaning

Enter the list in a separate worksheet named `Supply List - Practice`. Use this exact layout if you want the sample formulas to match:

| Column | Header in row 1 | Example in row 2 | Entry rule |
| --- | --- | --- | --- |
| A | Record ID | `S-101` | Unique identifier kept as text |
| B | Item | `Notebooks` | Specific item name |
| C | Quantity | `12` | Numeric count, not `12 pieces` |
| D | Estimated unit cost | `2.50` | Numeric amount formatted as currency |
| E | Line estimate | `=C2*D2` | Quantity multiplied by unit estimate |
| F | Status | `Needed` | Use agreed wording |

Enter the six items on rows 2–7. In E2, enter `=C2*D2` and fill down through E7, checking each result. In E8, enter `=SUM(E2:E7)` to calculate the **$100** total estimate. A1:F7 is the data-record range; the summary in row 8 should be kept separate from sorting or filtering the six records.

### Use clear identifiers

A [[record-id|record ID]] gives each row a stable label. It is particularly useful if two records have similar names or if records change order after sorting. In the sample, `S-101` identifies the notebook row even if it moves from row 2 to row 5. Spreadsheet row numbers are positions, not necessarily permanent identifiers. Identifiers that include leading zeros should be handled as text when necessary.

### Use a controlled vocabulary for status

A [[status|status]] tells the reader where an item stands in a process. If one person writes `Need`, another writes `needed`, and a third writes `Not ordered`, filters may separate records the team intended to group. Agree on a short set of precise labels such as **Needed**, **Ordered**, and **Received**. Real processes may require more states, but the meaning of each state should be documented.

| Status | Meaning in this practice list | Appropriate next step |
| --- | --- | --- |
| Needed | Item has been identified but not recorded as ordered | Review and decide whether to order |
| Ordered | Order has been placed, but receipt is not recorded | Confirm delivery when appropriate |
| Received | Physical receipt is recorded | Check item and quantity |

A [[data-validation|data-validation]] dropdown may help enforce allowed terms in supported spreadsheet applications. It reduces accidental inconsistency but does not prove the record itself is correct. Some users may prefer to copy the exact words rather than configure dropdowns; both can be acceptable for this introductory exercise.

### Sort and filter the complete records

If you want to see the `Needed` items, select the data table or enable a filter on its header row, then use the Status column to display the appropriate records. The expected items are **Notebooks (S-101), Folders (S-103), and Markers (S-105)**. Their projected line estimates sum to **$60** (`30 + 18 + 12`). The other three records still exist; they are merely not displayed under that filter.

If you sort by estimated unit cost, sort all six records together so the IDs, item names, quantities, prices, and statuses remain aligned. Sorting just the estimated-cost column would corrupt the relationship between each price and its item. For more detail, revisit Lesson 6: Sorting and Filtering.

### Avoid common list-design problems

| Problem | Why it matters | Better approach |
| --- | --- | --- |
| Two items in one row | Cannot sort or update them independently | One record per row |
| Repeated record IDs | Difficult to distinguish records | Assign unique IDs and check duplicates |
| Different meanings in a column | Totals and filters become unreliable | Keep one type of information per field |
| Mixed statuses | Filtering misses intended matches | Agree on a short status vocabulary |
| Merged cells in the record range | May interfere with sorting and selection | Keep a rectangular table |
| Total row within the sort range | Summary may be treated as a record | Keep summary separate |
| Quantity typed with text | Formula may not recognize the number | Enter numbers, format or label units separately |
| Unverified copied contact information | Privacy and accuracy risk | Enter only necessary, authorized data |

### When a spreadsheet list is not enough

Spreadsheets are useful for small, manageable lists and early-stage processes. They are not always appropriate for high-volume concurrent transactions, sophisticated permissions, regulated records, or a process requiring a formal [[audit-trail|audit trail]]. A specialized database or authorized management system may be more appropriate. The beginner skill is to recognize when a simple list answers the question and when stronger controls are needed.

## 6. How do you maintain and share budgets and lists?

A worksheet is a living record only if someone keeps it accurate. Updating values, checking formulas, making a safe copy, and knowing who can view the file are part of the work—not optional polish.

### Use a repeatable review cycle

A monthly budget can be reviewed at the end of a defined reporting period. A supply list may be updated when an order is placed or materials arrive. The exact cadence depends on the task. What matters is having an owner and a clear point at which the information is reviewed.

| Review point | Budget question | List question |
| --- | --- | --- |
| Before starting | Are income, categories, and period defined? | Are columns and allowed statuses defined? |
| After entry | Are amounts numeric and assigned correctly? | Are IDs unique and quantities sensible? |
| After formulas | Do totals and remainders reconcile? | Do line estimates match quantity × unit cost? |
| After sorting/filtering | Are categories still associated with their values? | Are complete records still aligned? |
| Before sharing | Are assumptions and fictional status clear? | Are private or unnecessary fields absent? |
| Next update | Which entries changed and why? | Which statuses or quantities changed and why? |

### Save with a meaningful filename

Use a name that describes the file and makes its scope clear. For example, `practice-monthly-budget-2026-11.xlsx` or `practice-supply-list-2026-11.ods` tells you that the file contains a practice worksheet for a specific period. The exact extension depends on the software and format used. Google Sheets may be managed through a cloud document rather than a local `.xlsx` file. Do not assume every program saves the same way: confirm the file name, location, and whether changes are saved.

A [[backup|backup]] or versioned copy protects against accidental changes and may help recovery. Cloud version history can be useful, but its availability and retention depend on software, account settings, and organization policies. For a meaningful change, make sure the correct current file is saved rather than only a detached copy.

### Sharing and access

A budget may contain private financial information; a list may contain names, contact information, or other sensitive details. Before sharing, identify the intended audience. Use appropriate [[view-permission|view permissions]] when someone needs to read the sheet without editing. Use [[edit-permission|edit permissions]] only for authorized collaborators who need to change it. Check the actual sharing settings instead of assuming that a link is private.

For classroom practice, share only fictional information and avoid entering real bank account numbers, full payment card numbers, identity numbers, addresses, passwords, or healthcare records. A screenshot can expose data outside the cells you meant to show, including adjacent tabs or comments. Inspect what is being shared.

### Keep formulas visible and understandable

Protecting a formula from accidental editing can be helpful, but [[sheet-protection|sheet protection]] is not the same as encryption or a substitute for appropriate access controls. Spreadsheet software has different capabilities for protecting ranges, hiding formulas, or restricting collaboration. Learn the relevant controls before using a sheet for sensitive operational work.

Do not hide an incorrect result with formatting. If the sheet shows a negative remaining value, inspect the records, the time period, and the formula. A budget is useful partly because it can reveal a problem.

### Accessibility and readability

Use descriptive headings, sufficient [[contrast|contrast]], and readable number formats. Avoid meaning that depends exclusively on red and green color. A positive or negative dollar amount and a clear text note communicate more than color alone. If a chart is included, state the subject and units. Avoid tiny fonts, unnecessary merged cells, and abbreviations that only the creator understands.

### Final review: Six questions

1. **Purpose:** Can the reader explain what decision the worksheet supports?
2. **Structure:** Does each field have one meaning and each item one row?
3. **Accuracy:** Are entries supported by the right source and period?
4. **Calculation:** Do totals, differences, and remainders agree with independent checks?
5. **Interpretation:** Are estimates, actual amounts, and statuses labeled honestly?
6. **Control:** Is the correct file saved, backed up where appropriate, and shared only with authorized people?

> **Practical standard:** A trustworthy spreadsheet should be understandable to someone who did not create it. Good structure, clear labels, careful arithmetic, and a short explanation are more valuable than unnecessary complexity.

## 7. Guided practice: Build a budget and a list

All six activities use fictional records and can be done on paper or in a blank spreadsheet. For software practice, create a new file rather than changing a real household or workplace workbook. Do not submit personal financial records to demonstrate a beginner skill. Each activity includes an expandable sample answer so learners can check their reasoning even when they are not using the interactive dashboard.

### Activity 1: Decide whether you need a budget or a list (10–15 minutes)

For each request, write **budget**, **list**, or **both**, and explain what information you would need.

1. A community group needs to estimate spending for a one-day reading event.
2. A volunteer needs to know which supplies have not yet arrived.
3. An office wants to compare planned and actual monthly costs.
4. A reading club wants to track finished and unfinished books.
5. A small project wants to estimate item costs and record order statuses.
6. A household wants to see how much money remains after planned allocations.

Then choose two of the requests and write column headings. For example, a cost worksheet could include `Category`, `Planned`, and `Actual`. A status list could include `ID`, `Item`, and `Status`.

:::answer Show Activity 1 sample responses
1. **Budget:** Event allocations and a total expected cost.
2. **List:** Item IDs, item names, and fulfillment statuses.
3. **Budget:** Category, planned amount, actual amount, and difference.
4. **List:** Book title, author, reading status, and optionally a date.
5. **Both:** A supply list with estimated unit costs and statuses can support a larger project budget, but estimates and payments should be distinguished.
6. **Budget:** Income, planned allocations, and remaining amount.

Possible headings: `ID | Item | Quantity | Status` for a supply list; `Category | Planned | Actual | Difference` for a budget. The central test is whether the columns answer the stated question.
:::

### Activity 2: Build a monthly planned budget (20–25 minutes)

Use the fictional household budget from Section 2. On paper, draw a table with category names and planned amounts. Or create a sheet named `Monthly Budget - Practice` with `Category` in A1, `Planned` in B1, `Actual` in C1, and `Planned - Actual` in D1.

1. Enter the ten categories in A2:A11 and their planned amounts in B2:B11.
2. In A12, enter `Total allocations`. In B12, enter `=SUM(B2:B11)`.
3. In A13, enter `Income`. In B13, enter `3200`.
4. In A14, enter `Remaining`. In B14, enter `=B13-B12`.
5. Apply a currency format to B2:B14, keeping the stored values numeric.
6. Read the formula aloud in ordinary language. What does the value in B14 mean under this lesson's budget convention?
7. On paper, independently add the categories and verify the total.

**Check before proceeding:** The total of the ten allocations should be `$3,040`, not `$2,640`. The latter figure excludes the separately labeled savings transfer and therefore answers a different question.

:::answer Show Activity 2 expected results
- `=SUM(B2:B11)` returns **3040**.
- Planned income in B13 is **3200**.
- `=B13-B12` returns **160**.
- Planned expenses excluding the savings transfer total **2640**; adding the separately designated **400** savings transfer yields **3040** in total planned allocations.
- B14 means **$160 remains unallocated in this fictional planning model**. It does not confirm a bank balance.
:::

### Activity 3: Record actual values and interpret differences (20–25 minutes)

Add the actual values from Section 3 to C2:C11. Enter `=SUM(C2:C11)` in C12, `3200` in C13, and `=C13-C12` in C14. Then enter `=B2-C2` in D2 and fill through D11, checking the first, middle, and last formulas. Enter `=B12-C12` in D12.

Answer these questions using **dollar amounts**, not percentages:

1. What is the actual allocations total?
2. How much remains after allocations?
3. Which four categories exceed the plan?
4. Which three categories are below the plan?
5. What does the negative $102 in D12 mean?
6. Why should D13 and D14 not automatically copy the allocation-difference formula without checking their meaning?
7. Which cell should you inspect first if the total seems too high because a summary row may have been included?

:::answer Show Activity 3 expected results
1. Actual total allocations in C12: **$3,142**.
2. Actual remaining in C14: **$58**.
3. Above plan: **Utilities $25**, **Food $42**, **Health $45**, and **Discretionary $52**.
4. Below plan: **Transportation $15**, **Household supplies $12**, and **Miscellaneous $35**.
5. `=B12-C12` is **−102**, meaning actual allocations exceed planned allocations by **$102**.
6. Income and remaining money have different meanings from expense-like allocation rows. A suitable comparison of remainders is `=C14-B14`, explicitly labeled **Actual remaining minus planned remaining**; the result is **−102**.
7. Inspect the formula in **C12**, which should be `=SUM(C2:C11)` and should not include the summary row itself.
:::

### Activity 4: Test a change without falsifying the recorded month (15–20 minutes)

A fictional planner asks: *What would the remaining amount have been if Food had been $450 instead of $482 and Discretionary had been $280 instead of $312?* This is a **what-if scenario**. It does not change the actual recorded results of the original month.

1. Write the original actual Food and Discretionary amounts.
2. Calculate the reduction associated with each hypothetical change.
3. Add the reductions and determine what the revised total allocations would be.
4. Determine the hypothetical amount remaining from the unchanged $3,200 income.
5. Explain whether the revised result should overwrite the original actual column.
6. If using software, copy the practice sheet or use a clearly marked scenario area; leave the actual original figures intact.

:::answer Show Activity 4 expected results
- Food changes from **$482 to $450**, a hypothetical reduction of **$32**.
- Discretionary changes from **$312 to $280**, another hypothetical reduction of **$32**.
- Total hypothetical reduction: **$64**.
- New hypothetical allocations: **$3,142 − $64 = $3,078**.
- New hypothetical remainder: **$3,200 − $3,078 = $122**. This also equals the original actual remainder of `$58 + $64`.
- **Do not overwrite actual history** merely to make the scenario look better. Label the alternative as a scenario, comparison, or forecast.
:::

### Activity 5: Construct and filter a supply list (20–25 minutes)

On paper or a second practice worksheet, enter the six supply records from Section 5 with columns `Record ID`, `Item`, `Quantity`, `Estimated unit cost`, `Line estimate`, and `Status`.

1. Put the six records in rows 2–7 and keep row 1 as the header.
2. Enter `=C2*D2` in E2 and copy or fill through E7.
3. In E8, enter `=SUM(E2:E7)` without including the summary row in the source range.
4. Filter the Status column to show `Needed`, or circle the matching rows on paper.
5. Record the three matching item IDs and their combined line estimate.
6. Clear the filter and verify that all six items still exist.
7. Sort the full record table by item name (A–Z) if using software. Check that the status and cost remain attached to each record ID. Do not sort a single column in isolation.

:::answer Show Activity 5 expected results
- Expected line estimates for S-101 through S-106: **$30, $18, $18, $12, $12, $10**.
- Total estimate: **$100**.
- `Needed` records: **S-101 Notebooks, S-103 Folders, and S-105 Markers**.
- Combined `Needed` estimate: **$60**.
- Clearing the filter restores visibility of **six** records. Filtering does not delete the other records.
- After sorting, each record ID should still be associated with its original item name, quantity, estimate, and status. A change in row position is not a change in record identity.
:::

### Activity 6: Audit an unsafe or misleading spreadsheet (20–25 minutes)

A fictional volunteer creates a workbook intended for public classroom demonstration. It contains the following problems. For each one, identify the risk and give a corrective action. You do not need to open a real confidential document.

| Finding in the fictional workbook | Your corrective action |
| --- | --- |
| The planned budget is labeled `Actual spending` | __________________________ |
| The formula is `=SUM(C2:C12)` even though C12 already holds a total | __________________________ |
| Item S-103 appears twice in the supply list | __________________________ |
| One status is `Need`, another is `Needed` | __________________________ |
| A blank actual amount is described as a confirmed $0 | __________________________ |
| An estimated supply total is labeled `Paid amount` | __________________________ |
| A single price column was sorted without the rest of the supply table | __________________________ |
| A shared practice file contains real banking and contact information | __________________________ |

After completing the table, write a short explanation that another learner could understand: **Why is the process of checking more important than having a visually attractive spreadsheet?**

:::answer Show Activity 6 sample responses
1. **Relabel the budget as planned** unless actual evidence supports the claim.
2. **Change the total formula to `=SUM(C2:C11)`** so it excludes C12 and avoids including the summary in itself.
3. **Review both S-103 records** to decide whether an actual duplicate exists; do not delete either blindly when records may represent different events.
4. **Standardize status values**, documenting what each approved status means.
5. **Mark the actual as missing or pending** until verified; do not manufacture a zero.
6. **Call the projected amount an estimate**, not a payment, until transactions have been recorded and verified.
7. **Restore the correct item-price relationships** from a trustworthy original or version and sort the full table in the future.
8. **Remove real private information from the practice artifact** and inspect access permissions and any previously exposed copies; use fictional data.

A useful explanation is: “An attractive spreadsheet can still contain wrong totals, mislabeled estimates, damaged records, or sensitive details. Clear structure and independent checks make it trustworthy.”
:::

### Optional capstone: Two-sheet practice workbook

If you have spreadsheet software, make one practice workbook containing a `Monthly Budget - Practice` sheet and a `Supply List - Practice` sheet. Use the exact fictional data in Sections 2, 3, and 5. Apply simple headings and currency formats; add no personal information. Save the file with `practice` and the month in the name. Close and reopen it if safe to do so, and confirm that the formulas and records remain intact.

| Item to confirm | Expected evidence |
| --- | --- |
| Planned allocations total | `$3,040` |
| Actual allocations total | `$3,142` |
| Planned remaining | `$160` |
| Actual remaining | `$58` |
| Total budget difference (planned − actual allocations) | `−$102` |
| Six supply records | IDs S-101 through S-106, one per row |
| Supply cost estimate | `$100` |
| Needed-item estimate | `$60` across three records |
| File handling | Clear practice filename and no sensitive data |

> **Practice completion rule:** Explain each total, each sign, and each selected record in words. A correct formula copied from an example is only useful when the learner understands what it measures.

## 8. Common misconceptions

### “A spreadsheet budget tells me how much money is actually in my bank account.”

Not necessarily. A budget records a particular planning and reporting model; it may omit transactions, timing differences, fees, transfers, and other obligations. A remaining budget allocation is not the same as a verified bank balance. Compare real statements and records through authorized processes when accuracy matters.

### “Planned and actual amounts are interchangeable.”

No. Planned figures describe intentions or estimates. Actual figures should be grounded in documented results under a consistent recording convention. Mixing the two changes the question being answered and can make comparisons misleading.

### “Savings is always an expense.”

No. Transferring money to savings is a use of available cash in an everyday allocation budget, but it is generally not the same as incurring an expense. The example deliberately labels savings separately and includes it in **total allocations**, not in **expenses excluding savings**.

### “Any negative number means the formula is broken.”

No. A negative expense difference under `Planned - Actual` can correctly show that a category exceeded its allocation. A negative remainder could show that planned outflows exceed income. Read the formula and its labels before interpreting the sign.

### “A blank cell means zero.”

No. A blank may represent missing or not-yet-recorded information. A confirmed numeric zero says an amount was none. A total can look mathematically consistent while still omitting missing records.

### “If Excel or Sheets calculates a total, it must be accurate.”

No. Software calculates according to the entered numbers and formulas. An incorrect range, duplicated record, text-formatted number, or wrong assumption can produce an incorrect or misleading result even when no error alert appears.

### “I can sort the prices without selecting the rest of the list.”

Not safely when prices belong to particular records. Sorting only one column can attach the wrong price to an item. Sort the full table, verify the record relationships, and retain identifiers.

### “Filtering permanently removes records I cannot see.”

A normal filter hides nonmatching rows from the current view rather than deleting them. Clear the filter to reveal them. It is still important to check what will be copied, summarized, or printed, because different applications and operations can handle hidden rows differently.

### “A supply list is the same as a purchase record.”

No. An estimated list may describe what is needed or expected to cost money. An order record, receipt, invoice, and payment record describe different events. Separate their meanings or label columns precisely.

### “Changing the original Actual column is the best way to test a new plan.”

No. What-if testing should be conducted in a new scenario column, a clearly labeled area, or a practice copy. If an actual figure was genuinely incorrect, correct it with appropriate evidence, not simply to improve the result.

### “A colorful chart is better than a small table.”

Not always. A table often communicates exact allocation figures and differences more clearly than a chart. Use visuals only when they help answer the reader's actual question and ensure axes, labels, and source ranges are accurate.

### “A private spreadsheet stays private as soon as I save it.”

Privacy depends on where it is saved, who has access, which links are active, whether it was copied, and the controls of the service or device. Use fictional information for public lessons and verify sharing permissions for real documents.

### “A unique ID is unnecessary because every row has a number.”

Row numbers can change when records are sorted, filtered, inserted, or deleted. A stable ID helps distinguish one record from another after the worksheet layout changes.

### “If the total is correct, every item must be correct.”

Different errors can cancel. A category may be understated while another is overstated. Reconciliation of totals is useful but does not replace checking individual records against their actual sources.

### A decision guide for everyday spreadsheets

| Situation | First check | Better response |
| --- | --- | --- |
| Planned outflows exceed income | Period, included items, and figures | Reconsider and accurately label the plan |
| Actual spending exceeds plan | Source records and formula direction | Identify categories and review circumstances |
| List shows too few entries | Active filters and hidden rows | Clear filter and confirm records |
| Supply total seems wrong | Quantities, unit costs, formulas, sum range | Recalculate independently |
| Multiple statuses mean the same thing | Status definitions | Standardize entries and train users |
| Two people edit the same file | Permissions and version history | Agree on responsibilities and review changes |
| You need to send a screenshot | Visible tabs, notes, and private fields | Share a fictional or properly authorized view |
| Number looks correct but formula seems strange | Underlying value and formula bar | Explain and validate before relying on it |

## 9. Essential vocabulary

The dotted-underlined terms in the lesson use MGU's interactive vocabulary convention. Selecting a supported term displays a concise definition; some terms may link to additional reference material. The complete definitions at the end of this file support the dashboard, while this section provides a human-readable study guide. A learner should be able to use these words in a practical explanation, not simply repeat them.

### Workbook structure and everyday records

- **Spreadsheet:** A grid-based electronic document for storing, organizing, and calculating information.
- **Workbook:** A spreadsheet file or document containing one or more worksheets.
- **Worksheet:** One sheet of cells in a workbook.
- **Row:** A horizontal sequence of cells, usually identified by a number.
- **Column:** A vertical sequence of cells, usually identified by a letter.
- **Cell:** The intersection of one row and one column, such as B4.
- **Cell reference:** A name such as C12 identifying a particular cell.
- **Cell range:** A group of cells identified by addresses such as B2:B11.
- **Header row:** A row labeling the meaning of data columns.
- **Record:** One related item or event, usually occupying one table row.
- **Field:** A column containing one kind of information across records.
- **Record ID:** A stable label used to distinguish one record from another.
- **List:** An organized set of related records.
- **Status:** A defined stage or condition recorded for an item.
- **Category:** A named group of related budget allocations or list records.
- **Time period:** The span for which records or calculations are intended.
- **Scope:** The records, categories, or circumstances included in a calculation.
- **Unit:** The measurement type, such as dollars, items, or months.

### Budget planning and comparisons

- **Budget:** A plan for receiving, allocating, and using resources during a defined period.
- **Budget period:** The week, month, event, or project interval covered by the plan.
- **Income:** Money received or expected to be received during the period under a defined rule.
- **Expense:** A cost incurred in the relevant activity or period.
- **Allocation:** An amount assigned for a stated purpose.
- **Savings allocation:** Money designated to be set aside, not the same thing as an expense.
- **Planned amount:** A target or expected value entered before or during planning.
- **Actual amount:** A recorded value based on what happened under a stated accounting rule.
- **Outflow:** Money leaving an account or being allocated away from available cash.
- **Unallocated amount:** The part of a defined resource not assigned to the budget's listed categories.
- **Remainder:** The result after subtracting total allocations from the defined available amount.
- **Variance:** A difference between two measures, whose sign depends on the formula used.
- **Forecast:** An estimate of an amount expected in the future.
- **What-if scenario:** A hypothetical change tested without rewriting the actual record.
- **Reconciliation:** Comparing related calculations or records to see whether they agree.
- **Transaction log:** A record of individual financial events, separate from a category budget.
- **Estimated cost:** A projected amount based on assumed quantities or prices.
- **Unit cost:** The cost of one item or measured unit.
- **Line estimate:** A projected total for one item, often quantity multiplied by estimated unit cost.

### Data types, formulas, and quality

- **Numeric value:** A number that spreadsheet formulas can normally calculate with.
- **Text value:** A sequence of characters used as a label or other text.
- **Blank cell:** A cell without a recorded value; it does not automatically mean zero.
- **Zero value:** A recorded numeric value of none.
- **Currency format:** A display setting that shows a numeric amount with currency signs and decimals.
- **Formula:** A calculation beginning with `=` in typical spreadsheet software.
- **Function:** A named calculation command, such as `SUM`.
- **SUM:** A function that adds numeric values from selected cells or ranges.
- **Relative reference:** A cell reference that ordinarily changes position when a formula is copied.
- **Double counting:** Including the same amount more than once in a total.
- **Verification:** Checking entries or results against reliable evidence or a second calculation.
- **Data integrity:** Preservation of correct, complete, and consistent relationships among records.
- **Data validation:** Application controls that restrict or guide acceptable entries.
- **Duplicate record:** A repeated item that may represent an error or a legitimately distinct event.
- **Missing value:** Information not available or not entered, distinct from confirmed zero.
- **Sort:** Rearranging records by an ordering rule while keeping their fields together.
- **Filter:** Displaying records matching a condition while other records usually remain stored.
- **Summary row:** A row calculating an aggregate rather than describing one ordinary record.
- **Source record:** The evidence or original entry that supports a recorded number or status.

### File handling and communication

- **Version:** A particular state or edition of a file before or after changes.
- **Backup:** An additional retained copy used for recovery if work is lost or damaged.
- **Edit permission:** Authorization to change a file or part of one.
- **View permission:** Authorization to read without changing a file.
- **Sheet protection:** Controls to reduce accidental or unauthorized changes within a worksheet; not necessarily encryption.
- **Audit trail:** A record of changes or events sufficient to help reconstruct what happened.
- **Contrast:** Visible difference between colors or elements that helps text and data remain readable.
- **Accessibility:** Designing content so people with varied abilities and assistive technologies can use it.
- **Confidential information:** Data that requires limited disclosure and appropriate handling.
- **Collaboration:** Two or more authorized users contributing to or reviewing a shared document.
- **Reporting note:** A short statement explaining source, time period, definitions, and limitations.

## 10. Knowledge check

Choose **one answer** for each question. The dashboard quiz can score the responses locally and display explanations when supported. No real financial information, live purchases, or private records are needed. A manual answer key follows the interactive questions.

:::quiz
? What is the main purpose of a monthly budget?
- [x] Plan and compare the use of resources over a defined period
- [ ] Record only the names of supplies
- [ ] Prove the bank balance is correct
! A budget plans resource use and may compare planned with actual figures.

? Which worksheet best tracks whether classroom notebooks have arrived?
- [ ] A budget with no item records
- [x] A supply list with item IDs and statuses
- [ ] A single decorative heading
! A list tracks records and their condition or status.

? What does the planned amount in a budget describe?
- [ ] A verified transaction in every case
- [ ] The current bank balance
- [x] An intended or expected allocation
! The planned column describes an intention, not proof of payment.

? What does an actual amount ideally represent?
- [x] A recorded result supported by the defined period and source
- [ ] Any number that makes the total match
- [ ] An unmarked what-if estimate
! Actual amounts are grounded in records and a consistent reporting convention.

? In this lesson, how is a $400 savings transfer classified?
- [ ] A cost that must always be classified as an expense
- [x] A separate allocation included in outflows, not an expense
- [ ] An item that should be ignored
! Savings transfers affect allocation of money but are distinguished from expenses.

? What is the total of the ten planned budget allocations?
- [ ] $2,640
- [ ] $3,200
- [x] $3,040
! Planned expenses of $2,640 plus the $400 savings transfer equal $3,040.

? With $3,200 income and $3,040 allocated, what is planned remaining money?
- [x] $160
- [ ] $400
- [ ] $3,040
! Subtract total allocations from income: $3,200 − $3,040 = $160.

? What is the actual total allocation in the practice example?
- [ ] $3,040
- [x] $3,142
- [ ] $2,742 without savings
! The $2,742 actual expenses plus the $400 savings transfer total $3,142.

? What actual amount remains after the practice allocations?
- [ ] $160
- [ ] $102
- [x] $58
! $3,200 − $3,142 = $58.

? Which formula correctly totals planned categories in B2:B11?
- [x] =SUM(B2:B11)
- [ ] =SUM(B2:B12)
- [ ] =B2*B11
! The range B2:B11 includes the ten categories, while B12 is the summary row.

? Which formula correctly calculates actual remaining in C14?
- [ ] =C12-C13
- [x] =C13-C12
- [ ] =SUM(C2:C14)
! Income less the actual allocation total gives the actual remainder.

? Under the stated formula Planned minus Actual, what does -25 for Utilities mean?
- [ ] Utilities were $25 below the plan
- [ ] The cell must be corrupted
- [x] The actual allocation exceeded the plan by $25
! 220 − 245 = −25, a $25 over-plan amount under this convention.

? What does +15 for Transportation mean under Planned minus Actual?
- [x] Actual was $15 below the plan
- [ ] The category is $15 over budget
- [ ] Income increased by $15
! 210 − 195 = +15, indicating $15 under the planned transportation allocation.

? Why does the total allocation difference equal -102?
- [ ] Income fell by exactly $102
- [x] Actual allocations of $3,142 exceeded planned allocations of $3,040 by $102
- [ ] The SUM function rounds every amount upward
! $3,040 − $3,142 = −$102.

? Which description of a blank Actual cell is most accurate?
- [ ] It always confirms no spending occurred
- [ ] It must be automatically deleted
- [x] It may mean the amount has not been recorded or verified
! Missing data must not automatically be treated as confirmed zero.

? How should a hypothetical cost reduction be recorded?
- [x] In a labeled scenario or practice copy, separate from actual history
- [ ] By silently editing the original actual transactions
- [ ] Only by deleting the category
! What-if analysis should not falsify original actual records.

? If Food changes from $482 to $450 and Discretionary from $312 to $280, what is the total hypothetical reduction?
- [ ] $32
- [x] $64
- [ ] $122
! Both categories reduce by $32, for a combined reduction of $64.

? With unchanged $3,200 income and hypothetical allocations of $3,078, what remains?
- [ ] $58
- [ ] $197
- [x] $122
! $3,200 − $3,078 = $122.

? What is the role of a record ID such as S-103?
- [x] Identify a particular record even after rows are sorted
- [ ] Calculate the item's price automatically
- [ ] Prove the item was delivered
! An ID provides stable identity while row position may change.

? What does each row of the supply list represent?
- [ ] An unrelated group of several item types
- [x] One supply record with related fields
- [ ] A second header row
! Well-structured lists use one record per row.

? What does the formula =C2*D2 calculate in the supply list?
- [ ] Planned income less allocations
- [ ] The number of records with status Needed
- [x] Quantity multiplied by estimated unit cost
! A line estimate is quantity times estimated unit cost.

? What is the combined estimate for all six supply items?
- [x] $100
- [ ] $60
- [ ] $142
! The line estimates 30, 18, 18, 12, 12, and 10 sum to 100.

? Which three supply IDs are marked Needed?
- [ ] S-102, S-104, and S-106
- [x] S-101, S-103, and S-105
- [ ] S-101, S-102, and S-103
! Notebooks, Folders, and Markers are the three Needed records.

? What is the combined estimate of the Needed items?
- [ ] $40
- [ ] $100
- [x] $60
! $30 + $18 + $12 = $60 for items marked Needed.

? What happens to ordinary hidden rows when a filter is cleared?
- [x] They become visible again because filtering did not delete them
- [ ] They are automatically converted to zero
- [ ] They are permanently deleted by the filter
! Filters generally change visibility, not whether records exist.

? Why must the full supply table be selected when sorting?
- [ ] To guarantee prices become cheaper
- [x] To keep each ID, item, quantity, cost, and status together
- [ ] To change each record ID to its new row number
! Sorting a single column can corrupt record relationships.

? Why might the labels Need and Needed be a problem?
- [ ] Spreadsheets always translate them to the same field
- [ ] Their spelling changes the arithmetic of unit cost
- [x] A filter can treat them as distinct status values
! Consistent controlled status terms make searching and filtering reliable.

? Why should the budget and supply list be kept separate or clearly distinguished?
- [x] They answer different questions and use different kinds of records
- [ ] Different worksheets are required for every number
- [ ] Their data cannot ever be compared for legitimate purposes
! Separation clarifies meanings, calculations, and maintenance.

? Which sharing choice is safest for a publicly demonstrated practice file?
- [ ] Include real payment credentials so the example looks credible
- [x] Use fictional data and verify appropriate access settings
- [ ] Assume every saved link is private without checking
! Public practice should not expose private data, and permissions should be reviewed.

? What is the best final check before relying on the spreadsheet?
- [ ] Only check whether the page has attractive colors
- [ ] Assume all sums are right because no error is visible
- [x] Inspect the source entries, formula ranges, labels, and independent totals
! A correct result requires trustworthy inputs, correctly scoped formulas, and clear interpretation.

:::

:::answer Show the quiz answer key with explanations
1. **A.** Plan and compare the use of resources over a defined period. A budget plans resource use and may compare planned with actual figures.
2. **B.** A supply list with item IDs and statuses. A list tracks records and their condition or status.
3. **C.** An intended or expected allocation. The planned column describes an intention, not proof of payment.
4. **A.** A recorded result supported by the defined period and source. Actual amounts are grounded in records and a consistent reporting convention.
5. **B.** A separate allocation included in outflows, not an expense. Savings transfers affect allocation of money but are distinguished from expenses.
6. **C.** $3,040. Planned expenses of $2,640 plus the $400 savings transfer equal $3,040.
7. **A.** $160. Subtract total allocations from income: $3,200 − $3,040 = $160.
8. **B.** $3,142. The $2,742 actual expenses plus the $400 savings transfer total $3,142.
9. **C.** $58. $3,200 − $3,142 = $58.
10. **A.** =SUM(B2:B11). The range B2:B11 includes the ten categories, while B12 is the summary row.
11. **B.** =C13-C12. Income less the actual allocation total gives the actual remainder.
12. **C.** The actual allocation exceeded the plan by $25. 220 − 245 = −25, a $25 over-plan amount under this convention.
13. **A.** Actual was $15 below the plan. 210 − 195 = +15, indicating $15 under the planned transportation allocation.
14. **B.** Actual allocations of $3,142 exceeded planned allocations of $3,040 by $102. $3,040 − $3,142 = −$102.
15. **C.** It may mean the amount has not been recorded or verified. Missing data must not automatically be treated as confirmed zero.
16. **A.** In a labeled scenario or practice copy, separate from actual history. What-if analysis should not falsify original actual records.
17. **B.** $64. Both categories reduce by $32, for a combined reduction of $64.
18. **C.** $122. $3,200 − $3,078 = $122.
19. **A.** Identify a particular record even after rows are sorted. An ID provides stable identity while row position may change.
20. **B.** One supply record with related fields. Well-structured lists use one record per row.
21. **C.** Quantity multiplied by estimated unit cost. A line estimate is quantity times estimated unit cost.
22. **A.** $100. The line estimates 30, 18, 18, 12, 12, and 10 sum to 100.
23. **B.** S-101, S-103, and S-105. Notebooks, Folders, and Markers are the three Needed records.
24. **C.** $60. $30 + $18 + $12 = $60 for items marked Needed.
25. **A.** They become visible again because filtering did not delete them. Filters generally change visibility, not whether records exist.
26. **B.** To keep each ID, item, quantity, cost, and status together. Sorting a single column can corrupt record relationships.
27. **C.** A filter can treat them as distinct status values. Consistent controlled status terms make searching and filtering reliable.
28. **A.** They answer different questions and use different kinds of records. Separation clarifies meanings, calculations, and maintenance.
29. **B.** Use fictional data and verify appropriate access settings. Public practice should not expose private data, and permissions should be reviewed.
30. **C.** Inspect the source entries, formula ranges, labels, and independent totals. A correct result requires trustworthy inputs, correctly scoped formulas, and clear interpretation.

:::

### Exit task: Explain your workbook in your own words

Complete all four statements without reading the answer key:

1. A monthly budget should show __________, __________, and __________.
2. In this lesson the planned allocation total is __________, the actual allocation total is __________, and the difference is __________.
3. A well-organized supply list uses one __________ per row and one __________ per column.
4. Before sharing a spreadsheet, I should verify __________ and __________.

:::answer Show exit task sample responses
1. A monthly budget can show **income, planned allocations, and actual allocations or remaining money**.
2. **$3,040**, **$3,142**, and **−$102** using planned minus actual allocations.
3. One **record** per row and one kind of **field** per column.
4. **The accuracy of the content** and **the intended access permissions**, while ensuring sensitive information is not exposed.
:::

## 11. MGU Library connections and next steps

This lesson brings together basic spreadsheet skills already introduced in the course. Review an earlier lesson whenever an activity is unfamiliar. The references below include MGU's course navigation and official software documentation; menu positions and features may differ by application and release.

### MGU Spreadsheet Skills course connections

- [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) — all nine lessons in the current course sequence.
- [What Is a Spreadsheet?](/department/computer-science/basic-computer-skills/spreadsheet-skills/what-is-a-spreadsheet/) — general purpose of spreadsheet software.
- [Rows, Columns, and Cells](/department/computer-science/basic-computer-skills/spreadsheet-skills/rows-columns-and-cells/) — how to use cell addresses and ranges.
- [Entering and Formatting Data](/department/computer-science/basic-computer-skills/spreadsheet-skills/entering-and-formatting-data/) — numeric values, currency formats, and labels.
- [Simple Formulas](/department/computer-science/basic-computer-skills/spreadsheet-skills/simple-formulas/) — arithmetic and copying formulas.
- [Common Functions](/department/computer-science/basic-computer-skills/spreadsheet-skills/common-functions/) — `SUM` and other introductory functions.
- [Sorting and Filtering](/department/computer-science/basic-computer-skills/spreadsheet-skills/sorting-and-filtering/) — safe ordering and filtering of entire records.
- [Basic Charts](/department/computer-science/basic-computer-skills/spreadsheet-skills/basic-charts/) — choose a simple chart only when it clarifies the question.

### Official software documentation

- [Microsoft: Create your first budget](https://support.microsoft.com/en-us/excel/create-your-first-budget) — beginner-oriented Excel budget support.
- [Microsoft: Manage your household budget in Excel](https://support.microsoft.com/en-us/excel/manage-your-household-budget-in-excel) — examples of categorizing income and spending.
- [Microsoft: Basic tasks in Excel](https://support.microsoft.com/en-us/excel/basic-tasks-in-excel) — entering data, using tables, and simple formulas.
- [Microsoft: Guidelines for organizing and formatting data on a worksheet](https://support.microsoft.com/en-us/excel/guidelines-for-organizing-and-formatting-data-on-a-worksheet) — clean layout and list structure.
- [Google Sheets: Edit and format a spreadsheet](https://support.google.com/docs/answer/46973?hl=en) — data entry and formatting basics.
- [Google Sheets: Sort and filter your data](https://support.google.com/docs/answer/3540681?hl=en) — sorting and filtering considerations.
- [LibreOffice Calc: Instructions for Using LibreOffice Calc](https://help.libreoffice.org/latest/en-US/text/scalc/guide/main.html) — application-specific guidance for Calc.

### Continue the Spreadsheet Skills course

[← Previous lesson: Basic Charts](/department/computer-science/basic-computer-skills/spreadsheet-skills/basic-charts/) · [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) · [Next lesson: Checking Spreadsheet Errors →](/department/computer-science/basic-computer-skills/spreadsheet-skills/checking-spreadsheet-errors/)

> **Lesson completion checklist:** I can explain the purpose of a budget and a list; calculate planned and actual allocation totals and remaining money; interpret the sign of a difference; build a list with stable IDs and consistent statuses; use quantity × estimated cost; filter without deleting records; and save or share a practice copy responsibly.

:::terms
spreadsheet | Spreadsheet | An electronic grid of cells used to store, organize, calculate, and present information. | 
workbook | Workbook | A document or file containing one or more spreadsheet worksheets. | 
worksheet | Worksheet | An individual sheet containing a grid of rows and columns. | 
rows | Rows | Horizontal groups of cells, commonly identified with numbers. | 
columns | Columns | Vertical groups of cells, commonly identified with letters. | 
cell | Cell | One position in a spreadsheet grid, such as B4. | 
cell-reference | Cell reference | An address such as C12 identifying a spreadsheet cell. | 
cell-range | Cell range | Two or more cells designated by references such as B2:B11. | 
header-row | Header row | A row that names the fields contained in the columns below it. | 
record | Record | A set of fields about one item, transaction, or event, normally stored in one row. | 
field | Field | One defined kind of information stored in the same column across records. | 
record-id | Record ID | A stable identifier used to distinguish one record independently of row position. | 
list | List | An organized collection of related records or items. | 
status | Status | A recorded condition or stage in a defined workflow, such as Needed or Received. | 
category | Category | A named grouping of related items, uses, or observations. | 
time-period | Time period | A specified interval for data collection, calculation, or comparison. | 
scope | Scope | The items, period, boundaries, and assumptions included in a worksheet or calculation. | 
unit | Unit | The measurement represented by a number, such as dollars, items, or months. | 
budget | Budget | A plan for using or allocating resources during a specified period. | 
budget-period | Budget period | The time interval, event, or project covered by a budget. | 
income | Income | Money received or anticipated during a defined period and scope. | 
expense | Expense | A cost associated with the activity or period being measured. | 
allocation | Allocation | A planned or assigned amount for a specific purpose. | 
savings-allocation | Savings allocation | Money intended to be transferred or set aside; separate from spending expense. | 
planned-amount | Planned amount | A target or expected amount specified for an allocation. | 
actual-amount | Actual amount | A value recorded as having occurred under the stated reporting convention. | 
outflow | Outflow | Money paid out or allocated away from the available cash in a budget. | 
unallocated-amount | Unallocated amount | A resource remainder not yet assigned to listed purposes. | 
remainder | Remainder | The amount left after subtracting stated allocations from available resources. | 
variance | Variance | A numerical difference between planned and actual amounts, with signs dependent on the formula. | 
forecast | Forecast | An estimate of a future amount based on assumptions or current information. | 
what-if-scenario | What-if scenario | A hypothetical change used to explore different outcomes without altering original actual records. | 
reconciliation | Reconciliation | Checking related numbers or records against each other to identify discrepancies. | 
transaction-log | Transaction log | A list of individual money-related events, distinct from a summarized budget. | 
estimated-cost | Estimated cost | A projected cost, not necessarily a confirmed price or payment. | 
unit-cost | Unit cost | The estimated or actual price of one item or measured unit, as labeled. | 
line-estimate | Line estimate | A projected item total, commonly quantity multiplied by estimated unit cost. | 
numeric-value | Numeric value | An entered number that a spreadsheet generally treats as suitable for arithmetic. | 
text-value | Text value | Letters, numbers, or symbols stored as text rather than as a numeric amount. | 
blank-cell | Blank cell | A cell without a recorded entry; not necessarily an indication of zero. | 
zero-value | Zero value | A numeric value explicitly representing none. | 
missing-value | Missing value | Information that has not been supplied or verified, distinct from a confirmed zero. | 
currency-format | Currency format | Numeric display formatting showing currency symbols, grouping, and decimal places. | 
formula | Formula | A spreadsheet calculation, usually beginning with an equal sign. | 
function | Function | A named spreadsheet operation such as SUM. | 
sum | SUM | A spreadsheet function for adding numeric values across selected cells or ranges. | 
relative-reference | Relative reference | A reference that normally shifts according to position when a formula is copied. | 
double-counting | Double counting | Including the same amount or observation more than once in a calculation. | 
verification | Verification | Reviewing a result or entry using reliable source evidence or an independent check. | 
data-integrity | Data integrity | Accuracy and consistency of records and their relationships through use and editing. | 
data-validation | Data validation | Controls that guide or restrict what values may be entered into a spreadsheet cell. | 
duplicate-record | Duplicate record | A repeated record entry, which may be erroneous or may require context to interpret. | 
sort | Sort | To arrange records by a defined order while keeping their fields together. | 
filter | Filter | A condition that changes which records are displayed without normally removing the others. | 
summary-row | Summary row | A row reporting an aggregate rather than one ordinary observation. | 
source-record | Source record | Original information or evidence supporting an entered amount, value, or status. | 
version | Version | A distinguishable state of a document before or after changes. | 
backup | Backup | An additional retained copy used to restore lost or damaged work. | 
edit-permission | Edit permission | A granted ability to modify content in a shared or protected file. | 
view-permission | View permission | A granted ability to read a file without editing it. | 
sheet-protection | Sheet protection | Software controls that discourage or restrict certain worksheet edits, not necessarily encryption. | 
audit-trail | Audit trail | A history of changes or actions that supports reviewing how records evolved. | 
contrast | Contrast | A visual difference between elements that improves legibility or differentiation. | 
accessibility | Accessibility | The degree to which content can be used by people with diverse abilities and tools. | 
confidential-information | Confidential information | Data requiring restricted disclosure, such as financial or personal details. | 
collaboration | Collaboration | Coordinated work by multiple authorized contributors or reviewers. | 
reporting-note | Reporting note | A short explanation of a table's period, source, units, conventions, and limitations. | 
:::
