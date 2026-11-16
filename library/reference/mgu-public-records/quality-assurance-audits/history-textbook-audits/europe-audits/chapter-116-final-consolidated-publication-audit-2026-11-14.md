# MGU European History — Chapter 116: Final Consolidated Publication Audit

**Audit date:** November 14, 2026 (America/Los_Angeles)  
**Series:** *European History: Antiquity, Christendom, States, Empires, and Modern Europe*  
**Volume:** V — World Wars and European Catastrophe  
**Part:** XVII — World War I and the Crisis of European Order  
**Chapter:** 116 — *The Spanish Civil War, Appeasement, and the Road to World War II*  
**Publication HTML:** `chapter-116-the-spanish-civil-war-appeasement-and-the-road-to-world-war-ii.html`  
**Final UTF-8 size:** **220,867 bytes**  
**SHA-256:** `30724d61c849d81986136964400287cdf62cd6be1c733b4539ecb0afee23271b`  
**Short byte-identical alias:** `ch116.html`  
**Original submitted source:** `Pasted text(20261114-085614).txt`, **221,054 bytes**, SHA-256 `d5bb61445fb5ed787cb8664880b89c268954929b1ee6bcf2ebb6e9004ebdbba6`.

## Publication decision — APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — LOCKED

The original full-length chapter was revised directly in one targeted correction pass after the first-build publication audit. The existing twenty-section/five-division scholarly content was retained without a wholesale rewrite or indiscriminate pruning. The material Locarno misstatement and four historical/terminological issues were corrected. A documentary citation was added to the original Locarno Rhine Pact, the guide's long displayed URLs were converted to descriptive link text without changing their destinations, and a responsive CSS rule prevents archival links from widening the page. An unrelated decorative mobile header overlap identified in the final screenshot was removed at widths of 480px or less. All quantitative, internal-navigation, and browser tests passed.

**Scope of approval:** first-edition scholarly textual HTML for local distribution/publication preparation. This does **not** certify exhaustive original-language archival collation, licensed or embedded atlas plates, exact byte-for-byte parity with the Chapter 2 master template, or live deployment to maloneuniversity.org. The documentary guide includes identifiable records and wider archival collections; entries were not exhaustively collated page by page, and the Munich source window continues to identify its text as an editorial paraphrase, not a verified quotation.

## 1. Binding quantitative and structural compliance

| Requirement | Binding target | Verified final | Disposition |
|---|---:|---:|---|
| Numbered narrative sections | Exactly 20 | **20** | PASS |
| Thematic division banners | Exactly 5 | **5** | PASS |
| Direct historical narrative words | 12,000–14,000 | **13,940** (whitespace), **13,949** (word-token regex) | PASS |
| Narrative paragraphs in numbered sections | Substantive | **96** | PASS |
| Integrated instructional features | Exactly 11 | **11** | PASS |
| Learning objectives | 10 | **10** | PASS |
| Guiding questions | 8 | **8** | PASS |
| Chronology preview | 30 dated entries | **30** | PASS |
| Vocabulary preview | 30 distinct terms | **30** | PASS |
| Matching glossary | 30, exact preview alignment | **30**, all matching | PASS |
| Front matter people/groups/places | 18–25 | **22** | PASS |
| Back matter identification | 18–25 | **22** | PASS |
| Opening direct paragraphs | 6–9 | **7** | PASS |
| Historical context paragraphs | 4–6 | **5** | PASS |
| Summary paragraphs | 7–9 | **8** | PASS |
| Reflection paragraphs | 3–5 | **4** | PASS |
| Documentary source guide | 20–26 entries | **25** | PASS |
| Research project | Three crises, ≥8 documents, ≥4 scholarly works | Specified in original full-build research assignment | PASS |
| IDs, all unique | No duplicates | **56 IDs / 0 duplicates** | PASS |
| Internal anchors | No broken references | **102 fragment links / 0 broken** | PASS |

**Narrative count method:** direct historical prose inside `p.narr` elements of the twenty `section[id="s116-N"]` blocks; front matter, separate feature-box prose and back matter are not counted. All 11 features remain in their originally specified sections: vocabulary §116.1; geography §116.3; cause/effect §116.4; perspectives §116.7; everyday life and timeline §116.8; vocabulary §116.9; continuity/change §116.12; source window §116.15; vocabulary §116.18; debate §116.20.

## 2. Specific editorial and historical corrections

