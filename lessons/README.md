# MGU Departmental Lesson Dashboard — Full-Lesson Conversion Test

This version retains the **original prototype dashboard layout** but replaces the dummy lesson with the **complete "What Is a Computer?" lesson** converted from the supplied HTML document. Lesson content, interactive question data and vocabulary definitions now reside in the Markdown file, not in the dashboard's HTML or JavaScript.

## Files

- `dashboard.html` — reusable lesson dashboard shell, unchanged from the original prototype.
- `dashboard.css` — existing visual design plus minimal styling for Markdown tables, quiz forms, notes and vocabulary popovers.
- `dashboard.js` — generalized Markdown loader and renderer, now with tables and optional interactive extensions.
- `catalog.json` — independent department/course/lesson directory and reading-time metadata (45-minute estimate).
- `lessons/what-is-a-computer.md` — complete converted lesson: 11 numbered learning sections, objectives, activity directions, four tables, 13 glossary definitions, 12 linked vocabulary triggers, two expandable answer keys, eight quiz questions, feedback and resources.

## Run on Windows 11 (PowerShell)

Extract the ZIP and open PowerShell inside the extracted `mgu-lesson-prototype` folder.

```powershell
py -m http.server 8000
```

Open <http://localhost:8000/dashboard.html>. If port 8000 is in use, choose another port, e.g. `py -m http.server 8001`, then use the matching browser URL.

Edit `lessons/what-is-a-computer.md` and refresh to see updates without modifying the shell or stylesheet. To change the lesson directory or reading-time estimate, edit `catalog.json`.

**If replacing the previous demo installation:** replace **both** `dashboard.js` and `dashboard.css` along with the Markdown file, because the older renderer does not recognize tables, quizzes or vocabulary directives. Also replace `catalog.json` to update the displayed study-time estimate.

## Standard Markdown authoring

Normal Markdown used: headings (`##`, `###`), paragraphs, bold, italics, lists, quotes, links, inline code and GitHub-style pipe tables.

The dashboard-specific extensions are:

### Expandable answer key

```md
:::answer Show answers and explanations
1. First answer.
1. Second answer.
:::
```

Native `<details>` / `<summary>` are rendered by the dashboard. The Markdown file does not contain HTML.

### Automatic multiple-choice quiz

```md
:::quiz
? Which item is a computer?
- [ ] A notebook made of paper
- [x] A smartphone
- [ ] A wooden ruler
! A smartphone is a programmable computing device.

? What is 2 + 3?
- [ ] 4
- [x] 5
:::
```

Each `?` introduces a question, each `- [ ]` an incorrect choice, `- [x]` the **one correct choice**, and `!` an optional explanation. The dashboard adds radio controls, calculates the score, shows per-question feedback and provides a reset button. Quiz scores are not stored or transmitted.

### Clickable vocabulary

Use `[[computer|computer]]` inside the text. List each vocabulary item in the *same Markdown document* under a `:::terms` block (one line per term):

```md
:::terms
computer | Computer | A programmable device that processes information. | /library/encyclopedia/computer-science/computational-foundations/definition-of-a-computer
:::
```

Format: `id | display name | definition | optional safe link`. The definitions are data, not executable HTML. Use a normal Markdown glossary as well for persistent, easy-to-read reference.

## Limitations and next steps

- The current visual design is intentionally unchanged, pending the planned MGU branding/logo redesign.
- This is still a lightweight, dependency-free Markdown subset, not full CommonMark. For a production university-wide system, use a maintained Markdown parser plus HTML sanitizer, formal content schemas and automated tests.
- Lesson quizzes are **practice self-assessments**. Correct options are visible to anyone reading the Markdown source; this is not a secure examination system.
- Site-relative links in the original lesson point to MGU's live website paths; they may not resolve on `localhost` because the MGU reference pages are not in this prototype's folder.
- Loading Markdown requires JavaScript. Native answer disclosures work without *additional* JavaScript after the Markdown has been rendered.
- The course structure is still managed centrally through `catalog.json`, while each lesson's content and assessment data are separate.
