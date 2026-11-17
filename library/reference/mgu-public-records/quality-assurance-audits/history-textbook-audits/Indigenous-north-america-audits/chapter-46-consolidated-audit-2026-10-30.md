# MGU Indigenous Peoples of North America — Chapter 46 Consolidated Audit

**Title:** The Fur Trade  
**Volume / Part:** IV — Encounter, Exchange, Epidemic, and Empire / VIII — The Contested Seventeenth Century  
**Review date:** October 30, 2026 (Pacific)  
**Source supplied:** `Pasted text(20261031-033927).txt` (Claude's HTML)  
**Corrected working version:** `chapter-46-the-fur-trade-audited.html`  
**Disposition:** **NOT APPROVED / NOT LOCKED.** Architecture and technical rendering pass after narrow repairs; the direct historical narrative remains below approved depth. Order one consolidated substantial expansion, then one final holistic review.

## 1. Governing task and structure

The 150-chapter outline assigns Chapter 46: “Explores Indigenous commercial power, European competition, ecological change, gender, diplomacy, and material transformation.” Its approved writing plan is 35 numbered sections across seven divisions, a 4 / 5 / 6 / 5 / 6 / 6 / 3 split. Chapter 45 covers French–Indigenous alliances and missions; Chapter 47 covers Haudenosaunee warfare; Chapter 52 covers Métis ethnogenesis. The chapter should foreground production, markets, Indigenous bargaining power, women's economic roles, institutions, and environmental consequences rather than repeat those reserved narratives.

**Verified:** 35 numbered sections, §§46.1–46.35 consecutively; division labels present on §§46.1, 46.5, 46.10, 46.16, 46.21, 46.27, 46.33. There are no separate visual division banners and the sidebar is one long section list, unlike Chapter 45's stronger division navigation. These would improve navigation during the full-depth build but do **not** require changing section numbers, titles, or order.

**Features:** 19 ID-bearing feature boxes: 3 Historical Vocabulary, 2 Map Studies, 3 Primary Source Windows, 2 Historical Debates, 2 Everyday Life, 1 Multiple Perspectives, 1 Cause & Effect, 1 Continuity & Change, 1 wampum Evidence Study, 1 Ecological Evidence Study, 1 Comparative Economic Study, and 1 Timeline Study. Two evidence-study boxes reuse existing CSS classes; this does not change their actual instructional identity. All opening and end-of-chapter apparatus is present, including study questions, chronology, terms, people, source analysis, writing, research, and reflection.

## 2. Narrative-depth diagnosis — substantive publication blocker

Using BeautifulSoup, delete `.feature-box` descendants, section heading tags, and `.section-id-tag` before counting space-delimited lexical words in §§46.1–46.34. This deliberately excludes features, front matter, sidebar, review, and headings.

| Division | Numbered sections | Original direct prose words | Editorial diagnosis |
|---|---:|---:|---|
| I — Indigenous Foundations | 46.1–46.4 | 1,171 | Strong frame, still compact |
| II — Colonial Networks | 46.5–46.9 | 1,396 | Dutch, wampum and intermediation need historically concrete processes |
| III — Production & Exchange | 46.10–46.15 | 1,453 | **High priority:** 6 essential topics reduced to 229–253 words each |
| IV — Women, Kinship & Labor | 46.16–46.20 | 1,128 | **High priority:** provisioners, gender, households need much more evidence |
| V — European Competition | 46.21–46.26 | 1,459 | **High priority:** company institutions, Cree and HBC need fuller case studies |
| VI — Ecology & Political Change | 46.27–46.32 | 1,196 | **High priority:** causal evidence, regional variation and political economy |
| VII — Interpretation | 46.33–46.34 | 515 | Expand synthesis and historiographic comparisons selectively |
| **Total** | **34 historical sections** | **8,318** | **Below 15,000–19,000 approved range** |

The original file has about **15,433 visible words including the entire opening/review/sidebars/features**, not 17,000 by this tokenization method. The audited corrected working version has approximately **8,346 direct historical prose words** and ~15,458 total visible words, subject to tokenization conventions. Do not quote total file word count as narrative. Original section counts range from about 187 to 322 direct prose words, with §46.35 reserved for review. The problem is widespread, not confined to Divisions III and VI.

**Recommended single consolidated expansion:** Add roughly 7,000–9,000 *substantive, evidence-based* historical narrative words across all seven divisions, with priority to III–VI. Aim organically at ~15,500–17,500 historical prose words, but do not pad to quota. A reasonable rough distribution of additional **direct** words is I +600–800; II +750–1,000; III +1,600–2,000; IV +1,200–1,500; V +1,200–1,600; VI +1,500–1,800; VII +300–500. These are allocation guides, **not** per-section quotas. Sections must vary in depth according to evidence and importance. Keep all 35 section numbers and all 19 feature boxes; expand historical prose rather than summary, navigation or repetitive apparatus.

### Expansion subject priorities for Claude

- **§§46.10–46.15 (highest):** Trace actual beaver trapping and preparation processes; distinctions between coat and parchment beaver; indigenous and European valuation, differences between provisioning and payment; canoe logistics and portage chokepoints; negotiated terms, gift obligations, competition, accounts and credit. Build actual examples from identifiable seventeenth-century evidence rather than inventing prices or transactions.
- **§§46.16–46.20:** Distinguish women's hide processing, food provisioning, textile adoption, management of household production, kinship and intermarriage by region and period. Do not project later prairie Métis institutions or the mature HBC debt system back into the 1600s. Substantiate the trade's labor allocation and uneven burdens.
- **§§46.21–46.26:** Explain the Company of One Hundred Associates, Dutch 1638–1639 loosening, English Albany continuity, HBC charter versus Indigenous sovereignty, concrete Cree and Assiniboine intermediary systems, and specific logistical comparison between coastal and inland trade. **Congés began in 1681** and **Louis XIV revoked them in May 1696** amid the beaver glut: preserve those facts.
- **§§46.27–46.32:** Give substantive ecological mechanisms and uncertainty; beaver dams, wetlands and localized depletion; differing hunting territories and harvest intensity; commercial competition and selective access to guns; demographic and political costs; explain why depletion/dependence are not uniform or inevitable. Keep war campaigns for Chapter 47.
- **§§46.5–46.9 and the interpretive divisions:** Enrich verified early coastal exchanges, Indigenous intermediation, Fort Orange/Beverwijck commercial institutions, and wampum's differentiated ceremonial and market functions. Conclude with well-supported comparison of four regional systems. Avoid repetition of Chapter 45.
- **Technical readability:** Consider making division headings and sidebar subgroups as evident as those in locked Chapter 45, but do not change the authoritative 35 sections or their placement. Test the change in a browser.

## 3. Historical and source verification

### Supported claims

1. **Dutch monopoly:** The New Netherland Articles and Conditions of September 2, 1638 opened trading to more merchants under duties and company shipping requirements; further changes occurred around 1639. Thus 'late-1630s loosening' was generally correct but too vague. The audited HTML specifies 1638–1639 and continued regulation. See Historical Society of the New York Courts, <https://history.nycourts.gov/about_period/the-1638-articles-and-conditions/> and New Amsterdam History Center, <https://newamsterdamhistorycenter.org/2018/06/05/the-story-of-new-amsterdam-2/>.
2. **Congés and oversupply:** The Canadian Museum of History explicitly dates the congé system to **1681**, reports overproduction by the mid-1690s, and the May 21, 1696 royal revocation and post closures. Audited HTML dates these events. <https://www.historymuseum.ca/virtual-museum-of-new-france/economic-activities/fur-trade/>.
3. **Pequot and wampum:** The Pequot held significant influence over coastal wampum production and tribute networks; the sweeping claim of exclusive control is contested. Existing manuscript explicitly qualifies 'much of the supply' and separates ceremonial and colonial currency roles. No stronger monopoly claim is authorized. See *American Yawp*, <https://web.stanford.edu/dept/press/cgi-bin/yawp/chapter-03-colliding-cultures.html>, and Smithsonian NMAI, <https://b.asp.si.edu/nk360/manhattan/journey-of-trade/journey-of-trade.cshtml>.
4. **HBC charter:** Genuine charter of **May 2, 1670** incorporated the Company and asserted exclusive rights over a Hudson Bay geographical area. Such royal grants are not evidence of Indigenous land cession. Original text: <https://www.gutenberg.org/cache/epub/6580/pg6580-images.html>.
5. **Van der Donck:** His *Description of New Netherland* first appeared in **1655** and expanded in **1656** and discusses the beaver trade and guard hairs for felt. The source window appropriately uses paraphrase; audited text narrows a conclusion not shown by the paraphrase. See <https://newamsterdamhistorycenter.org/2022/10/05/a-description-of-new-netherland/> and <https://www.newnetherlandinstitute.org/download_file/4f69e1d6-cc4d-4612-b198-7e6bbc661279/0> (a museum document based on a modern translation; review appropriate usage conditions).
6. **Paul Le Jeune (1634):** The true report of an Innu host joking that beaver 'makes' kettles, hatchets, knives, etc. is at Thwaites, *Jesuit Relations*, vol. VI, pp. 296–299. The uploaded paraphrase invented a feast context and claimed the man said beaver did not make certain things. Audited HTML removes these mistakes and recounts his criticism of how many knives English traders would offer for a skin. See <https://moses.creighton.edu/kripke/jesuitrelations/relations_06.html>.
7. **Beaver fur types and processing:** Beaver coats worn with the fur inward were valued for felting; do not treat all dressed/undressed furs as identical. See <https://www.colonialsociety.org/node/814>.

### Specific historical / editorial corrections made in audited working HTML

1. Reinstated locked Chapter 45's responsive `.chron-table` style at screen widths <=600 px.
2. §46.8: replaced vague Dutch 'late 1630s' with **1638–1639** opening subject to continuing legal regulation.
3. §46.7: recognized Wendat dispersal was already discussed in Chapter 45 as well as the future Chapter 47; did not recast it as exclusively Chapter 47.
4. §46.22: **Beverwijck was renamed Albany**; Fort Orange, the fort, was called Fort Albany. Corrected misleading conflation in narration **and chronology preview**. Verify e.g. City of Albany, <https://www.albanyny.gov/512/City-History>.
5. §46.21: specified **1681** introduction of congés and the **May 1696** revocation and post closures.
6. §46.15 Primary Source (Le Jeune, 1634): removed ungrounded feast and 'beaver did not make certain things' claims; substituted faithful paraphrase and precise Thwaites volume/page reference.
7. §46.8 Primary Source (van der Donck): narrowed overly strong attribution of the author's evaluation of Indigenous knowledge, without changing the source identity.

**Source-window policy:** The three windows are individually grounded in real identifiable texts and are honestly labeled paraphrases, not verbatim quotations. **Verified literal quotations are not required** so long as the current windows remain genuine source-centered teaching exercises and their claims are accurate. Do not fabricate primary-source text. Add a brief stable edition/locator where possible, but do not let bibliography improvements delay necessary narrative writing.

## 4. HTML, CSS, JavaScript and browser verification

- **Original HTML:** 35 numbered `s46-#` section IDs, 73 unique IDs overall, 73/73 working internal links, and 19 feature boxes. HTML structure has balanced: 52 `section`, 89 `div`, 8 `ul`, 18 `ol`, 26 `dl`, 3 `table`, 1 each `main/aside/nav/header/footer`, and all other checked list/heading/paragraph tags.
- **Template comparison:** The JavaScript is character-for-character identical to locked Chapter 45; Node syntax check passes. All common CSS matches Chapter 45 when removing Chapter-45-specific division styling; the initial Chapter 46 file omitted the mobile chronology rule.
- **Original Chromium rendering via Playwright `set_content` at 1440/900/390/320 px:** no JavaScript runtime errors at any width, but **37 px horizontal page overflow at 320 px** (`scrollWidth=357` against 320).
- **Corrected working file:** Chromium at **1440/900/390/320 px** passes without page overflow or JS errors; at 320px the chronological table scrolls independently (`scrollWidth 337; clientWidth 280`). No page-level overflow. Sidebar hides at widths <=900px according to established template behavior.
- **Original literal Chapter 1 model:** exact byte parity was not independently tested. The audited Chapter 45 baseline is available and used as the relevant local reference.

## 5. Next action / one-pass Claude build instruction

**Use `chapter-46-the-fur-trade-audited.html` as the authoritative working file, not the original.** Expand across all seven divisions in **one complete full-depth authoring pass**, targeting approximately 15,500–17,500 direct historical-section prose words *organically*. Preserve all factual corrections, front matter, 35-section architecture, 19 features, review apparatus and the repaired responsive shell. Strengthen the central economic, ecological and gendered-labor mechanisms with dated, documented examples. Do not fill space with repeated generalities, feature duplication, unfounded numbers, full Chapter 47 military history, or post-1701 anachronisms. If useful, improve division navigation within the same build. Recheck 73 source IDs/anchor targets (or any intentionally new unique IDs), tag balance, CSS, script, mobile width, and direct prose count, and submit one final HTML for **one independent consolidated publication audit**, narrow repairs, and lock if justified. **Do not request individual sections or run micro-passes.**

## 6. File integrity

The working HTML was normalized to UTF-8 LF and made directly from Claude's upload with only the localized changes above. SHA-256 and byte size are to be recorded at final output creation.
