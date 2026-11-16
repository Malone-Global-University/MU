# MGU Southeast Asian History — Chapter 71 Consolidated Final Publication Audit

**Chapter:** 71 — *Ternate, Tidore, and the Spice Islands*  
**Volume:** V, Part XIII, *Southeast Asia at the Opening of the Sixteenth Century*  
**Date:** November 12, 2026 (Pacific)  
**Disposition:** **APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — LOCKED**, subject to the source and deployment limitations below.  
**Status:** Completed consolidated historical, source, structural, and Chromium-browser audit after targeted correction of Claude's original.

## 1. Controlled files and integrity

- **Claude source:** `/mnt/data/Pasted text(20261112-220903).txt`, original standalone HTML, **176,188 bytes**, SHA-256 `d84d50c563a19102b27bd5b14eaab2f8de9a2830524bf891c237fb0c67d8adc4`.
- **Canonical publication-final HTML:** `/mnt/data/chapter-071-ternate-tidore-and-the-spice-islands-publication-final.html`, **176,005 UTF-8 bytes**, SHA-256 **`4a6f2d3eb3d30701a0c4a98613a4992ddc3e83cdc45da04aadfc832fba865f47`**.
- **Consolidated audit:** this document.
- QA artifacts: `chapter-071-final-browser-qa.json` and desktop/mobile screenshots `chapter-071-final-qa-1440.png`, `chapter-071-final-qa-900.png`, `chapter-071-final-qa-390.png`, `chapter-071-final-qa-320.png`.

**Revision strategy:** The original historical narrative and inherited CSS/JavaScript shell were retained. Only localized corrections to historical chronology, introductory vocabulary-box placement, source studies, a small §71.15 explanatory addition, bibliography, and CSS/accessibility markup were made. The original scrollspy JavaScript was not rewritten. No unnecessary full-chapter rewrite or repeated expansion rounds.

## 2. Structural compliance

| Requirement | Final verification | Disposition |
|---|---:|---|
| Division banners | 5 | PASS |
| Numbered sections | 20, IDs `s71-1`–`s71-20` | PASS |
| Normal section-level instructional features | Exactly 16 | PASS |
| Feature-free sections | §§71.8, 71.12, 71.16, 71.19 | PASS |
| Vocabulary boxes | 2, `sangaji` and `kapita laut`, **outside** all numbered sections in `#vocab-preview` | PASS |
| Primary-source windows | 3, §§71.3, 71.11, 71.15 | PASS with editorial-paraphrase limitations |
| Historical narrative | **9,315 direct words** (preferred 9,200–9,600) | PASS |
| Scholarly references | **18** bibliographic entries | PASS, targeted verification |
| Unique HTML IDs | **65**, no duplicates | PASS |
| Internal fragment links | **79 / 79** resolve | PASS |
| Tables | **8**, all in accessible horizontally scrolling regions | PASS |
| JavaScript scripts | 1, no page errors at test widths | PASS |

### Narrative measurement methodology

For each `section#s71-N`, extract only *immediate child* `<p>` elements, excluding all instructional feature-box trees, introductory material, glossary, assessments, bibliography, and reflection. Tokenize Unicode words using `\b[\w]+(?:[’'-][\w]+)*\b`. This is the same direct-narrative method used for the independent hold audit; other word processors may produce modest differences.

| Numbered section | Direct narrative words |
|---|---:|
| §71.1 | 443 |
| §71.2 | 490 |
| §71.3 | 466 |
| §71.4 | 428 |
| §71.5 | 445 |
| §71.6 | 483 |
| §71.7 | 483 |
| §71.8 | 513 |
| §71.9 | 468 |
| §71.10 | 414 |
| §71.11 | 423 |
| §71.12 | 502 |
| §71.13 | 438 |
| §71.14 | 413 |
| §71.15 | 597 |
| §71.16 | 422 |
| §71.17 | 427 |
| §71.18 | 486 |
| §71.19 | 497 |
| §71.20 | 477 |
| **Total** | **9,315** |

| Division | Numbered sections | Words |
|---|---|---:|
| I | §§71.1–71.4 | 1,827 |
| II | §§71.5–71.8 | 1,924 |
| III | §§71.9–71.12 | 1,807 |
| IV | §§71.13–71.16 | 1,870 |
| V | §§71.17–71.20 | 1,887 |
| **Total** | **§§71.1–71.20** | **9,315** |

## 3. Historical corrections and verification

