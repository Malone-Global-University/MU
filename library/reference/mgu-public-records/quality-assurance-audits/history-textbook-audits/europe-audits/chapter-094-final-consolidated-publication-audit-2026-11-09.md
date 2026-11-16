# MGU European History — Chapter 94 Final Consolidated Publication Audit

**Audit date:** November 9, 2026 (America/Los_Angeles)  
**Status:** **APPROVED FOR PUBLICATION — LOCKED**, as a scholarly standalone first-edition historical-text HTML subject to the stated verification limits.  
**Textbook:** *European History: Antiquity, Christendom, States, Empires, and Modern Europe*  
**Volume:** IV — Enlightenment, Revolution, Industry, and Empire  
**Part:** XV — Industrialization, Liberalism, and Nationalism  
**Chapter:** 94 — *Industrialization Spreads across Europe*  
**Authoritative scope:** Comparison of Belgian, French, German, central European and later industrial development, and the uneven geography of economic transformation.

## 1. Authoritative deliverables and file integrity

- **Canonical publication file:** `chapter-094-industrialization-spreads-across-europe-publication-final.html`
- **Deployment alias:** `chapter-094-industrialization-spreads-across-europe.html`; byte-identical to canonical file
- Canonical byte count: **204,333 UTF-8 bytes**
- Final SHA-256: **`749ab3c2c31772706de2887e8fd09d04dae0b0be3d4177fa58de4dd8942902ae`**
- Claude submitted source: `Pasted text(20261110-015325).txt`, 203,134 UTF-8 bytes; SHA-256 **`12791a5caf7198425ccf921f721d10d05dad588cc3daf741574b8390328e13b0`**
- Method: **21 targeted replacements within Claude’s actual HTML; no section rewrite, change to chapter title, change to JavaScript text, or change to overall chapter structure**.

## 2. Full structural and instructional verification

| Test | Result |
|---|---|
| Chapter identity and proper volume and Part | PASS |
| Exactly 20 main sections (§§94.1–94.20) | PASS |
| Five division banners, four sections each | PASS |
| All headings and sections in planned order | PASS |
| HTML IDs | **55 distinct, 0 duplicates** |
| Internal anchor links | **50 tested, 0 missing targets** |
| Integrated instructional feature boxes | **11** (three vocabulary, geography, timeline, historical debate, primary source, multiple perspectives, everyday life, continuity/change, cause/effect) |
| Chapter Opening, Historical Context, Objectives, Questions, Chronology, Vocabulary | PRESENT |
| Two comparative statistics tables | PRESENT; selective data and notes revised |
| Chapter summary, key terms, persons/places, questions, writing tasks, research, reflection | PRESENT |
| Main section narrative estimate | **12,844 words** excluding feature-box subparagraphs |
| Complete page visible text estimate | **23,169 words** including navigation and back matter |
| Source JavaScript versus Claude original | **Identical** |
| Change to CSS | Only responsive table rule required for narrow screens |

The intended chapter boundaries remain intact: Chapter 93 provides the British baseline; Chapter 95 receives the detailed social history of urbanization and work; Chapter 96 the ideological/social question; Chapter 100 unification; Chapter 101 the mature second industrial revolution.

## 3. Consolidated correction register

1. 1796 Gleiwitz continental-priority claim corrected
2. 1815 Prussian territorial and Saar-ownership claim qualified
3. Prussian tariff reform chronology corrected
4. Railway prose synchronized with one disclosed series
5. Unfulfilled Finland cross-reference repaired
6. Brief accurate Finland comparison added to Nordic section
7. Cavour Canal advocacy distinguished from posthumous construction
8. Bonaplata company and operating dates clarified
9. Habsburg hard coal 1870 number inserted and early gap labeled
10. Russia 1870 hard coal figure corrected and territorial label qualified
11. Coal table source, fuel, and missing-data conventions disclosed
12. Railway table Britain scope/year made exact
13. German railway territory qualified
14. French railway totals matched comparative series
15. Belgium 1850 railway value matched comparative series
16. Habsburg railway values revised to selected TIE series
17. Italian railway values matched selected series
18. Spanish railway values matched selected series
19. Russian railway scope and values aligned
20. Railway table source, year, and Habsburg-series disagreement documented
21. Mobile chronology and statistical tables constrained to viewport

