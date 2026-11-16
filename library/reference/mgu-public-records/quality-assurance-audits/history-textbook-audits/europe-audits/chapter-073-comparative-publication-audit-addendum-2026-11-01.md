# MGU European History, Chapter 73 — Comparative Publication Audit Addendum

**Date:** November 1, 2026 (Pacific)  
**Purpose:** Evaluate Claude's later-uploaded `Pasted text(20261101-195841).txt` against the already approved publication-final HTML, **without reopening or overwriting the locked publication edition**.

## Disposition

**Existing publication-final edition remains authoritative and LOCKED.** The incoming Claude file is a publication candidate but does not supersede it. The earlier final edition already resolved the candidate's outstanding documentary source windows and numerical exercise, added narrative depth, corrected selected chronology, and passed responsive browser tests.

## Files and integrity

- **Incoming Claude file:** `Pasted text(20261101-195841).txt`, 215,692 UTF-8 bytes, SHA-256 `14b4d41773cccdf97a4b4d3d9aa7188877d218f1a5496d059d10fa1b7855da2b`.
- **Existing locked HTML:** `chapter-073-empire-consumption-and-the-transformation-of-europe.html`, 228,712 UTF-8 bytes, SHA-256 `8f1ee2f4897bff53f6e63ab8a0f463beef97b66ae57a8454037d93a82441bec0`.
- **Existing full audit:** `chapter-073-final-publication-audit-2026-11-01.md`.

## Structure and measured depth

| Test | Incoming candidate | Existing final |
|---|---:|---:|
| Numbered §§73.1–73.39 | 39 consecutive | 39 consecutive |
| Eight divisions | Yes | Yes |
| Unique IDs | 88 | 88 |
| Internal anchor links, all valid | 79 | 79 |
| Direct historical prose, §§73.1–73.38 | Approx. 16,668 words | Approx. 18,158 words |
| Primary source windows | 7 | 7 |
| Source windows 1 and 4 | Generic source-type descriptions | Named 1757 London Museum trade card/invoice and the identifiable Danish Sound Toll archival series |
| Quantitative study | No historical numerical series | Archival-established English Customs staff counts for 1688, 1702, 1714 |
| Page-level overflow at 1440, 900, 768, 390, 320px | None | None |
| JavaScript exceptions | None | None |

**Word-count method for this comparison:** Immediate `<p>` children of each numbered section, excluding feature boxes and educational apparatus; each apostrophized or hyphenated lexical unit counted as a word. The earlier publication report employed a slightly different tokenizer and reported 18,217 words; the minor difference is methodological, not an intervening manuscript change. The official final manuscript remains unmodified.

The final manuscript adds targeted substantive prose, while adjusting a few inaccurate or poorly substantiated passages. One later candidate paragraph on the post-1763 American taxation crisis was not included in the locked edition, consistent with the chapter's boundary reserving that detailed crisis for the later Atlantic revolutionary chapter. No newly found publication-critical omission requires reopening the final file.

## Targeted external historical verification

1. **Liverpool Old Dock, 1715:** Confirmed by VisitLiverpool and the Liverpool Maritime Society. https://www.visitliverpool.com/things-to-do-in-liverpool/attractions-in-liverpool/maritime-and-history/
2. **Casa de la Contratación move to Cádiz, 1717:** Confirmed by Spain's PARES archival catalog; decree of May 12, 1717 documented by Correos / historical studies. https://pares.cultura.gob.es/ParesBusquedas20/catalogo/autoridad/46426/imprimir
3. **Potosí, 1545; English Navigation Act, 1651; Bank of England, 1694; Commutation Act, 1784; Linnaeus, 1753:** Broad chronologies consistent with standard primary/heritage references. For Linnaeus's *Species Plantarum* and the Sloane collection, see https://www.nhm.ac.uk/discover/hans-sloane-physician-collector-botanist.html
4. **Zong atrocity and case:** Killings took place in 1781, insurance litigation in 1783, confirmed by London Museum. https://www.londonmuseum.org.uk/collections/london-stories/zong-massacre-trial/
5. **1786 Black Poor committee and Sierra Leone 1787:** Supported by Stephen J. Braidwood's historical study. https://academic.oup.com/liverpool-scholarship-online/book/43600/chapter-abstract/364851948
6. **HMS Bounty:** Bligh's voyage began in 1787 and mutiny occurred in April 1789. Royal Collection Trust https://www.rct.uk/collection/stories/the-libraries-of-george-iii/a-voyage-to-the-south-sea-for-the-purpose-of-conveying-the-bread-fruit-tree-to-the-west-indies
7. **Wedgwood medallion:** The motto *Am I Not a Man and a Brother?* is genuine; produced ca. 1787 and catalogued by the Victoria and Albert Museum. https://www.vam.ac.uk/articles/the-wedgwood-anti-slavery-medallion
8. **English Customs service figures:** Hannes Ziegler, *Journal of British Studies*, table 1, TNA CUST18 establishment records: 1,202 staff in 1688, 1,727 in 1702, 1,870 in 1714; preventive subset 41, 227, 280. They are official-establishment headcounts, not measures of trade volume or all paid workers. https://www.cambridge.org/core/journals/journal-of-british-studies/article/jacobitism-coastal-policing-and-fiscalmilitary-reform-in-england-after-the-glorious-revolution-16891702/3A45452D19BB22504D740783F77710B8

## Source provenance and interpretation

- The later Claude candidate openly labels source windows 1 and 4 as general source-type analyses, without verifying an individual document. That honesty is useful but falls short of the approved research model. The already locked edition improved the evidence by selecting London Museum object Z1704/38 for the consumption window and identifying the Danish Sound Toll Registers as a historical record series for the trade/finance window. The Sound Toll feature is **collection-level**, not a verified transcription of one ship record, and it should be described as such.
- The previous final's numerical exercise is preferable to an empty placeholder. It draws upon an identifiable peer-reviewed archival reconstruction and explains its denominator and limitations.
- The candidate's characterization of the debates among Williams, Inikori, Engerman, Pomeranz, Drescher, and Berg generally presents interpretive approaches rather than fabricating consensus. These remain syntheses, not a full historiographical literature review.
- The candidate's Hamburg insurance loss attribution following the 1755 Lisbon earthquake was overly specific without documentary support; the earlier final deliberately removed that assertion. Dutch investment in British debt is documented, but the exact magnitude should not be invented. The general relationship of Baltic grain exports and coerced agrarian labor is historically plausible but should not be presented as a single mechanical causal relationship.

## Browser test, November 1, 2026

Python Playwright with system Chromium loaded each file using `page.set_content()` at widths **1440, 900, 768, 390, 320 pixels**, height 900. At each width, the document scroll width equaled the viewport width, and no page-level JavaScript errors were observed. This confirms runtime/overflow behavior, but not pixel-perfect identity to the separate Chapter 2 HTML shell.

## Final judgment

**Do not replace or unlock the existing publication edition.** The later submitted candidate is not an improvement over the locked chapter; its open items were previously completed in the authoritative version. No additional expansion or micro-pass is justified by this submission. Proceed with the established `chapter-073-empire-consumption-and-the-transformation-of-europe.html` and its existing final audit.
