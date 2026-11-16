# MGU Russian History — Chapter 64 Consolidated Historical, Editorial and HTML Audit

**Audit date:** October 30, 2026 (Pacific)
**Title:** *Everyday Life, Dissent, Nationalities, and the War in Afghanistan*
**Source upload:** `Pasted text(20261030-083633).txt` (178,575 bytes, SHA-256 `ab73bd42af29d29ba969f6249cbd256e530b4c6226463983c8baafd9080e65d5`)
**Audit-corrected, depth-preserved working manuscript:** `chapter-64-everyday-life-dissent-nationalities-and-the-war-in-afghanistan-audit-corrected-working.html` (177,731 bytes, UTF-8 LF, SHA-256 `7fb15d33b0ea84f6074d20e10488cf8f8ef4f762c6fedd11f9d51a1fad44cd97`). Byte difference primarily reflects normalized line endings and localized replacements; no historical sections or feature boxes were removed.

## Decision

**STRUCTURE APPROVED — PUBLICATION LOCK DEFERRED FOR ONE FULL-DEPTH CONSOLIDATED EXPANSION.** Do not shorten, condense, re-outline, redesign, or impose an arbitrary maximum character/word count. Full chapter content including pedagogy is substantial, but direct narrative is far leaner than estimated, especially in high-density subjects. The 17,000–22,000 historical-narrative planning range was *diagnostic*, not a quota; focus on evidence-supported historical development rather than padding.

## Plan compliance and independent counts

- 34/34 numbered IDs `s64-1` to `s64-34`, contiguous and in order; historical divisions are **5/5/4/7/5/7**, with 64.34 as review.
- All nine original outline subjects have been covered; appropriate boundaries maintained with Ch63 political economy, Ch65 Gorbachev, and Ch66 nationality independence/dissolution. Afghan withdrawal to February 1989 is within approved thematic scope.
- **Direct historical narrative in §§64.1–64.33: ~9,351 words**. Including §64.34 review: ~9,633. Text in main column, including front matter, teaching boxes, repeated heading labels, summary, end exercises: ~18,700 words. Claude's “17–19k” applies to all manuscript text, not the direct historical sections.
- Direct narrative by division I–VI: ~1,759 / 1,288 / 1,084 / 1,926 / 1,404 / 1,890 words. Thus notably condensed coverage in education/family, religion, nationality politics, and Afghanistan.
- 24 instructional `.feature-box` elements: **4 sources, 3 debates, 2 timelines, 2 maps, 2 multiple perspectives, 2 cause-effect, 2 everyday-life, 2 regional contexts, 2 Russia-and-world, 2 vocab, 1 continuity/change**. Four full HTML tables including an instructional comparison table. Claude's reported counts (four debates, three timelines, three perspectives, three regional contexts, one Russia-and-world) do not match DOM. These are minor reporting errors, not missing section anchors.
- The **source plan suggested six primary-source windows**, including a social/public-service source (§64.5) and religious policy/believer petition (§64.11). The actual manuscript contains four, in §§64.17, 64.19, 64.28, and 64.32; the two proposed social/religion sources are not included. Because the list was a recommendation rather than a hard numerical mandate, the deviation alone does not invalidate the structure. But restoring sources could strengthen the two most underdocumented fields.
- HTML: 77 unique element IDs; 75 anchor links, all resolving; 51 opening/closing `<section>` tags; 122 `<div>` pairs, balanced. CSS and JavaScript exactly match locked Chapter 63; Chromium JavaScript clean at tested widths; Node script syntax passes.
- Chromium desktop 1440 and tablet 900: no horizontal document overflow. At 390px a chron-table overflows internally within a clipped feature; at 320px document `scrollWidth=385` (65px excess). Shared table-template maintenance, not chapter-specific manuscript defect. Fix across series after publication, rather than individual ad-hoc CSS changes.

## Seven localized corrections already made — no depth removed

1. §64.3: Precisely attribute 1980 wage figure to *workers and salaried employees*, **168.9 rubles per month**, rather than ambiguous 150–170 average.
2. §64.4 continuity/change feature: Clarify collective-farmer internal passports as phased issuance 1976–1981 under the 1974 regulation.
3. §64.10: Same passport chronology and note that registration (`propiska`) still restricted residence.
4. §64.19: Correct founder status: Shcharansky, Ginzburg, and Grigorenko were *original* Moscow Helsinki Group members, not only later additions.
5. §64.32 primary source metadata: Alexievich's witness material was serialized beginning in 1989; book publication was in 1990 (not generically “published in the late 1980s”).
6. §64.32 source context: Same 1989–1990 documentary-publication distinction.
7. §64.17: Clarify *A Chronicle of Current Events*: dated material through 1982, last circulating issue in 1983, intermittent disruptions; avoid suggestion of fresh 1983-dated issues.

## Independently checked factual questions

