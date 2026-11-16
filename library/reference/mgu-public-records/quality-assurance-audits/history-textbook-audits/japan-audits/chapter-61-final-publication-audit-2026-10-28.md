# MGU Japanese History — Chapter 61 final publication audit

**Date:** October 28, 2026 (America/Los_Angeles; chapter batch uploaded Oct 29 UTC).  
**Chapter:** 61 — *The Russo-Japanese War and the Making of a Great Power*.  
**Decision:** **APPROVED FOR PUBLICATION — LOCKED**.  
**User/Claude submitted:** `Pasted text(20261029-063708).txt`.  
**Publication-final:** `chapter-61-the-russo-japanese-war-and-the-making-of-a-great-power.html`.  
**File bytes:** 156,068.  
**SHA-256:** `07fb62387686e88cb461c80c9ee4bb9c423592f24f8ed17f963d3696eb8125f5`.

## Manuscript structure and depth

- **32 numbered sections**, 61.1–61.32, in **six divisions**; §§61.1–61.31 are historical narrative and §61.32 is a review checkpoint.
- **Approximately 7,902 direct historical narrative words**, excluding instructional boxes and front/review matter. Section lengths range 159–323 words; uneven length accepted based on density, not formulaic quotas.
- **16 educational feature boxes**, including three primary-source windows, two map studies, historical debate, comparative naval table, five-perspectives treatments, finance feature, and chronological teaching apparatus.
- 68 unique HTML IDs, 68 functioning fragment links, 32 numbered sections; HTML tags balance: 49 section pairs, 96 div pairs, 3 tables.
- The approved Japanese chapter 59's original CSS rules and Javascript are retained; only Claude's division/feature styles and a horizontal table-scroll rule appended. JS passes `node --check`.
- Headless Chromium tested at **1440, 900, 390, 320 px**: **zero JS exceptions and zero horizontal page overflow**. Three tables have local horizontal scrolling rather than forcing the page wider on mobile.

## Independent fact checks — priority claims

| Claim | Audit conclusion and principal evidence |
|---|---|
| Japanese victory origins and war chronology | Main dates and diplomatic course supported by U.S. Office of the Historian and JACAR, https://history.state.gov/milestones/1899-1913/portsmouth-treaty and JACAR Russo-Japanese War exhibition. |
| February 23, 1904 Japan–Korea Protocol | Paraphrases of Articles III, IV and V consistent with contemporary U.S. diplomatic transmission, https://history.state.gov/historicaldocuments/frus1904/d430. |
| Port Arthur, Yalu, Nanshan, Liaoyang, Sha-ho, Mukden losses | Approximate ranges retained; U.S. Army *Fires Bulletin* comparative battle table gives Yalu ~1,100 Japanese/2,500 Russian, Nanshan ~4,600 Japanese, Liaoyang ~23,600 Japanese/~19,000 Russian, Sha-ho ~20,000 Japanese/~40,000 Russian, Mukden ~71,000 Japanese/~100,000 Russian; counts vary by category and source. https://tradocfcoeccafcoepfwprod.blob.core.usgovcloudapi.net/fires-bulletin-archive/1988/APR_1988/APR_1988_FULL_EDITION.pdf. |
| Total Japanese war expense and foreign borrowing | ~¥1.9 billion, ~40% via overseas loans independently supported by Mark Metzler, *Lever of Empire* (2006), chapter 3, https://doi.org/10.1525/california/9780520244207.003.0004. Claude gives no exact loan interest rates, so no unverifiable claim retained. |
| Tsushima outcome | Broad Russian losses and Japanese victory supported by U.S. Naval Institute naval history, https://www.usni.org/magazines/naval-history-magazine/2012/may/voyage-tsushima. Voyage distance now described as approximately 18,000 miles rather than specifying nautical miles without support. |
| Treaty of Portsmouth | Treaty articles II, III–VII, IX, XI and XIII and absence of indemnity checked against https://history.state.gov/historicaldocuments/frus1905/d915. |
| Hibiya riots | Riot 5–7 Sep 1905, martial law on Sep 6 and approximate fatality/arrest language supported by JACAR army report C03026848900 and Privy Council record A03033542200, https://www.jacar.go.jp/english/exhibition/nichiro/19050905_2.htm and https://www.jacar.go.jp/english/exhibition/nichiro/19050906.htm; academic discussion https://www.cambridge.org/core/journals/international-journal-of-asian-studies/article/toward-a-genealogy-of-the-police-idea-in-imperial-japan-a-synthesis/E02FCA60268AC6B6E33F97BBE7CA7313. |
| South Manchuria Railway | Gotō Shinpei as first president and formation in 1906 corroborated by JACAR glossary, https://www.jacar.go.jp/english/exhibition/glossary_en/term3/0010-0080-0090-0010-0010.html. |
| Sakhalin Indigenous populations | Added guarded account of the effect of the imperial boundary on Ainu, Nivkh and Uilta; scholarly bases include Tessa Morris-Suzuki, Cambridge/ANU, and Sofya Lim's study of Sakhalin Ainu migration, https://researchportalplus.anu.edu.au/en/publications/indigenous-people-between-empires-sakhalin-through-the-eyes-of-ch/ and https://eo.iea.ras.ru/en/article/10567/. |

## Narrow publication-proof edits

1. Replaced an unwarranted reductive characterization of Qing military modernization in the opening.
2. Removed the unsupported claim that the Yalu River battle was the first major modern defeat of a European army by an Asian army (§61.9).
3. Normalized the Russian Baltic Fleet journey from uncertain “nautical miles” to commonly documented “miles” in the opening, §61.18, and the table.
4. Added one carefully sourced paragraph on Indigenous agency, prior displacement, postwar movements, and the impact of the Sakhalin partition (§61.21).
5. Identified specific JACAR primary records in the Hibiya Primary Source Window (§61.28).
6. Wrapped the three HTML tables in local-scroll containers and added the required responsive CSS.

**No change** to numbered section count, order, section/feature IDs, sidebar links, approved core CSS, or JavaScript. No further substantive Claude pass needed.

## Browser method

The working environment blocks local `file://` navigation. The HTML was injected directly into the Chromium DOM with Playwright (`page.set_content`) and viewport/device-width checks were performed. This exercises the full inline stylesheet and inline script. No external resources were necessary. **Pass** at all four tested widths.
