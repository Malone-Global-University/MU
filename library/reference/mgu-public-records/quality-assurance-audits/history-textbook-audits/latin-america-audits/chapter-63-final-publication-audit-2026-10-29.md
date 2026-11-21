# MGU Russian History — Chapter 63 Final Publication Audit

**Date:** October 29, 2026 (Pacific)  
**Chapter:** 63, *The Brezhnev Era: Stability, Superpower, and Stagnation*  
**Period:** 1964–1982; Part XI — The Post-Stalin Soviet Union  
**Decision:** **APPROVED FOR PUBLICATION — LOCKED**, subject to one pre-existing, series-wide narrow-screen table layout issue.

## Manuscripts compared

- Prior audit-corrected manuscript: `chapter-63-the-brezhnev-era-stability-superpower-and-stagnation-audit-corrected-working.html`.
- Claude's revised submission: `Pasted text(20261029-233849).txt`.
- Publication file: `chapter-63-the-brezhnev-era-stability-superpower-and-stagnation.html`.

## Structural and depth regression

- All **31 consecutive numbered sections** (§63.1 through §63.31), including the review checkpoint; six divisions in the original planned distribution of 5/6/4/4/7/4 substantive sections and one review.
- Claude added **two narrative paragraphs to each of §§63.6–63.30**, totaling **50 added paragraphs** across 25 sections. The first five historical sections and review checkpoint are unchanged.
- Direct narrative calculated from `<p>` children of historical section nodes, excluding all instructional feature boxes: **8,719 words before; 13,747 after** (regex-based count). Thus **about 5,028 new narrative words**, not 1,000 per expanded section.
- **78 unique HTML IDs**, no duplicates; **70 internal anchor links**, all valid.
- **54 opening/closing `<section>` pairs**, **117 `<div>` pairs**, 4 HTML tables.
- **22 instructional feature boxes** and all five Primary Source Windows preserved; the separate comparison table remains present.
- CSS and inline navigation JavaScript are character-for-character unchanged from prior audit-corrected manuscript (verified by extracted element-content comparison). JavaScript syntax checked successfully with Node `--check`.
- Prior three audit corrections remain preserved: official 1976–1980 growth figure of **4.3%**, Gromyko's **27 June 1968 USSR Supreme Soviet** attribution, and 1965 industrial-reform resolution **29 September adoption / 1 October Pravda publication**.

## Historical verification of added material

