# MGU Indigenous Peoples of North America — Chapter 87
## Final Consolidated Scholarly Textual HTML Publication Audit

**Audit date:** November 14, 2026 (America/Los_Angeles)  
**Chapter:** 87 — *Boarding Schools and Residential Schools*  
**Volume VIII:** *Assimilation, Survivance, and Indigenous Modernity*  
**Part XV:** *The Assimilation Era*  
**Editorial decision:** **APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — LOCKED**.

## 1. Provenance, authoritative files, and integrity

- Directly revised Claude's uploaded HTML `/mnt/data/Pasted text(20261114-233928).txt` rather than reconstructing the chapter.
- Canonical output: `chapter-87-boarding-schools-and-residential-schools-publication-final.html`.
- Identical short download alias: `ch87.html`; identical editorial alias: `MGU_Chapter_87_Final.html`.
- UTF-8 output size: **228,164 bytes**.
- SHA-256 (all HTML aliases): `8fcf26ffcea813c0eca89add03ecf8debc68bce78130c7b483a1b33572315d8b`.
- A single holistic selective revision was followed by the consolidated production audit.

## 2. Structural and narrative verification

| Measure | Verified result |
|---|---:|
| Numbered sections | 20 of 20, §§87.1–87.20 |
| Standalone division banners | 5 of 5 |
| Direct narrative paragraphs | 106 |
| Strict direct historical narrative | **12,382 words** |
| Approximate all-chapter rendered text | 24,350 words |
| Front chronology | 20 entries |
| Major people/institutions opening register | 21 entries |
| Core vocabulary preview | 22 terms |
| Five documentary Primary Source Windows | 5 verified by explicit feature IDs |
| Historical Vocabulary boxes | 3 |
| Cause and Effect boxes | 2 |
| Multiple Perspectives boxes | 2 |
| Geography inquiries | 2 (text-guided) |
| Timeline study | 1 |
| Everyday Life / Continuity & Change / Historical Debate | 1 each |
| Source Register | 19 sourced entries, each with a link |
| External hyperlinks in whole document | 26 |
| Unique HTML IDs | 66 |
| Internal anchor links (desktop and mobile combined) | 118; all resolve |
| Wide tables within accessible scrollable wrappers | 3 of 3 |

**Method:** Count only direct `<p>` descendants of the 20 numbered narrative sections, excluding source windows, instructor features, opening, summary, questions, captions, and back matter. Regex tokenization retains apostrophes/hyphens inside words. This is separate from the all-text estimate.

### Direct narrative words by section

| Section | Words |
|---|---:|
| §87.1 | 619 |
| §87.2 | 630 |
| §87.3 | 746 |
| §87.4 | 740 |
| §87.5 | 760 |
| §87.6 | 596 |
| §87.7 | 581 |
| §87.8 | 765 |
| §87.9 | 663 |
| §87.10 | 527 |
| §87.11 | 581 |
| §87.12 | 647 |
| §87.13 | 588 |
| §87.14 | 608 |
| §87.15 | 518 |
| §87.16 | 588 |
| §87.17 | 515 |
| §87.18 | 540 |
| §87.19 | 627 |
| §87.20 | 543 |
| **Total** | **12,382** |

## 3. Completed substantive corrections

