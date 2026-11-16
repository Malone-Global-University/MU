# MGU Latin American History — Chapter 60 Final Independent Publication Audit

**Chapter:** 60 — *Gran Colombia and the Fragmentation of the Andes*  
**Volume:** III — *Independence and the Making of Nations*  
**Part:** XIII — *Republics, Caudillos, and Nation-Building*  
**Decision:** **APPROVED FOR PUBLICATION — LOCKED, November 2, 2026 (Pacific)**

## 1. File provenance and identity

- Submitted Claude-built HTML: `Pasted text(20261103-030047).txt` — **290,261 bytes**; SHA-256 `bb0c4f5ab11f91faed77fff86cede54179b0794e5f72ed032629ad9f64b048a4`.
- Publication-final HTML: `chapter-060-gran-colombia-and-the-fragmentation-of-the-andes.html` — **291,471 bytes**; SHA-256 `22e7fca1f07d4ad299f23e8d4d4077cf2a42e95abce9aaea6d8728cb1b037486`.
- All interventions were targeted; the established 48-section architecture, section numbering, instructional features, original section narrative except specific factual corrections, and JavaScript remain in place.

## 2. Structural and instructional verification

- 48 sections in nine divisions: **5 / 5 / 6 / 5 / 5 / 5 / 5 / 9 / 3**; no missing or out-of-order section labels.
- Exactly four direct narrative paragraphs in all 48 numbered sections.
- **22,476** direct historical narrative words using regex tokenization, excluding nested teaching features, front and back matter; average **468.2** per section, range **366–588**. Counts can vary slightly by tokenizer.
- 10 Primary Source Windows, each with four document-specific questions; five Map Studies; four vocabulary boxes; Timeline Study; Historical Debate; Multiple Perspectives; Cause and Effect; Continuity and Change; and Everyday Life and Social History.
- Everyday Life and Social History box now contains **624** approximate words and five narrative paragraphs. Four social-history paragraphs accidentally left outside its boundary in §60.45 were moved inside without changing or deleting their wording; §60.45 now consists of four direct historical paragraphs.
- 31 glossary term cards, 20 Major People/Places review entries, nine Chapter Summary paragraphs, four Chapter Reflection paragraphs, and a research project.
- 92 distinct HTML IDs (all unique); 90 internal anchors (all resolve); one H1 and one inline script.

## 3. Historical and documentary corrections (targeted)

1. **New Granada 1832 — Article 16 false attribution (critical):** The submitted source window incorrectly attributed an exclusivity clause regarding Catholic state-supported worship to *Article 16 of the 1832 constitution*. In the 1832 document, Article 15 concerns protection of Catholic worship and Article 16 opens the rules for parish elections. Article 16 of the **1843** constitution separately declares Catholicism the only religion whose worship the republic maintains. Corrected §60.27 source window, analytical comparison, verification note, student questions, and §60.29 narrative. References: 
   - 1832: https://www.cervantesvirtual.com/obra-visor/colombia-21/html/0260fdfc-82b2-11df-acc7-002185ce6064_1.html
   - 1843: https://www.cervantesvirtual.com/obra-visor/colombia-22/html/02610608-82b2-11df-acc7-002185ce6064_1.html
2. **New Granada 1843 — dating:** Clarified constitutional sanction **20 April**, promulgation **8 May**, and separate effective date **1 October 1843**. See https://www.bogotajuridica.gov.co/sisjur/normas/Norma1.jsp?dt=S&i=13695.
3. **New Granada 1832 — document metadata:** Identified 29 February issuance and 1 March effectiveness as the official metadata convention (the constitutional edition bears the 1 March label).
4. **Santander:** Inauguration dated **7 October 1832**, consistent with the Banco de la República history: https://enciclopedia.banrepcultural.org/Los_partidos_pol%C3%ADticos_en_el_siglo_XIX.
5. **War of the Supremes:** Huilquipamba dated **29 September 1840**; Aratoca retained in February 1841. Historical verification: https://www.senalmemoria.co/articulos/guerra-que-inicio-la-iglesia.
6. **Bolivia 1843:** Constitution sanctioned **11 June** and promulgated **17 June 1843**. See https://www.cervantesvirtual.com/obra-visor/constitucion-politica-del-17-de-junio-de-1843/html/5b99b0bd-9e57-40e0-b73f-37ec6d31ead7_2.html.
7. **Bolivia — communal land and Ballivián (1842):** Replaced an inaccurately reassuring description with the constitutional-property distinction: the 14 December 1842 circular asserted state ownership of community lands, recognizing Indigenous use rather than full title. Implementation was contested and uneven. See https://scielo.conicyt.cl/scielo.php?pid=S0718-10432004002700007&script=sci_arttext.
8. **La Cosiata — source provenance:** Revised the window around the Valencia municipal act of **30 April 1826**, distinguishing the council's contemporary claim of popular acclamation from an independent evaluation of public support. Added the contemporary-print and reprint chain; the accessible transcription and historical-account evidence inform the paraphrase. Cross-check: https://ahcarabobo.com/la-cosiata/ and https://bibliofep.fundacionempresaspolar.org/dhv/entradas/l/la-cosiata/.
9. **Organic Decree, 27 August 1828:** Linked the primary decree in Colombian Función Pública; clarified verified scope (decree including Articles 25–26), while separating the untranscribed Ocaña convention proceedings. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=13691.
10. **§60.45 instructional regression:** Moved four orphan social-history paragraphs inside the Everyday Life teaching box; no deletion of substantive material.

Previously identified corrections also survive in this candidate: Bogotá under patriot control by December 1819; Guayaquil surrendered on 19 January 1829; Quito separation act 13 May 1830; Bolívar resignation/Mosquera succession May 1830; legislative role in Bolivia 1826 vice-presidential succession; dated Bolivian tribute share rather than an unsupported universal estimate.

## 4. Browser and machine validation

- **Chromium tested at 1440, 900, 600, 390, and 320 CSS px.** Page width equals viewport width for all five; **zero page-level horizontal overflow** and **zero page JavaScript exceptions**.
- Chronology tables in `.table-scroll` remain internally scrollable on narrow screens.
- Sidebar hidden at mobile breakpoints as intended; at desktop viewport the active sidebar highlight for §60.42 was tested with a real scroll and was correct.
- Inline JavaScript passed `node --check`.
- Compared to the separately available locked Chapter 59 HTML, the inline JavaScript is byte-identical. The Chapter 60 additional CSS differs in expected division-banner and responsive-table rules. The original Chapter 31 CSS and JavaScript were not independently available for a byte-for-byte comparison.
- Browser snapshots created at `/mnt/data/chapter-060-final-desktop.png` and `/mnt/data/chapter-060-final-mobile.png`.

## 5. Scope and limitations of publication approval

The audit examined the nine-division plan, section development, important chronological and constitutional points, key source windows, technical accessibility, and editorial consistency. It is a selective, risk-based independent check, **not exhaustive verification of every sentence or original archival manuscript**. Other source windows still contain distinguishable paraphrases and appropriately labeled secondary-historical context. The full initial 1832 constitutional claim was corrected with direct consultation of a published full text. All ten primary-source teaching windows remain and have individually differentiated questions.

**Final decision:** **APPROVED FOR PUBLICATION — LOCKED.** Do not initiate another general prose expansion or iterative micro-pass. Progress to Chapter 61 according to the authoritative outline.
