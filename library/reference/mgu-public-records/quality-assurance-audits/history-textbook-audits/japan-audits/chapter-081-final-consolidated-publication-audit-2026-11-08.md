# MGU Japanese History — Chapter 81
## Final Consolidated Historical, Bibliographic, Structural, and HTML Publication Audit

**Audit date:** November 8, 2026 (America/Los_Angeles)  
**Book:** *Japanese History: From Jōmon Japan to the Twenty-First Century*  
**Part XI:** Empire, Militarism, and Total War  
**Chapter 81:** *Surrender, Repatriation, and the Collapse of Imperial Japan*  
**Final decision:** **APPROVED FOR PUBLICATION — LOCKED** as a first-edition, standalone, scholarly **textual HTML** chapter, subject to the explicitly disclosed limitations at the end of this report.

## 1. Canonical artifact and chain of custody

- **Original Claude draft:** `/mnt/data/Pasted text(20261109-001623).txt`, **157,532 UTF-8 bytes**, SHA-256 `316f3b3c92af78ae6e8cd34605499891b405d7e329435fc0f49f3e16c2b09da1`.
- **Canonical revised chapter:** `/mnt/data/chapter-081-surrender-repatriation-and-the-collapse-of-imperial-japan-publication-final.html`, **206,123 UTF-8 bytes**, SHA-256 `c543c7ac239d52d2b6bf01844e456cdf7a144f71f7e029eb407643409dd8cc3f`.
- **Deployment alias:** `/mnt/data/chapter-81-surrender-repatriation-and-the-collapse-of-imperial-japan.html`, byte-identical to the canonical file (same size and hash).
- **Governance checked:** `Japanese Chapter outline(4).txt`, `Japanese Master instructions for Claude(4).txt`, and `Pasted text(20261108-150139).txt` (Chapter 81 production plan); prior independent audit `/mnt/data/chapter-081-independent-consolidated-publication-audit-2026-11-08.md`.

This was a **direct holistic revision of the supplied manuscript**, not a replacement chapter, redesign, or summary. The original HTML shell, navigation conventions, CSS palette, script, numbered section titles, central chronology, feature set, and review architecture were preserved, with narrow accessibility/responsiveness corrections.

## 2. Structural acceptance results

| Binding requirement | Final verification |
|---|---|
| Exact chapter title and assigned purpose | PASS |
| Five divisions with distribution 5 + 4 + 6 + 4 + 1 | PASS |
| Exactly §§81.1–81.20, all original headings retained | PASS |
| Historical opening, objectives, guiding questions, context, chronology, people, vocabulary | PASS |
| 13 in-chapter instructional features | PASS |
| Three primary-source windows (Potsdam, rescript, General Order No. 1) | PASS |
| Two vocabulary features | PASS |
| Timeline, geography, historical data, historical debate, perspectives, everyday life, cause/effect, continuity/change | PASS |
| Comprehensive review and research apparatus | PASS |
| 500–800-word §81.20 synthesis | PASS — **636 words** |
| 25–35 source-register entries | PASS — **35 entries**, 23 with direct primary/catalog links and an additional supporting link |
| 12,000–16,000 direct historical narrative words in §§81.1–81.19 | PASS — **13,648 words** |
| No duplicated IDs or unresolved internal links | PASS |
| Functional desktop/mobile HTML | PASS |

**Narrative counting method:** Python/Beautiful Soup counted whitespace-delimited tokens within the direct child narrative `<p>` nodes of each numbered section. Source-note paragraphs, feature boxes, headings, opening, tables, sidebars, section labels, and review apparatus were excluded. This is a production word-count convention; it is not a linguistic tokenization algorithm.

| Division | Sections | Submitted narrative | Publication-final narrative | Plan |
|---|---|---:|---:|---:|
| I — Decision to surrender | 81.1–81.5 | 2,678 | **3,244** | 2,900–3,300 |
| II — Collapse of authority across Asia | 81.6–81.9 | 1,896 | **2,754** | 2,600–3,100 |
| III — Demobilization and repatriation | 81.10–81.15 | 2,530 | **4,568** | 4,000–4,800 |
| IV — Families, reintegration, belonging | 81.16–81.19 | 1,385 | **3,082** | 2,700–3,400 |
| **Direct narrative §§81.1–81.19** | | **8,489** | **13,648** | **12,000–16,000** |
| V — Historical synthesis | 81.20 | 622 | **636** | 500–800 |

The original manuscript's most significant shortcoming—underdeveloped repatriation and social consequences—was remedied without expanding the concluding synthesis to manufacture length. **Division III remains the largest**, as expressly required. Sections 81.11–81.19 now deliver approximately 695–881 direct narrative words each, rather than a succession of abbreviated summaries.

## 3. Historical expansion performed

