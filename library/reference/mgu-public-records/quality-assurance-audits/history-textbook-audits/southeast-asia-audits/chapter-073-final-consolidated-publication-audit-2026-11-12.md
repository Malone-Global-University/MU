# MGU Southeast Asian History — Chapter 73: Final Consolidated Publication Audit

**Audited:** 12 November 2026 (America/Los_Angeles).  **Disposition:** **APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — LOCKED**, within the scope and limitations stated below.

**Chapter:** *The Spanish Conquest of the Philippines*, Volume V, Part XIV, primary period 1564–1582.  
**Canonical final:** `chapter-073-the-spanish-conquest-of-the-philippines-publication-final.html`  
**Final UTF-8 bytes:** 168,085  
**Final SHA-256:** `21b7723ec9ab259089331bb83ce67c92c9a26419ea8a40450aadb0373084ae7a`  
**Original Claude source:** `Pasted text(20261113-043335).txt` (143,565 bytes, SHA-256 `ac4711c287324622890331bdbe93e8c3a68abbfaef781ca80d58f1c72473b32c`).

## Executive determination

The entire historical manuscript has been directly revised from Claude's original rather than replaced. One consolidated historical expansion and factual/source corrections brought direct narrative from **6,725** to **9,578 words**, inside the MGU preferred **9,200–9,600** range. All original 20 sections, five divisions, prescribed 16 section-level features, four feature-free sections, three prescribed documentary windows, and two introductory vocabulary boxes are preserved. Two verified references were added, the existing bibliography was corrected, and mobile contents navigation and accessibility support were completed. Chromium responsive checks pass on all four mandated widths.

Approval is for a **first-edition scholarly textual HTML chapter**, not evidence that original-language archive manuscripts or every facsimile were compared line-by-line. A live hosted deployment and exact byte-level comparison with the missing original Chapter 1 shell were not performed. Geography exercises reference external maps; they do not provide embedded verified atlas plates.

## Audit method

Used `BeautifulSoup`/`lxml` on the whole HTML and independently measured the direct historical prose by collecting **only paragraphs that are direct children of `section#s73-N`** (not pedagogical feature bodies, introductory material, summaries, review, or bibliography), with token pattern `\b[\w]+(?:[’'\-][\w]+)*\b`. Structural checks tested sequential section IDs, nested features, source-window placement, duplicate IDs, in-page link targets, bibliography entries, and remaining editorial placeholders. Executed the assembled HTML and its script in headless Chromium through Playwright at 1440, 900, 390 and 320 pixels using reduced motion for efficient deterministic navigation verification. Did not deploy to the user's website.

## Final structural acceptance

| Requirement | Measured | Disposition |
|---|---:|---|
| Historical divisions | 5 (four sections each) | PASS |
| Numbered §§73.1–73.20 | 20 | PASS |
| Section-level instructional features | 16, one in each designated section | PASS |
| Feature-free | §§73.8, 73.12, 73.16, 73.19 | PASS |
| Vocabulary boxes | 2: *encomienda*, *cabildo* outside numbered sections | PASS |
| Primary Source Windows | 3: §§73.3, 73.7, 73.18 | PASS |
| Direct historical narrative | **9,578 words** | PASS |
| Scholarly bibliography | 17 items | PASS |
| Key term cards | 29 | PASS |
| Opening historical paragraphs | 7 | PASS |
| Learning objectives and guiding questions | 11 and 9 | PASS |
| HTML unique identifiers | 59 | PASS |
| Internal fragment links | 77 resolving; no missing target | PASS |
| Two scrollable table regions | labeled, `tabindex=0`, role=`region` | PASS |
| Mobile table of contents | 34 links, including all 20 numbered sections | PASS |
| Skip-to-main link | main-content target, keyboard operable | PASS |
| HTML script and style elements | 1 each, no browser exceptions | PASS |

## Section-by-section narrative measurement

