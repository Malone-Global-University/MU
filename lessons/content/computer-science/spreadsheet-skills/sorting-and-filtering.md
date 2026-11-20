Basic Computer Skills / Spreadsheet Skills

## Lesson 6: Sorting and Filtering

A community learning center keeps a short spreadsheet listing supplies requested for upcoming workshops. One staff member needs to locate all items marked **Ready**. Another needs to put requests in order from smallest to largest quantity. A third wants to review only **Supplies** entries without deleting or rewriting anything. All three tasks concern the same records, but they require different operations: **sorting** changes the order of the records; **filtering** changes which records are displayed.

This lesson builds on Spreadsheet Skills Lessons 1–5. You should already recognize a [[worksheet|worksheet]], [[row|row]], [[column|column]], [[cell|cell]], [[header-row|header row]], and [[cell-range|cell range]], and understand that numbers, text, and dates have different underlying data types. Here you learn to organize a list without separating related information or mistaking a hidden record for a deleted one. These are fundamental skills for office lists, project tracking, inventory, schedules, and ordinary personal organization.

Microsoft Excel is the principal desktop example. Google Sheets and LibreOffice Calc provide comparable sorting and filtering features, although menu labels, capabilities, collaboration behavior, and screen layouts can differ. The six activities use **fictional entries**; you may complete them on paper or in a disposable practice copy. Never use a working payroll, student, medical, financial, or inventory system as a classroom experiment.

**Level:** Beginner · **Estimated study time:** 100–135 minutes · **Prerequisites:** Spreadsheet Skills Lessons 1–5 recommended · **Practice equipment:** Paper and pencil or a blank workbook in Excel, Google Sheets, or LibreOffice Calc · **Safety:** Use invented data, save a practice copy before changing order, and do not sort only one column of a multi-column record.

> **Essential idea:** **Sort** to rearrange complete records; **filter** to show only records meeting a condition. Always confirm the selected data range, preserve the relationship between fields in each row, and verify what remains visible before reaching a conclusion.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain the difference between sorting and filtering in plain language.
2. Identify a complete [[data-table|data table]], its heading row, columns, and individual records.
3. Recognize ascending and descending order for ordinary text, numeric values, and dates.
4. Sort an entire multi-column dataset without separating item names from their quantities or statuses.
5. Explain the purpose of a header row and why it normally should not be sorted as an ordinary record.
6. Apply and clear a simple filter for a category or status.
7. Explain that filtering ordinarily hides nonmatching rows from view without deleting source records.
8. Use two filter criteria to narrow the visible records and distinguish **AND** from **OR** logic at a beginner level.
9. Interpret a multilevel sort in which one field determines the main order and another breaks ties.
10. Recognize why numeric-looking text, inconsistent dates, blank cells, and unexpected range boundaries can produce misleading results.
11. Explain a practical way to restore the original sequence and recognize the limitations of Undo.
12. Complete six guided activities and check an organized list against its original records.

### On this page

