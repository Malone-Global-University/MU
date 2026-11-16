# MGU Middle East History — Chapter 50 Consolidated Final Publication Audit

**Audit date:** November 7, 2026 (America/Los_Angeles)  
**Manuscript:** Chapter 50 — *The Fragmentation of Abbasid Political Power*  
**Assignment:** Volume III — *Islam and the Caliphal Age*; Part XII — *Society, Persianate Revival, and the Fragmentation of Caliphal Power*  
**Final disposition:** **APPROVED FOR PUBLICATION — LOCKED**, standalone scholarly textual HTML first edition, subject to the transparent documentary limitations below.

## 1. File provenance and integrity

- **Claude source, preserved unchanged:** `Pasted text(20261107-121742).txt` — 147,037 bytes; SHA-256 `7a21e6e9615d130e7bf0e93e506d301c38c4832aeed717eb797c9ef4b14199ac`.
- **Corrected authoritative file:** `chapter-050-the-fragmentation-of-abbasid-political-power-publication-final.html` — 144,692 bytes; SHA-256 `64f49e92ac238d09668a9a6d89cd06928cf91ccef034316076a5696e9af6f373`.
- All substantive original historical prose has been retained except targeted corrections at §§50.6, 50.14, 50.18 and the opening/chronology. Source register replaced with a better-identified edition list; chronology tables given self-contained horizontal scrolling at narrow sizes. The original file remains available independently.

## 2. Independent structure and text audit

| Test | Final result |
|---|---|
| Historical sections | 20/20, consecutive `s50-1`–`s50-20` |
| Divisions | Five, with four sections each |
| Direct historical prose in numbered sections (top-level paragraph text; feature boxes excluded) | Approximately 7,064 tokens under the declared Unicode word counter |
| Total visible body text | Approximately 16,218 tokens, includes navigation, features and back matter |
| Unique HTML IDs | 62 |
| Duplicated IDs | 0 |
| Internal links / broken targets | 56 / 0 |
| Source windows | 4, all identified as paraphrases |
| Historical debates | 2 |
| Geography studies | 2, textual exercises |
| Other features | Timeline, vocabulary, multiple perspectives, continuity and change, cause and effect, everyday life |
| Back matter | Summary, defined terms, people and places, review, writing, research, source register, reflection |
| Historical numbered sections with changed direct text | s50-6, s50-14, s50-18 |

The roughly 8,000–10,000-word proposed narrative scale was a nonbinding planning range. No general expansion or reduction was justified because all planned subject responsibilities are present and substantive. The HTML length including CSS and apparatus is not a scholarly-depth measure.

## 3. Consolidated correction record

1. **Opening Samarra crisis description:** Replaced the claim that four successors were deposed or killed in a decade with a more precise description of mixed outcomes.
2. **Chronology 861–870:** Replaced blanket 'four caliphs deposed or killed' wording with a distinction between death and forcible removal.
3. **§50.6 al-Muntaṣir:** Added explicit caution that poisoning/military involvement is reported in later accounts but the circumstances of death cannot be treated as settled. Al-Mustaʿīn, al-Muʿtazz and al-Muhtadī underwent forced deposition or violent ending, while al-Muntaṣir died following a brief reign.
4. **§50.14 Qarmatians:** Corrected 'around 952' to **339 AH / 950–951 CE**, with restraint concerning claims of ransom or negotiations.
5. **§50.18 numismatic evidence window:** Clarified that the account is a genre-level paraphrase, not a transcription of a catalogued coin. No coin formula has been invented.
6. **Scholarly source register:** Replaced generic author names and an editorial 'verify later' warning with securely identifiable SUNY al-Ṭabarī volumes (31–38, translators), Amedroz–Margoliouth's Miskawayh edition, and better-identified El-Hibri, Gordon, and Bianquis/Kennedy scholarship. Entries without fully verified edition metadata are explicitly identified as such, not presented as collated citations.
7. **Responsive chronology tables:** Wrapped the two `chron-table` tables in keyboard-focusable `table-scroll` containers and added narrowly scoped CSS. This prevents page-wide horizontal overflow at 320px while preserving three-column readability through local horizontal scrolling.

## 4. External verification register

Sources checked for specific claims and reference identities:

- SUNY/Portico volume catalogue, *The History of al-Ṭabarī*, vols. 31–38: https://www.portico.org/publishers/sunypress/?start_with=H
- Joel L. Kraemer, translator, *The History of al-Ṭabarī*, vol. 34, *Incipient Decline* (SUNY Press, 1989): https://www.jstor.org/stable/jj.18253826
- George Saliba, translator, *The History of al-Ṭabarī*, vol. 35, *The Crisis of the ʿAbbāsid Caliphate* (SUNY Press, 1985): https://www.jstor.org/stable/jj.18252088.4
- Bibliographic reference to Miskawayh, Amedroz and Margoliouth, *The Eclipse of the ʿAbbasid Caliphate* (Oxford, 1920–1921), Cambridge *History of Iran* bibliography: https://www.cambridge.org/core/books/abs/cambridge-history-of-iran/bibliography/504AFB7EEC9F0BCE3BC6E793DAD7850C
- Qarmatian return of Black Stone, 339 AH: https://www.islam.museum/en/event/black-stone-return-339/
- Tayeb El-Hibri, *The Abbasid Caliphate: A History* (Cambridge University Press, 2021): https://www.cambridge.org/core/books/abbasid-caliphate/FD6A3ED58BC54F7A252D872F9A12FC46
- Thierry Bianquis, “Autonomous Egypt from Ibn Tūlūn to Kāfūr, 868–969,” *Cambridge History of Egypt*, vol. 1 (1998), pp. 86–119: https://www.cambridge.org/core/books/abs/cambridge-history-of-egypt/autonomous-egypt-from-ibn-tulun-to-kafur-868969/1EB4BC6E65E9137B24180D35504364EF

These sources were used for selected targeted historical claims and bibliographic identification. **This audit does not claim exhaustive manuscript-level collation of al-Ṭabarī, Miskawayh, coins, epigraphy, or every historical sentence.**

## 5. Technical/browser regression

Chromium was used to render the completed document (via headless page-content loading). Results:

| Viewport width | Document scroll width | Horizontal overflow | JavaScript runtime errors |
|---|---:|---|---|
| 1440 px | 1440 px | None | None |
| 900 px | 900 px | None | None |
| 390 px | 390 px | None | None |
| 320 px | 320 px | None | None |

At 320px the chronology tables have a 600px content minimum width but are independently scrollable within 280px and 230px containers; the document itself stays within 320px. The desktop sticky sidebar is preserved; the model's mobile breakpoint hides the sidebar and uses continuous chapter reading. Screenshot inspection of the 320px opening shows readable header and first section.

## 6. Qualifications and publication decision

- Four primary-source windows are **paraphrases**, not verified direct quotations. In particular, the Tulunid and Buyid numismatic discussions are category-level summaries; no coin-catalogue specimens or original inscription transcripts have been collated.
- Two map studies are **text-only assignments** requiring an external map or atlas; no embedded cartographic plates are included.
- This is a scholarly **textual/HTML first edition** rather than an archival diplomatic transcription, critical edition of chronicles, or illustrated atlas.
- The supplied model shell is retained, and navigation/browser checks are passed; this does not certify integration with a separate external website template.

**APPROVED FOR PUBLICATION — LOCKED.** The essential factual and HTML defects identified in the independent audit have been corrected directly. No further micro-pass or general narrative expansion is warranted for this edition.
