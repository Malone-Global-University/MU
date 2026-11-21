# MGU European History, Chapter 138 — Consolidated Publication Audit

**Title:** Financial Crisis, Sovereign Debt, and Brexit  
**Volume:** VI — Cold War, Integration, and Modern Europe  
**Part:** XX — European Integration and the Post-Cold War Order  
**Historical cutoff:** November 18, 2026  
**Editorial decision:** **APPROVED for first-edition scholarly textual HTML publication, editorial lock November 18, 2026**, subject to the deployment limitations below.

## Source and intervention

The final HTML is a direct, selective revision of Claude's uploaded original `Pasted text(20261119-074029).txt` (245 KB). Its established Chapter 2-family CSS tokens, sections, narrative argument, navigation structure, review materials, and teaching features were retained. The historical corrections and replacement statistics are based on institutional documents and published statistical series, not estimates from memory.

## Structure and content controls

| Publication criterion | Verified final result |
|---|---|
| Numbered sections | 20, §§138.1–138.20 |
| Division banners | Five, four sections in each |
| Direct narrative words | **13,592** (sum of direct paragraph words in numbered sections, excluding nested teaching features; regex-based count) |
| Narrative target | 12,000–15,000 — **PASS** |
| Primary-source windows | 8 |
| Historical Vocabulary | 3 |
| Geography Studies | 3 |
| Historical Debates | 2 |
| Quantitative Studies | 2 |
| Everyday Life studies | 2 |
| Multiple Perspectives | 1 |
| Cause and Effect | 1 |
| Continuity and Change | 1 |
| Timeline Study | 1 |
| Comparative Table | 1 |
| Total teaching features | **25/25** |
| Opening and review apparatus | Present |
| Scholarly bibliography | Nine entries, retained |
| Distinct HTML IDs | 70 |
| Duplicate IDs | 0 |
| Broken internal hash anchors | 0 |
| Source windows with direct institutional links | **8/8** |
| Total HTTPS anchors | 36, including documentary and quantitative references |

### Historical corrections

1. **Greece, July 2015 government-bond yields:** The OECD annual 10-year benchmark series reports 9.67% as the 2015 annual average. The Bank of Greece reported a distinct **19.3% yield on July 8, 2015**, for the 10-year bond maturing in February 2025. Both now appear with correct periods and descriptions; the earlier ambiguous 9–11% “midyear spike” presentation was replaced.
2. **UK–EU fisheries:** The May 2025 political understanding was formally implemented by **Specialised Committee on Fisheries Decision No 1/2025, June 19, 2025**, establishing reciprocal access for **July 1, 2026–June 30, 2038**. It is now distinguished from negotiations remaining open before the November 20, 2026 summit.
3. **UK leadership:** Keir Starmer announced his resignation **June 22, 2026**; Andy Burnham became prime minister **July 20, 2026**. The postponement of the earlier summit is described consistently with this sequence.
4. **Erasmus+:** An agreement on UK participation was announced **December 17, 2025**, with association **starting in 2027**, not already operational in 2025/2026.
5. **Brexit economics:** The OBR’s approximately **15% lower long-run trade intensity and 4% lower potential productivity** estimates remain expressly labeled model-based counterfactuals, not observed declines.
6. **IMF and British rescue sums:** Source windows now differentiate the IMF's 2008 evolving loss projections from realized losses, and the UK's **£50bn recapitalization, £250bn debt guarantee, and at least £200bn liquidity** programs from final fiscal outlays.
7. **Cutoff:** The November 20 UK–EU summit is consistently treated as *scheduled after* November 18, not completed by the chapter's cutoff.

### Quantitative Study I — five countries, financial crisis

Removed memory-derived approximate multi-indicator ranges and substituted exact **as-published** values from Eurostat's 2015 historical compilation *The European Union and the African Union*, the following numbered tables:

- **Table 5.2.b:** real GDP annual growth at constant prices, 2009 and 2013 (`tec00115`)
- **Table 6.3.b:** general-government budget balance, % GDP, 2009 and 2013 (`gov_10a_main`)
- **Table 6.4.b:** general-government gross debt, % GDP, 2007 and 2013 (`gov_10dd_edpt1`)

Country coverage: Germany, United Kingdom, Ireland, Spain, Greece. The source's **2015 publication vintage** is explicitly stated; values were not falsely presented as the most recent revised 2026 downloads. Dataset and documentary links are embedded in the table's source note. The different observations answer different questions: growth rates are annual flows, government debt is a stock relative to nominal GDP, and deficit measures are annual fiscal flows.

