# MGU China History Chapter 68 — Consolidated Publication Audit

**Chapter:** The Great Leap Forward and Famine (Part XI, Maoist China)
**Audit date:** October 29, 2026 (America/Los_Angeles)
**Source manuscript:** `/mnt/data/Pasted text(20261029-233716).txt`
**Publication HTML:** `/mnt/data/chapter-68-the-great-leap-forward-and-famine.html`
**Final file bytes:** 170,784
**SHA-256:** `746fb96bd87e5b85d756d6b37e4afd0835e7e96a6b38e9b36f9184faa5c1f722`
**Decision:** APPROVED FOR PUBLICATION — LOCKED, with a disclosed quantitative-document substitution in §68.15.

## Structure and scope

Confirmed 34 consecutive numbered sections, 68.1–68.34, grouped into seven divisions. The body follows the approved allocation 5/7/6/8/5/2/1. Coverage includes origins and ideology, communes and mass labor, grain targets and procurement, famine geography and lived experience, Lushan, early policy retreat, mortality and historiography. The concluding material includes the required summary, terms, people and places, review questions, research project and reflection. The next chapter's recovery, factional debates, and Sino-Soviet split are not narrated in advance. The number of instructional `.feature-box` elements is 20, including four `.feature-source` windows, three `.feature-evidence` boxes, two map studies, two everyday-life illustrations, two debates, two cause-and-effect boxes, two continuity/change boxes, one perspectives, one vocabulary, and one timeline.

## Historical and documentary audit

1. **§68.15 grain figures:** The Claude draft used about 67 million metric tons of 1959 procurement and about 48 million for 1957 while the draft's evidence table lacked a numeric procurement column. Published series do vary; these figures were not intrinsically fictitious, but their provenance and series consistency were inadequate. The revised chapter explicitly selects Wei Li and Dennis Tao Yang's 2005 *Journal of Political Economy* Table 1 series: 1957 (output 195, procurement 46); 1958 (200, 52); 1959 (170, 64); 1960 (143, 47); 1961 (148, 37), in millions of metric tons. Calculated procurement/output shares are displayed. The chapter now warns that gross procurement is not net removal or household consumption. See https://www.journals.uchicago.edu/doi/pdf/10.1086/430804 and https://gwern.net/doc/economics/2005-li.pdf.
2. **§68.15 primary source:** The planned primary-source *procurement directive* was not verified by Claude. A verified directive was not invented. The feature explicitly states that a retrospective government statistical record reproduced in a scholarly study is offered instead. This is a transparent substitution, not strict fulfillment of the original request for an actual 1958–1960 procurement directive. An instructor who requires a directive-based window should replace this one with a properly transcribed and cited archival order.
3. **§68.19 mortality geography:** The province comparisons are broadly supported, but rates need their measures and series identified. A published official series (e.g. Anhui 68.6 deaths/1,000, Sichuan 54.0, Guizhou about 52.3, all for 1960) confirms the manuscript's approximate comparisons. Garnaut's 2014 historical geography maps census-cohort disruption rather than simply mapping official crude death rates; this distinction has been made explicit. See https://journals.sagepub.com/doi/10.1177/0097700413507425 and https://mis.sem.tsinghua.edu.cn/UploadFiles/File/201702/20170202121906741.pdf.
4. **§§68.26 and 68.33 mortality figures:** Clearly distinguished excess deaths, missing births and wider population-loss concepts, and revised the surrounding language to say that the broad 15–45 million estimates are **not identical measurements**. Dikötter's upper estimate includes deaths attributed to starvation, violence and forced labor and is contested; it is not equivalent to Coale's census-based reconstruction. See https://faculty.washington.edu/stevehar/honors-mortality.pdf and https://www.frankdikotter.com/books/maos-great-famine/.
5. **§68.25 causal scholarship:** Justin Yifu Lin and Dennis Tao Yang (2000), Meng–Qian–Yared (2015), and Kasahara–Li (2020) were checked against publisher metadata and abstracts; the manuscript accurately represents their central research emphases. Sources: https://academic.oup.com/ej/article-abstract/110/460/136/5140006 ; https://business.columbia.edu/faculty/research/institutional-causes-chinas-great-famine-1959-1961 ; https://doi.org/10.1016/j.jdeveco.2020.102513.
6. **§68.28 Peng Dehuai source:** July 14, 1959 letter and the 1968 Union Research Institute book verified bibliographically; the revised metadata also identifies the English-language *Memoirs of a Chinese Marshal* (1984) appendix as a comparison. No new direct quotation was introduced. See https://library.thebeijingcenter.org/cgi-bin/koha/opac-detail.pl?biblionumber=4189 and https://www.bannedthought.net/China/Individuals/PengDehuai/PengDehuai-MemoirsOfAChineseMarshal-1984-OCR-sm.pdf.
7. **§68.6 commune resolution:** CCP resolution of August 29, 1958 is documented in contemporary *Peking Review* no. 29, September 16, 1958; this specific English edition is named. See https://www.massline.org/PekingReview/PR1958/PR1958-29.pdf.
8. **§68.21 Xinyang:** A claim implying outside intervention already in early 1960 was softened to indicate reports and investigation developed over 1960. The death estimate remains explicitly approximate; local counts and timing remain debated.
9. **§§68.18–68.19 trade and conditions:** Grain trade figure qualified as an approximate net export measure; the manuscript distinguishes imports contracted in 1961 from actual relief reaching particular villages. For famine mechanisms and international procurement: https://academic.oup.com/book/26282/chapter/194517464.
10. **References:** Added chapter-level Selected Sources and Verification Notes to provide exact titles, years, journals or books for the main scholarly attributions. This does not replace the series-wide Appendices L/M or full bibliography. It explicitly documents the statistical record substitution.

