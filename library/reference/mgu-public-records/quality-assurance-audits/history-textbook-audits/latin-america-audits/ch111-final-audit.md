# MGU Latin American History — Chapter 111 final consolidated publication audit

**Editorial revision:** November 17, 2026 (Pacific)  
**Historical cutoff:** November 16, 2026  
**Source manuscript:** `Pasted text(20261117-084344).txt` (Claude HTML draft)  
**Prior audit:** `ch111-audit.md` (November 17, 2026)  
**Deliverables:** `ch111.html`, canonical long-named HTML, and `ch111.zip`.

**Disposition: APPROVED for first-edition scholarly textual HTML publication, with historical cutoff and source-access limitations disclosed below.** The approval certifies the consolidated editorial and structural checks described here; it is not a guarantee that all externally hosted URLs will remain available or that subsequent events have been incorporated.

## 1. Audit method and revision provenance

The revision was made directly to Claude's supplied HTML: its original CSS foundations, sidebar, hero design, 20 numbered historical sections, five division banners, recurring instructional apparatus, and review structure were retained. Original narrative paragraphs were preserved except where factual corrections were essential. New historical narrative paragraphs were inserted within their corresponding assigned sections. Primary-source window summaries remain **explicit paraphrases**, not fabricated verbatim quotations. Bibliography and source windows now contain conventional HTML links to named institutional or documentary records.

Narrative word counts were computed from text in direct `<p>` children of the 20 named historical `<section>` elements (`#s111-1` to `#s111-20`), excluding feature boxes, tables, chronology, learning apparatus, preface and back matter. Counting uses a Unicode word-token regular expression. Browser testing used local Chromium/Playwright with one `set_content()` HTML load per viewport, without accessing remote assets.

## 2. Structural outcome

| Metric | Initial Claude draft | Final revised chapter |
|---|---:|---:|
| Direct historical narrative words | 6,846 | **13,718** |
| Historical sections | 20 | **20** |
| Divisions | 5 | **5** |
| Primary-source windows | 9 | **9**, each with four questions and direct source links |
| Geography studies | 3 | **3** |
| Quantitative studies | 3 | **3** |
| Historical debates | 2 | **2** |
| Perspectives features | 3 | **3** |
| Vocabulary feature boxes | 4 | **4** |
| Cause/effect features | 2 | **2** |
| Continuity/change features | 1 | **1** |
| Everyday-life features | 2 | **2** |
| Key-term entries | 38 | **38** |
| Summary paragraphs | 11 | **11** |
| Document references | 33 unlinked | **45 linked** |
| HTML IDs | 70 unique | **70 unique** |
| Broken internal anchors | 0 | **0** |
| Mobile TOC links to individual sections | 0 | **20** |
| Accessible scrolling table wrappers | 0 | **4 of 4** |

The revised chapter retains 12 learning objectives, 10 guiding questions, 15 historical review questions, 6 short-answer questions, 8 discussion questions, 5 writing exercises, and the substantive research project.

### Direct narrative by section

| Section | Words | Section | Words |
|---|---:|---|---:|
| §111.1 | 746 | §111.11 | 681 |
| §111.2 | 682 | §111.12 | 727 |
| §111.3 | 633 | §111.13 | 817 |
| §111.4 | 631 | §111.14 | 708 |
| §111.5 | 593 | §111.15 | 594 |
| §111.6 | 610 | §111.16 | 697 |
| §111.7 | 627 | §111.17 | 784 |
| §111.8 | 636 | §111.18 | 795 |
| §111.9 | 707 | §111.19 | 697 |
| §111.10 | 662 | §111.20 | 691 |

Division I: 2,692 words; Division II: 2,466; Division III: 2,777; Division IV: 2,816; Division V: 2,967. The distribution follows historical complexity rather than rigid uniform allocation; the total is within the approved 12,500–14,000 range.

## 3. Historical corrections and direct documentation