1. **§116.3 — Locarno Rhine Pact:** removed the false statement that Britain's treaty guarantee applied only to aggression crossing a frontier. Articles 1 and 4 of the 1925 pact explicitly cover the demilitarized-zone provisions of Versailles Articles 42 and 43, while making intervention subject to specified League procedures and urgent-aggression conditions. The text now distinguishes treaty obligations from the British cabinet's decision not to intervene militarily in March 1936. Primary text: Yale Law School Avalon Project, https://avalon.law.yale.edu/20th_century/locarno_001.asp .
2. **§116.3 — Belgium:** replaced the assertion of an immediate October 1936 withdrawal into formal neutrality with Belgium's announced **policy of independence** and the subsequent diplomatic changes in 1937. Independent check: U.S. Department of State's 1936 diplomatic correspondence and Pierre Henri Laurent, *The Reversal of Belgian Foreign Policy, 1936–1937*.
3. **§116.11 — Italian sanctions:** removed the implication that Italy remained under League sanctions in 1937; they were **lifted in July 1936**. The description now accurately locates the Rome–Berlin rapprochement amid the **aftermath** of sanctions and continued diplomatic tension.
4. **§116.13 — Sudeten Germans:** identified Konrad Henlein's **Sudetendeutsche Heimatfront**, founded October 1, 1933, and the renamed **Sudetendeutsche Partei**, April 1935, before discussing the May 1935 elections. Independent check: Deutsches Historisches Museum, LeMO, Konrad Henlein biography, https://www.dhm.de/lemo/biografie/konrad-henlein .
5. **§116.20 — comparative responsibility:** explicitly distinguished the German **1936 remilitarization of its own territory in violation of binding demilitarization provisions** from the coercive annexation and occupations of other states and from the German and Soviet invasions of Poland. This is a legal/geographical distinction, not an exoneration of the treaty breach or later aggression.
6. **Documentary guide:** added a 25th entry identifying the 1925 Locarno treaty and its key articles. All five original source-guide link destinations are retained; their labels are shorter and descriptive.
7. **Responsive styling:** added `#source-guide a { overflow-wrap: anywhere; word-break: break-word; }`, and hid decorative `.chapter-number` at ≤480px to remove overlap with the series header. All other original CSS, sidebar structure and active-link script were preserved.

## 3. Final Chromium browser checks

The **exact revised HTML content** was rendered in headless Chromium using Playwright's in-memory `page.set_content` method, because navigating directly to the container `file://` URI was disallowed by the execution environment. All CSS, script, text, tables and navigation controls were evaluated as authored. The original and final submitted HTML were both standalone, self-contained documents.

| Viewport | HTML scroll width | Document-wide overflow | Contents navigation | JS exceptions |
|---:|---:|---|---|---|
| 1440px | 1440px | None | Desktop sticky sidebar | 0 |
| 1024px | 1024px | None | Desktop sticky sidebar | 0 |
| 900px | 900px | None | Mobile menu visible | 0 |
| 768px | 768px | None | Mobile menu, click to §116.20 verified | 0 |
| 375px | 375px | None | Mobile menu, click to §116.20 verified | 0 |
| 320px | 320px | None | Mobile menu, click to §116.20 verified | 0 |

At mobile widths, the two historic tables continue to scroll **inside their own containers** without forcing sideways scrolling of the document. Testing included the source-guide location at 768, 375 and 320px. The mobile contents panel successfully changed `location.hash` to `#s116-20` and made the target section visible. The overlapping decorative chapter number visible in the first mobile screenshot was resolved in the final screenshot.

The final validation also checked for 0 duplicate HTML IDs and 0 broken intra-document anchors, using a separate BeautifulSoup parse of the final source.

## 4. Documentary provenance and scholarly limitations

- The Treaty of Mutual Guarantee (Locarno Pact) was cross-checked in the Yale Law School Avalon text, especially Articles 1, 2 and 4. The revised text reflects both its express guarantee for Rhineland demilitarization and its conditional assistance rules.
- Henlein's founding and renaming chronology was checked against the Deutsches Historisches Museum's LeMO biography.
- The Italian sanctions date was checked against diplomatic scholarship and a historical study of sanctions policy. The sanctions ended July 15, 1936.
- Belgium's 1936–1937 policy transition was checked against U.S. diplomatic records and a historical research article.
- The five pre-existing guide links were reported to resolve to the intended materials in the preceding first-build audit and their URLs were not changed by this revision. The added Yale link was opened and its treaty provisions inspected during this final pass. Network conditions and host URLs may change after publication.
- The Munich Source Window remains an **attributed editorial paraphrase**, not a facsimile-collated translated quotation, and must be taught as such. The source guide contains a mix of specific published documents and wider archives; there is no assertion of exhaustive archival or shelfmark verification.
- Historical geography exercises remain **text-guided**, requiring a suitable verified historical atlas for full visual instruction; no copyrighted photograph or original map plate is embedded.
- Browser success on standalone HTML does not verify exact Chapter 2 template byte parity, real website stylesheet/CDN integration, production access controls or deployment.

## 5. Final editorial disposition

**APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — EDITORIAL LOCK, November 14, 2026 (Pacific).**

All identified first-build publication blockers have been corrected. No additional micro-passes are required for this textual first edition. This chapter closes **Part XVII** and transitions to **Chapter 117, Poland, the Fall of France, and the Battle of Britain**. Live deployment and future source/image enhancements can proceed as separate activities without reopening the editorial lock unless a material factual error is discovered.
