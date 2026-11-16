# MGU Russian History — Chapter 65 Final Publication Audit

**Chapter:** 65 — Gorbachev, Perestroika, and Glasnost  
**Part:** XI — The Post-Stalin Soviet Union  
**Audit date:** October 30, 2026 (Pacific)  
**Decision:** APPROVED FOR PUBLICATION — LOCKED (with an inherited narrow-screen responsive-table caveat)

## Files

- Claude supplied draft: `/mnt/data/Pasted text(20261030-215451).txt` (228,944 bytes UTF-8).
- Audit-corrected publication HTML: `/mnt/data/chapter-65-gorbachev-perestroika-and-glasnost.html` (227,735 bytes UTF-8).
- Publication HTML SHA-256: `c86b29f68ed1bffaff180e10d7025d03cfc9178f790cbe06b1210eac26180700`.

## Structural and pedagogical verification

- 36 consecutive numbered sections, §§65.1–65.36; 35 substantive and final review §65.36.
- Six divisions: 4 / 5 / 7 / 5 / 7 / 7 historical sections.
- 26 in-section teaching feature boxes, including six clearly labeled **paraphrase** primary-source windows; four HTML tables and all front/review apparatus.
- 81 unique element IDs; 79 internal `#` links, all resolving; 53 opening and closing `<section>` tags, 144 balanced `<div>` pairs, four balanced tables.
- Direct historical narrative: approximately 14,946 words across §§65.1–65.35, excluding feature boxes and chapter review (regex-based count). Final §65.36 direct prose: approximately 468 words. Full extracted document text including teaching features, all apparatus and headings: approximately 26,430 words.
- Shared CSS exactly matches publication-final Chapter 63 except for the additional `.division-banner` rules; JavaScript identical.
- No changes to structure, features, IDs, CSS or JS during audit corrections.

## Five publication corrections applied (no trimming)

1. **§65.4 vocabulary feature:** replaced an imprecise derivation of *glasnost* “from golos” with an accurate English gloss (“openness” or “publicity”).
2. **§65.30:** corrected chronological inversion. November 1985 Geneva summit **preceded** Gorbachev's January 1986 nuclear abolition proposal. Changed “Before Geneva” to “After Geneva.”
3. **§65.31:** replaced an outcome dated mid-1991 (roughly 2,700 INF missiles destroyed) with an accurate contemporaneous statement of the treaty's three-year elimination obligation and advanced dismantling by late 1990. The full final tally belongs outside the chapter's 1990 cutoff.
4. **§65.35:** removed narration of Warsaw Pact military dissolution in 1991; states instead the pact still existed but faced an uncertain role at the end of 1990.
5. **§65.35:** recast the prospective shift of Comecon/East European trade to hard-currency settlement without narrating the 1991 trade collapse. Retains the analytical point that the Soviet economic crisis reduced the political benefits of improved East–West relations.

## Historical and documentary checks

Checks corroborated principal dates, legal descriptions and estimates in the uploaded draft. These checks are targeted corroboration of high-stakes and uncertainty-flagged claims; they do not constitute authentication of every sentence or quantitative claim. Key sources used:

- WHO Chernobyl Forum (Sept. 5, 2005): https://www.who.int/news/item/05-09-2005-chernobyl-the-true-scale-of-the-accident . Care taken not to conflate directly observed deaths with projected excess radiation-related mortality.
- IAEA INSAG-7 (1992): https://www-pub.iaea.org/mtcd/publications/pdf/pub913e_web.pdf . Confirms relative roles of design and operating deficiencies.
- ILO NATLEX, Law on State Enterprise of June 30, 1987; effective Jan. 1, 1988: https://www.ilo.org/dyn/natlex/natlex4.detail?p_count=482&p_country=SUN&p_isn=3568&p_lang=en .
- Law on Cooperatives, May 26, 1988: https://www.consultant.ru/document/cons_doc_LAW_1361/ ; IMF account of July 1 implementation: https://www.elibrary.imf.org/abstract/book/9789264134683/ch003.xml .
- Inter-Parliamentary Union 1989 elections: https://data.ipu.org/election-summary/HTML/2263_89.htm . Confirms 2,250 seat framework and noncompetitive constituencies.
- US National Security Archive: Jan. 14, 1986 Gorbachev letter: https://nsarchive.gwu.edu/document/22092-document-01-general-secretary-mikhail-gorbachev . Confirms **after** Geneva 1985.
- US Department of Defense history of INF treaty and 1991 tally: https://www.acq.osd.mil/ncbdp/nm/NMHB2020rev/chapters/chapter12.html .
- Romanian AGERPRES December 1989 revolution historical statistics: https://agerpres.ro/documentare/2025/12/21/documentar-revolutia-romana-din-decembrie-1989-21-22-decembrie--1513664 . Around 1,104 deaths.
- OSCE Paris Summit 1990: https://www.osce.org/event/summit_1990 and Charter of Paris signed Nov. 21, 1990: https://www.osce.org/documentation-centre-in-prague/471195 .
- Contemporary Gorbachev March 1990 election and Article 6: https://www.washingtonpost.com/archive/politics/1990/03/14/moscow-creates-strong-presidency/4b768bde-e790-4412-b674-4972d736bce3/ .
- Contemporary Yeltsin criticism of elite perks at 1986 27th Congress: https://www.washingtonpost.com/archive/politics/1986/03/03/party-members-perks-make-some-see-red-in-moscow/4f17b4d7-4364-4aef-9cbd-34082b953879/ .

All six source windows distinguish paraphrase from quotation. Verbatim excerpt replacement is NOT a prerequisite for publication; their identities, dates, and general summaries are source-consistent. For academic apparatus, full bibliographic references may later be added consistently at book level rather than inserting unsourced quotations.

## Chromium regression

Tested corrected HTML in Chromium at four viewports with JavaScript enabled and no runtime errors:

| Viewport | Document scroll width | Result |
|---|---:|---|
| 1440 px | 1440 px | Pass |
| 900 px | 900 px | Pass |
| 390 px | 423 px | 33 px inherited table overflow |
| 320 px | 423 px | 103 px inherited table overflow |

The mobile issue originates from wide `.chron-table` cells and the common shell and is not a Chapter 65-specific regression. Fix at series-template level; preserve the locked text and audit provenance.

## Publication decision

**APPROVED FOR PUBLICATION — LOCKED, October 30, 2026.** The direct narrative is below a flexible aspirational 18,000–23,000 words, but the chapter has substantive treatment in 35 historical sections, ~14,946 direct narrative words plus considerable teaching apparatus. No compression or arbitrary expansion is indicated. The five targeted corrections resolved publication-level factual and scope issues without removing depth. Proceed to Chapter 66, preserving its exclusive treatment of Soviet republican sovereignty, the August 1991 coup, and final dissolution.