**Decision and surrender, §§81.2–81.5:** added analysis of how leaders received incomplete reports, differences between the Supreme War Council, cabinet, and imperial conferences, postwar apologetic sources, the decisive but institutionally exceptional role of the emperor, the failed coup, and the practical demands of regional capitulations. The rescript's **August 14 issuance** and **August 15 broadcast** remain explicitly distinct. Soviet declaration and Manchurian invasion chronology is stated in Moscow/local-time terms without the draft's internally contradictory description.

**Imperial dissolution, §§81.6–81.9:** strengthened Korean committee activity, the early months of Soviet and American occupation, the origin and eventual institutionalization of the 38th parallel, the politics of the Manchurian military vacuum, the differing meanings of administration versus sovereignty in Taiwan and the northern islands, and the agency of Indonesian and Vietnamese nationalists. The emergence of separate Korean states remains dated to **1948**, not read backward into the 1945 surrender zones.

**Movement and detention, §§81.10–81.15:** substantially developed local versus overseas demobilization, retained units in China, British use of surrendered personnel, ship and port constraints, receiving-station identity documentation, quarantine, welfare arrangements, colonial-by-colonial departures, the logistical catastrophe of Manchurian settlement, the definition of Soviet detention statistics and camp conditions, and former colonial subjects' constrained return options. Included the **38,935/6,830** Chinese laborer findings and *Ukishima Maru* official **549** fatalities (524 Koreans and 25 Japanese), with expressly acknowledged survivor disagreement.

**Social/legal aftereffects, §§81.16–81.19:** developed women’s exposure to flight, coercion, and postwar medical governance; distinguished the 1948 survey's broad **koji** categories from narrow battle orphanhood; added the scholarly documentation of organized abortions and its legal context; developed veterans' economic and political reintegration and the unequal treatment of former Korean and Taiwanese service personnel; expanded local housing, labor, reclamation projects, registration, and memories of repatriates; and anchored citizenship changes in the **1945 franchise**, **1947 alien registration**, and **1952 nationality** chronology rather than an imaginary instant 1945 change.

## 4. Document and factual spot-checks

**Primary windows are explicitly editorial paraphrases, not quotations or facsimile-collated translations.** Each retains provenance, context, interpretation/limitations, and four student questions:

1. **Potsdam Declaration, July 26, 1945** — checked against National Diet Library English text: https://www.ndl.go.jp/constitution/e/etc/c06.html . Maintains the critical distinction between unconditional surrender of **armed forces** and absence of explicit instructions abolishing the imperial house.
2. **Imperial Rescript, August 14/15, 1945** — checked against NDL document record and chronological apparatus: https://www.ndl.go.jp/constitution/e/shiryo/01/017shoshi.html . Its silences and political self-exculpation are explained rather than quoted as objective causal analysis.
3. **General Order No. 1, September 2, 1945** — checked against Nagoya University's SCAPIN reproduction: https://jahis.law.nagoya-u.ac.jp/scapindb/docs/scapin-1 . The earlier draft's mistake that the order originated **Soviet presence in Manchuria and Sakhalin** was corrected: Soviet operations predated September 2, while the order assigned military surrender authorities.
4. **Instrument of Surrender** — retained and explicitly distinguished from the August broadcast: https://www.archives.gov/milestone-documents/surrender-of-japan .

**Population and special-case evidentiary anchors:**