| §73 | Section title | Direct narrative words | Instructional boxes |
|---|---|---:|---:|
| 01 | Reconstructing the Spanish Conquest of the Philippines | 397 | 1 |
| 02 | Philip II, New Spain, and the Expedition of 1564–1565 | 573 | 1 |
| 03 | Cebu in 1565: Negotiation, Resistance, and Spanish Occupation | 531 | 1 |
| 04 | Hunger, Portuguese Pressure, and the Move to Panay, 1565–1569 | 413 | 1 |
| 05 | Indigenous Allies, Rivalries, and the Politics of Cooperation | 452 | 1 |
| 06 | Mindoro, Luzon, and the Search for a New Political Center | 489 | 1 |
| 07 | Martín de Goiti at Manila, 1570: Negotiation and Armed Confrontation | 467 | 1 |
| 08 | Tondo, Maynila, and the Indigenous Political World of Manila Bay | 502 | 0 |
| 09 | Legazpi's Return to Manila and the Campaign of 1571 | 395 | 1 |
| 10 | Bangkusay, Indigenous Resistance, and the Battle for Manila Bay | 530 | 1 |
| 11 | The Establishment of Spanish Manila in 1571 | 525 | 1 |
| 12 | The Expansion into Southern, Central, and Northern Luzon | 523 | 0 |
| 13 | Indigenous Chiefs, Intermediaries, and the Reorganization of Authority | 468 | 1 |
| 14 | Tribute, Encomienda, and the Political Economy of Conquest | 514 | 1 |
| 15 | Augustinian Missionaries and the First Religious Institutions | 465 | 1 |
| 16 | Warfare, Displacement, Extraction, and Everyday Consequences | 538 | 0 |
| 17 | Limahong's Attack on Manila, 1574, and the Fragility of Spanish Rule | 485 | 1 |
| 18 | Indigenous Grievances, Missionary Criticism, and the Colonial Order by 1582 | 498 | 1 |
| 19 | Where Spanish Authority Remained Limited | 431 | 0 |
| 20 | The Spanish Conquest of the Philippines: Historical Synthesis | 382 | 1 |

**Division totals:** I = 1,914; II = 1,910; III = 1,973; IV = 1,985; V = 1,796. **Overall direct narrative:** 9,578 words. Note that another tokenizer treating joined words, numerals, or punctuation differently may yield a small difference; the counting boundary is more important than the tokenization choice.

## Publication-critical historical corrections completed

### 1565 Cebu and the Pacific passage

- Removed the unsourced implication that Legazpi deliberately scheduled the 27 April 1565 arrival on Magellan's anniversary. The shared date is explained without conjecturing intention.
- Distinguished shifting the **principal base** from Cebu to Panay in 1569 from total abandonment of the Cebu foothold.
- Distinguished the earlier recorded 1565 return of the *San Lucas* under Alonso de Arellano and Lope Martín (Puerto de la Navidad, 9 August) from the *San Pedro* return with Urdaneta's documented navigational guidance (Acapulco, 8 October); chronology and §73.2 both agree. Source comparison: Blair and Robertson Vol. II; O. H. K. Spate, *The Spanish Lake*, the chapter 'The return achieved: Arellano and Urdaneta', https://press-files.anu.edu.au/downloads/press/p66561/mobile/ch04s07.html .

### 1570–1571 Manila

- Maintained the essential distinction between Goiti's 1570 assault and notarial possession claim and Legazpi's 1571 negotiated occupation and municipal establishment.
- Corrected §73.10 to name **Martín de Goiti**, rather than centering Juan de Salcedo, as commander of the 3 June 1571 Bangkusay operation in the near-contemporary Spanish account. Added source-specific caution about claimed numbers and the report of prisoners divided among victors. Preserved uncertainty regarding the unnamed resistance leader, without asserting the retrospective 'Tarik Sulayman' identification.
- Strengthened interpretation of indigenous armed fleets, the substantial participation of Visayan auxiliaries, contested local alliances, and the distance between legal sovereignty and effective administration.

### 1582 indigenous petitions

- Expanded §73.18 using the 20 June letter of Bishop Domingo de Salazar **and the distinct 15 June deposition** attached to it. The revised passage and source window name Don Luis Amanicaldo, Don Martín Panga, Don Gabriel Luanbacar, Don Juan Bautangad, Salalila, Calao Amarlenguaguay, and Doña Francisca Saygan (as represented in the edition).
- Documented petitioners' specific allegations: rice prices imposed by magistrates, unpaid compulsory rowing, tribute assessed for the dead and absent, families leaving communities, stocks, flogging, detention, and taxes. Identified the interpreters Francisco Morantes and Andrés de Cervantes and the involvement of a Spanish secretary. This permits analysis of indigenous agency while acknowledging the colonial mediation of their words.
- Retained caution about reported earlier Lakandula unrest and separated it from the later Tondo conspiracy.

### Other expanded history

Added substantive discussion of indigenous navigation and alliances; trading and political geography of Mindoro, Maynila, Tondo and the Pasig river system; logistics of 1571 settlement; the effects of Bangkusay; coastal campaigns and limits of nominal pacification; conversion/translation; local chiefly intermediaries and the *encomienda*; tribute, food exactions, compulsory labor, family displacement and uncertain demographic estimates; Pangasinan's indigenous/Ming/Spanish anti-Limahong cooperation; and the graduated limits of Spain's territorial and fiscal power by 1582. Later galleon institutions, fully formed parishes, and southern frontier wars remain reserved for Chapters 74–76.

