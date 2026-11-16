# MGU European History — Chapter 113: Final Consolidated Publication Audit

**Audit date:** November 13, 2026 (Pacific)  
**Chapter:** 113, *Versailles and the New Europe*  
**Source:** `Pasted text(20261113-224203).txt` (174,270 bytes), first-build audit, and approved 20-section binding plan  
**Canonical publication file:** `chapter-113-versailles-and-the-new-europe.html`  
**File size:** 232,456 bytes UTF-8  
**SHA-256:** `08028fc1b4b1cd20a53292bc1438088ace1417ad6c25db97980b701a8b4ba7f6`

## A. Editorial and structural results

| Test | Measured | Verdict |
|---|---:|---|
| Learning objectives and guiding questions | 10 / 8 | PASS |
| Numbered narrative sections | 20 | PASS |
| Thematic divisions | 5 | PASS |
| Recurring feature boxes (plus 1 separate opening image study) | 11 | PASS |
| Direct narrative words, excluding features/front/back matter | 13,464 | PASS (12,000–14,000) |
| Chronology preview | 30 | PASS (binding 30 rows) |
| Vocabulary preview & synchronized glossary | 30 / 30 | PASS |
| Front and back people/group/place identifiers | 22 / 25 | PASS (18–25 each) |
| Summary and reflection paragraphs | 9 / 4 | PASS |
| Documentary guide entries | 26 | PASS (20–26) |
| Primary source HTTPS outbound links | 48 | PASS (multiple attributable source gateways) |
| Local anchor targets | 58 unique IDs; 0 broken anchors | PASS |

### Review apparatus

Chronology checks 11; map exercises 9; primary-source questions 9; integrated review 15; short answers 8; discussion 6; writing exercises 7. Research project now explicitly requires three distinct treaty systems, eight primary documents, two historically dated maps, four scholarly works, a source ledger and a 1,800–2,500-word submission.

Direct per-section word counts: §113.1: 695, §113.2: 581, §113.3: 619, §113.4: 635, §113.5: 644, §113.6: 703, §113.7: 721, §113.8: 665, §113.9: 647, §113.10: 619, §113.11: 633, §113.12: 806, §113.13: 806, §113.14: 627, §113.15: 645, §113.16: 791, §113.17: 612, §113.18: 655, §113.19: 661, §113.20: 699.

## B. Corrected historical/legal claims and linked evidence

1. **Upper Silesia:** May 7, 1919 draft proposed cession; signed Versailles Article 88 established a plebiscite. Evidence: [U.S. FRUS edition](https://history.state.gov/historicaldocuments/frus1919Parisv13/ch12subch8) and [Avalon Part III](https://avalon.law.yale.edu/imt/partiii.asp).
2. **Baltic de jure recognition:** Estonia and Latvia, January 26, 1921; Lithuania by the principal Allied powers, December 20, 1922. League admission in September 1921 is a separate milestone. Evidence: official Baltic foreign-ministry timelines in the first-build audit.
3. **Bessarabia:** treaty signed October 28, 1920 but never in force due to Japanese nonratification; differentiate Romanian effective control, diplomatic assent and formal force. Evidence: [U.S. FRUS ratification note](https://history.state.gov/historicaldocuments/frus1940v01/d501).
4. **German reparation clauses:** Article 231 legal responsibility, 232–233 scope and commission, Article 235 interim 20-billion gold-mark equivalent and deductions; 132-billion-gold-mark London Schedule dated May 5, 1921. Evidence: [Avalon Treaty Part VIII](https://avalon.law.yale.edu/imt/partviii.asp) and [FRUS London Schedule](https://history.state.gov/historicaldocuments/frus1919Parisv13/ch34subch4).
5. **Sèvres, Lausanne and exchange:** 1920 Sèvres signed but not effective as definitive peace; January 30, 1923 population-exchange convention separate from July 24, 1923 Lausanne; Turkish republic proclaimed October 29, 1923. Evidence: official [Türkiye Treaty editions](https://www.mfa.gov.tr/treaty-with-turkey-and-other-instruments-signed-at-lausanne.en.mfa).
6. **Source-critical instruction:** Appendix distinguishes editorial summaries, historical treaty transcriptions, catalog descriptions and books. §113.12 names and links the Ottoman diplomatic memorandum, Armenian delegates’ 1919 memorandum, Greek exchange instrument and Allied minutes; it does not invent first-person documents.
7. **Historiography:** Keynes (1919), MacMillan (2002), Steiner (2005), Manela (2007), and Pedersen (2015) identified with different questions; interpretive comparisons are not direct quotations and are not represented as exhaustive page-collated studies.

## C. Browser / HTML acceptance

| CSS viewport px | Document width px | Table wrapper horizontal scrolling | Mobile contents | JS errors | Verdict |
|---:|---:|---|---|---:|---|
| 1440 | 1440 | YES | desktop sidebar | 0 | PASS |
| 768 | 768 | YES | YES | 0 | PASS |
| 375 | 375 | YES | YES | 0 | PASS |
| 320 | 320 | YES | YES | 0 | PASS |

Browser: headless Chromium `/usr/bin/chromium` using Python Playwright, file URL, viewport height 900. Both chronology and four-track timeline use separately scrollable focusable table wrappers with visible focus indication; the mobile contents menu is a native keyboard-operable `<details>` control and closes after link selection. No duplicate IDs or dead same-page anchors. Desktop scroll observer is limited to mapped targets rather than all IDs.

## D. Limitations and publication decision

- The historical review includes targeted confirmation of treaty clauses, recognition and treaty-effect dates against the cited published official/diplomatic editions. It does **not** constitute exhaustive original-language facsimile collation of six treaty texts, League petitions, comparative census rolls, or the full histories of each identified people.
- The 26-item guide includes full treaty reproductions, official institutional gateways, edited diplomatic records, selected national-library catalog entries, and publisher/catalog entries. A catalog record is explicitly differentiated from full text; source link stability has not been continuously monitored across all 26 external sites.
- Maps are text-directed research assignments requiring a separately consulted historical atlas rather than embedded verified atlas plates. The everyday-life vignette is prominently marked an illustrative composite, not a diary or identified firsthand account.
- This review did not compare byte-by-byte against a Chapter 2/112 master exemplar, nor deploy the file to a live website. Those are not represented as completed tasks.

**Publication decision:** APPROVED FOR FIRST-EDITION SCHOLARLY TEXTUAL HTML PUBLICATION — LOCKED, subject to the explicitly disclosed source- and deployment-scope limitations above. The direct HTML revision is complete, all binding first-build quantity failures remediated and the consolidated DOM and responsive browser checks passed.
