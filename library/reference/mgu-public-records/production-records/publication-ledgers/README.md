# MGU Computer Science Encyclopedia — Publication Ledgers

**Baseline:** November 23, 2026 (Pacific time).  
**Scope:** `C:\MGU\library\encyclopedia\computer-science\`  
**Public root:** https://maloneuniversity.org/library/encyclopedia/computer-science/  
**Purpose:** production and publication control, not a live website crawl or an exhaustive record of all recent ZIP extractions.

## Files

- 12 division-specific `*-publication-ledger.csv` files, each containing one row per recovered HTML destination or local exception.
- `master-publication-ledger.csv`: all division rows, for scripting or centralized review.
- `volume-summary.csv`: division-level baseline counts.
- `unit-summary.csv`: 176 standardized specialist units and article counts.
- `undefined-unit-child-lists.csv`: 21 units without recovered exact child manifests.
- `inventory-and-scope-exceptions.csv`: local-only/legacy paths and Data Systems scope/index decisions.
- `MGU-computer-science-publication-ledger.xlsx`: equivalent editable Excel workbook, with 12 division tabs, volume summary, unit summary and undefined child scopes.

## Recovered baseline

2,377 named Level 5 specialist destinations: 1,448 prescribed/named/reconciled destinations (including one scope-review candidate and the existing Data Transformation addition), and 929 proposed editorial destinations. 330 are recorded as produced on available evidence; the other 2,047 are **not recorded as produced**, not certified unwritten. The 12 ledgers additionally contain 192 overview/introductory articles, 176 standardized unit index destinations, 12 division indexes and 15 local exceptions (2,772 total rows). The Computer Science volume's root `index.html` was present in the supplied inventory and is outside the division ledger scope. The 461 local HTML rows in the division inventory include duplicate/legacy files; the original PowerShell snapshot contained 462 HTML files including the volume root. The user's later extraction activity and file count are not equivalent to a full refreshed path inventory.

## Status policy

- **Plan basis:** Prescribed = exact destinations from recovered specialist indexes or parent plans; Named local plan = recorded networking plan, not a verified live index; Proposed editorial plan = recommended filenames, not yet confirmed as locked; Structural target = overview or index required by unit layout; Existing introductory collection = Basics guide; Scope review required = potential cross-unit overlap; Existing reconciliation = an existing article omitted from a unit index; Inventory only / Legacy path — review = exceptions, excluded from new specialist targets. An active link is not proof of publication.
- **Production status:** Produced = local file or reported authored/delivered artifact, including confirmed sequence counts; Not recorded as produced = recovered target without production evidence in the records used. Do not interpret this as a new instruction to rewrite a file without checking current inventory. Unknown = source did not establish production.
- **Local deployment:** Present in snapshot / Not in snapshot. This is the supplied Nov 23 PowerShell listing, not the current C: drive. A delivered ZIP is not proof of installation.
- **Live publication:** Unverified initially. The website was not retrievable in this session. Update only after checking the actual public URL; completion and publication dates intentionally left blank if no exact date can be confirmed. File last modified is the snapshot's Windows timestamp, not a publication date.
- **Canonical URL:** Intended extensionless public URL for ordinary articles, trailing slash for index pages, following WA-007. Noncanonical exceptions have no inferred canonical URL. Titles generally derived from filenames; some index-provided titles are retained.
- **Undefined scope:** No invented child destinations. Three Networking and eighteen Programming units still need exact filename lists recovered or established. The ledger is a full *recovered named-target baseline*, not a final ceiling on future article count; Level 6 companion children are not comprehensively prescribed in the recovered manifests.

## Operating procedure

1. Filter by division and unit. Confirm a target is prescribed or approve a proposal before commissioning it.
2. Set production status upon article completion. Record the completion date separately from last modified.
3. Reconcile the exact path against a new recursive Windows inventory; update local deployment after extraction.
4. Verify the canonical public URL, then update live publication and publication date.
5. Add new rows only after an approved unit index establishes the exact filenames. Keep the master synchronized with division files; if using Excel, use the division tabs as the editable authority and re-export CSVs after updates.

## Primary recovered evidence

The row-level Source evidence field names the actual planning manifest, inventory, prior index-link check, or reported production sequence used. Key input files:

- `Pasted text(20261123-143118).txt`: recursive Windows listing (462 HTML files including root).
- `MGU_CS_Modernization_Reconciliation_2026-11-22-revised.md`: governing earlier scope and independent Basics treatment.
- `applications-of-computing-planned-file-tree.txt`, `computational-foundations-planned-file-tree.txt`, `computational-foundations-missing-subarticles.txt`, `computer-architecture-planned-file-tree.txt`, `MGU_Data_Systems_Planned_File_Tree_2026-11-23.txt`, `data-systems-website-verified-production-backlog-2026-11-23.txt`, `networking-systems-planned-file-tree.txt`, `programming-and-development-planned-tree.txt`.
- `hardware-systems-outstanding-subarticles-2026-11-23.txt`, `human-interaction-systems-remaining-subarticles.md`, `security-systems-proposed-subarticle-backlog.txt`, `software-systems-missing-subarticles-2026-11-23.md`, `specialized-and-emerging-systems-missing-subarticles-plan.md`.
- `index(20261123-055329).html`: Accessibility (26 exact specialist destinations); `index(20261124-033616).html`: Computer Networking (20 exact specialist destinations; timestamp in UTC, November 23 Pacific).
- November 23 production conversations: selected verified ordinal/filename matches and specific delivered articles; not an exhaustive final delivery log.