## Primary Source Window audit

| Window | Authenticated documentary anchor | Presentation | Disposition |
|---|---|---|---|
| I (§73.3) | Legazpi to Philip II, Cebu, **27 May 1565**, Blair & Robertson Vol. II, https://www.gutenberg.org/cache/epub/13280/pg13280-images.html | Paraphrase now confines itself to brief letter and explicitly separates attachments/voyage relation | PASS — edition-grounded paraphrase |
| II (§73.7) | Martín de Goiti/Hernando Riquel, act of possession of Luzon, **6 June 1570**, B&R Vol. III, https://www.gutenberg.org/cache/epub/13616/pg13616-images.html | Explicitly identifies Spanish legal framing, lack of local testimony and difference between claim and occupation | PASS — edition-grounded paraphrase |
| III (§73.18) | Salazar, letter **20 June 1582** with interpreted leaders' deposition **15 June 1582**, B&R Vol. V, printed pp.181–185, https://www.gutenberg.org/cache/epub/16501/pg16501-images.html | Specific petitioners, interpreters, accusations and transmission chain | PASS — edition-grounded paraphrase |

**Documentary limitation:** These are editorial paraphrases and studies, not verbatim quotations independently collated against original Spanish manuscript facsimiles. Printed English B&R editions were read for relevant text and the resulting claims were checked at document level; no claim is made to have collated the entire archival originals. Original manuscripts, translation choices, and omissions remain matters for advanced critical editions.

## Bibliography acceptance

- Completed Blair & Robertson Volume IV's chronological designation to **1576–1582**.
- Completed Glòria Cano, “Blair and Robertson's *The Philippine Islands, 1493–1898*: Scholarship or Imperialist Propaganda?” *Philippine Studies* **56**, no.1 (2008): **3–46**, confirmed by issue/article metadata, https://www.jstor.org/stable/42633940 .
- Added Nicholas P. Cushner, *The Isles of the West: Early Spanish Voyages to the Philippines, 1521–1564* (Quezon City: Ateneo de Manila University Press, 1966), catalogued by the National Museum of the Philippines: https://library.nationalmuseum.gov.ph/cgi-bin/koha/opac-detail.pl?biblionumber=1344 .
- Added J. Travis Shutz, “Limahong's Pirates, Ming Mariners, and Early Sino–Spanish Relations: The Pangasinan Campaign of 1575 and Global History from Below,” *Philippine Studies: Historical and Ethnographic Viewpoints* **67**, no.3 (2019), article 3, DOI 10.13185/2244-1638.1019, https://archium.ateneo.edu/phstudies/vol67/iss3/3/ .
- Removed student-facing editorial instruction to verify eventual future additions. Total: **17** identifiable references. Targeted catalog and published-source checks, not exhaustive independent verification of every edition and printing.

## Chromium browser and accessibility acceptance

| Viewport | Page horizontal overflow | JavaScript page exceptions | Navigation | Tables |
|---|---:|---|---|---|
| 1440px | 0px | 0 | Desktop sidebar shown | Both responsive regions marked |
| 900px | 0px | 0 | Mobile chapter menu shown | Both marked regions present |
| 390px | 0px | 0 | Mobile menu navigates to §73.18; 34 links | Both scroll without page overflow |
| 320px | 0px | 0 | Skip link reaches `#main-content` | Both keyboard-focusable; horizontal programmatic interaction confirmed |

Browsers were tested with actual assembled source in headless Chromium, reduced-motion emulation, and in-page interaction. The final screenshots were saved as `chapter-073-final-qa-1440.png`, `-900.png`, `-390.png`, and `-320.png`. The two scrollable tables have `role=region`, `tabindex=0`, and descriptive accessible names. Nav fragment targets were verified separately with HTML parsing. Full accessibility conformance testing with screen readers, external browsers or a live site was not performed.

## Final sign-off and retained limitations

**APPROVED — LOCKED.** All identified publication-critical historical, narrative, documentary, bibliographic, structural, and browser blockers from the independent hold audit have been resolved within this completed scholarly textual HTML. The following are explicitly out of scope: (1) exhaustive facsimile-level collation of original Spanish documents; (2) verification of every bibliography edition against all catalogs; (3) embedded authenticated geographic atlas plates; (4) byte-exact Chapter 1 CSS/script parity because the authoritative Chapter 1 reference was unavailable; (5) live-site deployment testing. These do not defeat the specific first-edition textual HTML approval stated above.

**Production status:** Revision cycle closed; proceed to Chapter 74, *Manila and the Galleon World*.
