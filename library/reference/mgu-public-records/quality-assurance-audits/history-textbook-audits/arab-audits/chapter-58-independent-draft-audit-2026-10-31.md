# MGU Arab World History — Chapter 58 Independent Draft Audit

**Audit date:** 31 October 2026 (Pacific)  
**Chapter:** 58, *Syria and Lebanon under the French Mandate* (Part X)  
**Submitted source:** `Pasted text(20261031-211053).txt` (HTML)  
**Status:** **NOT APPROVED FOR PUBLICATION; FULL-DEPTH INTEGRATED EXPANSION REQUIRED.**

## Executive conclusion

The submitted chapter faithfully follows the agreed 37-section, eight-division plan and the authoritative outline purpose (partition, revolt, sectarian institutions, nationalism, state-building, independence). It includes all eight planned source windows, a large review apparatus, and a robust HTML shell. However, the main historical prose totals **11,793 words**, against a subject-driven indicative target of approximately **17,000**, with especially weak coverage of 1940–1946, the 1930s crisis, social history, and the two-section synthesis. Structural completeness does **not** establish publication readiness. Require **one holistic expansion and integration pass**; do not request narrow divisional micro-passes.

## Independent structure and depth counts

Word counts use text within direct paragraph children of the numbered historical `<section id="s58-N">` elements; exclude headings, introductory apparatus, features, and review material.

| Division | Sections | Historical prose words | Indicative plan |
|---|---:|---:|---:|
| I. Mandate construction | 58.1–5 | 2,091 | 2,100 |
| II. Great Syrian Revolt | 58.6–10 | 1,829 | 2,700 |
| III. Syrian state formation | 58.11–15 | 1,705 | 2,100 |
| IV. Greater Lebanon | 58.16–21 | 1,953 | 2,700 |
| V. Society and culture | 58.22–25 | 1,170 | 1,800 |
| VI. Crisis of the 1930s | 58.26–29 | 1,046 | 1,800 |
| VII. War and independence | 58.30–35 | 1,566 | 3,000 |
| VIII. Synthesis | 58.36–37 | 433 | 800 |
| **Total** | **37** | **11,793** | **17,000** |

Every historical section has either 3 or 4 paragraphs. Section lengths run from **189** to **455** words. That remarkably uniform paragraph count suggests a mechanical drafting constraint instead of subject-density-driven expansion.

**Technical checks (direct):** 37/37 section IDs present, eight expected divisions in sequence, 22 feature boxes (eight primary-source, three vocabulary, three maps, two debates, two timeline-style, and one each perspectives, everyday-life, causation, and continuity), 78 unique element IDs, zero duplicate IDs, zero broken `href="#..."` links. One main element, one h1; browser pageerror count zero.

**Apparatus (direct):** opening six paragraphs plus banner; 12 learning objectives; nine guiding questions; 16 chronology rows (slightly above the suggested 8–15 range, not a publication problem); 22 vocabulary preview entries; 28 defined key terms; 18 people-and-places review entries; nine chapter-summary paragraphs; four reflection paragraphs; eight chronology check exercises; five map-study questions; five source-study questions; 14 review questions; five short answers; six discussion questions; four writing exercises; a research extension. Apparatus is structurally complete. Review subheadings are correctly nested inside the review section.

**Rendering:** Independently tested with Chromium via Playwright at 1440, 768, 390, and 320 CSS pixels. No JavaScript page errors. At **390px** and **320px**, document `scrollWidth=477px`, due to the chronology table: **mobile overflow FAIL**. At 1440 and 768, there is no overflow. Verified remedy:

```css
.chron-table { display: block; overflow-x: auto; max-width: 100%; }
@media (max-width: 480px) {
  .chron-table thead th,
  .chron-table tbody td { padding: 7px 8px; font-size: 13px; }
  .chron-table tbody td:first-child,
  .chron-table tbody td:nth-child(2) { white-space: normal; width: auto; }
}
```

