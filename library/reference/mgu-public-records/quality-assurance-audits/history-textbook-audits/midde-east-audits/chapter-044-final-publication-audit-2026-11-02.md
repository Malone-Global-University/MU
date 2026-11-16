# MGU Middle East History — Chapter 44 Final Publication Audit

**Date:** November 2, 2026 (Pacific)  
**Book:** *A History of the Middle East: From Ancient Civilizations to the Twenty-First Century*  
**Volume / Part:** Volume III — Islam and the Caliphal Age / Part XI — The Abbasid Imperial System  
**Chapter:** 44 — The Abbasid Revolution and the Founding of Baghdad  
**Disposition:** **APPROVED FOR PUBLICATION — LOCKED (corrected HTML edition)**  
**Chronological scope:** 750–775 CE, with appropriately labeled contextual references.  

## File inventory and reproducibility

- Uploaded Claude source: `Pasted text(20261102-080814).txt` — 214,315 bytes, SHA-256 `4856bf5b55c11c6d2f2cbb2a9417543e65e121fed28e9173e24d584277da4ccc`.
- Publication HTML: `chapter-044-the-abbasid-revolution-and-the-founding-of-baghdad-publication-candidate.html` — 214,667 bytes, SHA-256 `c069ae69d9bda27b671064bd00ab4a4a837f3a9706f3040ae2f370ff04c7e33d`.
- Audit counting method: BeautifulSoup extraction of direct child `<p>` elements from `section#s44-1` … `section#s44-41`; Unicode-aware token regex; excludes section headings, HTML, CSS, sources, debates, opening, review materials, and metadata.
- Verified direct narrative: **15,921 words** in **165 historical paragraphs**, all in the required 3–5-paragraph range. Section lengths: **296–461 words**. Total visible chapter content is approximately 25,000 words by the same tokenization method; it is not a proxy for direct narrative depth.

## Scope, plan, and structure

- Outline matches the authoritative Chapter 44 purpose: Abbasid legitimacy, Iranian/Khurāsānī participation, al-Manṣūr's consolidation, founding Baghdad, government and court formation, and political reorientation eastward.
- Eight divisions, 41 historical sections, division counts 5/5/6/6/7/5/4/3; preserve the distinction from Chapter 43's revolutionary campaigns and Chapter 45's full administrative/fiscal analysis.
- **86 unique HTML IDs**, **78 internal fragment links**, zero duplicates and zero missing anchors. Full sidebar section and feature links, one active-section scroll script.
- Five Primary Source Windows, three Historical Debates, two Geography Studies, one Timeline Study, three Historical Vocabulary boxes, one Multiple Perspectives, Continuity and Change, Cause and Effect, and Everyday Life feature.
- 29 defined Key Terms, 16 Major People and Places entries, 8 Chronology Check prompts, 5 map questions, 5 source questions, 14 review questions, 5 short answer questions, 6 discussion questions, 4 writing exercises, one library research extension, 10 summary paragraphs, 4 reflection paragraphs, 6 prose opening paragraphs plus banner.

## Historical verification and corrections

**1. Succession in §44.39 (publication-relevant correction applied).** The submitted manuscript could be read to put ʿĪsā ibn Mūsā's definitive exclusion under al-Manṣūr in an unspecified part of the 770s. Corrected to distinguish his demotion to second in the line in 147 AH (764–765) from his further renunciation under **al-Mahdī** after the 775 chronological endpoint, often located around 160 AH (776–777). Cross-checked with the *TDV İslâm Ansiklopedisi* entry on ʿĪsā b. Mūsā and Cambridge's *Rituals of Islamic Monarchy* summary of al-Manṣūr's succession politics. Sources: https://islamansiklopedisi.org.tr/isa-b-musa and https://www.cambridge.org/core/books/abs/rituals-of-islamic-monarchy/consolidation-of-abbasid-power-almansur-and-almahdi-754785/6208E8FE08854F8A46AFDCB6A9FDFD42

**2. Baghdad markets and eastern-bank chronology (confirmed).** The al-Karkh relocation in 157 AH/773–774 and the development of al-Ruṣāfa following al-Mahdī's return in 151 AH/768 agree with published scholarship. Source: https://link.springer.com/chapter/10.1007/978-3-031-48561-9_7

**3. Round City scale and building (qualified correctly).** The manuscript describes a diameter approximately two kilometers or more, foundation in 762, core completion c. 766, and legendary workforce/cost counts as unverified reported figures. Published studies produce somewhat different diameters depending on cubits and reconstruction. The manuscript's cautions are appropriate; it does not present the numbers as archaeological measurements. Context: https://www.scielo.cl/scielo.php?pid=S0717-69962012000100003&script=sci_arttext&tlng=en

**4. Eastern campaign chronology (acceptable).** “Around 760” for the integration of Tabaristan is a cautious summary of the campaigns commonly dated roughly 758–761. Sources disagree about the stages of annexation; retain the approximate formulation rather than inventing an exact campaign-completion date.

**5. North Africa (acceptable).** The claim that Yazīd ibn Ḥātim re-established Abbasid control in Ifrīqiya in 772 is consistent with accounts of his arrival following his appointment after the death of his predecessor in 771. Distinguish the appointment and expedition from the 772 entry; the current prose says order was restored in 772, which is defensible. Primary-source-based context: https://www.islam.museum/en/event/yazid-ibn-hatim-ifriqiya/

