# MGU Native American History — Chapter 51 Final Publication Audit

**Audit date:** November 6, 2026 (Pacific)  
**Textbook:** *Indigenous Peoples of North America: A Continental History*  
**Volume V, Part IX**  
**Chapter 51:** *Apache Worlds*  
**Disposition:** **APPROVED FOR PUBLICATION — LOCKED AS SCHOLARLY TEXTUAL HTML FIRST EDITION**, subject to disclosed external atlas and original-facsimile limitations.

## 1. Production record

- **Claude source manuscript:** `Pasted text(20261107-050610).txt`; 46,194 UTF-8 bytes; SHA-256 `b6ed117229d0f1b006faa9a09b7eb0f17d3925f4753967d4564f7eed8ad1a1be`.
- **Authoritative corrected full-depth HTML:** `chapter-051-apache-worlds-publication-final.html`; **176,009 bytes**, SHA-256 `d0a69d066421762233a8c2326078b86d2e4a9381b955016e92dce441fdadfc2c`.
- **Historical framework:** five divisions, exactly 20 numbered sections; §§51.1–51.19 are substantive narrative and §51.20 is review/synthesis.
- **Narrative depth:** **13,893 direct historical words**, against the adopted 12,000–16,000 first-edition planning range. Counts are text in only immediate `<p>` children of historical section elements, excluding headings, features, all opening apparatus and review.
- **Direct historical narrative gain over audited draft:** approximately 12,344 words (draft 1,549).
- **Feature boxes:** 16 integrated studies, including original features and six new studies of migration, kinship, exchange, Coronado evidence, regional comparison, and Janos.

## 2. Division and section word counts

| Division | Section range | Direct narrative words |
|---|---|---:|
| I — Origins, Diversity and Geography | §§51.1–51.4 | 2,937 |
| II — Communities, Economies and Everyday Life | §§51.5–51.8 | 2,975 |
| III — Spanish Colonization | §§51.9–51.12 | 2,736 |
| IV — Regional Apache Histories | §§51.13–51.16 | 2,812 |
| V — Diplomacy and Accommodation | §§51.17–51.19 | 2,433 |
| **Total** | **§§51.1–51.19** | **13,893** |

| Historical section | Words | Historical section | Words |
|---|---:|---|---:|
| §51.1 | 765 | §51.11 | 663 |
| §51.2 | 768 | §51.12 | 680 |
| §51.3 | 736 | §51.13 | 714 |
| §51.4 | 668 | §51.14 | 712 |
| §51.5 | 789 | §51.15 | 683 |
| §51.6 | 818 | §51.16 | 703 |
| §51.7 | 691 | §51.17 | 704 |
| §51.8 | 677 | §51.18 | 857 |
| §51.9 | 682 | §51.19 | 872 |
| §51.10 | 711 | — | — |

## 3. Review apparatus

- Chapter-summary synthesis: **10 paragraphs**.
- Defined glossary: **30 terms**.
- Major persons, peoples and places: **24 defined reference entries**.
- Chronology questions: **11**.
- Map questions: **6**.
- Primary-document questions: **6**.
- General review questions: **15**.
- Short-answer questions: **6**.
- Discussion prompts: **6**.
- Writing prompts: **5**.
- Research/library source-dossier assignment and extended chapter reflection: present.
- Selected scholarship, documentary and tribal source register: **16 linked entries**.

## 4. Historical and documentary corrections

