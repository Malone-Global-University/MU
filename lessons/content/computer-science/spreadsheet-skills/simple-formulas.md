Basic Computer Skills / Spreadsheet Skills

## Lesson 4: Simple Formulas

A neighborhood reading group needs supplies for an event. One volunteer records four pens at $1.50 each. Another writes down three folders at $2.25 each. A third person adds the totals on paper. When the group changes the pen order from four to six, the calculations must be done again. A [[spreadsheet|spreadsheet]] can handle those changes—provided someone enters the correct numbers and tells it **how** to calculate them.

A [[formula|formula]] is an instruction written in a spreadsheet cell that produces a result. Formulas may be as short as `=2+3`, or they may use the contents of other cells, as in `=B2*C2`. The second approach is especially useful: when the quantity in `B2` changes, a properly calculated amount based on that cell can update without retyping the entire expression. The spreadsheet does not know whether your chosen cells, prices, or arithmetic represent reality. You remain responsible for accuracy.

In Lessons 1–3, you learned what spreadsheets do, how to locate a [[cell|cell]], and how to enter and format information. This lesson builds directly on those foundations. Microsoft Excel on Windows 11 provides the principal interface example. Google Sheets and LibreOffice Calc use the same basic arithmetic ideas, although settings, reference styles, language conventions, and menus can differ. All required practice uses **fictional, low-stakes data**, and every activity can be completed with paper and pencil.

**Level:** Beginner · **Estimated study time:** 90–120 minutes · **Prerequisites:** Spreadsheet Skills Lessons 1–3 recommended · **Practice equipment:** Pencil and paper, or a blank worksheet in Excel, Google Sheets, or LibreOffice Calc · **Safety:** Use only invented data in a new, disposable worksheet; do not modify another person's financial, academic, business, or medical records.

> **Essential idea:** A spreadsheet formula usually starts with `=`. Use [[cell-reference|cell references]] to connect an expression to the right inputs; check the arithmetic, the referenced cells, and the meaning of the result. **A calculated number is not automatically a correct answer.**

### Learning objectives

After completing this lesson, you should be able to:

1. Explain the difference between a typed value, a text label, a formula, and a formula's displayed result.
2. Recognize `=` as the normal start of an arithmetic formula in commonly used spreadsheet applications.
3. Use `+`, `-`, `*`, and `/` for addition, subtraction, multiplication, and division.
4. Predict the results of simple expressions, including those using parentheses and the usual order of operations.
5. Read and create formulas using ordinary cell addresses such as `B2` and `C2`.
6. Calculate a line amount from a quantity and unit price, then reconcile the full list with a hand check.
7. Describe how a formula can recalculate when its referenced inputs are changed, subject to application settings.
8. Explain what generally happens when relative references are copied down a column.
9. Recognize when an error indicator, unexpected zero, or implausible number needs investigation.
10. Distinguish mathematical correctness from choosing the correct data and business meaning.
11. Complete a six-step workflow for entering, checking, and protecting beginner formulas.

### On this page