### Material historical corrections

**Gleiwitz:** The 1796 Upper Silesian coke furnace is retained as a notable early Prussian installation, but the erroneous claim of continental chronological primacy was removed. The Le Creusot works had coke-fired iron casting by 1785.

**Prussian tariffs (additional error found on final pass):** Prussia did **not** retain dozens of independent internal tariff schedules *after* its 1818 reform. The revised text correctly explains the unified external tariff and elimination of Prussian internal tariffs in that year; many neighboring German states maintained their own tariff barriers.

**Bonaplata:** The Catalan textile enterprise's 1831 organization and 1832 reorganization are separated from operation of the steam-powered works in 1833 and destruction in 1835.

**Cavour Canal:** Cavour's advocacy is distinguished from the canal's actual construction in 1863–1866, after his death in 1861.

**Finland:** A false promise of Finland coverage in §94.17 was eliminated. Section 94.15 now gives a concise comparative paragraph (Tampere cotton industry, forest products, Saimaa Canal 1856, first railway 1862, St. Petersburg link 1870) without diluting the Russian Empire-specific subject assigned to §94.17.

**Prussia's post-1815 territories:** The former blanket claim that the Ruhr and Saar coal districts came wholly within a single Prussian jurisdiction was made more historically precise.

### Historical data treatment

**Railways:** Section 94.9 and Table 94.2 now consistently use the TU Eindhoven **TIE Database** rail-length series. Selected values are Germany approx. 5,856 km (1850) and 18,876 km (1870); France 2,915 and 15,544; Belgium 854 and 2,897; Habsburg territories **1,357 and 6,112**; Italian territories 620 and 6,429; Spain 28 and 5,454; Russian Empire 501 and 10,731. Britain 9,797 in 1850 and 21,558 in the **1871 observation**, explicitly distinguished from calendar 1870. Values are rounded and source territorial conventions noted.

**Important source conflict:** Nineteenth-century historical compilations also report roughly 2,240 km (1850) and 9,761 km (1870) of Austro-Hungarian railways; these disagree with the TIE series substantially. The revised chapter **does not falsely assert that the TIE values are undisputed**. Rather, it explicitly identifies the selected source, states the disagreement, and avoids mixing those series in one table. This satisfies the historical transparency requirement but is **not a reconciliation of all original Habsburg railway statistical methods**.

**Coal:** Table 94.1 now identifies its fuel-definition limitations, changes the Habsburg 1870 estimate to roughly **4 million metric tonnes of hard coal** consistent with Broadberry/Federico/Klein's standard comparative table, and changes Russian output from roughly 0.7 to **1 million metric tonnes** on the same broad convention. The materially higher contemporaneous Habsburg number (~8.36 million in 1870) is reported elsewhere when additional coal types, including lignite, enter the compilation. The source coverage is disclosed instead of presenting unlike categories as identical. Unavailable comparable 1850 data are marked *not harmonized*, not zero.

**Iron:** The approximate 1870 pig iron production figures were retained as credible order-of-magnitude values: Britain c.6, Germany c.1.3, France c.1.2, Belgium c.0.6, Austria-Hungary c.0.4, Russia c.0.35 million metric tonnes. These match the principal 1870 comparative benchmarks to appropriate rounding.

## 4. Browser tests and HTML integrity

**Chromium + Playwright**, using browser HTML insertion, tested:

| Viewport width | Whole-document horizontal overflow | Page-script errors |
|---:|---|---|
| 320 px | NO | NONE |
| 390 px | NO | NONE |
| 768 px | NO | NONE |
| 1024 px | NO | NONE |
| 1440 px | NO | NONE |

At small widths, chronology and quantitative tables retain their column widths but scroll *inside the table element*; the document itself remains within the screen width. The CSS change matches the responsive-table approach already used successfully in the approved Chapter 93 HTML. The desktop and mobile opening screens were visually inspected. All 50 internal targets resolve, 55 HTML IDs are unique, and 20 numbered sections and five divisions remain in the correct sequence.

