# MGU Korean History — Chapter 74 Final Consolidated Publication Audit

**Audit date:** November 10, 2026 (Pacific)  
**Project:** *Korean History: Ancient Kingdoms to a Divided Peninsula*  
**Volume IV:** Two Koreas, 1953–2026  
**Part XIII:** Rival Korean States  
**Chapter 74:** Syngman Rhee and the First Republic  
**Decision:** **APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — LOCKED** following targeted, directly applied historical/documentary revisions and Chromium validation. This approval carries the verification limits below.

## 1. Controlled manuscripts and provenance

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| Claude original uploaded as `Pasted text(20261110-202749).txt` | 178,403 | `5e12a405a32709042b93502223eb227c2db76651b8226cf1805ad728a91ee323` |
| Canonical corrected HTML, `chapter-074-syngman-rhee-and-the-first-republic-publication-final.html` | **189,716** | **`353b87acf8a69f00236404f3079fa732a95aaa10e433e7e747afd380fb1afd68`** |
| Publish-path alias, `chapter-74-syngman-rhee-and-the-first-republic.html` | **189,716** | Identical to canonical corrected HTML |

The original Claude manuscript was retained unchanged. The final HTML was edited directly, preserving the existing document shell, CSS, in-page anchors, sidebar, section headings, and scroll script, except for one responsive CSS correction and addition of a documentary source register.

## 2. Plan and chapter-boundary compliance

The authoritative Korean outline fixes Chapter 74's purpose as the First Republic, anti-communism, authoritarian government, constitutional manipulation, economic dependence, opposition, corruption, student protest, and the April Revolution. The approved 20-section plan is preserved without renumbering or deletion:

- **Division I**, §§74.1–74.4: founding constitution, Rhee's coalition, security law, Busan 1952.
- **Division II**, §§74.5–74.8: Liberal Party, 1954 rounding amendment, electoral control, 1956 elections.
- **Division III**, §§74.9–74.12: American aid, corruption, civil society, U.S.–ROK relations.
- **Division IV**, §§74.13–74.16: Democratic Party, Cho Bong-am, press and security restrictions, 1958 elections and succession.
- **Division V**, §§74.17–74.20: February–March crisis, Masan and Kim Ju-yeol, April 18–19, Rhee's departure.

The book's post-1953 focus is maintained while introductory institutional events from 1948–1952 receive necessary context. The narrative does not substantially duplicate Chapter 73's comparative economic reconstruction or preempt Chapter 75's 1961 coup and developmental state. It ends with Rhee's resignation and the uncertain Second Republic transition; 1961 is only foreshadowed.

### Reproducible length and structure

Counts use BeautifulSoup parsing and a Unicode word-like token regex for **immediate `<p>` children in the 20 numbered sections only**; they exclude features, opening/context, review, references, navigation, and apparatus. This produces a slightly different original count from the prior initial audit, which used a different regex.

| Metric | Original | Final |
|---|---:|---:|
| Numbered sections | 20 | **20** |
| Divisions | 5 | **5** |
| Direct numbered-section narrative words | ~9,486 | **~10,420** |
| Direct section range | 318–685 words | **385–735 words** |
| Visible full `<main>` text, including apparatus | ~19,055 | **~20,503** words |
| Chapter Opening narrative paragraphs | 7 (plus banner) | **7 (plus banner)** |
| Learning Objectives | 12 | **12** |
| Guiding Questions | 10 | **10** |
| Chronology Preview rows | 15 | **15** |
| Core Vocabulary Preview labels | 24 | **24** |
| Defined Key Terms in review | 28 | **28** |
| Primary Source Windows | 3 | **3** |
| Historical Vocabulary boxes | 3 | **3** |
| External documentary references | none embedded as links | **12 linked records** |

One each of Timeline Study, Map Study, Historical Debate, Multiple Perspectives, Cause and Effect, Continuity and Change, and Everyday Life remains present, together with an eight-paragraph summary, review exercises, research extension and four-paragraph reflection.

### Final direct-narrative words by numbered section

