# MGU Japanese History — Chapter 97
## Final Consolidated Historical, Documentary, Statistical, Structural and Browser Publication Audit

**Audit date:** November 12, 2026 (Pacific)  
**Title:** *The Lost Decades: Stagnation, Precarious Work, and Demographic Change*  
**Part:** XIV — Japan after the Bubble  
**Decision:** **APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — LOCKED**, under the explicit verification and deployment limits below.

## 1. Provenance, canonical output and revision method

- **Claude source submitted:** `/mnt/data/Pasted text(20261112-104427).txt`; **217,983 UTF-8 bytes**, SHA-256 `555d40de1f56f797f801ca426f723900ec62f242413a02b6321745ead72c5eb8`.
- **Canonical corrected HTML:** `/mnt/data/chapter-097-the-lost-decades-stagnation-precarious-work-and-demographic-change-publication-final.html`; **235,653 UTF-8 bytes (LF-normalized)**, SHA-256 **`c0c3c131b3775633a4d24c56023e6c10c5a1073a9b0310e06bddd789772a4016`**.
- The editing pass modified **three of 91 direct narrative paragraphs**, in §§97.3, 97.14, and 97.19, to correct historically material facts; it preserved the other 88 direct narrative paragraphs, all 20 numbered sections, all five divisions, and the substantive original argument. All documentary windows, quantitative exercises, vocabulary, review apparatus and reflection were retained. Other changes were confined to the chronology/data note, source locators, source register and responsive CSS wrapper. No full narrative rewrite, gratuitous expansion or repetitive micro-pass was performed.

## 2. Final plan and structure validation

| Criterion | Independently confirmed result | Finding |
|---|---:|---|
| Approved divisions | 5 | PASS |
| Historical sections, §§97.1–97.20 | 20 | PASS; plan order preserved |
| Main narrative paragraph count | 91 | PASS |
| Main narrative count (regex-based whitespace words) | 12,711 | PASS; approximately within 10k–13k target |
| Chapter opening narrative paragraphs | 7 | PASS |
| Chapter summary paragraphs | 9 | PASS |
| Chapter reflection paragraphs | 4 | PASS |
| Primary source / document windows | 6 | PASS; dated source locators added |
| Historical Vocabulary boxes | 3 | PASS |
| Quantitative data studies A–D | 4 | PASS |
| Source-register entries | 20 | PASS; each includes an external source link |
| Distinct HTML IDs | 80 | PASS; no duplicates |
| Internal anchor links | 61 | PASS; no unresolved targets |
| External clickable research links | 42 | PASS; not all third-party destinations can be guaranteed persistently available |

The final chapter retains the planned scope and explicit boundary with Chapter 96 (bubble formation), Chapter 98 (1995 disaster and Aum), Chapter 99 (2011 disaster and 2010s politics) and Chapter 100 (contemporary identity). The temporary workers' village is appropriately located in the chapter's account of 2008–2009 employment insecurity.

## 3. Historical corrections directly applied

### 3.1 Tokuyō City Bank, §97.3

Original claim described Tokuyō City Bank as a Hokkaido regional bank. Corrected to **Sendai, Miyagi Prefecture**, distinct from the crisis at Hokkaido Takushoku Bank. The revised text records the **26 November 1997** Bank of Japan announcement of transfers to **Sendai Bank**, with a portion to other institutions including **77 Bank**.

**Contemporaneous primary source:** Bank of Japan, *Concerning Tokuyo City Bank*, 26 November 1997, https://www.boj.or.jp/en/about/press/danwa/dan9711d.htm. The source explicitly refers to operations and transfers in Miyagi Prefecture.

### 3.2 Census-based working-age population, §97.14 and Data Study C

Replaced incompatible rounded claims with the historical **2010 census series**, covering residents aged **15–64**:

| Census year | Census count, ages 15–64 | Table display |
|---|---:|---:|
| 1990 | 85,903,976 | 85.90 million |
| 1995 | 87,164,721 | 87.16 million, peak |
| 2000 | 86,219,631 | 86.22 million |
| 2005 | 84,092,414 | 84.09 million |
| 2010 | 81,031,800 | 81.03 million |

These are **October census counts**, not employment totals. Age-specific counts exclude respondents whose ages were not recorded, whereas total population includes them. Fertility rates are **separate annual vital-statistics measures**; joining the series in a teaching table does not make their observation dates identical.

**Official tabulations:** Statistics Bureau, *2010 Population Census: Overview of Population and Households of Japan*, historical age-group table, published December 2012, https://www.stat.go.jp/data/kokusei/2010/pdf/wagakuni.pdf.

### 3.3 Revised population-estimate vintage and peak, §97.14

Removed the inconsistent unqualified **127.7 million** peak estimate and used the retrospectively revised **October 2008** total population of **128,083,960**, alongside the **October 2010 census** count of **128,057,352**. Distinguished the long-term working-age decline, the first small annual natural population decrease in 2005, and the total-population estimate peak around 2008. The narrative explains the use of consistent statistical vintages rather than silently mixing old and new series.

**Official revised series:** Statistics Bureau, *Population Estimates — January 2014*, reference time series, dated 20 January 2014, https://www.stat.go.jp/data/jinsui/pdf/201401.pdf (2008 128,083,960; 2010 128,057,352).

### 3.4 New Year's Temporary Workers Village, §97.19 and reference materials

Corrected the principal **Hibiya Park** support event to **31 December 2008–4 January 2009**, and distinguished the **Ministry of Health, Labour and Welfare's emergency lodging** opened 2 January and available into the morning of **5 January 2009**. Corrected the location reference and key-term definition for consistency.

**Official contemporary-period retrospective:** MHLW, 2009 annual policy report, column on the *Toshikoshi Haken Mura*, https://www.mhlw.go.jp/wp/hakusyo/kousei/09/dl/01-02-05.pdf.

