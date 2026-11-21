# MGU Chapter 111 — Consolidated Publication Audit

**Title:** The Trail of Broken Treaties  
**Textbook:** *Indigenous Peoples of North America: A Continental History*  
**Volume:** X — Sovereignty, Resurgence, and Contemporary Indigenous North America  
**Part:** XIX — Red Power and the Sovereignty Era  
**Audit date:** November 19, 2026  
**Disposition:** **Approved for first-edition textual HTML publication**, subject to institutional release approval; not a substitute for external scholarly peer review or examination of all un-digitized archival originals.

## 1. Source and reconstruction

- Supplied Claude draft: `Pasted text(20261119-140304).txt`, approximately 1,045 direct narrative words, 20 numbered headings, five divisions, incomplete features and front/back matter, with an HTML closing-tag error.
- Reconstructed the chapter under the previously approved Chapter 111 section-by-section plan and preserved the original section sequence and core interpretation. Each original direct prose paragraph was retained as an introduction to its section, then expanded substantially.
- Used completed Chapter 110's CSS, page shell, desktop sidebar, mobile Contents `<details>` navigation and working JavaScript behavior, rather than the broken source page structure.
- Expanded the historical argument without shifting extensive Wounded Knee or AIM institutional history into this chapter. Source evidence was primarily the 1972 Twenty-Point paper; February 1973 Episcopal report, NPS institutional history, and Smithsonian NCAI Impact Survey Team finding aid.

## 2. Narrative-length verification

**Counting rule:** Unicode-aware word count over only the direct-child `<p>` historical prose within `#s111-1` … `#s111-20`. Embedded instructional boxes, captions, source descriptions, front matter, and review questions are explicitly excluded. A separate simple whitespace calculation counts **13,203** words.

| Division | Final narrative | Planned allocation | Difference |
|---|---:|---:|---:|
| I — Origins and Caravan | 2,826 | 2,500 | +326 |
| II — Twenty-Point Position Paper | 2,908 | 3,100 | -192 |
| III — BIA Occupation | 2,737 | 2,900 | -163 |
| IV — Negotiations and Settlement | 2,579 | 2,600 | -21 |
| V — Aftermath and Legacy | 2,164 | 2,100 | +64 |
| **Total** | **13,214** | **13,200** | **+14** |

**Approved narrative range:** 12,500–14,500 words. **Pass.** Divisional allocations were nonbinding planning targets; the direct narrative now addresses all twenty section mandates and the combined length meets the approved range.

## 3. Structural and instructional apparatus

| Component | Final result |
|---|---:|
| Historical sections | 20 of 20 |
| Division banners | 5 of 5 |
| Instructional features | 22 of 22 |
| Primary Source Windows | 6 |
| Historical Vocabulary | 3 |
| Geography Studies | 3 |
| Historical Debates | 2 |
| Multiple Perspectives | 3 |
| Timeline Studies | 1 |
| Cause-and-Effect Study | 1 |
| Continuity-and-Change Studies | 2 |
| Everyday-Life Study | 1 |
| Opening paragraphs | 8 |
| Learning objectives | 12 |
| Guiding questions | 10 |
| Chronology entries | 20 |
| Major people, groups, and places | 34 |
| Vocabulary preview terms | 24 |
| Chapter summary paragraphs | 10 |
| Key terms | 34 |
| Review questions | 18 |
| Short-answer questions | 5 |
| Discussion questions | 7 |
| Writing exercises | 4 |
| Reflection paragraphs | 4 |
| Direct external hyperlinks | 18 |
| Broken internal anchor destinations | 0 |
| Duplicate IDs | 0 |

**Result: Pass.** The six distinct primary-source windows and three geography studies are individually implemented. Section 111.10 no longer relies on one dual-labeled box to meet two independent feature requirements.

## 4. Historical verification and editorial corrections

