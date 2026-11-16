# MGU Indigenous Peoples of North America — Chapter 48 Consolidated Independent Audit

**Date:** November 1, 2026 (Pacific)  
**Chapter:** 48, *Indigenous Peoples and the English Atlantic Colonies*  
**Scope:** Initial manuscript audit of Claude uploaded HTML; structural, narrative-depth, source and chronological spot-check, CSS/JavaScript comparison, and Chromium responsive tests.  
**Publication disposition:** **NOT APPROVED / NOT LOCKED — ONE CONSOLIDATED EXPANSION REQUIRED**.

## File integrity and counts

- **Claude uploaded original:** `Pasted text(20261101-083336).txt`; 263,414 UTF-8 bytes; SHA-256 `501c2ff16b3795a53d0dc75c783dc24a3ef7351d7cc7c7d90173a6ce536c309c`.
- **Audit-corrected working HTML:** `chapter-48-indigenous-peoples-and-the-english-atlantic-colonies-audited.html`; 262,487 UTF-8 bytes; SHA-256 `9955bc196a14ffbcc7778b90e5b9a412c9cfe9439014bc9ad3de0acb07854299`.
- **Direct prose §§48.1–48.47:** 16,926 words in Claude's original and **17,022** in the corrected working HTML using Unicode alphanumeric/hyphenated-word regex on section paragraphs outside feature boxes and review elements. Alternative word tokenizers may differ slightly.
- **Plan:** 48 consecutive numbered sections; nine divisions with distribution 5 / 7 / 5 / 5 / 6 / 7 / 5 / 5 / 3; last section is review.
- **Actual:** 48 sections, nine division banners, 24 unique feature boxes, 93 distinct HTML IDs, 91 internal links—all resolved. Tag pairs balanced (67 sections, 138 divs, 3 tables, main/nav/aside). Complete front matter and review apparatus.
- **Shared script:** Exactly identical to publication-locked Chapter 46 JavaScript; passes `node --check`. The HTML shell retains core style tokens and classes; Chapter 48-specific banner/comparison styles added.

## Exact narrative density by division

| Division | Section range | Direct prose words (corrected) |
|---|---|---:|
| I | §§48.1–48.5 | 2,341 |
| II | §§48.6–48.12 | 2,788 |
| III | §§48.13–48.17 | 2,181 |
| IV | §§48.18–48.22 | 1,832 |
| V | §§48.23–48.28 | 2,215 |
| VI | §§48.29–48.35 | 1,913 |
| VII | §§48.36–48.40 | 1,595 |
| VIII | §§48.41–48.45 | 1,673 |
| IX | §§48.46–48.47 | 484 |
| **Total** | **§§48.1–48.47** | **17,022** |

Minimum planned prose 22,000 words; flexible upper range 27,000. Current shortfall approximately 5,000 words. The broad coverage of the outlined regions is present, but numerous episodes and analyses are too compressed, especially §§48.29–35, 48.36–45 and §48.46 (only 134 direct prose words; comparison feature has additional separate instructional content). Do not use total HTML or feature word count to mask the deficit.

## Corrections applied directly to the working HTML

1. **Mobile chronology regression:** Added a narrow-viewport rule at `max-width:600px` so `.chron-table` scrolls horizontally inside the page. In Claude original, document width was 457px at 390px (67px overflow) and at 320px (137px overflow). After correction, page width matches both viewports and table scrolls internally.
2. **§48.42 Treaty of Casco (1678): MAJOR factual reversal fixed.** English settlers, NOT Wabanaki communities, were obliged to pay annual acknowledgments in corn to Wabanaki leaders. The original treaty has not survived; explain its terms as preserved in later accounts rather than falsely citing extant text. See Lisa Brooks's *Our Beloved Kin* teaching materials and Journal of New Brunswick Studies: https://www.historysource.org/history-source-sets/dawnland-war and https://journals.lib.unb.ca/index.php/JNBS/article/download/32889/1882528134/1882534351 .
3. **§48.43 Santa Elena (1587): Chronological anachronism fixed.** The Spanish fortified town Santa Elena was abandoned in 1587 and could not be an active 1670 garrison; Spanish St. Augustine and Guale missions continued. See National Park Service https://www.nps.gov/articles/santa-elena-the-1500s-capital-of-spanish-florida.htm .
4. **§48.39 and its treaty source window:** Made explicit the distinction in the 1677 Articles of Peace between annual **20 beaver-skin tribute** and **three-arrow quit-rent**. See treaty Articles II and XVI: https://treaties.okstate.edu/treaties/treaty-of-middle-plantation-1677 .
5. **§48.20 Mystic (1637):** Replaced unsupported blanket claim that several allies withdrew and a broad universal claim about Algonquian warfare with documented source-specific treatment: Underhill reports some Indigenous allies protested the scale of killing, without making all participating nations uniform. See the written sources and archaeological synthesis: https://pequotwar.org/archaeology/overviewbattle-of-mistic-fort/ .

## Source-check findings (no correction necessary)

