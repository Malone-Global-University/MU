# MGU Middle East History — Chapter 55
## Consolidated Final Publication Audit and Source Register

**Publication disposition:** APPROVED FOR PUBLICATION — LOCKED  
**Date:** 7 November 2026 (America/Los_Angeles)  
**Series:** *A History of the Middle East: From Ancient Civilizations to the Twenty-First Century*  
**Volume:** IV — The Medieval Middle East: Turks, Crusaders, Mongols, and Regional States  
**Part:** XIII — The Post-Abbasid Regional Order  
**Chapter:** 55 — *The Ghaznavids and the Expansion of the Persianate World*  
**Publication class:** First-edition standalone scholarly textual HTML. Not an illustrated historical atlas or critical edition of primary manuscripts.

### 1. Canonical files and provenance

Original Claude manuscript: `Pasted text(20261108-035527).txt`  
- UTF-8 file size: **158,719 bytes**.  
- SHA-256: `96766795d14c78770ad1b21d0fb63f380c28f87a74272f6d088a3c700dcd922b`.

**Canonical publication-final HTML:** `chapter-055-the-ghaznavids-and-the-expansion-of-the-persianate-world-publication-final.html`  
- UTF-8 file size: **160,407 bytes**.  
- SHA-256: `f8d5b4224fe2f8c66667eabd2f2bd6f8f75042aa1860a480c4e568cd93d23532`.

The final file was produced by applying a narrowly scoped correction set to Claude's already substantive manuscript. It is *not* a general narrative rewrite. All approved section headings, five divisions, learning objectives, study-feature categories, research apparatus, CSS design tokens, sidebar layout and existing script were retained. The new CSS is confined to scroll-contained chronology tables and their keyboard focus treatment.

### 2. Audit methodology and counting convention

- The HTML was parsed with Beautiful Soup. Direct historical narrative was counted from paragraphs that are **direct children of** the twenty consecutively numbered `section#s55-1` through `section#s55-20` elements, excluding paragraphs in inserted instructional feature boxes. Unicode-aware regex tokenization counts lexical words; different word counters may vary modestly.
- The local file was tested in headless Chromium with Playwright at viewport widths 1440, 900, 390, and 320 pixels, each 900 pixels high; console-level script exceptions, horizontal page overflow, tables, and sidebar functionality were inspected.
- Bibliographic metadata was compared with publisher, national-library, and journal records. Verification of publication metadata **does not imply** a line-by-line collation of Arabic, Persian, or Sanskrit source manuscripts.
- The earlier historical audit identified a probable incorrect year for the execution of Hasanak and confirmed that the manuscript's other principal chronology was broadly reliable, with necessary qualifications on Ferdowsi, Jayapala, Anandapala, Somnath, and the Battle of Dandanqan. This final pass made only the targeted corrections identified below.

### 3. Structural and narrative verification

| Test | Final result | Disposition |
|---|---:|---|
| Numbered historical sections | Exactly 20, §§55.1–55.20 | PASS |
| Historical divisions | 5, each containing 4 numbered sections | PASS |
| Direct numbered-section historical narrative | **8,561 words** | PASS, within 8,000–10,000 target |
| Historical prose paragraphs | 81 (19 sections with 4, §55.11 with 5) | PASS |
| Opening historical paragraphs | 6 plus opening banner | PASS |
| Learning objectives | 12 | PASS |
| Guiding historical questions | 8 | PASS |
| Chronology preview | 19 entries | PASS |
| Primary-source windows | 5 | PASS |
| Geography studies | 3 | PASS |
| Historical debates | 2 | PASS |
| Dedicated timeline exercise | 1 | PASS |
| Multiple perspectives, continuity/change, cause/effect, everyday life | All 4 present | PASS |
| Defined glossary cards | 28 | PASS |
| Chapter summary | 9 paragraphs | PASS |
| Chapter reflection | 4 paragraphs | PASS |
| Source-register bibliographic entries | 11 (6 primary/translation, 5 secondary/reference) | PASS for first-edition apparatus |
| Full visible HTML text, including sidebar and apparatus | ~17,640 tokenized words | Informational |

The twenty sections preserve the approved historical architecture: (I) Samanid inheritance and dynastic formation; (II) army, administration, taxation and society; (III) South Asian expansion and its consequences; (IV) Persianate court and intellectual culture; (V) Khwarazm/Rayy, Masʿud, Dandanqan and long-term legacy. They consistently differentiate Turkic military ancestry from Persianate institutional development, territorial control from campaigns and tribute, and court rhetoric from independent evidence.

### 4. Corrective change register

