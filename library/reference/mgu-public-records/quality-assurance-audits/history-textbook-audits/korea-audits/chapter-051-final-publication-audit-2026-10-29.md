# MGU Korean History — Chapter 51 Final Publication Audit

**Audit date:** October 29, 2026 (America/Los_Angeles) / October 30, 2026 UTC  
**Result:** **APPROVED FOR PUBLICATION — LOCKED**, following narrow source-verification corrections and a mobile overflow repair.  
**Chapter:** 51, *The Donghak Peasant Revolution and the Sino-Japanese War*  
**Location:** Volume III, Part IX  
**Authoritative assignment:** The Donghak Peasant Revolution, agrarian grievances, mobilization, Chinese and Japanese interventions, 1894–1895 war, Qing predominance in Korea.  
**Scope boundary:** Gabo reforms and Queen Min's assassination reserved chiefly for Chapter 52; Korean Empire for Chapter 53; Russo-Japanese War and annexation for Chapter 54.

## Input and final output

- Source submitted: `Pasted text(20261030-001212).txt` (Claude expanded HTML; 173,835 bytes).
- Final publication HTML: `chapter-051-the-donghak-peasant-revolution-and-the-sino-japanese-war.html`.
- Final bytes: **176,161**, UTF-8 LF.
- Final SHA-256: `8b7e2a85926746b6f03dca0f89860d09392d8b3b423cb6f3a3cdfa70341f169e`.
- Modifications: 21 narrowly scoped replacement operations, consisting of historical clarification, front/back matter alignment, and one mobile CSS fix. No sections or features removed.

## Coverage and instructional architecture

| Test | Result |
|---|---|
| Authoritative Chapter 51 title, number, volume, part and focus | Pass |
| Divisions | 6, ordered from agrarian revolt through the international settlement |
| Numbered sections | 35 continuous sections, §§51.1–51.35 (34 historical + review checkpoint) |
| Main historical prose | About **13,498 words**, counting direct paragraphs of numbered sections (including Evidence paragraphs, excluding instructional boxes and standalone front/back matter) |
| Chapter Opening | 6 paragraphs |
| Learning Objectives | 12 |
| Guiding Historical Questions | 9 |
| Chronology Preview | 14 events after correction |
| Core Vocabulary Preview | 19 terms |
| In-chapter textbook feature boxes | 17: 5 primary-source, 3 vocabulary, 2 maps, 2 historical debates, and 1 each timeline, cause/effect, multiple perspectives, continuity/change, everyday life |
| Chapter Summary | 9 paragraphs, updated to reflect expanded evidence |
| Review Key Terms | 26 |
| Review Major People & Places | 12 entries |
| Other review apparatus | Chronology, map and source questions, review/short-answer/discussion prompts, writing exercises, research assignment and reflection present |

The main subject matter is taught in substantive prose, not simply as a chronology. Topics surrounding Chapter 50 are summarized rather than retold, and the Gabo reforms are introduced without taking over Chapter 52's treatment.

## Historical findings and applied corrections

1. **§51.10, Hong Gye-hun's route and field command:** Korea's National Institute of Korean History documents his roughly 800 troops traveling from Incheon by way of Gunsan to Jeonju in lunar April 1894. Research on Hwangnyongchon identifies Yi Hak-seung as a commander in Hong's detachment. Rephrased to distinguish overall command from the field engagement.
2. **§§51.10–51.11, entry into Jeonju:** A later testimony describes peasant insurgents blending with a market crowd; contemporary and later accounts differ on attacks at city gates and when the market operated. Replaced the unqualified market-day infiltration explanation and unqualified claim of little fighting with a comparative source note. NIHK places capture on Gregorian May 31, 1894.
3. **§51.17, dispatch timing:** Japan's cabinet approved dispatch on **June 2**, before the formal Korean request to Qing China on **June 3**; a smaller Japanese contingent reached Seoul on June 10 and an approximately 8,000-strong brigade began landing on June 12. Corrected the suggestion that Japan first decided after Qing notification.
4. **§51.18, ultimatum:** JACAR/British Library documents record Japanese military-telegraph and barracks demands on **July 19**, further withdrawal and treaty demands on **July 20**, and a **July 22** deadline; Korean ministers declined. Inserted precise sequence.
5. **§51.19, palace and source criticism:** Japanese archival account describes fighting lasting several hours on July 23, not merely a brief exchange. National Institute of Korean History's own guidance confirms Gojong's *sillok* was compiled by the colonial Governor-General between **1927 and 1932**, not a Joseon-era court annal.
6. **§51.20, Kowshing:** The British-registered transport was sunk July 25 before the formal declaration of war. Survivor testimony and archival treatment support distinguishing some European crew rescued by the Japanese *Naniwa* from Chinese survivors rescued by other vessels; the disputed sequence and loss estimates now have appropriately qualified language.
7. **§51.21, Pyongyang force estimates:** JACAR's historical exhibition gives about **13,000 Qing defenders according to Japanese military estimates**. The draft's broad low-tens-of-thousands estimate was replaced with an explicit sourced range-limited statement and competing-accounts caution.
8. **§51.25, coalition chronology:** Recent peer-reviewed scholarship contests simplistic accounts of a single first northern–southern Donghak coalition meeting at Nonsan and identifies coordinated fighting around Hyopo. The passage now acknowledges the disputed operational sequence.
9. **§51.26, Ugeumchi:** Verified lunar 11/9 = **Gregorian December 5, 1894**, against the National Institute of Korean History's 1894 event chronology. This important earlier audit correction remains intact.
10. **§51.29, Hiroshima:** Japan's Imperial General Headquarters transferred to Hiroshima on **September 13, 1894**, and the wartime Diet also met there; supported by the Japanese archival exhibition and Hiroshima City municipal archives. No passage correction required.
11. **§51.31, Weihaiwei:** Japan's Second Army began landing in Rongcheng Bay on **January 20, 1895**, captured coastal fortifications by early February, then conducted combined bombardment and naval attacks. The flagship *Dingyuan* was damaged and scuttled by its own crew rather than simply sunk by torpedoes. Admiral Ding authorized surrender terms dated **February 12**, died by suicide, and final surrender was signed **February 17**. All chronology and overly broad comparison claims corrected.
12. **§51.32, telegraph lines:** NIHK's historical synthesis documents cuts to Japanese military telegraph lines and resistance to telegraph workers, particularly from September 1894, including Donghak and local opponents; revised draft avoids implying all attacks can be confidently attributed to unaffiliated villagers.
13. **Chapter Summary and Chronology Preview:** Added the previously missing date-specific diplomatic and Weihaiwei developments and aligned the summary with amended scholarship and operational chronology.

