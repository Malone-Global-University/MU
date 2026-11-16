# MGU Southeast Asian History — Chapter 48
## Final Consolidated Publication Audit | November 6, 2026 (Pacific)

**Chapter:** *Singhasari and the Expansion of East Java*  
**Position:** Volume III, Part IX — *From Srivijaya to Majapahit*  
**Decision:** **APPROVED FOR PUBLICATION — LOCKED as a scholarly textual HTML first edition**, with source-collation limits disclosed below.

### Files and integrity

| Item | Value |
|---|---|
| Claude submitted manuscript | `Pasted text(20261107-064425).txt` |
| Original size | 159,042 UTF-8 bytes |
| Original SHA-256 | `bf6e7a2694596e6631ad29e0f57e5d55be51a3b6233f9a0e842856cc143ff0b8` |
| Canonical final filename | `chapter-048-singhasari-and-the-expansion-of-east-java.html` |
| Canonical/final HTML size | 161,991 UTF-8 bytes |
| Canonical/final SHA-256 | `78809e365a2b0e07011a0a2fed88afddbde64413134f8305cb3e69c97dd366b9` |
| Public-suffix duplicate | `chapter-048-singhasari-and-the-expansion-of-east-java-publication-final.html`, byte-identical to canonical |
| Narrative section count | 20: `s48-1`–`s48-20` |
| Divisions | Five divisions × four historical sections |
| Integrated instructional features | 14 (separate from narrative) |
| Direct narrative words | **9,008** |
| HTML IDs | 59 unique |
| Fragment navigation links | 54; all destinations resolve |
| Responsive tables | 2, keyboard-scrollable and constrained to reading column |

### Direct prose measurement

**Counting rule:** Unicode-aware word tokens in paragraphs which are immediate children of the twenty numbered historical `<section>` elements. Excludes division headings, section headings, teaching feature boxes, table text, opening, chronology, summary and review apparatus. This is a purpose-specific metric, not a full-page word count.

| Division | Section word counts | Total |
|---|---|---:|
| I — Rise of Singhasari | 48.1: 561, 48.2: 365, 48.3: 452, 48.4: 469 | 1,847 |
| II — Consolidation and society | 48.5: 451, 48.6: 395, 48.7: 522, 48.8: 461 | 1,829 |
| III — Kertanagara and kingship | 48.9: 569, 48.10: 417, 48.11: 332, 48.12: 532 | 1,850 |
| IV — Maritime expansion | 48.13: 492, 48.14: 397, 48.15: 500, 48.16: 420 | 1,809 |
| V — Yuan confrontation and collapse | 48.17: 411, 48.18: 496, 48.19: 394, 48.20: 372 | 1,673 |
| **TOTAL** | | **9,008** |

### Applied publication corrections (single integrated pass)

1. **Mūla-Malurung grant (1255):** §§48.7 and 48.9 and source window now distinguish the senior grantor Wisnuwardhana/Narāryya Smining Rāt, recipient Prāṇarāja, and sanctioning regional rulers headed by junior Kertanagara. Corrected the claim that Kertanagara was the unqualified sole original grantor; added specific plates as evidence.
2. **Kertanagara's reign chronology:** §48.9 and preview chronology now separate his junior appointment c. 1254, succession in 1268, Sarwadharma charter of 31 October 1269, and the *Deśawarṇana*'s 1270 report of victory over Cayarāja (canto 41.5), rather than mistakenly using 1270 as a formal accession date. The 1269 date and 1268 succession are supported by Sidomulyo (2010), note 54.
3. **Competing Ken Arok chronologies:** §48.5 and chronology distinguish the *Pararaton*'s later date around 1247 from the *Deśawarṇana*'s 1227 death date and Anusapati's 1248 death date. The 1255 charter adds complexity without settling all succession questions.
4. **Prajñāpāramitā statue:** §48.12 corrected from “now in Leiden” to Museum Nasional Indonesia in Jakarta, inventory 17774. The Ken Dedes identification is still expressly qualified.
5. **Leran gravestone:** §48.13 revised to distinguish the dated funerary inscription from claims about the deceased's profession and about the stone's original provenance. 475 AH/1082–83 is noted as an often-used reading, not a proof of local merchant identity.
6. **Wurare source window:** §§48.11 and instructional box now identify inscription verses 3–9, 10–14 and 17–19. The verses about Bharāḍa, the division/reunification of Java, and Kertanagara's installation of an image modeled on Mahākṣobhya are separated; no unwarranted categorical identification of the image with the king is asserted. The text remains a labelled paraphrase rather than invented translated quotation.
7. **Pamalayu narrative:** §48.15 strengthened through source comparison, the 1275–1286 chronological gap, and distinction between diplomatic exchange, presence and sovereignty; expanded without adding historical section headings.
8. **Jayakatwang's marriage links:** §48.18 now uses the Mūla-Malurung charter's identification of Turuk Bali, sister of Kertanagara, as Jayakatwang's wife (plate 7r), and distinguishes the later narrative about his son Ardharāja from that primary evidence.
9. **Copyedit:** Removed the awkward expression “diplomatically and maritimely” in §48.20.
10. **Source documentation:** Added the selected documentary register with edition identifiers and primary-text locations, as a non-narrative back-matter section.
11. **Mobile rendering:** Preserved original MGU CSS and sidebar script; added only targeted overflow styling and scroll wrappers for both tables.