- **§48.17 Roger Williams and Narragansett leaders:** In 1636 Williams played a mediating role in efforts to prevent a Narragansett–Pequot alliance; the text's qualified phrasing is acceptable. National Park Service: https://www.nps.gov/rowi/learn/historyculture/narragansett.htm and https://npshistory.com/publications/rowi/brochures/2001.pdf .
- **§48.12 1644 Virginia attacks:** 350–500 English casualties appear in credible syntheses with differing estimates; the manuscript says approximately 400, properly qualified. NPS https://www.nps.gov/jame/learn/historyculture/chronology-of-powhatan-indian-activity.htm ; Encyclopedia Virginia https://encyclopediavirginia.org/entries/opechancanough-d-1646/ . The October 1646 treaty north-of-York-River provisions are supported by the primary transcript https://treaties.okstate.edu/treaties/powhatan-treaty-1646 .
- **§§48.20–21 Mystic and Treaty of Hartford:** May 26, 1637 massacre, September 21, 1638 treaty, named Indigenous allies and Pequot survival are documented. Pequot War archaeological project https://pequotwar.org/archaeology/overviewbattle-of-mistic-fort/ ; Mashantucket Pequot history https://www.mptn-nsn.gov/history/ .
- **§48.27 Massachusett Bible:** 1663 publication, Samuel Green and Marmaduke Johnson, Indigenous collaboration including James Printer verified. Library of Congress https://www.loc.gov/exhibits/bibles/interactives/more/other13.html ; Harvard Peabody https://peabody.harvard.edu/galleries/digging-veritas-literacy-and-printing-press .
- **§§48.31–35 Metacom's War:** general military sequence and major events are correct in spot-check; casualty estimates remain qualified and should remain so.
- **§48.44 Carolina and Westo:** Commercial relationships and their collapse around 1680 are broadly sound; see South Carolina Encyclopedia https://www.scencyclopedia.org/sce/entries/westos/ . Do not apply 1670–1715 slave trade totals specifically to the period through 1701.
- **Cross references:** Chapters 123 (*Language Revitalization*) and 132 (*Historical Memory, Monuments, and Decolonization*) actually appear in governing chapter outline and should NOT be removed.
- **Primary Source Windows:** Labeled paraphrases are acceptable, if attributed to identifiable texts. The Smith, Waterhouse, Mason/Underhill, Hartford, Massachusett Bible, and 1677 treaty features are distinguishable. A two-document comparison should identify both texts clearly, not invent a composite verbatim quotation. No full quotations necessary for publication.

## Browser regression

Chromium with Playwright, `set_content` from original uploaded bytes / corrected HTML, viewport heights 900px. There were **zero uncaught JavaScript errors** at every tested width. Desktop sidebar automatic active-section highlighting passed (navigated to §48.35).

| Viewport | Before page document scroll width | After page document scroll width | Result |
|---|---:|---:|---|
| 1440px | 1440px | 1440px | Pass |
| 900px | 900px | 900px | Pass |
| 390px | 457px | 390px | Pass after correction |
| 320px | 457px | 320px | Pass after correction |

The chronological table remains wider than the narrow viewport but scrolls independently; this is intentional and avoids page-level overflow. The comparison table is already in a scrollable wrapper. No reason to rebuild CSS/JS or redesign navigation.

## Required one-pass consolidated expansion (instructions for Claude)

**Use exactly the audit-corrected Chapter 48 HTML supplied with this report as the starting file.** Keep all five source and responsive corrections, 48 sections in nine divisions, 24 feature boxes, 93 existing IDs, every sidebar link, navigation, styling, mobile rule and the existing script. Do not rebuild from Chapter 1 or revert corrected facts. No micro-passes and no new section subdivision.

Add **approximately 6,000–7,600 historically grounded direct narrative words** distributed across the existing §§48.1–47 (NOT to features, headings or reviews merely to reach quota), aiming for ~23,000–24,500 direct prose words. Suggested editorial emphasis: Division II (Powhatan Virginia) detail on 1610s/1620s/1640s events; Division IV Pequot diplomacy and survivorship; Division V land and legal practices; **Division VI (highest priority)** Metacom's War 1675–78 with month-by-month campaign details, named Indigenous political figures, allied and neutral communities, legal coercion, food and territorial consequences; **Division VII** Chesapeake and Middle Atlantic political history, colonial deeds, Cockacoeske and Lenape perspectives; **Division VIII** Wabanaki diplomacy/Casco terms and Carolina Indigenous commercial and slaving pressures; **Division IX** substantially deepen §48.46's comparative regional interpretation and §48.47 evidence and continuity. Maintain each region's distinct chronology and avoid invading Chapters 45–47 or later textbooks.

Target allocation (approximate added direct words, discretion to follow historical density): I +200; II +600; III +500; IV +700; V +700; VI +1,900; VII +1,200; VIII +1,200; IX +600 = **7,600**. Reduce if narrative becomes repetitive; the goal is 22–27k, not padding. Strengthen document identification and evidence-based specificity rather than multiply generalized claims. Explicitly preserve the direction of the 1678 Casco corn obligation and Santa Elena's 1587 abandonment.

On delivery, independently measure only direct prose in §§48.1–47, audit new historical claims against actual identifiable sources, verify every feature/ID/nav anchor, ensure no prohibited chronological overlap, run Chromium at 1440/900/390/320px and check no page-level overflow. Submit one publication-complete HTML file for a single final independent audit and lock if warranted.

## Final disposition

**NOT APPROVED — NARRATIVE EXPANSION REQUIRED.** Structure, features, source window labeling and technical integrity are in good condition after narrow fixes. The first draft's direct historical prose is below the approved range, and Divisions VI–IX need substantive development. Do not lock or launch another broad planning cycle.
