# MGU Latin American History — Chapter 93 Final Consolidated Publication Audit

**Audit date:** 13 November 2026 (America/Los_Angeles)

**Chapter:** Chapter 93 — *The Lost Decade and the Latin American Debt Crisis*

**Placement:** Volume V, Part XXI — Debt, Democracy, and Neoliberalism

**Source draft:** `Pasted text(20261113-093737).txt` (original 199,026 UTF-8 bytes; source SHA-256 `af02bc4872d254b7b234a7e5468d9a8d9c87ca2dfc820e94521c2d04fa40f353`).

**Canonical output:** `chapter-093-the-lost-decade-and-the-latin-american-debt-crisis-publication-final.html`

**Canonical output bytes:** 209,944 UTF-8 bytes

**SHA-256:** `90da3bd2a3136d58cfb4c9032a92ab8dd5be1b938aabf08c5427bc822f6e9bf2`

**Decision:** **APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — EDITORIAL LOCK**, with the documentary and technical limitations explicitly disclosed below. Not a facsimile edition and not yet a verified live deployment.

## 1. Basis and scope

Consolidated selective corrections to the complete Claude-submitted HTML, following the 13 November conditional audit. Authoritative chapter outline and MGU master instructions were respected; the five-division architecture and sections 93.1–93.20 are preserved. Corrections were verified using identified IMF, Federal Reserve, ECLAC, BIS, World Bank, Bolivian legal, and U.S. State Department records. Not every sentence or edition in the 17-item base bibliography was independently verified.

## 2. Structural and instructional verification

- Exactly **20/20** main sections in order (`s93-1` through `s93-20`), in five divisions.
- Direct prose in the twenty main sections: **10,157 words** (body paragraphs directly within each numbered section, excluding embedded callouts and apparatus). Full rendered document body, including sidebar, apparatus, table labels and repeated instructional text: **approximately 22,808 words**.
- Primary Source Windows: **9**, each given a linked documentary locator and a clearly described verification/collation status; none presented as an original-page-collated verbatim quotation.
- Map studies: **3** (text-guided; require external atlas/data mapping); quantitative studies: **3**, now containing directly reproducible mini-series for Brazilian external debt, Mexican/Bolivian annual-average CPI inflation, and ECLAC historical poverty.
- Country comparisons: **3**; two historical debates; cause/effect, continuity/change, everyday-life features, a specific sourced documentary-image study, and complete student review apparatus.
- Responsive tabular regions: **11 / 11** tables wrapped for horizontal scrolling without clipping.
- IDs: **74**, with **no duplicates**. Internal links: **69**, with **zero missing targets**. HTML has a descriptive metadata tag.

## 3. Corrections executed and evidentiary basis

**A. Mexico's August 1982 chronology.** Corrected the opening, Section 93.5, chronology preview, and `src-silva-herzog`: **12 August** creditor notice/international contacts; **18 August** public acknowledgment; **20 August** bank negotiations and temporary standstill. Clear disclaimer: letter itself not facsimile-collated. Historical basis: James M. Boughton, *Silent Revolution*, IMF (2001), chapter 7, https://www.elibrary.imf.org/abstract/book/9781557759719/ch007.xml ; contemporary Federal Reserve History discussion at https://www.federalreservehistory.org/essays/latin-american-debt-crisis .

**B. ECLAC poverty denominators.** Corrected Sections 93.12 and 93.20, summary, and quantitative study. ECLAC population poverty: **40.5% (1980)** to **48.3% (1990)**; poor people **135.9 million** to **200.2 million**. Separate household poverty measure: **34.7%** to **41.0%**. Basis: ECLAC *Social Panorama of Latin America 2000–2001* (2002), tables I.2–I.3, https://repositorio.cepal.org/bitstream/handle/11362/1212/1/S016467_en.pdf . Footnotes state geographic coverage and caution against interchange of denominators.

**C. Bolivian stabilization/legal history.** Corrected Section 93.11 and `src-ds21060`: **Supreme Decree 21060 of 29 August 1985** introduced the unified rate via Central Bank foreign-exchange auctions (*bolsín*) and stabilization measures; it did not itself enact the major subsequent tax overhaul. **Law 843, 20 May 1986**, is separately identified. Sources: https://www.lexivox.org/norms/BO-DS-21060.html and https://www.lexivox.org/norms/BO-L-843.xhtml ; central bank research describes managed/auction transition and later crawling-peg arrangement.

