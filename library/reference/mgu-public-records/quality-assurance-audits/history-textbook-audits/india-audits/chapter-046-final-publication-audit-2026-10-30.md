# MGU Indian History — Chapter 46 Final Publication Audit

**Date:** October 30, 2026 (Pacific)  
**Chapter:** 46 — *The Bahmani Sultanate and the Deccan Sultanates*  
**Volume:** II, Early Medieval and Sultanate South Asia  
**Part:** IX, Regional Kingdoms, Devotional Worlds, and the Indian Ocean  
**Disposition:** **APPROVED FOR PUBLICATION — LOCKED** following a consolidated expansion and focused independent repairs.

## Production provenance

- User-supplied expanded Claude HTML: `/mnt/data/Pasted text(20261030-084611).txt`.
- Prior independently corrected baseline: `/mnt/data/chapter-046-the-bahmani-sultanate-and-the-deccan-sultanates-audit-corrected.html`.
- Publication master: `/mnt/data/chapter-046-the-bahmani-sultanate-and-the-deccan-sultanates.html`.
- Preserved the 37-section approved plan, all 15 teaching features, and the original CSS and JavaScript unchanged from the prior audited baseline. The actual original Chapter 2 model was not available for an additional independent byte-level comparison; this audit verifies preservation relative to the audited baseline.

## Structural and depth checks

| Test | Result |
|---|---|
| Numbered sections | 37 consecutive sections (§46.1–§46.37), no missing section |
| Historical sections | 36; §46.37 is Review and Historical Synthesis |
| Division structure | Six divisions; 6 + 6 + 9 + 6 + 6 + 4 sections |
| Direct historical narrative | 16,279 words (whitespace token count for direct `<p>` elements in §§46.1–46.36; excludes feature boxes and back matter) |
| Growth from audit-corrected baseline | +3,891 direct narrative words (baseline 12,388) |
| Teaching feature boxes | 15, exactly retained; including three paraphrased source windows, two map studies, two debates and comparative institutions |
| Unique IDs | 71, no duplicate |
| Internal anchor links | 71/71 resolve |
| Chronology Preview | Correct chronological order, 14 body rows and one header row |
| Original CSS and inline JavaScript | Byte-level identical script/style content relative to audit-corrected baseline; Node `--check` passes |
| HTML structure | Correct `<thead>` / `<tbody>` for Chronology Preview; no missing sections or broken anchors |

### Chromium / Playwright proof

Headless Chromium (`/usr/bin/chromium`) loaded the final HTML using `page.set_content` at **1440, 900, 390 and 320 px**. Each viewport passed: 37 sections visible in the DOM, 71 unique IDs, no missing links, 15 feature boxes, no JavaScript runtime errors, and no page-level horizontal overflow. On desktop, the clickable final-section sidebar anchor navigated to `#s46-37`; on smaller viewports the sidebar hides according to model CSS. The chronology and comparative tables scroll within their containers on mobile, not across the page. Evidence screenshots are available locally as `ch46-final-proof-1440.png` and `ch46-final-proof-320.png`.

## Historical verification of Claude's eight flagged new claims