### Feature and apparatus audit

All fourteen original feature IDs remain: `source-method`, `geography-study`, `debate-ken-arok`, `continuity-kediri`, `source-mula-malurung`, `vocab-sima`, `everyday-life`, `perspectives-religion`, `source-wurare`, `archaeology-study`, `timeline-study`, `debate-pamalayu`, `vocab-amoghapasa`, `cause-effect-fall`. No teaching box replaces a numbered narrative section. Opening, objectives, guiding questions, context, chronology, people and vocabulary preview, summary, major people/places, review, writing exercises, research project and reflection remain in place.

### Independent browser regression

HTML was loaded into headless Chromium with Playwright using `set_content` at the listed widths, with viewport height 870. Testing `file:///` was blocked by browser policy, so no claim is made about file-URL navigation; the same HTML bytes were rendered by the browser. Active-link JavaScript executed without page errors. Two table wraps were also checked for keyboard navigation (Right Arrow increased `scrollLeft` from 0 to 40 pixels at 320px).

| Viewport | Root scrollWidth | Status | Tables |
|---:|---:|---|---|
| 1440px | 1440px | PASS | 2 contained; horizontal scroll when needed |
| 900px | 900px | PASS | 2 contained; horizontal scroll when needed |
| 390px | 390px | PASS | 2 contained; horizontal scroll when needed |
| 320px | 320px | PASS | 2 contained; horizontal scroll when needed |

Other checks: no JavaScript page errors; all 54 internal fragment links resolve; 59 HTML element IDs are unique; 20 narrative sections and 14 instructional features counted independently. Browser regression did not involve external networked assets.

### Scholarly documentation consulted

1. Hadi Sidomulyo, “From Kuṭa Rāja to Singhasāri,” *Archipel* 80 (2010): 77–138, including Appendix B, and pp. 80–94. https://www.persee.fr/doc/arch_0044-8613_2010_num_80_1_4177
2. Arlo Griffiths, DHARMA edition of the 1255 Mūla-Malurung charter, record `DHARMA_INSIDENKMula-Malurung`: plates 1v, 3r–3v, 7r–7v, 11v. https://dharmalekha.info/texts/INSIDENKMula-Malurung
3. Arlo Griffiths, DHARMA edition and translation of the 1289 Wurare inscription, record `DHARMA_INSIDENKWurare`: verses 3–9, 10–14, 17–19. https://dharmalekha.info/texts/INSIDENKWurare
4. Arlo Griffiths, DHARMA edition of the 1286 Padang Roco / Dharmasraya A inscription, record `DHARMA_INSIDENK00007`. https://dharmalekha.info/texts/INSIDENK00007
5. *Deśawarṇana* cantos 41.4–5, considered with Sidomulyo (2010) and the published Pigeaud translation. https://www.spaetmittelalter.uni-hamburg.de/java-history/JavaNK/Java1365.Nagara-Kertagama.Canto.38.3-49.html
6. Museum Nasional Indonesia, “Prajnaparamita,” object 17774. https://museumnasional.iheritage-virtual.id/public/collection/detail/93
7. Surabaya City Heritage Register, “Arca Joko Dolog.” https://disbudporapar.surabaya.go.id/adinda/portaldata/cagarbudaya/detail/arca-joko-dolog
8. Ludvik Kalus and Claude Guillot, “Réinterprétation des plus anciennes stèles funéraires islamiques nousantariennes: II,” *Archipel* 67 (2004): 17–36. https://www.persee.fr/doc/arch_0044-8613_2004_num_67_1_3806

### Limitations and publication scope

- This approval is for the **historical-textual HTML first edition**, not exhaustive original-manuscript collation or a facsimile edition. The Mūla-Malurung and Wurare source windows are clearly marked scholarly paraphrases informed by critical editions, not verbatim text quotations.
- The *Pararaton*, *Deśawarṇana*, and Yuan source traditions have different dates, rhetorical purposes and interests. Dates or motives that remain uncertain are qualified in the narrative.
- The chapter's 20-section first-edition scope is deliberately limited; detailed Yuan operations in Java and Majapahit's foundation are reserved for Chapters 46 and 49.
- HTML functionality was evaluated with Chromium/Playwright and static DOM checks, including mobile widths, but not with a complete third-party accessibility or archival transcription certification.

**Final decision: APPROVED FOR PUBLICATION — LOCKED November 6, 2026 (Pacific), within the stated scholarly textual-HTML scope.**
