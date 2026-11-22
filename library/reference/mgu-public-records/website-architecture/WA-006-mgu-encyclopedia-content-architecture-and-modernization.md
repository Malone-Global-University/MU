# Encyclopedia Content Architecture and Modernization

**Malone Global University — MGU Public Records**  
**Collection:** Website Architecture  
**Subject:** Computer Science volume: structural standards, editorial redevelopment, and implementation baseline

## Document Control

| Field | Record |
|---|---|
| Identifier | WA-006 |
| Collection | Website Architecture |
| Record date | November 21, 2026 |
| Version / status | 1.0 \| Technical report documenting adopted directives; prepared for filing |
| Implementation scope | MGU Encyclopedia, Computer Science volume |
| Policy precedence | November 21 directives supersede inconsistent November 19 planning practices |

## Executive Summary

MGU is modernizing its Computer Science Encyclopedia from a predominantly flat set of articles into a structured reference work. The adopted architecture uses summary style and content splitting, authoritative parent articles, dedicated subordinate directories, mandatory indexes, and navigational links established before all target articles are written.

Initial broken-link remediation is complete according to the site owner. The Cloud Computing subject unit provides the reference implementation: a rewritten parent article, 14 published child articles, and a dedicated index. The current task is to extend that architecture throughout the Computer Science volume while addressing missing articles identified by the original gap audit and upgrading earlier content.

## Report Purpose

This report consolidates five November 2026 development and reconciliation records into a durable architectural record. It distinguishes adopted standards, owner-confirmed implementation, historical audit evidence, and work still pending. It is not a new site audit or a claim of independent live verification.

Filing collection: `maloneuniversity.org/library/reference/mgu-public-records/website-architecture/`

---

## 01 / Information Architecture

### Volume and Subject Organization

MGU Encyclopedia comprises 25 subject-oriented volumes, digital analogues of physical encyclopedia volumes. Each is a self-contained reference work within the larger collection. Hierarchical restructuring proceeds volume by volume; the present production scope is exclusively Computer Science.

**Encyclopedia volume register:** Art; Biographies; Business; Communication; Computer Science; Conspiracy Studies; Crime; Culinary; Defense; Education; Engineering; Geography; Geology; History; Humanities; Illuminati; Language; Law; Math; Medical; Military; Political Science; Religion; Science; Social Science.

### Structural Model

| Level | Function | Computer Science example |
|---|---|---|
| Volume | Principal subject collection | `computer-science/` |
| Subject domain | Organizational subdivision | `networking-systems/` |
| Parent article | Authoritative overview of a subject | `cloud-computing.html` |
| Subarticle collection | Specialized entries and index | `cloud-computing-articles/` |
| Subarticle | Focused treatment of a narrower subject | `cloud-storage-services.html` |

There is no maximum hierarchy depth. Further content splitting is permissible when academic scope warrants a distinct article. The same parent-and-subordinate-directory pattern may be repeated at deeper levels. The terminology is summary style and content splitting (or forking), not a newly invented editorial classification.

### Reference Directory Pattern

```text
computer-science/
  index.html
  networking-systems/
    index.html
    cloud-computing.html
    cloud-computing-articles/
      index.html
      cloud-storage-services.html
      serverless-computing.html
      ...
```

A parent article and its subordinate directory occupy the same directory level. The child collection provides its own index; the parent article remains the substantive overview and the primary gateway to its children.

---

## 02 / Adopted Technical Standard

### Routing, Indexing and Link Policy

| Requirement | Adopted implementation rule |
|---|---|
| Directory indexes | Every folder under `/department/` and `/library/` should eventually contain `index.html`. Encyclopedia subordinate-directory indexes are mandatory. |
| Naming and creation | Name subordinate folders `<parent-slug>-articles/`. Create directories and their indexes preemptively, before child content is complete. |
| Article navigation | Place Sub-Articles directly above Related Topics. Sub-Articles lists hierarchical children; Related Topics identifies conceptual neighbors or cross-disciplinary subjects. |
| Planned targets | Use active links to designated future articles in parent articles and relevant sibling/index navigation, even before publication. |
| Contextual links | Link meaningful terms selectively. Do not substitute unrelated or merely similar articles to make a link resolve. |
| Canonical location | Maintain a defined authoritative location for each subject. Canonical URLs may be added or revised during later reconciliation; restructuring does not halt current production. |
| Page integration | Retain the established MGU page template and shared components. Exclude internal production notes from published encyclopedia content. |

### Intentional Missing Targets Versus Defects

The November 19 remediation replaced unresolved dead links with plain text. This was a corrective measure for the earlier site state, not a restriction on future development. Under the November 21 standard, an active link to a designated but unpublished article is permissible and represents a trackable production requirement. A misspelled, obsolete, or misrouted URL remains a navigational defect.

