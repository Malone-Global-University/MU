# MGU Persian and Iranian History — Chapter 45 Consolidated Final Publication Audit

**Audit date:** 10 November 2026 (America/Los_Angeles)  
**Chapter:** 45 — *The Mongol Invasions of Iran*  
**Volume / Part:** Volume IV, *Mongol Iran, Timurids, and the Road to the Safavids*; Part VIII, *Conquest and the Ilkhanate*  
**Decision:** **APPROVED FOR PUBLICATION — LOCKED** for the first-edition scholarly historical HTML text, with the source and external-deployment limitations below.

## 1. Audit scope and methodology

- Inspected the entire uploaded Claude HTML manuscript, verified its structure and all internal fragment targets, and performed targeted historical verification with specialist scholarly references. Reviewed substantive sections covering the Mongol campaign sequence through 1260 and the three editorial primary-source windows.
- Checked the agreed 20-section/5-division architecture against the previously approved Chapter 45 plan; confirmed chapter boundaries and chapter references against the Persian and Iranian History authoritative chapter outline already established in the project.
- Corrected factual and cross-reference issues directly **in the HTML**, with no new numbered sections and no indiscriminate narrative expansion.
- Executed Node syntax validation for the embedded JavaScript; examined HTML tag balance and navigational IDs; rendered the corrected HTML in headless Chromium at 1440, 900, 390, and 320 pixels. Tested the §45.20 sidebar link.
- Inspected the approved Chapter 44 publication-final HTML as a shell/design comparator. This supports general layout parity but does not establish byte-identical markup or CSS with Chapter 1.

## 2. Provenance and immutable file identifiers

| File | UTF-8 bytes | SHA-256 |
|---|---:|---|
| Claude original upload `Pasted text(20261110-203550).txt` | 174,067 | `f2dbe905f2906cc968569f3a031d6c0da27cf5c7f2bc6d4e3f15b24dfcd87c67` |
| Canonical corrected HTML `chapter-045-the-mongol-invasions-of-iran-publication-final.html` | 172,918 | `90737d832b4a500a1f5742a977e2762603c18a6c49cc372e56efb2cd21ea0136` |
| Byte-identical deployment alias `chapter-045-the-mongol-invasions-of-iran.html` | 172,918 | `90737d832b4a500a1f5742a977e2762603c18a6c49cc372e56efb2cd21ea0136` |

The original uploaded draft is unchanged. The two corrected HTML versions are byte-identical. Content is a standalone HTML first-edition publication artifact, not an archive-facsimile edition.

## 3. Binding first-edition plan compliance

| Audit item | Verified |
|---|---|
| Main sections | Exactly 20, consecutively `s45-1` through `s45-20` |
| Divisions | Exactly 5, four numbered main sections in each |
| Last numbered main section | §45.20; review sections after it are unnumbered |
| Direct historical narrative paragraphs | 9,175 whitespace-separated words |
| All rendered HTML text including front matter, teaching boxes and review | 18,793 whitespace-separated words |
| Integrated instructional features | 15 total (the required features plus supplementary perspectives/everyday-life materials) |
| Primary Source Windows | 3: Ibn al-Athir, Juvayni, Kirakos Ganjaketsi; all explicitly editorial paraphrases |
| Historical debates | 2: military superiority and the multi-stage conquest |
| Unique IDs | 54 |
| Internal anchors | 54 total, no unresolved fragments |
| Main HTML section tags | 37 opening / closing pairs |
| HTML div tags | 102 opening / closing pairs |
| Tables | 2, both in scrolling wrappers |
| Placeholder tokens | No known editorial placeholders in the chapter |

**Length decision:** Claude's 60,000–70,000-character note is not a binding cap on this scholarly chapter; the actual uploaded HTML is substantially longer because it includes full narrative, feature boxes, review apparatus, CSS, and JavaScript. The first-edition narrative word range is a flexible planning guide; no historical section merits mechanical compression just to satisfy it.

## 4. Historical and source review: significant confirmed points

