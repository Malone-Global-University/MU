Basic Computer Skills / Spreadsheet Skills

## Lesson 5: Common Functions

A neighborhood resource center keeps a small worksheet showing the number of visitors during five weekday sessions. Staff members need to know how many people attended altogether, the average attendance, the quietest session, the busiest session, and how many sessions actually have recorded numbers. Repeating all five calculations by hand would be possible, but a [[spreadsheet|spreadsheet]] provides built-in instructions for performing them reliably when the correct values and cells are selected.

Those built-in instructions are called [[function|functions]]. A function is a named operation, used inside a [[formula|formula]], that accepts information and returns a result. For this beginner lesson, the five essential functions are **`SUM`**, **`AVERAGE`**, **`MIN`**, **`MAX`**, and **`COUNT`**. Their names are short, but their results mean different things. A total is not an average; a count of numeric entries is not a count of every person or item described by a worksheet.

This lesson follows Spreadsheet Skills Lessons 1–4. You have already encountered worksheets, [[row|rows]], [[column|columns]], [[cell|cells]], [[cell-reference|cell references]], [[range|ranges]], number formatting, and arithmetic expressions such as `=B2*C2`. Now you will replace repetitive arithmetic with reusable functions and learn to check *what* each result actually measures. Microsoft Excel is the principal desktop example, with transferable instructions for Google Sheets and LibreOffice Calc. Activities use entirely **invented, low-stakes information** and can be worked on paper.

**Level:** Beginner · **Estimated study time:** 95–125 minutes · **Prerequisites:** Spreadsheet Skills Lessons 1–4 recommended · **Practice equipment:** Paper and pencil or a blank worksheet in Excel, Google Sheets, or LibreOffice Calc · **Safety:** Work with fictional records in your own practice file; do not modify real enrollment, payroll, financial, attendance, or health data.

> **Essential idea:** Start a function with `=`, give it the intended values or [[cell-range|cell range]] inside parentheses, and inspect the result. The function can perform the calculation; **you must decide whether the data, range, and meaning are correct**.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain how a spreadsheet function differs from a manually written arithmetic expression.
2. Identify the function name, parentheses, and [[argument|argument]] in a basic function formula.
3. Enter a range such as `B2:B6` and explain why its endpoints are included.
4. Use `SUM` to add a set of numeric values.
5. Use `AVERAGE` to find the arithmetic mean of numeric entries.
6. Use `MIN` and `MAX` to find the smallest and largest numeric values in a set.
7. Use `COUNT` to determine how many numeric entries are present, without confusing this with the sum of their values.
8. Recognize when `COUNTA`, rather than `COUNT`, can help identify nonempty cells.
9. Explain how blank cells, zero values, text, and incorrectly entered numbers can change the meaning of function results.
10. Choose a suitable function for a practical question and verify its output independently.
11. Avoid including a summary cell in its own range, and review common function errors.
12. Complete six guided activities and explain the meaning of the resulting figures.

### On this page

