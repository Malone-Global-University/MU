# MGU European History — Chapter 72 Final Publication Audit

**Audit date:** October 31, 2026, Pacific.  
**Title:** *British and French Overseas Expansion*.  
**Volume/part:** III, *Renaissance, Reformation, Empires, and States*; Part XI, *Maritime Expansion and European Empires*.  
**Disposition:** **APPROVED FOR PUBLICATION — LOCKED.**

## A. Version and provenance

Claude's revised publication candidate uploaded as `/mnt/data/Pasted text(20261031-212157).txt`:
- File size: **272,674 UTF-8 bytes**.
- SHA-256: `a3b32c95b87e6b776647f7a3ea2238166b665162b5f18b15580da1996a4304c5`.

Approved publication-final manuscript at `/mnt/data/chapter-072-british-and-french-overseas-expansion.html`:
- File size: **273,606 UTF-8 bytes**.
- SHA-256: `b9d67cdd5b0aab43e753b102d0e4523e44337d3446c65a925b8bd1471199ae2f`.
- Line endings: LF. No substantive historical narrative removed.

## B. Plan and narrative audit

- Correct title, chapter, volume, and part. **42** consecutively numbered sections in eight divisions, section allocations **4/7/7/5/6/6/5/2**.
- **22,477** direct historical narrative words after final publication corrections, counting only direct `<p>` descendants of sections §72.1–§72.42, excluding headings, all feature boxes, chapter opening and final review apparatus.
- Division narrative counts: I **2,172**; II **4,262**; III **3,363**; IV **2,089**; V **3,048**; VI **3,582**; VII **2,718**; VIII **1,243**. Expanded depth is sufficient; no arbitrary reduction to target length justified.
- All six planned primary-source paraphrase windows, four map studies, two historical debates, timeline, quantitative study, everyday life, perspectives, continuity/change, cause/effect, opening and review apparatus survive.
- Boundaries preserved: no comprehensive repetition of Chs. 68–71; end at 1763–65; imperial social effects to Ch. 73, later Asian territorial empire to Ch. 105.

## C. Independent factual/source verification

### Checked and found supported

1. The reported **347 deaths** in the 1622 attack on Virginia were attributed appropriately to Edward Waterhouse's contemporary English account; the chapter does not claim a modern independent headcount.
2. **1701 Great Peace of Montréal:** August 4; prominent Indigenous diplomacy; roughly 1,300 Indigenous delegates; estimates of **38 or 39 nations** vary according to classification and archival treatment. Source: Pointe-à-Callière, https://pacmusee.qc.ca/en/treaty-great-peace-montreal/ and https://pacmusee.qc.ca/en/stories-of-montreal/article/the-great-peace-of-montreal/.
3. **1685 card money** issued in New France by Intendant Jacques de Meulles: Bank of Canada, https://www.bankofcanada.ca/2008/11/quest-confidence-400-years-money/.
4. **Battle of Plassey:** Company force approximately 3,000 against Siraj ud-Daulah's much larger army, conventional estimate roughly 50,000; reported British losses 22 killed and 50 wounded and more than 500 opponent casualties. National Army Museum, https://www.nam.ac.uk/explore/battle-plassey.
5. **Robert Clive's personal benefit** after Plassey: circa £234,000 in presents according to English Heritage, https://www.english-heritage.org.uk/visit/london-statues-and-monuments/robert-clive. Chapter's `around £230,000` is sound.
6. **Acadian deportations:** over 10,000 people in the wider 1755–63 expulsion; Parks Canada, https://www.pc.gc.ca/apps/dfhd/page_nhs_eng.aspx?id=1508, and Grand-Pré https://parks.canada.ca/lhn-nhs/ns/grandpre/culture/histoire-history. Initial 1755 Nova Scotia deportees commonly estimated close to 6,000. Historical estimates depend on timeframe/geography.
7. **Treaty of Paris (1763):** territorial and Caribbean island transfers matched treaty text, including Saint Lucia to France, Grenada/Dominica/St Vincent/Tobago to Britain; Yale Avalon, https://avalon.law.yale.edu/18th_century/paris763.asp.
8. **Original scope and later extension of the 1685 Code Noir ordinance:** BnF/Jean-François Niort, https://heritage.bnf.fr/france-ameriques/en/code-noir-black-code.
9. **Ghulām Husain Khan's Siyar al-Mutaʾakhkhirīn** composed c. 1780–1784, a retrospective eighteenth-century narrative; John Rylands manuscript records, https://www.digitalcollections.manchester.ac.uk/view/MS-PERSIAN-00898/.
10. **1606 Virginia charter** identified, paraphrase themes consistent with text; Yale Avalon, https://avalon.law.yale.edu/17th_century/va01.asp. **Navigation Act 1660** identifies correct statute and basic requirements; enacted text, https://www.legislation.gov.uk/aep/Cha2/12/18/enacted.
11. British mainland colonial population c.1700 roughly one quarter million and c.1760 roughly 1.6 million; New France population ranges appropriately confined to French Canada/settler population and not conflated with Indigenous population. British debt c.£75 million to over £130 million across the Seven Years' War is plausible historical rounding.