## 4. Quantitative data-study documentation

**Study A — financial collapse and stagnation:** The displayed Nikkei closes, GDP growth, and consumer-price changes remain clearly labeled rounded instructional approximations. Additional documentation distinguishes points, annual calendar observations, revisions and sources. The table is not presented as a newly collated single-vintage dataset. Students are directed to check precise statistical series if undertaking numerical replication.

**Study B — nonregular employment:** The totals are attributed to OECD, *Economic Surveys: Japan 2011*, **Table 5.1, p. 143** (1990 **20.2%**, 1995 **20.9%**, 2000 **26.0%**, 2005 **32.3%**, 2010 **33.7%**). The denominator is employees **excluding executives**; survey method and observation timing change over the period. Other subgroup percentages are kept as rounded estimates from distinct Japanese labor tabulations, not asserted to follow algebraically from that OECD table. Source: https://www.oecd.org/content/dam/oecd/en/publications/reports/2011/04/oecd-economic-surveys-japan-2011_g1g11668/eco_surveys-jpn-2011-en.pdf.

**Study C — fertility and aging:** All five working-age census entries were reconciled to one historical census series, with census/annual fertility measurement distinctions and a link to the revised 2008 total population figures. No false precision was introduced into the other deliberately rounded demographic descriptions.

**Study D — public debt and social-security benefits:** Clarified **gross general-government debt as percent of nominal GDP** versus net debt or central-government bonds, and **nominal fiscal-year social-security spending** versus real spending. The existing values remain illustrative rounded cross-source comparisons. The new source register includes the IPSS FY2010 social-security report; a uniform debt series and edition are still required before treating the table as a fully reproduced statistical dataset. This is an explicit teaching-use limit, not a claim of exact fresh recomputation.

## 5. Documentary source windows and research register

Preserved all six identified source windows: (1) November 1997 Bank of Japan crisis communications; (2) October 1998 LTCB statement; (3) February 1999 and March 2001 monetary-policy decisions; (4) dispatch-work legislation and labor surveys; (5) the Long-Term Care Insurance Act; (6) population census and vital statistics. **All six** now provide clickable locators to actual government, central-bank, archival or scholarly source publications. The new **20-entry register** distinguishes contemporaneous decisions, consolidated statutes, official statistical revisions and later analyses.

Two primary examples verified against specific dated records: Bank of Japan, *Statement concerning LTCB*, **23 October 1998**, https://www.boj.or.jp/en/about/press/danwa/dan9810a.htm; and National Diet Library catalog, *Long-Term Care Insurance Act*, **Law No. 123 promulgated 17 December 1997**, https://hourei.ndl.go.jp/simple/detail?current=-1&lawId=0000083684. Bank of Japan archive dates the zero-rate decision to 12 February 1999 and quantitative easing to 19 March 2001: https://www.boj.or.jp/en/mopo/outline/bpreview/ref.htm.

**Source qualification:** The boxed studies are transparently labeled **editorial paraphrases / document summaries**, not invented or independently facsimile-collated original-language quotations. The register identifies sources to consult; citation of an accessible historical document is not a claim that every edition, translation, law provision, institutional dataset or methodological revision was exhaustively audited. The institutional and retrospective records should not be treated as equivalent to interviews with affected people.

## 6. Responsive HTML, navigation and browser verification

The original #chronology table caused **22px document-level horizontal overflow at 320px**. It is now wrapped in a **keyboard-focusable, labeled horizontal scroll region**, preserving the table and original sidebar. No other section content or sidebar model script was rewritten. The chapter's base design remains the model-derived CSS and script (except the explicitly added responsive/documentary styles).

| Chromium viewport | Document scroll width | Chronology internal overflow | JavaScript errors | Result |
|---:|---:|---:|---:|---|
| 1440px | 1440px | 0px | 0 | PASS |
| 900px | 900px | 0px | 0 | PASS |
| 390px | 390px | 260px | 0 | PASS |
| 320px | 320px | 330px | 0 | PASS |

All 20 numbered section IDs, six documentary-window IDs, four data-study IDs, source-register entry IDs and internal navigation destinations were validated. No duplicate IDs and no missing anchors. Desktop sidebar displayed; responsive sidebar hidden on narrower widths per existing CSS. The scroll-highlight script executed without browser errors. At 320px and 390px, overflow is confined within the purpose-built table scroll region and does not widen the page.

## 7. Historical and publication limitations

- This is an **independent targeted verification** of the identified publication-critical corrections, important dates and data definitions, not a line-by-line audit of every historical assertion across the 20 sections or every cited archive's complete contents.
- The six windows summarize or paraphrase identified source types; they are **not** checked against original Japanese-language facsimile pages as authenticated quotations or translations.
- Data Studies A and D retain rounded teaching values with identified source families and replication notes; exact single-vintage statistical reproduction of every cell has **not** been completed.
- The geography activities are text-guided and require access to appropriate historical maps; none are claimed to include original atlas plates. No photographic/artwork rights are certified.
- The separate standalone Chapter 2 model was not directly available, so **exact byte-for-byte template parity** cannot be certified; markup and script are otherwise retained aside from the recorded changes.
- The file was validated by locally rendering HTML, **not deployed to a live MGU website**. Third-party link permanence and production hosting remain outside the audit.

## 8. Final editorial disposition

**APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — LOCKED (12 November 2026, Pacific).**

The canonical publication-final HTML is complete, preserves the agreed plan and comprehensive educational apparatus, corrects the prior audited inaccuracies, and passes the consolidated responsive/navigation checks. No further routine expansion or micro-passes are recommended without new, independently verifiable publication-critical information. Use the SHA-256 digest in §1 to identify the canonical file.