Testing this exact added CSS yields scrollWidth equal to viewport width at both 390 and 320px. Preserve the remaining model CSS/HTML structure. Exact side-by-side fidelity to the separately mentioned Chapter 3 model cannot be certified because that model was not supplied for this audit.

## Documentary and factual audit register

### Required precision/corrections

1. **§58.19 — 1932 Lebanese census:** The statement that resident Christians constituted a "small majority" is technically true but misleadingly vague. Rania Maktabi's analysis of the actual census gives **396,946 Christian resident citizens and 396,450 non-Christian resident citizens**, a margin of only **496**, almost exactly 50–50; when registered emigrants are included, the Christian share is **about 58.5%**. Present the crucial resident-versus-emigrant distinction and note citizenship criteria and disputed inclusions. Source: Rania Maktabi, “The Lebanese Census of 1932 Revisited: Who are the Lebanese?” *British Journal of Middle Eastern Studies* 26.2 (1999), pp. 219–241, https://next.fanack.com/wp-content/uploads/census-1932-.pdf .
2. **§58.30 — invalid cross-chapter reference:** Text says Rashid Ali's 1941 Iraqi uprising was "discussed in Chapter 57." Chapter 57 deliberately ends in 1939 and excludes the 1941 Iraqi crisis. Remove that claim; explain the 1941 event in one brief factual clause as directly relevant to Syria. Do not reassign the adjacent chapter's scope retroactively.
3. **§58.13 and source window — Syrian constitutional document:** Sharpen the legal dating. The High Commissioner's **Decree no. 3111 is dated 14 May 1930**, with the constitution published/promulgated at Damascus **22 May 1930**. Identify **Article 116** as the mandatory-powers reservation. Source: League of Nations, *Organic Law for Syria and the Lebanon*, C.352.1930.VI, https://deriv.nls.uk/dcn23/1939/7130/193971308.23.pdf . The narrative's 22 May date need not be discarded, but should be differentiated from the decree date.
4. **§58.13 — 1933 Franco-Syrian treaty:** Go beyond "draft treaty" and generic rejection. The negotiated instrument was **signed by Prime Minister Haqqi al-Azm on 16 November 1933** and rejected amid the Syrian parliamentary confrontation of **21 November 1933**. The source record documents objections to French privileges and territorial separation. See British Library/Qatar Digital Library IOR/L/PS/12/2081, https://qdl.qa/en/archive/81055/vdc_100049603986.0x00008e .
5. **Source window `#source-revolt` — unspecified composite:** It aggregates unnamed military reports, journalists, and League proceedings. Pin it to e.g. U.S. Consul Knabenshue's 19 October 1925 dispatch (FRUS 1925, vol. II, document 77: https://history.state.gov/historicaldocuments/frus1925v02/d77) and compare with an identified French or League record. Retain paraphrase-only language where exact quotations are not verified. For the 1925 casualty problem, avoid treating any partisan estimate as definitive; scholarly discussions document extreme discrepancies.
6. **Source window `#source-crisis1945` — unspecified composite:** Name and date at least one actual dispatch. FRUS 1945, volume VIII, memorandum of 31 May 1945 (document 1088, https://history.state.gov/historicaldocuments/frus1945v08/d1088) and U.S. representative Wadsworth's dispatch of 29 May (document 1082, https://history.state.gov/historicaldocuments/frus1945v08/d1082) are suitable. These distinguish firsthand reporting from diplomatic judgments.
7. **§58.32 and source window `#source-leb1943` — chronological distinction:** The Lebanese Chamber voted constitutional amendments **8 November 1943**, while the constitutional law is **dated 9 November 1943**, and appeared in the Official Gazette on 10 November. Keep the 8 November parliamentary date, add the law date in the source metadata. See Lebanese legal record https://lebaneselegislation.com/law/191985/ and Lebanese Army historical account https://lebarmy.gov.lb/fr/content/les-relations-franco-libanaises-dans-le-cadre-des-relations-internationales .

### Material checked and broadly supported; not grounds for rewriting

- **1925 Druze delegation:** A dated August 7, 1925 American consular account reports the arrest and deportation of notables invited to a conference; the manuscript appropriately acknowledges uncertain detail. FRUS 1925 vol. II doc. 72, https://history.state.gov/historicaldocuments/frus1925v02/d72 .
- **Damascus October 1925 bombardment:** Contemporary estimates conflict dramatically (General Sarrail's figures versus local claims). The text's qualification is warranted; add sourcing and noncommittal casualty framing instead of an invented exact total. *American Journal of International Law* (1926), https://www.cambridge.org/core/journals/american-journal-of-international-law/article/abs/bombardment-of-damascus/0FA51DC109EE152C774E3BCF7E80955D .
- **UN Security Council February 1946:** A draft on foreign troop withdrawal was vetoed by the USSR on 16 February. The text accurately identifies the veto, but it must not suggest an adopted Security Council withdrawal resolution. UN recorded vote, https://www.un.org/unispal/document/auto-insert-185503/ and Security Council document tables at https://research.un.org/en/docs/sc/quick/meetings/1946 .
- **Final evacuation:** Syria's last foreign troops were withdrawn in April 1946; Lebanon's remained until the end of December 1946. The dates are consistent with diplomatic records and the Lebanon Army's historical account. https://lebarmy.gov.lb/fr/content/les-relations-franco-libanaises-dans-le-cadre-des-relations-internationales .
- **Lebanon 1943 constitutional language provision:** Revised Article 11 designates Arabic the sole national official language, permitting use of French in cases fixed by law; the textual paraphrase is supported. https://cc.gov.lb/en/constitution-and-laws/constitution/fundamental-provisions/ .

## Narrative expansion priorities (one holistic build)

1. **VII §§58.30–35:** Provide a developed account of the 1941 campaign, competing Free French and British authority, phased transfers of services and armed forces, November 1943 crisis, 1945 bombardment and international intervention, and the distinct 1946 withdrawal arrangements. This division currently has just 1,566 direct narrative words for six major developments.
2. **II §§58.6–10:** Deepen military chronology, local alliances and divergences, supply and repression, civilian experience, competing casualty estimates, and the limits of League oversight. Current 1,829 words cannot sustain the chapter's principal rebellion adequately.
3. **IV §§58.16–21:** Expand state boundaries, Lebanese identity debates, constitutional institutions, precise census categories, and regional/social-economic differences; current division has 1,953 words across six sections.
4. **VI §§58.26–29:** Explain general strike organization, the text and political failure of the two 1936 treaties, 1937–1939 breakdown, and the Alexandretta/Hatay case. Current 1,046 words for four complex sections.
5. **V §§58.22–25:** Add evidence-based specifics on labor, tobacco and maritime trade, education and language policy, organized women's activities, and experiences of non-elite communities. Current 1,170 words.
6. **III §§58.11–15:** Deepen the National Bloc, constituent assembly, 1930 Constitution, 1933 treaty and provincial divisions; current 1,705 words.
7. **VIII §§58.36–37:** Replace superficial short recap with comparative causal/institutional synthesis; two sections total only 433 words.
8. **I §§58.1–5:** Already near target; preserve depth, make surgical precision fixes only.

Priority is by substance rather than a mandate to pad to a precise word count. The chapter can exceed 17,000 when genuine evidence and analysis justify it, but repetition, filler, and fictional specificity are prohibited. Keep all existing instructional features and review apparatus, expand only where the chapter's historical purpose is underserved. No broad rewriting of correct material.

## Publication decision

**Not locked.** Preserve the architecture, all 37 numbered sections, eight divisions, IDs, links, and model styles. Complete a **single consolidated full-depth expansion with documentary corrections and mobile table repair**, then conduct one independent final source-and-HTML audit. Do not invite another sequence of small divisional passes. Do not claim the final chapter is source-verified unless those references have actually been consulted and matched to the text.