Link audits therefore require editorial interpretation: planned targets are routed to the content production backlog; accidental failures are routed to correction. An index should not conceal a known planned article merely because its content is awaiting publication.

### Canonical Example

- Parent: `/library/encyclopedia/computer-science/networking-systems/cloud-computing.html`
- Child index: `/library/encyclopedia/computer-science/networking-systems/cloud-computing-articles/`
- Child: `cloud-storage-services.html` within that subordinate directory.

---

## 03 / Editorial Development

### Production and Modernization Workflow

| Priority | Production responsibility |
|---|---|
| 1. Hierarchical restructuring | Establish subject placement, parent/child relationships, indexes, intended URLs and directory structure, volume by volume. |
| 2. Gap remediation | Prioritize missing articles identified by the original MGU Gap Audit; create their authoritative content and reinstate or establish intended links. This is part of restructuring and modernization. |
| 3. Content modernization | Review and rewrite earlier articles for accuracy, appropriate depth, organization, cross-references and authoritative references. |
| 4. Discretionary expansion | Extend subject units beyond identified gaps after higher-priority needs are addressed. |

These activities can overlap. The Computer Science volume is sufficiently structured to continue production while the hierarchy is refined. Modernization should precede extensive discretionary expansion where practical, but new article production need not stop.

### Screening Existing Content

Earlier articles are commonly about 9–10 KB; newer articles are commonly 40–100 KB. A file-size threshold below 40 KB is a practical flag for substantive review, not a minimum publication size or evidence of inadequate scholarship. Index pages and the independent Basics quick-start guides should not be judged by the same comprehensive-article benchmark.

### Content Scope and Overlap

The Basics collection consists of independent, non-rigorous introductory guides. Its overlapping titles are intentional. Elsewhere, similar article titles are presumed to reflect legitimate distinctions in academic scope or content splitting until actual content review establishes redundancy. Consolidation or relocation requires substantive evidence, not filename similarity.

### Publication Lifecycle and Milestones

Define scope and location; prepare the parent article, child directory, index and active links; publish the parent promptly; write and publish the designated children; track missing targets; and record completion. The parent complete milestone signifies a finished overview, unit complete signifies production of its designated children, and published signifies deployment and accessibility. Subsequent expansion does not invalidate an earlier completion milestone.

**Delivery convention:** supply finished HTML files with full Windows destination paths; separate routine technical QA reports are not required for encyclopedia articles.

---

## 04 / Inventory Baseline

### Computer Science Volume Inventory

The November 21 recursive PowerShell listing contained 190 HTML files: 173 non-index files and 17 index pages. Following the owner-confirmed removal of two duplicate files, the adjusted baseline is 188 HTML files, of which 171 are non-index files. This is an arithmetic reconciliation, not a new scan; subsequent production may change the totals.

| Subject domain | Direct non-index | Child non-index | Indexes |
|---|---:|---:|---:|
| Applications of Computing | 9 | 0 | 1 |
| Basics | 10 | 0 | 1 |
| Computational Foundations | 15 | 0 | 1 |
| Computer Architecture | 12 | 0 | 1 |
| Data Systems | 13 | 0 | 2 |
| Hardware Systems | 8 | 0 | 1 |
| Human Interaction Systems | 7 | 0 | 1 |
| Networking Systems | 13 | 14 | 2 |
| Programming and Development | 32 | 0 | 1 |
| Security Systems | 13 | 0 | 2 |
| Software Systems | 13 | 0 | 2 |
| Specialized and Emerging Systems | 12 | 0 | 1 |
| Volume root | 0 | 0 | 1 |
| **Adjusted total** | **157** | **14** | **17** |

The original listing contains 12 root-level subject directories, including Basics, and five subordinate directories.

**Removed files:** `applications-of-computing/entertainment-computing-old.html` and `data-systems/data-encryption (1).html`. Their authoritative counterparts remain.

### Applications of Computing

The nine established sibling-level parents are Business Computing, Computing Ethics, Educational Computing, Enterprise Systems, Entertainment Computing, Financial Computing, Industrial Computing, Medical Computing, and Scientific Computing. Entertainment and Gaming was consolidated into Entertainment Computing; gaming may be treated as a specialized subject within it.

---

## 05 / Implementation Evidence

### Reconciliation and Reference Implementation

#### November 19 Remediation Baseline

The historical 404 register recorded 182 failed link occurrences across 134 distinct target URLs and 55 referring HTML files. The separate corrective-action CSV contains 194 actions (111 relinks, 71 unresolved-link removals, eight table-of-contents corrections, two template repairs, one heading correction and one filename standardization). The action register and error register use different units and scopes; their totals are not interchangeable.

The owner confirmed the initial broken-link remediation complete. These records are retained as baseline evidence, not an open 404 backlog. New intentional links to forthcoming articles are governed by the later development standard.

#### Cloud Computing: Completed Subject Unit

