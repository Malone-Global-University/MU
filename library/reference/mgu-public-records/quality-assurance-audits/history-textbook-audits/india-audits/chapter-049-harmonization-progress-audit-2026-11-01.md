# MGU Indian History — Chapter 49
## Independent harmonization and production audit — November 1, 2026 (Pacific)

**Chapter:** 49, *The Indian Ocean and the Arrival of the Portuguese*; Volume II, Part IX.
**Uploaded source:** `Pasted text(20261101-085954).txt` (HTML payload, 146,916 bytes; SHA-256 `dcfef47e7778cba0ff9b97d92c92968a778aea909609a527b1dacc880e39b99f`).
**Audit-corrected cumulative HTML:** `chapter-049-the-indian-ocean-and-the-arrival-of-the-portuguese-harmonization-audited.html` (144,214 UTF-8 bytes; SHA-256 `f21b12e26ea040980bd55164f870cf8c4f1872b79641575eba8b6281a99d66c2`).

**Status: STRUCTURALLY REPAIRED / HISTORICAL EXPANSION INCOMPLETE / NOT PUBLICATION-LOCKED.**

### 1. Measured prose and plan compliance

- Sections §49.1–§49.42 present, sequential, in seven approved divisions. Sections §49.1–§49.41 contain **10,249 direct narrative words** counting direct `p` descendants and excluding all features and surrounding apparatus; §49.42 has a further **187** review/synthesis words. The initial word-range guidance of 19,000–24,000 direct historical words is **diagnostic**, not permission to add repetitive padding; the remaining conceptual and documentary gaps independently justify a substantial further build.
- Historical prose by division: **I** §§1–7: 2,071; **II** §§8–14: 1,910; **III** §§15–20: 1,652; **IV** §§21–27: 1,591; **V** §§28–34: 1,603; **VI** §§35–39: 1,045; **VII** §§40–41: 377. Section 42: 187 review words.
- **24 feature boxes**: 4 map studies, 6 source-designated boxes (including the generic cartaz source-type study), 3 historical debates, 2 comparative studies, 3 historical vocabulary, 2 everyday-life, 1 timeline, 1 multiple-perspectives, 1 cause-and-effect, and 1 continuity-and-change.
- **18 Core Vocabulary Preview entries** and **35 Key Term definitions**. Full standard review elements exist: summary, chronology check, map and source questions, twelve general review questions, short answers, discussion, writing, research, reflection. The review summary remains relatively short.
- The central argument correctly distinguishes the established Asian maritime economy from the Portuguese attempt to impose selective armed control. Maintain distinctions among claims, naval victories, fortresses, shipping licences, and achieved commercial power.

### 2. Critical HTML regression found and corrected

- Claude's harmonization appended the **obsolete pre-expansion bodies** after each of five replacement boxes: `debate-cartaz`, `compare-orgs`, `compare-revenue`, `debate-collab`, `debate-revolution`. Each orphan comprised a duplicate `.feature-box-header` / `.feature-box-body` and unmatched closing `</div>`; these caused the HTML parser to close the intended `.page-wrap` / `<main>` layout prematurely after §49.27.
- Consequently **§§49.28–49.42 and all concluding apparatus were outside `<main>`** even though IDs were unique and link targets existed. In Chromium, the raw upload overflowed every tested viewport by 20–40 pixels. The error would NOT be found by an ID/link count or JavaScript syntax test.
- Removed the five obsolete orphan fragments **only**; retained the five new, expanded and properly wrapped features. The repaired HTML has **85 unique IDs**, **85/85 valid internal anchors**, **42 sections contained in main**, all **24 features correctly nested**. Original style element and scroll script are **byte-identical** to prior audited Division I baseline.
- Playwright Chromium on repaired HTML: at widths **1440, 900, 390, 320 px**, document scrollWidth equals viewport clientWidth; no JavaScript runtime exceptions. The chronology remains horizontally scrollable within its table at 320 px. Desktop clicked sidebar link to §49.32, resulting anchor and active-link highlighting matched.

### 3. Bibliographic verification — source windows

The bibliography itself is **real and relevant**, but unreferenced general paraphrases are **not yet passage-level source analysis**. No exact text quotations have been authenticated.

1. **Goitein and Friedman**, *India Traders of the Middle Ages: Documents from the Cairo Geniza (India Book)*, Brill **2008**: verified from Princeton Geniza Lab, academic review, and library catalog. Corrected full title and clarified it presents translated and commented documents, whereas this feature does not identify a particular letter.
   - https://genizalab.princeton.edu/projects/indian-ocean-documents-cairo-geniza
   - https://academic.oup.com/jis/article-abstract/20/3/457/916956
