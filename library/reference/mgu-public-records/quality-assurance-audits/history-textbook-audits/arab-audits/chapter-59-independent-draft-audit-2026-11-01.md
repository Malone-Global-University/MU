# MGU Arab World History — Chapter 59 Independent Draft Audit

**Reviewed:** 1 November 2026 (Pacific).  
**Chapter:** 59, *Palestine under the British Mandate*, Part X.  
**Input:** `/mnt/data/Pasted text(20261101-084230).txt`, UTF-8 HTML, 179,434 bytes.  
**Input SHA-256:** `b5d2842e389120b350ee49d8f87b98f220748c6653c6c344c18184214a69b4e1`.  
**Disposition:** **NOT APPROVED; ONE COMPREHENSIVE FULL-DEPTH REWRITE/INTEGRATION PASS REQUIRED BEFORE FINAL PUBLICATION AUDIT.**

## 1. Structural and narrative checks

The HTML contains all 47 separately identified historical sections `s59-1` to `s59-47` in nine expected divisions. The approved plan is followed in topic order and generally in chronological boundaries. Direct section narrative was counted from direct child `<p>` paragraphs in those numbered sections, omitting headings, features, introduction and review material. Independent total: **11,431 words**, compared with the planned **21,000–25,000**. All 47 sections are short; **44 have exactly three paragraphs, 2 have two, and 1 has four**. This strongly suggests enforced length-compression rather than depth proportional to the subjects.

| Division | Sections | Direct narrative words | Indicative plan |
|---|---|---:|---:|
| I. Mandate framework | 1–5 | 1,586 | 2,500 |
| II. Palestinian Arab society | 6–11 | 1,566 | 2,900 |
| III. Yishuv institutions | 12–17 | 1,487 | 3,000 |
| IV. Early conflict | 18–22 | 1,181 | 2,300 |
| V. Arab Revolt | 23–29 | **1,535** | **4,300** |
| VI. WWII, Holocaust and White Paper | 30–35 | 1,332 | 2,700 |
| VII. Postwar crisis | 36–41 | 1,271 | 3,200 |
| VIII. Partition | 42–45 | 993 | 2,200 |
| IX. Synthesis | 46–47 | 480 | 900 |
| **Total** | **47** | **11,431** | **24,000** |

**Correction to Claude's progress report:** Division V does **not** contain 2,300 direct words; it contains about 1,535 by the stated direct-section-paragraph counting procedure.

## 2. Features, front/back matter, structure

- 22 instructional feature boxes, including **10 Primary Source Windows**, **3 vocabulary**, **2 historical debates**, **2 text-only map/geography studies**, **1 timeline**, **1 multiple perspectives**, **1 continuity/change**, **1 causal**, **1 everyday-life**.
- Front matter present: opening, objectives, questions, historical context, chronology, people, vocabulary. Back matter present: summary, key terms, people, chronology check, map/source/review/short-answer/discussion questions, writing, research, reflection.
- **96 unique HTML IDs; zero duplicate IDs; 94 in-page links all resolve.** JavaScript present and no page errors in Chromium.
- No actual graphic/map assets are embedded (zero `<img>`, `<svg>`, `<figure>`, or `<canvas>`); map studies describe tasks but do not give students a map or reference maps to inspect. Add maps or stable cited map references and proper demographic/land data exercises.
- Source windows **2, 3, 4, and 5** cite diffuse documentary groups rather than identify a specific dated, locatable underlying text; source window 10 combines the UNSCOP report and a later UNGA resolution, which must be clearly attributed separately. Paraphrase labeling is appropriate; no invented quotes should be introduced.
- Browser tests using Playwright Chromium, `set_content`: **1440px pass (scrollWidth 1440)**; **768px pass**; **390px pass**; **320px fail with scrollWidth 365px and actual viewport 320px**, caused by the chronology table. A tested CSS-only repair of `.chron-table {display:block;overflow-x:auto;max-width:100%}` plus narrow-screen cells resolves overflow at 320px. No JavaScript errors.
- Exact CSS fidelity to the original Chapter 3 model cannot be certified without that model provided independently; present shell resembles the established MGU design.

## 3. Targeted historical accuracy findings

**Publication-critical fixes and clarifications:**