## Technical validation

- HTML structure: **69** opening and closing `<section>` tags, **103** opening and closing `<div>` tags, **2** opening and closing `<table>` tags, all numerically balanced.
- Internal navigation: **71 unique IDs**, **71 internal anchor links**, **zero** missing target anchors or duplicate IDs.
- JavaScript: sidebar scroll-highlighting script unchanged; `node --check` completed with exit code **0**.
- Chromium/Playwright rendering through `set_content` at viewport widths **1440, 900, 600, 390, and 320 pixels**: **zero page JavaScript errors**, and document horizontal scroll width equals viewport width in every case after repair.
- Responsive change: added a single `@media (max-width: 600px)` CSS rule to make `.chron-table` a contained horizontally scrollable table without making the entire document scroll sideways.
- Source shell: existing sidebar, heading layout, feature style classes, section IDs, review structure, CSS tokens and scroll script retained. **No separately supplied approved model chapter was available for byte-for-byte comparison.** The verdict is based on structural and functional testing of the submitted HTML and preservation of its preexisting shell, not independent model-file identity verification.

## Principal external verification anchors

- National Institute of Korean History (NIHK), Hong Gye-hun troops and the Donghak contemporaneous chronology: https://db.history.go.kr/id/prd_026r_0020
- Academy of Korean Studies, Hwangnyongchon battle: https://encykorea.aks.ac.kr/Article/E0065135
- NIHK, Jeonju capture (1894 lunar 4/27 = Gregorian May 31): https://db.history.go.kr/modern/level.do?levelId=pry_1894_04_27_0010
- NIHK, historical market-day testimony (needs source criticism): https://db.history.go.kr/modern/level.do?levelId=prw_070
- JACAR / British Library, July diplomacy and palace entry: https://jacar.go.jp/english/exhibition/jacarbl-fsjwar-e/about/p002.html
- JACAR / British Library, Pyongyang and the Yalu: https://jacar.go.jp/english/exhibition/jacarbl-fsjwar-e/about/p003.html
- JACAR / British Library, landing at Rongcheng and Weihaiwei surrender: https://www.jacar.go.jp/english/exhibition/jacarbl-fsjwar-e/smart/about/p004.html
- JACAR / British Library, Imperial General Headquarters' relocation: https://jacar.go.jp/english/exhibition/jacarbl-fsjwar-e/glossary/g003.html
- Hiroshima City Archives, wartime imperial headquarters and Diet: https://www.city.hiroshima.lg.jp/tourism-culture/history/1003068/1027532/1027533/1008359.html
- NIHK, Gongju/Ugeumchi 11/9 (December 5, 1894) chronology: https://db.history.go.kr/modern/level.do?levelId=pry_1894_11_09_0010
- NIHK, wartime destruction of telegraph lines: https://contents.history.go.kr/mobile/nh/view.do?levelId=nh_041_0030_0030_0030
- Cambridge University Press, *The Sinking of the S.S. Kowshing* (survivor numbers and archival controversy): https://www.cambridge.org/core/journals/modern-asian-studies/article/abs/sinking-of-the-ss-kowshing-international-law-diplomacy-and-the-sinojapanese-war1/4FDF502EDB4CE6AB9A0619FBB9CE49C0
- National Institute of Korean History, Gojong/Sunjong annals provenance: https://sillok.history.go.kr/intro/english.do
- Scholarly article on north/south peasant coalition and Gongju operations: https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002630600

## Publication decision

**APPROVED FOR PUBLICATION — LOCKED**. The audited final file is the publication copy; no second broad expansion or further micro-pass is recommended on the issues examined. External historical verification was targeted to the flagged claims and additional anomalies, rather than a documentary check of every sentence in the chapter. A matching separately approved HTML model was not attached, so identity with that external model cannot be independently certified.
