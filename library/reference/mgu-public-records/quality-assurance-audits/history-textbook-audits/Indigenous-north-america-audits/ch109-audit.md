# MGU Chapter 109 — Consolidated First-Edition Textual HTML Audit

**Textbook:** *Indigenous Peoples of North America: A Continental History*  
**Volume:** X — Sovereignty, Resurgence, and Contemporary Indigenous North America  
**Part:** XIX — Red Power and the Sovereignty Era  
**Chapter:** 109, *The Occupation of Alcatraz*  
**Source manuscript:** `Pasted text(20261119-075448).txt`, an HTML draft supplied by the user  
**Final:** `ch109.html`, identical long-title alias `chapter-109-the-occupation-of-alcatraz.html`  
**Review date:** November 19, 2026 (UTC); development followed the user's November 18 local-date workflow  
**Decision:** **Approved for first-edition textual HTML publication, subject to the disclosed limits of targeted scholarly verification.**

## Narrative measurement

Measured exclusively from paragraph elements that are **direct children** of the twenty numbered narrative `<section>` elements. Excludes opening, features, bibliography, and back matter.

| Division | Sections | Direct narrative words | Original draft (prior audit) |
|---|---|---:|---:|
| I — Origins | 109.1–109.4 | 2,586 | 1,623 |
| II — Sovereignty and community | 109.5–109.8 | 2,959 | 1,424 |
| III — Leadership and support | 109.9–109.12 | 2,916 | 1,256 |
| IV — Negotiation and strain | 109.13–109.16 | 2,922 | 1,210 |
| V — Removal and legacy | 109.17–109.20 | 2,532 | 1,238 |
| **Total** | **20 sections** | **13,915** | **6,751** |

Target: 12,500–14,500 direct narrative words. Added approximately 7,164 words in one consolidated substantive expansion pass, retaining and strengthening the original paragraphs.

## Structural verification

- Exactly **5** division banners, **20** section IDs (`s109-1` through `s109-20`).
- Exactly **22** feature boxes: **6** primary-source, **3** vocabulary, **3** geography, **3** multiple-perspectives, **2** debates, **2** continuity-and-change, **1** timeline, **1** cause-and-effect, **1** everyday-life.
- Front matter: **12** objectives, **10** guiding questions, chronology and persons/places, and **22** preview vocabulary items.
- Back matter: chapter summary, key terms, chronology and geography questions, source questions, **18** review questions, **5** short-answer questions, **7** discussion questions, **4** writing exercises, research extension, reflection, and source references.
- **0 duplicate IDs**; **0 unresolved internal link targets**; **18** external linked sources; **6 of 6** primary-source windows contain direct, appropriately labeled reference links.
- Markup includes closing document tags, responsive desktop sidebar and mobile navigation.

## Specific historical and documentary corrections

