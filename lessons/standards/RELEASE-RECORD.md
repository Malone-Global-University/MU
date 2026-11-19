# MGU Lesson Content Standards — Release 1.0

- **Date:** November 18, 2026 (America/Los_Angeles)
- **Status:** Proposed adoption package; approve and use as the baseline for subsequent departmental lesson production.
- **Catalog protocol:** `schemaVersion: 1` (unchanged, backward compatible).
- **Public route:** `/lessons/?content={globally-unique-lesson-id}`.
- **Format:** One central nested `catalog.json` and UTF-8 Markdown in `content/{department}/{course}/{lesson}.md`.
- **New local authoring resources:** Catalog specification, Markdown specification, JSON Schema, starter template, validator, registration tool, samples.
- **Excluded from changes:** Existing `index.html`, `dashboard.js`, `dashboard.css`, current published `catalog.json` and `what-is-a-computer.md`.

## Verification record

- Validated existing working content: 1 department, 1 course, 1 lesson, 2 answer blocks, 1 quiz, 8 questions, 12 terms, 4 tables: PASS, 0 errors/0 warnings.
- JSON Schema draft 2020-12 syntactic check: PASS.
- Registration tool dry run: PASS; no catalog mutation.
- Registration in an isolated temporary copy: PASS; backup written.
- Validation of a two-department catalog and starter lesson: PASS.
- Negative tests: duplicate global lesson ID and malformed multi-correct quiz rejected as expected.
- Full online deployment/browser testing: Not required for these additive authoring tools; perform regular browser checks for content releases.