1. **SALT I (1972):** U.S. ICBM 1,054, Soviet ICBM 1,618, baseline SLBM 656 U.S./740 Soviet and conditional replacement ceilings of 710 U.S./950 Soviet: verified against the U.S. Department of State and treaty protocol: https://1997-2001.state.gov/global/arms/treaties/interim1.html and https://2009-2017.state.gov/t/isn/4795.htm.
2. **Vladivostok summit (1974):** 2,400 strategic delivery vehicles and 1,320 MIRVed systems each as a framework for SALT II, not a completed SALT II treaty: https://1997-2001.state.gov/global/arms/treaties/salt2-1.html.
3. **Average monthly earnings:** Soviet official series of wages of workers and employees: 122.0 rubles (1970), 168.9 (1980), not every citizen's earnings: https://www.istmat.org/node/9304.
4. **18 August 1968 Moscow Warsaw Five meeting:** corroborated in archival publication of the Czechoslovak crisis documents, in the sequence following the Soviet Politburo's 17 August decision: https://nsarchive.gwu.edu/prague-spring-68.
5. **Dipoli CSCE preparatory negotiations:** began 22 November 1972; lasted to June 1973: https://www.osce.org/files/f/documents/a/4/585724.pdf and https://www.osce.org/event/mc_1973.
6. **April 1978 Georgian language demonstrations:** supported by the Institute for Development of Freedom of Information in Georgia and 1978 Georgian SSR constitution: https://idfi.ge/en/14_april and https://rrc.ge/law/Gkon_1978_04_15_e.htm.
7. **1969 Soviet probing of U.S. officials on the possibility of strikes against Chinese nuclear facilities:** directly established by U.S. diplomatic records; these contacts are not evidence that a strike order was issued: https://history.state.gov/historicaldocuments/frus1969-76v34/d66 and https://history.state.gov/historicaldocuments/frus1969-76v34/d70. The existing qualified wording was retained.
8. **Poland, December 1980:** The 5 December Warsaw Pact Moscow meeting did not authorize invasion, despite contemporaneous intelligence warnings. See https://www.jstor.org/stable/10.7829/j.ctt2jbnww and https://history.state.gov/historicaldocuments/frus1977-80v06/d312. The ungrounded report that Brezhnev required a Polish invitation was removed.
9. **The Polish crisis in December 1981:** contemporary Soviet Politburo records show clear resistance to committing Soviet troops: https://nsarchive.gwu.edu/sites/default/files/documents/1981.12.10%20Session%20of%20Politburo%20CCCPSU%20to%20the%20Questionof%20Situation%20in%20Poland.pdf.
10. **Economic historians:** William Easterly and Stanley Fischer's 1995 *The Soviet Economic Decline* attributed falling growth importantly to diminishing returns on capital, *not* a measured sustained decline in the TFP growth rate over 1950–1987. Corrected: https://www.nber.org/papers/w4735 and https://academic.oup.com/wber/article-abstract/9/3/341/1666811. The named Susanne Schattenberg biography is real: *Brezhnev: The Making of a Statesman* (Bloomsbury Academic, English edition 2021/2022): https://www.bloomsbury.com/us/brezhnev-9780755642106/.

## Four final localized corrections made directly in publication candidate

1. **§63.11:** Corrected characterization of Easterly–Fischer's total-factor-productivity findings; the paper's emphasis on diminishing returns to capital is now explicit.
2. **§63.13:** Clarified that 122 / 169 rubles are official **average monthly wages of workers and employees** rather than all Soviet incomes.
3. **§63.27:** Precisely identified the Georgian draft-constitution language provision, rather than implying all Soviet republic constitutions removed protections in the same way.
4. **§63.29:** Removed unsupported requirement for a Polish request/invitation attributed to Brezhnev in December 1980; replaced it with verified information on the Warsaw Pact meeting and contemporary intelligence concern.

These edits do not alter the HTML architecture, planned topic allocation, source windows, navigation, stylesheets, or scripts. The five Primary Source Windows remain labeled as paraphrases. Full source-specific bibliographic entries can be placed in the textbook's planned bibliography rather than adding nonessential edits to this locked chapter.

## Browser/technical validation

Chromium with Playwright `page.set_content`, JavaScript page errors monitored. A tested internal anchor `#s63-24` navigates correctly.

| Viewport | Document scroll width | JavaScript errors | Result |
| --- | ---: | ---: | --- |
| 1440 px | 1440 px | 0 | Pass |
| 900 px | 900 px | 0 | Pass |
| 390 px | 439 px | 0 | Shared table overflow: 49 px |
| 320 px | 439 px | 0 | Shared table overflow: 119 px |

This table overflow is inherited from the series-wide `.chron-table` CSS. Correct once in the common template as a separate series maintenance task. It does not require reopening this chapter's narrative or template-specific styling individually.

## Publication identity

- **HTML filename:** `chapter-63-the-brezhnev-era-stability-superpower-and-stagnation.html`
- **File bytes (UTF-8):** 208,574
- **SHA-256:** `1fa830df3603c0f43aecd43b5ea7e617d3e0d8f9bbdffde2a7cef85347415848`

**Final judgment: APPROVED FOR PUBLICATION — LOCKED.** No further content expansion or micro-pass is recommended. Proceed to Chapter 64, *Everyday Life, Dissent, Nationalities, and the War in Afghanistan*.