1. **Civilization Fund Act of March 3, 1819, Source Window 1.** Corrected the direct quotation to the statute's actual order of words: `for introducing them among the habits and arts of civilization`; explicitly noted its `with their own consent` condition. The statute did not itself authorize subsequent forced boarding-school placement. Original: https://en.wikisource.org/wiki/United_States_Statutes_at_Large/Volume_3/15th_Congress/2nd_Session/Chapter_85 .
2. **Mohawk Institute institutional origins.** Corrected the oversimplified 1831 founding date throughout narrative, opening chronology, instructional timeline, people register, summary and review terms: 1828 day-school beginnings, boarding by 1834. Evidence: https://ucp.manifoldapp.org/read/behind-the-bricks/section/91cdb321-ee40-49b5-957b-da7c605ad099 .
3. **Canadian per-capita finance.** Clarified that the 1892 Order in Council converted *industrial schools* (not boarding schools generally) to per-capita grants, implemented in July 1893. Boarding schools had separate, earlier per-pupil funding, and the effect on accountability differed. Revisions made in §§87.4, 87.6, 87.13 and relevant vocabulary. Historical source: TRC, *The History, Part 1*, pp. 43–44, https://publications.gc.ca/collections/collection_2015/trc/IR4-9-1-1-2015-eng.pdf .
4. **Early-1920s school terminology.** Removed the unsourced assertion of a definite formal 1923 institutional merger. The chapter now accurately treats use of the overarching category 'residential school' as a transition by the early 1920s, distinguishing it from any unverified single order.
5. **Blue Quills.** Separated the July 1970 occupation and agreement in principle from staged administration in 1971 (residence January 1; school July 1 as target). Corrected §87.19, chronology and reference entry. Community-produced evidence: https://www.bluequills.ca/Documents/BQ-30th-Anniversary-Book.pdf .
6. **Everyday Life, §87.12.** Replaced generic descriptions with an identifiable Canadian 1893 Qu’Appelle timetable (Canada, *Annual Report of the Department of Indian Affairs*, pp. 173–174, reproduced in TRC *The History, Part 1*, ch. 13) and U.S. March 2, 1892 Carlisle inspection (Charles H. Thompson, NARA RG 75, Entry 91, box 831, 1892-#8387). Clearly explains that the sources are different record types and do not establish every child's actual experience. https://carlisleindian.dickinson.edu/documents/inspection-report-charles-h-thompson .
7. **Direct narrative expansion.** Added concentrated historical analysis, not filler, on the Canadian financing distinctions, institutional definitions, dated daily-life sources, 1969 classroom/residence distinction, and the First Nations political meaning of Blue Quills. The resulting **12,382** direct narrative words are within the mandated 12,000–15,000 range.
8. **Documentary accessibility.** All five source windows contain direct links to document locations; the 19-entry Source Register has source links and additional identified archival studies. Long excerpts remain appropriately labeled editorial paraphrases.

## 4. Browser verification in headless Chromium

The finished HTML was rendered in Chromium at six viewport widths. All tests were run against the final file rather than the original manuscript.

| Width | Document-level horizontal overflow | Navigation interaction | JavaScript errors |
|---|---|---|---|
| 1440 px | 0 px | Desktop sidebar accessible | None |
| 1024 px | 0 px | Desktop sidebar accessible | None |
| 900 px | 0 px | Passed | None |
| 768 px | 0 px | Passed | None |
| 390 px | 0 px | Passed | None |
| 320 px | 0 px | Passed | None |

At 900 px and narrower, the desktop sidebar is replaced by a sticky, keyboard-focusable mobile contents control. Playwright verified opening, navigation to §87.12, automatic closing, and Escape-key dismissal. The three long tables scroll within their own regions. No page-level overflow, duplicate IDs, broken internal links, or JavaScript exceptions were detected. Desktop styles remain substantially intact.

## 5. Evidentiary and publishing limitations

- Five documentary studies present short, identified quotations only where source wording was checked; otherwise they are attributed editorial paraphrases, not facsimile-collated critical editions. The Davin, Carlisle, and Bryce studies are not manuscript-by-manuscript transcriptions.
- The Qu’Appelle timetable is a dated published administrative schedule; Carlisle's document is a dated inspection report. They should not be misconstrued as equivalent timetables or as evidence of every child's actual daily life.
- The geographic studies remain text-guided and do not contain embedded historical maps or photographs. An illustrated or facsimile scholarly edition would require further permissions, source-image cataloging and display work.
- Exact byte-for-byte parity with the original Chapter 1 template is not independently demonstrated; the existing Chapter 87 shell and institutional styling were preserved with selective enhancements.
- The browser test was local. Live-site deployment, site-wide CSS, external-link uptime and production-server integration were not tested. Major documentary destinations were researched, but this is not exhaustive source-by-source archival collation.

## 6. Editorial determination

**APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — LOCKED NOVEMBER 14, 2026 (PACIFIC).**

The direct historical narrative meets the approved word-count target; the chapter retains exactly 20 numbered sections across five divisions, all required teaching features, and a strengthened documentary apparatus. The reported historical, source, and mobile-usability issues have been corrected. No additional holistic expansion or iterative micro-passes are warranted for the textual first edition.
