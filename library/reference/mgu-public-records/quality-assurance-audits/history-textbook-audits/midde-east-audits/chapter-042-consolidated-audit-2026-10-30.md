# MGU Middle East History — Chapter 42 Consolidated Audit

**Date:** October 30, 2026  
**Chapter:** 42 — Conversion, Arabization, Islamization, and the Mawali  
**Governing files:** *hISTORY OF THE MIDDLE EAST Authoritative Multi-Volume Chapter Outline.txt* and *MIDDLE EAST MASTER INSTRUCTIONS FOR CLAUDE.txt*.  
**Audit outcome:** STRUCTURE/HTML ACCEPTED — HISTORICAL DEPTH AND FINAL CONTENT NOT LOCKED.

## Measured structure and narrative
- Original upload: `Pasted text(20261030-215704).txt`, 163,934 bytes.
- Approved 35 numbered historical sections, divided 4+6+5+5+5+6+4, all present.
- About 8,090 direct historical narrative words across main section `p` elements, excluding instructional features, division banners, front/back matter, and headings.
- 35 historical sections; approximately 231 words average; approximately 156–366 words range. Twelve sections have fewer than 200 words, and most have two direct narrative paragraphs.
- 77 unique IDs; 77 internal links, all resolvable; four source windows; two map studies; two debates; three vocabulary features; full ancillary features and review materials.
- Opening six prose paragraphs, historical context three, summary ten, reflection four.
- Main conclusion: architecture and broad interpretive distinctions are correct, but the more demanding subjects are too compressed relative to the approved library-reference textbook standard, especially 42.6–42.10, 42.16–42.20, 42.24, 42.26–42.32 and language/communal sections. Do not apply an equal word-count quota.

## Historical checks
1. **§42.15 Dandan-Uiliq:** The draft says c.718 without distinguishing an older proposal. Better-supported date is second half of the eighth century, often c.760, with older c.718 dating attributed. **Tang-i Azao** Judeo-Persian inscriptions are usually dated 752–753. See *Encyclopaedia Iranica*, “Judeo-Persian Language” and “Persian Language i: Early New Persian.”
2. **Primary Source III, Išoʿyahb III:** Michael Philip Penn, *When Christians First Met Muslims*, Letter **14C to Simeon of Rev Ardashir**, pp. **34–36**, especially p.36, confirms the relevant text. The source criticizes a bishop, praises Arab treatment of clergy/churches, **and** alleges that some Christians abandoned Christianity under pressure to surrender half their property. The original paraphrase omitted the economic allegation and overgeneralized the claims of benevolence. Penn pp.30–31 specifically cautions against either a universal benevolence or a uniform 50%-tax inference. Corrected in working copy.
3. **Primary Source II, Ashras:** al-Ṭabarī, *History*, vol. XXV, trans. Khalid Yahya Blankinship (SUNY, 1989), printed pp. **46–48** (year AH 110 / 728–729), contains the tax/convert dispute and role of Abū al-Ṣaydāʾ. The account's source status and distinct tax terms remain explicitly qualified. The web PDF textual extraction confirms the passage; large PDF size prevented use of a web screenshot for this volume.
4. **§42.9, biography of ʿUmar II:** the *Sīra of ʿUmar ibn ʿAbd al-ʿAzīz* is attributed to **ʿAbd Allāh ibn ʿAbd al-Ḥakam**, who died 214/829; confirm against Perseus Catalog (different from later historian Muḥammad ibn ʿAbd al-Ḥakam). This draft's d.829 is correct.
5. **Primary Source I, ʿUmar II:** Yaacov Lev, “Islamization and Acculturation at the Time of ʿUmar II (717–720),” distinguishes **al-Balādhurī, Ansāb al-ashrāf VIII, p.146** (Baṣra governor) and **Ibn Saʿd, Ṭabaqāt VII, p.373** (Egypt governor). They are variant narrative settings, not one authenticated letter. Corrected working copy explicitly separates them.
6. **§42.30 Ashras chronology:** AH 110 / 728–729 and Abū al-Ṣaydāʾ Ṣāliḥ ibn Ṭarīf are supported by Ṭabarī vol. XXV. The figures recorded in the later narrative are not independently established.
7. **§42.18 Naṣr ibn Sayyār:** governorship approximately 738–748 and fiscal reforms initiated around AH 121 / 738 are supported by *Encyclopaedia Iranica*, “Khorasan v: History in the Abbasid Period”; current qualified wording is acceptable.
8. **§42.24 Pact of ʿUmar:** a later, varied normative tradition; identifying it as a secure seventh-century treaty would be inaccurate. Current cautious text is suitable. Relevant research: “The Pact of ʿUmar: The Making of a Tradition” and *Non-Muslims in the Early Islamic Empire*.
9. **§42.32 Bulliet:** claims should be labeled hypotheses derived from biographical name/genealogy samples, not demographic censuses or secure years of majority conversion. The manuscript already supplies the necessary caveats; avoid claiming a historical consensus around a specific midpoint.
10. **Chronology:** garrison cities originated in the late 630s; settlement in Khurāsān continued later. The original chronology bundled foundation under c.670–700 and is corrected in the working copy.
11. **PERF 558 opening:** bilingual Greek-Arabic receipt for 65 sheep at Herakleopolis/Ahnas dated 25 April 643, authenticated by documentary and scholarly accounts; no correction necessary.

