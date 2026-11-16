# Chapter 77 mechanical validation report (one-pass consolidated revision)

Output: `chapter-077-the-dutch-republic-and-the-british-constitutional-revolutions.html`
Baseline: `chapter-077-audited-working-copy-NOT-LOCKED.html` (all existing prose retained; four factual repairs, Division XI label, and table-scroll CSS/wrappers carried forward unchanged).

## Structure
- 54 sections (77.1 to 77.54), original order and headings unchanged; 71 `<section>` open/close balanced; 157 `<div>` open/close balanced.
- 110 unique IDs, 0 duplicates; all internal `href="#..."` anchors resolve.
- Apparatus retained: 11 source windows, 4 map studies, 3 debates, 3 vocabulary boxes, two-track timeline, multiple perspectives, continuity/change, cause/effect, everyday life, quantitative study, full review.

## Narrative depth (direct `<p>` prose in 77.1 to 77.53)
- Baseline: 19,661 words. Revised: 41,821 words (+22,160). This is about double the 8,000 to 11,000 expansion the directive called plausible; the directive set no ceiling.
- Sections expanded: 43 of 53 (77.6 to 77.11, 77.17 to 77.53). Sections 77.1 to 77.5 and 77.12 to 77.16 were left at baseline, because the directive prioritized the other divisions.
- Paragraph counts per section now range 4 to 9 (22 sections have 7).
- Whole-document visible words about 56,200.
- Expansion by division (direct words): I 2,118; II 4,085; III 1,866; IV 4,205; V 4,796; VI 5,122; VII 4,753; VIII 4,658; IX 6,233; X 3,985.

## Source register (all 11 windows now cite a named edition or record)
1 Nationaal Archief, Raad van State 1.01.19 inv. 2623, plus Kossmann and Mellink no. 37; 2 Kossmann and Mellink no. 49, pp. 216 to 228 (dbnl.org full text); 3 Smit/Rowen translation, TNA SP 113/6/1, Article XIV, with the 30 Jan / 1 Mar / 18 Apr / 15 May 1648 timeline; 4 Gardiner (3rd ed. 1906) no. 10; 5 Gardiner no. 43, p. 202; 6 Firth, Clarke Papers vol. 1, pp. 226 ff.; 7 Gardiner no. 97, p. 405; 8 Gardiner no. 105; 9 1 Will. & Mar. sess. 2 c. 2 (Declaration of Rights not a condition of the crown); 10 1 Will. & Mar. c. 18; 11 NRS SP13/209, Scottish Act 1707 c. 7, English Act 6 Anne c. 11. All remain explicit paraphrase; no quotations were introduced.
- Verified in this session by opening a catalogue, contents list, or full text: Gardiner document numbers and pages (contents lists), Kossmann and Mellink no. 49 (dbnl full text), Rowen/Smit translation and TNA SP 113/6/1 (catalogue), NRS SP13/209 and the Union Acts' citations. Not independently opened here: the Nationaal Archief inv. 2623 record itself, Kossmann and Mellink no. 37 page numbers, the legislation.gov.uk pages for the 1689 statutes, and the Putney pagination; these rest on the audit's citations.

## Quantitative study
- Replaced with a three-year table (1694, 1702, 1706) of excise and customs paid to the Exchequer, nominal, in £1,000: 870/846, 1,176/1,299, 1,461/1,327, labelled to Dal Bó, Hutková, Leucht and Yuchtman (2025), Appendix Table A.1.
- I opened the article page and confirmed Table A.1 covers 1689 to 1720, nominal £1,000, Exchequer payments net of management costs, drawbacks and bounties. The table's cell values were in an image and could not be read here, so the three rows are transcribed from the revision directive and audit and should be checked against the table.
- Limits stated in the box: not total revenue; excise also taxed traded goods; nominal; pre-1707; Bank of England loan is borrowing not revenue; Holland's 58% quota is a separate measure and is not converted to pounds. Five numerical/analysis questions added.

## Browser test (Chromium via Playwright, local file)
| Width | scrollWidth | innerWidth | JS errors |
|---|---|---|---|
| 1440 | 1440 | 1440 | none |
| 900 | 900 | 900 | none |
| 768 | 768 | 768 | none |
| 390 | 390 | 390 | none |
| 320 | 320 | 320 | none |

## Style checks
- No spaced-hyphen pauses; the only em dashes are the model shell's structural labels (title, part label, footer).
- Old Style dates used for England and Scotland, with the New Style equivalent given for the Torbay landing; no unified Kingdom of Great Britain before 1707 (the 1604 royal style is flagged as having no legal basis).

## Not done / limits
- Facts in the 43 expanded sections were written from general knowledge and cross-checked only against my own recall; they have not been verified against sources line by line. The audit's single final pass should sample them, especially figures given as estimates (casualties, Irish mortality, land shares, debt totals, troop numbers), which are hedged in the text.
- Map studies remain text exercises, not drawn maps.
