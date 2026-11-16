# MGU Southeast Asian History — Chapter 45 Initial Independent Audit

**Chapter:** 45 — Champa and Đại Việt  
**Date:** November 2, 2026 (Pacific)  
**Status:** **NOT APPROVED / NOT LOCKED**  
**Input:** `Pasted text(20261102-080911).txt` (HTML source)

## Executive determination
The chapter faithfully implements the approved 44 historical sections in 8 divisions (5 / 6 / 5 / 6 / 7 / 6 / 5 / 4) and preserves the production shell. Its historical framing is generally sound, especially its treatment of multiple Cham polities and its rejection of an inevitable, linear *Nam tiến*. However, it is an **abbreviated draft**, not a full-depth textbook chapter. Do not lock and do not iterate through section-by-section micro-passes. Preserve the architecture and undertake one holistic, source-grounded narrative expansion and documentary correction.

**Revised word-length authority:** Allow as much as **30,000 direct historical narrative words** if the subject supports them; recommend a working range of **24,000–30,000 direct narrative words**, excluding all features, introduction, tables, review, and HTML. Never pad or invent historical details to hit a figure. The prior 18,000–23,000 range is superseded for this chapter.

## Mechanical measurement of submitted source

- **44/44 historical sections**, **8/8 division banners**, exact prescribed distribution.
- **7,571 direct historical narrative words**, counting only direct child `<p>` elements in `#s45-1` through `#s45-44`; headings, apparatus, features and tables excluded. Regex-based word counting; other conventions may vary moderately.
- **103 direct narrative paragraphs**: 31 sections have 2, 11 have 3, and 2 have 4 paragraphs. Average ~172 direct words/section.
- Approximately **15,891 whole-page words** via rendered text extraction (features and review included; convention differs from Claude's estimate).
- **29 `.feature-box` blocks**, not exactly the 28 claimed; many very brief (e.g., the 1377 Military Case Study ~38 total text words, the 1446 Source Study ~54). A feature count alone does not establish adequate academic apparatus.
- **25 key-term cards**, full review subsection anchors, introductory apparatus and reflection present.

| Division | Direct narrative words | Suggested full-depth band |
|---|---:|---:|
| I — Evidence and Cham geography | 1,326 | 2,500–3,000 |
| II — Early encounters, 980–1104 | 1,320 | 3,000–3,500 |
| III — Twelfth-century relations | 754 | 2,300–2,800 |
| IV — Yuan era and marriage diplomacy | 966 | 2,800–3,400 |
| V — Fourteenth-century Cham resurgence | 907 | 4,000–5,000 |
| VI — Fifteenth century and 1471 | 1,095 | 4,200–5,200 |
| VII — Society, commerce, culture | 722 | 3,000–3,800 |
| VIII — Cham continuity | 481 | 2,200–3,200 |
| **Total** | **7,571** | **24,000–29,900** |

These bands are recommended allocation estimates and are adjustable according to available evidence, not independent quotas.

## Historical and documentary review

1. **§45.10 — Chế Củ and Rudravarman III:** Sentence claiming 'Vietnamese chronicles identify Chế Củ with Rudravarman III' is incorrectly attributing a modern scholarly correlation to the chronicles themselves. Rewrite: 'Vietnamese chronicles call the captured ruler Chế Củ. Later historians have commonly identified him with Rudravarman III; Michael Vickery contests the identification and the associated epigraphic reconstruction.' Discuss what Vickery's C.30A1 inscription from Nha Trang and relevant Mỹ Sơn inscriptions actually say. Source: Michael Vickery, *Champa Revised* (https://cdn.angkordatabase.asia/libs/docs/vickery2005champa.pdf). Do not claim the territorial outcome is documentary certainty beyond every interpretative dispute; distinguish Vietnamese annalistic claims from later administrative evidence.
2. **§45.34 and f-source-1470 — Lê Thánh Tông's edict:** Columbia University's Asia for Educators provides the edict, explicitly attributed to John K. Whitmore's 2008 translation. The manuscript's paraphrase is not false but critically incomplete. It leaves out the edict's strongly dehumanizing portrayal of Cham opponents, appeal to ancestral spirits, asserted consensus, and mobilization figures that need critical scrutiny. Rebuild the window using the real source, carefully and with full bibliographic attribution. Source: https://afe.easia.columbia.edu/main_pop/ps/ps_vietnam-champa.htm. The emperor's claims are rhetoric, NOT facts independently verified by the edict.
3. **§45.41 and f-source-diplomacy — Cham agency after 1471:** Geoffrey Wade's *The Ming shi Account of Champa* (NUS ARI Working Paper 3, 2003) specifically documents post-1471 Cham claimants' attempts to secure Ming recognition and describes their itineraries. The generic source window should feature identifiable episodes and dates from the translated text rather than merely stating that missions continued. Source: https://ari.nus.edu.sg/publications/wps-03-the-ming-shi-account-of-champa/.
4. **§45.34–35 — 1471:** Whitmore's *The Two Great Campaigns of the Hongduc Era* (2004) supports an operational reading of the conquest; reconstruct aims, terrain and movements instead of summarizing in ~520 direct words. Source: https://doi.org/10.5367/000000004773487965. Retain warnings that annalistic casualty/captive figures are disputed. Distinguish capture of Vijaya from the continued history of Panduranga and Cham communities.
5. **§45.21 — Huyền Trân and Chế Mân:** The funerary-sacrifice story should remain explicitly attributed to *later Vietnamese narratives*, not presented as a verified general Cham custom. Verify details about the visit, promise, betrothal, reported rescue, and conflicting Cham/Vietnamese interpretations against editions and scholarship. Separate the event of the marriage from embellished later literary traditions.
6. **§45.11, 45.23, 45.24 — 1104; 1312–1318:** The overall conventional chronology appears consistent with standard histories, but exact royal identifications, frontier control, motives and 1318 flight to Java require source-specific checks. Avoid interpreting later chronicle assertion as contemporary proof. The 1312 capture and subsequent 1318 campaign are distinct.
7. **§45.26–29 — Chế Bồng Nga, 1371–1390:** The narrative is particularly compressed. Develop royal politics, maritime operational geography, Cham leadership, alternate outcomes and campaigns, the 1377 defeat and aftermath, the late-1380s offensives, and the 1390 reversal with source-specific attribution.
8. **§45.2–3 and §45.36–42 — Political and social geography:** Explain overlap and limitations of the five-region model. Increase Cham-centered treatment of local religious institutions, ports, land use, displaced populations, multilingual networks and the social effects of conquest rather than simply repeating court history.
9. **Feature boxes:** Convert checklist-like features into worked primary-source comparisons with named editions, proper provenance and interpretative questions. Especially f-case-1377, f-source-1446, f-source-1471, f-trade, f-map-1360, f-source-1069. The number of features is sufficient; quality/depth is not.

## HTML regression, Chromium/Playwright

Tested with headless Chromium after loading the submitted HTML via `set_content`, on viewport widths **1440, 900, 390, 320**. All widths had **no document-wide horizontal overflow**, **no JavaScript page errors**, and **all ten tables had `.table-wrap` containers**. Ten mobile tables scroll within wrappers; 91 sidebar anchor links resolve and all 101 IDs are unique. `IntersectionObserver` sidebar code remains functional, though not byte-for-byte identical to the locked model (comment omitted). The core CSS matches the model before the custom chapter-specific rules; chapter-only banners/wrappers differ as intended. No redesign of HTML shell warranted.

## Consolidated production instruction

In one coordinated revision, retain existing **44 IDs**, **8 divisions**, **29 feature slots**, complete apparatus, model CSS/JS and sidebar. Expand every historical section substantively; emphasize the 1069 and 1104 frontier, twelfth-century diplomatic/Angkor contexts, 1301–1307 marriage and territories, Chế Bồng Nga's campaigns, Vijaya 1446/1471, and Cham continuity. Aim for approximately **24,000–30,000 direct historical prose words** but let verified historical density dictate distribution and stop when substance is complete. Incorporate verified named-source evidence and accurate context, without fabricated quotations or invented chronologies. Do not submit division-at-a-time micro-passes. After Claude submits the complete expanded HTML, perform one final consolidated factual and browser audit and lock only if publication-critical defects are absent.

**Final status: not approved, not locked.**