**H-01 — Historical dating of Hasanak, applied in three locations.**  
Replaced the unqualified **1033** execution year with **“approximately 1031–1032”**, retaining the description of the episode early in Masʿud's reign and the distinction between political rivalry and religious accusation. Corrected (a) §55.6, (b) §55.18, and (c) the Bayhaqi source window. This phrasing reflects variation in modern Gregorian dating of events near 423 AH and avoids overstating precision. No other chronology rows were rewritten.

**B-01 — Remove provisional and inaccurate bibliography note.**  
The original source register claimed its citations were unverified. Replaced that note with a statement of the checked bibliographic record and the editorial limits of source paraphrases and map exercises.

**B-02 — Ali Anooshahr citation confirmed.**  
Entered the full journal record: Ali Anooshahr, “The Ghaznavid Empire of India,” *The Indian Economic & Social History Review* **58**, no. 4 (2021): **441–476**; DOI **10.1177/00194646211041162**. The article is real, not a provisional production-plan placeholder.

**B-03 — Ferdowsi translation publication metadata corrected.**  
The Dick Davis *Shahnameh* citation now distinguishes the 2006 Viking Penguin publication from the 2007 Penguin Books edition; these should not be conflated as “Penguin, 2006.”

**B-04 — Nizami ʿArudi edition identified.**  
Replaced “older English translation” with the bibliographically identifiable revised Browne translation of *Chahár Maqála*, printed for the E. J. W. Gibb Memorial and issued by Luzac in **1921**. The register flags this as later evidence for Ferdowsi patronage stories, rather than treating the traditions as contemporaneous proof.

**B-05 — Remaining historical editions and core scholarship standardized.**  
Standardized titles and publisher information for al-ʿUtbi/Reynolds 1858 (translation through a later Persian intermediary); Gardizi/Bosworth 2011; Bayhaqi/Bosworth–Ashtiany 2011; al-Biruni/Sachau 1888; Bosworth's 1963 *Ghaznavids* and 1977 *Later Ghaznavids*. Included stable external catalogue/publisher links alongside entries where available. Romila Thapar's 2004 Penguin India/2005 Verso editions remain distinguished.

**T-01 — 320-pixel table overflow corrected.**  
Wrapped **both** `table.chron-table` elements (opening chronology and the timeline study) in focusable, accessible `.table-scroll` containers. Added localized CSS `overflow-x:auto`, `max-width:100%`, and a preserved readable table minimum width. The table content can now be scrolled horizontally on narrow viewports without extending the page itself. The original site design remains unchanged elsewhere.

### 5. Primary-source treatment

The five instructional source windows are:

1. **Al-ʿUtbi**, *Tarikh al-Yamini* / *Kitab al-Yamini*: Mahmud's campaigns and legitimation, distinguished from the later Persian adaptation and English translation.
2. **Gardizi**, *Zayn al-Akhbar*: Ghaznavid political interpretation and the difficulty of reading the Somnath narrative as direct evidence.
3. **Ferdowsi**, *Shahnameh*: Persian epic ideals, kingship, literary memory and the difference between epic narrative and documentary records.
4. **Al-Biruni**, *Kitab al-Hind*: Sanskrit learning, cross-cultural inquiry, translation, comparison and the author's vantage point.
5. **Bayhaqi**, *Tarikh-i Masʿudi*: Hasanak's fall, officeholding, religious allegations, court rivalry and reported speech.

All five excerpts are **explicitly labeled editorial paraphrases, not quotations**. No representation is made that the supplied paraphrases were checked against exact lines in a manuscript witness or a specified page of a printed translation. Historicizing the motives of an author, identifying the date of testimony, recognizing selective transmission, and comparing evidence from different communities remain part of each study.

### 6. Publisher and catalogue source-verification register

Metadata checked against the following independently identifiable public records. These URLs are verification sources, not claims of having read every primary text in full.