- Soviet military deaths in Afghanistan: **~15,000** is an acceptable *rounded official/commander figure*; different official compilations report approximately 14.5–15.1 thousand depending on categories and later accounting. UPI contemporary report: https://www.upi.com/Archives/1989/02/15/Soviet-commander-sets-death-toll-at-15000/5747603522000/ ; see congressional background https://www.everycrsreport.com/files/20190718_R45818_8bd116572ad3d1dc91e77045893a0c9c29bf2bec.html . Do not replace broad Afghan civilian range with unjustifiably precise total.
- Jewish emigration reached approximately **51,300–51,320 in 1979**: https://www.jta.org/archive/jewish-emigration-from-the-soviet-union-sets-new-record-in-1979-new-restrictions-simultaneously-abo . Figures cover emigrants/departures; destinations varied.
- Soviet workers' and employees' average monthly cash wages **168.9 rubles (1980)**: https://istmat.org/node/9304 (reproduced 1987 official statistical yearbook).
- Soviet male life expectancy decline **~66 in the mid-1960s to ~62 around 1980** is supported by period demographic reconstructions; see https://www.jec.senate.gov/reports/98th%20Congress/The%20Political%20Economy%20of%20the%20Soviet%20Union%20%281254%29.pdf and Zhores Medvedev (1985) https://academic.oup.com/gerontologist/article-abstract/25/2/201/573999 . Do not mix Soviet-wide and RSFSR-only figures without scope labels.
- Helsinki Group announcement **May 12, 1976 at Sakharov's Moscow apartment**: https://2001-2009.state.gov/r/pa/prs/ps/2006/66134.htm ; founding members https://www.csce.gov/publications/thematic-survey-documents-moscow-helsinki-group/ .
- The **1980 Moscow Olympics** boycott: around **65 National Olympic Committees did not send athletes**, with different national arrangements. Important exceptions: Britain and France *did* send competitors despite some government support for boycott. See IOC library https://library.olympics.com/cnospa/digitalCollection/DigitalCollectionAttachmentDownloadHandler.ashx?documentId=2891942&parentDocumentId=2891940&skipCopyright=true&skipWatermark=true and Canadian Olympic Committee https://olympic.ca/games/1980-moscow/ . Existing intro's “dozens of national Olympic committees stayed away” is acceptable.
- **Dec 12, 1979** Politburo “Situation in A” document exists and indeed gives a brief authorization rather than full reasons: https://nsarchive.gwu.edu/document/18119-document-6-situation-december-12-1979 .
- **A Chronicle of Current Events**: first issue April 30, 1968; No. 59 was seized and No. 65 never reached circulation; see https://chronicle-of-current-events.com/the-chronicle-in-russian/ . Source-box paraphrase is responsible but generic; ground in a specifically dated authentic issue if expanding.
- **Zinky Boys/Boys in Zinc**: excerpts first serialized October 1989, book Soviet publication 1990; documentary-literary editorial intervention matters: scholarly study https://eprints.nottingham.ac.uk/74139/1/Poetics%20of%20Authenticity%20with%20corrections.pdf . Avoid describing a summary of the collection as if a direct passage from one identified person.
- **1974 passport decree** phased issue of new passports from Jan 1, 1976 to Dec 31, 1981, while residence registration remained: https://base.garant.ru/4001793/ .
- Verified named scholars in their relevant fields: Gregory Grossman (second economy), Alena Ledeneva (*Russia's Economy of Favours*, 1998), Alexei Yurchak (*Everything Was Forever, Until It Was No More*, 2005/2006), Svetlana Alexievich (*Zinky Boys*, serialization 1989/book 1990). For final scholarly appendix, cite exact title, edition/year and page/URL, not scholar names alone.

## Consolidated publication-depth expansion directions (one full pass)

Preserve **all existing material** and build outward by adding specific chronological evidence, empirical comparisons, regional and individual experiences, causal analysis and competing interpretations. The expansion must not be mechanical per-section quota filling. Highest priorities:

1. **Division II, §§64.6–64.10:** Educational access vs republican language policies, social reproduction vs mobility, women's earnings and labor divisions, marriage/fertility, Komsomol vs private careers. Current ~1.3k words across five sections.
2. **Division III, §§64.11–64.14:** More concrete cases of state religious regulation, Orthodox/Catholic/Jewish/Muslim practice, the religious rights movement, unofficial artistic production, distinctions among conformity/nonconformity/dissent. Current ~1.1k words across four sections. Include a verified Soviet policy document or believer's petition as a source study.
3. **Division IV, §§64.15–64.21:** Develop Sinyavsky–Daniel and legalist protests, issue-specific Chronicle documentation, Sakharov's arguments, Helsinki founding/monitoring techniques, Solzhenitsyn/Sakharov ideological differences, KGB repression and psychiatric abuse. Current ~1.9k words across seven dense sections.
4. **Division V, §§64.22–64.26:** USSR identity and law, Baltic/Ukraine regional differentiation, Georgia/Armenia/Azerbaijan, Central Asian cotton and Aral ecology, distinct deportee return campaigns and Jewish emigration; support specificity from documents and regional scholarship. Current ~1.4k words across five sections.
5. **Division VI, §§64.27–64.33:** This is especially compressed at ~1.9k words for a ten-year international war. Deepen Afghan republican politics/PDPA factions/Herat, 1979 decision-making and Ogarkov's objections, intervention operational chronology, separate resistance organizations, neighboring states and external aid timing, military operations and civilian experiences, *Soviet and Afghan* views, refugee/displacement methodology, veterans' homecoming, diplomacy and Soviet withdrawal 1988–89. Do not rush the December 1979 operation or conflate all mujahideen groups. Do not imply Stingers alone determined withdrawal.
6. **Division I §§64.1–64.5:** Strongest of the six divisions at ~1.8k direct words, but still use some grounded cases and carefully scaled quantitative evidence. Add the proposed living-standards/public-services primary-source window if a trustworthy attributable source is available.

Four existing source studies may be retained, but provenance should improve: source-chronicle should reference a specific dated issue and report; source-soldier should identify a particular authenticated testimony/edition/page or be explicitly presented as an interpretive *collection study*. Do not invent quotations or assign paraphrases to fictional individuals. All features, tables, review, objectives, summaries, section IDs, sidebar links, CSS and script should remain intact.

**No plan redesign. No shortening. No iterative micro-passes.** Ask Claude for one full-depth, integrated completed chapter built from the audit-corrected working file, then run one consolidated publication and browser regression audit. Do not lock this draft yet.