1. **Three-stage conquest:** *Encyclopaedia Iranica*, “Mongols,” distinguishes the initial 1219–1220s Chinggisid campaigns, a second wave under Chormaqan and Baiju, and Hülegü's arrival and expanded conquests in the 1250s. Chapter 45's overall historical argument is well-founded.
2. **Otrar:** The merchant caravan and diplomatic crisis occurred in **1218**, with disagreement about motives and individual responsibility. The 1219 invasion date and the manuscript's interpretive caution are appropriate.
3. **Gurganj:** The city's fall in **1221** is consistent with standard accounts; the draft properly avoids pretending to know the precise timing of every phase or the definitive mechanism of flooding.
4. **Merv, Nishapur and Herat:** The devastation of the first two in 1221 and the initial Herat submission followed by revolt and siege into 1222 are broadly consistent with regional scholarship. Medieval mortality totals are explicitly not used as verified population statistics.
5. **Isfahan:** The city's definitive Mongol capture in **1237** is supported by the scholarly consensus, notwithstanding a preceding failed assault and the problematic source tradition.
6. **Köse Dağ:** Baiju's defeat of the Seljuks of Rum on **26 June 1243**, and the earlier taking of Erzurum, are supported by the specialist Iranica article by Peter Jackson.
7. **Nizari campaigns:** Maymundiz and Alamut fell separately in November and December 1256; the survival of other fortresses beyond 1256 is preserved.
8. **Baghdad and Syria:** The surrender of Baghdad in February 1258 and the Mamluk defeat of Kitbuqa at Ain Jalut on **3 September 1260** are correctly presented. The complex reasons for Hülegü's withdrawal are not reduced to one certain cause.
9. **Source attribution:** Ibn al-Athir is correctly presented as a contemporary observer writing from Mosul but not an eyewitness in distant Khurasan; Juvayni as an official writing under Mongol patronage; Kirakos as a regional Armenian Christian witness with important but imperfect testimony.

## 5. Targeted publication corrections applied directly to HTML

| Location | Original | Corrected | Reason |
|---|---|---|---|
| Chapter opening | “In the winter of 1218–1219” for the Otrar caravan | “In 1218” | Specialist scholarship places the diplomatic-commercial crisis in 1218; the winter framing was misleading. |
| §45.14 | Ganja firmly captured in 1235 | Ganja captured in the early to mid-1230s, explicit disagreement among Armenian accounts | Armenian chronicle traditions differ; precision here was unjustified. |
| §45.19 | Mongol-era Maragha observatory assigned to Chapter 43 | Tusi began Maragha observatory construction with Hülegü's patronage in **1259**, explicitly after Chapter 43's pre-Mongol scholarly period | Original cross-reference misassigned a post-conquest institutional development to the chapter intentionally ending at 1256. |
| §45.19 | Open conflict with Berke included among the causes of the 1260 Ain Jalut result | Removed contemporaneous attribution; described open Hülegü–Berke warfare beginning **1261–1262** as a later constraint | Avoids projecting the later Golden Horde–Ilkhanid war backward into the 1260 battle. |

**No change** to the clearly stated conquest dates at Gurganj, Isfahan and Köse Dağ because the specialist verification supports them. No changes to the section architecture or source-window structure.

## 6. Source-window editorial status

- **Primary Source Window I — Ibn al-Athir, *al-Kamil fi'l-Taʾrikh*.** A transparent historical paraphrase of his well-known reaction to the invasions. Not a collated direct excerpt. The distance between Mosul and the eastern battlefields is disclosed.
- **Primary Source Window II — Juvayni, *Tarikh-i Jahan-gushay*.** Transparent synthesis of his contrasting condemnation of devastation and legitimation of Mongol authority. J. A. Boyle's English translation is identified; no invented verbatim speeches.
- **Primary Source Window III — Kirakos Ganjaketsi, *History of the Armenians*.** Transparent synthesis of conquest and accommodation in the Caucasus; Robert Bedrosian's English translation is identified; no invented quotes or fictitious manuscript folios.

