# MGU Persian and Iranian History — Chapter 59
## Consolidated first-edition historical and technical audit

**Date:** November 15, 2026 (Pacific)  
**Chapter:** 59 — Chaldiran and the Ottoman-Safavid Struggle  
**Scope:** Direct review of Claude's 186,897-byte uploaded HTML, comparison against the approved 20-section responsibilities, selective independent checks of the 1514 and 1515–1516 chronology and source representations, structural HTML checks, JavaScript syntax testing, and headless Chromium render checks.

### Publication disposition

**APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — EDITORIAL LOCK, NOVEMBER 15, 2026** for the **corrected** file `/mnt/data/ch59.html`, subject to the disclosed limits below. The unmodified Claude draft **was not publication-ready** because it contained a false death date and invalid JavaScript. The corrected file preserves its original shell, styling, and all 20 historical sections; corrections were made selectively rather than rewriting the chapter.

This is not an assertion of exhaustive archival collation, full historiographic certification, a byte-for-byte Chapter 001 template comparison, or successful deployment to the live MGU website.

### Verified structure and quantitative review

| Test | Corrected result |
|---|---|
| Main historical sections | Exactly 20, §§59.1–59.20 |
| Division structure | 5 divisions, 4 historical sections each |
| Main historical direct narrative prose | ~11,483 words, counted from narrative paragraphs in the 20 sections, excluding feature boxes and headings |
| Main narrative paragraphs | 100 |
| Entire rendered page | ~22,298 words, including section features, front matter, and review |
| Chapter Opening | 6 paragraphs, plus scene-setting banner |
| Learning Objectives | 12 |
| Guiding Historical Questions | 10 |
| Chronology Preview | 13 rows |
| Timeline Study | 10 event rows |
| Primary Source Windows | 3 |
| Historical Debates | 2 |
| Historical Vocabulary boxes | 3 |
| Map Study, Timeline, Cause and Effect, Multiple Perspectives, Continuity/Change, Everyday Life | All present |
| Duplicate `id` attributes | None detected |
| Broken internal anchors | None detected |
| JavaScript | `node --check` passes after correction |
| Chromium desktop | Tested at 1440×900; page loads without JavaScript page errors or horizontal overflow |
| Chromium mobile | Tested at 390×844; page loads without JavaScript page errors or horizontal overflow after chronology-table fix |
| External research links | Four grounded scholarly reference links added; two additional print references |

### Publication-critical corrections applied

**1. Muhammad Khan Ustajlu death — historical misidentification (critical).**

The submitted §59.11 and the Major People review placed the death of Safavid governor **Muhammad Khan Ustajlu** during fighting in **1515**. This is incorrect. He was killed at **Chaldiran, 23 August 1514**. His brother and successor **Qara Khan / Kara Han Ustajlu** remained active in the Diyarbakır region and was killed in the **Battle of Koçhisar (Dede Kargın), May 1516**. Corrected §59.8, §59.11, the summary and review reference.

**2. Ottoman Upper Tigris sequence — material omission (important).**

The original compressed the aftermath into generic campaigns of 1515–1516. The correction distinguishes the Ottoman advance and submission of **Amid (Diyarbakır) in September 1515**, contested control of **Mardin in 1515**, and the defeat of Qara Khan at **Koçhisar in May 1516**, while leaving room for differing town-level dates, repeated changes of possession, and continued local negotiation. Chronology Preview and Timeline Study were aligned. The ten-event Timeline Study now matches the feature-scale target.

**3. Opening passage — compressed chronology (important).**

The initial prose described Selim entering Tabriz merely “a few days” after Chaldiran and then departing “a fortnight later.” Changed to **approximately two weeks between the battle and Tabriz entry**, and **within ten days for the occupation**, consistent with the scholarly sequence of 23 August, approximately 6–7 September, and mid-September withdrawal.

**4. Ottoman campaign departure — ambiguous referent (moderate).**

The original text said the army departed “from the Ottoman capital” in March. Research distinguishes movement from **Edirne in March** from the sultan's departure **from Istanbul toward Anatolia in April 1514**. Corrected to identify the two stages and explain why reference works provide different start dates.

**5. Inline JavaScript — hard syntax failure (critical).**

The submitted sidebar script included unprocessed double braces (`{{` and `}}`) in an `IntersectionObserver` callback and its options object. This is invalid JavaScript and stops active-sidebar highlighting. Replaced by valid single braces. The repaired script passed Node syntax check and Chromium page-error check.