1. **Salvadoran homicide data (§111.12 and Source 5).** The Prosecutor General's public annual homicide table currently lists **496 intentional homicides for 2022** while the security ministry's January 2026 retrospective table lists **495**. Both are official agency-reported figures; the text discloses the one-case discrepancy and identifies their distinct documentary origins, rather than falsely asserting a single definitive official series. The 2025 government number remains **82**, with a stated rate of **1.3 per 100,000**. UNHCR and other compilers that reproduce these figures are not misrepresented as independent enumerators. Documents: https://www.fiscalia.gob.sv/estadisticas-de-homicidios/ ; https://diario.elmundo.sv/nacionales/seguridad-oficializa-82-homicidios-durante-el-2025 ; https://www.unhcr.org/us/sites/en-us/files/2026-06/unhcr-annual-results-report-2025-el-salvador_17.pdf
2. **Legal basis and continuity (§111.10, Source 4).** The 27 March 2022 Decree **333** originally suspended rights under Articles 7(1), 12(2), 13(2), and 24. Later renewals did not continue Article 7(1) in the same manner. Decree **689**, enacted October 21, 2026, kept the emergency in force **October 28–November 26, 2026**. References identify original legislation, an August 2022 extension, and October 2026 renewal. https://www.asamblea.gob.sv/leyes-y-decretos/view/7050 ; https://www.jurisprudencia.gob.sv/DocumentosBoveda/R/2/2020-2029/2022/03/F200A.HTML?embedded=true
3. **IACHR date and custody figures (§111.13, Source 6).** The substantive OAS statement on the emergency is **press release 66/26 dated April 21, 2026**, not April 6 as claimed in the initial draft and preliminary audit. It cites **more than 91,500 arrests according to official data** and reports monitor estimates of at least 500 deaths by March 10, 2026. The 2024 IACHR report is linked **both** via its official announcement and the full 318-page report (Doc. 97/24). GIPES's 403 deaths through August 2025 and 540 disappearance cases through February 2025 are labeled by their own reporting windows, not conflated with 2026 totals. https://www.oas.org/en/IACHR/jsForm/?File=%2Fen%2Fiachr%2Fmedia_center%2FPReleases%2F2026%2F066.asp ; https://www.oas.org/en/iachr/reports/pdfs/2024/Report_StateEmergencyHumanRights_ElSalvador%20(1).pdf
4. **2025 U.S. FTO designations (§111.16).** Barrio 18's designation took effect on **September 24, 2025**; the chapter differentiates it from MS-13's February designation and from criminal findings about any particular person. https://www.federalregister.gov/documents/2025/09/24/2025-18498/foreign-terrorist-organization-designation-of-barrio-18
5. **2025 CECOT transfers (§111.16, Source 8).** Linked **U.S. Court of Appeals D.C. Circuit order, No. 25-5217, dated August 8, 2025**, identifies the release and transfer of **252 Venezuelan nationals** to Venezuela in the July 18 exchange, and the court's procedural disposition. Supplemented with dated congressional testimony and Reuters reporting. https://assets.aclu.org/live/uploads/2025/03/CECOT-DC-Cir-ruling.pdf
6. **Honduras (§111.17, Quantitative III).** A preliminary 2025 homicide rate of 23.2 per 100,000 has been distinguished from the interinstitutional **UNAH/ONV August 2026 bulletin: 2,633 homicides and rate 26.2**. The Honduras exception expired **January 26, 2026**, at the end of Xiomara Castro's administration; Nasry Asfura took office January 27, rather than causing a retroactive expiration. https://policianacional.gob.hn/foro-nacional-violencia-y-seguridad-en-honduras-destaca-reduccion-de-homicidios-durante-el-2026/
7. **Guatemala (§111.18, Quantitative III and chronology).** Official reporting documents **11 police deaths** following the January 2026 attacks. The state of siege **ended February 16**; Government Decree **2-2026** established a distinct state of prevention from **February 17**, and Guatemala gave the UN notice of that separate measure. The chapter no longer treats that known February outcome as unresolved. https://agn.gt/tras-concluir-el-estado-de-sitio-estos-son-sus-resultados-en-seguridad/ ; https://treaties.un.org/doc/Publication/UNTS/No%20Volume/14668/A-14668-Guatemala-080000028069d273.pdf
8. **Regional context (§111.19).** Costa Rica's **Laura Fernández Delgado** was formally declared elected March 3, 2026, with a term starting May 8, replacing the draft's vague reference to an unnamed winner. https://tse.go.cr/comunicado1168.html

The source windows explicitly distinguish allegations and investigative assessments from adjudicated criminal findings. The 2027 Salvadoran election and other post-cutoff events remain prospective.

## 4. Document apparatus, HTML and Chromium

- **Nine source windows** remain intact, each with four instructional questions; every window links to two or more named documents, reports, proceedings, or dated notices.
- **Forty-five bibliography entries** contain valid HTTPS URL syntax. Many priority sources were directly located and checked during this revision, including original U.N. records, Salvadoran decrees, a full IACHR report, Federal Register notices, Guatemalan notices, the UNAH security bulletin, and the U.S. appellate court order. However, **not every external target was individually HTTP-checked from the built HTML**, and ongoing link maintenance is recommended.
- **All four tables** are in horizontally scrolling containers with `tabindex="0"`, `role="region"`, and accessible labels; the table content remains available at narrow widths.
- The **mobile chapter contents** provides direct links to each numbered historical section.
- **Chromium:** widths tested: 1440, 1024, 900, 768, 430, 390 and 320 pixels. Zero horizontal document overflow at all widths, zero JavaScript page errors. Desktop sidebar remained available above the 900-pixel breakpoint; mobile contents appeared at and below it.
- **70 unique HTML IDs, 88 in-page anchor links**, and no broken/duplicate identifiers.

## 5. Limitations and final disposition

This is a dated **scholarly textual HTML** edition, not a claim that all disputed investigations have reached final adjudication. Official homicide series are not fully independent; human-rights figures depend on distinct reporting windows and investigation methods; long-term security outcomes remained open as of the cutoff. The chapter maintains these distinctions and includes links enabling students to trace underlying claims. Browser checks establish mechanical and rendering behavior, not third-party website uptime after publication.

**APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — EDITORIAL LOCK, November 17, 2026 (Pacific), historical cutoff November 16, 2026.** Future changes after the cutoff belong to a separately dated revised edition or an explicit update note, not a silent overwrite of the locked historical text.

**Final HTML file:** 231,138 UTF-8 bytes; SHA-256 `9c8dca6d88e8b7282cc9a8c363bdfb2abc9882de1480d655f06cdca7aef014ff`. The short and long filename versions are byte-identical.