| Section | Approx. words | Section | Approx. words |
|---|---:|---|---:|
| 74.1 | 683 | 74.11 | 415 |
| 74.2 | 581 | 74.12 | 413 |
| 74.3 | 514 | 74.13 | 481 |
| 74.4 | 735 | 74.14 | 475 |
| 74.5 | 385 | 74.15 | 437 |
| 74.6 | 484 | 74.16 | 620 |
| 74.7 | 403 | 74.17 | 527 |
| 74.8 | 538 | 74.18 | 694 |
| 74.9 | 470 | 74.19 | 470 |
| 74.10 | 420 | 74.20 | 675 |

Section lengths vary in response to historical complexity. There is no evidence that an additional full expansion would improve the chapter proportionately; the two thinner priority sections were substantively strengthened.

## 3. Direct changes made

1. **§74.1 — UN recognition:** specified UNGA resolution A/RES/195(III) and its actual geographic qualifier: ROK effective authority and UN-observed elections in the part of Korea where the Temporary Commission could work. Removed the implication that UN recognition established ROK control over the northern half of the peninsula. [UN General Assembly](https://mandates.un.org/mandate/A/RES/195(III)?subject=Representative+Government).
2. **§74.4 — 1952 rally organizers:** removed the inaccurate association of the National Guidance Alliance/Bodo League with 1952 demonstrations. Identified the extraparliamentary Liberal Party, Korean National Association, Korean Youth Corps, and other pro-amendment actors, without flattening their separate roles. [Academy of Korean Studies](https://encykorea.aks.ac.kr/Article/E0067723).
3. **§74.4 — 1952 amendment roll-call:** replaced the imprecise description with **163 yes, zero no, three abstentions among 166 legislators present** on July 4. [FRUS, editorial note 206](https://history.state.gov/historicaldocuments/frus1952-54v15p1/d206).
4. **§74.8 and §74.16 — presidential ages:** corrected Rhee to **81 on May 15, 1956**, **83 in May 1958**, and **84 on March 15, 1960**, turning 85 on March 26.
5. **§74.8 — 1956 vote:** inserted precise official returns—Rhee **5,046,437**, Cho Bong-am **2,163,808**, invalid/blank **1,856,818**, all presidential ballots **9,067,063**. Explained Rhee's **69.99% valid-vote** share versus **~55.65% of all ballots cast**. Did not claim that every invalid ballot was cast for deceased Shin Ik-hui. [National Institute of Korean History](https://db.history.go.kr/id/tcct_1956_05_15_0010).
6. **1956 Primary Source Window:** eliminated the anachronistic attribution to the later independent National Election Commission. Identified official returns included in **annex IV to UNCURK Report A/3172**, signed August 24, 1956. Clarified the distinctions between the government's original tabulation, the UN report's reproduction, and external diplomatic evaluation. [UNCURK A/3172](https://digitallibrary.un.org/record/710953/files/A_3172-EN.pdf); [NEC institutional history](https://museum.nec.go.kr/eng/about/aboutOverview.html).
7. **§74.15 — Kyunghyang Shinmun:** documented the April 30, 1959 cancellation, May 5 suit, June 26 High Court stay, substituted suspension order, August 29 rejection of stay against the second order, and April 26, 1960 Supreme Court stay permitting resumption. Removed placeholder uncertainty. [Academy of Korean Studies](https://encykorea.aks.ac.kr/Article/E0081352).
8. **§74.16 — 1958 Assembly:** distinguished **126 Liberal seats won in constituencies** and **79 Democratic** from an American contemporary **137 Liberal-affiliated members** count after the election. [FRUS editorial note 222](https://history.state.gov/historicaldocuments/frus1958-60v18/d222). Expanded the analysis of rural/urban opposition, partisan movement after election day, and the constitutional stakes of vice-presidential succession.
9. **§74.13 — opposition:** expanded the historical mechanism connecting local party organizing, urban public opinion, the press and parliamentary advocacy.
10. **§74.18 — Masan:** added political and social local context, sources for the sequence of events, and historical methodology. Distinguished the **April 11 public turning point** from a newly documented military intelligence report dated **April 10**, publicized in 2025. Harmonized the preview chronology, actor register, narrative, timeline, and key-people review. [Yonhap, April 10, 2025](https://www.yna.co.kr/view/AKR20250410057600052).
11. **§74.19 — casualties:** supplied the **186 deaths and 6,026 injuries** figure attributed to Korea Heritage Service as a count for the broader revolution, not for April 19 shootings alone. [Korea Heritage Service](https://www.heritage.go.kr/heri/html/HtmlPage.do?pageNo=5_1_3_1&pg=%2Funesco%2FMemHeritage%2FMemHeritage_17.jsp).
12. **§74.20 and third Primary Source Window:** specified **258 professor participants/signatories** and the **14-point declaration**, documented in the National Institute of Korean History's reproduced newspaper text from the evening edition of the April 26, 1960 *Dong-A Ilbo*. Paraphrase now includes the declaration's anti-exploitation warning, alongside opposition to fraud and repression. No invented verbatim English quotation. [National Institute of Korean History](https://contents.history.go.kr/front/hm/view.do?levelId=hm_149_0030).
13. **1952 Primary Source Window:** identified the source as FRUS vol. XV, part 1, editorial note 206 and underlying contemporary cables, making clear that the published retrospective editorial note and original diplomatic records are not identical document types.
14. **Documentation:** added a **12-entry clickable Documentary Sources and Verification Register** within the chapter and a matching sidebar anchor. It distinguishes archival documentary evidence, official statistical tabulation, government historical reference pages and modern reporting of newly identified records.
15. **Responsive design:** scoped `overflow-x: auto` to the chronology table at viewport widths of 900px and under, fixing page-level horizontal scroll without changing table contents or the shared visual system.

## 4. Final HTML integrity and Chromium validation

- Exactly **20 independently anchored** numbered sections (`s74-1`–`s74-20`), in order.
- **58 unique HTML IDs**, **53 local hash links**, **zero duplicate IDs**, and **zero unresolved internal anchor links**.
- **12 external source URLs** in the new register.
- All instructional-feature classes retained: 3 source windows, 3 vocabulary boxes, and the seven single-instance feature types.
- Browser: local Chromium with Playwright's `set_content`, widths **1440, 1024, 900, 600, 390 and 320 px**.
- No reported JavaScript exceptions at any tested width.
- Document scroll width equals viewport width in every test, including **390/390** and **320/320**. The chronology itself may scroll sideways inside its own container on narrow screens, without widening the page.
- Sidebar appears at desktop width and remains intentionally hidden at widths ≤900px under the existing model's responsive logic. No new mobile table-of-contents widget was added.
- Desktop and mobile screenshots were generated and visually inspected; the opening chapter hierarchy remains legible.

## 5. Publication decision and qualifications

**APPROVED FOR PUBLICATION — LOCKED** as a first-edition scholarly textual HTML chapter. The 20-section plan has been fulfilled and source-critical corrections applied; no general rewrite or further micro-passes recommended absent a newly demonstrated material error.

**Limitations disclosed:**

1. All three source-study windows are expressly **editorial paraphrases**, not manuscript-collated or original-page-verified English quotations/translations. Document identifiers and selected contextual facts have been verified; the archival editions and the full multilingual source corpus have not been exhaustively collated.
2. Historical figures are carefully distinguished by denominator, time window and document type, but this was a **targeted verification** rather than comprehensive sentence-by-sentence source adjudication or an exhaustive review of every secondary work.
3. The Map Study is a **text-guided exercise** requiring a suitable historical atlas. No copyrighted image was embedded without verifying rights.
4. The actual original Chapter 1 HTML file was not used for a byte-for-byte template-parity comparison. The existing Claude model-derived shell was preserved with localized edits.
5. The HTML was tested locally in Chromium but **not** deployed to, or integration-tested against, the live MGU website.

**Canonical publication artifact:** `chapter-074-syngman-rhee-and-the-first-republic-publication-final.html` (SHA-256 `353b87acf8a69f00236404f3079fa732a95aaa10e433e7e747afd380fb1afd68`). Its short publish alias is byte-identical. Publish the final, not the original Claude .txt upload.