**Disclosure:** These source windows are editorial paraphrases, *not* directly collated excerpts of the original Arabic, Persian or Armenian pages; the sources should be consulted in edition or translation for primary-document study. The map exercises are text guided and require an appropriate historical atlas.

## 7. Final HTML and Chromium verification

| Test | Result |
|---|---|
| JavaScript syntax (`node --check` on embedded script) | PASS |
| Unique IDs and fragment destinations | PASS — 54 / 54, all resolve |
| HTML major tag balance | PASS — sections, divs, tables, sidebar, header, main, footer |
| Headless Chromium at 1440 px | PASS, no JS errors or horizontal overflow |
| Headless Chromium at 900 px | PASS, no JS errors or horizontal overflow |
| Headless Chromium at 390 px | PASS, no JS errors or horizontal overflow |
| Headless Chromium at 320 px | PASS, no JS errors or horizontal overflow |
| Internal scrolling of tables on narrow viewports | PASS |
| Sidebar navigation action to §45.20 | PASS |
| Basic Chapter 44 design parity | PASS — self-contained CSS, book header, sidebar, division banners, feature boxes, review and footer; minor banner and CSS differences |
| Live website deployment/browser check | NOT PERFORMED |
| Exact Chapter 1 markup/CSS identity | NOT ESTABLISHED |

## 8. Source register (specialist references checked)

1. *Encyclopaedia Iranica*, “Mongols,” https://www.iranicaonline.org/articles/mongols/ — three stages of conquest, Isfahan 1237, Chormaqan/Baiju and pre-Ilkhanid officials.
2. *Encyclopaedia Iranica*, “Herat iii. History, Medieval Period,” https://www.iranicaonline.org/articles/herat-iii/ — initial Herat surrender, renewed resistance and six-month siege, caution about figures.
3. *Encyclopaedia Iranica*, “Otrar,” https://www.iranicaonline.org/articles/otrar/ — 1218 merchant crisis, Khan’s retaliation and 1219 campaign.
4. *Encyclopaedia Iranica*, “Bayju,” Peter Jackson, https://www.iranicaonline.org/articles/bayju-baiju-or-baicu-mongol-general-and-military-governor-in-northwestern-iran-fl/ — succession to Chormaqan, Erzurum, Köse Dağ June 1243.
5. *Encyclopaedia Iranica*, “Hulagu Khan,” https://www.iranicaonline.org/articles/hulagu-khan/ — 1259–1260 campaign, Ain Jalut and Hülegü–Berke chronology.
6. *Encyclopaedia Iranica*, “Tusi, Nasir al-Din ii. As Mathematician and Astronomer,” https://www.iranicaonline.org/articles/tusi-nasir-al-din-mathematician-astronomer/ — Maragha begun 1259.
7. Dashdondog Bayarsaikhan, *The Mongols and the Armenians (1220–1335)*, Brill, 2011, and related historical editions — variant Armenian dating, Kirakos's perspective.
8. *Encyclopaedia Iranica*, “Isfahan vi. Medieval Period,” https://www.iranicaonline.org/articles/isfahan-vi-medieval-period/ — definitive Isfahan conquest and continued resistance.
9. Timothy May / Michael Hope edited scholarship on Mongol expansion and Armenian accounts, together with the translated Kirakos record, https://www.attalus.org/armenian/kg1.htm — regional source corroboration.
10. *Encyclopaedia Iranica*, “Hulagu Khan,” as above, and recent scholarship on Mongol logistics and the 1260 withdrawal — multiple possible causal interpretations, not a settled one-factor explanation.

The audit used targeted secondary-source verification rather than an exhaustive comparison against original-language manuscript witnesses or all conflicting regional narratives.

## 9. Final determination

**APPROVED FOR PUBLICATION — LOCKED as the MGU Persian and Iranian History Volume IV first-edition scholarly textual HTML Chapter 45.** The critical corrections are already incorporated; all 20 sections and 15 integrated teaching features are intact; chapter boundaries are correct; desktop and mobile browser tests pass. No new sections, general expansions, or repeated micro-passes are recommended. Proceed to Chapter 46 “War, Destruction, Displacement, and the Problem of Demographic Change” when ready.