- [1. Understanding organized records](#1-what-information-is-being-organized)
- [2. Sorting a list](#2-what-does-sorting-do)
- [3. Safely sorting complete records](#3-how-do-you-sort-a-list-safely)
- [4. Filtering a list](#4-what-does-filtering-do)
- [5. Combining conditions and multiple sort keys](#5-how-do-you-use-more-than-one-condition)
- [6. Checking results and troubleshooting](#6-how-do-you-check-sorts-and-filters)
- [7. Guided practice](#7-guided-practice-organize-a-small-list)
- [8. Common misconceptions](#8-common-misconceptions)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. MGU Library connections and next steps](#11-mgu-library-connections-and-next-steps)

## 1. What information is being organized?

A spreadsheet can contain a calculated summary or a list of individual observations. Sorting and filtering are most useful when the information is organized as a [[dataset|dataset]]: one heading row identifies the kinds of information, and each following row holds one [[record|record]] about an item or event. A column is a [[field|field]] describing one property shared across records.

### A six-record practice list

Use the following invented worksheet for all of the examples in this lesson. Its cell range is `A1:F7` if entered beginning at cell A1. The **Requested** column represents dates in the year 2026, written in ISO form for clarity (`YYYY-MM-DD`).

| Row | A: Request ID | B: Item | C: Category | D: Quantity | E: Requested | F: Status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Request ID | Item | Category | Quantity | Requested | Status |
| 2 | P-101 | Notebook | Supplies | 12 | 2026-11-02 | Ready |
| 3 | P-102 | USB cable | Electronics | 4 | 2026-11-04 | Pending |
| 4 | P-103 | Pencil | Supplies | 30 | 2026-11-01 | Ready |
| 5 | P-104 | Mouse | Electronics | 7 | 2026-11-03 | Ready |
| 6 | P-105 | Folder | Supplies | 5 | 2026-11-05 | Pending |
| 7 | P-106 | Keyboard | Electronics | 9 | 2026-11-06 | Ready |

The leftmost **Row** numbers above are instructional references, not part of the six-column spreadsheet dataset. In a real worksheet, row numbers normally appear outside the cells as part of the application interface; you should not enter this explanatory **Row** column. Start the spreadsheet in `A1` with **Request ID**, not with the word **Row**.

Every request has a stable identifier, so **P-103** means the Pencil record even if that record moves from worksheet row 4 to another row after a sort. The position, such as `B4`, is a [[cell-address|cell address]]; it describes where information is currently located, not the permanent identity of the request.

### Recognize the parts of a list

| Term | In the practice list | Why it matters |
| --- | --- | --- |
| Header row | `A1:F1` contains column names | Helps the application and reader identify fields |
| Record | All values across `A4:F4` belong to P-103 | The values must remain together when sorted |
| Field | Column D contains quantities | A sort or filter can use this property |
| Data range | `A1:F7` includes headings and six records | The operation should cover the intended list |
| Unique identifier | P-101 through P-106 | Lets you compare results with source records |
| Data type | Quantity is numeric; Requested is a date | Affects meaningful ordering and comparisons |
| Original order | P-101, P-102, P-103, P-104, P-105, P-106 | Can be preserved deliberately if later needed |

### Why the structure matters

Suppose someone sorts column D, Quantity, but leaves columns A, B, C, E, and F unmoved. A row could falsely report that a Notebook has quantity `4` even though its recorded quantity was `12`. The worksheet would look orderly, yet it would now associate values with the wrong requests. Sorting is not only a display task: for ordinary in-place sorting it can change which records occupy particular worksheet rows.

> **Record integrity rule:** When a row describes a single item, person, transaction, or event, the entire record should travel together when the list is sorted. Before applying an operation, check that **all relevant fields** are included.

### What sorting and filtering do not do

Neither operation automatically proves the information is correct. They do not fix misspelled categories, reconcile duplicate requests, establish the truth of a status, or authorize sharing private information. A clean and accurately entered source list is the foundation. These tools only rearrange or display the records according to the criteria provided.

## 2. What does sorting do?

[[sorting|Sorting]] arranges records in a specified [[sort-order|sort order]] using one or more columns. Common choices are [[ascending-order|ascending order]] and [[descending-order|descending order]]. Depending on the values, these often mean A-to-Z versus Z-to-A, smallest-to-largest versus largest-to-smallest, or earliest-to-latest versus latest-to-earliest. Exact handling of punctuation, case, blanks, and mixed data can vary by application and its settings.

### One field, two directions

| Kind of value | Ascending order (typical) | Descending order (typical) | Beginner check |
| --- | --- | --- | --- |
| Names and labels | A to Z | Z to A | Are spellings consistent? |
| Numbers | Smallest to largest | Largest to smallest | Are entries actual numbers? |
| Dates | Oldest to newest | Newest to oldest | Are entries recognized as dates? |
| Times | Earliest to latest | Latest to earliest | Are times stored consistently? |
| Categories | Alphabetical group order | Reverse alphabetical group order | Does the grouping help the question? |

For example, to find requests with the smallest quantities first, sort by **Quantity** in ascending order. The six requests then appear in this sequence:

| New position | Request ID | Item | Quantity | Explanation |
| --- | --- | --- | --- | --- |
| 1 | P-102 | USB cable | 4 | Smallest quantity |
| 2 | P-105 | Folder | 5 | Next |
| 3 | P-104 | Mouse | 7 | Next |
| 4 | P-106 | Keyboard | 9 | Next |
| 5 | P-101 | Notebook | 12 | Next |
| 6 | P-103 | Pencil | 30 | Largest quantity |

The Quantity column determines the sequence, but **all six fields** in each record must remain attached to their Request ID. The values `4, 5, 7, 9, 12, 30` look orderly because they are numeric, not because the cell display is visually attractive.

### Descending order answers a different question

Sorting the same Quantity values from **largest to smallest** would produce P-103 (30), P-101 (12), P-106 (9), P-104 (7), P-105 (5), then P-102 (4). Both directions are valid, but their usefulness depends on the task. For quick review of the largest requests, descending is more convenient.

### Sorting does not necessarily preserve the old order

Sorting a normal data range often rearranges the rows in the sheet. You may be able to reverse it immediately using [[undo|Undo]], but Undo history can disappear when the file is closed or after later actions. Sorting in the opposite direction does **not** necessarily restore the original order, especially if entries had duplicate sort values. A safer approach is to preserve an untouched source copy or add an **Original position** field (1, 2, 3, ...), including that column in every sort. To restore the initial sequence, sort the complete range by that saved position field.

### What if two quantities are equal?

Two records with the same quantity are tied under a single Quantity sort. Do not assume that all applications will place tied records in a predictable or preserved sequence. You can add a second sort field, such as Request ID, to make the order more explicit. This is called a [[multilevel-sort|multilevel sort]] or sorting by multiple keys. We will practice that later.

## 3. How do you sort a list safely?

The essential workflow is: **prepare a safe copy → inspect the list → select the complete range or recognized table → identify headings → choose the sort field and direction → inspect the records afterward**. Exact controls vary by software, but these decisions are transferable.

### Before using the Sort command

1. Open a **practice copy** of the list. If using a live file, save an authorized copy or ask the responsible owner before making changes.
2. Find the true boundaries of the table. For our example, the intended cells are `A1:F7`; do not accidentally omit column F or include unrelated notes below the list.
3. Confirm there is **one header row** and six data records. Headings such as **Quantity** and **Requested** should not be treated as data values.
4. Check that each field has a consistent meaning: D contains actual quantities, E contains recognized dates, and F contains status labels spelled consistently.
5. Watch for blank rows, merged cells, stray values outside the apparent dataset, or adjacent unrelated tables that may confuse automatic range detection.
6. Decide which question the sort should answer and whether you need to preserve the original record sequence.

### Typical Microsoft Excel workflow

With the practice list open, select a cell inside the recognized data region or deliberately select the complete table `A1:F7`. From **Data**, use a Sort control. In the Sort dialog or equivalent, confirm the correct column (**Quantity**), an ascending order, and that the first row is a header when appropriate. If Excel warns that you selected only part of a larger adjacent range, check its suggestion carefully; for this exercise, the entire intended record should be included. When using a single-column selection rather than a properly defined table, **do not** choose to continue sorting only that column if it would detach quantities from their items.

Some Excel versions also provide quick **A to Z** and **Z to A** options, which work with numbers and dates as well as text. Quick controls are convenient only when you are confident that the intended entire data region and headers will be recognized correctly. For a beginner, the explicit Sort dialog is often easier to audit.

### Google Sheets and LibreOffice Calc

Google Sheets provides **Data → Sort range** with options for whether the data has a header, and sheet-level sorting options. The distinction matters: sorting an entire sheet can affect more than the intended small list. Select a deliberately bounded data range and check its headings before proceeding. Google Sheets also supports filters and filter views; those controls serve different display purposes from an unrestricted in-place sort.

LibreOffice Calc provides **Data → Sort**, where you choose a sort key and order and inspect options such as headings and range selection. Calc also provides **Data → AutoFilter** for displaying selected records. The principle remains the same: review the complete record range rather than trusting a highlighted single column.

### The selection warning you should recognize

| Situation | Risk | Recommended action |
| --- | --- | --- |
| Only D2:D7 is selected | Quantities may move without their corresponding items | Stop and include all fields belonging to the records |
| Header row treated as a record | “Quantity” might be placed among numbers | Use the correct header setting or exclude heading from data |
| Table range ends at column E | Status values may no longer match requests | Expand to the intended final field F |
| Notes are directly beneath the list | Automatic selection may include unrelated text | Deliberately inspect table boundaries |
| An empty row separates records | Automatic detection may stop early | Determine intended data range before sorting |
| Merged cells occur in the list | Some sort operations may be blocked or behave unexpectedly | Repair layout in a practice copy; avoid merged data cells |
| Another collaborator is editing | An in-place reorder can disrupt shared work | Coordinate, use an appropriate private view, or use a copy |

### Verify the sort after completing it

Read the Quantity column top to bottom: it should be `4, 5, 7, 9, 12, 30`. Then check several stable Request IDs: **P-102** must still be a USB cable with quantity 4, and **P-103** must still be a Pencil with quantity 30 and status Ready. Counting six records is necessary but not sufficient: rows can become mismatched without reducing the number of rows.

> **Never confuse a neat-looking list with a verified list.** Sorting one detached field can produce perfectly ordered numbers attached to the wrong labels.

## 4. What does filtering do?

[[filtering|Filtering]] limits the records **shown on screen** according to a rule, called a [[filter-criterion|filter criterion]]. In a normal in-place filter, records that do not match remain in the dataset but are temporarily hidden from the displayed results. Filtering is useful for asking questions such as “Show only requests marked Ready” or “Show only Electronics items.” It is not the same as [[deletion|deletion]], and it does not by itself correct, validate, or permanently remove excluded entries.

### A filter changes visibility, not the underlying facts

Return to the original six-record list. Apply a Status filter that displays only **Ready**:

| Request ID | Item | Category | Quantity | Status |
| --- | --- | --- | --- | --- |
| P-101 | Notebook | Supplies | 12 | Ready |
| P-103 | Pencil | Supplies | 30 | Ready |
| P-104 | Mouse | Electronics | 7 | Ready |
| P-106 | Keyboard | Electronics | 9 | Ready |

Four records are visible; **P-102** and **P-105** have not been deleted. Their statuses are **Pending**, so they fail the Ready filter. If you clear this filter, the complete six-record list should become visible again, assuming no other filters or manual hiding conditions remain.

### How to apply a basic status filter

1. In a practice copy, verify the complete list and its header row.
2. Select an ordinary cell in the list or the intended range; in Excel use **Data → Filter** (or recognized table header controls). Google Sheets uses **Data → Create a filter**; Calc offers **Data → AutoFilter**.
3. Look for filter controls associated with the header row.
4. Open the filter for **Status**, deselect unwanted values as appropriate, and choose **Ready**.
5. Apply the filter and inspect the visible Request IDs, not just the number of rows displayed.
6. To return to a broader view, use the application's **clear filter** control or reselect all values. Removing the filter mechanism and clearing a particular condition are related but **not identical** commands across applications.

### Filters can be based on more than text

| Filter type | Example question | Example condition | Caution |
| --- | --- | --- | --- |
| Text or category | Which requests are Ready? | Status equals Ready | Spelling differences can split categories |
| Numeric | Which quantities are at least 10? | Quantity ≥ 10 | Values stored as text may not compare numerically |
| Date | Which requests were made after November 3? | Requested later than 2026-11-03 | Ensure the cells are dates, not inconsistent text |
| Blank / nonblank | Which requests lack an entry? | Status is blank | Blank is not the same as the word Pending |
| Selection of values | Which are Supplies or Electronics? | Category in selected set | Choosing both known categories shows all six here |

For the practice list, a **Quantity at least 10** filter should show **P-101 (12)** and **P-103 (30)**. A **Pending** filter should show **P-102** and **P-105**. If you receive a different set, review data types, headers, criteria, and the range.

### Visibility can affect calculations and copying

A filtered list may appear to contain fewer rows, but ordinary formulas such as `=SUM(D2:D7)` can still include values from rows hidden by filters, depending on the function and application. Do not assume a visible subtotal or copied selection contains only displayed records. Some applications offer functions or selection tools specifically intended for visible rows, but those are beyond this lesson's essential requirements. Verify any report or copied output before sharing it.

> **Operational rule:** “Not visible under the current filter” does **not** mean “does not exist in the workbook.” State the applied criteria whenever you interpret or share a filtered view.

## 5. How do you use more than one condition?

In a real list, questions are often more precise than “Ready?” A team might ask: **Which Supplies requests are Ready?** Or: **Put Electronics requests first and show the largest quantities first within each category.** These two questions require different combinations of sorting and filtering.

### Combine filters across different columns

Apply a filter for `Category = Supplies` and another for `Status = Ready`. The remaining visible requests are:

| Request ID | Item | Category | Quantity | Status |
| --- | --- | --- | --- | --- |
| P-101 | Notebook | Supplies | 12 | Ready |
| P-103 | Pencil | Supplies | 30 | Ready |

These are records that satisfy **both** conditions. In standard filtering workflows, active criteria on different columns commonly work like logical [[and-condition|AND]]: the row must meet each column's restriction. By contrast, selecting **Ready** *or* **Pending** within the same Status list commonly includes rows matching either selected value, a basic [[or-condition|OR]] choice. More advanced custom filter logic can differ, so always inspect the resulting records.

| Question | Common logic | Expected Request IDs |
| --- | --- | --- |
| Show Electronics items | Category = Electronics | P-102, P-104, P-106 |
| Show Pending requests | Status = Pending | P-102, P-105 |
| Show Supplies **and** Ready | Category = Supplies AND Status = Ready | P-101, P-103 |
| Show Quantity at least 10 | Quantity ≥ 10 | P-101, P-103 |
| Show Ready **or** Pending | Status in {Ready, Pending} | All six records |
| Show Electronics **and** Ready | Category = Electronics AND Status = Ready | P-104, P-106 |

### Multilevel sorts: choose primary and secondary keys

A [[sort-key|sort key]] is the field whose values determine the order. With a [[primary-sort-key|primary key]] and a [[secondary-sort-key|secondary key]], the application first groups or orders records by the primary field; where primary values tie, the secondary key determines order within that group. Here, we choose **Category: A to Z**, followed by **Quantity: largest to smallest**.

| Position | Request ID | Category | Quantity | Why this record appears here |
| --- | --- | --- | --- | --- |
| 1 | P-106 | Electronics | 9 | Electronics group; largest quantity |
| 2 | P-104 | Electronics | 7 | Electronics group; next |
| 3 | P-102 | Electronics | 4 | Electronics group; smallest quantity |
| 4 | P-103 | Supplies | 30 | Supplies group; largest quantity |
| 5 | P-101 | Supplies | 12 | Supplies group; next |
| 6 | P-105 | Supplies | 5 | Supplies group; smallest quantity |

A common beginner mistake is expecting *all* quantities to appear in descending order even after Category has become the primary key. Here, 30 appears **after** 4 because Category takes precedence. Within each category, the quantities descend correctly. The second sort key applies where the first sort key is tied, not across every record regardless of category.

### When a filter and a sort are used together

Suppose you want only Ready requests, ordered by descending Quantity. First define the intended range and filter for `Status = Ready`, then sort the relevant displayed records by Quantity using the application's supported procedure, while checking that complete records remain connected. The visible sequence should be **P-103 (30), P-101 (12), P-106 (9), P-104 (7)**. Depending on the application and whether you are using an ordinary filter, a table, or a filter view, sorting may affect the underlying worksheet order or a view's presentation. Do not assume another collaborator sees the same order or selection.

### Shared files and filter views

An ordinary filter in a shared workbook may change the visible experience for other collaborators, depending on the product and feature in use. Google Sheets offers **filter views** that can help someone examine their own sorting and filtering criteria without imposing the same current view on others. Other applications provide their own view or table features. These options are useful, but they do not replace the need for permission to access or edit the data. In any shared file, understand whether you are changing the saved source order, a shared filter, or a private display.

## 6. How do you check sorts and filters?

The greatest practical risk is reaching a confident conclusion from an incomplete, mismatched, or unexpectedly restricted view. The following checks take little time compared with correcting a faulty report.

### A six-question quality review

1. **Scope:** Did I select the complete intended table, including all columns that belong to each record?
2. **Headers:** Was the heading row recognized, and was it kept out of the sorted data?
3. **Meaning:** Is the chosen field the one that answers the question, with the correct direction or condition?
4. **Data types:** Are quantities numeric and dates real date values, rather than text that merely looks similar?
5. **Completeness:** Are some rows hidden by an active filter, manual hiding, or a prior view condition?
6. **Integrity:** Do stable identifiers still match the correct descriptions, quantities, dates, and statuses?

### Common symptoms and practical responses

| Symptom | Possible reason | Safe response |
| --- | --- | --- |
| Item names no longer match quantities | Only one field was sorted | Stop using the result; Undo if safe or restore the verified source copy |
| A header is mixed into the result | Header was included as an ordinary record | Correct heading setting and review the selection |
| `12` appears before `4` in an unexpected numeric sort | Values may be stored as text or types are mixed | Inspect stored types; correct data in an authorized copy |
| Dates appear in an odd order | Some dates are text, ambiguous, or invalid | Inspect actual values and date interpretation |
| Expected rows seem missing | One or more filters or hidden rows remain active | Clear relevant conditions and review row visibility |
| Only two of six records are visible | A restrictive filter may be active | Read the filter criteria and verify expected IDs |
| The original order is lost | Sorting moved data and no restoration field was saved | Use an untouched source copy or known original-position field |
| Two identical primary sort values switch order | Only one sort key defines the order | Add a secondary key, such as Request ID |
| A filter shows no results | No records match, or criteria/types/spacing differ | Check the condition and entries before concluding the set is empty |
| Results change while another person edits | Collaborative data or view changed | Confirm version, access, and shared-view behavior |

### Two separate mistakes: hidden records and missing records

There is an important difference between **a record hidden by a filter** and **a record omitted from the source table**. Clear the filter to test the first problem; compare against an authorized source list, count records, or inspect the data range to diagnose the second. Clearing a filter cannot restore something that was deleted or never entered.

### Sorting text and dates requires interpretation

A spreadsheet can display `5` and `12` with the same visual alignment, yet one may be text and the other numeric. Some tools sort mixed types in separate groups or use application-specific ordering rules; do not promise that text “numbers” will behave like numbers. Dates also require care. In many spreadsheets, a recognized date is stored as a date/serial value even if displayed as `2026-11-03`; a literal text string may look identical but behave differently. Check the format and underlying value when sorting is unexpected.

### Save the meaning of the view

When sharing a screenshot or writing a summary of a filtered dataset, include the criteria. Compare “There are two requests” with “There are **two Ready requests in the Supplies category** among the six recorded requests.” The second statement describes the actual selection. A filtered list does not necessarily show all available records, and a sorted list is not a ranking of importance unless the chosen sort criterion meaningfully represents importance.

### Practical recovery strategy

For low-stakes practice, Undo is appropriate if the action was just performed and the application still retains that step. For important work, prefer a verified source copy, version history available to authorized users, or an Original position column created *before* sorting. Do not try to fix an unverified mismatch by sorting one detached column again. That may create a second error rather than repair the first.

### Additional checks: date order and filter visibility

When the original six requests are sorted by **Requested** from earliest to latest, the order is shown below. This provides a second concrete way to test that an application is comparing recognized dates rather than treating them as arbitrary text.

| Requested date | Request ID | Item | Check |
| --- | --- | --- | --- |
| 2026-11-01 | P-103 | Pencil | Earliest date |
| 2026-11-02 | P-101 | Notebook | Next date |
| 2026-11-03 | P-104 | Mouse | Next date |
| 2026-11-04 | P-102 | USB cable | Next date |
| 2026-11-05 | P-105 | Folder | Next date |
| 2026-11-06 | P-106 | Keyboard | Latest date |

The same original source also makes it possible to audit the number of visible records when applying different filters. This comparison distinguishes the full dataset from a subset.

| Active criterion | Visible requests | Count | Hidden by criterion |
| --- | --- | --- | --- |
| None | P-101 through P-106 | 6 | 0 |
| Status = Ready | P-101, P-103, P-104, P-106 | 4 | 2 |
| Status = Pending | P-102, P-105 | 2 | 4 |
| Category = Electronics | P-102, P-104, P-106 | 3 | 3 |
| Supplies AND Ready | P-101, P-103 | 2 | 4 |

### Decide whether the record relationship is trustworthy

| Verification question | Evidence to inspect | What failure could mean |
| --- | --- | --- |
| Do all six Request IDs still exist? | Count distinct IDs in the source | Records were excluded, overwritten, or omitted |
| Does P-104 still mean Mouse quantity 7? | Compare with the original row | Columns might have been sorted independently |
| Does P-103 still have status Ready? | Compare the full record | A field may be disconnected or edited |
| Are displayed record counts consistent with filters? | Read every active condition | A previous criterion may remain in effect |
| Is the order intentional and documented? | Read primary/secondary sort keys | A secondary key may be mistaken for the main key |

## 7. Guided practice: Organize a small list

Complete the activities on paper or inside your own temporary practice workbook. Start with the **original six records** from Section 1 for each separate activity unless directed otherwise. If you use software, practice on a copy and confirm results by Request ID. Buttons and menus may differ by application; learning to describe the intended operation is more important than memorizing a single icon.

### Activity 1: Identify the table before changing it (10–15 minutes)

1. Copy the six-record list into cells `A1:F7` or refer to the table in Section 1.
2. Identify the heading row and name the six fields.
3. Circle or list the six stable Request IDs.
4. Explain what could happen if you sorted only `D2:D7` instead of the complete records.
5. Identify how you would recognize P-103 after it moves to a different worksheet row.

:::answer Show Activity 1 sample responses
1. The worksheet range is `A1:F7`, with headings in row 1 and six records in rows 2–7.
2. Fields: Request ID, Item, Category, Quantity, Requested, and Status.
3. P-101, P-102, P-103, P-104, P-105, and P-106.
4. Quantities could be reassigned to the wrong requests because the other columns do not move with them.
5. Find its stable Request ID, P-103, and verify its item Pencil, quantity 30, and status Ready.
:::

### Activity 2: Sort smallest to largest without separating records (15–20 minutes)

1. Make a clean practice copy of the original list.
2. Select the full data region (or a recognized table) and check that the headings remain headings.
3. Sort by **Quantity**, from smallest to largest.
4. Write the order of the six Request IDs; do not copy Quantity alone.
5. Verify the smallest and largest items by checking their original IDs and values.
6. Explain how you would return to the original sequence.

:::answer Show Activity 2 expected result
Ascending Quantity order: **P-102 (4), P-105 (5), P-104 (7), P-106 (9), P-101 (12), P-103 (30)**. The USB cable is smallest and the Pencil is largest by recorded quantity. To restore the original sequence, use a previously saved original-position field or a verified untouched copy; Undo may help immediately when available.
:::

### Activity 3: Filter for Ready and restore all records (10–15 minutes)

1. Start from the unmodified six-record source copy.
2. Turn on the filter controls for the header row of the complete list.
3. Choose only **Ready** in the Status field.
4. Write down every visible Request ID and count them.
5. Identify the Pending requests that are temporarily hidden.
6. Clear the Status criterion and check that all six source records can be displayed again.

:::answer Show Activity 3 expected result
Ready entries: **P-101, P-103, P-104, and P-106** (four records). Pending entries hidden by that filter: **P-102 and P-105**. Clearing the filter condition should allow all six records to reappear if no other hiding conditions remain. No records should have been deleted.
:::

### Activity 4: Use two filter conditions (15–20 minutes)

1. Begin with the original six records and clear any prior filters.
2. Apply `Category = Supplies`.
3. Record how many entries match the category.
4. Add `Status = Ready` as a second restriction.
5. Write the remaining Request IDs and explain why the Pending Folder request is excluded.
6. Clear one condition at a time; note how the visible selection broadens.

:::answer Show Activity 4 expected result
There are **three Supplies** records: P-101 (Notebook), P-103 (Pencil), and P-105 (Folder). Applying `Status = Ready` as well leaves **P-101 and P-103**. P-105 is Supplies but has Pending status, so it does not satisfy both criteria. Clearing only the Status filter returns three Supplies; clearing both returns all six.
:::

### Activity 5: Choose primary and secondary sort keys (15–20 minutes)

1. Begin again with all six records visible.
2. Set **Category** to ascending (A–Z) as the primary sort key.
3. Set **Quantity** to descending (largest to smallest) as the secondary key.
4. Record the three Electronics requests in the order they should appear.
5. Record the three Supplies requests in the order they should appear.
6. Explain why P-103 (quantity 30) appears after P-102 (quantity 4) in the combined list.

:::answer Show Activity 5 expected result
Electronics first: **P-106 (9), P-104 (7), P-102 (4)**. Supplies second: **P-103 (30), P-101 (12), P-105 (5)**. Category is the primary key, so the Electronics group appears before the Supplies group. Quantity controls only the order **within** those groups.
:::

### Activity 6: Diagnose a risky sort and report a filtered result (15–20 minutes)

Review this imaginary scenario: a classmate selects only the six values in the Quantity column, sorts them ascending, and then says the Mouse request is for 12 items. A second classmate filters for Ready and concludes that the two Pending records have been removed from the spreadsheet.

1. Identify the error in the first classmate's method.
2. Explain why the Mouse should still have quantity **7**.
3. Identify the second classmate's misunderstanding.
4. Write a one-sentence summary of the Ready results that states the filter criterion and the record count.
5. Describe a safe way to recover the data if the first sort was already applied.
6. State one check to perform before copying the result into a report.

:::answer Show Activity 6 sample responses
1. The first classmate sorted the Quantity column separately from the other fields, which can break record associations.
2. P-104 identifies the Mouse, and its original recorded quantity is 7 regardless of worksheet row position.
3. The two Pending records are hidden by a Ready filter, not automatically deleted.
4. “Among six recorded requests, four are marked Ready: P-101, P-103, P-104, and P-106.”
5. Stop using the damaged list; use Undo if it remains valid or restore from the untouched source/version copy. Do not guess which shifted quantity belongs to which request.
6. Confirm the selected range, active filters, record IDs, and agreement with the source values before reporting.
:::

### Optional paper-only worksheet

If a spreadsheet application is unavailable, use the empty fields below to record the answers before opening each activity's expandable sample solution.

| Activity | Your response | Check to perform |
| --- | --- | --- |
| 1. Identify range and records | __________________________ | Six IDs, six fields, one header row |
| 2. Ascending Quantity | __________________________ | Every quantity stays with its ID |
| 3. Ready filter | __________________________ | Four Ready records; six total source records |
| 4. Supplies AND Ready | __________________________ | Two matching records |
| 5. Category + Quantity sort | __________________________ | Electronics first; then Supplies |
| 6. Explain the errors | __________________________ | Separate visibility from deletion |

> **Practice safety:** Do not enter names, addresses, account numbers, proprietary work records, or actual personnel data. Working with fictional rows is enough to learn the feature and to demonstrate correct reasoning.

## 8. Common misconceptions

### “Sorting a single column always sorts the whole table.”

Not necessarily. Automatic range detection may help, but it is not a substitute for inspecting your selection and any warning. If one field moves independently, the records can become inaccurate. Keep all columns associated with a record together.

### “Sorting and filtering mean the same thing.”

No. Sorting arranges records into an order; filtering displays records that meet specified conditions. It is possible to filter a list and then sort the visible records, but those operations answer different questions.

### “Filtering for Ready deletes Pending records.”

No. Standard filters generally hide nonmatching rows rather than remove them. Clear the condition and check the full source list before reporting that any record has been deleted.

### “If two items have the same amount, their relative order is guaranteed.”

Do not rely on an unspecified order for tied values. Add a secondary key such as Request ID when a stable or clearly defined presentation order matters.

### “Sorting Z to A will always restore the original row order.”

No. Reverse alphabetical or numeric order is not the same as the original input order. Use an Original position field, untouched source copy, or an available Undo/history feature.

### “A number-looking value must sort numerically.”

Not necessarily. A cell can display digits while holding text. Mixed data types, whitespace, and regional settings can affect the comparison and the resulting order.

### “A filter showing zero matches proves the records never existed.”

No. The filter condition may be too restrictive or applied to an incomplete range; spelling differences or data types may also matter. Clear the filter and inspect the underlying source before concluding that records are absent.

### “The total of a filtered list always excludes hidden rows.”

Not necessarily. A standard sum can include values hidden by filtering. Choose an appropriate visible-only calculation when needed and verify the result against visible records.

### “The header row should be alphabetized along with data.”

Usually not. Header names identify the fields and belong at the top. Correct the header setting before sorting; otherwise the word “Quantity” may be placed among values.

### “It is safe to experiment on a shared spreadsheet because Undo exists.”

Undo may be limited, and shared changes can affect others. Use a practice copy or an appropriate individual view when authorized, and coordinate any changes to the shared original.

### Quick decision guide

| If you want to... | Use... | Verify... |
| --- | --- | --- |
| See requests from smallest to largest | Sort Quantity ascending | Full records move together |
| See only Ready requests | Filter Status = Ready | Other statuses remain in source |
| See Ready Supplies | Filter Category and Status | Both restrictions are active |
| Group by category and order quantities | Two-key sort | Correct key precedence |
| Return all records to view | Clear relevant filters | No other hiding conditions remain |
| Restore original source sequence | Original position or verified source copy | Every ID matches its original fields |
| Determine if data disappeared | Clear filters and check source | Visibility is not confused with existence |

## 9. Essential vocabulary

The terms with dotted underlines earlier in the lesson use the MGU dashboard's linked-term convention. Selecting one may display a brief definition. The glossary below is useful even without interactive controls. The final `:::terms` block provides definitions for the vocabulary panel; encyclopedia links are included only when the target is confirmed.

### Structure and meaning

- **Spreadsheet:** A grid-based file or application for organizing, calculating, or reviewing information.
- **Workbook:** A spreadsheet file that can contain multiple worksheets.
- **Worksheet:** A tab containing a grid of cells.
- **Row:** A horizontal line of cells, normally identified by a number.
- **Column:** A vertical line of cells, normally identified by a letter.
- **Cell:** The intersection of a row and a column.
- **Cell address:** A location such as D4 in a worksheet.
- **Cell range:** A continuous group of cells, such as A1:F7.
- **Dataset:** The collection of records being reviewed.
- **Data table:** An organized grid with identified fields and records.
- **Header row:** A row of descriptive column names above data records.
- **Record:** Related information about one item or observation, often across one row.
- **Field:** A type of information represented by a particular column.
- **Request ID:** A stable identifier for one request in the lesson's example.
- **Data type:** How a cell's underlying content is interpreted, such as number, text, or date.
- **Data integrity:** The accuracy and consistency of relationships between values.

### Sorting and order

- **Sorting:** Rearranging complete records according to selected values and direction.
- **Sort order:** The specified sequence used to arrange records.
- **Ascending order:** Commonly A to Z, smallest to largest, or oldest to newest.
- **Descending order:** Commonly Z to A, largest to smallest, or newest to oldest.
- **Sort key:** The field used to determine ordering.
- **Primary sort key:** The first field considered during a multilevel sort.
- **Secondary sort key:** A later field used to order records tied on an earlier key.
- **Multilevel sort:** Sorting by two or more keys in priority order.
- **Tie:** When records have equal values for a chosen sort field.
- **Original order:** The sequence records occupied before reorganization.
- **Original position:** A saved ordering value that can help reconstruct that sequence.
- **Selection:** The cells or range currently designated for an operation.
- **Expand selection:** A spreadsheet option that may include adjacent columns in an action.
- **Undo:** Reversing a recent operation while the relevant history remains available.
- **Version history:** A feature that may allow authorized users to inspect or recover earlier document states.

### Filtering and visibility

- **Filtering:** Limiting displayed records to those satisfying selected conditions.
- **Filter:** A feature used to apply record-display conditions.
- **Filter criterion:** A requirement used to decide whether a row is shown.
- **Active filter:** A currently applied restriction on visible records.
- **Clear filter:** Remove a particular filter condition or all conditions according to the software control.
- **Filter control:** A menu or button attached to a field for adjusting display criteria.
- **Visible row:** A row currently shown under the worksheet's view and filter settings.
- **Hidden row:** A row not displayed, whether by a filter or another hiding mechanism.
- **Nonmatching record:** A record that fails one or more active filter criteria.
- **AND condition:** A combination requiring all stated conditions to be met.
- **OR condition:** A combination requiring at least one stated option to be met.
- **Filter view:** A saved or temporary viewing configuration, often useful for individual review in collaborative tools.
- **Shared view:** A view or filtering state potentially affecting multiple collaborators.
- **Deletion:** Removal of data or records; distinct from filtering.

### Checking data quality

- **Numeric value:** Data stored as a number and generally suitable for numeric comparison.
- **Numeric-looking text:** Characters that resemble digits but are stored as text.
- **Date value:** Content interpreted by the spreadsheet as a date.
- **Text value:** Content stored as writing or labels.
- **Blank cell:** A cell without an entered value.
- **Consistent entry:** Values entered according to the same conventions in a given field.
- **Data validation:** Checks or restrictions that can help prevent unsuitable entries.
- **Range boundary:** The first and last rows or columns included in an operation.
- **Mismatch:** A wrong association between fields in a record.
- **Quality check:** A deliberate test of data, range, operation, and result.
- **Source copy:** An unchanged reference to compare against later edits.
- **Reconciliation:** Checking a modified or summarized list against original source records.
- **Subtotal:** A calculated figure covering a defined subset rather than the full dataset.
- **Record count:** Number of records in a defined set or view.
- **Formula:** An expression used to calculate a result from data.
- **Collaboration:** Multiple authorized people accessing or editing related work.
- **Reporting context:** The criteria, source, and scope needed to interpret a result.

## 10. Knowledge check

Select **one answer** for each question. If the MGU dashboard supports the interactive quiz, use **Check answers** to view the score and explanations. A complete answer key follows for paper-only review. These questions refer to the invented six-request dataset; no real account or identifying information is required.

:::quiz
? What does sorting primarily do to a list?
- [x] Rearranges records by the values in chosen fields
- [ ] Deletes records that do not match a criterion
- [ ] Converts every text cell into a number
! Sorting defines a record order; it is not deletion or a type conversion.

? What does filtering primarily do?
- [ ] Permanently removes all nonmatching records
- [x] Shows records that satisfy chosen conditions
- [ ] Renames columns in alphabetical order
! A standard filter changes which records are shown without deleting the nonmatching source rows.

? What is the purpose of the header row?
- [ ] Serve as another request record to sort with the data
- [ ] Guarantee that all quantities are accurate
- [x] Identify what information each column contains
! The headings label the fields and should normally be treated separately from data records.

? Which range contains the complete six-field practice list including headings?
- [x] A1:F7
- [ ] D2:D7
- [ ] A1:C7
! A1:F7 covers the header and all six records across the six relevant columns.

? What is the main danger of sorting only column D in the practice list?
- [ ] The application automatically deletes all dates
- [x] Quantities may become attached to the wrong requests
- [ ] Every request ID changes into a formula
! A detached column sort can corrupt the association between the fields belonging to one record.

? Which Request ID comes first when Quantity is sorted smallest to largest?
- [ ] P-103, the Pencil with quantity 30
- [ ] P-101, the Notebook with quantity 12
- [x] P-102, the USB cable with quantity 4
! Four is the smallest recorded quantity, and it belongs to P-102.

? Which request comes first in descending Quantity order?
- [x] P-103, the Pencil with quantity 30
- [ ] P-102, the USB cable with quantity 4
- [ ] P-105, the Folder with quantity 5
! Descending numeric order starts with the largest value, 30.

? Which Request IDs are visible after filtering Status to Ready?
- [ ] P-102 and P-105
- [x] P-101, P-103, P-104, and P-106
- [ ] P-101, P-102, and P-103
! Four requests have status Ready in the original list.

? What happens to the Pending rows under an ordinary Ready filter?
- [ ] They are automatically and irreversibly deleted
- [ ] Their status is changed to Ready
- [x] They remain in the source data but are hidden from the filtered view
! Filtering hides the nonmatching rows; it does not automatically change or delete those records.

? How many requests have Status equal to Pending?
- [x] Two: P-102 and P-105
- [ ] Four: P-101, P-103, P-104, P-106
- [ ] Six: every request in the list
! P-102 and P-105 are the two Pending requests.

? Which requests satisfy Category = Supplies AND Status = Ready?
- [ ] P-101, P-103, and P-105
- [x] P-101 and P-103
- [ ] P-104 and P-106
! The Notebook and Pencil requests meet both conditions; the Folder is Pending.

? What happens if you select both Ready and Pending in the Status filter on this list?
- [ ] Only the two Pending records match
- [ ] No records can match because the values are different
- [x] All six records match one of those status values
! A selected-values filter normally includes any record with a value in the selected set.

? Which requests have Quantity at least 10?
- [x] P-101 and P-103
- [ ] P-102 and P-105
- [ ] P-104 and P-106
! The two qualifying quantities are 12 and 30.

? What does a secondary sort key do?
- [ ] Replaces every request ID with a new value
- [x] Orders records whose primary-key values are tied
- [ ] Always takes priority over the first sort key
! A secondary key acts within groups defined by the earlier sort key.

? With Category A–Z first and Quantity descending second, what is the Electronics order?
- [ ] P-102, P-104, P-106
- [ ] P-103, P-101, P-105
- [x] P-106, P-104, P-102
! The Electronics quantities are 9, 7, and 4 when sorted in descending order.

? In that two-key sort, why does P-103 (30) appear after P-102 (4)?
- [x] Because Category is the primary key, and Supplies follows Electronics
- [ ] Because 30 is numerically smaller than 4
- [ ] Because filtered rows must always be last
! Alphabetical Category grouping has priority; Quantity orders only within each category.

? Which preparation helps you later restore the exact original sequence?
- [ ] Sort Z–A and assume that reverses every earlier edit
- [x] Save an Original position field or an untouched source copy
- [ ] Remove all headings before the first sort
! An explicitly saved position value or verified source allows reconstruction of input order.

? Why is relying only on Undo risky for restoring an important list?
- [ ] Undo always deletes the entire worksheet
- [ ] Undo can never reverse a sort even immediately
- [x] Undo history may not remain available after later work or reopening
! Undo can be useful shortly after an action but may be unavailable after later steps or reopening.

? A displayed 12 sorts unexpectedly among text entries rather than numbers. What should you check?
- [x] Whether the cell stores numeric-looking text instead of a numeric value
- [ ] Whether the item name contains twelve letters
- [ ] Whether the header text is bold
! Stored types influence comparisons; visual appearance alone does not establish a numeric value.

? Dates appear in a surprising sort sequence. What is a sensible first check?
- [ ] Whether every date is displayed in a different font color
- [x] Whether all date entries are recognized dates with consistent interpretation
- [ ] Whether the final row has a longer item name
! Mixed text dates and actual date values can cause unexpected ordering.

? How do you normally show all six records again after filtering for Ready?
- [ ] Delete the four Ready records
- [ ] Sort Quantity descending twice
- [x] Clear the relevant filter criteria and check for other hidden rows
! Clearing filters restores eligible rows to view; other hiding mechanisms may still apply.

? Which statement distinguishes a hidden record from a missing source record?
- [x] A filter can hide an existing record, but clearing it cannot restore a deleted record
- [ ] Hidden and deleted always mean the same thing
- [ ] Deleted records are automatically visible after any sort
! Visibility and existence are different properties of a dataset.

? What is an effective check after an ascending Quantity sort?
- [ ] Look only at the font sizes of the new first and last rows
- [x] Verify the ordered values and confirm each Request ID still matches its item and quantity
- [ ] Assume a correct-looking number order proves record integrity
! The order must be correct and the relationships between record fields must remain accurate.

? How can you reliably identify a request after sorting changes its row number?
- [ ] By its original cell address alone
- [ ] By the color of a nearby empty cell
- [x] By its stable Request ID
! A stable identifier stays associated with the record even if its worksheet row position changes.

? What is a sensible practice for experimenting in a shared workbook?
- [x] Use an authorized practice copy or suitable personal view and coordinate shared changes
- [ ] Assume every sort is private and cannot affect others
- [ ] Change the production list and rely on collaborators to fix it
! Shared filters and in-place sorts may affect other collaborators; protect original work.

? Which report sentence makes the filter context clear?
- [ ] There are exactly four requests in the workbook
- [x] Four of the six requests are marked Ready
- [ ] All requests were completed because only four are visible
! A report should state the subset criterion and distinguish it from the full source count.

? If a filter displays no results, what should you do before concluding no records exist?
- [ ] Delete the empty view and its source immediately
- [ ] Assume the application independently verified that the records were never entered
- [x] Review the data range, criteria, values, and data types
! A zero-result filter may reflect conditions or selection problems rather than the absence of source records.

? What is true about an ordinary SUM over a filtered range?
- [x] It may include values in filtered-out rows; check calculation behavior
- [ ] It always counts only the rows displayed on screen
- [ ] It automatically changes every hidden number to zero
! Filtering does not guarantee that standard sums ignore hidden rows.

? Which requests were entered after 2026-11-03 based on the sample Requested dates?
- [ ] P-103, P-101, and P-104
- [x] P-102, P-105, and P-106
- [ ] Only P-103
! The dates later than November 3 are November 4, 5, and 6, belonging to P-102, P-105, and P-106.

? A sorted list now attaches the wrong quantity to an item. What should you do?
- [ ] Sort just the item names a second time and hope they align
- [ ] Publish the result because the quantities are in order
- [x] Stop relying on it and restore or reconcile against a verified source
! Once fields are mismatched, recovery requires verified original associations rather than another guess-based sort.

:::

:::answer Show the quiz answer key with explanations
1. **A.** Sorting defines a record order; it is not deletion or a type conversion.
2. **B.** A standard filter changes which records are shown without deleting the nonmatching source rows.
3. **C.** The headings label the fields and should normally be treated separately from data records.
4. **A.** A1:F7 covers the header and all six records across the six relevant columns.
5. **B.** A detached column sort can corrupt the association between the fields belonging to one record.
6. **C.** Four is the smallest recorded quantity, and it belongs to P-102.
7. **A.** Descending numeric order starts with the largest value, 30.
8. **B.** Four requests have status Ready in the original list.
9. **C.** Filtering hides the nonmatching rows; it does not automatically change or delete those records.
10. **A.** P-102 and P-105 are the two Pending requests.
11. **B.** The Notebook and Pencil requests meet both conditions; the Folder is Pending.
12. **C.** A selected-values filter normally includes any record with a value in the selected set.
13. **A.** The two qualifying quantities are 12 and 30.
14. **B.** A secondary key acts within groups defined by the earlier sort key.
15. **C.** The Electronics quantities are 9, 7, and 4 when sorted in descending order.
16. **A.** Alphabetical Category grouping has priority; Quantity orders only within each category.
17. **B.** An explicitly saved position value or verified source allows reconstruction of input order.
18. **C.** Undo can be useful shortly after an action but may be unavailable after later steps or reopening.
19. **A.** Stored types influence comparisons; visual appearance alone does not establish a numeric value.
20. **B.** Mixed text dates and actual date values can cause unexpected ordering.
21. **C.** Clearing filters restores eligible rows to view; other hiding mechanisms may still apply.
22. **A.** Visibility and existence are different properties of a dataset.
23. **B.** The order must be correct and the relationships between record fields must remain accurate.
24. **C.** A stable identifier stays associated with the record even if its worksheet row position changes.
25. **A.** Shared filters and in-place sorts may affect other collaborators; protect original work.
26. **B.** A report should state the subset criterion and distinguish it from the full source count.
27. **C.** A zero-result filter may reflect conditions or selection problems rather than the absence of source records.
28. **A.** Filtering does not guarantee that standard sums ignore hidden rows.
29. **B.** The dates later than November 3 are November 4, 5, and 6, belonging to P-102, P-105, and P-106.
30. **C.** Once fields are mismatched, recovery requires verified original associations rather than another guess-based sort.

:::

### Exit task: Explain the difference without looking

Finish these statements in your own words:

1. Sorting __________; filtering __________.
2. Sorting only one field in a multi-column list can __________.
3. Under the Ready filter, __________ records are visible and __________ Pending records remain in the source.
4. To identify a request even after its worksheet row moves, use __________.
5. To preserve the old record order, I should __________ before sorting.
6. Before citing a filtered result, I should state __________.

:::answer Show exit task sample responses
1. Sorting rearranges whole records into an order; filtering shows the records that satisfy conditions.
2. Disconnect quantities, names, and statuses from their correct records.
3. Four Ready records are visible; two Pending records remain in the source.
4. The stable Request ID.
5. Make a verified source copy or add an Original position field included in all sorts.
6. The data scope, selection criteria, and number of matching records.
:::

## 11. MGU Library connections and next steps

Sorting and filtering work best after accurate data entry. The recommended workflow is **verify the source → define the complete record range → choose sort keys or filter conditions → apply the operation → check individual IDs and record counts → describe the resulting view accurately**. When those habits are routine, organizing a larger list becomes faster without sacrificing reliability.

### MGU course connections

- [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) — all nine topics in this sequence.
- [Lesson 1: What Is a Spreadsheet?](/department/computer-science/basic-computer-skills/spreadsheet-skills/what-is-a-spreadsheet/) — introduction to the worksheet.
- [Lesson 2: Rows, Columns, and Cells](/department/computer-science/basic-computer-skills/spreadsheet-skills/rows-columns-and-cells/) — cell addresses and ranges.
- [Lesson 3: Entering and Formatting Data](/department/computer-science/basic-computer-skills/spreadsheet-skills/entering-and-formatting-data/) — clean entries, types, and display formatting.
- [Lesson 4: Simple Formulas](/department/computer-science/basic-computer-skills/spreadsheet-skills/simple-formulas/) — calculated values and cell references.
- [Lesson 5: Common Functions](/department/computer-science/basic-computer-skills/spreadsheet-skills/common-functions/) — summaries from selected ranges.
- [Lesson 7: Basic Charts](/department/computer-science/basic-computer-skills/spreadsheet-skills/basic-charts/) — next: visualize clearly selected data.
- [Lesson 9: Checking Spreadsheet Errors](/department/computer-science/basic-computer-skills/spreadsheet-skills/checking-spreadsheet-errors/) — later: a broader verification workflow.

### Official software documentation

- [Microsoft Support: Sort data in a range or table in Excel](https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel) — sort keys, ordering, and complete ranges.
- [Microsoft Support: Filter data in a range or table in Excel](https://support.microsoft.com/en-us/excel/get-started/filter-data-in-a-range-or-table-in-excel) — applying criteria to the displayed list.
- [Microsoft Support: Reapply or clear a filter and sort](https://support.microsoft.com/en-us/excel/reapply-a-filter-and-sort-or-clear-a-filter) — clearing restrictions and reviewing conditions.
- [Google Docs Editors Help: Sort and filter your data](https://support.google.com/docs/answer/3540681?hl=en) — Google Sheets sorts, filters, and filter views.
- [LibreOffice Calc Help: AutoFilter](https://help.libreoffice.org/latest/en-US/text/scalc/01/12040100.html) — selecting and filtering table records.
- [LibreOffice Calc Guide: Calc as a Database](https://books.libreoffice.org/en/CG262/CG26215-CalcAsADatabase.html) — sorting and filtering structured records.

Applications change over time. If a command differs from the wording used here, consult the current help for the software version in front of you. The core decisions—complete records, correct fields, explicit conditions, and verified results—remain useful across products.

### Continue the Spreadsheet Skills course

[← Previous lesson: Common Functions](/department/computer-science/basic-computer-skills/spreadsheet-skills/common-functions/) · [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) · [Next lesson: Basic Charts →](/department/computer-science/basic-computer-skills/spreadsheet-skills/basic-charts/)

> **Lesson completion checklist:** I can identify complete records and headings; describe ascending/descending order; sort all related fields together; identify stable Request IDs; filter Ready and Pending results; combine Category and Status conditions; perform a two-key sort; clear criteria; distinguish hidden rows from deleted records; and restore or verify a source without guessing.

:::terms
spreadsheet | Spreadsheet | A grid-based application or document for organizing, calculating, and reviewing data. |
workbook | Workbook | A spreadsheet file containing one or more worksheets. |
worksheet | Worksheet | One tab or grid of cells within a workbook. |
row | Row | A horizontal group of cells usually labeled with a number. |
column | Column | A vertical group of cells usually labeled with a letter. |
cell | Cell | A location where a row and column intersect. |
cell-address | Cell address | The current location of a specific cell, such as D4. |
cell-range | Cell range | A continuous set of cells identified by its boundary addresses, such as A1:F7. |
dataset | Dataset | A defined collection of observations or records for a task. |
data-table | Data table | A structured group of rows and columns with consistent fields and record meaning. |
header-row | Header row | The row naming the fields in a data table. |
record | Record | The collection of related values for one item, person, transaction, or event. |
field | Field | One type of information recorded for each item, usually represented by a column. |
request-id | Request ID | A unique identifier used to recognize one request independently of row position. |
data-type | Data type | The way software interprets a value, such as number, date, or text. |
data-integrity | Data integrity | The accuracy and correct relationships among stored values and records. |
sorting | Sorting | Rearranging records based on chosen fields and an order. |
sort-order | Sort order | The direction or sequence applied when arranging records. |
ascending-order | Ascending order | Typically A-to-Z, smallest-to-largest, or earliest-to-latest ordering. |
descending-order | Descending order | Typically Z-to-A, largest-to-smallest, or latest-to-earliest ordering. |
sort-key | Sort key | The field used to determine record order. |
primary-sort-key | Primary sort key | The highest-priority field in a multiple-key sort. |
secondary-sort-key | Secondary sort key | A subsequent field used to order records that tie on an earlier key. |
multilevel-sort | Multilevel sort | A sort that applies two or more ordered fields in priority sequence. |
tie | Tie | Equal values on a chosen sort field for two or more records. |
original-order | Original order | The sequence records occupied before the current rearrangement. |
original-position | Original position | A saved field that records original row sequence so it can be restored. |
selection | Selection | Cells or ranges designated for an upcoming action. |
expand-selection | Expand selection | A program option that adds nearby cells to the selected range of an action. |
undo | Undo | A command to reverse an available recent editing action. |
version-history | Version history | A feature for viewing or recovering saved document states when permitted. |
filtering | Filtering | Restricting displayed records according to one or more conditions. |
filter | Filter | A mechanism that displays only records meeting selected criteria. |
filter-criterion | Filter criterion | A condition that determines whether a record appears in a filtered result. |
active-filter | Active filter | A filter condition currently restricting the displayed records. |
clear-filter | Clear filter | Remove specified display restrictions, possibly leaving filter controls enabled. |
filter-control | Filter control | A menu or interface element for configuring conditions on a field. |
visible-row | Visible row | A data row currently displayed under view and filter settings. |
hidden-row | Hidden row | A row not shown because of a filter or other hiding setting. |
nonmatching-record | Nonmatching record | A record excluded from the current view by a filter condition. |
and-condition | AND condition | A requirement that each listed condition must be satisfied. |
or-condition | OR condition | A requirement that at least one listed alternative must be satisfied. |
filter-view | Filter view | A view-specific saved or temporary sort and filter arrangement in supporting software. |
shared-view | Shared view | A displayed configuration that may affect multiple collaborators. |
deletion | Deletion | Removing stored data or records rather than temporarily hiding them. |
numeric-value | Numeric value | A stored number usable in numeric comparisons and calculations. |
numeric-looking-text | Numeric-looking text | A string of characters that looks like a number but is stored as text. |
date-value | Date value | Content that software recognizes and interprets as a date. |
text-value | Text value | Letters, characters, or words stored as text. |
blank-cell | Blank cell | A cell without an entered value. |
consistent-entry | Consistent entry | Data recorded using agreed conventions and formats. |
data-validation | Data validation | Restrictions or checks intended to support accurate entry. |
range-boundary | Range boundary | The outermost rows and columns included in an operation. |
mismatch | Mismatch | An incorrect relationship between associated record fields. |
quality-check | Quality check | Review of input, scope, criteria, and results for correctness. |
source-copy | Source copy | An unchanged reference copy used for verification or recovery. |
reconciliation | Reconciliation | Comparing a processed dataset against a known source to confirm agreement. |
subtotal | Subtotal | A total for a defined subset of values or records. |
record-count | Record count | The number of records in a dataset or specified subset. |
formula | Formula | An expression that directs a spreadsheet to calculate a result. |
collaboration | Collaboration | Authorized people working with the same spreadsheet or related files. |
reporting-context | Reporting context | Details of the data source, scope, and criteria needed to interpret a result. |
worksheet-tab | Worksheet tab | A control used to select a worksheet inside a workbook. |
column-label | Column label | A worksheet letter or field heading used to identify a column. |
row-label | Row label | A worksheet row number, or descriptive label entered for a data row. |
sort-direction | Sort direction | The choice between increasing/ascending and decreasing/descending order. |
filter-results | Filter results | Records visible after filter criteria have been applied. |
record-identifier | Record identifier | Stable label that distinguishes one record from others. |
record-linkage | Record linkage | The correct association of all fields belonging to the same record. |
source-data | Source data | Original entered or collected information from which results are derived. |
:::