### Limits

This is a targeted specialist historical audit of high-risk quantitative and chronological claims, important interpretive safeguards and the source windows, not a claim that every statement in 22,000+ words has a line-by-line archival citation. All six source windows are labeled paraphrases; their bibliographic entry points have been supplied. **No literal quotation is introduced.** The Siyar paraphrase is treated as a retrospective thematic summary, not an attested verbatim translation.

## D. Narrow final manuscript corrections

- The chronology preview for **1675–76 Metacom's War** now describes the devastation and English territorial expansion without incorrectly implying an end to all Indigenous military or political capacity.
- In **§72.34**, the Acadian deportation discussion now differentiates the roughly 6,000 removed from Nova Scotia in the initial 1755 operation from **more than 10,000** across the wider expulsion, removing a misleading range with a too-low undifferentiated lower bound.
- All **six** primary-source windows now include direct documentary-reference links (Virginia Charter; Montréal Peace; Code Noir via BnF historical/provenance study; Navigation Act; Treaty of Paris; Siyar manuscript catalog). Each remains explicitly a paraphrase, not a literal quotation.
- Publication-candidate HTML comment updated to publication-final status. No substantive sections, review sets, JavaScript, or CSS removed or rewritten.

## E. HTML and browser regression

- **88** IDs; **88** unique; **0** duplicates.
- **80** actual `<a href="#...">` fragment links; **0** missing targets. JavaScript string literals are not incorrectly counted as links.
- **42** numbered HTML sections; **6** primary-source windows; **4** map studies; **2** debate boxes; **2** tables; **1** script.
- Model Chapter 1's scroll-highlighting JavaScript is **byte-for-byte identical** (inside the `<script>` element). The inherited model CSS remains unchanged by the final micro-corrections; the earlier mobile chronology containment remains in place. An original Chapter 2 artifact was not supplied for a strict bytewise comparison.
- JavaScript independently passes `new Function(...)` syntax check with Node.
- Chromium via Playwright `set_content` test at **1440, 900, 768, 390, and 320px**: page width equal to viewport at each, **no page-level horizontal overflow**, **no JavaScript exceptions**, inner chronology tables horizontally scroll at narrow mobile widths.

## F. Verdict

**APPROVED FOR PUBLICATION — LOCKED (October 31, 2026, Pacific).** The chapter's historical depth is sufficient; the source and numerical issues flagged by Claude have been verified or appropriately qualified; and the corrected final HTML passes structural and responsive browser regression. Do not reopen for general length trimming or iterative micro-passes. Proceed to Chapter 73, *Empire, Consumption, and the Transformation of Europe*.