- JACAR: roughly **6.6 million** Japanese overseas at defeat and **6.24 million** repatriated by end 1947. These figures describe different counting dates and do not permit arbitrary subtraction or addition to other population categories. https://www.jacar.go.jp/english/exhibition/glossary_en/fukuin-hikiage/
- Maizuru museum: **18 receiving ports**, approximately **660,000** persons through Maizuru by 1958; port figure overlaps with Japanese returns nationally. https://www.m-hikiage-museum.jp/english-education/04-repatriation.html
- Maizuru museum biography of **Ise Hashino** and her search for Shinji: https://m-hikiage-museum.jp/english-education/05-port_maizuru.html . The feature treats song/memory separately from museum-documented biography.
- **Soviet internment:** original numerical estimates retained only as approximate, definition-dependent ranges and framed by Andrew Barshay, *The Gods Left First* (University of California Press, 2013): https://doi.org/10.1525/california/9780520276154.001.0001 . No claim is made that every Soviet or Japanese register has been completely reconciled.
- **Manchurian civilian deaths:** removed the unjustifiably broad and unqualified claim that published estimates all exceed 100,000; the expanded analysis explicitly explains the incompatible civilian, settler and chronological denominators. See Mariko Asano Tamanoi, *Memory Maps* (University of Hawai‘i Press, copyright 2009): https://uhpress.hawaii.edu/title/memory-maps-the-state-and-manchuria-in-postwar-japan/ .
- **Abortion/relief:** new named attribution to Yoko Matsubara, *Japan Forum* 33, no. 3 (2021): 318–337, https://doi.org/10.1080/09555803.2020.1831575 . The manuscript distinguishes medical treatment, social/eugenic rationales, consent, and documented variation among facilities.
- **1948 orphan survey:** clarified that the **123,511 total** was categorized across different classes rather than being exclusively directly battle-orphaned children; source notes the one-person discrepancy when the printed subtotals are added. Mariko Asano Tamanoi, *Asia-Pacific Journal: Japan Focus* (2020): https://apjjf.org/2020/13/tamanoi .
- ***Ukishima Maru*:** official **549** fatalities, contested passenger/mortality totals; Jonathan Bull and Steven Ivings, *Asia-Pacific Journal: Japan Focus* (2021): https://apjjf.org/2021/19/bull-ivings .
- **Chinese forced laborers:** **38,935 brought** and **6,830 deaths**; figures from Japan's postwar Foreign Ministry investigation also set out in the Japanese Supreme Court's April 27, 2007 judgment, with supporting documentary analysis by William Underwood: https://apjjf.org/william-underwood/2187/article . The official judgment URL in the register can temporarily redirect to a maintenance page; an alternative accessible corroborating link is included.
- **Shanxi personnel:** the earlier 'thousands reportedly stayed' is now anchored in the Japan–China Joint History Research Report's Japanese-side English provisional translation, p. 192 (**approximately 2,600** former First Army personnel with Yan Xishan; broader historians' figures count different categories). Official compilation: https://www.mofa.go.jp/mofaj/files/100512970.pdf . Contextual scholarship: Gillin and Etter, *Journal of Asian Studies* 42 (1983): 497–518; Amy King and Sherzod Muminov, *Journal of Cold War Studies* 24 (2022): 200–230.
- **1952 nationality:** a Japanese Ministry of Justice circular of April 19, 1952 is reproduced in the UN *Legislative Series*, vol. 14, p. 60: https://digitallibrary.un.org/record/814616/files/ST_LEG_SER-B_14-EN.pdf . Correctly distinguishes colonial subjecthood, provisional alien registration, and later nationality interpretation.

## 5. Source-register assessment

**Final register:** 35 entries. These include primary declarations/orders; governmental, legal, archival and museum records; original scholarship on repatriation; wider interpretation on surrender, Korean liberation, Manchuria, and Southeast Asia. **23 entries** contain a directly linked electronic document, archival exhibit, article DOI, or library/catalog source; a second corroborative link is provided for the Chinese laborer record. The remainder give conventional bibliographic identifiers for print works. Source lines are supplemented by direct hyperlinks in the three documentary features and targeted numbered sections.

The original draft's prepublication statement that sources still needed verification has been replaced with a more accurate description of the register. Verifying an edition or official publication page **does not certify** page-by-page reading of an entire monograph; this distinction is retained as an editorial limit, rather than concealed.

## 6. HTML, JavaScript, and viewport validation

**Parsing and navigation:** 20 expected section IDs present; **zero** duplicate HTML IDs; **53** internal anchors examined with **zero** unresolved targets; **13** feature boxes in the expected distribution; all three source windows labeled as editorial paraphrases; all **three** tables enclosed in accessible focusable internal scroll containers; no JavaScript runtime exception in any tested Chromium session.

**Chromium rendering:** HTML loaded through browser `set_content` (the local file URL is disallowed by this environment's browser restrictions); result is equivalent for the self-contained CSS and JavaScript tests. Widths below are CSS pixels:

| Viewport | Document scroll width | Result |
|---:|---:|---|
| 1440 | 1440 | PASS — desktop sidebar available |
| 1024 | 1024 | PASS — no document-level overflow |
| 768 | 768 | PASS — sidebar hidden per existing breakpoint |
| 390 | 390 | PASS — wide tables scroll locally |
| 320 | 320 | **PASS** — formerly reported 336px overflow eliminated |

At 320, 390 and 1024 pixels, a table's inner content can extend beyond the viewport **within a controlled scrollable element**, while the document itself does **not** scroll horizontally. This is intended behavior, not an uncorrected overflow bug. The table wrappers are keyboard-focusable and labeled as scrollable historical tables.

## 7. Publication limits and final disposition

**APPROVED FOR PUBLICATION — LOCKED** for the first-edition scholarly textual HTML chapter. The user may deploy the canonical file or the identical requested-name alias.

The approval is explicitly **not** a claim of exhaustive archival collation, exhaustive Japanese/Russian/Korean/Chinese original-language manuscript checking, or full monograph-by-monograph page citation verification. All three documentary windows are labeled **editorial paraphrases**, not source-page-collated translations. The map feature is a text-only geographic exercise intended for use with an external historical atlas and **does not include an embedded map plate**. Exact conformity to an earlier Chapter 2 model cannot be independently byte-comparison certified because that model was not furnished among the present uploads; the supplied Chapter 81 HTML presentation shell was preserved. External pages, including a government court database, may undergo future availability or content changes.

The final manuscript fulfills the binding chapter plan in narrative scale, section distribution, historical purpose, apparatus, citation visibility, and responsive HTML operation. No further revisions are necessary for the agreed first-edition **textual** publication standard absent a newly demonstrated material error.