2. **Ibn Battuta**: H. A. R. Gibb et al., *The Travels of Ibn Battuta, A.D. 1325–1354* (Hakluyt). **Volume IV (1994), translation completed and annotated by C. F. Beckingham** is the relevant volume for southern India and Calicut. The uploaded note did not identify the volume or Beckingham; corrected. 
   - https://www.hakluyt.com/downloadable_files/Regional_guides/Regional_Guide_India.pdf
   - https://wellcomecollection.org/works/w9h82rna
3. **Ravenstein**, *A Journal of the First Voyage of Vasco da Gama, 1497–1499*, Hakluyt Society **1898**: verified in Smithsonian catalog; corrected to *translator and editor*.
   - https://www.si.edu/object/siris_sil_63452
4. **Tomé Pires**, *The Suma Oriental of Tomé Pires*, translated and edited by **Armando Cortesão**, Hakluyt Society **1944**, **two volumes**: verified in National Library of New Zealand catalog; corrected role and title diacritics.
   - https://natlib.govt.nz/records/22147472
5. **Duarte Barbosa**, *The Book of Duarte Barbosa*, translated and edited by **Mansel Longworth Dames**, Hakluyt Society **1918–1921**, **two volumes**: verified from library catalogs; corrected role.
   - https://catalog.parliament.gov.bd/cgi-bin/koha/opac-MARCdetail.pl?biblionumber=22144
6. **Cartaz**: Manuscript does not analyze a real named document. Changed the feature heading from *Primary Source Window* to **Historical Source-Type Study — No Document Reproduced**, while retaining a transparent limitation note. For publication-grade source analysis, replace it with a cited, identified surviving pass (some early surviving examples postdate 1600 and require a dating caveat) or a verified contemporary treaty/regulation that records the licence conditions. The feature may remain an honest type study in an interim draft, but it is not an actual sixth individual primary-source extract.
   - https://academia.marinha.pt/pt/edicoes/Simposios%20Historia%20Maritima/Decimo.pdf

### 4. Substantive historical assessment and outstanding production work

The revised sections offer plausible, coherent accounts but remain predominantly 180–310 direct narrative words each, with major mechanisms compressed. Do **not** request a sequence of extra micro-passes only on §§49.11, 49.16 and §49.24. Instead make a **comprehensive cumulative substantive completion of §§49.8–49.41**, revisiting Division I only for identified gaps.

Priority A — **Portuguese expansion and local agency (§§49.15–27)**: fuller source comparisons on the *Roteiro*, Cabral 1500, da Gama 1502 and coercion; details and consequences of 1508 Chaul/1509 Diu; Goa's double conquest in 1510; precise distinctions among artillery, forts, passes and trade monopoly; Portuguese failure to suppress the Red Sea traffic. Identify evidence, rival accounts, and limits rather than general recitation.

Priority B — **Goa and the Estado (§§49.28–34)**: administrative chains and regional differences, role of casados and merchant capital, customs and the Crown's commercial claims, locally supplied labor and provisions, changing politics of Bassein and Diu, mission institutions and jurisdictional distinctions surrounding the Goa Inquisition (established 1560; interrupted 1774–1778; abolished 1812).

Priority C — **South Asian agency (§§49.8–14 and 49.35–41)**: specific Gujarati commercial practices, Calicut customs and Zamorin politics, Malabar pepper production and middlemen, Cochin alliances and changing patronage, distinguish the Ottoman-supported 1538 Diu siege from Gujarati-led 1546, 1570–71 campaigns and loss of Chaliyam, Kunjali Marakkar chronology, Asian traders' adaptation and changing routes. Develop the two concluding sections sufficiently to compare substantial continuity and substantial change, not just repeat the opening thesis.

Instructional apparatus: now numerically complete, but **develop** the three debates, two comparative studies, source-window documentary grounding and historically specific review prompts where they remain schematic. Keep 18 preview terms and 35 defined terms; avoid adding entries just to inflate counts. Maintain all prior historical corrections and existing shell.

### 5. Recommended workflow

It is acceptable to draft the remaining substantive material in a small number of coordinated **writing installments** if Claude's output limits prevent a one-shot build; each installment must save the entire cumulative HTML and must not alter prior evidence or features accidentally. The deliverable should be **one fully harmonized chapter**, not multiple intermediate publication audits. Once substantive and source gaps are genuinely closed, run one final independent factual, structural, source, and viewport publication audit. Do not trim historically useful prose solely to reach an arbitrary word total.

**NEXT STEP:** Continue from the corrected cumulative HTML linked with this audit, not from the raw file or an earlier saved version. **NOT APPROVED / NOT LOCKED.**