1. **Opening:** Narrative says British rule “ended in a United Nations recommendation of partition on 29 November 1947.” This is historically wrong: the **chapter** stops on 29 November 1947; the **mandate** legally ended at midnight 14/15 May 1948. Correct wording without narrating Chapter 61 events. Primary evidence: https://www.un.org/unispal/document/auto-insert-212055/.
2. **§59.20 (1929 judicial aftermath):** Do not imply that Jewish defendants were executed. Three Arab defendants were executed; Jewish defendants under capital sentence received reprieves. Contemporary report: https://www.jta.org/archive/urphali-only-jew-under-death-sentence-reprieved-gets-10-years-in-prison . The reported **133 Jewish and 116 Arab fatalities** remain a familiar contemporary benchmark, with possible uncertainty.
3. **§59.32 (*Patria*):** It was accidentally sunk by **Haganah sabotage intended to prevent deportation** (not simply an unexplained sinking). The text must give the actor, intention, and unintended fatal outcome, in historically responsible terms. E.g. U.S. government historical case study: https://www.govinfo.gov/content/pkg/GOVPUB-D101-PURL-gpo107883/pdf/GOVPUB-D101-PURL-gpo107883.pdf .
4. **§§59.42–43 (partition population):** The original **UNSCOP majority** estimated ~498,000 Jews plus ~407,000 settled Arabs/others **and approximately 90,000 additional Arab Bedouins** in the proposed Jewish state. The narrative's “500,000 Jews and 400,000 Arabs” omits this group and misleadingly makes a near-parity area sound overwhelmingly Jewish. Meanwhile the final **Resolution 181** adjusted borders, and post-debate estimates differ from UNSCOP. Distinguish plans, dates and sources. UNSCOP: https://www.un.org/unispal/document/auto-insert-179435/ ; later British estimate: https://hansard.parliament.uk/commons/1947-12-19/debates/56e114f0-7a0e-43b4-9ea8-68193ec9816a/UnitedNationsPlan .
5. **§59.45:** A November 30, 1947 attack on buses and subsequent violence are narrated despite the agreed **29 November** cutoff. End at the vote and leave the ensuing conflict to Chapter 61.
6. **§59.31 (1940 Land Transfers Regulations):** Correct direction but over-condensed. Zone A (~63%) generally forbade transfers other than to a Palestinian Arab subject to exceptions; Zone B (~32%) restricted transfers from a Palestinian Arab to non-Arab buyers unless authorized; remaining ~5% unrestricted by these regulations. Avoid generic assertion that all sales to Jews in Zone A were absolutely prohibited. Original text: https://www.palquest.org/en/historictext/23188/land-transfers-regulations-1940 ; US/UN commission summary: https://avalon.law.yale.edu/20th_century/angap04.asp .

**Major factual claims corroborated in spot checks:**
- 1922 census: **757,182 total; 83,794 Jews** (official): https://www.un.org/unispal/document/auto-insert-195974/ .
- 1931 census: **1,035,821 total; 174,610 Jews**: https://aub.edu.lb.libguides.com/c.php?g=342715&p=2893418 .
- 1921 Jaffa violence: **47 Jews and 48 Arabs killed** (Haycraft commission): https://jewishvirtuallibrary.org/jsource/judaica/ejud_0002_0015_0_15343.html .
- 1929 unrest: **133 Jewish and 116 Arab killed** frequently used benchmark (Shaw): https://jewishvirtuallibrary.org/jsource/judaica/ejud_0002_0015_0_15343.html .
- 1939 White Paper: quota **50,000 regular + 25,000 refugee admissions in five years**, contingent on economic absorptive capacity, further immigration contingent on Arab acquiescence: https://avalon.law.yale.edu/20th_century/brwh1939.asp .
- 1936–1939 Arab Revolt: scholarly estimates ~**5,000 Arab dead**, substantially disputed and should remain attributed: https://origins.osu.edu/read/1936-1939-arab-revolt-palestine and https://ismi.emory.edu/documents/Readings/Khalidi%2C%20Rashid%201948.pdf .
- King David Hotel July 1946 **91 deaths**; 41 Arab, 28 British, 17 Jewish, plus others: https://jewishvirtuallibrary.org/bombing-of-the-king-david-hotel .
- UNGA Resolution 181 **33 for, 13 against, 10 abstentions**; keep character as a recommendation and distinction from mandate termination.

These checks are **targeted**, not complete source authentication of every historical assertion. Subsequent full-depth build must undergo comprehensive source verification. Treat historiographical disagreements as such; do not convert contested interpretations into fixed facts.

## 4. Editorial disposition and next single revision

Do **not** request the user to pick one division for serial micro-expansions. Complete one cumulative manuscript revision with fully **rewritten/integrated** sections, restoring each section's proportional depth and documentary specificity. Do not append padding paragraphs to the current short paragraphs. The accepted 47-section architecture and all valuable existing features are worth preserving.

Highest areas of narrative deficiency include **V revolt (1,535 versus 4,300), VII postwar (1,271 vs 3,200), III Yishuv (1,487 vs 3,000), II Palestinian society (1,566 vs 2,900), VI WWII/refugees (1,332 vs 2,700), VIII partition (993 vs 2,200)**, but **all nine divisions must receive proportionate integration in one build**. Narration should be about **21–25k true historical words**, without fixed paragraph quotas; explanatory richness and factual sourcing matter more than a raw target. Restore verifiable exact source records, demographic and land study apparatus, useful maps, correct narrow mobile overflow, then run one consolidated final independent audit. Until then: **NOT APPROVED / NOT LOCKED**.