## Technical audit
- Parsed as HTML with `lxml`/BeautifulSoup; 35 section IDs, 77 unique IDs, 77 working internal links, and 4 source windows.
- JavaScript syntax: `node --check` passed. Sidebar scrolling/highlighting script is text-identical to published Chapter 41.
- Chromium/Playwright rendering at widths **1440, 900, 390, and 320 px**: zero JavaScript page errors; document width equals viewport at each size (no page-wide horizontal overflow). Both chronology tables become stacked cards below 700 px; all cells have `data-label` attributes, and headings are visible on cards. This version's mobile design differs intentionally from Chapters 40–41 but works.
- The historical/source corrections were inserted as targeted string replacements, leaving CSS/JavaScript intact. Corrected working copy was re-tested at all four widths and all original 77 links remain valid.

## Consolidated production direction
Continue from `chapter-042-audit-corrected-working-draft-not-locked.html`, preserving all approved headings, IDs, seven divisions, features, source corrections, and responsive behavior. In **one** substantive completion pass, develop the actual historical narrative proportionate to the subject: mechanisms and lived experience of conversion, fiscal treatment, ʿUmar II and Ashras, variable meanings of `mawālī`, slavery/clientage and stipend inequality, denominational and legal differences, regional comparisons for Egypt, Iran, Syria, Iraq, Khurāsān/Transoxiana, and North Africa/Iberia, and the historiographical limitations of Bulliet's inference. Add contextual examples and sourced evidence rather than generic restatement, and keep Chapter 41/43/47/49 boundaries. Four paraphrase windows are now better identified: retain the precise Penn and Ṭabarī references and differentiated ʿUmar II variants. Once a full-depth draft has been delivered, perform a **single publication-proof audit** and lock promptly if it passes. Do not seek another micro-pass.

## Principal source URLs
- Encyclopaedia Iranica, Judeo-Persian language: https://www.iranicaonline.org/articles/judeo-persian-viii-judeo-persian-language/
- Encyclopaedia Iranica, Early New Persian: https://www.iranicaonline.org/articles/persian-language-1-early-new-persian/
- Penn, *When Christians First Met Muslims* (2015), pp. 30–36: https://almuslih.org/wp-content/uploads/2024/11/Penn-M-When-Christians-First-Met-Muslims.pdf
- Ṭabarī, *The End of Expansion*, vol. XXV, pp. 46–48: https://ghayb.com/wp-content/uploads/2016/09/Tabari_Volume_25.pdf
- Lev, *Islamization and Acculturation at the Time of ʿUmar II*: https://al-qantara.revistas.csic.es/index.php/al-qantara/article/download/622/619?inline=1
- Ibn ʿAbd al-Ḥakam title/author authority: https://catalog.perseus.tufts.edu/catalog/urn%3Acts%3AarabicLit%3A0214IbnCabdHakamMisri.SiraCumarIbnCabdCaziz
- Encyclopaedia Iranica, Khorasan: https://www.iranicaonline.org/articles/khorasan-v-history-in-the-%CA%BFabbasid-period/
- PERF 558 documentary discussion: https://www.persee.fr/doc/rebyz_0766-5598_2013_num_71_1_4989