1. **Shah Tahir at Ahmadnagar:** Confirmed. He had a Nizari Ismaili background and was instrumental in Burhan Nizam Shah I's state adoption of Twelver Shi'ism in 1537. Repaired a grammatical ambiguity in §46.16. *Encyclopaedia Iranica*, “Šāh Ṭāher Ḥosayni Dakkani”: https://www.iranicaonline.org/articles/shah-taher-hosayni-dakkani/
2. **Mir Mumin Astarabadi and Hyderabad:** Confirmed as the minister closely associated with planning Hyderabad/Charminar, although particular features are sometimes credited by later accounts; Claude retains appropriate uncertainty. Government of Telangana Charminar profile: https://hyderabad.telangana.gov.in/tourist-place/charminar/ ; reporting on Mir Mumin's letters: https://timesofindia.indiatimes.com/city/hyderabad/hyderabad-blueprint-drafted-in-the-name-of-haidar/articleshow/93417264.cms
3. **Dilawar Khan and Chand Bibi:** Confirmed the regency during Ibrahim Adil Shah II's minority and Chand Bibi's role in the early court upheavals. Differing source chronologies place Dilawar's effective regency approximately 1583–1590/91. *Modern Asian Studies*: https://www.cambridge.org/core/journals/modern-asian-studies/article/political-notes-of-nauras-emergence-of-an-aesthetically-embodied-kingship-practice-in-adil-shahi-bijapur/8AF4BBFB8AACF6C07C0CC2D6251D1352 ; Bombay Gazetteer: https://gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/Gazetteer%20of%20Bombay%20Presidency/history_of_the_bombay_karnatak/ibrahim_2_ad_1580.pdf
4. **Fath Khan and Daulatabad:** Confirmed surrender to the Mughal army in June **1633**, distinct from the final suppression of Shahaji's nominal Nizam Shahi revival by **1636**. Metropolitan Museum Deccan catalog: https://resources.metmuseum.org/resources/metpublications/pdf/Sultans_of_Deccan_India_1500_1700.pdf ; primary-source-based history: https://library.bjp.org/jspui/bitstream/123456789/681/1/History-Of-Aurangzib-Vol-%201%262.pdf
5. **Abdullah Khan Pani at Golconda:** Reported by historical narratives as involved in opening the gate during the 1687 fall; exact details depend on attributed chronicles, so the final chapter appropriately presents the story as attributed, not incontrovertibly established. J. F. Richards, “The Hyderabad Karnatik, 1687–1707”: https://www.cambridge.org/core/journals/modern-asian-studies/article/hyderabad-karnatik-16871707/4DA7638D91EFA10E9CCA0E1163C304AB ; Jadunath Sarkar, *History of Aurangzib*, Vol. IV: https://library.bjp.org/jspui/bitstream/123456789/683/1/History-Of-Aurangzib-Vol-4.pdf
6. **Rafi of Qazvin and the Gulbarga Jami Masjid:** Confirmed by an inscription noted in architectural studies, rather than being solely a later unsubstantiated attribution. Corrected §46.29. *Encyclopaedia Iranica*, “Gulbarga”: https://www.iranicaonline.org/articles/gulbarga/
7. **Bhatvadi, 1624:** Date verified, but Claude reversed the **belligerent coalition**. Malik Ambar's army defeated a **combined Mughal–Bijapur force**, not a combined Deccan-sultanate army defeating the Mughals. Corrected §46.17. Maharashtra State Gazetteer: https://gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/History%20Part/History_II/chapter_9.pdf ; Pushkar Sohoni, “Flushing out the Enemy: Revisiting the battle of Bhatavadi”: https://www.researchgate.net/publication/320097436_Flushing_out_the_Enemy_Revisiting_the_battle_of_Bhatavadi
8. **Zuhuri and Mulla Wajhi:** Verified. Zuhuri served Ibrahim Adil Shah II, and Mulla Wajhi's *Sabras* is generally dated **1635**. *Encyclopaedia of Islam*, Zuhuri entry (indexed): https://isamveri.org/pdfdkm/23/DKM230503.pdf ; Christina Oesterheld, “Mulla Vajhi's Sabras” (Heidelberg): https://uni-heidelberg.academia.edu/Departments/Modern_South_Asian_Languages_and_Literatures/Documents

## Additional publication corrections

- **1656 and 1657 Mughal operations:** §46.34 and §46.35 now distinguish Aurangzeb's **1656 Golconda campaign** from the **1657 Bijapur campaign**, including the capture of Bidar and Kalyani. The source draft incorrectly dated the capture of Bidar to 1656 in §46.35. Maharashtra State Gazetteer chronology: https://www.gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/History%20Part/History_II/Chrono.pdf
- **Mecca Masjid foundation:** The phrase “begun in 1617” is rendered as **begun in the 1610s, dated either 1614 or 1617** in the scholarly/public-heritage accounts. Telangana Tourism dates it to 1614: https://tourism.telangana.gov.in/attractions/mecca-masjid ; other documentation dates 1617: https://teluguhistory.org/en/monuments/mecca-masjid/
- **Chronology Preview ordering:** Previously appended rows for **c. 1542–43** (Ali Barid) and **1619** (Bidar annexed by Bijapur) have been moved to chronological position without losing any events; original `<thead>` and `<tbody>` semantics are retained and tested.
- **1565 Talikota chronology:** Clarified that defeat devastated the Vijayanagara capital but did not immediately end Aravidu authority elsewhere (consistent with locked Chapter 45).
- **Opening:** Clarified that **some**, not all, of the five Bahmani successor sultanates survived until the Mughal conquests of 1686–87.
- **Source windows:** Verbatim feature content unchanged from the audited baseline; source excerpts remain explicitly labeled paraphrases.

## Independence, scope and editorial verdict

The final chapter explains the Bahmani founding and political organization, Deccani/Afaqi elite networks, Mahmud Gawan's career and reforms, the dissolution of the Bahmani state, each of the five successor sultanates, diplomacy and warfare, administration and commerce, religious life, urban architecture and arts, and the last seventeenth-century Mughal conquests. The Mahmud Gawan source discussion distinguishes letters from administrative records, and the revenue passages appropriately acknowledge scarce primary financial documentation. Chapter boundaries with Vijayanagara, regional sultanates, broader devotional movements, Portuguese maritime history, and the Mughal/Maratha histories remain intact.

All high-impact factual issues found in this consolidated round were repaired directly, with no change to chapter architecture or narrative depth. A word count is a depth diagnostic, not a reason to expand further; the chapter has sufficient breadth and explanatory material.

**Final decision: APPROVED FOR PUBLICATION — LOCKED.** Reopen only for a well-supported material factual or series-wide editorial correction, not routine word-count expansion or micro-passes.