**D. Inflation-rate comparability.** The draft’s Mexico figures (roughly 100% in 1982, 160% in 1987) mixed conventions. The historical Mexican **December-to-December** inflation series (98.8% and 159.2%) is distinguished explicitly from **calendar-year-average CPI** rates (58.9% and 131.8%). A reproducible Mexico/Bolivia panel, 1982–1987, uses World Bank WDI FP.CPI.TOTL.ZG as distributed by FRED: https://fred.stlouisfed.org/data/FPCPITOTLZGMEX and https://fred.stlouisfed.org/data/FPCPITOTLZGBOL . Historical year-end corroboration: Banco de México, *Informe Anual 1987*.

**E. Comparable debt series.** Added a Brazil **gross external debt** end-of-year series (US$ billions: 64.2, 74.0, 85.3, 93.5 for 1980–1983). Explicitly differentiated gross debt from other debt measures and indicated source: World Bank archival Brazil debt table A.1, Central Bank of Brazil source data, https://documents1.worldbank.org/curated/en/702541468021529622/pdf/multi0page.pdf .

**F. Primary-source and photo provenance.** Nine documentary studies now include identified reference links and specific disclosure of which passages are secondary reconstructions rather than collated originals; for example, the November 1982 IMF letter is discussed through contemporary *Hansard* reporting because original letter text was not authenticated. The image study now examines a specific 1986 Mexico City demonstration credited to Sergio Dorantes/Sygma/Getty Images, displayed in Federal Reserve History at https://www.federalreservehistory.org/essays/latin-american-debt-crisis . Image is linked, **not embedded or relicensed**. No exact day was assumed.

**G. Analytical depth.** Targeted development of debt stocks versus foreign-exchange payment flows, public/private liability transfers, and face value versus secondary-market market value without altering the established organization. Main-section prose exceeds the 10,000-word minimum target.

## 4. Technical Chromium validation

Direct HTML DOM and Chromium rendering checks performed in container on the finished edition. Chromium rendering used inline `set_content` because the browser runtime blocks `file://` navigation; this still executes the delivered HTML and CSS. Browser outputs:

| Viewport width | Document scroll width | Page-level overflow | JS page errors |
|---|---:|---|---|
| 1440px | 1440px | None | 0 |
| 768px | 768px | None | 0 |
| 390px | 390px | None | 0 |
| 320px | 320px | None | 0 |

All table content remains within independently horizontally scrollable and keyboard-focusable containers on narrow screens. Screenshots tested at 1440, 390 and 320 pixels. Desktop sidebar links resolve; section anchor hash changed correctly on test click. Exact source-byte parity with **Chapter 31** could not be established because Chapter 31 HTML was not provided here. No live web-host deployment was performed.

## 5. Known boundaries of editorial approval

1. Primary Source Windows are explicitly labeled **editorial paraphrases and source studies**, not authoritative transcriptions, translations or facsimile-collated passages. Some cited originals (e.g., Mexico’s 1982 creditor notice and IMF letter) were not independently recovered. The bibliography is source-selective rather than exhaustively page-collated.
2. Three historical maps remain teaching exercises requiring external atlases or datasets; this HTML does not embed custom authenticated cartographic plates.
3. The authentic documentary photograph is **linked to the hosting institution only**, without a licensed embedded copy. This is deliberately publication-safe and should not be represented as a cleared image license.
4. No comparison to original Chapter 31 HTML source or live-site accessibility/performance certification has been undertaken. The observed browser checks validate this standalone edition, not the production site.
5. Numerical series have definitions, units and years specified; later revisions to historical databases may yield updated values. Preserve cited dataset editions and distinguish mixed-source coverage.

## 6. Lock statement

The editorial content and local standalone HTML are considered complete for a first scholarly textual release, within the disclosed source-collation, map, image-license, template-parity, and deployment limits. Further work should only be undertaken for a substantiated material correction, new collated original-source evidence, or a separately requested production integration—not repetitive micro-passes.