**6. Major events (consistent).** The accession of al-Manṣūr in 754, confrontation with ʿAbd Allāh ibn ʿAlī, death of Abū Muslim in 755, Alid revolts in 762–763, founding of the Round City in 762, and al-Manṣūr's death in October 775 accord with standard chronologies. Al-Ṭabarī Volume XXVIII (Jane Dammen McAuliffe, 1995) and Volume XXIX (Hugh Kennedy, 1990) have been verified as real editions; the summary of Volume XXVIII explicitly emphasizes the dynastic and Alid challenges. Bibliographic context: https://www.cambridge.org/core/journals/international-journal-of-middle-east-studies/article/abs/altabari-abu-jafar-muhammad-ibn-jarir-the-history-of-altabari-tarikh-alrusul-walmuluk-vol-xxviii-abbasid-authority-affirmed-the-early-years-of-almansur-ad-753763ah-136145-trans-jane-dammen-mcauliffe-biblioteca-persica-albany-state-university-of-new-york-press-1995-pp-349/F338665C6628F4986697A21FFF6E3C7B

**7. Additional source caution.** The five Primary Source Windows provide source-based, explicitly labeled paraphrases and critical limitations; the draft does not fabricate direct quotations. Their attributions are to published volumes/traditions, not page-verified single reports. Chapter instructions do not demand a full critical apparatus or page citations; avoid misleading claims that every passage was verified line by line against manuscripts or printed editions. The audit is a substantial targeted fact-check and internal consistency review, not a complete philological verification of every transmitted statement.

## HTML regression

- The original document had horizontal page overflow at 390px and 320px because its top chronology table was not enclosed in a scrolling container. Corrected by adding an accessible, keyboard-focusable `.table-wrap` with inner-table horizontal scrolling, leaving other content unchanged.
- Chromium/Playwright results on corrected publication candidate:

| Viewport | Root scrollWidth vs clientWidth | JavaScript exceptions | Result |
|---|---|---|---|
| 1440×900 | 1440 / 1440 | 0 | Pass |
| 900×900 | 900 / 900 | 0 | Pass |
| 390×844 | 390 / 390 | 0 | Pass |
| 320×690 | 320 / 320 | 0 | Pass |

- Chronology scroll container tested: at 320px viewport, content scroll width 570px within 280px container; page root remains 320px.
- Desktop click on `#s44-26` updates fragment and produces `section-link active`, confirming sidebar highlighting.
- Source stylesheet: 14,086 characters, based on the established Chapter 2/41 style system; standalone division-banner enhancements retained. The exact Chapter 2 model was not mounted, so no byte-for-byte identity is asserted.

## Integrated corrections to the publication HTML

1. Clarified succession timeline in §44.39, distinguishing the demotion under al-Manṣūr from final renunciation after his death.
2. Restored responsive, horizontally scrolling chronology without page-wide mobile overflow; preserved full table content.
3. Added a third concise Historical Vocabulary feature on Khurāsāniyya, mawālī, and abnāʾ al-dawla, completing the approved three-box feature plan without changing numbered section counts. Updated sidebar link and cross-checked IDs.

## Per-section narrative count

| Section | Paragraphs | Narrative words |
|---|---:|---:|
| 44.1 | 4 | 419 |
| 44.2 | 4 | 411 |
| 44.3 | 4 | 461 |
| 44.4 | 4 | 379 |
| 44.5 | 4 | 428 |
| 44.6 | 4 | 353 |
| 44.7 | 4 | 371 |
| 44.8 | 4 | 352 |
| 44.9 | 4 | 372 |
| 44.10 | 3 | 296 |
| 44.11 | 4 | 417 |
| 44.12 | 4 | 372 |
| 44.13 | 4 | 382 |
| 44.14 | 4 | 403 |
| 44.15 | 4 | 392 |
| 44.16 | 5 | 460 |
| 44.17 | 4 | 372 |
| 44.18 | 4 | 376 |
| 44.19 | 4 | 371 |
| 44.20 | 4 | 409 |
| 44.21 | 4 | 391 |
| 44.22 | 4 | 413 |
| 44.23 | 4 | 355 |
| 44.24 | 4 | 376 |
| 44.25 | 4 | 373 |
| 44.26 | 4 | 455 |
| 44.27 | 4 | 432 |
| 44.28 | 4 | 434 |
| 44.29 | 4 | 391 |
| 44.30 | 4 | 382 |
| 44.31 | 4 | 391 |
| 44.32 | 4 | 382 |
| 44.33 | 4 | 385 |
| 44.34 | 4 | 337 |
| 44.35 | 4 | 376 |
| 44.36 | 4 | 408 |
| 44.37 | 4 | 361 |
| 44.38 | 4 | 328 |
| 44.39 | 4 | 371 |
| 44.40 | 4 | 380 |
| 44.41 | 5 | 404 |

## Division totals

| Division | Sections | Narrative words |
|---|---|---:|
| Revolutionary Victory and Legitimacy | 44.1–44.5 | 2098 |
| Al-Saffāḥ and First Government | 44.6–44.10 | 1744 |
| Al-Manṣūr and Dynastic Control | 44.11–44.16 | 2426 |
| Political Reorganization | 44.17–44.22 | 2332 |
| Founding Baghdad | 44.23–44.29 | 2816 |
| Early Baghdad Society | 44.30–44.34 | 1877 |
| Imperial Provinces | 44.35–44.38 | 1473 |
| Succession and Synthesis | 44.39–44.41 | 1155 |

**Final disposition:** No wholesale expansion or further format redesign is necessary. The corrected, complete chapter is approved as a narrative textbook edition; optional future scholarly annotations are not publication blockers. **Publication master file is the corrected HTML, not the original pasted draft.**