- [1. Understanding built-in functions](#1-what-is-a-spreadsheet-function)
- [2. Choosing common functions](#2-what-do-the-five-common-functions-do)
- [3. Understanding ranges and inputs](#3-how-do-ranges-and-arguments-work)
- [4. A worked attendance example](#4-how-do-you-summarize-a-small-attendance-list)
- [5. Blank cells, zero, and text](#5-how-do-blank-cells-zero-and-text-affect-results)
- [6. Checking and troubleshooting](#6-how-do-you-check-and-repair-function-formulas)
- [7. Guided practice](#7-guided-practice-use-and-verify-common-functions)
- [8. Common misconceptions](#8-common-misconceptions)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. MGU Library connections and next steps](#11-mgu-library-connections-and-next-steps)

## 1. What is a spreadsheet function?

A spreadsheet formula is an expression that instructs the application to calculate a result. A [[built-in-function|built-in function]] is an operation the application already knows how to perform. Instead of adding five separate cells with `=B2+B3+B4+B5+B6`, you can enter `=SUM(B2:B6)`. Both can calculate the same total if the referenced cells contain suitable numeric values, but the function communicates the purpose clearly and scales better when the list becomes longer.

The word `SUM` is not a label typed for the reader to look at; it is the name of an operation. When you write `=SUM(B2:B6)`, the application interprets the text following `=` as a calculation, reads the values from the specified range, and displays a result. The formula itself can usually be examined through the [[formula-bar|formula bar]] or when editing the cell.

### Read a function in four parts

| Part | Example | Purpose | Check before confirming |
| --- | --- | --- | --- |
| Formula starter | `=` | Tells the spreadsheet to interpret a formula | Was the equal sign entered? |
| Function name | `SUM` | Specifies the intended operation | Is adding what the task requires? |
| Parentheses | `(` and `)` | Enclose the function's inputs | Are both present and properly closed? |
| Argument or range | `B2:B6` | Identifies the inputs to use | Does it select the right rows and column? |

A function's inputs are often called [[argument|arguments]]. An argument may be an individual number, a cell address, a cell range, or a more complex expression. For example, `=SUM(2,3,4)` adds three written constants and gives `9` in a spreadsheet configured to use commas as argument separators. `=SUM(B2:B6)` uses the values inside the specified cells instead. Some regional installations use a semicolon `;` for separating distinct arguments. A simple range such as `B2:B6` avoids that difference.

> **Practical rule:** Use *cell references* when the information might change. A typed constant such as `=SUM(5,8,2)` does not automatically follow changes in an attendance list stored elsewhere in the sheet.

### A function is not an entire spreadsheet

One function answers one narrowly specified question about its inputs. The author still creates suitable headings, enters source values, checks number types, and determines whether the result is suitable for a decision. A function cannot tell whether the row marked Wednesday was accidentally omitted, whether a quantity was misread, or whether the displayed amount refers to dollars rather than individual items.

### Compare basic formulas and functions

| Task | Direct arithmetic | Common function | Typical advantage of function |
| --- | --- | --- | --- |
| Add five numbers | `=B2+B3+B4+B5+B6` | `=SUM(B2:B6)` | Easier to read and extend |
| Average three numbers | `=(B2+B3+B4)/3` | `=AVERAGE(B2:B4)` | Counts eligible numeric entries rather than relying on a typed divisor |
| Find smallest number | Several comparisons by hand | `=MIN(B2:B6)` | Scans the selected numeric values |
| Find largest number | Several comparisons by hand | `=MAX(B2:B6)` | Scans the selected numeric values |
| Count numeric entries | Count each eligible cell manually | `=COUNT(B2:B6)` | Counts numeric values, not their total |

Be aware that functions have rules. `AVERAGE` does not always behave the same as adding the full range and dividing by the number of visible rows: in referenced cells, it ordinarily skips blanks and text but includes numeric zeros. This difference is deliberate and deserves careful attention later in this lesson.

## 2. What do the five common functions do?

The same group of values can support several distinct questions. Imagine five recorded attendance figures: **12, 18, 15, 10, and 20**. One question asks for the combined attendance; another asks for a typical session; another asks which session is smallest or largest; another asks whether five numeric measurements were recorded. Each question calls for a different function.

### Five functions to recognize immediately

| Function | Plain-language question | Example | Result for 12, 18, 15, 10, 20 |
| --- | --- | --- | --- |
| `SUM` | What is the total? | `=SUM(B2:B6)` | `75` |
| `AVERAGE` | What is the arithmetic mean? | `=AVERAGE(B2:B6)` | `15` |
| `MIN` | What is the smallest number? | `=MIN(B2:B6)` | `10` |
| `MAX` | What is the largest number? | `=MAX(B2:B6)` | `20` |
| `COUNT` | How many numeric entries are present? | `=COUNT(B2:B6)` | `5` |

### SUM: combine numbers

[[sum-function|`SUM`]] adds the selected numeric amounts. If `B2` through `B6` contain 12, 18, 15, 10, and 20, then `=SUM(B2:B6)` returns `75`. That is the **combined number of attendances across sessions**, not necessarily the number of distinct people. Someone could have attended on more than one day. The mathematical total is reliable for the selected values, but interpreting it as 75 unique visitors would require separate evidence.

To verify the arithmetic manually: 12 + 18 = 30; 30 + 15 = 45; 45 + 10 = 55; 55 + 20 = 75.

### AVERAGE: find the arithmetic mean

[[average-function|`AVERAGE`]] adds the eligible numeric values and divides by their number. Here, 75 divided by 5 is 15. The phrase [[arithmetic-mean|arithmetic mean]] refers to this specific calculation. It is not automatically the most common value, the middle value after sorting, or the result that most accurately represents a highly uneven dataset.

For this dataset, the average attendance per **recorded numeric session** is 15. A carefully written summary should say *15 attendees per session on average*, not simply *the center was 15*, which leaves the measure ambiguous.

### MIN and MAX: find the limits

[[min-function|`MIN`]] returns the smallest eligible numeric value: 10. [[max-function|`MAX`]] returns the largest: 20. They can help identify low and high inventory levels, temperatures, daily amounts, or scores. They do not say **which day** holds that value on their own; that requires examining the records or using more advanced methods. If two days share the maximum, `MAX` reports the value, not the number of ties.

The difference between the largest and smallest values is called the [[spread|spread]] or, in this simple context, the numerical range of the dataset: 20 − 10 = 10. Do not confuse that *statistical range* with a [[cell-range|cell range]] such as `B2:B6`. The word *range* has different meanings in these contexts.

### COUNT: count numeric entries

[[count-function|`COUNT`]] returns 5 because five cells contain numeric attendance values. It does not add attendees and it does not count the five weekday labels in column A. Consider a worksheet containing a person's name in A2 and an attendance figure in B2. `COUNT(A2:A6)` is not a reliable way to count the five names because the text entries will generally not be included. For text or mixed content, [[counta-function|`COUNTA`]] is a related function you will see briefly later in this lesson.

> **Stop and explain:** In a five-day list, `SUM` could give 75 while `COUNT` gives 5. **Seventy-five is the combined attendance; five is the number of numeric attendance records.** These are different measurements.

### Choose the operation before writing the formula

| Request | Function to consider | Key caution |
| --- | --- | --- |
| Total sales recorded in a column | `SUM` | Confirm all amounts use the same currency and period |
| Mean temperature across readings | `AVERAGE` | Make sure missing readings are not silently interpreted as zero |
| Lowest price in a list | `MIN` | Ensure prices are stored as numbers rather than text |
| Highest weekly attendance | `MAX` | Confirm the date range and included sessions |
| Number of numeric scores supplied | `COUNT` | Count numeric cells, not necessarily student names |
| Number of filled identifiers | `COUNTA` | Nonempty values can include headers, formulas, and stray text |

## 3. How do ranges and arguments work?

A function can only work on the values or cells you tell it to use. The notation `B2:B6` identifies an **inclusive** vertical cell range: B2, B3, B4, B5, and B6. The colon `:` is the familiar [[range-operator|range operator]] connecting the first and last addresses. The capital B marks the column; the numbers identify the start and end rows.

### How to read common inputs

| Reference | Cells covered | Typical use | Potential mistake |
| --- | --- | --- | --- |
| `B2` | One cell | Read one measurement | Picking a heading or wrong row |
| `B2:B6` | B2, B3, B4, B5, B6 | Five readings in one column | Excluding the final reading |
| `B2:D2` | B2, C2, D2 | Three fields from one row | Adding unrelated categories |
| `B2:C6` | Two columns across five rows | A ten-cell rectangle | Mixing counts with prices or labels |
| `B2:B5` | Four cells, not five | A deliberately shorter series | Accidentally leaving out B6 |
| `B2:B7` | Six cells | May include a summary at B7 | Possibly counting the total again |

A rectangular range is allowed even when its cells do not all mean the same thing. That does not make it sensible. For example, if B holds quantities and C holds unit prices, using `=SUM(B2:C6)` would mix two different units. Organize data into clearly labeled [[field|fields]] so each function refers to a meaningful set.

### Avoid including a result cell inside its own inputs

Suppose the data occupy `B2:B6` and you place `=SUM(B2:B6)` in **B7**. This is straightforward: the output is below the five inputs. If you put `=SUM(B2:B7)` into B7, the formula includes B7 itself. That is a [[circular-reference|circular reference]]. Depending on application configuration, it may cause a warning, a calculation problem, or an unexpected result. Use the input range, not the result cell, as the function's argument.

### Changing a range after adding data

If the fifth attendance entry moves from B6 to B7, `=SUM(B2:B6)` will not necessarily cover it. Some spreadsheets adjust ranges after certain row insertions or other edits, but simply typing a new record outside the referenced range is not a guarantee that the formula expands. Check what the formula actually references after modifying the list.

### One continuous range versus separate arguments

| Formula | Meaning | Result if B2=12, B3=18, B4=15 |
| --- | --- | --- |
| `=SUM(B2:B4)` | Add every cell from B2 through B4 | `45` |
| `=SUM(B2,B4)` | Add only B2 and B4 | `27` |
| `=AVERAGE(B2:B4)` | Average the three numeric values | `15` |
| `=COUNT(B2:B4)` | Count numeric entries | `3` |

The comma shown between distinct arguments is common in English-language application settings. Other locales can use `;`. Do not replace the colon in `B2:B4` with a semicolon: the colon expresses a continuous range, while an argument separator marks separate inputs.

### The role of headers and blank rows

A [[header-row|header row]] is descriptive text, not usually a numeric measurement. Keeping headers in row 1 and data in rows 2–6 allows formulas to begin at B2 without including the header. A text header often gets ignored by the five numeric functions when referenced, but relying on that behavior makes a worksheet harder to audit. When a row is blank or missing, determine whether it means *not recorded*, *not applicable*, *zero*, or *pending*. These are business meanings, not interchangeable formatting choices.

## 4. How do you summarize a small attendance list?

The following fictional worksheet places five session labels in column A and the corresponding attendance counts in column B. To reproduce it, open a new blank worksheet, enter the labels and numbers exactly as shown, and add each summary formula in a separate cell outside the input range. Do not paste this into someone else's working file.

### Source worksheet

| Address in A | Day label | Address in B | Attendance (numeric entry) |
| --- | --- | --- | --- |
| A1 | Day | B1 | Attendees |
| A2 | Monday | B2 | 12 |
| A3 | Tuesday | B3 | 18 |
| A4 | Wednesday | B4 | 15 |
| A5 | Thursday | B5 | 10 |
| A6 | Friday | B6 | 20 |

You can enter the labels in A1:A6 and the numeric readings in B2:B6. Place **summary headings** in D2:D6 and the corresponding formulas in E2:E6, away from the original data. This arrangement prevents the results from being accidentally included in the source range.

### Summary block

| Summary label (column D) | Formula (column E) | Expected displayed result | What to say aloud |
| --- | --- | --- | --- |
| Total attendance | `=SUM(B2:B6)` | 75 | 75 attendances recorded across the five sessions |
| Average attendance | `=AVERAGE(B2:B6)` | 15 | 15 attendees per numeric session on average |
| Lowest attendance | `=MIN(B2:B6)` | 10 | Smallest recorded attendance was 10 |
| Highest attendance | `=MAX(B2:B6)` | 20 | Largest recorded attendance was 20 |
| Number of numeric records | `=COUNT(B2:B6)` | 5 | Five numeric attendance entries were found |

### Reproduce the results step by step

1. In `A1`, type `Day`. In `B1`, type `Attendees`.
2. Enter the five weekday names into `A2:A6` and the five numbers into `B2:B6`.
3. Select `D2` and enter `Total attendance`; select `E2` and enter `=SUM(B2:B6)`.
4. In `D3`, type `Average attendance`; in `E3`, enter `=AVERAGE(B2:B6)`.
5. In D4:D6, enter the remaining summary labels. In E4:E6, enter `=MIN(B2:B6)`, `=MAX(B2:B6)`, and `=COUNT(B2:B6)` respectively.
6. Compare every result with the expected result table. Inspect the formula text if anything differs.
7. Save your personal practice file under a descriptive name if you wish. If the application uses automatic cloud saving, verify the file's location and sharing permissions.

### Why each output can be different

For a correct worksheet, `SUM` reports the overall attendance count 75; `AVERAGE` describes the typical number **per session**, here 15; `MIN` and `MAX` report the observed low and high values 10 and 20; `COUNT` reports **how many numeric measurements** the calculation was able to use, here 5. A well-designed summary contains a clear label next to each output. Without a label, readers can easily confuse 5 sessions with 5 attendees or 75 attendances with 75 distinct persons.

### Predict the effect of editing an input

Suppose Thursday attendance in B5 changes from **10 to 14**, with all other cells unchanged. The new sequence becomes 12, 18, 15, 14, and 20. The total becomes 79, the average becomes 15.8, the lowest becomes 12, the highest stays 20, and the count stays 5. If your software uses automatic [[recalculation|recalculation]], these formulas normally update when B5 changes. If results do not update, check calculation settings, formula references, and whether the edited cell is truly numeric.

| Function | Before B5 edit | After B5 becomes 14 | Why |
| --- | --- | --- | --- |
| `SUM` | 75 | 79 | Total increases by 4 |
| `AVERAGE` | 15 | 15.8 | New total 79 divided by five |
| `MIN` | 10 | 12 | Monday becomes the lowest |
| `MAX` | 20 | 20 | Friday remains the highest |
| `COUNT` | 5 | 5 | Still five numeric cells |

> **Interpretation check:** A correct output is not just `15.8`. It is **15.8 attendees per recorded session on average**, under the stated five-session dataset. Always attach the measure and its period to the number.

## 5. How do blank cells, zero, and text affect results?

A major source of spreadsheet mistakes is assuming that all cells that *look* similar behave similarly. In many spreadsheet applications, a truly [[blank-cell|blank cell]], a numeric zero `0`, and the characters `"0"` stored as [[text-value|text]] behave differently in statistical functions. A cell that appears empty can even contain a formula returning an empty-looking string. The meaning of these differences matters more than the font or color.

### Observe a deliberately mixed range

Imagine the following fictional readings in D2:D6. One session has no submitted number; another records a genuine zero; a third contains a word rather than a number.

| Cell | Underlying entry | Meaning | Numeric for these basic calculations? |
| --- | --- | --- | --- |
| D2 | `8` | Eight attendees | Yes |
| D3 | blank | No reading entered | No |
| D4 | `0` | Explicitly recorded zero attendance | Yes |
| D5 | `12` | Twelve attendees | Yes |
| D6 | `pending` | Written status rather than attendance | No |

When these values are supplied **by cell reference** in the range D2:D6, the ordinary behaviors of the five core functions are:

| Formula | Expected result | Explanation |
| --- | --- | --- |
| `=SUM(D2:D6)` | `20` | Adds 8, 0, and 12 |
| `=AVERAGE(D2:D6)` | Approximately `6.67` | Divides 20 by 3 numeric entries |
| `=MIN(D2:D6)` | `0` | Zero is the smallest numeric value |
| `=MAX(D2:D6)` | `12` | Twelve is the largest numeric value |
| `=COUNT(D2:D6)` | `3` | Three cells contain numeric values |
| `=COUNTA(D2:D6)` | `4` | Four cells are not empty: 8, 0, 12, and `pending` |

For the average, 20 ÷ 3 produces repeating decimals. A cell formatted for two decimal places might display `6.67`, but the underlying computed number is not automatically rounded to exactly 6.67. Formatting controls *appearance*; it should not be mistaken for changing the mathematical value.

### Missing is not the same as zero

An empty cell may represent missing information, while a numeric zero may represent a recorded measurement of none. If Wednesday's attendance is *unknown*, putting `0` in its cell changes the average by treating the unknown session as a real zero. Conversely, leaving an actual zero-attendance session blank can inflate the average by removing it from the denominator. For reliable records, define what missing, zero, and pending mean before calculating.

### Numeric-looking text may be excluded

Suppose a cell contains the characters `"15"` stored as text, perhaps after importing a file or inserting a leading apostrophe in an entry. It may appear similar to the number 15, but numeric functions operating on referenced cells commonly do not treat it as a numeric measurement. Do **not** depend on a particular left/right alignment as conclusive proof: alignment can be changed manually. Inspect the underlying entry, formatting, and result, and repair the source value in a safe practice copy.

### COUNT versus COUNTA

`COUNT` is designed to count numbers in a specified set. `COUNTA` counts cells that are **not empty**, regardless of whether they contain numbers or text. That can be useful for a labeled list, but it does not tell you if every nonempty entry is valid or unique. In particular, a formula returning an empty-looking string (`""`) may still count as nonempty under `COUNTA`. A stray space or a heading inadvertently included in the range may also change the count.

### Why dates require care

Excel, Google Sheets, and Calc commonly represent valid dates and times using numeric values internally. `COUNT` may therefore include a correctly stored date in the same range as attendance numbers. That is another reason to limit a numeric summary to one clearly defined column instead of selecting an entire table of mixed fields. A date *looks* different from a plain number, but the storage type is what determines calculation behavior.

### What if no numeric entries exist?

`AVERAGE` of a referenced range with no eligible numeric values ordinarily displays a division-by-zero error, often `#DIV/0!`, rather than a meaningful average. This is important information: no valid numeric denominator exists for that calculation. Resist the temptation to overwrite the error with a fabricated zero. Instead, verify the data and report that no numeric average can be calculated from the currently supplied entries.

> **Data-quality rule:** Before relying on an average, ask **which values are included**, **how many numeric entries exist**, and **whether zero or missing values mean what you think they mean**.

## 6. How do you check and repair function formulas?

A formula can be syntactically valid yet answer the wrong question. The audit should therefore check its spelling and punctuation, selected range, underlying values, displayed result, and interpretation. Beginners do not need advanced auditing tools to perform a useful first review.

### A six-part verification workflow

1. **Read the question.** Are you looking for a total, a mean, a minimum, a maximum, or a number of numeric entries?
2. **Check the function.** Does the name correspond to that question? A `COUNT` formula does not add quantities.
3. **Inspect the argument.** Does `B2:B6` include all intended values without the header or summary cell?
4. **Examine the inputs.** Are values numeric when they should be? Is a blank actually missing information? Does zero mean none?
5. **Recalculate independently.** For a small list, add or count the numbers manually to confirm a plausible result.
6. **Write the meaning.** Label the output with units, reporting period, and any important missing-data limitation.

### Common mistakes and recovery actions

| Symptom | Possible cause | First safe check | Reasonable repair |
| --- | --- | --- | --- |
| `#NAME?` or equivalent unrecognized-name warning | Misspelled function name, such as `=SUUM(B2:B6)` | Inspect spelling and separators | Enter the supported name `SUM` |
| `#DIV/0!` from `AVERAGE` | No numeric values in the selected referenced cells | Review input types and range | Correct entries or document insufficient data |
| Total is too small | Range excludes last row, such as `B2:B5` | Compare endpoints with source records | Use the intended end row |
| Total is too large | Summary or unrelated data included | Trace each included cell | Exclude double-counted or unrelated entries |
| Count is lower than number of visible entries | Some entries are text, blank, or statuses | Inspect underlying cell types | Clarify purpose; correct numeric inputs when authorized |
| Minimum unexpectedly equals 0 | Real zero, placeholder zero, or wrong range | Inspect zero's source meaning | Keep genuine zeros; correct placeholder errors |
| Formula appears as text | Missing `=` or cell stored as text | Examine cell entry and formatting | Correct entry in practice copy and re-enter as a formula |
| Result unchanged after edit | Formula points elsewhere or calculation is not refreshed | Inspect formula reference and calculation settings | Correct reference or use supported recalculate action |

Specific warnings can vary across applications. A visible error code is not always a sign of a damaged file; it is often an invitation to examine the formula or input. Avoid hiding warnings until the underlying issue has been understood.

### The danger of summary cells in selected ranges

If D7 contains a total from D2:D6 and someone enters `=SUM(D2:D7)` in D8, the numbers in D2:D6 are effectively counted **twice**: once directly and once through the total in D7. This is not necessarily a circular reference because D8 is outside D2:D7, but it is still a [[double-counting|double-counting]] error. The spreadsheet will happily perform the calculation. Human review must catch the mistake.

### The danger of filtered or hidden rows

A normal `SUM` or `AVERAGE` on a range commonly includes numeric values from rows that have been visually hidden or filtered, depending on the operation and software. Hiding a row is not the same as deleting it from the calculation. Later coursework on sorting and filtering will expand on these differences; when analyzing only visible records, use the features designed for that purpose and validate their behavior. Never assume that a visual filter automatically changes every calculation.

### AutoSum and function suggestions

In many spreadsheet products, a toolbar or menu provides [[autosum|AutoSum]] and other shortcuts that suggest a nearby range. This is convenient for simple calculations, but the suggested selection can be wrong if it includes a total, misses a row, or reads a neighboring column. Treat the software's suggestion as a draft: inspect the actual formula and confirm the intended inputs before accepting it.

### Use appropriate presentation

Format an average like `15.8` with a sensible number of decimal places, a currency total as currency only when the original inputs are monetary amounts, and a record count as a whole number. A number format is not a substitute for checking whether the underlying result is correct. If a record count is labeled “Number of students,” make sure the formula truly counts students rather than simply nonempty cells in an unrelated numeric column.

> **Professional habit:** Never send or publish an important summary based only on a plausible-looking cell. Keep a recoverable source worksheet, document assumptions, and confirm the formula and units.

## 7. Guided practice: Use and verify common functions

Complete these activities in order with paper and pencil or an empty spreadsheet. The practical exercises use fictional figures and do not require external websites, account sign-in, or access to real financial or personal information. Reveal the answer panels **after** attempting each activity. If you use software, create a separate practice workbook and check that no third-party information is exposed.

### Activity 1: Match the question to the function (about 8–10 minutes)

For each question, select the most suitable function from `SUM`, `AVERAGE`, `MIN`, `MAX`, and `COUNT`.

1. What is the combined number of library books returned during four days?
2. What is the arithmetic mean of five recorded daily temperatures?
3. What is the smallest valid delivery time in minutes?
4. How many numeric test results are entered in the assigned range?
5. What is the greatest distance recorded across six trips?
6. What is the total amount of five fictional donations?

:::answer Show Activity 1 answers
1. `SUM` — combined total.
2. `AVERAGE` — arithmetic mean.
3. `MIN` — smallest numeric value.
4. `COUNT` — number of numeric entries.
5. `MAX` — largest numeric value.
6. `SUM` — adds the amounts.

Remember that `COUNT` counts numeric *records* in the range, whereas `SUM` adds their *values*.
:::

### Activity 2: Write functions from a worksheet map (about 10–12 minutes)

A fictional class records four completed exercises in cells `C2:C5`, with values 3, 4, 2, and 5. Use cell references to write formulas for the total, average, smallest, largest, and number of recorded numeric entries. Then find the expected results.

| Cell | Stored value |
| --- | --- |
| C2 | 3 |
| C3 | 4 |
| C4 | 2 |
| C5 | 5 |

:::answer Show Activity 2 formulas and results
| Question | Formula | Result |
| --- | --- | --- |
| Total | `=SUM(C2:C5)` | `14` |
| Mean | `=AVERAGE(C2:C5)` | `3.5` |
| Minimum | `=MIN(C2:C5)` | `2` |
| Maximum | `=MAX(C2:C5)` | `5` |
| Numeric count | `=COUNT(C2:C5)` | `4` |

The mean is 14 divided by four numeric entries, or 3.5.
:::

### Activity 3: Build a five-day attendance summary (about 15–20 minutes)

Create the practice worksheet from Section 4, using Monday–Friday in A2:A6 and **12, 18, 15, 10, 20** in B2:B6. Place the five summary formulas in E2:E6. Do not put the summary inside B2:B6. Check all five results and write a sentence explaining why the total and count are different.

:::answer Show Activity 3 expected results
| Summary | Expected formula | Expected result |
| --- | --- | --- |
| Total | `=SUM(B2:B6)` | `75` |
| Average | `=AVERAGE(B2:B6)` | `15` |
| Minimum | `=MIN(B2:B6)` | `10` |
| Maximum | `=MAX(B2:B6)` | `20` |
| Count | `=COUNT(B2:B6)` | `5` |

A suitable explanation is: “The total adds attendees recorded across all sessions, whereas the count tells me how many numeric daily readings appear in the range.”
:::

### Activity 4: Predict a revised result without retyping functions (about 10–15 minutes)

Return to Activity 3. Change Thursday's value in B5 from **10 to 14**. Before looking at the spreadsheet's output, predict which functions will change and which will stay the same. Record the new total, average, minimum, maximum, and count. If the app does not recalculate as expected, check its calculation mode and inspect the formulas.

:::answer Show Activity 4 expected changes
| Measure | Original | Revised |
| --- | --- | --- |
| Total | 75 | 79 |
| Average | 15 | 15.8 |
| Minimum | 10 | 12 |
| Maximum | 20 | 20 |
| Numeric count | 5 | 5 |

Only the total, average, and minimum change. The revised smallest number is Monday's 12, and there are still five numeric readings.
:::

### Activity 5: Interpret missing data and a zero (about 12–15 minutes)

Use the mixed records in Section 5: D2=`8`, D3=blank, D4=`0`, D5=`12`, D6=`pending`. Predict the six results for `SUM`, `AVERAGE`, `MIN`, `MAX`, `COUNT`, and `COUNTA`. Then answer: Why would replacing the blank D3 with numeric zero change the average?

:::answer Show Activity 5 results
| Function formula | Result |
| --- | --- |
| `=SUM(D2:D6)` | 20 |
| `=AVERAGE(D2:D6)` | Approximately 6.67 |
| `=MIN(D2:D6)` | 0 |
| `=MAX(D2:D6)` | 12 |
| `=COUNT(D2:D6)` | 3 |
| `=COUNTA(D2:D6)` | 4 |

If D3 becomes numeric zero, four numeric values are used rather than three. The sum remains 20, while `AVERAGE` becomes 20 ÷ 4 = **5**, `COUNT` becomes **4**, and `COUNTA` becomes **5**. Entering zero can therefore change the denominator without changing the total.
:::

### Activity 6: Audit a worksheet summary (about 15–20 minutes)

A fictional store lists quantities sold in `B2:B5`: 6, 4, 8, and 2. The intended total is 20. The worksheet places that total in B6, but a novice makes the following mistakes. Diagnose each and write a safer correction.

1. In B6 they type `=SUM(B2:B6)`.
2. They revise B6 to `=SUM(B2:B5)` (which displays 20), then type `=SUM(B2:B6)` in B7 and label it “Total sold.”
3. They type `=COUNT(B2:B5)` in D2 and label the result “Total items sold.”
4. They change B4 from numeric 8 to text `pending` while leaving the label “Four days completed.”
5. They filter the displayed list to show only one product, then assume every `SUM` formula automatically excludes all hidden rows.

:::answer Show Activity 6 audit and corrections
1. **Circular reference:** B6 is within its own input range. Correct the formula in B6 to `=SUM(B2:B5)`.
2. **Double counting:** B7 adds 6+4+8+2+20 = **40**. Do not include the existing total B6 in a new total. Use B2:B5 for the four source quantities, or keep the single valid total in B6.
3. **Wrong measurement:** `=COUNT(B2:B5)` returns **4** numeric rows, not 20 items sold. Use `=SUM(B2:B5)` for the item quantity total.
4. **Missing numeric entry:** With B4 changed to text, the selected numeric entries become 6, 4, and 2. `SUM` now gives **12** and `COUNT` gives **3**. The summary should acknowledge that one day's quantity is unrecorded instead of claiming a complete four-day total.
5. **Incorrect filtering assumption:** Basic functions may still include hidden or filtered records. Inspect the function's actual behavior; use an appropriate filtered-data calculation when that is the intended analysis.

A thorough audit checks both the formula's computation and the meaning of the result.
:::

> **Safety and accessibility:** You may perform all six activities on paper or with assistive technology. No real records, financial account, login, or online upload is needed. Screen reader and keyboard users may navigate the named cells directly through their application's supported controls; the visible grid is not required to understand the calculations.

## 8. Common misconceptions

### “A function is something different from a formula.”

A function is a named operation **used inside** a formula. `SUM` is the function; `=SUM(B2:B6)` is a formula that calls it. The distinction matters when explaining how a cell produces its displayed result.

### “SUM and COUNT both mean how many.”

They measure different things. `SUM` adds values; `COUNT` counts numeric entries. A column containing 12, 18, and 15 has a sum of 45 but a numeric count of 3.

### “AVERAGE always divides by the number of rows I selected.”

Not generally. `AVERAGE` counts eligible numeric entries, which may be fewer than the total cells in the selected range when blanks or text are present. Zeros are valid numeric values and count toward the denominator.

### “A blank value and a numeric zero are interchangeable.”

No. Blank commonly indicates that no numeric value was supplied; zero is a particular numerical result or measurement. Using a fabricated zero to stand for unknown information can distort a mean or minimum.

### “The smallest number cannot be zero.”

If zero is an actual numeric input and no smaller number is present, `MIN` can correctly return zero. Negative amounts can also be legitimate values and can become the minimum.

### “The largest value tells me which row won.”

`MAX` returns the largest numeric value, not the name of the corresponding person, item, or day. A label must be retrieved or verified from the original records.

### “A function will automatically find any new data anywhere on the sheet.”

A function normally operates on the specified inputs. If new data fall outside `B2:B6`, do not assume they are included. Inspect and expand the range deliberately if the dataset changes.

### “If a total looks reasonable, the range must be correct.”

A reasonable-looking number can exclude the final row, include a duplicate subtotal, or combine incompatible units. Valid calculations with wrong inputs produce misleading results without necessarily showing an error code.

### “A nonempty cell is always a numeric measurement.”

Nonempty cells can contain names, status messages, formulas, and numeric-looking text. `COUNTA` and `COUNT` therefore answer different questions. Neither function independently verifies data quality or uniqueness.

### “Selecting a filtered list automatically changes every basic function.”

Hidden or filtered rows can still contribute to ordinary calculations. When asking about visible records only, check the selected function or tool's specific handling of filtered and hidden data rather than relying on what is displayed.

### “Formatting a number to two decimals changes its actual value.”

Display formatting commonly changes how the result appears, not the stored value used by subsequent formulas. Always distinguish a shown rounded value from the underlying calculation.

### “A function error should be replaced with zero so the sheet looks clean.”

Replacing an error with zero may hide missing inputs or invalid formulas. Understand the error first. In a learning context, a documented absence of valid numbers is more accurate than inventing a numeric result.

### “Every visit recorded means a different person.”

`SUM` can correctly add daily attendance while counting repeat attendance more than once. A count of visits is not necessarily a count of unique individuals. State the unit of measure with the total.

### “AutoSum always selects exactly the data I intended.”

Suggested ranges are helpful starting points, not guarantees. Always review the first and last cell, and check whether a heading, blank line, or prior subtotal was selected.

## 9. Essential vocabulary

Vocabulary terms appearing with dotted underlines in the reading can be selected for a short explanation when the MGU lesson dashboard's tooltip feature is available. The vocabulary below is also written out so that learners using a printed page or a reader without interactive support have access to the definitions. The machine-readable entries appear in the `:::terms` block at the end of the file.

### Spreadsheet structure and sources

- **Spreadsheet:** Software or a document using a grid to organize information and perform calculations.
- **Workbook:** A spreadsheet file that may include several worksheets.
- **Worksheet:** One grid of rows and columns in a spreadsheet file.
- **Row:** A horizontal run of cells, usually labeled by number.
- **Column:** A vertical run of cells, usually labeled by letter.
- **Cell:** A location at the intersection of one row and one column.
- **Active cell:** The current cell selected for entering or editing information.
- **Cell reference:** An address, such as B2, that identifies a cell.
- **Cell range:** One or more cells referred to together, such as B2:B6.
- **Range operator:** The colon used to identify a continuous rectangular range.
- **Header row:** A row of descriptive labels above the data.
- **Field:** One category of information, often represented by a column.
- **Record:** One logical observation or item, often represented by a row.
- **Dataset:** A defined group of related records or measurements.
- **Source record:** The original entry from which a worksheet value is taken.
- **Data validation:** Measures used to limit or check the kind of value entered.
- **Data quality:** Whether recorded values are suitable, complete, consistent, and accurate for a purpose.

### Formulas and functions

- **Formula:** An expression used by a spreadsheet to calculate a result, normally starting with `=`.
- **Function:** A named, supported operation used in a formula.
- **Built-in function:** A function supplied by the spreadsheet application.
- **Argument:** An input passed to a function, such as a cell reference or range.
- **Function name:** Text identifying the operation, for example `SUM`.
- **Parentheses:** Symbols used around arguments in a function call.
- **Argument separator:** A symbol between distinct function arguments, often a comma or semicolon depending on locale.
- **SUM:** A function that adds eligible numeric values.
- **AVERAGE:** A function returning the arithmetic mean of eligible numeric values.
- **MIN:** A function returning the smallest eligible numeric value.
- **MAX:** A function returning the largest eligible numeric value.
- **COUNT:** A function counting eligible numeric values.
- **COUNTA:** A function counting cells regarded as nonempty.
- **Arithmetic mean:** Sum of numerical observations divided by the number of included observations.
- **Total:** The sum of a defined set of amounts.
- **Minimum:** The smallest number among eligible values.
- **Maximum:** The largest number among eligible values.
- **Numerical count:** The number of entries meeting a numeric criterion.
- **Denominator:** The value by which a total is divided when computing an average.
- **Statistical range:** The difference between a dataset's maximum and minimum values.

### Data types and interpretation

- **Numeric value:** Data stored as a number that can ordinarily participate in arithmetic.
- **Text value:** Characters recorded as a label, description, or other nonnumeric content.
- **Blank cell:** A cell with no entered content.
- **Zero:** The numeric value 0, distinct from missing information.
- **Missing data:** An expected observation that has not been recorded.
- **Pending:** A status indicating an entry has not been finalized or supplied.
- **Numeric-looking text:** Characters that resemble a number but are stored as text.
- **Stored value:** The underlying value maintained by a cell.
- **Display format:** The appearance assigned to a value, such as currency or two decimal places.
- **Decimal places:** The number of digits displayed after the decimal separator.
- **Date serial value:** An internal number used by many spreadsheets to represent dates.
- **Reporting period:** The dates or interval covered by a summary.
- **Unit of measure:** What a number counts or expresses, such as visits, hours, or dollars.
- **Distinct person:** An individual counted once even when several visits are recorded.
- **Assumption:** A statement accepted for a calculation that needs to be checked or documented.

### Review, errors, and workflow

- **Formula bar:** A place to inspect or edit the selected cell's contents.
- **Recalculation:** Updating a formula's result when its inputs or settings change.
- **AutoSum:** A spreadsheet shortcut that proposes a summing formula or related function.
- **Circular reference:** A formula that depends on itself, directly or indirectly.
- **Double counting:** Counting the same source amount more than once.
- **Independent check:** Verifying a calculation through another method.
- **Reasonableness check:** Evaluating whether an output makes sense for the situation.
- **Error indicator:** A displayed clue that a formula or value could not be evaluated as expected.
- **#DIV/0!:** A common error representing division by zero or absence of a valid numeric denominator.
- **#NAME?:** An error displayed by some spreadsheets for an unrecognized function or name.
- **Filtering:** Displaying only records meeting selected conditions, without necessarily changing base formulas.
- **Hidden row:** A row not shown in the current view but potentially still present in calculations.
- **Audit:** A systematic check of inputs, calculations, ranges, outputs, and interpretations.
- **Save:** Preserving changes in the intended file or service.
- **Sharing permission:** An access rule affecting who can read or modify a workbook.


## 10. Knowledge check

Select one answer for each question, then use **Check answers** if the MGU dashboard renders the quiz controls. The assessment operates on fictional datasets. A matching expandable answer key is supplied for reading or printing, and no personal, payment, or account information is needed.

:::quiz
? What is a spreadsheet function?
- [x] A named built-in operation used within a formula
- [ ] Any row shaded a different color
- [ ] A rule that always checks factual accuracy
! Functions are named operations such as SUM or AVERAGE; they perform defined calculations on selected inputs.

? What character normally begins a formula that calls a function?
- [ ] #
- [x] =
- [ ] /
! An equals sign normally starts a spreadsheet formula, such as =SUM(B2:B6).

? Which entry correctly adds the numeric values in B2:B6?
- [ ] SUM B2:B6
- [ ] =SUM B2:B6
- [x] =SUM(B2:B6)
! The standard form begins with =, names SUM, and encloses the range in parentheses.

? What does the colon mean in B2:B6?
- [x] The continuous inclusive range from B2 through B6
- [ ] A command to divide B2 by B6
- [ ] Two cell values only, B2 and B6
! The colon creates a continuous range that includes the endpoints and cells between them.

? Which function asks for the arithmetic mean?
- [ ] MAX
- [x] AVERAGE
- [ ] COUNT
! AVERAGE adds eligible numeric observations and divides by the number of eligible numeric entries.

? Which function returns the smallest numeric value?
- [ ] SUM
- [ ] COUNT
- [x] MIN
! MIN returns the smallest eligible numeric value in the selected inputs.

? For the numbers 12, 18, 15, 10, 20, what does SUM return?
- [x] 75
- [ ] 15
- [ ] 5
! Adding the five recorded attendance numbers gives 75.

? For the same five numbers, what is their arithmetic mean?
- [ ] 20
- [x] 15
- [ ] 75
! The five numbers total 75, and 75 divided by 5 is 15.

? For 12, 18, 15, 10, 20, what is the largest value?
- [ ] 12
- [ ] 18
- [x] 20
! MAX returns 20, the highest numeric entry in the group.

? For 12, 18, 15, 10, 20, what does COUNT return?
- [x] 5
- [ ] 75
- [ ] 15
! COUNT returns the number of numeric entries, five, rather than the sum.

? What is the correct interpretation of COUNT(B2:B6)=5 for five attendance records?
- [ ] Five unique people attended
- [x] Five cells contain numeric entries
- [ ] Five is the total attendance
! The function counts numeric cells; it does not identify unique attendees or add their values.

? Which function finds the largest value in C2:C5?
- [ ] =MIN(C2:C5)
- [ ] =SUM(C2:C5)
- [x] =MAX(C2:C5)
! MAX returns the highest eligible numeric value in the supplied range.

? If C2:C5 contains 3, 4, 2, 5, what is =SUM(C2:C5)?
- [x] 14
- [ ] 4
- [ ] 3.5
! The four entries total 3 + 4 + 2 + 5 = 14.

? If C2:C5 contains 3, 4, 2, 5, what is =AVERAGE(C2:C5)?
- [ ] 14
- [x] 3.5
- [ ] 5
! 14 divided by the four numeric observations equals 3.5.

? Which expression counts the numeric values in C2:C5?
- [ ] =SUM(C2:C5)
- [ ] =COUNTA(C2:C5) always counts only numbers
- [x] =COUNT(C2:C5)
! COUNT is used to count numeric entries; COUNTA targets nonempty cells of several types.

? A referenced range contains 8, blank, 0, 12, and the text 'pending'. What does SUM return?
- [x] 20
- [ ] 4
- [ ] 3
! SUM adds the numeric entries 8, 0, and 12; blank and text cells do not contribute to this referenced-range sum.

? In that same range, how many numeric entries does COUNT return?
- [ ] 4
- [x] 3
- [ ] 5
! Only 8, 0, and 12 are numeric entries, giving COUNT = 3.

? What should =MIN(D2:D6) return for 8, blank, 0, 12, and 'pending'?
- [ ] 8
- [ ] 12
- [x] 0
! Zero is a genuine numeric entry and is the smallest in the specified values.

? For numeric values 8, 0, and 12, with blank and text also present, how is AVERAGE computed?
- [x] 20 divided by 3
- [ ] 20 divided by 5
- [ ] 20 divided by 4
! AVERAGE uses the three eligible numeric observations and gives approximately 6.67.

? Which function counts the four nonempty cells in the mixed range containing 8, blank, 0, 12, and 'pending'?
- [ ] COUNT
- [x] COUNTA
- [ ] MAX
! COUNTA counts the four nonempty cells, including the status text, whereas COUNT finds only three numeric entries.

? What is the effect of changing a truly blank cell to numeric zero within the referenced range?
- [ ] SUM always increases
- [ ] COUNT always decreases
- [x] The numeric count rises and an average can change
! Zero adds a numeric observation and can change the average denominator without increasing the total.

? Why is a numeric-looking entry stored as text a concern?
- [x] A numeric function may omit that cell from a referenced range
- [ ] The cell must always display a security warning
- [ ] Text is always counted as 1 in COUNT
! The underlying data type, not just how the entry looks, affects calculations.

? What is wrong with entering =SUM(B2:B6) into B6 itself?
- [ ] It always sums only five earlier rows
- [x] It creates a circular reference to the result cell
- [ ] It automatically counts text in column A
! A formula in B6 cannot safely use a range that includes B6 itself without special circular calculation handling.

? B6 already contains the total of B2:B5. What is the risk of calculating =SUM(B2:B6) in B7?
- [ ] The formula cannot begin with an equal sign
- [ ] The formula returns only COUNT
- [x] The earlier total is added again, creating double counting
! The input range includes the underlying values and their existing total, potentially doubling that total.

? If Thursday's attendance changes from 10 to 14, with other readings 12, 18, 15, 20, what is the new SUM?
- [x] 79
- [ ] 75
- [ ] 15.8
! The revised total is 12+18+15+14+20 = 79.

? In that revised dataset, what does MIN return?
- [ ] 10
- [x] 12
- [ ] 14
! After the prior minimum 10 becomes 14, the smallest remaining value is 12.

? If those five revised attendance cells still contain numbers, what does COUNT return?
- [ ] 79
- [ ] 15.8
- [x] 5
! Changing the numerical amount in one cell does not change the number of numeric records.

? What is the first sensible action if AutoSum selects a surprising range?
- [x] Inspect and correct the suggested cell references before using the result
- [ ] Assume the program knows the intended reporting period
- [ ] Hide the result cell to avoid confusion
! AutoSum is a convenience, but the selected range must still be reviewed.

? If AVERAGE displays #DIV/0! because its referenced cells contain no numbers, what should you do?
- [ ] Overwrite it with a fabricated zero
- [x] Inspect the selected inputs and report insufficient numeric data when applicable
- [ ] Change the font until the error disappears
! No valid numeric denominator is available; correct inputs or describe the absence of usable data rather than inventing a result.

? Which statement about ordinary SUM and filtered rows is safest?
- [ ] A filter always removes hidden rows from the SUM calculation
- [ ] Formatting hidden rows always resets the totals
- [x] Check the calculation behavior; filtering alone does not guarantee excluded rows
! Basic functions often include values in hidden or filtered rows, so verify behavior or use an appropriate visible-only calculation.

:::

:::answer Show the quiz answer key with explanations
1. **A.** Functions are named operations such as SUM or AVERAGE; they perform defined calculations on selected inputs.
2. **B.** An equals sign normally starts a spreadsheet formula, such as =SUM(B2:B6).
3. **C.** The standard form begins with =, names SUM, and encloses the range in parentheses.
4. **A.** The colon creates a continuous range that includes the endpoints and cells between them.
5. **B.** AVERAGE adds eligible numeric observations and divides by the number of eligible numeric entries.
6. **C.** MIN returns the smallest eligible numeric value in the selected inputs.
7. **A.** Adding the five recorded attendance numbers gives 75.
8. **B.** The five numbers total 75, and 75 divided by 5 is 15.
9. **C.** MAX returns 20, the highest numeric entry in the group.
10. **A.** COUNT returns the number of numeric entries, five, rather than the sum.
11. **B.** The function counts numeric cells; it does not identify unique attendees or add their values.
12. **C.** MAX returns the highest eligible numeric value in the supplied range.
13. **A.** The four entries total 3 + 4 + 2 + 5 = 14.
14. **B.** 14 divided by the four numeric observations equals 3.5.
15. **C.** COUNT is used to count numeric entries; COUNTA targets nonempty cells of several types.
16. **A.** SUM adds the numeric entries 8, 0, and 12; blank and text cells do not contribute to this referenced-range sum.
17. **B.** Only 8, 0, and 12 are numeric entries, giving COUNT = 3.
18. **C.** Zero is a genuine numeric entry and is the smallest in the specified values.
19. **A.** AVERAGE uses the three eligible numeric observations and gives approximately 6.67.
20. **B.** COUNTA counts the four nonempty cells, including the status text, whereas COUNT finds only three numeric entries.
21. **C.** Zero adds a numeric observation and can change the average denominator without increasing the total.
22. **A.** The underlying data type, not just how the entry looks, affects calculations.
23. **B.** A formula in B6 cannot safely use a range that includes B6 itself without special circular calculation handling.
24. **C.** The input range includes the underlying values and their existing total, potentially doubling that total.
25. **A.** The revised total is 12+18+15+14+20 = 79.
26. **B.** After the prior minimum 10 becomes 14, the smallest remaining value is 12.
27. **C.** Changing the numerical amount in one cell does not change the number of numeric records.
28. **A.** AutoSum is a convenience, but the selected range must still be reviewed.
29. **B.** No valid numeric denominator is available; correct inputs or describe the absence of usable data rather than inventing a result.
30. **C.** Basic functions often include values in hidden or filtered rows, so verify behavior or use an appropriate visible-only calculation.

:::

### Exit task: Explain your summary without the spreadsheet

Complete these statements before viewing the model responses:

1. `SUM` adds __________, while `COUNT` counts __________.
2. When a range contains 8, blank, 0, 12, and `pending`, the `AVERAGE` is based on __________ numeric observations.
3. To find the lowest and highest values, use __________ and __________.
4. Before trusting `=SUM(B2:B6)`, I must verify __________ and __________.
5. If an input changes but `COUNT` remains five, that can be correct because __________.

:::answer Show exit task sample responses
1. `SUM` adds eligible numeric amounts; `COUNT` counts eligible numeric entries.
2. Three: 8, 0, and 12.
3. `MIN` and `MAX`.
4. The function uses the intended source cells, and the input values represent the correct measure.
5. `COUNT` measures how many numeric entries exist, not the sizes of those entries.
:::

## 11. MGU Library connections and next steps

The five core functions are useful in personal, educational, and workplace spreadsheets, but they should be part of a deliberate workflow: **enter clean data → choose a meaningful range → select the appropriate function → interpret the result → verify accuracy**. If you can explain a number in words and trace the range that produced it, you are ready to move on to organizing longer lists.

### MGU course connections

- [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) — overview of the nine-lesson course.
- [Lesson 1: What Is a Spreadsheet?](/department/computer-science/basic-computer-skills/spreadsheet-skills/what-is-a-spreadsheet/) — a spreadsheet’s purpose and practical examples.
- [Lesson 2: Rows, Columns, and Cells](/department/computer-science/basic-computer-skills/spreadsheet-skills/rows-columns-and-cells/) — reading cell addresses and ranges.
- [Lesson 3: Entering and Formatting Data](/department/computer-science/basic-computer-skills/spreadsheet-skills/entering-and-formatting-data/) — understanding stored values and number formats.
- [Lesson 4: Simple Formulas](/department/computer-science/basic-computer-skills/spreadsheet-skills/simple-formulas/) — arithmetic operators, references, and recalculation.
- [Lesson 6: Sorting and Filtering](/department/computer-science/basic-computer-skills/spreadsheet-skills/sorting-and-filtering/) — organizing lists and controlling what rows are displayed.
- [Lesson 9: Checking Spreadsheet Errors](/department/computer-science/basic-computer-skills/spreadsheet-skills/checking-spreadsheet-errors/) — later: a structured approach to validation and troubleshooting.

### Official application guides

- [Microsoft Support: Overview of formulas in Excel](https://support.microsoft.com/en-us/excel/get-started/overview-of-formulas-in-excel) — formulas, references, and functions.
- [Microsoft Support: Learn more about SUM](https://support.microsoft.com/en-us/excel/learn-more-about-sum) — entering and reviewing sums.
- [Microsoft Support: Calculate the average of a group of numbers](https://support.microsoft.com/en-us/excel/calculate-the-average-of-a-group-of-numbers) — arithmetic averages and spreadsheet controls.
- [Microsoft Support: Excel functions by category](https://support.microsoft.com/en-us/excel/excel-functions-by-category) — function names and descriptions.
- [Google Docs Editors Help: Google Sheets function list](https://support.google.com/docs/table/25273?hl=en) — authoritative function reference.
- [Google Docs Editors Help: See the sum and average](https://support.google.com/docs/answer/66032?hl=en) — quick descriptive statistics.
- [LibreOffice Calc Help](https://help.libreoffice.org/latest/en-US/text/scalc/main0000.html) — official Calc help and function resources.

Features, menu locations, calculation settings, and regional separators may differ among applications and versions. For workflow instructions, consult the current documentation for the software in use.

### Continue the Spreadsheet Skills course

[← Previous lesson: Simple Formulas](/department/computer-science/basic-computer-skills/spreadsheet-skills/simple-formulas/) · [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) · [Next lesson: Sorting and Filtering →](/department/computer-science/basic-computer-skills/spreadsheet-skills/sorting-and-filtering/)

> **Lesson completion checklist:** I can write a function in a formula; read `B2:B6`; use `SUM`, `AVERAGE`, `MIN`, `MAX`, and `COUNT` correctly; distinguish numeric count from total quantity; describe how blank, zero, and text affect results; use `COUNTA` for nonempty entries; identify a circular reference or duplicated subtotal; and explain both what my summary *measures* and how I verified it.

:::terms
spreadsheet | Spreadsheet | A grid-based file or application for organizing information and performing calculations. |
workbook | Workbook | A spreadsheet file that can contain one or more worksheets. |
worksheet | Worksheet | One tab or grid of row-column cells within a workbook. |
row | Row | A horizontal series of cells usually labeled by number. |
column | Column | A vertical series of cells usually labeled by letter. |
cell | Cell | A location at the intersection of a worksheet row and column. |
active-cell | Active cell | The cell currently selected for data entry or editing. |
cell-reference | Cell reference | A location such as B2 used to identify a particular cell. |
range | Range | A set of cells referred to together in a spreadsheet expression. |
cell-range | Cell range | An inclusive group of cells, such as B2:B6, supplied to a formula or selection. |
range-operator | Range operator | The colon used between cell addresses to select the continuous range between them. |
header-row | Header row | A row of descriptive labels identifying the meaning of fields. |
field | Field | A category of data commonly represented by one column. |
record | Record | Related values about one observation or item, often arranged across a row. |
dataset | Dataset | A defined collection of records or measurements. |
source-record | Source record | An original record used to verify a worksheet entry. |
data | Data | Information recorded for organization, calculation, or analysis. |
data-validation | Data validation | Checks or restrictions intended to help users enter permitted and suitable data. |
data-quality | Data quality | Accuracy, consistency, completeness, and suitability of information for its intended use. |
formula | Formula | A spreadsheet expression usually beginning with = and evaluated for a result. |
function | Function | A named operation used within a formula to perform a defined calculation. |
built-in-function | Built-in function | A named calculation provided as part of a spreadsheet application. |
argument | Argument | An input supplied to a function, including numbers, cell references, or ranges. |
function-name | Function name | The identifier of a supported spreadsheet operation, such as SUM or MAX. |
parentheses | Parentheses | Grouping symbols around a function's input arguments. |
argument-separator | Argument separator | A punctuation mark separating distinct arguments; choice varies by locale. |
sum-function | SUM | A function that adds eligible numerical inputs. |
average-function | AVERAGE | A function returning the arithmetic mean of eligible numeric inputs. |
min-function | MIN | A function returning the smallest eligible numeric input. |
max-function | MAX | A function returning the largest eligible numeric input. |
count-function | COUNT | A function that counts eligible numerical entries. |
counta-function | COUNTA | A function that counts values or cells regarded as nonempty. |
arithmetic-mean | Arithmetic mean | The sum of eligible numerical observations divided by their number. |
total | Total | A combined amount obtained by adding eligible values. |
minimum | Minimum | The smallest eligible number in a defined set. |
maximum | Maximum | The largest eligible number in a defined set. |
numerical-count | Numerical count | Number of observations or cells containing eligible numeric values. |
denominator | Denominator | The number by which a sum or numerator is divided. |
spread | Numerical spread | The difference between a set's maximum and minimum values. |
statistical-range | Statistical range | Largest value minus smallest value in a numerical dataset. |
numeric-value | Numeric value | A number stored in a form ordinarily available for arithmetic calculations. |
text-value | Text value | A sequence of characters stored as writing or a label rather than a numeric input. |
blank-cell | Blank cell | A cell with no entered content. |
zero | Zero | The numeric value 0, distinct from not having a measurement. |
missing-data | Missing data | An expected value not currently available or recorded. |
pending | Pending | A status identifying an incomplete or unconfirmed record. |
numeric-looking-text | Numeric-looking text | Characters resembling a number that are actually stored as text. |
stored-value | Stored value | The value or expression actually held by a cell. |
display-format | Display format | The visual representation of a cell value, such as currency or decimal places. |
decimal-places | Decimal places | Digits shown to the right of the decimal mark. |
date-serial-value | Date serial value | Numerical representation of a date or time in many spreadsheet programs. |
reporting-period | Reporting period | Time interval represented by a set of records or a summary. |
unit-of-measure | Unit of measure | What a number represents, such as visitors, hours, kilograms, or dollars. |
distinct-person | Distinct person | A unique individual, as opposed to a repeat visit counted more than once. |
assumption | Assumption | An interpretation or condition relied upon when making a calculation. |
formula-bar | Formula bar | A control for viewing or editing a selected cell's underlying expression. |
recalculation | Recalculation | Refreshing formula results when their inputs or calculation settings change. |
autosum | AutoSum | A spreadsheet command that proposes a sum or related function and nearby range. |
circular-reference | Circular reference | A formula whose calculation depends on its own output, directly or indirectly. |
double-counting | Double counting | Including the same amount or record more than once in a supposed total. |
independent-check | Independent check | Confirming a result without trusting only the original formula output. |
reasonableness-check | Reasonableness check | Checking whether a result is plausible given known circumstances. |
error-indicator | Error indicator | A message or sign suggesting a calculation or value cannot be processed normally. |
div-zero-error | #DIV/0! | A common warning when a formula divides by zero or lacks eligible numeric values for an average. |
name-error | #NAME? | An error in some spreadsheet products for unrecognized text used as a function or name. |
filtering | Filtering | Displaying selected rows according to criteria, without necessarily changing their contribution to other functions. |
hidden-row | Hidden row | A worksheet row not shown in the current view but still present in the data. |
audit | Audit | Systematically reviewing a worksheet's inputs, ranges, formulas, results, and meanings. |
save | Save | Preserve worksheet changes in the intended location or file. |
sharing-permission | Sharing permission | An access setting determining who may view or edit a workbook. |

:::