## Consolidated narrative-depth remediation

The original numbered-section direct narrative totaled ~6,292 words, with especially thin sections on mortality, Lushan and procurement. Instead of repeated iterative requests, one holistic localized editorial pass expanded ~19 assigned sections by approximately 2,395 words, giving the publication version ~8,762 direct narrative words and ~12,681 numbered-section words including instructional features. Additions address: decentralized authority, commune institutional consequences, irrigation labor diversion, falsified-report incentives, 1958 grain revisions, gross versus net procurement, entitlements and rationing, temporal/territorial variation, methods for excess mortality, the 1958 early warnings, Lushan and Peng, political repression and retrenchment. The seven-division plan and original section titles, features, and chapter apparatus were preserved. No indiscriminate padding or 70,000-character compression was applied.

## HTML and browser QA

- 34 consecutive numbered sections.
- 7 division banners; 81 IDs, all 81 unique.
- 60 internal href anchors, all 60 resolve.
- 52 `<section>` opening and closing pairs; 106 `<div>` pairs; 4 `<table>` pairs.
- Original Chapter 1 design-token/layout CSS base retained; only localized extra mobile table containment rules added. The scroll script remains in the document and JavaScript syntax passes Node compilation.
- Chromium (Playwright) tests at 1440, 900, 390 and 320 CSS pixels; no JavaScript runtime errors or page-wide horizontal overflow. The chronology and data tables scroll **inside their own boxes** at narrow sizes; table cells can extend within those scroll areas without enlarging the document width.
- Desktop and mobile screenshot files: `ch68-final-1440.png` and `ch68-final-320.png`.

## Editorial disposition

**APPROVED FOR PUBLICATION — LOCKED**, October 29, 2026. The original prescribed directive source in §68.15 is the one documented deviation, replaced with a transparent statistical-source study rather than a fictional historical regulation. All other plan elements are implemented. A future genuine procurement directive could be substituted as a source-enrichment project, but the present narrative and source analysis are publication-ready without a further general revision cycle.