1. **Apache diversity and ethnonyms:** maintains distinctions between Plains Apache and the more narrowly identifiable Kiowa Apache; Western Apache and Chiricahua are not collapsed. Spanish local exonyms are treated as historically variable labels.
2. **Southern Athabaskan migration:** language connection is firm but migration dates, routes and archaeological attribution remain qualified; community origin traditions are not flattened into an assumed date.
3. **Society and ethnography:** specific twentieth-century Goodwin and Opler findings are not portrayed as a universal or direct firsthand record of all eighteenth-century Apache groups.
4. **Coronado 1541:** source window identifies Coronado's royal letter and Castañeda's later chronicle; Querechos/Teyas identification remains disputed; no invented primary-text quotation.
5. **Spanish conquest, slavery and the Pueblo Revolt:** connects Spanish coerced labor and captivity to later responses while distinguishing diverse Apache participation from a fictional single polity; Babcock's 2024 synthesis supports key interpretive chronology.
6. **1749 Lipan–Natagés diplomacy:** identifies a traceable retrospective document, Texas Governor Domingo Cabello’s **September 30, 1784** report as edited and excerpted in Nancy McGown Minor (2009) and the Lipan Apache Tribe’s hosted record. Source window explicitly separates contemporary events from the later account. The **August 19** public formalization and **August 20** tribal treaty-register/departure milestones are not falsely conflated.
7. **San Sabá:** missionary project established in April 1757; March 16, 1758 attack treated as a multi-nation coalition, not one undifferentiated Comanche act, and Lipan strategies receive independent consideration.
8. **Spanish Apache peace establishments:** identifies **Isose, Domingo de Vergara, Bacoachi/Fronteras (1786–1787)**; **El Compá and Janos (1790s)**; and Mescalero **Nantan Volante / Presidio del Norte (1790)**, grounded in Babcock's research. Political participation is not equated to unconditional assimilation.
9. **Source ethics:** documentary paraphrases are marked; archival documentary witnesses are not falsely presented as fully facsimile-collated or universally representative.

### Source coverage and limits

Key external references were individually checked against available public research and official/traditional sources: Matthew Babcock’s Oxford 2024 chapter and Cambridge 2016 study; Lipan Apache tribal history and treaty register; the tribe-hosted edited Cabello material; the Texas State Historical Association; Mescalero Apache Tribe; National Park Service Fort Bowie; Yale eHRAF; published Coronado document translations and archaeological scholarship on Querechos and Teyas; University of Arizona Press's Goodwin volume; and the HRAF listing of Opler. The chapter does **not** claim that every line of surviving Spanish archival manuscripts was read in original form, or that all uncertain local identities have been independently resolved.

## 5. HTML and responsive regression

- Validly constructed document with one doctype; restored **approved locked Chapter 50 CSS, plus minimal 320px resilience rules**, and preserved **exact 577-character scroll-aware navigation JavaScript**.
- JavaScript extracted and verified with `node --check` (passed).
- **20 section IDs present; 16 feature boxes; 59 unique element IDs; 54 valid internal anchor destinations, with no duplicates or missing targets**.
- Desktop left sidebar has section-level navigation for all 20 sections, educational features, and review/source-register components.
- Four browser tests (Chromium via Playwright; HTML rendered using `set_content`):

| Viewport | Document scroll width | JavaScript errors | Result |
|---:|---:|---|---|
| 1440px | 1440px | 0 | PASS |
| 900px | 900px | 0 | PASS |
| 390px | 390px | 0 | PASS |
| 320px | 320px | 0 | PASS |

- Desktop sidebar active-state navigation verified after scrolling to §51.15.
- At 390px and 320px, the chronology changes from wide table to **stacked, labeled mobile cards**, with no page-level horizontal overflow.
- Mobile and desktop screenshots retained as local QA artifacts.

## 6. Editorial disposition

**APPROVED FOR PUBLICATION — LOCKED** for the MGU *textual HTML first edition*. Historical writing is substantial across all 19 historical sections; the exactly-20-section architecture and review are complete; source-dependent problems in the original draft have been corrected; the chapter passes navigation and mobile checks. **Disclosed limits:** map exercises are atlas-guided textual activities rather than embedded historical map plates; the source windows use explicitly labeled translated/documentary paraphrases and secondary reconstructions, not original facsimiles collated line by line. These are limitations of this edition, not reasons to demand another expansion pass.

### SHA-256 checksum

`{sha}`  — `{f.name}`
