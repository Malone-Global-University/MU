# MGU Southeast Asian History — Chapter 45 Mid-Build Independent Audit

**Date:** 2026-11-02 (Pacific)  
**Chapter:** 45, *Champa and Đại Việt*  
**Input:** `Pasted text(20261102-122217).txt`  
**Source file:** 176,383 UTF-8 bytes; SHA-256 `8345dca5296b925ead535f5c4857c7e7ff05ce47f3dc3ae23698678ad851788b`  
**Decision:** DEVELOPMENT ACCEPTED; PUBLICATION NOT APPROVED; DO NOT LOCK.

## 1. Mechanical and manuscript findings

- 44/44 historical sections (`s45-1`–`s45-44`), 8/8 divisions (5/6/5/6/7/6/5/4).
- 10,426 direct section-narrative words by regex tokenization of paragraphs immediately inside each historical section. This excludes instructional boxes, introductions, bibliography, and reviews.
- Earlier manuscript under identical tokenizer: 7,571; growth of 2,855 direct-narrative words.
- 29 instructional boxes; 101 unique HTML IDs; 91 fragment links, all valid.
- Chromium 1440, 900, 390, 320 px: no document overflow and no JavaScript page errors; 13 tables wrapped and scroll within container at 390 and 320 px.
- Whole main text ~18,852 word tokens, not an appropriate surrogate for historical prose.

| Division | Prior narrative | Current narrative | Net change |
|---|---:|---:|---:|
| I (§45.1–5) | 1,326 | 1,326 | 0 |
| II (§45.6–11) | 1,320 | 1,411 | +91 |
| III (§45.12–16) | 754 | 754 | 0 |
| IV (§45.17–22) | 966 | 1,012 | +46 |
| V (§45.23–29) | 907 | 2,026 | +1,119 |
| VI (§45.30–35) | 1,095 | 2,213 | +1,118 |
| VII (§45.36–40) | 722 | 722 | 0 |
| VIII (§45.41–44) | 481 | 962 | +481 |
| **Total** | **7,571** | **10,426** | **+2,855** |

Unchanged section text (exact normalized rendered text): §§45.1–9, 45.11–20, 45.22, 45.36–40, 45.43–44. (Some surrounding features may have changed.)

## 2. Historical source checks

1. **1470 temple edict — confirmed improvement.** John K. Whitmore's published translation at Columbia's *Asia for Educators* identifies a speech/report at the ancestral temple, uses dehumanizing imagery, and records 100,000 and 150,000 figures. The revised feature correctly treats the figures and hostile description as rhetoric rather than factual independent measurements. Source: https://afe.easia.columbia.edu/main_pop/ps/ps_vietnam-champa.htm
2. **Post-1471 Ming diplomacy — substantial improvement.** Geoffrey Wade's annotated English translation of *Ming shi* juan 324 documents the competing claimants, blocked Ming envoys at Xin-zhou/Quy Nhơn, Gu-lai's journey from Laos to Hainan, Tu Yong's escorted return, and denial of a proposed Ming campaign. Keep all dates and claims attributed to the actual *Ming shi* text, rather than to independently established Cham records. Source: https://ari.nus.edu.sg/wp-content/uploads/2018/10/wps03_003.pdf
3. **Chế Bồng Nga / A-da-a-zhe — preserve explicit uncertainty.** *Ming shi* reports the killing of A-da-a-zhe by the minister Ge-sheng in Hongwu 23 (1390/91), whereas Vietnamese tradition describes death in combat. Their identification is inferential and the conflicting account must not be silently harmonized. Wade source above.
4. **1069 ruler identification — correction substantially satisfactory, pending direct Vickery review.** Chế Củ in Vietnamese chronicles is not itself proof of identity with Rudravarman III. The draft now identifies this as a scholarly correlation and does not pretend to have read inscription C.30A1. Vickery's full treatment and epigraphy are still needed before final source lock.
5. **1104 campaign — conventional chronology corroborated, source-level review outstanding.** A Vietnamese historical synthesis recounts a Chế Ma Na incursion and Lý Thường Kiệt's reconquest in 1104, but the eventual published text should identify the specific chronicle entries and weigh their construction rather than relying on the synthesis alone.
6. **1311–1318 — significant source-critical uncertainty.** Standard accounts have a 1311–12 Trần campaign and Chế Chí's capture, with renewed fighting in 1318. A modern University of Michigan dissertation proposes a different reconstruction, distinguishing a Cham camp leader (Chế Chí or Phan Trắc) from a ruler elsewhere. Do not declare the entire standard Cham succession established; document the divergence and inspect the underlying *Toàn thư*, *Việt sử lược*, and epigraphy before final publication. Background: https://deepblue.lib.umich.edu/bitstream/2027.42/89821/1/brianz_1.pdf
7. **Unverified original scholarship.** Do not give full bibliographical attribution of Vickery or Whitmore 2004 to a specific claim until the corresponding study is read. Sourcing must be performed during substantive completion, not postponed to the end.

## 3. Approved completion workflow (without micro-passes)

The ban on division-level micro-passes refers to repeated shallow editorial cycles, not practical limits on manuscript-generation output. Authorize **three large cumulative composition batches** with no approval pause between them:

- **Batch A — Sections 45.1–11 and 45.36–44:** Full analytical and Cham-centered source development, trade, village and household social history, cultural continuity, 1069/1104 source checks, post-1471 institutional survival. Retain and integrate newly established evidence in 45.41.
- **Batch B — Sections 45.12–22:** Serious development of Angkor-Champa-Đại Việt relations, the Trần attack of 1252, maritime networks, Yuan pressure, 1301 diplomatic visit, 1306 marriage, and territorial administration. Verify all ruler correlations and chronology from sources.
- **Batch C — Sections 45.23–35 and cross-chapter synthesis:** Although this division pair was just expanded, it is still only 4,239 combined direct words for 13 sections covering the core military and political transformations. Deepen campaigns of Chế Bồng Nga, the 1377/1390 source conflict, 1446/1471, Cham and Ming testimony, occupation/settlement, political effects, civilian displacement; inspect Vickery and Whitmore. Integrate accumulated edits in one final 44-section HTML.

**Planning goal:** 24,000–30,000 direct historical narrative words, flexible with evidence; no fixed per-section quotas, no padding. This implies another ~13,574 words to reach 24,000, or ~19,574 to reach 30,000. At the end of each batch, run an automated regression that counts per-section narrative and verifies no missing/duplicate IDs, lost features, broken fragment links, or shell changes, but **do not** conduct independent publication micro-audits after every batch. Perform one independent historical and browser publication audit of the integrated final manuscript.

## 4. Final gate

Do not lock or publish the current upload. Architecture and responsive technical design pass; historical narrative and document-level scholarly substantiation still require completion. The next submission should be the integrated full-depth text with a precise narrative count, source register, and HTML regression results.