**Reference:** https://ec.europa.eu/eurostat/documents/3217494/7142142/KS-FQ-15-001-EN-N.pdf/a829bd49-eaec-4656-ac04-9028c93d6258

### Quantitative Study II — Greece, 2009–2018

Replaced mismatched peaks, annual averages, and undated rounded estimates with reproducible annual series:

| Indicator | Series and publisher |
|---|---|
| General-government gross debt (% GDP) | IMF World Economic Outlook, `GGGDTAGRC188N`, reproduced at Federal Reserve Bank of St Louis (FRED) |
| Real GDP (2007 = 100) | Penn World Table 11.0, `RGDPNAGRA666NRUG`, original levels explicitly normalized against 2007 |
| Unemployment (% labor force 15+) | OECD annual series, `LRUNTTTTGRA156N` |
| 10-year benchmark bond yield, annual average | OECD series, `IRLTLT01GRA156N` |
| July 8, 2015 yield spike | Bank of Greece, *Annual Report 2015*, chapter IX |
| Program commitments and EFSF/ESM disbursements | IMF May 2010 report and ESM official program explainer |

Each value is now labeled by metric, year, and origin. The program tables separate *envelope/commitment* from actual *disbursement* and distinguish creditor loans from the 2012 private-sector bond write-down. This is a linked-source composite, **not an assertion that all four series are produced by Eurostat or AMECO**.

Reference series: 

- https://fred.stlouisfed.org/data/GGGDTAGRC188N
- https://fred.stlouisfed.org/data/RGDPNAGRA666NRUG
- https://fred.stlouisfed.org/data/LRUNTTTTGRA156N
- https://fred.stlouisfed.org/data/IRLTLT01GRA156N
- https://www.esm.europa.eu/assistance/greece/explainer-esm-and-efsf-financial-assistance-greece
- https://www.bankofgreece.gr/Publications/Annrep2015.pdf

## Documentary provenance

All eight primary-source windows are retained as quotations or explicitly identified editorial paraphrases. The original generic institution homepages are supplemented by direct verified document links to the IMF's April and October 2008 reports, the UK's October 8, 2008 parliamentary statement and Bank of England announcement, the Maastricht treaty text, Greek program documents, both Draghi/OMT ECB texts, Council Regulation 1024/2013, the Electoral Commission's referendum report, the EU–UK Withdrawal Agreement and TCA, and the May 2025 UK–EU statement. Links to the legally completed 2025 fisheries decision and the December 2025 Erasmus+ agreement documentation are included separately.

## HTML and browser verification

Rendered the **final HTML content in Chromium** at viewport widths **1440, 768, 390, and 320 pixels** using the embedded file content. Automated checks reported:

| Viewport | Document scroll width | Page overflow | Navigation |
|---|---|---|---|
| 1440 | 1440 | None | Sidebar shown |
| 768 | 768 | None | Mobile contents shown; selection works |
| 390 | 390 | None | Mobile contents shown; selection works |
| 320 | 320 | None | Mobile contents shown; selection works |

The chronology table remains wider than the viewport at 390/320 px but scrolls *inside its own container*; the document does not overflow. Table content is not hidden or truncated. Mobile menu opens, scroll-links navigate to §138.19, and menu closes. **No JavaScript page errors** were detected. This check used `set_content` in Chromium because direct file/localhost navigation is administratively blocked in the sandbox; it therefore establishes rendering of the HTML document, not a live hosted server or network verification of external destinations.

## Publication and deployment limitations

- The original Chapter 2 model was **not independently supplied/compared** for exact byte-for-byte CSS or shell equivalence; the original Chapter 138 styling was preserved where practical.
- The Chapter 137 previous-link filename was verified in the delivered conversation files. The Chapter 139 file does not yet exist in the working set; its navigation label is retained as **nonclickable** until the actual deploy path is confirmed.
- Outbound URLs are grounded in located official institutional records, but browser QA **did not exhaustively load and retest all external sites**, some of which require JavaScript or may later move.
- GDP, debt, and unemployment series can undergo retroactive revision; the statistical source vintage and different producers are documented deliberately.
- Site-level deployment, content-management-system pathing, and live MGU website testing have not been performed.

## Final editorial decision

**APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — EDITORIAL LOCK, NOVEMBER 18, 2026.** The chapter requires no further narrative expansion or structural revisions. Deployment verification remains an independent step.