**6. Mobile layout — chronology-table overflow (important).**

At a 390 px mobile viewport the 3-column timeline table caused the document width to expand beyond the screen. A localized mobile CSS rule now allows horizontal scrolling *within the chronology table*, without making the page itself horizontally overflow. Desktop rendering is preserved.

**7. Source Window status and bibliography — evidence transparency (important).**

Claude's three source windows were not independently collated to the named manuscripts or critical editions. Their language was revised to make explicit that these are **editorial source studies**, not verified quotations, transcriptions, or translated passages. The Ottoman campaign diary was distinguished from more explicitly celebratory court literature. An unnumbered, linked scholarly reference guide was added before the Chapter Reflection. The source windows remain pedagogically useful, but a future archival/critical-edition apparatus would be a distinct project.

### Targeted source verification

- Michael J. McCaffrey, “Čālderān,” *Encyclopaedia Iranica*, https://www.iranicaonline.org/articles/calderan-battle/ — 2 Rajab 920 / 23 August 1514; Ottoman battle deployment; Tabriz and withdrawal; historiographic limits.
- Osman G. Özgüdenli, “Ottoman-Persian Relations I: Under Sultan Selim I and Shah Esmāʿil I,” *Encyclopaedia Iranica*, https://www.iranicaonline.org/articles/ottoman-persian-relations-i-under-sultan-selim-i-and-shah-esmail-i/ — entry into Tabriz and September withdrawal, Kemah and Dulkadir in 1515, changing imperial priorities.
- M. Mehdi İlhan, “Bıyıklı Mehmed Paşa,” *TDV İslâm Ansiklopedisi*, https://islamansiklopedisi.org.tr/biyikli-mehmed-pasa — Bıyıklı Mehmed Pasha's Upper Tigris campaigns and Qara Khan's death at Koçhisar in May 1516.
- Hasan Tan, “Osmanlı-Kürt İlişkileri Bağlamında Koçhisar (Dede Kargın) Savaşı,” *Kadim Akademi SBD* 5/1 (2021), https://dergipark.org.tr/en/pub/kadimsbd/article/927805 — Ottoman-Kurdish coalition and defeat of the Safavid force commanded by Qara Khan.
- Martin van Bruinessen, *Agha, Shaikh and State* (1992), discussion of the Ottoman-Safavid frontier and Ustajlu succession; corroborates the distinct deaths of Muhammad Khan at Chaldiran and Qara Khan later.
- E. G. Browne, *A Literary History of Persia*, vol. IV (1924), https://persian.packhum.org/text/090001014/all — contextualizes the march from Edirne in March and occupation dates; use critically as older scholarship.

### Remaining documented limits

1. The authoritative **Chapter 001 source HTML** was not provided for direct byte-level shell/CSS comparison. The corrected file retains Claude's styling and layout, but no claim of exact parity with the original Chapter 001 model is made.
2. The source windows identify and discuss manuscript traditions and later historical works; **specific primary passages have not been manuscript-collated or verified against critical editions**. They are explicitly identified as editorial studies rather than primary quotations.
3. The Map Study is a **text-guided atlas exercise**. No historical atlas plate is embedded; students will require a suitable external map.
4. Cross-chapter links, stylesheet parity with live pages, remote assets, publishing infrastructure, accessibility audit beyond basic viewport and semantic inspection, and actual web deployment were not tested.
5. Historical verification was targeted, prioritizing chronology, commanders, battlefield arrangements, Ottoman-Safavid rivalry, and the most consequential factual claims. It was not an exhaustive line-by-line review of every secondary assertion.

### Locked output

**Canonical corrected HTML:** `chapter-059-chaldiran-and-the-ottoman-safavid-struggle.html`  
**Short identical alias:** `ch59.html`  
**Size (both HTML copies):** 190,510 UTF-8 bytes  
**SHA-256 (both HTML copies):** `d724517e5a59ac153cb4053657b2f86ba40b2fdb3575a65a88b0f56f814eb2ce`  

No further textual revisions are required for the first-edition scholarly textual release based on the checks recorded here. Any future primary-source collation, addition of an atlas plate, or exact Chapter 001 visual parity check should be handled as a separately scoped improvement rather than reopening the historical narrative wholesale.