## 5. Targeted reference register

The following sources were consulted to verify particular historical corrections and the quantitative series. Source descriptions do **not** imply full facsimile, all-edition, or manuscript collation.

1. Le Creusot-Montceau Tourism Office, “From royal foundry to English forge,” coke-fired casting in 1785: https://www.creusotmontceautourisme.com/discover/le-creusot/a-factory-town-turned-empire/from-royal-foundry-to-english-forge/
2. Cambridge University Press, “How Britain Unified Germany: Trade Routes and the Formation of the Zollverein,” description of Prussia's 1818 tariff-law reform: https://www.cambridge.org/core/journals/journal-of-economic-history/article/how-britain-unified-germany-trade-routes-and-the-formation-of-the-zollverein/C792A2C396A5689B2E85CC5A7730617C
3. Enciclopèdia Catalana, “Josep Bonaplata i l’adopció de la màquina de vapor,” company reorganization, 1833 activity, factory opening: https://www.enciclopedia.cat/tecnics-i-tecnologia-en-el-desenvolupament-de-la-catalunya-contemporania/josep-bonaplata-i-ladopcio
4. Italia.it, “Canale Cavour,” Cavour promotion and 1863–1866 construction: https://www.italia.it/en/piedmont/il-canale-cavour
5. EH.net, “An Economic History of Finland,” early textile, wood industry and transport: https://eh.net/encyclopedia/an-economic-history-of-finland/
6. Bank of Finland, “Foreign Capital and Finland,” earliest railway between Helsinki and Hämeenlinna in 1862: https://publications.bof.fi/bitstream/handle/10024/45670/128348.pdf?isAllowed=y&sequence=1
7. TU Eindhoven TIE Database (Atlas of European Infrastructure), “Length of Railway Lines Open (in km), 1850–1870,” table directly examined via PDF screenshot: https://www.atlas-infra.eu/t05/rail/Railway_1850-1870.pdf
8. Stephen Broadberry, Giovanni Federico, and Alexander Klein, “Sectoral Developments, 1870–1914,” Tables 3.7A and 3.7B, based on B. R. Mitchell: https://www.researchgate.net/publication/228388297_UNIFYING_THE_EUROPEAN_EXPERIENCE_AN_ECONOMIC_HISTORY_OF_MODERN_EUROPE_VOLUME_2_CHAPTER_3_SECTORAL_DEVELOPMENTS_1870-
9. A contemporary alternative Austro-Hungarian railway-length compilation, in Adna Ferrin Weber, *The Growth of Cities in the Nineteenth Century*, page 97: https://upload.wikimedia.org/wikipedia/commons/3/39/The_growth_of_cities_in_the_nineteenth_century%3B_a_study_in_statistics_%28IA_growthofcitiesin00weberich%29.pdf
10. U.S. Geological Survey archival production table (historic coal, including some broader fuel classes): https://apps.usgs.gov/minerals-information-archives/mineral-resources-1893-1933/mr-1909-nonmetals.pdf

## 6. Scope and residual limitations

The independent final audit comprises a direct HTML text revision, exact structural and JavaScript comparisons, five-width Chromium browser tests, and **targeted** external factual and bibliographic checks. It does **not** constitute complete verification of every sentence against original-language archives, exhaustive collation of historical statistical series, inclusion of physical atlas plates, or byte-for-byte reproduction of the original **Chapter 2** HTML model, which was not supplied. The List 1841 primary-source window remains **explicitly identified as an editorial paraphrase**, not a verbatim translated text collated against an original edition. The chapter remains a scholarly textual first edition; live-site behavior and site-wide links outside the document are not proven by a local browser test.

## Final decision

**APPROVED FOR PUBLICATION — LOCKED, November 9, 2026 Pacific**, for the *standalone scholarly historical-text HTML first edition*. All publication-critical errors identified during the source and final passes have been corrected directly in the HTML. Full 20-section structure, instructional apparatus, navigation IDs, original JavaScript, and publication architecture remain preserved. Remaining limits are disclosed rather than hidden; no further expansion or micro-pass is recommended.