- Library of Congress, al-ʿUtbi/Reynolds, *The Kitabi-i-Yamini* (1858): https://www.loc.gov/item/52053674/
- Bloomsbury/I.B. Tauris, Gardizi/Bosworth, *The Ornament of Histories* (2011): https://www.bloomsbury.com/us/ornament-of-histories-a-history-of-the-eastern-islamic-lands-ad-6501041-9781848853539/
- Ilex Foundation, *The History of Beyhaqi*, translated by Bosworth, revised by Ashtiany (three vols., 2011): https://ilexproject.org/publications/
- National Library of Ireland, al-Biruni/Sachau, *Alberuni's India* (two volumes, 1888): https://catalogue.nli.ie/Record/vtls000469320
- Smithsonian Libraries, Ferdowsi/Dick Davis, *Shahnameh* (Viking 2006; Penguin Books 2007): https://www.si.edu/object/shahnameh-persian-book-kings-abolqasem-ferdowsi-translated-dick-davis-foreword-azar-nafisi%3Asiris_sil_1089690
- Wellcome Collection, Nizami ʿArudi/Browne, *Revised Translation of the Chahár Maqála* (1921): https://wellcomecollection.org/works/jv49f4as
- British National Bibliography, Bosworth, *The Ghaznavids* (1963): https://obnb.uk/p7005600-the-ghaznavids-their-empire-in-afghanistan-and-eastern-iran-994-1040
- British National Bibliography, Bosworth, *The Later Ghaznavids* (1977): https://obnb.uk/p9292687-the-later-ghaznavids-splendour-and-decay-the-dynasty-in-afghanistan-and-northern-india-1040-1186
- SAGE Journals, Anooshahr, “The Ghaznavid Empire of India,” *The Indian Economic & Social History Review* 58 (4), 2021, 441–476: https://journals.sagepub.com/doi/10.1177/00194646211041162

### 7. HTML structure and navigation

| Validation | Result |
|---|---|
| Unique HTML IDs | **58** |
| Duplicate IDs | **0** |
| Internal `href="#..."` anchors | **58** |
| Broken internal anchor targets | **0** |
| Numbered section elements | **20** |
| Existing sidebar navigation | Preserved |
| Existing IntersectionObserver-based sidebar highlighting | Functional when section navigation settles |
| JavaScript errors on load / during test | **0** |

External source-registry links are ordinary publisher/library destinations and do not affect the count of 58 internal links. The publication file remains standalone, uses no external CSS or required scripts, and is legible offline; external bibliography links require connectivity.

### 8. Chromium responsive regression

Tested with Chromium/Playwright at four viewport widths (height 900 pixels). Widths below are document dimensions from the live renderer, not visual estimates.

| Width | `documentElement.scrollWidth` | Page overflow | Table behavior | JavaScript errors |
|---:|---:|---|---|---:|
| **1440px** | 1440px | None | Full table visible | 0 |
| **900px** | 900px | None | Full table visible | 0 |
| **390px** | 390px | None | Both tables scroll within containers | 0 |
| **320px** | 320px | None | Both tables scroll within containers | 0 |

At **320px**, the first table wrapper measures **280px client width** against **610px scroll width**, and the timeline wrapper measures **230px client width** against **610px scroll width**. Both are intentionally scrollable; neither forces the document beyond the viewport. At **390px**, the wrapper widths are **350px** and **300px**, and both are likewise scrollable. Sidebar visibility follows the established responsive rules. The desktop sidebar navigation to `#s55-19` was clicked and, after the scroll completed, the corresponding active navigation class was verified. Visual previews of the opening were inspected at desktop and narrow-mobile sizes.

### 9. Historical and editorial scope of approval

The previously audited interpretive safeguards were retained: separate Samanid and Qarakhanid agency; limits on the self-immolation report about Jayapala and on numbers associated with the Anandapala coalition; analysis of temple plunder without anachronistic communal narratives; a careful distinction between Ferdowsi–Mahmud patronage tradition and established fact; and qualification of numerical and rhetorical claims about Seljuk/Ghaznavid conflict.

**Disclosed limitations, not first-edition blockers:**

- Five primary-source excerpts are editorial paraphrases rather than page-collated verbatim passages from specified manuscripts.
- Three map/geography studies are textual atlas exercises, without embedded historical map plates.
- This is a scholarly *teaching-text* edition, not a comprehensive philological apparatus, independent archaeological field report, or exhaustive verification of every medieval number and personal name against original witnesses.
- The source register gives bibliographic coverage appropriate to the teaching edition; a later critical scholarly edition could add passage-level archival references and manuscript variants.

### 10. Consolidated publication decision

**APPROVED FOR PUBLICATION — LOCKED** on 7 November 2026 (Pacific) for the first-edition scholarly textual HTML edition.

The narrative already exceeded the minimum target before correction and remains within range at **8,561 direct historical words**. The full pedagogical apparatus, exact section structure, source-critical qualifications and established HTML shell have been preserved. The three targeted correction categories (Hasanak chronology; source-register publication details; responsive chronology tables) have been implemented and tested. No further general expansion or iterative micro-pass is necessary for this edition.

The canonical HTML identified in §1 is the authoritative final file. Subsequent optional illustrated or manuscript-collated editions should be treated as separate versioned products rather than prerequisites to publishing this first edition.
