# MGU Southeast Asian History — Chapter 104: Final Consolidated Editorial and Publication Audit

**Date:** 17 November 2026 (America/Los_Angeles)
**Chapter:** 104 — The Aceh War: Conquest, Resistance, and Colonial Counterinsurgency, 1873–1904, with epilogue to c. 1913
**Volume VI / Part XVIII:** Imperial Conquest and Colonial Orders / Dutch and British Expansion
**Editorial disposition:** Approved for first-edition textual HTML publication with the documented source-collation and deployment limitations below. Narrative and technical build LOCK.

## Source of truth and revision method
- Authoritative chapter title/purpose from `SouthEast Asia Chapter Outline(7).txt`; universal historical-textbook instructions from the accompanying November 2026 instruction file.
- Original source: `Pasted text(20261117-210627).txt`, Claude HTML draft, preserved as the structural and instructional foundation.
- The original chapter CSS, sidebar structure, opening, learning activities, feature classes, JavaScript scroll-observer and 20-section organization were retained. Additive CSS and a lightweight native `<details>` mobile contents index were included.
- All 20 main historical sections underwent content-level expansion; existing feature boxes were preserved with targeted documentary corrections.

## Direct historical narrative measurements
Counts are words in direct-child `<p>` paragraphs within `#s104-1` … `#s104-20` using a regex word counter; exclude instructional windows, source analyses, sidebars, apparatus, bibliography, and opening. This definition differs from total visible page text.

- **Original narrative:** 3,849 words.
- **Final narrative:** 13,216 words.
- **Net increase:** 9,367 words.
- **Shortest section:** §104.5 — 595 words.
- **Longest section:** §104.2 — 738 words.

| Division | Original narrative | Final narrative |
|---|---:|---:|
| I: Background and outbreak | 1,169 | 2,829 |
| II: Expansion of resistance | 697 | 2,582 |
| III: Protracted war | 672 | 2,580 |
| IV: Colonial conquest | 586 | 2,551 |
| V: Human cost and aftermath | 725 | 2,674 |

### Section word counts

| Section | Words | Section | Words |
|---|---:|---|---:|
| §104.1 | 722 | §104.11 | 665 |
| §104.2 | 738 | §104.12 | 658 |
| §104.3 | 679 | §104.13 | 632 |
| §104.4 | 690 | §104.14 | 629 |
| §104.5 | 595 | §104.15 | 601 |
| §104.6 | 648 | §104.16 | 689 |
| §104.7 | 707 | §104.17 | 697 |
| §104.8 | 632 | §104.18 | 658 |
| §104.9 | 630 | §104.19 | 654 |
| §104.10 | 627 | §104.20 | 665 |

## Historical changes and verification

1. **1871 Sumatra Treaty:** Removed the incorrect suggestion that the 1871 agreement contained a guarantee of Acehnese independence. Precisely distinguishes Article I (British withdrawal of objections to Dutch dominion in Sumatra) and Article II (trade protections), neither of which constitutes Acehnese consent or a transfer of Acehnese sovereignty. The first primary-source study links to the published treaty text.
2. **First expedition, April 1873:** Added the 26 March war declaration, the reconnaissance and 8 April landing, the uncertainty about the palace and lagoon crossings, the action at the Baiturrahman Mosque, and Köhler’s death on 14 April. Avoids monocausal claims that the general’s death alone caused withdrawal.
3. **Second expedition and 1874:** Explains the second expedition’s operations, cholera and logistical burden; specifies the 24 January occupation of the royal compound and 31 January proclamation of Dutch sovereignty, with the sultan’s death correctly described as occurring in late January (day varies by source).
4. **Acehnese political history:** Expanded treatment of the sultan, sagi, mukim, uleebalang, ulama, coastal port communities, religious texts and the logistics that permitted decentralized resistance.
5. **1884–1898 Dutch military transition:** Developed the concentrated line, its political and logistical shortcomings, mobile patrols, 1890 Marechaussee formation, military intelligence and Van Heutsz’s 1898 appointment.
6. **Teuku Umar and the 1898–1903 campaigns:** Added context for Umar’s conditional accommodation in 1893 and renewed resistance in 1896; his death on 11 February 1899; military pressure, negotiations, the sultan’s coerced submission in January 1903 and Panglima Polem’s later submission.
7. **1904 Gayo–Alas campaign and Kuta Rih:** Identifies the date 14 June 1904 and colonial-reported breakdown 313 men, 189 women, 59 children killed (total 561) at Kuta Rih. Does not treat this as independently verified demographic enumeration or as the total for the whole campaign. Identifies the contemporary military report and Neeb photographic material.
8. **Women, civilian experience and aftermath:** Expanded Cut Nyak Dhien, Cut Meutia, Teungku Fakinah, villages and displacement; treats 1904 as a major turning point, not an uncontested endpoint; distinguishes organized resistance through c. 1913 from later political history.

