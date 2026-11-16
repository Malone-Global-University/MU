# MGU Japanese History — Chapter 78
## Consolidated Final Publication Audit and Source Register Verification

**Audit date:** November 7, 2026 (America/Los_Angeles)  
**Chapter:** 78 — *Pearl Harbor and the Expansion of the Pacific Empire*  
**Volume / Part:** Japanese History: From Jōmon Japan to the Twenty-First Century; Part XI — Empire, Militarism, and Total War  
**Scope:** First-edition scholarly textual HTML, with research and image limitations identified below  
**Editorial decision:** **APPROVED FOR PUBLICATION — LOCKED**, subject to the disclosed scope limits; no routine micro-pass warranted.

### 1. Canonical deliverables and provenance

- **Claude starting draft:** `/mnt/data/Pasted text(20261108-041325).txt` — 198,832 UTF-8 bytes; SHA-256 `85364206c7edae2f42e06ee6e9b790eda2d1ffa2a004586f91890be26cf90e17`.
- **Canonical revised edition:** `/mnt/data/chapter-078-pearl-harbor-and-the-expansion-of-the-pacific-empire-publication-final.html` — 202,907 UTF-8 bytes; SHA-256 `673ce216364a235f4ad04efc2fca4d513a6e72914e558189328d58faed2f0853`.
- **Audit:** `/mnt/data/chapter-078-final-publication-audit-2026-11-07.md` (this report).

The file retains the authoritative-outline title, which properly takes precedence over the alternate working title in the production plan. This revision is a targeted publication edit of Claude's 20-section chapter, not a wholesale rewrite.

### 2. Binding production plan — final measurement

| Check | Verified result | Disposition |
| --- | ---: | --- |
| Numbered historical sections | §§78.1–78.19 | PASS |
| Synthesis and review | §78.20 | PASS |
| Numbered main sections | Exactly 20, consecutive | PASS |
| Division distribution | 4 / 5 / 4 / 6 / 1 | PASS |
| Direct historical prose, §§78.1–78.19 | **13,007 words** | PASS — within 12k–16k |
| Direct synthesis, §78.20 | **726 words** | PASS |
| Total direct numbered-section prose | **13,733 words** | PASS |
| Instructional features | **13**, identical IDs/classes | PASS |
| Primary Source Windows | Three, individually anchored | PASS with caveat |
| HTML IDs | 53 unique, zero duplicates | PASS |
| Internal anchor links | 53/53 resolve | PASS |
| Source Register | 23 distinct entries | PASS |
| Hyperlinked external references | 32 (including in-text windows) | PASS as presence check |

**Counting method:** Direct words are regex-based Unicode word-token counts of each numbered `<section>`'s *immediate-child historical paragraphs*, excluding nested `.feature-box` text, headings, preliminary material, sidebars, references, summary and review material. A different word-processor tokenizer may produce slightly different totals. Only the historical paragraph revised for source precision in §78.5 changes the historical direct-prose total materially; no general expansion is required.

**Division narrative allocation (same method):** I §§78.1–78.4 = 3,146; II §§78.5–78.9 = 3,707; III §§78.10–78.13 = 2,697; IV §§78.14–78.19 = 3,457; V §78.20 = 726. All divisions are substantively developed. The shorter §§78.14–78.15 and 78.19 were retained; their structure and scope are sufficient for the first edition.

### 3. Targeted historical and source corrections actually applied

**3.1 December 1, 1941 Imperial Conference.** The first Primary Source Window now distinguishes the conference's *formal war resolution* from Prime Minister Tōjō's separately documented *explanation* of that decision. JACAR's official exhibition expressly distinguishes its material descriptions and identifies decision reference `B02032967300` and explanation reference `B02032967200`: https://www.jacar.go.jp/english/exhibition/nichibei/popup/pop_27.html . Their contents are described as **editorial paraphrase** rather than as a reconstructed quotation or a single merged document. The war decision is presented as Japan's choice made in a constrained diplomatic context, not as the automatic result of the Hull Note.

**3.2 Greater East Asia Joint Declaration, November 6, 1943.** The second Primary Source Window gives a direct JACAR link and Japanese Foreign Ministry diplomatic-archive reference **`B02032957800`**, seven images: https://www.jacar.archives.go.jp/das/meta-en/B02032957800 . Its historical claims are treated as *official rhetoric* to be tested against Japanese imperial domination; the English language in the window is clearly marked as editorial paraphrase, **not** a fully collated translated text.

