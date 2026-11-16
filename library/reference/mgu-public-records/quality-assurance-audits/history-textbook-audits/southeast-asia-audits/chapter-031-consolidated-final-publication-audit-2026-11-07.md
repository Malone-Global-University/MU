# Chapter 31 — Consolidated First-Edition Publication Audit

**Audit date:** November 7, 2026 (America/Los_Angeles)  
**Series:** MGU Southeast Asian History: Crossroads of the Indian and Pacific Oceans  
**Volume II, Part VI — Maritime Powers and Sacred Landscapes**  
**Chapter:** 31 — Borobudur and the Buddhist Landscape of Java  
**Editorial determination:** **APPROVED FOR PUBLICATION — LOCKED**, for the scholarly textual HTML first edition with the limitations below.

## Canonical artifact

- Publication filename: `chapter-031-borobudur-and-the-buddhist-landscape-of-java.html`
- Output UTF-8 (LF) bytes: **176,892**
- Output SHA-256: `93bd8adff3782409b9262c78675bb35c732d66e9438352c2e35aa35b720a0acd`
- Supplied Claude manuscript: `Pasted text(20261107-122107).txt`; **153,782 bytes**, SHA-256 `ef63d006257b0f21e4dc36e05f012c35cffd884754f753cf59b78a8764961be4`.
- The supplied manuscript is preserved unchanged; changes are in the separate publication file.

## Production compliance

- **20 numbered historical narrative sections:** §§31.1–31.20, contiguous and independently counted. Exactly five divisions, four numbered sections each. Chapter 31 follows the correct Volume II, Part VI and the authorized chapter title.
- **16 separate instructional features:** source methodology; geography; timeline; Karangtengah primary-source; patronage debate; hidden-foot archaeology; historical vocabulary; iconography; Karmavibhaṅga comparison; Lalitavistara comparison; Jātaka/Avadāna narrative study; multiple perspectives; cause/effect; everyday life; continuity/change; conservation archaeology.
- **Original unnumbered narrative orphan fixed:** `s31-reliefs-intro` removed as a standalone section; its substantive paragraph is included as an ordinary narrative paragraph within §31.9.
- **Complete opening/review material:** chapter opening, objectives, questions, historical context, chronology, people/places, vocabulary preview, summary, key terms, people/places review, chronology check, map and source questions, review/short-answer/discussion questions, writing prompts, research project, and reflection all retained.
- Existing MGU CSS, sidebar, page header, footer, typography, and active-section script retained. No new numbered historical sections added and no existing feature boxes removed.

## Direct historical narrative measurements

**Method:** Count only text in `<p>` elements which are direct children of the 20 numbered historical `<section>` elements, excluding labels, headings, all nested feature-box prose, tables, division banners, opening apparatus, source register, and review. Regex word tokenizer recognizes alphanumeric words and internal hyphen/apostrophe punctuation. This is a reproducible editorial count, not a typesetting count.

| Division | Numbered sections | Direct narrative words |
|---|---|---:|
| I — Historical and Religious Landscape | 31.1–31.4 | 1,725 |
| II — Architecture and Cosmology | 31.5–31.8 | 1,707 |
| III — Relief Programs | 31.9–31.12 | 2,450 |
| IV — Ritual and Society | 31.13–31.16 | 2,048 |
| V — Interpretation and Legacy | 31.17–31.20 | 1,785 |
| **TOTAL** | **20** | **9,715** |

**Compared with upload:** 7,294 → **9,715** direct narrative words (+2,421), meeting the first-edition target of 8,400–10,400. Largest additions address source comparison and historiography in Division III and ritual, pedagogy, economy, and social reconstruction in Division IV. Extra words were not supplied by counting feature boxes as narrative.

**Per-section words:**  
§31.1 453; §31.2 452; §31.3 436; §31.4 384; §31.5 449; §31.6 454; §31.7 396; §31.8 408; §31.9 712; §31.10 583; §31.11 564; §31.12 591; §31.13 495; §31.14 502; §31.15 521; §31.16 530; §31.17 438; §31.18 405; §31.19 619; §31.20 323.

## Historical/documentary corrections and additions