The November 19 rewrite replaced incorrect Wireless Communication material with a substantive Cloud Computing parent article. Its production note records 20 principal sections, approximately 4,731 words of visible main-page text and 14 designated children. This establishes a benchmark of comprehensive treatment, not a fixed required length or section count.

| Published child articles | Published child articles |
|---|---|
| Cloud Service Models | Infrastructure as Code |
| Virtual Machines and Cloud Compute | Cloud Security and Identity |
| Containers and Cloud Orchestration | Cloud Reliability and Disaster Recovery |
| Cloud Storage Services | Cloud Monitoring and Observability |
| Cloud Networking and Virtual Private Clouds | Cloud Cost Management and FinOps |
| Cloud-Native Application Architecture | Hybrid and Multi-Cloud Architecture |
| Serverless Computing | Cloud Migration and Modernization |

All 14 children and the child index are present in the supplied directory inventory. The owner confirmed live publication of the children and correct parent navigation. The earlier roadmap retained obsolete `cloud-computing/` paths; the authoritative published folder is `cloud-computing-articles/`. The roadmap is a completed historical production record, not an outstanding queue.

Reference index: `maloneuniversity.org/.../networking-systems/cloud-computing-articles/`

---

## 06 / Implementation Register

### Current Status and Remaining Work

| Implementation item | Status at record date |
|---|---|
| Initial broken-link remediation | Complete; owner confirmed |
| Applications of Computing and Networking Systems indexes | Deployed; owner confirmed |
| Cloud Computing parent, 14 children, child index and navigation | Published and correctly linked; owner confirmed |
| Entertainment consolidation and obsolete references | Corrected; owner confirmed |
| Duplicate-file removal | Two files deleted; owner confirmed |
| Directory naming standard | Adopted; older directories pending standardization |
| Remaining parent article modernization and gap remediation | Ongoing |
| Other volumes | Outside current production scope |

### Directory Migration Candidates

| Earlier directory (relative to volume) | Intended standardized directory |
|---|---|
| `data-systems/data-science/` | `data-systems/data-science-articles/` |
| `data-systems/information-retrival/` | `data-systems/information-retrieval-articles/` |
| `security-systems/cyber-security/` | `security-systems/cybersecurity-articles/` |
| `software-systems/firmware/` | `software-systems/firmware-articles/` |

These locations remain implementation candidates, not verified completed migrations. Confirm intended parent articles, correct index coverage, canonical metadata and inbound links when standardizing directories. Review suspected misclassifications such as Digital Forensics, API Design, Machine Learning, and Logic and Discrete Systems against actual content before moving files.

### Architectural Conclusion

WA-006 records a shift from reactive link repair to proactive content architecture. The approved approach creates academic and navigational structure in advance, makes missing content traceable, and supports sustained development without requiring a fixed hierarchy depth or a complete global restructuring before publication. No unresolved strategic question prevents continued Computer Science production.

---

## 07 / Record Basis

### Source Records and Filing Boundaries

The report is a consolidation of the following five development records and the owner’s subsequent clarifications. The source records are preserved as historical evidence; the latest user directives govern where policies conflict.

| Development record | Role in WA-006 |
|---|---|
| MGU Computer Science Encyclopedia — Modernization and Expansion | Project objectives, baseline reconciliation, hierarchy and Cloud Computing benchmark. |
| MGU Computer Science Encyclopedia — Development Reconciliation | Outstanding questions and distinction between policy and implementation. |
| MGU Computer Science Encyclopedia — Current Inventory Review | Recursive file inventory and editorial review candidates. |
| MGU Encyclopedia — Revised Development Policy | Adopted volume scope, production sequencing, link and index requirements. |
| MGU Computer Science Encyclopedia — Supplemental Reconciliation | Duplicate removal, standardization intent and Basics/overlap clarification. |

### Supporting Records

- `MGU_CS_404_Reconciliation_Register_2026-11-19(1).md`
- `MGU_CS_Reconciliation_Actions_2026-11-19(1).csv`
- `MGU_Cloud_Computing_Rewrite_Production_Note_2026-11-19(1).md`
- `MGU_Cloud_Computing_Subarticle_Roadmap_2026-11-19(1).csv`
- `Pasted text(20261122-025118).txt` — November 21 recursive PowerShell inventory.

### Filing and Evidentiary Boundaries

The Website Architecture collection is the appropriate location for this report because it documents information architecture, routing, directory indexes and navigational design. The collection specifies PDF technical documents. Operational scripts, executable source, catalog metadata standards and independent implementation audits remain in their respective institutional collections.

This report uses the supplied records and owner confirmations. It does not certify a new recursive live audit, confirm deployment beyond the stated evidence, or represent the completion of remaining directory migrations. The document is prepared for filing; it has not been uploaded to the website.

**Collection:** MGU Public Records / Website Architecture