1. **Campaign initiation:** August 17, 1972, Rosebud planning, Denver October 1–2, October 6 west-coast departure points, and St. Paul workshops tied to the October 27 drafting period; clarified organization versus endorsement and AIM versus the wider coalition.
2. **Twenty-Point Position Paper:** All twenty proposals are substantively examined across §§111.5–111.8: Points 1–9 treaty/constitutional mechanisms; 10–13 land, membership and jurisdiction; 14–20 BIA reconstruction, commerce, cultural integrity, electoral participation and services. Distinguishes a proposed 110-million-acre land base from actual return of land.
3. **Federal restrictions:** Identifies Harrison Loesch's October 11 order and Louis Bruce's October 12 telegram as reproduced or reported through February 1973 Episcopal documentation; does not falsely claim independent inspection of the physical originals.
4. **November sequence:** Separates the Episcopal report's November 1 main-body arrival from the NPS focus on November 2; barricades and supplementary demands placed by November 3. Does not manufacture a minute-by-minute account.
5. **Arlington ceremony:** Preserves the differences between Arlington Ridge Park and Arlington National Cemetery descriptions and cautions that permit/court case geography requires examination of underlying judicial records.
6. **Nine Demands:** Includes all categories, the personnel disputes, urban/landless services, repatriation and Johnson–O'Malley education issue, while identifying the apparent transcription problem in the reproduced spelling.
7. **Negotiations:** Differentiates Adams's and federal officials' roles, the interagency review commitment, possible education audit and return travel support from acceptance or enactment of the Twenty Points.
8. **Damage and loss of records:** Distinguishes reported federal monetary estimates, visible physical damage, competing allegations and independently proven losses. Treats Indigenous land/enrollment/water records as substantive community interests.
9. **Indigenous perspectives:** Includes the NCAI November 10 Trimble statement and Smithsonian Impact Survey Team finding aid. Does not portray Indigenous organizations as uniformly aligned for or against the occupation.
10. **Publication metadata:** Corrected original 1974 Deloria publication attribution (Delacorte Press) versus a later University of Texas Press reprint; supplied archival or catalog links without invented documentary quotations.

## 5. Source windows and research limitations

Each source study includes a creator/holding or reproduction identification, date, evidence summary, direct link, limits, and analytical questions. Sources are: *Ann Arbor Sun* (December 1972); October 1972 Twenty Points; Loesch directive as quoted/reported in 1973; Paul Schmick photo via NPS; November 1972 Nine Demands as reproduced in 1973; and Charles Trimble's statement reproduced in 1973.

**Limits disclosed:** A post-event report reproducing an earlier document is not the original archival manuscript; an institutional collection description is not item-by-item examination; no verbatim transcript of every meeting or speech has been established; disputed damage amounts are attributed rather than accepted as final findings; the exact original ceremony-permit location and judicial materials were not independently checked in full. Bibliography links give readers a research path but a comprehensive live URL audit of every off-site page was not completed. This is a historical/textual approval, not certification by an independent historian.

## 6. Technical/browser audit

Tested the complete assembled HTML in Chromium at four sizes, including menu interaction and JavaScript error monitoring.

| Viewport | Document scroll width | JavaScript errors |
|---|---:|---|
| 1366 px | 1366 px | Pass |
| 768 px | 768 px | Pass |
| 390 px | 390 px | Pass |
| 320 px | 320 px | Pass |

- At 390px and 320px, the chronology has an independently scrollable container; the page itself has zero horizontal overflow.
- Mobile Contents opens, follows `#s111-14`, closes after navigation and closes on Escape with keyboard support.
- Desktop sidebar remains visible above 900px; mobile Contents replaces it below the breakpoint.
- No duplicate IDs or broken fragment anchors; no JavaScript page errors were reported.
- Browser screenshots are available for desktop (1366px), tablet (768px), phone (390px), and narrow phone (320px).

## 7. Release files

- Canonical HTML: `chapter-111-the-trail-of-broken-treaties.html`
- Short identical alias: `ch111.html`
- Consolidated audit: `ch111-audit.md`
- Single release archive: `ch111.zip`
- HTML byte size: **203,734** bytes.
- HTML SHA-256: `5bdef88bf5e73b4504849877911cc3d064acde23c9d87e32a58d10aacf9d473b`

**Determination:** Structural, word-length, documented-history, teaching-apparatus, HTML-integrity, and responsive-layout requirements satisfied for the established first-edition textual publication standard. No further general development pass is recommended. Historical research limits described above remain transparent and subject to future peer review.
