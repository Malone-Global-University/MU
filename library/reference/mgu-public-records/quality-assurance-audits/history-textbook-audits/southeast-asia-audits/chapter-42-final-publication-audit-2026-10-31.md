# MGU Southeast Asian History — Chapter 42 Final Publication Audit

**Date:** October 31, 2026 (Pacific)
**Chapter:** 42 — *Vietnamese Independence and the First Đại Việt States*
**Volume / Part:** Volume III, Part VIII — Pagan, Đại Việt, and Champa
**Disposition:** **APPROVED FOR PUBLICATION — LOCKED**, after consolidated source-critical and technical corrections.

## Inspected files

- Claude input: `Pasted text(20261031-105439).txt` (original submitted HTML)
- Final: `chapter-42-vietnamese-independence-and-the-first-dai-viet-states.html`
- Final file: **178,067 UTF-8 bytes**; SHA-256 **`db027fbc0e9dbb2eafbd5bb60264c668d2d5d35e82f86ab3dc791b3f5542aa1a`**.

## Plan compliance and direct historical narrative

- All 30 sections **§§42.1–42.30**, seven divisions **4/5/4/4/5/5/3**, present and ordered.
- **10,640 direct numbered-section narrative words** counted from direct `<p>` children of each numbered historical section, excluding features, opening, sidebar, and review. This is below the earlier 12,000–16,000 planning range but is a complete substantial chapter. Do not confuse main-body or site-wide counts (~20,000 words) with direct narrative.
- **102 direct historical paragraphs** across the 30 sections; 3–6 per historical section. Five/other? Weighted paragraphs concentrated in high-density events.
- **18 integrated instructional feature boxes**, including three identified paraphrased source windows, historical debates, geography/map studies, military case study, multiple perspectives, cause/effect, and synthesis.
- Opening, objectives, historical context, chronology, people/places, vocabulary, summary, chronology questions, review and short answer, discussion, writing, research, reflection present.
- Boundaries respected: Chapter 23 background only; Chapter 43 Lý consolidation reserved; Chapter 45 wider Champa–Đại Việt relations reserved; no modern-state teleology; tenth-century realm referred to as **Đại Cồ Việt**, not the later official name **Đại Việt**.

| Division | Historical sections | Direct narrative words |
|---|---:|---:|
| I | 4 | 1,644 |
| II | 5 | 1,356 |
| III | 4 | 1,603 |
| IV | 4 | 1,615 |
| V | 5 | 1,808 |
| VI | 5 | 1,727 |
| VII | 3 | 887 |
| **Total** | **30** | **10,640** |

## Essential historical corrections incorporated (not wholesale rewriting)

