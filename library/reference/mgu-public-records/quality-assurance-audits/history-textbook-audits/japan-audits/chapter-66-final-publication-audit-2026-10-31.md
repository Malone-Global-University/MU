# MGU Japanese History Chapter 66 — Final Publication Audit

**Status: APPROVED FOR PUBLICATION — LOCKED.**  
**Audit date:** 31 October 2026 (Pacific).  
**Title:** *Japan and the First World War*  
**Series:** *Japanese History: From Jōmon Japan to the Twenty-First Century*, Part IX — Constitution, Industry, and Empire.  
**Governing documents:** `Japanese Chapter outline(10).txt`, `Japanese Master instructions for Claude(10).txt`, and the approved Chapter 59 model HTML.  
**Input:** `/mnt/data/Pasted text(20261031-205753).txt`.  
**Publication-final:** `/mnt/data/chapter-66-japan-and-the-first-world-war.html`.

## 1. Scope and architectural conformity

- 37 consecutive sections §§66.1–66.37 in seven planned divisions. Sections §§66.1–66.36 are historical prose; §66.37 is the chapter checkpoint.
- Divisions: I outbreak of war (5); II campaigns (5); III Twenty-One Demands/China (6); IV economy (5); V government and society (5); VI Russia and Siberia (4); VII Paris and League (7, including checkpoint).
- All required front apparatus, learning objectives, guiding questions, context, chronology, people and places, vocabulary, summary, key terms, multiple review sets, research project, writing and reflection present.
- Direct historical narrative across §§66.1–66.36: **18,728 words**, counted from main-section direct `<p>` elements, excluding feature boxes, tables, chronology, introductions, review, and headings. Draft pre-proof count was approximately 18,678. This is above the suggested 12–15k diagnostic, without padding requiring removal. Range of main-section prose: 399–708 words.
- 22 integrated feature boxes: causal 1, continuity 1, debate 2, everyday 1, map 3, perspectives 2, source 6, timeline 4, vocab 2; 6 source windows; six HTML tables (chronology and integrated comparisons).
- Chapter 68 Rice Riots narrative kept as a causal and political bridge in §66.26; Chapter 67 party government, Chapter 69 reform movements, Chapter 73 later financial crises remain distinct. Bounded references to post-1919 events are clearly labeled.

## 2. Historical and factual proof — high-risk checks

**Verified and retained, with documentary basis:**

- The Anglo-Japanese Alliance framework and Japan's August 1914 ultimatum and declaration; Qingdao campaign and Pacific occupation; Mediterranean Second Special Squadron, including its torpedoed destroyer *Sakaki*. In the revised casualty note, distinct scholarly totals are expressly attributed rather than falsely harmonized.
- Five groups of the 1915 Twenty-One Demands, differences between original and revised demands and final May agreements; financial leverage through Nishihara Loans; Chinese objections and May Fourth Movement.
- Merchandise exports approximately ¥591m in 1914 and ¥1,962m in 1918, with 1917 exports approximately ¥1,602m and imports approximately ¥1,035m, supported by contemporary Federal Reserve Board tabulation. Manuscript distinguishes nominal figures from real output and merchandise balance from total payments balance.
- January 1918 rice around ¥15/koku with summer escalation above ¥50/koku; section restricts riots to the appropriate historical transition.
- Katō Takaaki's 1917 refusal to participate in Terauchi's foreign-policy advisory committee verified against Peter Lowe's *Alliance in Decline*, ch. on 1917 foreign policy.
- White Rainbow (*hakkō*) incident of 1918 corroborated by Hosei University Ōhara Institute, NDL Reference Collaborative Database, and academic press histories.
- Yanagita Kunio's membership on the League's Permanent Mandates Commission from 1921, corroborated by Japanese-studies scholarship; Nitobe Inazō's League role retained.
- Chinese support for Japan's 11 April 1919 racial-equality amendment verified from scholarship and contemporary conference records, despite the separate Shandong dispute.
- Russian village reprisals in 1919 during the Siberian intervention verified in recent scholarship; the manuscript identifies Ivanovka but avoids presenting contested death estimates as settled.

**Publication corrections applied to the uploaded draft:**