1. **Karangtengah/Kayumwungan (824 CE):** Source box identifies five surviving stone fragments, an opening Sanskrit section followed by Old Javanese, references to *jinalaya* and *Venuvana*, and a Kayumwungan rice-field *sīma* grant. The interpretations associating the named religious foundation(s) with Borobudur, Mendut, Ngawen or another site remain explicitly uncertain. The paraphrase is **not** claimed to be a translation newly collated from the original stone.
2. **Concealed foot:** Distinguishes the 160 relief panels from the archival photographs that make them routinely accessible. Discussion includes a reproducible catalogue object, Céphas photograph **O.109**, attributed by N. J. Krom to *Mahākarmavibhaṅga* passages 27–28, and the distinct Chinese text comparisons labeled T80/T81 in archaeological scholarship. These are **scholarly panel-to-text proposals**, not assertions that a ninth-century manuscript is identified conclusively.
3. **Lalitavistara:** Source window identifies photographic episode ranges among panels 1–27 and 96–120, and distinguishes modern catalogue numbering from original stone inscriptions. No verbatim translation is invented.
4. **Gaṇḍavyūha:** Incorporates Jan Fontein’s 2012 detailed study of 460 related narrative reliefs and use of three early Chinese textual witnesses; the chapter distinguishes sculptural narrative from claims of documented ninth-century liturgy.
5. **Everyday life, labor and ritual:** Reconstructed social arrangements are explicitly labeled as inferences, not fictive eyewitness reports or unsupported workforce estimates. Religious and political change is kept separate from inferred continuity in local practice.
6. **1814 documentation:** H. C. Cornelius is identified as the engineer commissioned under Thomas Stamford Raffles. The text explicitly notes that local knowledge predated colonial inspection, rather than treating the event as the first discovery of the monument.
7. **Core monument data:** UNESCO supports eight-/ninth-century dating, the structure's five square terraces and three circular platforms, the three-monument grouping, 72 openwork stupas, and conservation history. The conventional 504/432/72 statue distribution and the 1,460 narrative relief figure are retained with the qualifications in the text.
8. **Terminology and uncertainty:** Continues to distinguish observable architecture from debated cosmological schemes; no firm attribution of the initial founder or original name; no single-cause story of abandonment; clear limits on modern replica-ship experiments.

## HTML and browser QA — consolidated

- **HTML IDs:** 56 unique / 56 total; duplicates 0.
- **Internal fragment links:** 56 resolved / 56 total; broken 0.
- **Feature boxes:** 16; **responsive tables:** four, all wrapped in accessible horizontal-scroll containers (`role=region`, `tabindex=0`, descriptive `aria-label`).
- **Desktop 1440px:** document width exactly 1440px; sidebar active-link observer exercised successfully at §31.18; no JavaScript errors.
- **Tablet 900px:** document width exactly 900px; no overflow or JavaScript errors.
- **Mobile 390px:** document width exactly 390px; all four tables scroll inside their regions; no JavaScript errors.
- **Mobile 320px:** document width exactly 320px; all four tables scroll inside their regions; no JavaScript errors.
- Screenshots inspected for the 320px introductory view; the original reading layout is preserved.
- Browser method: local HTML content rendered directly via Playwright in headless Chromium with four viewports; page-error and console-error listeners installed.

## Source register / evidence limits

The final HTML includes a source register with eight documentary and scholarly items, including UNESCO World Heritage Centre, Indonesia’s Borobudur Conservation Office (BorobudurPedia), Hariani Santiko (*Amerta* 34/2), Kassian Céphas's photo O.109 (museum catalogue), Anandajoti’s relief guide, Jan Fontein (Brill 2012), Soekmono (UNESCO Press 1976), and Krom/van Erp (1920). The three primary-source study boxes are clearly marked as editorial paraphrases or analytical summaries.

**Important scope limitations:** This is a first-edition **historical-textual HTML** approval, not a claim of independent collation of all Sanskrit, Old Javanese, or Chinese manuscripts, or direct examination of every relief. Classroom map studies require an external atlas; original map plates and annotated photographs are not embedded in the HTML. Historiographical debates and ambiguous identifications are identified in text. A later illustrated or specialist edition may add facsimiles, full epigraphic editions, and image reproductions under appropriate licenses.

## Editorial decision

**APPROVED FOR PUBLICATION — LOCKED on November 7, 2026 (Pacific)** as the scholarly textual HTML first edition. The output is ready for the MGU GitHub repository using the canonical filename above. Do not undertake further micro-revision passes absent a demonstrated substantive factual, accessibility, or publication-critical defect.
