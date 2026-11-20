Basic Computer Skills / Spreadsheet Skills

## Lesson 7: Basic Charts

A community learning center has a worksheet showing how many supply kits were distributed in four categories. The numbers are correct, but a supervisor wants to see at a glance which category received the most kits. Later, the center wants to compare attendance across six months. These questions call for different ways of presenting data. A [[chart|chart]] can make a pattern easier to notice, but a picture cannot correct an inaccurate worksheet or make an unfair comparison trustworthy.

This lesson follows Spreadsheet Skills Lessons 1–6. You should already know how to recognize a [[worksheet|worksheet]], [[cell|cell]], [[cell-range|cell range]], [[header-row|header row]], [[numeric-value|numeric value]], simple [[formula|formula]], and structured [[data-table|data table]]. You have also learned to sort and filter records. Here you will select suitable source data, choose between basic chart types, build and read simple charts, and check that their visual message agrees with the actual numbers.

Microsoft Excel is the principal desktop example, with transferable steps for Google Sheets and LibreOffice Calc. Controls and menus differ between versions. Every example uses **fictional figures**. You can complete all six activities using paper and pencil, even without spreadsheet software; optional software practice should use a new practice file rather than a live business, school, payroll, or medical record.

**Level:** Beginner · **Estimated study time:** 100–135 minutes · **Prerequisites:** Spreadsheet Skills Lessons 1–6 recommended · **Practice equipment:** Paper and pencil or a blank worksheet in Microsoft Excel, Google Sheets, or LibreOffice Calc · **Safety:** Use invented data, verify labels and units, save a practice copy, and do not publish sensitive or misleading charts.

> **Essential idea:** **Choose the question → check the source numbers → select the right cells → choose an appropriate chart → label it clearly → compare it with the table.** A chart is a visual explanation of selected data, not proof that the data is complete or correct.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain what a spreadsheet chart does and distinguish the chart from the source data table.
2. Identify [[category|categories]], [[data-series|data series]], labels, numbers, and the selected [[source-range|source range]].
3. Choose a [[column-chart|column chart]] or [[bar-chart|bar chart]] to compare quantities across categories.
4. Choose a [[line-chart|line chart]] to show a sequence of values over time when a continuous trend is the intended message.
5. Explain when a [[pie-chart|pie chart]] can show parts of a single whole and why it requires a meaningful total.
6. Select a complete, correctly arranged range including headings but excluding unrelated totals and notes.
7. Create a simple chart using a typical Insert or Chart command, and locate the settings for its source range and type.
8. Recognize a chart title, horizontal and vertical axes, axis labels, data labels, and a legend where applicable.
9. Read basic chart values, compare categories, and describe increases, decreases, and the highest and lowest observations.
10. Recognize misleading [[axis-scale|axis scales]], unclear units, unhelpful 3D effects, missing labels, and comparisons of incompatible values.
11. Review how edits, added rows, filters, copying, and sharing may affect an existing chart.
12. Complete six guided activities and confirm each chart's message against its source data.

### On this page