**3.3 USS Enterprise June 8, 1942 action report.** The third Primary Source Window is tied to the actual report of Capt. George D. Murray, published by the Naval History and Heritage Command: https://www.history.navy.mil/research/archives/digital-exhibits-highlights/action-reports/wwii-battle-of-midway/uss-enterprise-action-report.html . The report explicitly states that *Enterprise* faced a threat of air attack but **suffered no actual attack and no ship damage** in the June 4–6 battle. The former generalized phrase describing the ship's 'defense against Japanese aircraft' has been replaced by accurate discussion of combat air patrol and precautions; preliminary ship-loss claims are identified as contemporary estimates, not established retrospective facts.

**3.4 Everyday Life: named Singapore household instead of an invented composite.** The replacement feature is **“A Documented Singapore Household: Lim Bo Yam and the Lim Family.”** The National Heritage Board's *Hougang Heritage Trail: A Companion Guide* (2020), pp. 16–17, reproduces Lim Bo Yam's recollections of Japanese troops searching the family's home, separating women and men, bringing male relatives and workers for screening, and nine men failing to return from a group of 22. This is supported by identifiable local and National Archives material; its interpretation is bounded by the testimony, without adding invented dialogue or invented familial routines. Source: https://www.nhb.gov.sg/-/media/Nhb/Files/Resources/Heritage%20Trails/20201030_NHB_Hougang%20Trail_Booklet_Lowres_Spreads.pdf?la=en . A **separate** National Archives of Singapore interview with **Valupillai s/o Pandarapillai** is used for his retrospective observation about widespread hunger, without attributing it to the Lim household. Exhibition: https://corporate.nas.gov.sg/discover-archives/media/survivingthejapaneseoccupation/ . The two identified witnesses are not conflated. Oral testimony is contextualized as retrospective evidence.

**3.5 Sook Ching casualty attribution, §78.5.** The main narrative no longer presents the frequently repeated 25,000–50,000 range as if directly established for one geographic scope. It distinguishes the National Museum of Singapore's teaching-guide Japanese estimates **5,000–6,000** from unofficial **20,000–30,000** estimates for the Singapore operation, noting that broader or differently defined estimates are not interchangeable. Source: National Heritage Board, *Investigating History: Singapore under the Japanese Occupation 1942–1945*, Sook Ching section, p. 33, https://www.nhb.gov.sg/nationalmuseum/-/media/nms2017/documents/school-programmes/teachers-hi-resource-unit-3-japanese-occupation.pdf?la=en . Neither estimate is presented as a settled census of victims. Chapter 79 retains responsibility for an extended assessment.

**3.6 Aircraft production, shipping and petroleum.** The Data Study no longer relies on anonymous rounded series. It identifies the Japanese *all-aircraft* 1941–1944 series (5,088 / 8,861 / 16,693 / 28,180, reproduced in a USSBS-related compilation) and the Aircraft Industries Association of America's U.S. *military-aircraft* series (19,433 / 47,836 / 85,898 / 96,318). It **explicitly warns that these are not perfectly matched categories**, that the U.S. category includes Lend-Lease and U.S.-financed aircraft built in Canada, and that U.S. total military output was not synonymous with Pacific-theater availability. Sources linked in the HTML:
- AIAA / *Aircraft Year Book 1956*, U.S. military annual series: https://www.aia-aerospace.org/wp-content/uploads/the-1956-aircraft-year-book.pdf
- USSBS, *The Japanese Aircraft Industry*: https://www.ibiblio.org/hyperwar/NHC/NewPDFs/USAAF/United%20States%20Strategic%20Bombing%20Survey/USSBS%20Japanese%20Aircraf%20Industry.pdf
- Japanese annual tabulation (secondary): https://pwencycl.kgbudge.com/P/r/Production.htm
- USSBS, *The War Against Japanese Transportation, 1941–1945*: https://www.ibiblio.org/hyperwar/NHC/NewPDFs/USAAF/United%20States%20Strategic%20Bombing%20Survey/USSBS%20War%20Against%20Japanese%20Transportation%201941-1945.pdf

**Statistical qualification:** These sources were verified for document identity and series descriptions; not every original figure was independently reconciled across original agency ledgers. No exact force-availability ratio should be derived from the table without further statistical normalization. Shipping tonnage, petroleum stocks, imports and tanker availability are explicitly distinguished.

### 4. Source Register modernization

The earlier 10 grouped entries were replaced with **23 individually identified references**: 13 primary/institutional/reference records and 10 verified scholarly books. The register now supplies source roles, titles, dates, publication details and links, rather than requiring students to complete the basic bibliography for the editors. The register includes the primary-source identifiers above, both Singapore witness/heritage sources, aircraft and transportation surveys, appropriate military-history organizations, and the following verified works:

- Eri Hotta, *Japan 1941: Countdown to Infamy* (Alfred A. Knopf, 2013).
- Akira Iriye, *The Origins of the Second World War in Asia and the Pacific* (Longman, 1987).
- Jonathan Parshall and Anthony Tully, *Shattered Sword: The Untold Story of the Battle of Midway* (Potomac Books, 2005).
- Richard B. Frank, *Guadalcanal: The Definitive Account of the Landmark Battle* (Random House, 1990; Penguin ed. 1992).
- Christopher Bayly and Tim Harper, *Forgotten Armies: The Fall of British Asia, 1941–1945* (Belknap Press of Harvard University Press, 2005).
- Benedict R. O’G. Anderson, *Java in a Time of Revolution: Occupation and Resistance, 1944–1946* (Cornell University Press, 1972).
- Ba Maw, *Breakthrough in Burma: Memoirs of a Revolution, 1939–1946* (Yale University Press, 1968), explicitly treated as participant memory.
- John W. Dower, *War Without Mercy: Race and Power in the Pacific War* (Pantheon Books, 1986).
- Haruo Tohmatsu and H. P. Willmott, *A Gathering Darkness: The Coming of War to the Far East and the Pacific, 1921–1942* (SR Books, 2004).
- Paul H. Kratoska, *The Japanese Occupation of Malaya and Singapore, 1941–45: A Social and Economic History* (1998; revised 2nd ed., NUS Press, 2018).

Catalog/publisher pages were checked for the bibliographic forms and are directly linked in the HTML register. The entries identify useful works; they do **not** imply every page of each monograph was collated against the present manuscript.

### 5. Structural integrity and browser regression

**Parsing and link checks:** 20 distinct numbered-section IDs in numerical order; 53 unique IDs; 53 internal `#fragment` links, **all resolving**; 13 preserved feature boxes, including exactly three source windows, one vocabulary box, two text-map studies, a data study, timeline, perspectives, a named Everyday Life case, cause-and-effect, continuity/change and historical debate. Opening, objectives, context, chronology, vocabulary, summary, comprehensive review, research task, register and reflection remain present. One existing navigation script and stylesheet retained.

**Chromium / Playwright rendering:** Tested HTML with `page.set_content` in actual headless Chromium (sandbox navigation to `file://` and `localhost` was restricted; static in-browser document rendering and event execution succeeded). Viewports **1440, 1024, 768, 390 and 320 pixels** (900px height): at each width `document.documentElement.scrollWidth` equaled viewport width, with **no page-level horizontal overflow and no JavaScript runtime errors**. At desktop width the sidebar link to `#s78-19` updated `location.hash` as expected. Screenshots produced at 1440, 390 and 320 pixels. The extra narrow-mobile CSS makes `.chron-table` independently horizontally scrollable while retaining full table information; source HTML and review apparatus still render.

| Browser width | Page-level overflow | Runtime errors |
|---|---|---|
| 1440px | No | 0 |
| 1024px | No | 0 |
| 768px | No | 0 |
| 390px | No | 0 |
| 320px | No | 0 |

**Integrity limitation:** Chromium rendering and link resolution were verified; a full cross-browser, assistive-technology, and live-network availability test of all 32 external links was not performed. This audit does not claim pixel-exact stylesheet identity with a separately downloaded Chapter 2 baseline.

### 6. Scope boundaries and unresolved scholarly limits

- This is a **scholarly textual HTML first edition**. The two Geography Studies remain text-only exercises and contain **no commissioned map plates**; the chapter describes the exercises appropriately.
- The three Primary Source Windows give identifiable original holdings with **attributed editorial paraphrases**, not certified Japanese-to-English translations. Original-language image-by-image collation has **not** been exhaustively completed. The source register makes this explicit.
- Selected war casualty totals and other numerical series remain estimates. They are identified as estimates with methodological warnings; no claim is made that every controversy in wartime demography has been resolved.
- Atrocity cases are treated where necessary, but comprehensive comparative treatment is reserved for Chapter 79. Material destruction of the Japanese home islands is Chapter 80's responsibility, while surrender and repatriation are Chapter 81's. Those boundaries are preserved.
- The previously accepted narrative is intentionally not expanded or reorganized; the manuscript already satisfies the first-edition word-range and analytical standard.

### 7. Approval and lock

**APPROVED FOR PUBLICATION — LOCKED (November 7, 2026, Pacific)** as the first-edition historical textual HTML chapter, with source-image collation and map-plate limitations disclosed. Publication-critical corrections to source windows, the named Singapore historical case, Sook Ching estimate attribution, statistical categories, bibliography and 320px responsive rendering have been applied and regression-tested. No routine micro-revision is authorized. Proceed to the separate production plan for Chapter 79.