1. **Hopi imprisonment:** The nineteen Hopi men from Orayvi were arrested in late 1894, confined at Alcatraz during 1895, and released in September 1895. Distinguish their arrest date from arrival at the prison. Source: National Park Service, https://www.nps.gov/articles/hopi-prisoners-on-the-rock.htm and https://www.nps.gov/alca/learn/historyculture/the-post-on-alcatraces.htm.
2. **1964 action:** Identify five Sicangu Lakota participants led by Belva Cottier and Richard McKenzie; approximately four-hour action on March 9, 1964. Their *47-cent-per-acre* symbolic offer is distinguished from the 1969 proclamation. NPS: https://www.nps.gov/articles/we-hold-the-rock.htm; *San Francisco Chronicle* archival report (2019): https://www.sfchronicle.com/chronicle_vault/article/The-American-Indian-occupation-of-Alcatraz-you-14828969.php.
3. **1969 proclamation:** Accurate description of the **$24 beads-and-cloth** offer and its critique of the **47-cent-per-acre** comparison. Text: https://teachingamericanhistory.org/document/alcatraz-proclamation/.
4. **Early 1970 governance:** Expanded occupation council, incorporation, committees, schooling, and material needs using the National Archives' account of contemporaneous occupier records. https://text-message.blogs.archives.gov/2020/03/03/we-hold-the-rock/.
5. **Radio:** Added specific Smithsonian episode descriptions for Dec. 29 and 31, 1969 and Jan. 5, 1970; descriptions are not passed off as direct listening transcripts. https://americanindian.si.edu/collections-search/edan-record/ead_component:sova-nmai-ac-448-ref100.
6. **Federal negotiations:** Replaced the inaccurate description of an archival photograph as a negotiating *transcript* with an occupier-produced *Alcatraz Newsletter* account (`NCIO Meets with Alcatraz Council`) paired with the distinct photograph. March 1970 counterproposal and April 3 rejection described with documented scholarly context. https://docsteach.org/document/ncio-alcatraz-council/ and https://docsteach.org/document/alcatraz-meeting/.
7. **January 1970:** Yvonne Oakes's January 5 death documented sensitively and without monocausal claims about the occupation's eventual end. NPS: https://www.nps.gov/alca/learn/historyculture/we-hold-the-rock.htm.
8. **Utilities and fire:** May 1970 government electrical shutdown and water-supply interruption distinguished from June 1970 fires; fire responsibility remains **unresolved** rather than assigned without evidence. NARA: https://text-message.blogs.archives.gov/2020/03/03/we-hold-the-rock/.
9. **Post-removal statement:** Correctly identifies a proposal issued **after** June 11, 1971, and archived in NARA records: requested transfer of deed, ecological restoration, sacred status, and ceremonial roundhouse. This is contrasted with the 1969 university/cultural complex program. A December 1989 reprint erroneously captions similar material as '1969'; the original day of composition is **not independently established**. NARA: https://text-message.blogs.archives.gov/2020/03/03/we-hold-the-rock/.
10. **Policy causation:** Maintains distinction between Alcatraz's influence on the national political climate and separate long-standing campaigns (Nixon's 1970 policy message; Taos Pueblo's Blue Lake restitution).

## Browser QA (Chromium, real rendering of final HTML)

Loaded the complete HTML in a Chromium page via browser content injection; this accurately executes embedded CSS and JavaScript without relying on the blocked file:// or localhost navigation of the test environment. No external styles or scripts required. Widths tested: **1366px desktop, 768px tablet, 390px mobile, 320px small phone**.

| Viewport | Document width | Horizontal overflow | JavaScript errors | Sidebar/navigation |
|---|---:|---|---|---|
| desktop (1366px) | 1366px | No | 0 | Desktop sidebar visible |
| tablet (768px) | 768px | No | 0 | Contents opens; Escape, link close, focus restoration pass |
| mobile (390px) | 390px | No | 0 | Contents opens; Escape, link close, focus restoration pass |
| small-phone (320px) | 320px | No | 0 | Contents opens; Escape, link close, focus restoration pass |

Chronology tables scroll within a bounded container rather than expanding the mobile viewport; `aria-expanded` changes with the Contents state; Escape and outside-click behavior and focus handling were implemented. The menu was tested by opening, navigating to §109.13, and closing. Desktop/tablet/phone screenshots retained separately for spot checks.

## Limitations and approval scope

**This is an editorial textual-HTML acceptance, not an exhaustive archival transcription review or external peer review.** The source studies label paraphrases, catalog descriptions, photographs, and archival reproductions; no unavailable document has been represented as a verbatim original. Detailed provenance of the later-republished 'last message' remains a disclosed research question, despite the NARA identification of a post-removal proposal. External URLs were grounded using public research but their future availability is not guaranteed. No new map illustrations or image assets are embedded; the chapter's geography studies remain text-driven, consistent with the existing MGU HTML instructional structure. Historical claims were selectively verified and substantially strengthened, but not every sentence has been independently checked against an original archival source.

**Publication decision:** Single consolidated manuscript expansion and correction pass complete. Meets the 20-section, 5-division, 22-feature, narrative-length, internal-link, and responsive-display requirements. **No further developmental build required for this first-edition textual HTML release.**

## File integrity

- HTML bytes: 216762
- SHA-256: `da55c3ee6342ca9fde7bdfe1469a5a11b317d6099e95ae974709cdf0a63a503b`
- Short and long HTML filenames are byte-identical.
