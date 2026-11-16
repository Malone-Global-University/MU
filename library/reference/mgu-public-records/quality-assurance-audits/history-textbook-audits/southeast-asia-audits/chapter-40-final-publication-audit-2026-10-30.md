# MGU Southeast Asian History — Chapter 40 Final Publication Audit

**Chapter:** 40 — The Rise of Pagan  
**Volume:** III — The Classical Kingdoms of Mainland and Maritime Southeast Asia  
**Part:** VIII — Pagan, Đại Việt, and Champa  
**Date:** October 30, 2026 (America/Los_Angeles)  
**Disposition:** **APPROVED FOR PUBLICATION — LOCKED**, subject to the documented limitation that the original Chapter 1 HTML exemplar itself was not separately available for byte-for-byte model parity.

## Input and final artifact

- Submitted draft: `Pasted text(20261030-223823).txt` — 180,015 bytes, SHA256 `93cf480c96a4cfab07a6d89b0e3293a3562003b19740978587ca7b0d76fc6e43`.
- Publication final: `chapter-40-the-rise-of-pagan.html` — 179,589 bytes (UTF-8 LF), SHA256 `68d51437afbac1f8bc8938f903ac413353af7667e62ae05cd8f652d22448c7ef`.

## Plan compliance and depth

- Authoritative Southeast Asian History outline: Chapter 40 opens Part VIII and requires political formation of Pagan in the Irrawaddy basin, agricultural expansion, kingship, warfare, urban development, and the creation of a major Burmese-centered political system.
- Approved chapter-specific plan: 28 numbered historical sections across six divisions (4 / 4 / 6 / 5 / 5 / 4).
- All 28 sections consecutively present as `<section id="s40-1">` through `<section id="s40-28">`, each with its own sidebar anchor. **28/28 present**.
- **10,479 direct narrative words**, counted from paragraphs that are immediate children of the numbered sections; excludes instructional feature boxes, front matter, review apparatus, sidebar, and CSS/JS. Twenty-three sections have four direct paragraphs; five have three. No formulaic word-count expansion required.
- **14 integrated feature boxes**, including two methodological vocabulary boxes, geography, cause/effect, Thaton debate, three clearly paraphrased primary source windows, timeline, vocabulary on *dhammarāja*, multiple perspectives, everyday life, continuity/change, and territorial map study.
- Complete front and review matter: six opening paragraphs, eleven objectives, nine guiding questions, historical context, fourteen chronology entries, people and places, vocabulary, ten summary paragraphs, key terms, chronology check, geography/source/review/writing tasks, research project, and four reflection paragraphs.
- Chapter 41 retains primary responsibility for Buddhist institutions and society. Chapter 46 retains Mongol–Yuan campaigns; Chapter 59 retains successor-state transformations.

## Source-backed historical audit

1. **Early Pagan and the nineteen-village account:** The nineteen-villages origin narrative is documented as a later tradition in Bob Hudson et al., "The Origins of Bagan: New Dates and Old Inhabitants" (*Asian Perspectives* 40.1, 2001). Radiocarbon-dated settlement predates the conventional 849 foundation, and the text appropriately differentiates chronicle date from archaeologically established settlement.
2. **Tharabha Gate and early walls:** The World Heritage nomination discusses Old Bagan's walls and surviving Tharaba Gate. Dating remains dependent on historical and archaeological interpretations. The chapter's cautious wording is defensible.
3. **832 Nanzhao raid and Halin (corrected):** Contemporary Chinese histories refer to attacks on a Pyu polity and the removal of captives but do not name Halin as the attacked city. Corrected the Historical Context, Chronology Preview, and §40.3 to distinguish the recorded raid from debated site identification. Archaeological absence of clear destruction is not evidence of no conflict.
4. **Thaton conquest and Kalyani inscriptions (corrected):** Michael Aung-Thwin, *The Mists of Rāmañña*, ch. 5–6, establishes that the late fifteenth-century Kalyani inscriptions do not explicitly recount Anawrahta's conquest of Thaton. Corrected §40.12 and the Thaton debate box to avoid misrepresenting them as a direct conquest narrative. The account is presented as late chronicle tradition, with intermediate interpretations preserved.
5. **Myazedi inscriptions (verified/added):** UNESCO's Memory of the World International Register confirms the quadrilingual inscription (Pyu, Mon, Burmese, Pali), dated conventionally 1113, was registered in **2015**. Added this specific fact to §40.17 after independent confirmation. Source window remains clearly labeled as paraphrase.
6. **Song-period contacts:** The documentary record preserves accounts of missions from Pagan in Chinese sources, although dates and transmission differ by source; the general claim in the chapter is supportable without requiring fragile invented precision. See Laichen Sun, bibliography of Chinese historical sources on Burma, *Journal of Burma Studies* 2 (1997).
7. **Cūḷavaṃsa and Rāmañña (clarified):** This Sri Lankan chronicle refers to rulers associated with Rāmañña; direct identification with the Pagan monarch is not automatic. Clarified §40.26 to describe Rāmañña as associated with Lower Myanmar and note the identification problem. The work is itself a composite chronicle, not eyewitness confirmation of every event it narrates.
8. **Regional authority and ethnicity:** Sections on Pyu and Mon continuities, agrarian resources, and the geographical limits of royal authority appropriately distinguish direct evidence, traditional claims, and inference. No further source-critical correction was established as necessary in the substantive audit.

## HTML and Chromium checks

- **61 unique HTML IDs; 61 internal links; all targets resolve**.
- Six division banners; 28 distinct numbered content sections; 14 instructional boxes; chapter introduction and all review components present.
- Embedded JavaScript matches the previously locked Chapter 38 script **exactly**; `node --check` passes. No browser JavaScript errors.
- The Chapter 40 stylesheet matches the locked Chapter 38 baseline (apart from chapter-specific `.division-banner` and `.translation-note` rules). The **locked Chapter 38 responsive table rule** was restored without other structural changes.
- Chromium tests (1440px, 900px, 390px, 320px): no document-level horizontal overflow after correction; no JavaScript page errors; sidebar collapses as expected at tablet/mobile widths. Wide chronology tables scroll within their own elements on narrow viewports.
- The original submitted file **failed** at 390px and 320px (page reached approximately 507px due to wide chronology tables). The final HTML fixes that issue.
- Actual Chapter 1 model was not supplied in this audit turn; complete byte-for-byte comparison against that original shell is therefore unavailable. The full locked Chapter 38 CSS/JS baseline is the direct verified comparator.

## Source links

- UNESCO, Myazedi Quadrilingual Stone Inscription: https://www.unesco.org/en/memory-world/myazedi-quadrilingual-stone-inscription
- Hudson et al., "The Origins of Bagan": https://architexturez.net/doc/az-cf-175986
- Aung-Thwin, *The Mists of Rāmañña*: https://www.jstor.org/stable/j.ctt1wn0qs1
- UNESCO Bagan nomination file: https://whc.unesco.org/document/166328
- Nanzhao raid/Pyu site-identification historiography: https://history.methodfield.com/en/event/nanzhao-plunders-the-pyu-kingdom
- *Cūḷavaṃsa*, historical background: https://www.cambridge.org/core/books/abs/bagan-and-the-world/positioning-bagan-in-the-buddhist-ecumene-myanmars-transpolity-connections/9F6C75E65F052590E9118E8D40F55100

## Editorial disposition

**APPROVED FOR PUBLICATION — LOCKED.** Corrections are narrow and publication-critical, not a request for further chapter expansion. Reopen only for subsequently demonstrated material factual or technical defects.