1. **§71.19, Dutch operations at Tidore:** Removed the erroneous reference to a supposed joint Spanish–Portuguese fort attacked in the “mid-1600s.” The corrected narrative distinguishes the failed **1601 Dutch bombardment** of a **Portuguese** position from the successful **May 1605 Dutch–Ternatan attack** during which the Portuguese fort's powder magazine exploded and its garrison surrendered. Spanish military action on Ternate in **1606** follows these developments, not precedes them. Main corroboration: Portuguese heritage inventory https://hpip.org/en/Heritage/Details/1660 and modern specialist contextualization https://brill.com/downloadpdf/view/journals/jhil/25/1/article-p1_1.pdf .
2. **§71.15, religious context:** Added a concise paragraph on the dated 1569 Mascarenhas letter, emphasizing that it documents events **before**, not during, Sultan Khairun's murder in **1570** or the Ternatan siege ending **1575**. Specialist reference: Brett Charles Baker (2012), pp. 177–179, source-based interpretation at https://openresearch-repository.anu.edu.au/bitstreams/698d8cfa-a3f4-4bda-86ab-09e13b6a6261/download .
3. **Other important chronological points retained after checks:** Portuguese arrival in 1512, Pigafetta's Tidore visit in November 1521, first fortress construction in 1522, Khairun's death in 1570, Babullah's victory in 1575, Portuguese fort-building on Tidore from 1578, Dasmariñas's interrupted expedition in 1593, and Spanish seizure of Ternate in 1606. Jailolo c. 1551 and the Tabarija episode remain appropriately source-qualified.
4. **Core interpretation maintained:** Malukan institutions and rulers are treated as the central actors; clove-producing northern Maluku is distinguished from nutmeg/mace-producing Banda; local political allegiance is not equated with religious identity; claims of maritime supremacy are distinguished from direct administration.

## 4. Three documentary source windows — completed

### Window I: Galvão-associated treatise (§71.3)

- **Identified bounded passage:** description of clove and adjacent nutmeg trees, *A Treatise on the Moluccas (c. 1544)*, translated/edited Hubert Jacobs (1971), **pp. 41–43** as located in specialist scholarly cross-references.
- **Text and provenance:** the Portuguese manuscript is associated with Galvão's early history of Maluku, held in Archivo General de Indias, Seville; attribution to Galvão remains probabilistic. Edition catalog https://iucat.iu.edu/iub/1957603 and catalog metadata https://www.rijksmuseum.nl/en/collection/publication/A-treatise-on-the-Moluccas-c-1544-probably-the-preliminary-version-of-Antonio-Galvaos-lost-Historia-das-Molucas-manuscript-in-the-Archivo-general-de-Indias-Seville--3545a5091d0a418c55d51e45c09cfd84 .
- **What changed:** replaced undifferentiated summary of the entire book with a dated, bounded botanical descriptive passage, explicit thematic limitations, and four substantive source-analysis questions.
- **Qualification:** This is a **literature-grounded editorial paraphrase**, not a printed-edition original-language collation or authenticated verbatim translation.

### Window II: Pigafetta at Tidore (§71.11)

- **Identified bounded passage:** reception at Tidore **8–12 November 1521** from Antonio Pigafetta's narrative, using Skelton's *Magellan's Voyage* (1969), localized by its dated sequence. Original manuscripts are described by the Library of Congress: https://www.loc.gov/item/2021667606/ . A publicly accessible parallel printed translation locates the 8 November harbor entry: https://www.sigloxvi.es/en/lectura/pigafetta-stanley/ .
- **What changed:** specified the arrival and reception dates, diplomatic exchanges, role of interpreters, and sultan's agency; narrowed the previous generic source summary.
- **Qualification:** No page-exact collation of Skelton's printed translation; the section supplies a clear **editorial paraphrase**, not invented quotation. Manuscript variants and indirect speech remain explicit.

### Window III: *Documenta Malucensia*, vol. I (§71.15)

- **Identified actual historical letter:** **Pero Mascarenhas, Ambon, 3 August 1569, to Jesuit fathers in Melaka and India**, printed in Hubert Jacobs, ed., *Documenta Malucensia*, vol. I: *1542–1577* (Rome, 1974), **pp. 548–555**. The document and page range are independently confirmed via Baker's source-anchored analysis (2012, pp. 177–179) and subsequent Portuguese historical research; the Jacobs edition exists in institutional catalogs https://iucat.iu.edu/lilly/1925500 .
- **What changed:** discarded the unsupported João de Mesquita December 1573 placeholder and replaced it with a real, dated, locatable letter. The window discusses reported requests for baptism, local workers and the construction of a Portuguese fort on Ambon, insecurity, and how European mission writers interpreted political alliances.
- **Crucial chronological qualification:** The replacement is **1569, not the 1570s**. An authentic contemporary **pre-crisis witness** is preferable to inventing a wartime 1573 letter; Leonard Andaya specifically reports that no extant missionary correspondence from Maluku appears to survive for roughly 1571–1578. The source cannot directly document Khairun's murder or Babullah's blockade. This is a consciously disclosed evidentiary adjustment to the preliminary production plan, not a silent substitution.
- **Source status:** Jacobs is authenticated and Baker's academic analysis anchors the bounded passage; a fresh page-by-page manuscript or original printed-text collation was not undertaken. The student-facing extract is identified as an **editorial paraphrase**, never a verbatim quote.

**No remaining editorial placeholders:** The original four student-facing “verify before publication” notes (in the three source windows and bibliography) have been eliminated, replaced by defensible provenance and limitations disclosure rather than claims of unsupported verification.

## 5. Bibliography and source register

The final bibliography includes **18 entries**. Documented edits:

- Brett Charles Baker, *Indigenous-Driven Mission* (2012), now explicitly a PhD thesis, Australian National University, source record https://openresearch-repository.anu.edu.au/bitstreams/698d8cfa-a3f4-4bda-86ab-09e13b6a6261/download .
- John Villiers, “Trade and Society in the Banda Islands in the Sixteenth Century,” *Modern Asian Studies* 15, no. 4 (1981): **723–750**, DOI `10.1017/S0026749X0000874X`.
- *Documenta Malucensia* now specifies each volume and year: **I: 1542–1577 (1974), II: 1577–1606 (1980), III: 1606–1682 (1984)**, supported by institutional catalog https://iucat.iu.edu/lilly/1925500 and Cambridge https://www.cambridge.org/core/journals/bulletin-of-the-school-of-oriental-and-african-studies/article/abs/hubert-jacobs-sj-ed-documenta-malucensia-vol-ii-15771606-munumenta-historica-societatis-iesu-vol-119-xxxi-65-794-pp-6-plates-rome-jesuit-historical-institute-1980/D49280521098C3B0FAFA234A3189E9B7 .
- Galvão attribution/edition subtitle clarified using institutional catalog.
- Added **Bartolomé Leonardo de Argensola, *Conquista de las islas Malucas* (Madrid: Alonso Martín, 1609)**, a retrospective Spanish history catalogued by Spain's Ministry of Culture https://bvpb.mcu.es/es/consulta/registro.do?id=438124 .
- Added **Manuel Lobato**, “From European-Asian Conflict to Cultural Heritage,” in *Portuguese and Luso-Asian Legacies in Southeast Asia*, vol. 2 (2012), **179–207**, scholarly publisher listing https://www.cambridge.org/core/books/abs/portuguese-and-lusoasian-legacies-in-southeast-asia-15112011-vol-2/from-europeanasian-conflict-to-cultural-heritage-identification-of-portuguese-and-spanish-forts-on-ternate-and-tidore-islands/9FCA522398EA7EC544E30710B5985D4C .

These sources improve coverage of Spanish perspectives, Portuguese fortification, religious and local political history. The specialized coverage of Jailolo and Bacan remains chiefly integrated within Andaya (1993), rather than assigned a separate, independently collated local archival chapter. **Not every bibliographic item was rechecked page by page.**

## 6. Browser and interaction QA

Chromium with Playwright, system executable `/usr/bin/chromium`, HTML loaded directly with `page.set_content`, desktop/tablet/phone viewports of 1440, 900, 390, and 320px, height 900px. No server deployment and no testing in Safari/Firefox/screen-reader hardware.

| Viewport width | Page horizontal overflow | JavaScript errors | Sidebar CSS display | Mobile menu CSS display |
|---|---:|---:|---|---|
| 1440px | 0px | 0 | block | none |
| 900px | 0px | 0 | none | block |
| 390px | 0px | 0 | none | block |
| 320px | 0px | 0 | none | block |

- The mobile `<details>` contents menu contains **20 section links**, grouped by division. A clicked §71.19 link changed the URL fragment to `#s71-19`.
- All **8** HTML tables have individually labeled `role="region"` scroll containers with `tabindex="0"`, max-width bounded to the content width. At 390px, keyboard focus was applied and ArrowRight changed the first table scrollLeft from **0px to 40px**.
- A skip-to-content link now targets the `main#main-content` element. CSS provides visible focus indication and respects reduced-motion preferences.
- The original sidebar scroll highlighting script ran without observed exceptions. All **79** internal fragment links resolve uniquely.
- Browser rendering is visually usable at tested widths. These tests do not certify full WCAG conformance or actual live-site deployment. Actual Chapter 1 CSS/script byte-exact parity was **not independently verified** against the missing model file (original shell style and script were preserved and accessibility CSS appended).

## 7. Remaining explicitly disclosed limits

1. Three primary-source windows use clearly attributed and bounded **editorial paraphrases**, not freshly collated original-manuscript quotations or Skelton/Jacobs edition-exact translations; sources have identified editions, dated passages and, where established, pages.
2. The 1569 missionary witness is from **Ambon before the 1570 crisis**. It supplies pre-crisis comparative context, not eyewitness proof of Sultan Khairun's murder, and is a documented adjustment from the proposed 1573 placeholder.
3. The historical map study remains text-guided and requires an external atlas; this edition does not embed an archival map plate.
4. The catalog verification is focused on the publication-critical references, not an exhaustive audit of every edition/page.
5. No byte-for-byte matching against the absent Chapter 1 original HTML/CSS or live deployment regression was conducted; mobile/browser testing is on Chromium only.

## 8. Final disposition

**APPROVED FOR PUBLICATION — LOCKED** as a first-edition scholarly historical-text standalone HTML with the limitations above. The 20-section plan, 16 instructional features, 2 introductory vocabulary boxes, 3 source studies, complete review apparatus and preferred direct-narrative length are preserved. The previously identified publication-critical historical error and unverified third source are now resolved without inventing primary testimony, and all tested technical acceptance checks pass. **No additional micro-pass is required.**