1. **905 vs 906:** Khúc Thừa Dụ attained local control in **905**; the Tang formal appointment/recognition as Jinghai `jiedushi` was **early 906**. Revised the opening, chronology, §42.4, and Source Window 1. Source: Vi An Lu, *Journal of the Royal Asiatic Society* 35.3 (2025), pp. 657–677, DOI 10.1017/S1356186325000136. URL: https://www.cambridge.org/core/journals/journal-of-the-royal-asiatic-society/article/annan-protectorate-in-northern-vietnam-during-the-tang-period-679907/0330A3F32086B5B1AEFC262A54FBF023
2. **Bạch Đằng 938 textual evidence:** Claude incorrectly stated that Chinese records omit the iron-tipped stakes and feigned flight. The Chinese **Zizhi tongjian, juan 281**, completed 1084, explicitly recounts the iron-covered stakes, incoming tide, light-boat feint, ebbing tide, and death of Liu Hongcao. The account is earlier than the *Toàn thư* but still retrospective, **not an eyewitness or direct contemporary account**. Revised §§42.11–42.12 and the source window's limitations/student prompts. Chinese text: https://www.xuoda.com/ls/zztjf/281.htm (paragraph beginning 楊延藝故將吳權). Thirteenth-century archaeological stake finds remain **not proof for the 938 battle**.
3. **Southern Han title:** The Chinese text identifies Liu Hongcao as designated **Prince of Jiao** and Jinghai military governor, not “Prince of Jin.” Corrected §42.11; same *Zizhi tongjian* source.
4. **Song invasion of 981:** The manuscript omitted that *Song shi*, **juan 488** records an **initial Song victory at the Bạch Đằng mouth** and seizure of ships and armaments before a failed campaign marked by divided command, delayed forces, and Hou Renbao's death. Revised §42.24 to distinguish stages and competing narratives. Clarified Liu Cheng's **sea-route** command and Sun Quanxing/Cui Liang in the **land force**. Source text: https://ctext.org/wiki.pl?chapter=434826&if=gb&remap=gb ; readable passage also at https://contents.nahf.or.kr/id/NAHF.jo.k_0020_0488_0010_0060 . The broader final defeat remains secure; specific route/tactic descriptions are source-dependent.
5. **Đinh diplomacy:** Clarified embassy dispatch in **972–973**, the initial **973** investitures and subsequent **975** honors, avoiding treating the 973 return as definitely the date of dispatch. For dates/titles compare the *Toàn thư* Đinh annals and published examination of investiture: https://englishkyoto-seas.org/wp-content/uploads/SEAS0801_all.pdf (reference only, not independently examined in full in this audit); https://lib.dangnho.com/sach/dai-viet-su-ky-toan-thu/chuong/ban-ky-toan-thu-1-nha-dinh-nha-tien-le-968-1009-2 .
6. **Primary Source Window 3:** Replaced the vague attribution to “Song histories” with **Song shi, juan 488, Jiaozhi account**, in an explicitly marked paraphrase of recorded embassies, investiture and envoy reports. The book was compiled in the 14th century from earlier Song documents; no verbatim quotation has been manufactured.
7. **Sidebar:** Corrected the misleading feature label for sovereignty and added a separate functional link to the Hoa Lư geography feature.

## Other verified items and limitations

- **Đinh Liễn's Buddhist scripture columns**, including a **973** pillar and additional related pillars of the 970s, are documented in Hà Văn Tấn's specialist epigraphic work, reproduced by Vietnam National University: https://his.ussh.vnu.edu.vn/vi/news/nguyen-thanh-dat/ve-tin-nguong-cot-kinh-phat-dinh-ton-thang-o-the-ky-x-gs-ha-van-tan-5801.html . The chapter appropriately treats them as evidence of court religious activity, not of routine village administration.
- **Twelve Warlords**: later Vietnamese listing is identified as retrospective, with territorial identifications and the number twelve interpreted cautiously.
- **Song 981 commander list**: verified against *Song shi* juan 488; the decisive Song defeat and later diplomacy are not disputed, while an overly neat sequence of tactical Vietnamese wins must be rejected.
- Review does **not** certify every incidental interpretation or chronicle detail against an original manuscript edition. Where the chapter relies on later sources or hypothetical social reconstruction, caveats are retained.

## Technical final regression

- Parsed HTML with BeautifulSoup; all 30 independent numbered historical sections and all 7 division banners present; no duplicate IDs.
- **67 unique HTML IDs**, **66 internal anchor links**; **0 broken destinations**.
- JS syntax verified with `node --check`; script content is an exact match with approved Chapter 41.
- Chromium via Playwright, `page.set_content` of final HTML, checked 1440, 900, 390, 320 px. All widths: **no page-level horizontal overflow**, **no JavaScript errors**. Three tables are in horizontally scrollable wrappers and remain accessible on narrow screens. No external assets needed.
- Original CSS tokens, sidebar, header, instructional box layout, and scroll-highlight JS retained. Only chapter-specific feature and scroll styles added.

## Final determination

**Approved and locked.** The direct narrative is approximately 10.6k words, below the indicative target, but meets publication-depth expectations in light of the chapter's complete event coverage, evidence-conscious treatment, and established MGU acceptance of non-mechanical word-count targets. Do not request filler or micro-passes. Reopen only for a material new documentary or rendering defect.
