# MGU Indian History — Chapter 49 Independent Documentary and Production Audit

**Date:** November 1, 2026 (Pacific)
**Title:** The Indian Ocean and the Arrival of the Portuguese
**Volume / Part:** II / IX
**Status:** IN DEVELOPMENT — NOT APPROVED / NOT LOCKED

## Files
- Claude input: `Pasted text(20261101-152231).txt` (192,955 UTF-8 bytes; SHA256 `c06643db1a8a7fbd604da6d19b46850fe76ee8b28dba8656474a7220e9c9deb5`).
- Corrected working copy: `chapter-049-the-indian-ocean-and-the-arrival-of-the-portuguese-documentary-corrected.html` (194,805 bytes; SHA256 `e7962ae4da9f9250da9ad1f098541c5bad7a67a364bae33b1ebd8bed6436d03e`).

## Independent quantitative audit
- Forty-two numbered sections consecutively numbered §49.1–§49.42; seven divisions with allocation 7/7/6/7/7/5/3, the final section being review.
- Input direct historical narrative in §§49.1–49.41: **16,638 words**. This excludes headings, feature boxes, front matter, and §49.42 review (472 words). Counted with a consistent Unicode word-token regular expression after parsing each numbered section and reading direct child `<p>` elements only.
- Corrected working copy: **16,769 direct historical narrative words** (adds one source-grounded paragraph to §49.40); review remains 472 words.
- Word distribution in uploaded draft: Division I 2,071; II 3,313; III 2,803; IV 2,910; V 2,848; VI 1,997; VII (historical §§40–41) 696.
- Nominal planned diagnostic range 19,000–24,000 direct historical words; current shortfall **2,231 words minimum**; a coherent final enhancement of about 2,300–4,000 words distributed by need is justified, rather than a rebuild or rote paragraph-per-section program.
- **24** instructional features: six source windows, four map studies, three vocabulary boxes, three historical debates, two comparative studies, two everyday-life boxes, one timeline, one multiple perspectives, one cause-and-effect, one continuity/change.
- **18** vocabulary-preview terms, **35** end-of-chapter key terms, 15-row chronology, 7-paragraph summary, and complete review apparatus including writing exercises.
- **85 IDs (all unique), 85/85 valid internal anchors**. All 42 numbered sections and 24 features are descendants of the single `<main>`.

## Historically important discovery — an identified cartaz is available
Claude's statement that no individual pass could be verified need not remain the publication constraint. Luís Filipe Reis Thomaz, **“The Portuguese control over Indian Ocean and the cartaz system,”** in *Os Mares do Oriente: A Presença Portuguesa circa 1507* (Lisbon: Academia de Marinha, 2011), pp. 294–296, identifies and reproduces an English translation of a Portuguese sea pass issued at **Muscat on 16 November 1611** and recorded after a small vessel encountered the English expedition commanded by **Christopher Newport in 1612**.

The pass, issued by **António Pereira de Lacerda**, names **Norradim**, a Baloch master resident at Gwadar; records the vessel's weapons, permitted route including Diu and Chaul, commercial restrictions, customs clearance, one-year validity, and registration. The translation was included in **Walter Payton's 1612 voyage narrative** collected by **Samuel Purchas**, *Purchas His Pilgrimes*, vol. IV (Glasgow: James MacLehose and Sons, 1905), chapter X, §II. Thomaz observes that sixteenth-century originals have not survived comparably. It is not correct to use the 1611 individual permit as proof that all its detailed stipulations held before 1600; it is a specifically identified early-seventeenth-century documentary illustration. The corrected working HTML replaces the generic source-type window in place, preserving the ID `source-cartaz`, with explicit primary-source provenance, paraphrase, chronological boundary, methodological caution, and four questions. The sidebar feature label is updated. No invented passage or quotation was used.

Source: https://academia.marinha.pt/pt/edicoes/Simposios%20Historia%20Maritima/Decimo.pdf