## Primary-source windows
- **Treaty and diplomatic crisis:** Sumatra Treaty (1871), specifically Articles I and II, and the 1873 Dutch war manifesto; accessible published treaty text cited; analytical paraphrase only.
- **Hikayat Prang Sabi:** distinguishes Leiden Cod. Or. 8689 from British Library EAP329/9/3, with the latter’s catalogue link; does not conflate separately transmitted textual witnesses.
- **Snouck Hurgronje:** identifies Dutch (1893–1894) and English (1906) editions, and topics within volumes I and II; remains a thematic paraphrase, not a verified excerpt.
- **1904 campaign:** links published historical discussion and identifies Van Daalen’s contemporary report and Neeb’s photograph. Figures are explicitly attributed to Dutch accounts.
**Documentary disclosure:** None of these windows claims verbatim quotation of an original signed treaty, original Acehnese manuscript, or unpublished archival report. Further manuscript collation is needed before inserting such quotations.

## Instructional and technical audit

| Element | Final result |
|---|---:|
| Historical Vocabulary | 3 |
| Timeline Study | 1 |
| Geography Studies | 3 |
| Primary Source Windows | 4 |
| Historical Debates | 2 |
| Multiple Perspectives | 3 |
| Cause and Effect | 1 |
| Continuity and Change | 2 |
| Everyday Life | 1 |
| Main sections | 20 |
| Divisions | 5 |
| Internal HTML fragment links | 91 |
| Broken internal fragment targets | 0 |
| Duplicate HTML IDs | 0 |
| Bibliography entries | 16 |
| External research links included | 11 |

### Browser verification
- Chromium via Playwright rendered the self-contained HTML at desktop 1440 px, tablet 820 px, mobile 390 px, and compact mobile 320 px. No horizontal viewport overflow or JavaScript runtime errors at tested sizes.
- Mobile contents menu is visible at widths at/below 900 px, opens by keyboard-accessible native details/summary, and its links update fragments and scroll to the corresponding target. Desktop sidebar remains present.
- Screenshot files are supplementary QA records; browser content was loaded via `set_content()` because direct file and local HTTP navigation were prohibited in the test environment.
- External web links and external live-site deployment were not browser-tested by this local QA; named source links were identified by web research.

## Publication limitations and boundaries
- **Historical documentation:** The narrative relies on cited scholarly and publicly catalogued records but is not a diplomatic transcription or critical edition of primary documents. Exact manuscript collation and archival signature verification remain for a later documentary edition.
- **Casualty data:** Kuta Rih counts are from perpetrators’ reporting; wider war casualty estimates are not presented as precise population counts.
- **Model parity:** The submitted Chapter 104 HTML was directly used as the structural source. Chapter 103’s completed mobile pattern was consulted; the separately designated original Chapter 1 model was not provided as a distinct file for a full byte-for-byte comparison.
- **Images:** This is a complete textual HTML chapter. Geographic studies use described map exercises; archival photographs are referenced, not embedded. Ethical rights/reproduction decisions remain separate from textual publication.
- **Live deployment:** No site deployment or production-server verification occurred.

## Final files
- `ch104.html` — 187,146 bytes, SHA-256 `6fbee6b86ff1f33bc2b2b47252c1789dfe4cc734ceb010e267aef7e402f987d1`.
- `chapter-104-the-aceh-war.html` — byte-identical canonical long-name alias.
- `ch104.zip` — ZIP package containing `chapter-104-the-aceh-war.html`, integrity checked.
- `ch104-final-audit.md` — this consolidated audit.

**Editorial conclusion:** The corrected 20-section manuscript meets the agreed 12,000–14,000 direct narrative-word benchmark and the instructional/technical requirements for first-edition textual HTML release. Approved with disclosed primary-source and deployment limitations; no further micro-pass is warranted absent a concrete new publication-critical finding.