- [1. Understanding charts](#1-what-is-a-spreadsheet-chart)
- [2. Choosing a chart type](#2-which-chart-type-should-you-choose)
- [3. Preparing source data](#3-how-do-you-prepare-the-data-for-a-chart)
- [4. Creating and labeling a chart](#4-how-do-you-create-and-label-a-basic-chart)
- [5. Reading charts responsibly](#5-how-do-you-read-and-interpret-a-chart)
- [6. Updating and checking charts](#6-how-do-you-update-and-check-a-chart)
- [7. Guided practice](#7-guided-practice-build-and-review-basic-charts)
- [8. Common misconceptions](#8-common-misconceptions)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. MGU Library connections and next steps](#11-mgu-library-connections-and-next-steps)

## 1. What is a spreadsheet chart?

A [[spreadsheet|spreadsheet]] stores information in cells. A chart is a [[visualization|visual representation]] of values selected from those cells. Rather than asking readers to compare many figures one by one, it uses shapes, lines, positions, or segments to make a relationship easier to see. Charts often sit on the same worksheet as the source table, but some programs also let you place a chart on a separate chart sheet or copy it into another document.

### The question comes before the picture

Imagine that the learning center distributes fictional supply kits. Its manager asks three questions:

- **Comparison:** Which category received the most kits? A bar or column chart is a reasonable choice.
- **Change over time:** Did monthly attendance go up or down? A line chart is often useful.
- **Part of a whole:** What share of the kits belonged to each category? A pie chart may work when all categories are parts of one complete total.

The chart type is a decision about what relationship to show. It should follow the question, rather than being chosen only because a style is colorful or looks impressive.

### Table, chart, and interpretation are different

| Element | What it contains | What it does well | What to verify |
| --- | --- | --- | --- |
| Source table | Exact recorded labels and values | Provides detail and supports calculations | Accuracy, units, completeness, types |
| Chart | Selected values rendered visually | Supports quick comparisons and patterns | Correct range, scale, category order |
| Written caption | A short explanation of the visual | States scope, time period, and limitations | Does not overstate the data |
| Data label | A value shown near a visual mark | Helps identify an exact amount | Same value and unit as the source |
| Legend | Identifies a series by color or pattern | Separates multiple related series | Correct mapping and readable contrast |

A chart may omit some details to achieve clarity. For example, a column chart may show that 24 is larger than 18 more quickly than a paragraph does; the underlying table remains the best place to check the precise category values. Do not discard the table merely because the chart is attractive.

### Visual parts to recognize

Many common column and line charts have a [[horizontal-axis|horizontal axis]] at the bottom and a [[vertical-axis|vertical axis]] on the side. The horizontal axis often identifies categories or periods; the vertical axis often shows numeric values and scale marks. A bar chart reverses the usual orientation: categories appear vertically and lengths extend horizontally. These are typical arrangements, not universal rules.

A [[chart-title|chart title]] tells readers what is shown. [[axis-title|Axis titles]] explain what the measures mean, such as **Number of kits**, not just an unexplained set of values. A [[legend|legend]] is especially useful when two or more data series appear, such as **This month** and **Last month**. If only one obvious series is present, a legend may add little value.

> **Reading rule:** Before believing a chart, ask: *What is measured, in what units, for which people or items, during what period, and from which cells?*

### Charts do not validate the source

If a worksheet says a class had 500 attendees when it actually had 50, a perfectly configured chart will still reflect the incorrect value. If categories overlap or missing records are unreported, a pie chart can make a false whole look convincing. If two series refer to different time periods, comparing their lines may suggest a trend that does not exist. Data entry, verification, and context remain necessary.

## 2. Which chart type should you choose?

The four main chart types in this beginner lesson are columns, bars, lines, and pie slices. They answer different common questions. Many spreadsheet applications offer additional types, but mastering these four is more valuable initially than browsing every available effect.

### Basic chart types at a glance

| Type | Best introductory use | Typical source arrangement | Common mistake |
| --- | --- | --- | --- |
| Column chart | Compare values between named categories | Category names plus one or more number columns | Truncated scale makes small differences look huge |
| Bar chart | Compare categories, especially with long names | Category names plus numeric values | Category labels cut off or incorrect order |
| Line chart | Show a change across ordered periods | Date or period plus number | Lines connect unrelated categories as though they form a trend |
| Pie chart | Show parts of one complete whole | Nonnegative parts that together form one meaningful total | Combining unrelated totals or too many tiny slices |

A [[column-chart|column chart]] uses vertical bars. The height of each bar typically expresses the quantity. A [[bar-chart|bar chart]] uses horizontal bars; these can be easier to read when category names are long. Both can compare categories. A [[line-chart|line chart]] connects points to emphasize a sequence, such as attendance recorded in January through June. A [[pie-chart|pie chart]] divides a circle into slices proportional to each part's share of a whole.

### Choose a column or bar chart for comparisons

Suppose four categories received 24, 12, 18, and 6 kits. The useful question is **Which category has the highest count?** A simple column or bar chart represents that comparison more directly than a line chart, which could imply a continuous relationship between unrelated named categories.

You may see some bar charts presented in ranked order rather than worksheet order. Ranking can help when the question is “Which categories are largest?” but keeping an agreed fixed order may be better for comparing the same categories across several reports. The analyst must choose deliberately.

### Choose a line chart for ordered time periods

When monthly attendance values appear in chronological order, joining consecutive observations helps a reader see a change. A line is appropriate because **January, February, March...** have a meaningful sequence. It does not turn six monthly observations into proof of a long-term annual trend or tell you why the changes occurred.

For a chart showing a year of recorded monthly totals, label the time axis with the year or describe it in the title. A line chart without a known time frame can be misleading. Also pay attention to gaps: a missing month is not the same as a month with zero attendance.

### Choose a pie chart only when the whole is meaningful

A pie chart is a [[part-to-whole|part-to-whole]] display. If categories are mutually exclusive and the counts represent all recorded kits in a particular distribution, the sum of their slices can represent **100% of that distribution**. A pie chart showing those shares can answer “How was the total divided?” It is poor for showing a precise difference between many similar slices.

A pie chart is often unsuitable if categories overlap, values are negative, some parts are missing, or the “whole” mixes incompatible units. Two pie charts from different periods can also be difficult to compare precisely. For many comparisons, a labeled bar chart is more accessible.

### What about other chart types?

A [[scatter-chart|scatter chart]] plots paired numeric values to inspect a possible relationship—for example, study hours on one numeric axis and practice quiz score on another. A [[stacked-chart|stacked chart]] shows how components combine within a larger bar or column. These are useful later, but they require care with paired numbers, totals, and scales. For this lesson, select from the four introductory chart types unless the problem genuinely requires something else.

### Five questions for choosing a chart

1. Am I comparing named categories, showing change across time, or dividing one total into parts?
2. How many categories and series must readers distinguish?
3. Would a table give the answer more clearly because exact figures matter?
4. Do the values share compatible units and a clear time period?
5. Can another person understand the proposed chart without knowing how I created it?

> **Good chart selection is a form of explanation.** Do not use a pie chart because the data is a set of numbers; use it only if those numbers are meaningful parts of one defined total.

## 3. How do you prepare the data for a chart?

Charts are built from an identified [[source-range|source range]]—the cells used to supply the labels and numerical values. A source range may be selected by highlighting cells, clicking inside a recognized table, or entering a range in the chart editor. For a first chart, organize labels in one column and numeric measures in an adjacent column with clear headings.

### Dataset A: Four categories of kits

Enter the following fictional data beginning at `A1`. Its chart-ready source range is **`A1:B5`**, including the headings. Do **not** type the instructional **Row** column into the spreadsheet; row numbers are shown outside the worksheet grid in the application interface.

| Worksheet row | A: Kit category | B: Kits distributed |
| --- | --- | --- |
| 1 | Kit category | Kits distributed |
| 2 | Student | 24 |
| 3 | Instructor | 12 |
| 4 | Visitor | 18 |
| 5 | Workshop | 6 |

The total is **60 kits** because 24 + 12 + 18 + 6 = 60. You can optionally write **Total** in `A6` and `=SUM(B2:B5)` in `B6`. But the first chart should ordinarily select **`A1:B5`**, not `A1:B6`. Adding the total as another category would double-count the total in a basic category chart and create an inappropriate extra pie slice.

### Why titles and cells matter

- Row 1 describes the fields; it is the [[header-row|header row]].
- `A2:A5` contains text [[category-label|category labels]].
- `B2:B5` contains four numeric measurements, one [[data-series|data series]].
- `A1:B5` contains both heading labels and source observations.
- `A6:B6`, if used for the total, is a summary row, not another kind of kit.

A chart's value is closely tied to this structure. If an app swaps what it treats as the category names and the number series, use the chart editor's data-range or row/column controls as applicable. Do not rewrite accurate source data simply to fix a mistaken chart selection.

### Dataset B: Attendance over six months

A second fictional worksheet begins in `A1` with these values. The six recorded months are consecutive months in **2026**. Select **`A1:B7`** for a basic line chart.

| Worksheet row | A: Month | B: Attendance |
| --- | --- | --- |
| 1 | Month | Attendance |
| 2 | Jan 2026 | 10 |
| 3 | Feb 2026 | 14 |
| 4 | Mar 2026 | 12 |
| 5 | Apr 2026 | 18 |
| 6 | May 2026 | 20 |
| 7 | Jun 2026 | 16 |

For a paper activity, the period labels may remain text. In spreadsheet software, using actual date values formatted as month and year can be useful for more advanced time-axis behavior. Whichever method you use, verify that the months appear in chronological order rather than alphabetical order. **May (20)** is the highest observation, **January (10)** is the lowest, and **June (16)** is four below May.

### Two series: More than one measure

A single chart can compare two related numeric series when their units, categories, and time periods are compatible. Imagine the kit program also recorded a previous distribution:

| Kit category | First distribution | Second distribution |
| --- | --- | --- |
| Student | 24 | 30 |
| Instructor | 12 | 15 |
| Visitor | 18 | 16 |
| Workshop | 6 | 9 |

If entered in `A1:C5` with the headings, a [[clustered-column-chart|clustered column chart]] can place one bar for each distribution side by side within each category. The [[legend|legend]] should distinguish **First distribution** from **Second distribution**. The first total is 60, the second is 70. Both series measure kits and represent corresponding categories, so a comparison makes sense. The chart should not imply that the two distributions happened in different years unless the underlying records establish that fact.

### Problems to correct before charting

| Source problem | What may happen | Beginner response |
| --- | --- | --- |
| Total row included as a category | Total appears as an extra bar or pie slice | Exclude summaries from category source range |
| Numbers entered as text | Chart may omit, treat as categories, or misinterpret values | Verify stored number types, not just appearance |
| Incorrect cell range | Intended values or categories are missing | Inspect source-range boundaries |
| Blank cell | Gap, zero-like appearance, or skipped observation depending on chart settings | Decide what the blank actually means |
| Inconsistent units | Misleading comparison between counts and percentages | Use compatible measurements and explicit labels |
| Duplicated or misspelled categories | The same category may appear twice | Clean the list without hiding legitimate distinctions |
| Hidden or filtered rows | Visible plotted values can depend on chart/software settings | Review filter state and hidden-data options |
| A sensitive name or individual result | Privacy exposure in a screenshot or shared chart | Use aggregate, authorized, nonidentifying data |

### What counts as a data series?

A [[data-series|data series]] is a set of related values plotted together, such as the four Kit counts in column B. If two distributions are compared, each numerical column can become a separate series. For a beginner, the series should have a distinct heading and a clear unit. Beware of mixing money, percentages, and counts on the same scale; the visual may look simple while the interpretation becomes invalid.

> **Source range rule:** Select only the categories, headings, and values that answer the question. More cells do not automatically make a chart more complete.

## 4. How do you create and label a basic chart?

Once the data is ready, the common workflow is **select the source → insert a chart → review the chart type → inspect categories and series → add descriptive titles and units → save → verify**. The exact commands differ by application and may change between software versions, but these decisions are consistent.

### Create a chart in Microsoft Excel

1. In a new practice workbook, enter Dataset A in `A1:B5` as shown above.
2. Select `A1:B5` or click a cell inside the recognized two-column data region and check what Excel selects.
3. Open **Insert** and choose a suitable **Column** chart or an appropriate **Recommended Charts** option.
4. Examine the chart: the four kit categories should be identifiable, and their respective values should be 24, 12, 18, and 6.
5. Use the chart's editing controls—such as Chart Design, Add Chart Element, or equivalent options—to set the title **Kits Distributed by Category**.
6. Add a numeric axis title such as **Number of kits** where supported. Check whether the zero baseline and numeric scale make comparisons fair.
7. If desired, add [[data-label|data labels]] to show 24, 12, 18, and 6 directly. With only one obvious series, remove a redundant legend if it takes up useful space.
8. Save a practice copy and read the chart against the original table, one category at a time.

For an unsuitable chart type, change the chart type; do not alter the underlying observations. If category names and values appear reversed, inspect the source-selection or series arrangement. Excel supports multiple chart types and chart-element controls, but details depend on the Excel edition and platform.

### Create the chart in Google Sheets

1. Enter Dataset A in `A1:B5` in a new spreadsheet.
2. Select `A1:B5`, then choose **Insert → Chart**.
3. Open the [[chart-editor|chart editor]] if needed. Under setup options, confirm the data range, that the first row functions as headings, and the intended column chart type.
4. Check which field supplies the horizontal category labels and which supplies the values.
5. Use the chart's customization controls to add or modify the title, axes, and labels as supported.
6. Review the four plotted quantities against the source data.

Google Sheets may initially recommend a different chart type. The default is a suggestion, not a verdict on what the information means. Some controls may differ on mobile, and chart editing on the web is generally more convenient for this exercise.

### Create the chart in LibreOffice Calc

1. Enter Dataset A in `A1:B5` in a new Calc worksheet.
2. Select the intended source cells and choose **Insert → Chart**.
3. In the [[chart-wizard|Chart Wizard]], choose **Column**, then inspect the data range and series orientation.
4. Tell the wizard that the first row contains labels and the first column contains categories when the prompts and structure require these settings.
5. Add the title **Kits Distributed by Category** and an appropriate numeric axis title if offered.
6. Finish the chart, then compare the chart labels and values with the four source rows.

Because LibreOffice versions and operating systems differ, labels and the order of dialog steps may change. The Chart Wizard's **Data Range** and **Data Series** stages are useful places to correct an inaccurate selection.

### The essential chart elements

| Element | Example | Main question answered | Is it always needed? |
| --- | --- | --- | --- |
| Chart title | Kits Distributed by Category | What is this picture about? | Usually useful |
| Category labels | Student, Instructor, Visitor, Workshop | Which groups are compared? | Usually necessary |
| Value axis | 0, 5, 10, 15, 20, 25 | How large are the amounts? | Common for columns and lines |
| Axis title | Number of kits | What does the scale count? | Important if units are not obvious |
| Data labels | 24, 12, 18, 6 | What exact amount is shown? | Optional, often helpful |
| Legend | First vs. Second distribution | Which series is which? | Helpful for multiple series |
| Source note | Fictional exercise data, six-month example | Where did figures come from? | Important in reports and sharing |

### Avoid decoration that conceals meaning

Use readable font sizes, an appropriate chart size, and simple colors with enough contrast. Labels should remain understandable when printed or viewed without color. Do not use color alone to distinguish essential categories; support it with names, patterns where available, or direct labels. Decorative 3D perspective may distort the perceived length or area of marks. For beginner charts, an ordinary two-dimensional display is often the clearest option.

### What to do if the chart appears empty

First confirm that numeric cells really contain numeric values. Then confirm the data range, chart type, series selection, and whether filtering or hidden rows affect the visible source. A blank chart is a reason to inspect its setup, not a reason to invent values.

## 5. How do you read and interpret a chart?

A well-designed chart supports statements that are both visually clear and numerically checkable. Start with the title and units. Identify the categories or time periods, then read the highest and lowest values. Finally, check what the graph cannot establish—for example, *why* a number changed or whether a missing observation is zero.

### Read the kit category chart

Dataset A contains these four values:

| Category | Kits | Share of the 60-kit total |
| --- | --- | --- |
| Student | 24 | 40% |
| Instructor | 12 | 20% |
| Visitor | 18 | 30% |
| Workshop | 6 | 10% |
| **Total** | **60** | **100%** |

The **Student** category is largest at 24, and **Workshop** is smallest at 6. Student has **18 more kits** than Workshop because 24 − 6 = 18. Student is **four times** Workshop because 24 ÷ 6 = 4. None of those comparisons tells us how many distinct people received kits, why the categories differ, or whether distributing more kits to one category was good policy.

### Read a pie chart as shares of a whole

If the 60 fictional kits are each counted in exactly one of the four categories, the shares above may be shown as pie slices. The percentage for Student is **24 ÷ 60 × 100 = 40%**. Instructor is 20%, Visitor 30%, and Workshop 10%. The shares sum to 100%.

A pie chart needs a clearly defined denominator. If the worksheet accidentally omits 10 kits from an additional category, the pie can still show a circle that adds to 100% of the *selected* values. That makes it visually complete but factually incomplete. Label the intended total and review the scope before making a public claim.

### Read the line chart as six observations

Use Dataset B from Section 3:

| Period | Attendance | Difference from previous recorded month |
| --- | --- | --- |
| Jan 2026 | 10 | Not applicable |
| Feb 2026 | 14 | +4 |
| Mar 2026 | 12 | −2 |
| Apr 2026 | 18 | +6 |
| May 2026 | 20 | +2 |
| Jun 2026 | 16 | −4 |

May has the highest recorded attendance at 20. June decreased by four compared with May. January has the lowest at 10. June remains six above January, but the series does not rise every month. A careful statement is: *“In this fictional six-month record, attendance rose from 10 in January to 16 in June, with declines in March and June.”* Avoid saying attendance **always increased** or that a cause has been established.

### Different visual scales can alter perception

Consider two quantities: **92** and **96**. The difference is only **4**, about 4.3% of 92. A bar chart with a value axis beginning at 90 makes the visible bars appear very different, because one rises 2 units above the baseline and the other 6. Starting the bar-chart scale at zero ordinarily provides a more faithful comparison of full bar lengths. Line charts can sometimes use nonzero vertical axes when studying fine variations, but the scale must be clear and the interpretation proportionate. Always inspect the axis numbers, not only the picture.

| Design choice | Reader might think | More responsible approach |
| --- | --- | --- |
| Column axis begins near smallest value | Small difference is dramatic | Normally start a basic bar/column axis at zero |
| Chart shows no units | Values mean the same thing everywhere | Say kits, attendees, dollars, percent, etc. |
| Unequal time gaps are treated as equal | Trend changes at a uniform pace | Verify period spacing and chart-axis behavior |
| Colors are the only series distinction | Everyone can tell which series is which | Use visible labels, legend text, and contrast |
| Pie chart includes a total row | Total is an additional category | Exclude the total from parts-of-whole source |
| Chart hides omitted periods | No data was missing | Disclose the actual scope and missing records |
| Three-dimensional bars overlap | Taller-looking marks are larger | Use simple 2D marks and clear labels |

### Describe evidence and limits separately

Use precise wording: **“The chart shows...”** and then a statement directly supported by the displayed values. Follow it with a limitation when necessary: **“These are fictional sample records,”** **“The chart covers January–June only,”** or **“The data does not identify why the change occurred.”** These habits are especially important in business reports, student projects, and public presentations.

## 6. How do you update and check a chart?

Charts are often connected to the source cells. Editing an included value may change the displayed mark automatically, but adding new rows does **not** always expand the chart's data range. The behavior depends on whether the source is an ordinary fixed range, an expandable spreadsheet table, or another structured or dynamic source. A copied chart in another document may be linked, embedded, or static. Do not assume every chart stays current.

### A seven-point chart audit

1. **Question:** What relationship should the chart explain?
2. **Source:** Which worksheet and range supply its labels and values?
3. **Numbers:** Do the chart values match the visible source data and independently checked totals?
4. **Categories and periods:** Are they complete, correctly ordered, and named consistently?
5. **Scale and units:** Does the axis start and labeling make the comparison fair?
6. **Accessibility:** Can a person read the title and values without relying solely on color or tiny text?
7. **Sharing and currency:** Is this the intended version, free of private records and outdated values?

### Editing values versus adding observations

If the Student value in Dataset A changes from 24 to 26, a correctly linked chart normally updates that bar. The revised total is **62**, not 60; if a separate summary or share calculation exists, it should be checked too. If a fifth category is inserted below row 5, a chart limited to `A1:B5` may not include it. You must review the source range or extend the recognized table as appropriate.

A chart that has been **copied as an image** is generally a static snapshot; changing the spreadsheet will not update that picture. Charts embedded or linked into documents can have different update and access behavior. Before issuing a final report, verify the delivered artifact, not merely the open worksheet.

### Sorting, filtering, and hidden data

Lessons 5 and 6 explained that some records can be hidden by filters without being deleted. Charts may exclude or include hidden and filtered data according to chart type, software, and settings. A chart showing only visible categories might be appropriate for a deliberately filtered report, but a chart claiming to represent **all** records must be checked against the complete source. Record the filter condition when it materially changes the conclusion.

### Common chart symptoms and their causes

| Symptom | Possible cause | Check or repair |
| --- | --- | --- |
| Wrong labels under bars | Wrong category range or series orientation | Inspect Setup, Select Data, or Data Series |
| A large extra bar named Total | Summary row included | Exclude the summary row from source categories |
| Chart has no bars | Non-numeric values or wrong range | Check stored values, selection, and chart type |
| Months appear alphabetically | Dates were treated as unsorted text | Use chronological order or recognized date values |
| Newly entered data is absent | Chart range did not expand | Review or extend data range |
| A filtered chart looks incomplete | Rows are hidden or excluded | Review filter and hidden-data settings |
| Two series have confusing colors | Legend is absent or misleading | Add clear series names and labels |
| A bar looks very large for a tiny difference | Vertical scale is truncated | Inspect axis minimum and chart purpose |
| Printed chart is unreadable | Small text, poor contrast, cramped labels | Resize or simplify; include source table when helpful |
| Chart pasted into a report is outdated | Static copy or broken link | Refresh or re-export after verifying source |

### When to use a table instead of a chart

Use a table when readers must locate exact values, compare many detailed records, or inspect individual entries. Use a chart when the relationship is visually easier to understand than the list of numbers. Many reports benefit from both: a simple chart for the pattern and a compact, clearly labeled table for verification. A chart should not conceal qualifying notes or replace proper data governance.

### A responsible reporting sentence

> **Example:** “The Student category accounted for 24 of 60 fictional kits distributed (40%) in this practice dataset. The chart excludes the Total summary row, and no conclusions about actual community demand follow from these invented figures.”

That wording states the numerator, denominator, scope, and limitation. The reader can audit the claim without trusting the visual alone.

## 7. Guided practice: Build and review basic charts

Work through the activities in order. You may use a blank workbook or the tables in this lesson, drawing rectangles and lines on paper if preferred. Use fictional data only. Where the activity involves software, the objective is to identify the correct input and verify the result—not to memorize every menu location. The answer panels offer examples, not hidden personal information.

### Activity 1: Decide what kind of chart you need (10–15 minutes)

For each question, choose **column/bar**, **line**, **pie**, or **table only**. Briefly explain why.

1. Compare the number of kits in Student, Instructor, Visitor, and Workshop categories.
2. Show how monthly attendance changed between January and June 2026.
3. Show the percentages of the 60 kits in the four mutually exclusive categories.
4. Let a clerk retrieve the exact fictional request ID and date for each of 50 orders.
5. Compare counts for eight categories with long names that are difficult to fit below columns.

:::answer Show Activity 1 sample responses
1. Column or bar chart; compare named categories.
2. Line chart; show a time-ordered sequence.
3. Pie chart may work; four mutually exclusive shares of a defined whole.
4. Table only is generally best; exact record-level retrieval matters.
5. Horizontal bar chart often gives long category labels more room.
:::

### Activity 2: Make a labeled column or bar chart (20–25 minutes)

1. Reproduce Dataset A in `A1:B5`; do not enter the instructional Row column.
2. Check that the values are numeric: 24, 12, 18, and 6.
3. Select `A1:B5`, including headings but excluding an optional total.
4. Insert a simple two-dimensional column or bar chart.
5. Title it **Kits Distributed by Category**, label the quantity as **Number of kits**, and ensure all four categories appear.
6. Read the highest and lowest categories and compare them to the source table.
7. Save the result as a practice copy if working in software.

:::answer Show Activity 2 expected results
The chart should contain four categories: Student 24, Instructor 12, Visitor 18, and Workshop 6. Student is the highest, Workshop is the lowest, and the total of the four source values is 60. The total should not be plotted as a fifth category. A paper bar chart is acceptable if the labels and relative lengths are accurate.
:::

### Activity 3: Calculate pie-chart shares and review the whole (15–20 minutes)

1. Write the four Category A values and calculate their combined total.
2. Divide each category count by the total and multiply by 100 to obtain its percentage.
3. Check whether the four percentages add to 100%.
4. Sketch a labeled pie chart or insert a pie chart from `A1:B5`.
5. Explain why including the Total summary row in the pie source would be a mistake.
6. Identify one limitation of reading exact values from a pie without data labels.

:::answer Show Activity 3 expected results
The total is 60. Student: 40%; Instructor: 20%; Visitor: 30%; Workshop: 10%. Together they equal 100%. A Total row is not a fifth part of the whole: including it would make the selected sum 120 and cause misleading 20%, 10%, 15%, 5%, and 50% slices. A plain unlabeled pie is also less precise for numerical comparison than a source table.
:::

### Activity 4: Build and interpret a six-month line chart (20–25 minutes)

1. Enter Dataset B in `A1:B7` or draw its six points on paper.
2. Keep the months in chronological order: Jan through Jun 2026.
3. Create a line chart with the title **Fictional Attendance, Jan–Jun 2026**.
4. Label the measurement **Attendees** and the periods **Month** if the interface supports these titles.
5. Determine the highest month, lowest month, and the difference from May to June.
6. Write one accurate sentence about the overall direction **and** the temporary declines.

:::answer Show Activity 4 expected results
The six values are 10, 14, 12, 18, 20, and 16. May is highest at 20; January is lowest at 10. Attendance drops by 4 from May to June. A correct statement is: “In the invented record, June's attendance of 16 is above January's 10, but attendance decreased in March and June.” The chart cannot establish a cause.
:::

### Activity 5: Compare two distributions and inspect the legend (15–20 minutes)

1. Enter the two-series table from Section 3 in `A1:C5`.
2. Create a clustered column chart or draw paired columns for every category.
3. Label each series **First distribution** and **Second distribution** rather than using generic names like Series 1.
4. Determine the change in Student kits and the change in Visitor kits.
5. Calculate the total for each distribution and describe which distribution had more kits overall.
6. Confirm that the two distributions refer to the same unit, **number of kits**.

:::answer Show Activity 5 expected results
Student changes from 24 to 30: an increase of 6. Visitor changes from 18 to 16: a decrease of 2. The totals are 60 and 70, respectively; the second distribution exceeds the first by 10 kits. Both series use the same unit. An appropriate legend names them rather than relying on colors alone.
:::

### Activity 6: Audit a misleading chart before publishing it (20–25 minutes)

An imaginary report uses a column chart showing **92** and **96**. Its value axis begins at **90**. The report says: “The second group performed three times as well as the first.” It includes no units or explanation of what the values measure.

1. Calculate the absolute difference between 92 and 96.
2. Explain why a column axis beginning at 90 could exaggerate the visual contrast.
3. Assess whether the claim “three times as well” follows from the numbers.
4. Specify at least three changes needed before the chart could be used responsibly.
5. Explain how a report could preserve the exact values for readers who cannot easily interpret a visual.
6. Identify information that is still missing even after the scale is repaired.

:::answer Show Activity 6 sample responses
The difference is 4. The second number is only about 1.043 times the first, not three times as large. Starting a bar/column axis at 90 makes the height above the baseline appear 2 versus 6, which can misleadingly look like a threefold comparison. Use a zero baseline for a basic quantity bar chart, specify the units and categories, state the time period and source, remove the unjustified claim, and include a compact data table or direct value labels. The reader still needs context about what 92 and 96 measure, whether they are comparable, and how they were obtained.
:::

### Optional paper-only worksheet

You can complete the entire lesson without software. Fill the response spaces below and check against the activities above.

| Task | Your response | Check |
| --- | --- | --- |
| Best chart for four category counts | __________ | Category comparison |
| Largest kit category | __________ | 24 kits |
| Smallest kit category | __________ | 6 kits |
| Kit total | __________ | 60 kits |
| Visitor share of the total | __________ | 30% |
| May attendance | __________ | 20 |
| June minus May attendance | __________ | −4 |
| First/second distribution totals | __________ | 60 and 70 |
| What range excludes the kit total? | __________ | `A1:B5` |
| Why inspect chart axes? | __________ | Prevent visual exaggeration |

> **Practice safety:** Use newly created fictional worksheets. Do not post a screenshot of a real payroll, medical record, customer list, or student register, even if you only intend to show a chart. Screenshots may contain private data elsewhere on the screen.

## 8. Common misconceptions

### “A chart proves that the spreadsheet values are correct.”

No. The chart displays selected data. If source values, labels, formulas, or assumptions are wrong, a visually tidy chart can still be wrong.

### “Every set of numbers is best shown as a pie chart.”

No. A pie is for parts of one meaningful, complete whole. For comparing independent values or time patterns, use a bar/column or line chart as appropriate.

### “Including the Total row makes my chart more complete.”

Usually not for category and pie charts. A Total row summarizes existing categories; plotting it as another category double-counts that information.

### “A line chart is suitable whenever there are several categories.”

Not automatically. Connecting points implies an ordered progression or relationship that may not exist for unrelated categories such as Student and Workshop.

### “If the application suggests a chart, it must be the best option.”

Suggestions are conveniences. Verify whether the selection answers the question and uses the appropriate category, time, and numeric fields.

### “A tall bar means a big difference even if I cannot see the axis.”

No. A nonzero baseline can make a small difference appear dramatic. Read the scale and exact values before interpreting the picture.

### “Numbers that look like numbers will always plot correctly.”

No. Numeric-looking text can be interpreted differently from true numbers. Validate stored types and chart results.

### “A chart always includes a new row as soon as I add it.”

Not necessarily. Ordinary fixed chart ranges may omit new rows. Review the chart's source after a dataset grows.

### “A filter affects only the worksheet, never the chart.”

Not necessarily. Hidden or filtered records can affect plotted results, depending on settings and chart software. Check which observations the report actually includes.

### “Every chart needs a legend and many colors.”

No. A single clear series may need only labels and a title. Extra legends and decoration can compete with the important evidence.

### “A three-dimensional chart is more accurate than a flat one.”

Not inherently. 3D perspective can make sizes and positions harder to judge. Two-dimensional charts are generally better for basic comparisons.

### “A copied chart is guaranteed to update when the workbook changes.”

No. A pasted image is static, and an embedded or linked chart may have separate update behavior. Verify the final document before sharing.

### Quick choice guide

| If your question asks... | Start with... | Verify... |
| --- | --- | --- |
| Which category is larger? | Column or bar | Same units and honest axis |
| How did observations change over months? | Line | Correct time order and gaps |
| How is one total divided? | Pie, if few meaningful parts | Complete, exclusive parts and total |
| What exact record has which ID? | Table | Complete columns and accurate rows |
| Which two groups changed most? | Paired columns or careful table | Comparable labels and series |
| Can a visual claim be trusted? | Source table plus scale audit | Numbers, range, labels, context |

## 9. Essential vocabulary

The dotted-underlined expressions in the lesson use MGU's linked-term convention. Selecting a linked term in the dashboard may display a concise definition. Vocabulary remains readable here for learners using paper, assistive technology, or a noninteractive Markdown viewer. The final `:::terms` block supplies the corresponding structured tooltip definitions.

### Spreadsheet structure and source information

- **Spreadsheet:** A grid-based application or document used to store, calculate, and examine information.
- **Workbook:** A spreadsheet file containing one or more worksheets.
- **Worksheet:** A grid or tab of cells inside a workbook.
- **Row:** A horizontal sequence of worksheet cells, ordinarily identified by number.
- **Column:** A vertical sequence of worksheet cells, ordinarily identified by letter.
- **Cell:** The intersection of a worksheet row and column.
- **Cell address:** A location such as B4 that identifies a cell in the worksheet.
- **Cell range:** A selected group of cells indicated by addresses such as A1:B5.
- **Header row:** The row identifying what each column represents.
- **Data table:** A structured group of cells with field headings and consistent observations.
- **Source data:** The recorded values from which summaries and charts are produced.
- **Source range:** The worksheet cells that supply categories, values, and headings to a chart.
- **Selection:** The cells or objects chosen for an action.
- **Numeric value:** A stored number that the spreadsheet can calculate or plot as a quantity.
- **Text value:** Characters interpreted as text rather than a number for calculation.
- **Data type:** The form of a value, such as text, number, or date, recognized by the spreadsheet.
- **Formula:** An expression beginning with an equal sign that calculates from values or cells.
- **Function:** A built-in spreadsheet operation, such as SUM, that produces a result from inputs.
- **Summary row:** A row containing an aggregate such as a total rather than an individual category record.
- **Total:** The sum or combined quantity of the values considered.
- **Category:** A named group used for organizing or comparing observations.
- **Category label:** Text that identifies one plotted group on a chart.
- **Record:** A set of related fields describing one item or event.

### Chart types and series

- **Chart:** A graphical display of selected data, often using bars, lines, or shapes.
- **Visualization:** A visual representation of selected information or relationships.
- **Chart type:** The visual form used to represent data, such as column, bar, line, or pie.
- **Column chart:** A chart comparing values using vertical bars.
- **Bar chart:** A chart comparing values using horizontal bars.
- **Line chart:** A chart joining plotted points to emphasize an ordered pattern, often over time.
- **Pie chart:** A circular chart dividing a complete total into proportional slices.
- **Scatter chart:** A chart positioning paired numeric observations on two numeric axes.
- **Stacked chart:** A chart displaying components as portions of a combined bar or column.
- **Clustered column chart:** A chart presenting separate data series side by side within shared categories.
- **Data series:** A set of related numeric values plotted together in a chart.
- **Data point:** One plotted observation or value within a series.
- **Plot:** To place values as marks in a chart according to defined scales.

### Axes, labels, and software controls

- **Plot area:** The region of a chart where the graphical values are displayed.
- **Chart title:** Text stating the subject of the chart.
- **Axis:** A numbered or labeled reference line used to organize plotted values.
- **Horizontal axis:** The chart's horizontal reference axis, often showing categories or periods.
- **Vertical axis:** The chart's vertical reference axis, often showing numerical measurements.
- **Axis title:** Text clarifying what an axis represents and what units are used.
- **Axis scale:** The numeric interval and limits used to place values along an axis.
- **Zero baseline:** An axis scale starting at zero, usually important for meaningful bar lengths.
- **Truncated axis:** A numeric axis that starts above zero or ends below a full expected range.
- **Category axis:** The chart axis that locates named groups or periods.
- **Value axis:** The chart axis that measures quantities according to a numerical scale.
- **Legend:** A key linking series names to the visual symbols or colors representing them.
- **Data label:** A value or text annotation displayed at or near a plotted mark.
- **Series name:** A heading identifying the meaning of one chart series.
- **Chart editor:** A software panel for editing a chart's type, source data, and presentation.
- **Chart Wizard:** A guided interface, used in LibreOffice Calc, for defining and configuring a chart.
- **Chart element:** A component such as a title, axis, data label, or legend.
- **Part-to-whole:** A relationship showing the share of a defined total represented by each component.
- **Percentage:** A fraction of a whole expressed per one hundred.
- **Share:** A portion of the total quantity, expressible as a count or percentage.

### Interpretation, updating, and quality control

- **Denominator:** The total used as the basis for calculating a proportion.
- **Mutually exclusive:** Describes categories that do not overlap for the observations being counted.
- **Trend:** A general direction or pattern across a sequence of observations.
- **Chronological order:** The sequence of periods from earlier to later.
- **Time period:** A defined interval such as a day, month, or year represented in data.
- **Missing value:** A data item that was not recorded or is unavailable, not necessarily zero.
- **Blank cell:** A cell without a recorded value; its significance depends on the data.
- **Zero value:** A numeric value that records an amount of none, distinct from missing information.
- **Filter:** A condition that shows selected records while ordinarily leaving the other records in place.
- **Hidden data:** Existing values excluded from the current display or chart view according to settings.
- **Automatic update:** A change in displayed results when connected source information changes.
- **Fixed range:** A specified source address that may not include newly added rows automatically.
- **Static image:** A picture that does not dynamically update with the spreadsheet values it depicts.
- **Linked chart:** A chart in a separate document with a connection to source data under supported controls.
- **Accessibility:** Designing information so people with different visual, motor, and other abilities can use it.
- **Contrast:** The difference in appearance between visual elements that supports reading and distinction.
- **Source note:** A short statement identifying the origin, scope, or limitations of presented data.
- **Verification:** A check that the chart's values, categories, and claims agree with the source.
- **Data integrity:** Accuracy and preservation of correct relationships among data.
- **Misleading scale:** An axis or graphical proportion that creates an unsupported impression of magnitude.
- **Reporting context:** Information about units, sources, periods, and scope needed to understand a claim.


These terms are tools for thinking, not only words to memorize. A learner should be able to say, for example: *“I selected the source range A1:B5, excluded the Total summary row, chose a column chart to compare categories, and checked that the numeric axis begins at zero.”*

## 10. Knowledge check

Choose **one answer** for each question. In the MGU dashboard, select **Check answers** to review your result and explanations when the quiz renderer is available. A complete manual answer key follows for paper-based learners. All figures in the assessment refer to the **fictional** datasets in this lesson; no account, purchase, personal record, or real spreadsheet is required.

:::quiz
? What is the main purpose of a spreadsheet chart?
- [x] To show selected data visually so patterns or comparisons are easier to examine
- [ ] To guarantee that every source number is accurate
- [ ] To replace all detailed source records permanently
! A chart presents source data visually; it does not verify or replace the source.

? Which chart best compares counts for four named kit categories?
- [ ] A line chart with unrelated names joined as a time trend
- [x] A column or bar chart
- [ ] A pie chart that includes the Total row as a category
! Bars or columns are a straightforward way to compare named categories.

? Which chart is usually well suited to monthly attendance in chronological order?
- [ ] A pie chart for unrelated months that are not parts of one whole
- [ ] A scatter chart chosen only because it looks complex
- [x] A line chart
! A line chart can emphasize an ordered sequence over time.

? When is a pie chart most appropriate?
- [x] When values are nonnegative parts of a clearly defined complete whole
- [ ] When categories are overlapping and can each count the same kit
- [ ] When the main need is finding exact individual record IDs
! Pie slices must represent meaningful components of one whole.

? What is the correct source range for the four kit categories without the optional total row?
- [ ] `A1:B6` with Total as a fifth category
- [x] `A1:B5`
- [ ] `B2:B5` when category names also need to appear
! A1:B5 contains headings and all four category observations without the optional summary.

? What is the value for the Student category in Dataset A?
- [ ] 12
- [ ] 60
- [x] 24
! The first kit category has 24 kits; 60 is the full four-category total.

? Which kit category is the smallest in Dataset A?
- [x] Workshop
- [ ] Visitor
- [ ] Student
! Workshop has 6 kits, fewer than Instructor 12, Visitor 18, and Student 24.

? What is the total of the four kit categories?
- [ ] 54
- [x] 60
- [ ] 120
! The four counts add to 24 + 12 + 18 + 6 = 60.

? Why should the Total summary row ordinarily be excluded from a category pie chart?
- [ ] It must always be displayed in the legend as its own group
- [ ] It is the only row that identifies actual values
- [x] It is a summary of the parts, not an additional distinct part
! Including 60 alongside its four components would double-count the data.

? What percentage of the 60 kits belongs to the Visitor category?
- [x] 30%
- [ ] 18%
- [ ] 60%
! 18 divided by 60 equals 0.30 or 30%.

? What should a clear chart title do?
- [ ] Substitute for checking the numeric scale
- [x] Tell readers what subject the chart shows
- [ ] Guarantee that the source is up to date
! A title provides topic context but does not prove data quality.

? In a basic single-series kit chart, what does “Number of kits” tell the reader?
- [ ] The names of the four categories
- [ ] The worksheet filename
- [x] The measurement unit on the value axis
! An axis title identifies what a plotted numeric scale measures.

? When is a legend most useful?
- [x] When a chart displays two or more series that need identification
- [ ] Only when the chart contains a single obviously labeled series
- [ ] As a substitute for all category labels and numeric axes
! Series names in a legend help readers distinguish related sets of values.

? Which application menu generally starts inserting a basic chart in Excel?
- [ ] File → Print
- [x] Insert
- [ ] Review → Spelling
! Excel chart creation typically starts with Insert and the chosen chart type.

? Which command typically starts creating a chart in Google Sheets on desktop?
- [ ] Tools → Spell check
- [ ] File → Rename
- [x] Insert → Chart
! Google Sheets provides chart insertion through the Insert menu.

? What does LibreOffice Calc use to guide chart setup?
- [x] Chart Wizard
- [ ] Mail Merge Wizard only
- [ ] A required password-reset dialog
! Calc commonly uses the Chart Wizard for type, source range, series, and labels.

? What should you do if a chart shows the wrong category names?
- [ ] Change the real records until the chart looks attractive
- [x] Inspect the source range and chart series/category settings
- [ ] Publish immediately because charts automatically correct names
! Incorrect labels often indicate a range or series-orientation issue.

? Which month has the highest attendance in Dataset B?
- [ ] January 2026
- [ ] June 2026
- [x] May 2026
! May has 20, the highest of the six fictional attendance values.

? How much did attendance change from May to June in Dataset B?
- [x] It decreased by 4
- [ ] It increased by 4
- [ ] It decreased by 16
! June 16 minus May 20 equals −4.

? Which statement about the six-month series is supported?
- [ ] Attendance increased in every consecutive month
- [x] June is above January but the values do not rise every month
- [ ] The line proves why attendance changed
! The sequence rises overall from 10 to 16 but falls in March and June.

? Why can a column-chart axis beginning at 90 be misleading for values 92 and 96?
- [ ] It guarantees all values are false
- [ ] It automatically converts both numbers to percentages
- [x] It can exaggerate the apparent difference in bar lengths
! The visual bar lengths represent only the portion above 90, which can distort the comparison.

? What is the actual numerical difference between 92 and 96?
- [x] 4
- [ ] 6
- [ ] 90
! Subtracting 92 from 96 gives 4, regardless of the displayed chart scale.

? What does a line chart by itself fail to establish?
- [ ] The displayed order of its periods
- [x] The cause of a rise or fall in the observations
- [ ] The plotted values from its source if correctly labeled
! Visual association does not establish why values changed.

? What does a data label placed on a chart often show?
- [ ] A hidden spreadsheet password
- [ ] Only the filename extension
- [x] The plotted value or identifying information near a mark
! Data labels can make exact plotted values easier to read.

? A new fifth kit category is added below the original range. What should you check?
- [x] Whether the chart source range expanded to include it
- [ ] Whether the new value must be deleted to preserve the old picture
- [ ] Whether every chart automatically includes all rows forever
! Fixed chart ranges may not automatically include newly added observations.

? What happens when a chart is pasted as an ordinary image into a report?
- [ ] It always maintains a live connection to every spreadsheet
- [x] It is generally a static snapshot that does not follow source edits
- [ ] It becomes the authoritative replacement for source data
! An image of a chart is usually static unless a different linking mechanism is used.

? Why can filtering create confusion when interpreting a chart?
- [ ] Filtering necessarily deletes every hidden record permanently
- [ ] Filtering changes all numeric values into text
- [x] The chart may include or omit hidden values depending on settings
! Check the filter state and chart handling of hidden data before reporting totals.

? Which is a sensible accessibility choice for a chart?
- [x] Readable labels and contrast without relying on color alone
- [ ] Very small text and series distinguished by shade alone
- [ ] Unlabeled axes and a decorative 3D effect
! Readability and non-color cues help more people interpret the chart.

? Which choice is strongest when exact record IDs and dates must be looked up?
- [ ] A pie chart without labels
- [x] A structured table
- [ ] A decorative chart with no underlying details
! A table is usually better for retrieving individual exact values.

? What is the best final check before publishing a chart?
- [ ] Only confirm that the colors are attractive
- [ ] Delete the source data after inserting the chart
- [x] Compare the chart with its source range, values, scale, labels, and reporting context
! A final chart audit verifies both numerical fidelity and clear presentation.

:::

:::answer Show the quiz answer key with explanations
1. **A.** To show selected data visually so patterns or comparisons are easier to examine. A chart presents source data visually; it does not verify or replace the source.
2. **B.** A column or bar chart. Bars or columns are a straightforward way to compare named categories.
3. **C.** A line chart. A line chart can emphasize an ordered sequence over time.
4. **A.** When values are nonnegative parts of a clearly defined complete whole. Pie slices must represent meaningful components of one whole.
5. **B.** `A1:B5`. A1:B5 contains headings and all four category observations without the optional summary.
6. **C.** 24. The first kit category has 24 kits; 60 is the full four-category total.
7. **A.** Workshop. Workshop has 6 kits, fewer than Instructor 12, Visitor 18, and Student 24.
8. **B.** 60. The four counts add to 24 + 12 + 18 + 6 = 60.
9. **C.** It is a summary of the parts, not an additional distinct part. Including 60 alongside its four components would double-count the data.
10. **A.** 30%. 18 divided by 60 equals 0.30 or 30%.
11. **B.** Tell readers what subject the chart shows. A title provides topic context but does not prove data quality.
12. **C.** The measurement unit on the value axis. An axis title identifies what a plotted numeric scale measures.
13. **A.** When a chart displays two or more series that need identification. Series names in a legend help readers distinguish related sets of values.
14. **B.** Insert. Excel chart creation typically starts with Insert and the chosen chart type.
15. **C.** Insert → Chart. Google Sheets provides chart insertion through the Insert menu.
16. **A.** Chart Wizard. Calc commonly uses the Chart Wizard for type, source range, series, and labels.
17. **B.** Inspect the source range and chart series/category settings. Incorrect labels often indicate a range or series-orientation issue.
18. **C.** May 2026. May has 20, the highest of the six fictional attendance values.
19. **A.** It decreased by 4. June 16 minus May 20 equals −4.
20. **B.** June is above January but the values do not rise every month. The sequence rises overall from 10 to 16 but falls in March and June.
21. **C.** It can exaggerate the apparent difference in bar lengths. The visual bar lengths represent only the portion above 90, which can distort the comparison.
22. **A.** 4. Subtracting 92 from 96 gives 4, regardless of the displayed chart scale.
23. **B.** The cause of a rise or fall in the observations. Visual association does not establish why values changed.
24. **C.** The plotted value or identifying information near a mark. Data labels can make exact plotted values easier to read.
25. **A.** Whether the chart source range expanded to include it. Fixed chart ranges may not automatically include newly added observations.
26. **B.** It is generally a static snapshot that does not follow source edits. An image of a chart is usually static unless a different linking mechanism is used.
27. **C.** The chart may include or omit hidden values depending on settings. Check the filter state and chart handling of hidden data before reporting totals.
28. **A.** Readable labels and contrast without relying on color alone. Readability and non-color cues help more people interpret the chart.
29. **B.** A structured table. A table is usually better for retrieving individual exact values.
30. **C.** Compare the chart with its source range, values, scale, labels, and reporting context. A final chart audit verifies both numerical fidelity and clear presentation.

:::

### Exit task: Explain a chart in your own words

Without looking back at the lesson, complete the following statements:

1. A chart differs from its source table because ______________________________.
2. To compare four named categories, I would choose a ________________________ chart.
3. To show attendance across six ordered months, I would choose a ______________ chart.
4. My chart source range for the kit example is _______________________________.
5. I must check the numeric axis because ____________________________________.
6. A chart should never be published until I have confirmed ____________________.

:::answer Show exit task sample responses
1. A chart presents selected data visually, while the table records specific values.
2. Bar or column.
3. Line.
4. `A1:B5`, including headings and four categories but excluding Total.
5. A truncated or unclear scale can distort the apparent size of differences.
6. The source values and range, titles, labels, units, scale, and context.
:::

## 11. MGU Library connections and next steps

The full workflow for introductory charting is **identify the question → organize reliable data → select only the relevant range → choose an appropriate chart → label the measures → verify every important comparison → share responsibly**. The chart should communicate a relationship that a reader can independently check, not substitute decoration for evidence.

### MGU course connections

- [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) — all nine lessons in this course.
- [Lesson 1: What Is a Spreadsheet?](/department/computer-science/basic-computer-skills/spreadsheet-skills/what-is-a-spreadsheet/) — foundations of worksheets, files, and records.
- [Lesson 2: Rows, Columns, and Cells](/department/computer-science/basic-computer-skills/spreadsheet-skills/rows-columns-and-cells/) — addresses, selections, and ranges.
- [Lesson 3: Entering and Formatting Data](/department/computer-science/basic-computer-skills/spreadsheet-skills/entering-and-formatting-data/) — stored values and display formats.
- [Lesson 4: Simple Formulas](/department/computer-science/basic-computer-skills/spreadsheet-skills/simple-formulas/) — arithmetic calculations and references.
- [Lesson 5: Common Functions](/department/computer-science/basic-computer-skills/spreadsheet-skills/common-functions/) — computing totals, averages, and counts.
- [Lesson 6: Sorting and Filtering](/department/computer-science/basic-computer-skills/spreadsheet-skills/sorting-and-filtering/) — organizing data and understanding hidden rows.
- [Lesson 8: Budgets and Lists](/department/computer-science/basic-computer-skills/spreadsheet-skills/budgets-and-lists/) — next: apply organization and calculations to practical planning.
- [Lesson 9: Checking Spreadsheet Errors](/department/computer-science/basic-computer-skills/spreadsheet-skills/checking-spreadsheet-errors/) — later: verify spreadsheet accuracy systematically.

### Official software documentation

- [Microsoft Support: Create a chart from start to finish](https://support.microsoft.com/en-us/excel/get-started/create-a-chart-from-start-to-finish) — choosing a chart and understanding its elements.
- [Microsoft Support: Select data for a chart](https://support.microsoft.com/en-us/excel/select-data-for-a-chart) — defining the cells used for category labels and values.
- [Microsoft Support: Available chart types in Office](https://support.microsoft.com/en-us/excel/available-chart-types-in-office) — how common and specialized chart types differ.
- [Google Docs Editors Help: Add and edit a chart or graph](https://support.google.com/docs/answer/63824?hl=en) — inserting charts and editing chart setup and appearance in Sheets.
- [Google Docs Editors Help: Edit your chart's axes](https://support.google.com/docs/answer/9085334?hl=en) — reviewing horizontal and vertical axis settings.
- [LibreOffice Help: Chart Wizard — Data Range](https://help.libreoffice.org/latest/en-US/text/schart/01/wiz_data_range.html) — identifying the chart's source cells.
- [LibreOffice Calc Guide: Creating Charts and Graphs](https://books.libreoffice.org/en/CG252/CG25206-CreatingChartsAndGraphs.html) — chart creation and interpretation in Calc.

Software menus, supported chart types, and editing screens can change. If your program differs, use the current official guidance for its edition. The same fundamental review questions—**what, where, which values, which chart, and how verified**—still apply.

### Continue the Spreadsheet Skills course

[← Previous lesson: Sorting and Filtering](/department/computer-science/basic-computer-skills/spreadsheet-skills/sorting-and-filtering/) · [Spreadsheet Skills course index](/department/computer-science/basic-computer-skills/spreadsheet-skills/) · [Next lesson: Budgets and Lists →](/department/computer-science/basic-computer-skills/spreadsheet-skills/budgets-and-lists/)

> **Lesson completion checklist:** I can distinguish a chart from the underlying table; choose column, bar, line, or pie for an appropriate question; select headings and values while excluding unrelated totals; create a chart in a common spreadsheet application; add informative titles and labels; read category counts, shares, and monthly differences; check the scale and hidden data; and verify a chart before sharing it.

:::terms
spreadsheet | Spreadsheet | A grid-based application or document used to store, calculate, and examine information. | 
workbook | Workbook | A spreadsheet file containing one or more worksheets. | 
worksheet | Worksheet | A grid or tab of cells inside a workbook. | 
row | Row | A horizontal sequence of worksheet cells, ordinarily identified by number. | 
column | Column | A vertical sequence of worksheet cells, ordinarily identified by letter. | 
cell | Cell | The intersection of a worksheet row and column. | 
cell-address | Cell address | A location such as B4 that identifies a cell in the worksheet. | 
cell-range | Cell range | A selected group of cells indicated by addresses such as A1:B5. | 
header-row | Header row | The row identifying what each column represents. | 
data-table | Data table | A structured group of cells with field headings and consistent observations. | 
source-data | Source data | The recorded values from which summaries and charts are produced. | 
source-range | Source range | The worksheet cells that supply categories, values, and headings to a chart. | 
selection | Selection | The cells or objects chosen for an action. | 
numeric-value | Numeric value | A stored number that the spreadsheet can calculate or plot as a quantity. | 
text-value | Text value | Characters interpreted as text rather than a number for calculation. | 
data-type | Data type | The form of a value, such as text, number, or date, recognized by the spreadsheet. | 
formula | Formula | An expression beginning with an equal sign that calculates from values or cells. | 
function | Function | A built-in spreadsheet operation, such as SUM, that produces a result from inputs. | 
summary-row | Summary row | A row containing an aggregate such as a total rather than an individual category record. | 
total | Total | The sum or combined quantity of the values considered. | 
category | Category | A named group used for organizing or comparing observations. | 
category-label | Category label | Text that identifies one plotted group on a chart. | 
record | Record | A set of related fields describing one item or event. | 
chart | Chart | A graphical display of selected data, often using bars, lines, or shapes. | 
visualization | Visualization | A visual representation of selected information or relationships. | 
chart-type | Chart type | The visual form used to represent data, such as column, bar, line, or pie. | 
column-chart | Column chart | A chart comparing values using vertical bars. | 
bar-chart | Bar chart | A chart comparing values using horizontal bars. | 
line-chart | Line chart | A chart joining plotted points to emphasize an ordered pattern, often over time. | 
pie-chart | Pie chart | A circular chart dividing a complete total into proportional slices. | 
scatter-chart | Scatter chart | A chart positioning paired numeric observations on two numeric axes. | 
stacked-chart | Stacked chart | A chart displaying components as portions of a combined bar or column. | 
clustered-column-chart | Clustered column chart | A chart presenting separate data series side by side within shared categories. | 
data-series | Data series | A set of related numeric values plotted together in a chart. | 
data-point | Data point | One plotted observation or value within a series. | 
plot | Plot | To place values as marks in a chart according to defined scales. | 
plot-area | Plot area | The region of a chart where the graphical values are displayed. | 
chart-title | Chart title | Text stating the subject of the chart. | 
axis | Axis | A numbered or labeled reference line used to organize plotted values. | 
horizontal-axis | Horizontal axis | The chart's horizontal reference axis, often showing categories or periods. | 
vertical-axis | Vertical axis | The chart's vertical reference axis, often showing numerical measurements. | 
axis-title | Axis title | Text clarifying what an axis represents and what units are used. | 
axis-scale | Axis scale | The numeric interval and limits used to place values along an axis. | 
zero-baseline | Zero baseline | An axis scale starting at zero, usually important for meaningful bar lengths. | 
truncated-axis | Truncated axis | A numeric axis that starts above zero or ends below a full expected range. | 
category-axis | Category axis | The chart axis that locates named groups or periods. | 
value-axis | Value axis | The chart axis that measures quantities according to a numerical scale. | 
legend | Legend | A key linking series names to the visual symbols or colors representing them. | 
data-label | Data label | A value or text annotation displayed at or near a plotted mark. | 
series-name | Series name | A heading identifying the meaning of one chart series. | 
chart-editor | Chart editor | A software panel for editing a chart's type, source data, and presentation. | 
chart-wizard | Chart Wizard | A guided interface, used in LibreOffice Calc, for defining and configuring a chart. | 
chart-element | Chart element | A component such as a title, axis, data label, or legend. | 
part-to-whole | Part-to-whole | A relationship showing the share of a defined total represented by each component. | 
percentage | Percentage | A fraction of a whole expressed per one hundred. | 
share | Share | A portion of the total quantity, expressible as a count or percentage. | 
denominator | Denominator | The total used as the basis for calculating a proportion. | 
mutually-exclusive | Mutually exclusive | Describes categories that do not overlap for the observations being counted. | 
trend | Trend | A general direction or pattern across a sequence of observations. | 
chronological-order | Chronological order | The sequence of periods from earlier to later. | 
time-period | Time period | A defined interval such as a day, month, or year represented in data. | 
missing-value | Missing value | A data item that was not recorded or is unavailable, not necessarily zero. | 
blank-cell | Blank cell | A cell without a recorded value; its significance depends on the data. | 
zero-value | Zero value | A numeric value that records an amount of none, distinct from missing information. | 
filter | Filter | A condition that shows selected records while ordinarily leaving the other records in place. | 
hidden-data | Hidden data | Existing values excluded from the current display or chart view according to settings. | 
auto-update | Automatic update | A change in displayed results when connected source information changes. | 
fixed-range | Fixed range | A specified source address that may not include newly added rows automatically. | 
static-image | Static image | A picture that does not dynamically update with the spreadsheet values it depicts. | 
linked-chart | Linked chart | A chart in a separate document with a connection to source data under supported controls. | 
accessibility | Accessibility | Designing information so people with different visual, motor, and other abilities can use it. | 
contrast | Contrast | The difference in appearance between visual elements that supports reading and distinction. | 
source-note | Source note | A short statement identifying the origin, scope, or limitations of presented data. | 
verification | Verification | A check that the chart's values, categories, and claims agree with the source. | 
data-integrity | Data integrity | Accuracy and preservation of correct relationships among data. | 
misleading-scale | Misleading scale | An axis or graphical proportion that creates an unsupported impression of magnitude. | 
reporting-context | Reporting context | Information about units, sources, periods, and scope needed to understand a claim. | 
:::