- [1. Understanding formulas](#1-what-makes-an-entry-a-formula)
- [2. Arithmetic operators and order](#2-which-math-symbols-do-formulas-use)
- [3. Referencing other cells](#3-how-do-formulas-use-cell-references)
- [4. Building a supply worksheet](#4-how-do-you-build-a-small-calculating-worksheet)
- [5. Updating and copying formulas](#5-what-happens-when-inputs-or-formulas-change)
- [6. Checking formulas and errors](#6-how-do-you-check-formulas-and-recognize-errors)
- [7. Guided practice](#7-guided-practice-build-and-audit-simple-formulas)
- [8. Common misconceptions](#8-common-misconceptions)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. MGU Library connections and next steps](#11-mgu-library-connections-and-next-steps)

## 1. What makes an entry a formula?

A worksheet holds [[data|data]] that you enter and expressions that the spreadsheet evaluates. An ordinary entry such as `12` can be a [[numeric-value|numeric value]]. An entry such as `Pens` is [[text-value|text]]. A formula such as `=4*1.50` tells the program to perform a calculation; the formula cell normally **displays its result**, which is `6`, or `$6.00` if a suitable currency format is applied.

For beginners, the decisive visual clue is the leading `=`. It tells Excel, Sheets, and Calc that the following entry is intended to be an expression. Writing ordinary words or arithmetic symbols without `=` does not reliably create a formula.

### Compare four kinds of cell content

| Cell entry or appearance | What it means | What a user might see | Important distinction |
| --- | --- | --- | --- |
| `12` | Numeric value | `12` | A number entered directly |
| `Pens` | Text label | `Pens` | Describes an item rather than calculating |
| `=4*1.50` | Formula using numeric constants | `6` or `$6.00` | The expression is stored; the result is displayed |
| `=B2*C2` | Formula referencing other cells | Depends on `B2` and `C2` | The answer depends on referenced input cells |
| `4*1.50` | An entry without `=` | Usually text, or another interpretation | Do not assume the spreadsheet calculates it |

The text displayed in a formula cell is not always the expression that was entered. In many desktop apps, selecting that cell shows the underlying expression in the [[formula-bar|formula bar]]; supported editing or show-formula controls can also reveal it. When reviewing work, examine both the **displayed result** and the **formula that generated it**.

### The three parts of a beginner formula

Consider `=B2*C2`:

1. `=` begins the expression.
2. `B2` and `C2` are the two [[operand|operands]]—in this case, cell addresses identifying the values to use.
3. `*` is the [[operator|operator]] that means multiplication.

The formula does not contain the word *price*, *quantity*, or *cost*. Those meanings come from how the author arranged the worksheet. `=B2*C2` is appropriate only when those cells actually hold the intended quantities and prices. Choosing the wrong cells can produce a perfectly ordinary-looking but false number.

### The difference between a fixed number and a linked calculation

Suppose `B2` holds `4` and `C2` holds `1.50`. Both `=4*1.50` and `=B2*C2` produce `6`. But there is a practical difference. If you change `B2` from `4` to `6`, `=B2*C2` ordinarily becomes `9`, while `=4*1.50` remains `6` because the constant `4` has not changed. This is why [[cell-reference|cell references]] are the foundation of reusable worksheet calculations.

A formula can refer to cells in the same sheet, and more advanced formulas can refer to other sheets or files. Cross-sheet and external references add complexity and are **outside this beginner lesson**. Start with clearly labeled columns and simple references on one worksheet.

### The minimum formula-entry workflow

1. Confirm the intended output cell—such as `D2`—and whether it is empty.
2. Enter `=` followed by the expression, for example `=B2*C2`.
3. Confirm the entry using the application's ordinary method, typically Enter.
4. Read the result in the cell.
5. Select the formula cell and inspect its underlying expression where available.
6. Compare the result with a small manual calculation or another independent check.

> **Practical rule:** Know both **where the formula lives** and **which cells it reads**. They are different positions, and confusing them is a common source of spreadsheet errors.

## 2. Which math symbols do formulas use?

A spreadsheet uses familiar arithmetic, but the characters may differ from handwritten mathematics. In basic worksheet formulas, an asterisk `*` means multiplication and a forward slash `/` means division. Entering a handwritten `×` or `÷` in place of these operators is not the standard arithmetic formula syntax.

### Four arithmetic operations

| Operation | Spreadsheet symbol | Example | Expected result |
| --- | --- | --- | --- |
| Addition | `+` | `=7+5` | `12` |
| Subtraction | `-` | `=12-7` | `5` |
| Multiplication | `*` | `=4*1.50` | `6` |
| Division | `/` | `=18/3` | `6` |

The ordinary use of subtraction can also produce a negative result. For example, `=5-9` gives `-4`. A negative amount is not necessarily an error; it may represent a shortage, loss, difference, or amount below zero. Interpret the sign in context.

### Why the order of operations matters

Spreadsheet programs follow established [[order-of-operations|order-of-operations]] rules. For the basic operations covered here, **multiplication and division are performed before addition and subtraction** unless [[parentheses|parentheses]] direct a different grouping. Operations at the same precedence level are typically evaluated left to right. This means the position of parentheses can change the final number substantially.

| Formula | Steps | Result |
| --- | --- | --- |
| `=2+3*4` | Multiply `3*4`, then add `2` | `14` |
| `=(2+3)*4` | Add `2+3`, then multiply by `4` | `20` |
| `=18/3+2` | Divide `18/3`, then add `2` | `8` |
| `=18/(3+3)` | Add inside parentheses, then divide | `3` |
| `=12-4/2` | Divide `4/2`, then subtract | `10` |
| `=(12-4)/2` | Subtract first, then divide | `4` |
| `=8/4*2` | Divide `8/4`, then multiply by `2` | `4` |

For example, suppose you buy two packages at $3 each and pay a $4 flat delivery fee. `=2*3+4` produces `10`, which represents the subtotal plus delivery. `=2*(3+4)` produces `14`: that expression charges $4 delivery for **each** package. Both are valid mathematics; only one matches the stated purchasing arrangement. A formula can contain an arithmetic operation that is mathematically valid but economically inappropriate.

### Negative numbers and decimal fractions

Decimals work in basic formulas: `=7.50-2.25` evaluates to `5.25`, and `=10/4` evaluates to `2.5`. In US-style examples, the period is used as the decimal separator. Software using other [[locale|locale]] conventions may expect different keyboard input and may format numbers differently. When learning, keep your app's locale in mind rather than assuming every international worksheet uses the same notation.

### Percentages are numbers, not decoration

To calculate eight percent of a $50 amount, you may enter `=50*0.08` and obtain `4`, or use `=50*8%` where the application supports percentage literals. To calculate a price **including** an eight-percent increase, use `=50*(1+0.08)` and obtain `54`. Multiplying by `0.08` computes the increase **alone**, not the updated total.

| Question | Example formula | Correct meaning |
| --- | --- | --- |
| What is 8% of 50? | `=50*0.08` | `4`, the increase amount |
| What is 50 plus 8%? | `=50*(1+0.08)` | `54`, the increased amount |
| What is 50 minus 8%? | `=50*(1-0.08)` | `46`, the reduced amount |
| What fraction is 5 out of 20? | `=5/20` | `0.25`, which may display as `25%` |

The percentage *format* can change how `0.25` appears, but does not establish whether the numerator or denominator was chosen correctly. The next lessons examine common built-in functions and richer calculations; today the focus is arithmetic expressions that you can explain and independently verify.

### Avoid typing words or currency symbols into arithmetic expressions

Use numeric values and recognized cell references. For example, the expression `=4*1.50` is clear; `=4 pens * $1.50` is not a valid basic arithmetic expression. Put unit names such as `Pens` in text cells or headings, and apply a number format such as Currency to the *result* cell as appropriate.

> **Remember:** Parentheses express your intended calculation. If you cannot say in a sentence what a formula means, clarify the calculation before entering it.

## 3. How do formulas use cell references?

A [[cell-reference|cell reference]] identifies a cell by its column and row, such as `B2`. In the common [[a1-notation|A1 notation]], letters identify columns and numbers identify rows. A formula like `=B2+C2` means: read the numeric values located in `B2` and `C2`, add them, and show the result in the cell containing the formula.

### Follow a cell reference rather than guessing

Consider this invented two-column worksheet:

| Cell | Content | Interpretation |
| --- | --- | --- |
| `A1` | `Item` | Header label |
| `B1` | `Count` | Header label |
| `A2` | `Packs` | Item name |
| `B2` | `4` | Four packs |
| `A3` | `Boxes` | Item name |
| `B3` | `6` | Six boxes |
| `B4` | `=B2+B3` | Formula yielding `10` |

The formula in `B4` refers to `B2` and `B3`, **not** to `A2`, `A3`, or the words *Packs* and *Boxes*. The calculation works because the selected cells contain the intended numbers. If you wrote `=B2+B4` *in* `B4`, the formula would depend on its own result. That is a [[circular-reference|circular reference]], which most spreadsheet programs flag or handle according to particular calculation settings. Do not use this kind of dependency for beginner practice.

### How to read arithmetic formulas aloud

| Formula | Read it as | Verify from sample inputs |
| --- | --- | --- |
| `=B2+C2` | “B2 plus C2” | If B2=4 and C2=3, result `7` |
| `=C2-B2` | “C2 minus B2” | If C2=10 and B2=4, result `6` |
| `=B2*C2` | “B2 multiplied by C2” | If B2=4 and C2=1.50, result `6` |
| `=C2/B2` | “C2 divided by B2” | If C2=18 and B2=3, result `6` |
| `=(B2+C2)*D2` | “The sum of B2 and C2, times D2” | If B2=2, C2=3, D2=4, result `20` |

You do not need a special calculator to understand the formula: read the referenced cell values, write down the arithmetic, and compute the result. The same method helps diagnose mistakes.

### Formula cell versus input cells

A [[formula-cell|formula cell]] contains an expression. An [[input-cell|input cell]] supplies a value that the formula uses. In a good simple list, these roles are easy to distinguish from headings and placement. If `D2` has `=B2*C2`, then `D2` is the output and `B2` and `C2` are inputs. Selecting `D2` to type a new number can destroy the calculation; changing `B2` to a new quantity is generally the appropriate method for revising the transaction.

### A short note about ranges

A [[range|range]] identifies several cells, written with a colon, such as `D2:D5`. It means all cells from `D2` through `D5`, inclusive. Basic arithmetic can list separate cells directly: `=D2+D3+D4+D5`. More powerful functions can work with ranges, such as `=SUM(D2:D5)`. You will learn `SUM`, `AVERAGE`, and related functions in **Lesson 5: Common Functions**. You do not need to master any function for today's assessment.

### If a reference points to the wrong place

Spreadsheet formulas can give plausible answers even when referencing the wrong cells. Suppose you intended `=B3*C3` for a folder order but entered `=B3*C2`. If `C2` is a valid price for a different item, the formula may return an ordinary number instead of an error. The software cannot infer that you used the wrong product price. The human check is to match the *row's record* with the *formula's references*.

## 4. How do you build a small calculating worksheet?

We will use one fictional supply order throughout the rest of this lesson. It has five columns: **Item**, **Quantity**, **Unit price**, **Line amount**, and **Note**. Each data row represents one item. The [[header-row|header row]] is row 1; records begin at row 2. The currency amounts are expressed in fictional US dollars for classroom calculations.

### Source record: four kinds of supplies

| Worksheet row | A: Item | B: Quantity | C: Unit price | E: Note |
| --- | --- | --- | --- | --- |
| 2 | Pens | `4` | `1.50` | Blue ink |
| 3 | Folders | `3` | `2.25` | Plain |
| 4 | Tape | `2` | `3.40` | Small rolls |
| 5 | Labels | `5` | `0.60` | Name labels |

The source record contains **no line amounts**. You will calculate those in column D. In `A1` through `E1`, write the headings `Item`, `Quantity`, `Unit price`, `Line amount`, and `Note`. Enter the four records in rows 2–5. Column D will contain formulas rather than manually typed results.

### Put the first formula in D2

1. Confirm `B2` contains numeric `4` and `C2` contains numeric `1.50`.
2. Select `D2`. Make sure the cell is not holding anything you need to preserve.
3. Type the exact formula `=B2*C2`.
4. Confirm the entry using the application's normal method.
5. Read the displayed result: `6` or `$6.00` with suitable currency formatting.
6. Independently calculate `4 × 1.50 = 6.00` and confirm the meaning: four units at $1.50 per unit.

### Complete the four calculated rows

| Formula cell | Formula to enter | Independent arithmetic | Expected line amount |
| --- | --- | --- | --- |
| `D2` | `=B2*C2` | `4 × 1.50` | `$6.00` |
| `D3` | `=B3*C3` | `3 × 2.25` | `$6.75` |
| `D4` | `=B4*C4` | `2 × 3.40` | `$6.80` |
| `D5` | `=B5*C5` | `5 × 0.60` | `$3.00` |

Notice the repeated pattern: each formula in column D multiplies quantity in column B by unit price in column C **on the same row**. Consistent row placement makes the list easier to audit, but consistency of layout is useful only when data is accurate.

### Calculate a grand total without a built-in function

For now, enter `Total` in `A6` and place this beginner arithmetic formula in `D6`:

`=D2+D3+D4+D5`

The result should be `22.55`, or `$22.55` when shown as currency. Check it by hand:

`6.00 + 6.75 + 6.80 + 3.00 = 22.55`

| Component | Amount |
| --- | --- |
| Pens | `$6.00` |
| Folders | `$6.75` |
| Tape | `$6.80` |
| Labels | `$3.00` |
| **Expected grand total** | **`$22.55`** |

In Lesson 5, you will learn the more compact formula `=SUM(D2:D5)`, which calculates the same total for this list. There is no need to make a long addition formula when functions become familiar, but writing it now makes every ingredient of the calculation visible.

### Why the total belongs in a separate cell

Keep the original quantity and unit price entries intact. Do not replace `B2` with `6.00` just because the first line's amount is six dollars. Each column has a different purpose: quantities belong in B, prices in C, calculated line amounts in D. The separation allows someone to review the assumptions and recompute the result after a change.

### Applying display formatting

You can display money as `$6.00` without typing the dollar symbol into the formula. Apply a suitable currency number format to the relevant numeric cells, and keep your arithmetic expression numeric. If your result appears as `6` while you expected `$6.00`, that alone is **not** evidence of a calculation failure; inspect the underlying number and display format separately.

> **Quality checkpoint:** Before continuing, verify `D2:D5` individually and `D6` as the sum. Do not accept a correct grand total as proof that each individual row is right: two wrong rows can offset one another.

## 5. What happens when inputs or formulas change?

One practical advantage of cell references is that you can change an input and see the dependent formula result update. A [[dependent-cell|dependent cell]] has a formula that relies on one or more inputs. In many spreadsheet applications, calculations update automatically when a referenced value changes. However, some programs or workbooks may use [[manual-calculation|manual calculation]] settings, or may require a supported recalculation action. Always verify what actually changed rather than assuming that the displayed result is current.

### Update the quantity, not the calculated result

In the supply worksheet, suppose the group needs **six** pens instead of four. Change `B2` from `4` to `6`. Keep `C2` at `1.50`, and **do not edit** the formula in `D2`.

| Cell | Before the change | After the change | Why |
| --- | --- | --- | --- |
| `B2` | `4` | `6` | Quantity was revised |
| `C2` | `1.50` | `1.50` | Unit price was not revised |
| `D2` formula | `=B2*C2` | `=B2*C2` | Formula stays linked to inputs |
| `D2` result | `$6.00` | `$9.00` | Six at $1.50 each |
| `D6` result | `$22.55` | `$25.55` | The total rises by $3.00 |

The displayed `D2` result and `D6` total change when calculation is functioning normally. If the result does not change, check the input, formula, cell type, calculation settings, and whether you are looking at the intended worksheet. Do not treat an unrefreshed value as a reliable total.

### Copying a formula down a column

You do not always have to type each similar formula by hand. Many spreadsheet applications support [[copy-paste|copying]], [[fill-handle|fill handles]], and [[autofill|AutoFill]]. By default, ordinary references such as `B2` are [[relative-reference|relative references]]: their addresses normally adjust when a formula is copied to another position. This behavior is convenient but must be checked.

| Destination | Typical formula after copying `D2` downward | Expected result using original data |
| --- | --- | --- |
| `D2` | `=B2*C2` | `$6.00` |
| `D3` | `=B3*C3` | `$6.75` |
| `D4` | `=B4*C4` | `$6.80` |
| `D5` | `=B5*C5` | `$3.00` |

The above results assume you have returned the sample quantity in `B2` to its **original value of 4**. This matters because the exercise in the preceding section temporarily changed that number to 6. Always state which version of the input data is being used before comparing expected results.

When you copy `D2` to `D3`, the references move down one row because the destination is one row lower. Copying **rightward** may adjust column letters. Do not copy the formula in `D2` into `D6` and expect a grand total; copying that pattern into row 6 is not the same as adding the four line amounts.

### Not every reference should move

Sometimes many formulas need one shared fixed input, such as a tax-rate cell. An [[absolute-reference|absolute reference]] uses dollar signs in an address, such as `$F$2`, to keep that row and column fixed in ordinary relative copying. For example, `=D2*$F$2` could calculate eight percent of `D2` if `F2` correctly contained the numeric rate `0.08`. This is **optional orientation**, not a required skill for Lesson 4; fixed references are explored in more detail in later spreadsheet study. The dollar signs in `$F$2` are reference markers, not currency symbols.

### Copying is not the same as verifying

A copied formula may be *syntactically consistent* yet incorrect for its destination. For instance, a copied row might refer to a quantity field that contains text or a missing price. A person also might copy a range that overwrites existing entries or duplicates unintended formatting. After copying, inspect the first, middle, and final formulas; compare the referenced row to the corresponding item; and recalculate at least one result independently.

### Restoring the original example

The remainder of this lesson uses the **original** worksheet from Section 4: `B2=4`, `C2=1.50`, and a correct grand total of `$22.55`. If you tried the six-pen variation, restore `B2=4` before continuing. This keeps the activity answer keys consistent.

## 6. How do you check formulas and recognize errors?

A formula's result can be wrong in at least three ways. The expression may be written incorrectly; it may refer to the wrong [[input-cell|input cell]]; or the calculation may be numerically correct while the source information or intended meaning is wrong. Because of those possibilities, **checking formulas is more than looking for an error message**.

### Six-step quality review

1. **Confirm the purpose.** Explain in plain language what you intend to calculate: for example, “quantity multiplied by unit price.”
2. **Inspect the source.** Compare each input with the fictional source record; check numeric types, signs, decimals, and missing information.
3. **Inspect the expression.** Select the output cell and verify the actual formula, not just the displayed result.
4. **Follow the references.** Confirm that each address points to the correct item's row and appropriate column.
5. **Check the result independently.** Recalculate a sample with straightforward arithmetic; compare totals to the components.
6. **Preserve the worksheet.** Save in a deliberate place; use a safe copy before making large changes; share only with authorized people.

### Common spreadsheet error indicators

Error labels vary by application and version, but these patterns appear in many spreadsheet products:

| What you may see | Common meaning | First action to consider |
| --- | --- | --- |
| `#DIV/0!` | Division by zero or a divisor treated as zero/empty | Examine the denominator; do not hide missing data |
| `#REF!` | A referenced cell or range is invalid | Inspect formulas and recently deleted or moved cells |
| `#VALUE!` | An operation uses an unsuitable kind of value | Check for text where a number was expected |
| `#NAME?` | A name or expression is not recognized in some applications | Check spelling and formula syntax |
| `#####` | Sometimes insufficient column width or an incompatible date/time display | Widen the column and inspect value/format; not always a formula error |
| Plausible but wrong number | Wrong reference or incorrect source value | Check the intended row, column, and independent arithmetic |

An [[error-indicator|error indicator]] is a clue, not a complete diagnosis. Spreadsheet systems have different handling of blanks, text, calculations, warnings, locale-specific syntax, and display. If you are practicing in a particular application, consult that application's help rather than applying an unverified fix.

### Division by zero is not ordinary arithmetic

If `B2` is zero, the expression `=C2/B2` attempts division by zero and typically shows `#DIV/0!` rather than a valid quotient. A **blank** divisor may also cause such a warning, depending on how the app interprets it. Do not replace missing observations with zeros merely to make an error message disappear. Find out what the data is supposed to mean.

### Silent mistakes are often more dangerous than visible warnings

Consider two possible formulas for the folders line in the supply list:

- Intended: `=B3*C3`, which uses `3 × 2.25` and produces `$6.75`.
- Incorrect: `=B3+C3`, which uses `3 + 2.25` and produces `5.25`.

The second expression is a valid formula and may display without any warning. Its fault is **not syntax**; it is the wrong mathematical relationship. A simple sense check—“three folders at $2.25 each cannot cost $5.25”—catches the error.

### A result can be up to date but still false

Automatic [[recalculation|recalculation]] applies a formula to its stored inputs. If a unit price was entered as `22.50` when the source says `2.25`, recalculating quickly will not correct the mistake. Always check the source record, especially for amounts that could affect payments, inventory, scheduling, grades, or other consequential decisions. Lesson 9, **Checking Spreadsheet Errors**, develops a more complete review method.

### Formula entry and copied data require care

A pasted string beginning with `=` may be treated as a formula rather than harmless text. Do not paste untrusted spreadsheet expressions into important workbooks or import unfamiliar CSV data without checking how the app interprets it. Practice with the fictional examples here; do not execute unknown or externally supplied formulas or authorize risky external connections for a class exercise.

### Inclusive and meaningful totals

A formula that adds `D2+D3+D4+D5` correctly calculates **four** amounts. If a fifth item is added elsewhere but the total formula is not updated to include its amount, the result may omit that item. A formula also cannot determine whether an item was omitted from the source list. In a growing sheet, think about what the intended total includes. Lesson 5 introduces functions such as `SUM` that simplify adding a range, but even a well-written function needs a correctly selected range.

> **Stop-and-check rule:** If a number seems too large, too small, unchanged after an input edit, or unrelated to the intended item, do not overwrite the result with a guess. Inspect the expression and its inputs first.

## 7. Guided practice: Build and audit simple formulas

Each exercise uses fictional data. You can work on paper and use the supplied answer panels without opening any spreadsheet software. If you have Excel, Sheets, or Calc, start in a **new blank worksheet** and use only the cells specified. Do not paste examples into an active shared workbook. The activities are intentionally cumulative, but each provides enough information to be attempted independently.

### Activity 1: Tell formulas from ordinary entries (about 8–10 minutes)

Decide whether each entry is a **formula**, **direct number**, or **text or non-formula expression**. If an entry is a formula, compute its result without changing the entry itself.

| Entry | Your classification | Result if it is a formula |
| --- | --- | --- |
| `=2+3` | ________ | ________ |
| `2+3` | ________ | ________ |
| `15` | ________ | ________ |
| `=8/4` | ________ | ________ |
| `Paper` | ________ | ________ |
| `=B2*C2` | ________ | Depends on the referenced cells |

Explain why you cannot calculate the final entry from the expression alone without knowing the contents of `B2` and `C2`.

:::answer Show Activity 1 answers
1. `=2+3`: formula; result `5`.
2. `2+3`: not a standard arithmetic formula because it lacks `=`; generally treated as text or another input interpretation.
3. `15`: direct numeric entry.
4. `=8/4`: formula; result `2`.
5. `Paper`: text label.
6. `=B2*C2`: formula; the result depends on the numeric values located in `B2` and `C2`. The expression specifies *where to look*, not the numbers themselves.

:::

### Activity 2: Choose the correct operation and grouping (about 10–12 minutes)

Work out each formula using arithmetic, not a guessing method. Pay special attention to parentheses.

| Formula | Your result | What to check |
| --- | --- | --- |
| `=6+4*2` | ________ | Multiplication first |
| `=(6+4)*2` | ________ | Parentheses first |
| `=20/5+3` | ________ | Division before addition |
| `=20/(5+5)` | ________ | Addition in parentheses |
| `=7-11` | ________ | Negative result |
| `=12*0.25` | ________ | Fraction of a quantity |

Then describe in one sentence the difference between the first two expressions.

:::answer Show Activity 2 answers
| Formula | Result | Explanation |
| --- | --- | --- |
| `=6+4*2` | `14` | `4*2=8`, then `6+8=14` |
| `=(6+4)*2` | `20` | `6+4=10`, then `10*2=20` |
| `=20/5+3` | `7` | `20/5=4`, then `4+3=7` |
| `=20/(5+5)` | `2` | `5+5=10`, then `20/10=2` |
| `=7-11` | `-4` | A negative difference is possible |
| `=12*0.25` | `3` | One quarter of twelve |

The first expression adds six after multiplying four by two; the second adds six and four before doubling the sum.

:::

### Activity 3: Build the supply worksheet from source data (about 15–20 minutes)

Use the original Section 4 example. In a blank worksheet, enter these headings in cells `A1:E1`: `Item`, `Quantity`, `Unit price`, `Line amount`, `Note`. Then enter:

1. `A2=Pens`, `B2=4`, `C2=1.50`, `E2=Blue ink`.
2. `A3=Folders`, `B3=3`, `C3=2.25`, `E3=Plain`.
3. `A4=Tape`, `B4=2`, `C4=3.40`, `E4=Small rolls`.
4. `A5=Labels`, `B5=5`, `C5=0.60`, `E5=Name labels`.
5. Put the correct multiplication formula in each of `D2`, `D3`, `D4`, and `D5`.
6. Enter `Total` in `A6`; enter the four-cell addition formula in `D6`. Explain why the number in `D6` is the sum of amounts, not the sum of quantities.

Apply currency formatting only if it makes your results easier to interpret. Check that your input cells actually contain numbers rather than nonnumeric text.

:::answer Show Activity 3 expected worksheet
| Cell | Formula or source value | Expected displayed value |
| --- | --- | --- |
| `D2` | `=B2*C2` | `$6.00` |
| `D3` | `=B3*C3` | `$6.75` |
| `D4` | `=B4*C4` | `$6.80` |
| `D5` | `=B5*C5` | `$3.00` |
| `D6` | `=D2+D3+D4+D5` | `$22.55` |

The formulas multiply each item's quantity by its unit price and then add the four **monetary amounts**. Quantities use different units of merchandise and must not be mistaken for monetary line amounts.

:::

### Activity 4: Make a change and predict recalculation (about 10–15 minutes)

Start with the correct **original** worksheet from Activity 3. Predict the effect of changing `B2` from `4` to `6` while leaving `C2` and formulas in column D untouched.

1. What is the new pens line amount in `D2`?
2. What is the new grand total in `D6`?
3. What should the underlying formula in `D2` be *after* the change?
4. Why is it incorrect to type `9.00` over the formula in `D2` as a permanent update?
5. If the displayed amount stays at `$6.00`, what would you check before trusting it?
6. Restore `B2` to `4` to prepare for Activity 5.

:::answer Show Activity 4 answers
1. `D2` becomes `$9.00`: `6 × 1.50 = 9.00`.
2. `D6` becomes `$25.55`: original `$22.55` plus `$3.00`.
3. The formula stays `=B2*C2`; its inputs changed, not its expression.
4. Typing `9.00` over the formula destroys its connection to later quantity or price changes.
5. Check whether the input really changed, whether the formula still reads `=B2*C2`, whether the quantity is numeric, and whether automatic/manual calculation settings require attention.
6. With `B2=4`, `D2` returns to `$6.00` and `D6` to `$22.55` under normal calculation.

:::

### Activity 5: Copy formulas and inspect the references (about 12–15 minutes)

Start again with the original four rows. Imagine you enter `=B2*C2` in `D2` and then copy or fill that formula downward into `D3:D5` using a supported method.

1. Write the formula you expect in `D3`.
2. Write the formula you expect in `D4`.
3. Write the formula you expect in `D5`.
4. Predict the three results from the original source data.
5. Explain what would be wrong with copying the original `D2` formula unchanged *as text* into every cell without allowing ordinary reference adjustment.
6. Identify one way to confirm that the copied formulas point to the intended rows.

:::answer Show Activity 5 answers
| Destination cell | Adjusted relative-reference formula | Expected amount |
| --- | --- | --- |
| `D3` | `=B3*C3` | `$6.75` |
| `D4` | `=B4*C4` | `$6.80` |
| `D5` | `=B5*C5` | `$3.00` |

If every destination literally retained `=B2*C2`, every row would calculate the **pens** price and quantity rather than its own record. Inspect a formula cell (or the formula bar) to verify addresses, and compare each amount with a hand multiplication for that row. The way reference adjustment operates depends on the actual copy method and reference type.

:::

### Activity 6: Audit a deceptively ordinary result (about 15–20 minutes)

A fictional classmate prepares the same supply list. The source quantities and unit prices are correct, but the formulas below contain two mistakes. The worksheet shows *no obvious error labels*. Find the wrong formulas, correct them, and recompute the full total.

| Cell | Classmate's formula | Displayed result | Correct? |
| --- | --- | --- | --- |
| `D2` | `=B2*C2` | `$6.00` | ________ |
| `D3` | `=B3+C3` | `$5.25` | ________ |
| `D4` | `=B4*C5` | `$1.20` | ________ |
| `D5` | `=B5*C5` | `$3.00` | ________ |
| `D6` | `=D2+D3+D4+D5` | `$15.45` | ________ |

Use the source values from Section 4: `B3=3`, `C3=2.25`, `B4=2`, `C4=3.40`, and `C5=0.60`. The formula in `D6` is a valid sum of the *currently displayed, incorrect* line amounts. Does that make its result a dependable total? Explain.

:::answer Show Activity 6 audit findings
| Cell | Audit decision | Correct formula | Correct amount |
| --- | --- | --- | --- |
| `D2` | Correct | `=B2*C2` | `$6.00` |
| `D3` | Wrong operation: addition instead of multiplication | `=B3*C3` | `$6.75` |
| `D4` | Wrong reference: price taken from row 5 | `=B4*C4` | `$6.80` |
| `D5` | Correct | `=B5*C5` | `$3.00` |
| `D6` | Addition formula is structurally correct, but receives wrong inputs until D3/D4 are fixed | `=D2+D3+D4+D5` | `$22.55` |

Before correction, `D6` calculated `6.00+5.25+1.20+3.00=15.45` accurately **from incorrect line results**. This demonstrates why a grand total can be mathematically consistent but substantively false. After the two upstream formulas are repaired, the same total formula gives `$22.55`.

:::

### Practice reflection and optional extension

Without looking back, explain why `D3` needs `=B3*C3`, what happens if `C3` changes from `2.25` to `2.50`, and how you would detect a wrong reference in a copied formula. The new folder amount would be `$7.50` and the new grand total would be `$23.30` if all other original values remain unchanged; those are **extension results**, not part of the main answer key. Restore the original sample data after experimenting.

A learner without spreadsheet software can complete all six activities on paper. The goal is to reason about calculations and references, not to memorize where a particular version of an app places its icons.

## 8. Common misconceptions

### “Any arithmetic expression is automatically a formula.”

In Excel, Sheets, and Calc, a beginner arithmetic formula ordinarily starts with `=`. The expression `4*2` without the leading equal sign is not a reliable way to request a calculation.

### “The numbers shown in the cell are the full formula.”

A formula cell usually displays its **result**, not the underlying expression. To audit it, inspect the formula bar or a supported show-formulas view.

### “A formula with no error indicator must be correct.”

An incorrect reference or the wrong operator can return an ordinary number. Comparing the output with the intended meaning and source data is necessary.

### “Multiplication uses the letter x.”

Standard basic formula syntax uses `*` for multiplication, as in `=B2*C2`.

### “Division uses the handwritten division sign.”

Use `/` for standard spreadsheet division, as in `=12/3`.

### “Spreadsheet formulas always run strictly from left to right.”

Basic multiplication and division have higher precedence than addition and subtraction. Parentheses can change that order.

### “Parentheses only make a formula easier to read.”

Parentheses can change the answer. Compare `=2+3*4` with `=(2+3)*4`.

### “Typing over a calculated result updates the formula.”

Typing a literal value into the formula cell commonly **replaces** the formula, breaking its ability to recalculate from the original inputs.

### “A formula using a fixed number is always wrong.”

A formula such as `=4*1.50` is valid. A referenced expression such as `=B2*C2` is often more adaptable when inputs may change.

### “If one input changes, every cell changes.”

Only cells whose formulas depend on the changed input (directly or indirectly) should be affected by its recalculation. Other cells may remain unchanged.

### “The screen always updates immediately after I edit a number.”

Many sheets calculate automatically, but manual calculation settings and application-specific behavior can prevent immediate updates. Verify the result.

### “Copying a formula always keeps its references identical.”

Ordinary relative references adjust when copied to other locations. Absolute and mixed references behave differently; the method of moving or copying can matter.

### “Dollar signs in `$F$2` mean the cell contains money.”

In that address, dollar signs mark an absolute row and column reference. Currency formatting is a separate concept.

### “A total that adds all displayed amounts is necessarily correct.”

The inputs can contain mistakes, and the chosen formula can omit records. A valid sum is not proof of accurate data.

### “A zero and a blank cell always mean the same thing.”

Zero is a known numerical value. A blank may mean not recorded or unknown. Treating missing values as zeros can conceal problems.

### “`#DIV/0!` means the whole spreadsheet is ruined.”

It usually indicates a particular division problem. Investigate the offending formula and data instead of deleting unrelated records.

### “Currency formatting changes the mathematics.”

A currency display usually changes appearance. `6` and `$6.00` can represent the same underlying numeric result.

### “A spreadsheet knows which cells represent quantities and prices.”

It reads the addresses in the formula; users supply the context through accurate headings and data placement.

### “A completed quiz proves my real-world budgets are correct.”

Practice confirms beginner concepts, not the validity of a separate real-world budget or source records. Important decisions require independent verification.

## 9. Essential vocabulary

Select a dotted-underlined term earlier in the lesson to see a short definition in the MGU dashboard when supported. The alphabetical-style entries below remain readable without any interactive features. The final `:::terms` block contains the corresponding machine-readable tooltip definitions. A definition and a real application are more important than memorizing symbols in isolation.

### Worksheet structure and information

- **Spreadsheet:** A grid-based application or document used to organize and calculate information.
- **Workbook:** A spreadsheet file that can include multiple sheets, particularly in Excel.
- **Worksheet:** A single grid of rows and columns within a spreadsheet file.
- **Row:** A horizontal sequence of cells, generally identified by a number.
- **Column:** A vertical sequence of cells, generally identified by letters.
- **Cell:** One addressable location in a worksheet grid.
- **Active cell:** The cell currently selected for input or editing.
- **Cell reference:** An address such as `B2` that identifies a cell.
- **A1 notation:** A common convention that writes the column letter before the row number.
- **Range:** A collection of cells such as `D2:D5`, inclusive.
- **Header row:** A row of labels naming the columns of a list.
- **Record:** A related group of fields describing one item, often one worksheet row.
- **Field:** A category of information represented by a column.
- **Data:** Recorded facts or observations used by the worksheet.
- **Source record:** The information against which entered values can be checked.
- **Numeric value:** A number stored in a form normally usable by arithmetic.
- **Text value:** Characters stored as labels or descriptions rather than quantities.
- **Input cell:** A cell containing information used by a calculation.
- **Formula cell:** A cell containing a calculated expression.
- **Stored value:** The underlying data or result, which may be displayed with a different format.

### Formulas and operations

- **Formula:** An expression instructing the spreadsheet to calculate, usually beginning with `=`.
- **Equals sign:** The character `=` that normally begins a spreadsheet formula.
- **Operator:** A symbol such as `+`, `-`, `*`, or `/` specifying an arithmetic action.
- **Operand:** A value or reference on which an operator acts.
- **Constant:** A literal number entered inside an expression, such as `4` in `=4*1.50`.
- **Addition:** Combining numbers with `+`.
- **Subtraction:** Finding a difference with `-`.
- **Multiplication:** Finding a product with `*`.
- **Division:** Finding a quotient with `/`.
- **Order of operations:** The rules controlling which operations are evaluated first.
- **Precedence:** A rule assigning priority to one operation over another.
- **Parentheses:** Grouping symbols `(` and `)` that can change the order of evaluation.
- **Expression:** A combination of numbers, references, and operations evaluated to a result.
- **Result:** The value returned after an expression is evaluated.
- **Line amount:** A calculated amount for one row, often quantity multiplied by unit price.
- **Grand total:** The combined amount from a selected group of line amounts.
- **Percentage:** A proportion measured per hundred; `0.08` represents 8 percent.
- **Unit price:** The price associated with one unit of an item.
- **Currency format:** Display rules making a number appear as money.
- **Decimal separator:** The character used to distinguish whole and fractional portions of a number.
- **Locale:** Language and regional settings influencing number conventions.
- **Formula bar:** An area that can show or edit the active cell's underlying entry.
- **Recalculation:** Updating formula results when inputs or calculation settings require it.
- **Dependent cell:** A cell whose expression relies on another value or cell.
- **Automatic calculation:** A mode that ordinarily recalculates as inputs change.
- **Manual calculation:** A mode in which results may not refresh until calculation is requested.

### References, copying, and auditing

- **Relative reference:** A cell address that normally adjusts when copied to another position.
- **Absolute reference:** A reference such as `$F$2` with fixed row and column indicators.
- **Copy and paste:** A way of duplicating or moving information using an application's supported controls.
- **Fill handle:** A spreadsheet control often used to copy formulas or continue patterns.
- **AutoFill:** Automatic copying or continuation of a formula or series.
- **Undo:** Reversal of a supported recent action.
- **Error indicator:** A visible message or symbol suggesting the formula cannot produce an expected result.
- **`#DIV/0!`:** A common error indicating an attempted division by zero or a zero-like denominator.
- **`#REF!`:** A common error indicating an invalid reference.
- **`#VALUE!`:** A common error indicating a value type unsuitable for a calculation.
- **`#NAME?`:** An error in some products indicating an unrecognized name or syntax.
- **Circular reference:** A calculation that depends on its own cell, directly or through other formulas.
- **Independent check:** A calculation or review that does not simply trust the original formula.
- **Reasonableness check:** Judging whether a numerical answer makes sense given the situation.
- **Data consistency:** Comparable meaning and data types across records.
- **Audit:** A systematic review of expressions, source records, and results.
- **Version history:** Earlier file states retained by an application when supported.
- **Save:** Preserve the current workbook or changes according to the application's storage method.
- **Sharing permission:** A rule determining who can view or modify a spreadsheet.
- **Formula injection:** The risk that an imported or pasted string is interpreted as a formula rather than plain text.

## 10. Knowledge check

Choose **one answer** for each question. Select **Check answers** in the MGU lesson dashboard to see your score and explanations when the quiz feature is available. The quiz uses invented, low-stakes examples and requires no user accounts or personal information. An expandable answer key appears immediately below for paper-based learners. The quiz tests formula concepts—not certification that a real-life budget has been audited.

:::quiz
? What character ordinarily begins a basic arithmetic formula in Excel, Google Sheets, and Calc?
- [x] The equals sign (=)
- [ ] The ampersand (&)
- [ ] The at sign (@)
! A leading equal sign normally tells these applications to interpret the entry as a formula.

? Which of the following is a formula rather than a simple typed number?
- [ ] =20+22
- [x] 42
- [ ] Pens
! The expression beginning with = asks the worksheet to compute 20 plus 22.

? What result should =4*1.50 produce?
- [ ] 5.50
- [ ] 6
- [x] 4.50
! An asterisk means multiplication: four times one and a half is six.

? What operator is used for subtraction in a beginner arithmetic formula?
- [x] -
- [ ] /
- [ ] *
! The minus sign subtracts one number from another.

? What does the symbol * mean in =B2*C2?
- [ ] Multiply the two values
- [x] Divide the two values
- [ ] Create a note
! The asterisk is the standard multiplication operator.

? What does / mean in =18/3?
- [ ] Multiply
- [ ] Divide
- [x] Add
! The forward slash is used for basic division.

? What is the result of =2+3*4?
- [x] 14
- [ ] 20
- [ ] 24
! Multiply three times four before adding two.

? What is the result of =(2+3)*4?
- [ ] 20
- [x] 14
- [ ] 12
! Parentheses require the addition first; five times four is twenty.

? Which expression gives the amount of an 8% increase on $50, without adding the original $50?
- [ ] =50/0.08
- [ ] =50*0.08
- [x] =50*(1+0.08)
! Fifty times 0.08 equals four dollars of increase only.

? In =B2*C2, what does B2 identify?
- [x] A particular worksheet cell
- [ ] The second workbook
- [ ] A formatting choice
! B is the column and 2 is the row in common A1 notation.

? If B2=4 and C2=1.50, what is the displayed numerical result of =B2*C2?
- [ ] 6
- [x] 1.50
- [ ] 4
! The formula reads both cells and multiplies four by 1.50.

? Which formula correctly adds the four line amounts in cells D2 through D5 without using a function?
- [ ] =D2+D5
- [ ] =D2+D3+D4+D5
- [x] =D2*D3*D4*D5
! All four intended line amounts must be included in the addition.

? How much should the folders line cost when its quantity is 3 and its unit price is 2.25?
- [x] $6.75
- [ ] $5.25
- [ ] $3.25
! Three times 2.25 equals 6.75, not the addition result 5.25.

? What is the correct grand total for the original four-item practice worksheet?
- [ ] $22.55
- [x] $25.55
- [ ] $15.45
! The original line amounts 6.00, 6.75, 6.80, and 3.00 sum to 22.55.

? If B2 changes from 4 to 6 while C2 stays 1.50, what should the correctly recalculated D2 amount be?
- [ ] $7.50
- [ ] $9.00
- [x] $6.00
! Six items at 1.50 each cost 9.00.

? What is normally the best way to revise a quantity used by a formula?
- [x] Edit the intended quantity input cell
- [ ] Replace the calculated result with a guess
- [ ] Delete the whole worksheet
! Preserve the formula and change the source quantity it uses.

? What normally happens when the relative-reference formula =B2*C2 in D2 is copied one row down to D3?
- [ ] It becomes =B3*C3
- [x] It becomes =B2*C2 with fixed addresses
- [ ] It becomes =B4*C4
! Relative addresses normally shift one row when copied down one row.

? Why should a copied formula be reviewed after filling down a column?
- [ ] Formatting always disappears
- [ ] It can point to an unintended cell despite looking plausible
- [x] Every copied formula is automatically corrupted
! Copying is useful but does not verify the intended source data or row relationships.

? What is the purpose of parentheses in =(B2+C2)*D2?
- [x] Require the addition to occur before multiplication
- [ ] Change the result cell to text
- [ ] Delete references
! Parentheses group operations so the sum is calculated first.

? What does the expression =5-9 yield?
- [ ] -4
- [x] 4
- [ ] 0
! Subtracting a larger number from a smaller number produces a negative result.

? Which error often appears when a formula divides by zero?
- [ ] #NAME?
- [ ] #DIV/0!
- [x] #REF!
! #DIV/0! commonly signals division by zero or a zero-like divisor.

? What should you check first when a valid-looking formula gives an implausible amount?
- [x] Its operator, cell references, and source inputs
- [ ] Only the font size
- [ ] The wallpaper on the computer
! Silent mistakes are found by auditing the calculation and the data it reads.

? In the supply exercise, why is =B3+C3 wrong for the folders' line amount?
- [ ] It adds quantity to price instead of multiplying
- [x] It uses the wrong worksheet
- [ ] It cannot produce a number
! A line amount is quantity multiplied by unit price.

? What does the reference D2:D5 describe?
- [ ] Exactly two cells, D2 and D5
- [ ] All cells from D2 through D5
- [x] A subtraction operation
! A colon between addresses denotes an inclusive range of cells.

? What is a formula cell?
- [x] A cell storing an expression used to calculate a result
- [ ] Only a cell formatted in bold
- [ ] A row heading
! A formula cell contains the expression; it normally displays its calculated result.

? What can make a correct formula return an incorrect business result?
- [ ] A mistyped or incorrect price input
- [x] A correctly chosen source record
- [ ] Currency formatting alone
! A formula faithfully processes inputs, even if those inputs are inaccurate.

? In an address such as $F$2, what do the dollar signs indicate?
- [ ] The result is already formatted as currency
- [ ] The column and row are marked as fixed references
- [x] The cell must store a dollar amount
! Dollar signs in reference syntax anchor a row or column when copying.

? Which statement about recalculation is most accurate?
- [x] Many sheets recalculate automatically, but settings may affect updates
- [ ] All spreadsheets always recalculate instantly in every mode
- [ ] Formula results never change after entry
! Verify current results; some applications or workbooks use manual calculation.

? A total formula adds four incorrect line amounts without an error message. What can you conclude?
- [ ] The addition may be correct but the underlying amounts still need review
- [x] The total is definitely trustworthy
- [ ] Every source record is complete
! A mathematically correct sum can aggregate wrong or incomplete inputs.

? What is a safe practice for learning formulas?
- [ ] Replace a real business workbook's formulas to see what happens
- [ ] Use a new disposable worksheet with fictional values and verify results
- [x] Import a stranger's unknown spreadsheet and enable all connections
! Low-stakes practice avoids damaging important records or running untrusted expressions.

:::

:::answer Show the quiz answer key with explanations
1. **A. The equals sign (=).** A leading equal sign normally tells these applications to interpret the entry as a formula.
2. **B. 42.** The expression beginning with = asks the worksheet to compute 20 plus 22.
3. **C. 4.50.** An asterisk means multiplication: four times one and a half is six.
4. **A. -.** The minus sign subtracts one number from another.
5. **B. Divide the two values.** The asterisk is the standard multiplication operator.
6. **C. Add.** The forward slash is used for basic division.
7. **A. 14.** Multiply three times four before adding two.
8. **B. 14.** Parentheses require the addition first; five times four is twenty.
9. **C. =50*(1+0.08).** Fifty times 0.08 equals four dollars of increase only.
10. **A. A particular worksheet cell.** B is the column and 2 is the row in common A1 notation.
11. **B. 1.50.** The formula reads both cells and multiplies four by 1.50.
12. **C. =D2*D3*D4*D5.** All four intended line amounts must be included in the addition.
13. **A. $6.75.** Three times 2.25 equals 6.75, not the addition result 5.25.
14. **B. $25.55.** The original line amounts 6.00, 6.75, 6.80, and 3.00 sum to 22.55.
15. **C. $6.00.** Six items at 1.50 each cost 9.00.
16. **A. Edit the intended quantity input cell.** Preserve the formula and change the source quantity it uses.
17. **B. It becomes =B2*C2 with fixed addresses.** Relative addresses normally shift one row when copied down one row.
18. **C. Every copied formula is automatically corrupted.** Copying is useful but does not verify the intended source data or row relationships.
19. **A. Require the addition to occur before multiplication.** Parentheses group operations so the sum is calculated first.
20. **B. 4.** Subtracting a larger number from a smaller number produces a negative result.
21. **C. #REF!.** #DIV/0! commonly signals division by zero or a zero-like divisor.
22. **A. Its operator, cell references, and source inputs.** Silent mistakes are found by auditing the calculation and the data it reads.
23. **B. It uses the wrong worksheet.** A line amount is quantity multiplied by unit price.
24. **C. A subtraction operation.** A colon between addresses denotes an inclusive range of cells.
25. **A. A cell storing an expression used to calculate a result.** A formula cell contains the expression; it normally displays its calculated result.
26. **B. A correctly chosen source record.** A formula faithfully processes inputs, even if those inputs are inaccurate.
27. **C. The cell must store a dollar amount.** Dollar signs in reference syntax anchor a row or column when copying.
28. **A. Many sheets recalculate automatically, but settings may affect updates.** Verify current results; some applications or workbooks use manual calculation.
29. **B. The total is definitely trustworthy.** A mathematically correct sum can aggregate wrong or incomplete inputs.
30. **C. Import a stranger's unknown spreadsheet and enable all connections.** Low-stakes practice avoids damaging important records or running untrusted expressions.

:::

### Exit task: Explain a formula in your own words

Without viewing the lesson text, complete each prompt:

1. A spreadsheet formula usually begins with ________.
2. I would type ________ to multiply the number in `B2` by the number in `C2`.
3. If the quantity changes, I should edit the ________ rather than overwrite the formula's displayed result.
4. The formula `=2+3*4` evaluates to ________, while `=(2+3)*4` evaluates to ________.
5. Before trusting a result, I will check the ________, the ________, and the ________.

:::answer Show exit task sample responses
1. `=` (equals sign).
2. `=B2*C2`.
3. Input cell, such as `B2`.
4. `14` and `20`.
5. The intended operation, the referenced cells, and the accuracy of source input values; also compare at least one result independently.

:::

## 11. MGU Library connections and next steps

This lesson completes the introductory transition from **entering information** to **calculating with information**. Before proceeding, you should be able to read a formula aloud, identify its inputs and output, anticipate how an input change affects the result, and conduct a quick accuracy check. You do not need advanced spreadsheet terminology to do that reliably.

### MGU course connections

- [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) — the course sequence and navigation.
- [Lesson 1: What Is a Spreadsheet?](/department/computer-science/basic-computer-skills/spreadsheet-skills/what-is-a-spreadsheet/) — why people organize information in spreadsheets.
- [Lesson 2: Rows, Columns, and Cells](/department/computer-science/basic-computer-skills/spreadsheet-skills/rows-columns-and-cells/) — how to locate and reference information.
- [Lesson 3: Entering and Formatting Data](/department/computer-science/basic-computer-skills/spreadsheet-skills/entering-and-formatting-data/) — entering numbers and keeping display distinct from stored values.
- [Lesson 5: Common Functions](/department/computer-science/basic-computer-skills/spreadsheet-skills/common-functions/) — next: built-in functions including `SUM`, `AVERAGE`, `MIN`, and `MAX`.
- [Lesson 9: Checking Spreadsheet Errors](/department/computer-science/basic-computer-skills/spreadsheet-skills/checking-spreadsheet-errors/) — later: fuller error-checking methods.

### Official application guides

- [Microsoft Support: Create a simple formula in Excel](https://support.microsoft.com/en-us/excel/create-a-simple-formula-in-excel) — arithmetic formulas and cell references.
- [Microsoft Support: Use Excel as your calculator](https://support.microsoft.com/en-us/excel/get-started/use-excel-as-your-calculator) — addition, subtraction, multiplication, and division.
- [Microsoft Support: Overview of formulas in Excel](https://support.microsoft.com/en-us/excel/get-started/overview-of-formulas-in-excel) — formula components and references.
- [Microsoft Support: Calculation operators and precedence in Excel](https://support.microsoft.com/en-us/excel/calculation-operators-and-precedence-in-excel) — calculation order and parentheses.
- [Microsoft Support: How to avoid broken formulas in Excel](https://support.microsoft.com/en-us/excel/how-to-avoid-broken-formulas-in-excel) — troubleshooting and formula review.
- [Google Docs Editors Help: Add formulas and functions in Google Sheets](https://support.google.com/docs/answer/46977?hl=en) — formula entry and calculations in Sheets.
- [LibreOffice Help: Calculating With Formulas](https://help.libreoffice.org/latest/en-US/text/scalc/guide/formulas.html) — arithmetic expressions and precedence in Calc.

These guides are supplemental. Interface commands and examples may change as applications evolve. Use the verified help documentation for the software actually installed on your device.

### Continue the Spreadsheet Skills course

[← Previous lesson: Entering and Formatting Data](/department/computer-science/basic-computer-skills/spreadsheet-skills/entering-and-formatting-data/) · [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) · [Next lesson: Common Functions →](/department/computer-science/basic-computer-skills/spreadsheet-skills/common-functions/)

> **Lesson completion checklist:** I can distinguish a formula from a value; enter `+`, `-`, `*`, and `/`; use parentheses correctly; explain the difference between source inputs and a calculated output; build a four-row supply list; enter and inspect `=B2*C2`; recalculate after an input change; understand copied relative references; recognize several error warnings; and check the source and meaning of a result before using it.

:::terms
spreadsheet | Spreadsheet | A grid-based document or application for storing, organizing, and calculating information. | 
workbook | Workbook | A spreadsheet file that may contain one or more worksheets. | 
worksheet | Worksheet | A single grid of rows and columns in a spreadsheet file. | 
row | Row | A horizontal series of worksheet cells, usually labeled by number. | 
column | Column | A vertical series of worksheet cells, usually labeled by letters. | 
cell | Cell | An addressable location at a row-column intersection. | 
active-cell | Active cell | The currently selected cell for an entry or editing action. | 
cell-reference | Cell reference | An address such as B2 identifying a cell to read or use. | 
a1-notation | A1 notation | A reference style using column letters followed by row numbers, such as C4. | 
range | Range | An inclusive group of cells written with addresses such as D2:D5. | 
header-row | Header row | A row of labels identifying the purpose of worksheet columns. | 
record | Record | A group of related fields describing an item, often laid out on one row. | 
field | Field | A category of information typically represented by one column in a list. | 
data | Data | Information recorded for storage, organization, calculation, or analysis. | 
source-record | Source record | Original information used to verify values entered in a worksheet. | 
numeric-value | Numeric value | A number recorded in a form ordinarily available for arithmetic. | 
text-value | Text value | Characters stored as labels, descriptions, or nonnumeric information. | 
input-cell | Input cell | A cell providing a value used by a formula. | 
formula-cell | Formula cell | A cell containing an expression that calculates a result. | 
stored-value | Stored value | A cell’s underlying value, which may differ in appearance from its display. | 
formula | Formula | A spreadsheet expression usually beginning with = and calculating a result. | 
equals-sign | Equals sign | The = character normally used to start a spreadsheet formula. | 
operator | Operator | A symbol representing a calculation such as +, -, *, or /. | 
operand | Operand | A number, expression, or reference on which an operator acts. | 
constant | Constant | A literal value written directly into a formula, such as 4 in =4*1.50. | 
addition | Addition | Combining numeric amounts with +. | 
subtraction | Subtraction | Finding the difference between values with -. | 
multiplication | Multiplication | Finding a product using the * operator. | 
division | Division | Finding a quotient using the / operator. | 
order-of-operations | Order of operations | Rules determining the sequence in which arithmetic operations are evaluated. | 
precedence | Precedence | Priority determining which operation is evaluated first. | 
parentheses | Parentheses | Grouping symbols ( ) that can control the order of evaluation. | 
expression | Expression | A combination of numbers, references, and operators evaluated for a result. | 
result | Result | The value returned by evaluating a formula. | 
line-amount | Line amount | A calculated amount for one worksheet row, often quantity multiplied by price. | 
grand-total | Grand total | A combined amount for a defined collection of line items. | 
percentage | Percentage | A proportion per hundred; 0.08 is eight percent. | 
unit-price | Unit price | The cost of one unit of a specified item. | 
currency-format | Currency format | A numeric display style for monetary amounts. | 
decimal-separator | Decimal separator | A mark distinguishing whole and fractional number parts. | 
locale | Locale | Regional and language settings affecting number and date conventions. | 
formula-bar | Formula bar | A control that may show or edit a selected cell’s underlying contents. | 
recalculation | Recalculation | Updating computed results using current inputs and calculation settings. | 
dependent-cell | Dependent cell | A cell whose formula relies on the contents of other cells. | 
automatic-calculation | Automatic calculation | A mode in which results ordinarily update when referenced inputs change. | 
manual-calculation | Manual calculation | A mode in which formulas may require an explicit calculation action to refresh. | 
relative-reference | Relative reference | A cell reference whose row/column ordinarily adjusts when copied elsewhere. | 
absolute-reference | Absolute reference | A cell reference anchored by dollar signs, such as $F$2. | 
copy-paste | Copy and paste | Supported operations for duplicating or transferring cell contents. | 
fill-handle | Fill handle | A control often used to repeat formulas or continue a pattern. | 
autofill | AutoFill | A spreadsheet feature that copies or extends entries and formulas. | 
undo | Undo | A supported method of reversing a recent operation. | 
error-indicator | Error indicator | A sign or message suggesting a formula or value cannot be processed as expected. | 
div-zero-error | #DIV/0! | A common spreadsheet warning for division by zero or a blank-like divisor. | 
ref-error | #REF! | A common spreadsheet warning for an invalid reference. | 
value-error | #VALUE! | A common spreadsheet warning for an incompatible kind of value. | 
name-error | #NAME? | An error in some spreadsheet products for an unrecognized name or formula syntax. | 
circular-reference | Circular reference | A formula dependency that loops back to the original formula cell. | 
independent-check | Independent check | A review or calculation performed without simply trusting the original output. | 
reasonableness-check | Reasonableness check | Judging whether a result is plausible given the known situation. | 
data-consistency | Data consistency | Comparable meaning and appropriate types across a set of data records. | 
audit | Audit | A deliberate examination of sources, formulas, references, and results. | 
version-history | Version history | Earlier states of a file preserved by a supported application. | 
save | Save | Preserve changes in the intended file or storage location. | 
sharing-permission | Sharing permission | An access rule governing who may view or edit the spreadsheet. | 
formula-injection | Formula injection | Risk that a pasted or imported text entry is interpreted as a formula. | 

:::