Additional independent documentation: Andréa Doré (2002), “Cristãos na Índia no século XVI,” *Revista Brasileira de História* 22(44), reproduces the text of a **1621** cartaz issued at Goa, independently confirming the survival of early seventeenth-century pass texts. https://www.scielo.br/j/rbh/a/P7HTjrcXxLNSZnfk7bRPTJR/

The Arabic derivation of `cartaz` from `qirṭās` is discussed in Thomaz and more recent scholarship. Do not assert as fact that Portuguese practice was a straightforward copy of a particular Islamic or Chinese system: antecedents and comparisons require more qualification than etymology alone warrants.

## An additional historical-evidence improvement
The corrected working copy also adds a concise, differentiated evidence paragraph to §49.40. Thomaz reports a **1569** estimate of approximately **60,000 Portuguese quintals** of Malabar pepper production versus **15,000** supplied to royal factories at Cochin and Quilon (around **25%** of that estimate); a 1566 report estimates Red Sea shipments exceeding those around the Cape. These are **historical reports**, not independently measured exhaustive statistics. The text makes that distinction explicit. Source: Thomaz (2011), pp. 327–328.

## Bibliographic status
Five bibliographic notes had already been verified in the prior harmonization audit: Goitein and Friedman, *India Traders of the Middle Ages* (2008); Ibn Battuta, *Travels*, vol. IV (1994), translation completed/annotated by C. F. Beckingham; Ravenstein's *A Journal of the First Voyage of Vasco da Gama* (1898); Cortesão's *Suma Oriental* (1944); and Dames's *Book of Duarte Barbosa* (1918–1921). These are accurate edition-level references, not evidence that the six paraphrases have each been matched to an exact source passage. Do not fabricate page numbers.

## Browser / regression testing of corrected copy
Chromium in-memory rendering (`set_content`), widths **1440 / 900 / 390 / 320 px**, PASS in each: no page-wide horizontal overflow, no JavaScript runtime errors, all 42 sections inside `<main>`; 320px chronology scrolls internally (table scrollWidth 330, clientWidth 280). Side HTML links 85/85 valid; original CSS and JavaScript byte-identical in the corrected working copy. Direct file-URL navigation is prohibited in the sandbox (`ERR_BLOCKED_BY_ADMINISTRATOR`); this is not a deployed/live-URL test.

## Remaining work before final publication audit
1. **One substantive completion pass**: add roughly 2,300–4,000 direct narrative words where actually warranted. Avoid rebuilding or replacing developed sections.
2. Highest priority **§§49.1–49.7**, especially trade finance, the relationship of Red Sea and Gulf routes, ship construction and navigational practice, source limits, and everyday commercial mechanisms; present Division I totals 2,071 across seven sections.
3. Priority **§49.13** (Bay of Bengal and Coromandel systems; specific merchants, ports, goods, shipping, polity-revenue mechanisms); **§49.20** (commercial/violent aftermath of da Gama's second voyage and the making of the Cochin alliance; avoid repeating the same massacre in adjacent paragraphs); **§49.37** (careful contrasts between 1538 Ottoman-supported Diu siege, 1546 Gujarati siege, and 1570–71 campaigns).
4. Strengthen **§§49.40–49.41**, currently just 696 combined historical words before the added evidence paragraph, with source-grounded comparative synthesis of regional variability in Portuguese enforcement, merchant redirection, quantitative limits, and the role of Atlantic finance without assuming blanket dominance.
5. Search for visible repetition in §49.20 and §49.37 introduced by additive passes: improve explanatory mechanisms without echoing the same chronology twice. Keep key source windows accurate and paraphrases labeled. Historical context and closing summary are now serviceable; do not expand merely to satisfy mechanical paragraph counts.
6. Preserve seven divisions, 42 sections, all 24 features, source corrections, all CSS/JS, working sidebar/navigation, table scrolling, source cautions and review apparatus. Run **one whole-file final structural, source, historical, and responsive-browser audit** after the last writing pass.

**Decision: IN DEVELOPMENT — NOT LOCKED**. The identified Muscat cartaz source is no longer a blocker in the corrected working HTML. Publication depends mainly on coherent remaining narrative depth and the final independent check, not further bibliographic guessing or wholesale restart.