1. **§66.35:** Replaced “eleven of the sixteen voting” with **eleven of seventeen commission members present supported the amendment**; removed the misleading claim of a formally recorded opposing vote tally. Chinese affirmative support remains documented. See Cambridge scholarship on the Commission's roll and U.S. published conference records.
2. **§66.10 + campaign table:** Clarified that published *Sakaki* loss figures vary **59–68**, and that the Malta naval memorial commemorates **68 squadron wartime dead**. Different counting categories must not be conflated. Noriko Sato's *Journal of Maltese History* article confirms the 68 commemorated deaths, while other naval scholarship supplies the 59 figure.
3. **§66.7:** Distinguished fatalities in the hundreds from the much larger total Japanese killed and wounded at Qingdao; eliminated wording implying that all battle casualties numbered only hundreds.
4. **§66.30:** Made civilian reprisals concrete with the March 1919 Ivanovka case following fighting near Yufta, while explicitly qualifying disputed responsibility and death totals.
5. **§66.20 Primary Source Window 3:** Replaced a secondhand 1918 New Zealand newspaper report with the contemporary **Federal Reserve Board, “Banking and Economic Conditions in Japan, 1914–1919,” *Federal Reserve Bulletin*, August 1919, pp. 731–734**. The window provides sourced, clearly paraphrased nominal yen trade figures, provenance, limitations, and document-analysis questions. The report is a contemporary official U.S. statistical publication using Japanese commercial/financial returns, **not** falsely presented as the original Japanese customs ledger.
6. **HTML mobile proof:** Added six accessible horizontal table scroll regions and scoped CSS after the original approved stylesheet. All core model rules and JavaScript remain byte-for-byte identical.

**Scope of verification:** Selected higher-risk factual assertions were independently checked against archives and scholarship. It is not represented as a line-by-line source confirmation of all 18.7k historical words. No remaining publication-critical contradiction was identified in the sampled evidence and the targeted proof.

## 3. HTML and browser audit

| Check | Final result |
|---|---|
| HTML unique IDs | 78 / 78 |
| Internal anchor links | 78 / 78 resolve |
| `<section>` tags | 54 opening / 54 closing |
| `<div>` tags | 121 opening / 121 closing |
| Feature boxes | 22 preserved |
| Tables | 6 keyboard-accessible overflow regions |
| CSS model | Original 13,506 characters preserved as exact prefix, 517 characters chapter-only responsive CSS appended |
| Model JavaScript | Exact 577-character original preserved; Node.js `--check` passes |
| Chromium 1440 × 900 | No JavaScript errors; no page overflow |
| Chromium 900 × 900 | No JavaScript errors; no page overflow |
| Chromium 390 × 900 | No JavaScript errors; no page overflow; tables scroll internally |
| Chromium 320 × 900 | No JavaScript errors; no page overflow; tables scroll internally |

Chromium was loaded via Playwright `page.set_content` because the runtime blocks `file://` navigation. This accurately exercises the inline model CSS and JS and responsive page layout; it does not test future hosting paths, production network configuration or external files.

## 4. Evidence and archival references

- Federal Reserve Board, “Banking and Economic Conditions in Japan, 1914–1919,” *Federal Reserve Bulletin* (August 1919), pp. 731–734. https://fraser.stlouisfed.org/files/docs/publications/FRB/1910s/frb_081919.pdf
- Cambridge University Press, *Buried in the Red Dirt*, introduction (record of 11/17 support including China's vote). https://www.cambridge.org/core/books/buried-in-the-red-dirt/introduction/49BBD31B75F125F07B2B3444CB3811A3
- United States, *Foreign Relations*, Paris Peace Conference proceedings, including Japanese racial-equality statements. https://history.state.gov/historicaldocuments/frus1919Parisv03/d7
- Noriko Sato, “Paying a Visit to the Memorials of the Japanese War Dead in Malta,” *Journal of Maltese History* 5(2) (2018), 76–97. https://www.um.edu.mt/library/oar/handle/123456789/47793
- University of Hawai‘i Press, Thomas W. Burkman, *Japan and the League of Nations*, on Yanagita Kunio. Scholarship also summarized in https://nichibun.repo.nii.ac.jp/record/2000102/files/jare_038_197.pdf
- Hosei University Ōhara Institute, White Rainbow Incident (1918), https://oisr-org.ws.hosei.ac.jp/research/dglb/explanation/exp_detail/?exp_id=4-012-9000576
- National Diet Library reference record identifying original 1918 *Osaka Asahi* issues, https://crd.ndl.go.jp/reference/entry/index.php?id=1000189450&page=ref_view
- *Japan Review* 38 (2023), Siberian Intervention and Ivanovka, https://research-portal.uea.ac.uk/files/212802269/From_the_Ground_Up_Revised.pdf
- *Alliance in Decline: A Study of Anglo-Japanese Relations, 1908–23*, discussion of Katō and Terauchi's advisory committee, scholarly book.
- NZ History, “Empire of Japan” in WWI, Japanese Pacific and Mediterranean operations, https://nzhistory.govt.nz/war/japan-facts

## 5. Publication disposition and integrity

**APPROVED FOR PUBLICATION — LOCKED (31 October 2026, Pacific).** No broad expansion or restructuring needed. Publish only the corrected HTML supplied with this audit; preserve this audit alongside it.

- Final HTML bytes: **282,294 UTF-8 LF**.
- Final HTML SHA-256: **`a8909b4a85ec27f6dcf7f19d6fbfcfd2987818e758f9b0236c8f5a11a1afb425`**.
- Original uploaded HTML bytes: **282,001**.
- Original input SHA-256: **`de10c91f1fc0692980de00506157986f2ba66e253a3a59f6d5124c295f6b3428`**.
