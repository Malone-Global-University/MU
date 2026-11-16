# MGU Korean History Chapter 51 — Consolidated Historical and HTML Audit
**Date:** October 29, 2026
**Chapter:** 51, *The Donghak Peasant Revolution and the Sino-Japanese War*
**Status:** STRUCTURE PASS / HISTORICAL CORRECTIONS APPLIED / FULL-DEPTH EXPANSION REQUIRED — NOT LOCKED

## Scope and architecture
- Governing outline: *Korean History: Ancient Kingdoms to a Divided Peninsula*, Vol. III, Part IX, Chapter 51. Purpose: agrarian grievances, Donghak mobilization, peasant armies, government weakness, Qing and Japanese interventions, war, and collapse of Qing predominance.
- Approved plan: 35 numbered sections in six historical divisions (34 history + §51.35 review), with extensive teaching features, first/second revolt distinction, documentary source criticism, and boundary protection for Chapters 46, 50 and 52.
- Manuscript has §§51.1–51.35, six historical division banners plus review banner, 17 instructional feature boxes (five source windows; two map studies; timeline; two debates; perspectives; cause-effect; continuity-change; everyday-life; three vocabulary), and opening/review apparatus.
- Main historical prose (including section headings) ~9,343 words across §§51.1–51.34; target in approved plan is ~11,000–15,000 substantive words (diagnostic, not a padding mandate). This is a substantive underdevelopment, most apparent in §§51.9–51.16, 51.20–51.21, 51.25–51.28, and 51.29–51.34; e.g. §51.31 Weihaiwei only ~176 words (heading included).

## Historical source checks
Verified against authoritative Korean and Japanese archives and treaty text:
- Korean NIKH chronology: Jeonju capture May 31, 1894 Gregorian; Jeonju truce ~June 11; Japanese capture of Gyeongbokgung July 23; outbreak of war July 25 / formal declarations August 1; key Korea battles September 15 and 17.
- Ugeumchi: NIKH documentary chronology says lunar 11/9 = December 5, 1894 Gregorian; Korean historical compilations describe earlier Gongju clashes in lunar 10th month. The original manuscript was ambiguous and misleading in treating the decisive battle as an unqualified November Gregorian event.
- Jeon Bong-jun: execution March 30, 1895 is accurate (NIKH).
- Minami Koshiro (南小四郎): Japanese officer involved in the military suppression is documented in Korean academic research.
- Oh Ji-yeong's *Donghaksa* was published in 1940 and reports a retrospective 12-point reform list; its authenticity as a verbatim 1894 signed program is disputed. The manuscript properly warns against using it as unmediated contemporary text.
- Primary Source Window on 1885 Tianjin Convention: primary provision chiefly imposes reciprocal notification and troop withdrawal, not a free-standing right to intervene in Korea.
- Treaty of Shimonoseki April 17, 1895 Article I is accurately summarized and Korea was not a signatory.
- Casualty totals remain uncertain; the manuscript properly avoids asserting precise unsupported figures.

## Applied narrow historical and editorial corrections
Corrected in audit-corrected draft, preserving every numbered section and feature:
1. §51.2, §51.5 and vocabulary: corrected reversed Donghak hierarchy: *jeop* were the smaller congregation units; *po* grouped multiple *jeop*. NIKH and AKS support this hierarchy.
2. §51.17 and Tianjin primary-source analysis: corrected wording that implied the Convention independently gave both foreign governments the legal right to intervene; noted Japan's invocation of the notification arrangement was not Korean consent.
3. §51.26 and chronology: clarified successive Gongju engagements and the lunar 11/9 to Gregorian December 5 conversion for decisive Ugeumchi battle according to NIKH.
4. Corrected overspecific unsupported year for composition of retrospective *Donghaksa* from 1926 to 1920s, while retaining verified 1940 publication.
5. Renumbered teaching features in reading order: primary-source windows III (Tianjin) and IV (Jeon interrogation), historical debates I (twelve-point program) and II (movement's character); adjusted internal prose references.

## Technical audit
- Original 146,104 bytes, corrected 146,459 bytes.
- 35 consecutively numbered sections; six historical division banners plus review banner.
- 71 unique HTML IDs; 71 internal navigation hrefs, all resolving; no duplicate IDs.
- Balanced HTML section, div, paragraph, list and table tags by counting in original.
- Model CSS core is an exact prefix of approved Korean Chapter 40 CSS; 300 characters appended for division banners.
- One JavaScript block. `node --check` passed. Chromium loaded successfully at 1440, 900, 390, 320 viewport widths with no page JS errors.
- 1440 and 900: no horizontal page overflow. 390 and 320: document scroll width 433px, a shared template responsive-table/layout issue; address in a later global HTML-shell fix.

## Publication recommendation
**Not yet approved for lock**: the manuscript meets its detailed architecture and largely withstands historical accuracy checking but falls materially short of its chapter-specific depth plan. Have Claude perform **one complete, integrated historical expansion** starting from the audit-corrected draft, prioritizing peasant administration, documented chronology and operations of the first and second uprising, 1885/1894 diplomacy, Ugeumchi, war campaigns through Weihaiwei, and Korean civilian experiences. Aim for substantive analysis/evidence, not mechanical per-section padding. Preserve all repairs, sections, teaching boxes, HTML shell and chapter boundaries. Then run a **single consolidated final audit**, and promptly lock if clean. No micro-passes.

## Public research anchors
- National Institute of Korean History, Ugeumchi 1894-11-09 lunar / 1894-12-05 Gregorian: https://db.history.go.kr/modern/level.do?levelId=pry_1894_11_09_0010
- Academy of Korean Studies on *po* (larger groupings): https://encykorea.aks.ac.kr/Article/E0060119
- National Institute on *po* and *jeop*: https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_i402520
- National Institute on the contested reform list: https://contents.history.go.kr/front/nh/print.do?levelId=nh_039_0070_0030&whereStr=
- NIKH Donghak historical chronology: https://db.history.go.kr/diachronic/level.do?levelId=nh_039_0060_0010
- Japan Center for Asian Historical Records first Sino-Japanese War chronology: https://www.jacar.go.jp/english/exhibition/jacarbl-fsjwar-e/main/index.html
- U.S. Department of State Treaty of Shimonoseki text: https://history.state.gov/historicaldocuments/frus1895p1/d203
- NIKH Jeon Bong-jun execution chronology: https://contents.history.go.kr/front/kc/printViewPopup.do?levelId=kc_n404700
- Korean academic study of Minami Koshiro: https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001579950
