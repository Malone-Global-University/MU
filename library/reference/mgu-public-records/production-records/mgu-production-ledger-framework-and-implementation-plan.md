# MGU Production Ledger Framework and Implementation Plan

**Malone Global University | MGU Public Records**  
**Record series:** Production Records  
**Document identifier:** Pending assignment under existing document-control rules  
**Edition:** 1.0 | November 24, 2026  
**Status:** Proposed for institutional adoption  
**Scope:** University-wide production management

## 1. Executive determination

Malone Global University is transitioning from managing individual deliverables and reconstructing production activity through file inventories toward maintaining prospective, structured registers of institutional work. The growth of the MGU Encyclopedia illustrates the need: its Computer Science volume alone has 2,377 named specialist article destinations across twelve divisions in the November 23, 2026 planning baseline. That figure includes 929 proposed editorial additions; it is not a count of published articles or a fixed ceiling for the volume.

This report proposes a common production ledger framework for planning, controlling, measuring and documenting work across all MGU functions. It expands the operational role of Production Records to encompass the full lifecycle of institutional output: planned work, work in development, partial builds, completed deliverables, publication or deployment, and subsequent maintenance.

A production ledger is the authoritative operational register of individual work items within a defined program. Its purpose is to preserve scope, establish a reliable workload baseline, reduce duplicate assignments, reveal outstanding work and provide evidence for periodic production reports. A ledger does not, by itself, authorize expenditure, certify scholarly accuracy or establish that a deliverable has been published.

## 2. Ledger classification framework

| Code | Ledger family | Primary responsibility |
|---|---|---|
| DEP | Departmental Development | Establishment, expansion and institutional infrastructure of academic departments. |
| EDU | Educational Content | Lessons, courses, curricula, assessments and other instructional materials. |
| LIB | Library Production | Encyclopedias, textbooks, reference collections, cataloging and archival work. |
| MED | Media and Journalism | Newspaper articles, editorial publications and multimedia production. |
| WEB | Website Development | New pages, components, applications, microsites and digital functionality. |
| MOD | Modernization and Overhaul | Defined restructuring, migration, redesign and modernization programs. |
| MNT | Maintenance and Housekeeping | Routine corrections, link remediation, file organization and ongoing upkeep. |
| ADM | Institutional Administration | Public records, policies, reporting, governance and administrative deliverables. |

The eight codes are proposed internal ledger-family classifications. They are not public-record document identifiers and do not supersede existing MGU document-control conventions. New ledger families should be introduced only when existing classifications cannot reasonably accommodate a sustained operational responsibility.

## 3. Anticipated ledger portfolio

The following portfolio is a planning inventory of anticipated ledger types, not a declaration that all listed ledgers already exist or require immediate creation. Establish individual ledgers when the volume, complexity or recurrence of a program warrants sustained control.

### DEP — Departmental Development

Master departmental development; individual department development; academic program establishment; departmental resource development; departmental expansion. Track establishment, infrastructure and program milestones rather than duplicating individual instructional deliverables.

### EDU — Educational Content

Departmental lesson production; course development; curriculum development; quiz and examination production; educational illustrations and infographics; tutorial production; Malone Math production. Track distinct instructional outputs, organized by department, course or series.

### LIB — Library Production

Encyclopedia master production; individual encyclopedia volume publication; textbook series production; reference collection development; dictionary and terminology production; historical timeline production; library cataloging and acquisition; digitization and archival production. The Computer Science volume's master ledger and twelve divisional ledgers form the first implementation of this family.

### MED — Media and Journalism

Newspaper article production; investigative reporting; editorial and opinion publication; recurring columns; documentary production; multimedia production. Track commissioning, preparation, review and release of distinct media works.

### WEB — Website Development

New webpage development; website component development; CSS and JavaScript development; interactive educational applications; microsite development; website functionality development. Track new technical and structural deliverables, rather than counting every content article as a separate technical project.

### MOD — Modernization and Overhaul

Encyclopedia modernization; departmental overhauls; website redesign; content architecture restructuring; legacy content conversion; template standardization; canonical URL migration. Each ledger should identify the baseline, affected scope, target state and completion criteria.

### MNT — Maintenance and Housekeeping

Broken-link remediation; file relocation and organization; obsolete content removal; metadata correction; content correction; routine website maintenance; technical debt remediation; periodic content review. Recurring maintenance should record individual actionable findings and verified closure.

### ADM — Institutional Administration

Public records production; institutional policy development; work authorization implementation; institutional reporting; documentation modernization; governance document production. Record the intended administrative deliverable and its approval or issuance status where applicable.

**Classification rule:** Assign each work item one primary owning ledger, based on the deliverable and operational purpose. A department-level register may reference lesson and textbook ledgers without duplicating their individual records. A site-wide overhaul belongs to MOD; isolated routine corrections belong to MNT; new functionality belongs to WEB. Related work may carry cross-references, but aggregate reports must not count the same deliverable twice.

## 4. Records architecture and ledger design

### 4.1 Filing structure

All production ledgers should reside under the existing Production Records collection, with a dedicated directory for ledger discovery and operational files. The following is a proposed directory structure; existing archives remain in their established locations.

```text
production-records/
    index.html
    [framework and master planning PDF records]
    production-ledgers/
        index.html
        departmental-development/
        educational-content/
        library-production/
        media-and-journalism/
        website-development/
        modernization-and-overhaul/
        maintenance-and-housekeeping/
        institutional-administration/
    monthly-reports/
    weekly-reports/
    quarterly-reports/       (as established)
    annual-reports/          (as established)
```

Formal institutional plans and reports remain PDF publications, with editable source files retained according to records policy. Active ledgers may be maintained in Excel or CSV to support filtering, reconciliation and data aggregation; a public ledger index should identify the available files and their baseline dates. Preserve periodic dated snapshots of material baselines rather than silently overwriting historical scope.

### 4.2 Hierarchy of production control

| Level | Instrument | Control function |
|---|---|---|
| 1 | MGU Master Production Register | Institution-wide inventory of active programs, ledger locations and aggregate progress. |
| 2 | Ledger family | Functional classification and responsible operating domain. |
| 3 | Individual program ledger | Authoritative inventory of deliverables for a defined program. |
| 4 | Work item | Uniquely identified article, lesson, chapter, page, task or other deliverable. |

A large program may require subsidiary ledgers, such as the twelve Computer Science division ledgers. The program master should consolidate those records, not duplicate their manual maintenance. The institutional master register should summarize program counts and link to authoritative ledgers rather than attempting to maintain every article or task independently.

### 4.3 Minimum record specification

| Field group | Minimum data |
|---|---|
| Identity | Stable item ID, title or task description, owning family and program, parent unit where applicable. |
| Scope and priority | Plan basis, assignment or proposed status, priority, target deliverable and completion criteria. |
| Execution | Responsible function or owner, production status, relevant dependencies, last update and completion date. |
| Release | Intended location or destination, deployment/publication status and release date where applicable. |
| Evidence | Source or supporting record, related work item references, notes and exceptions. |

Program-specific fields may extend this common schema: article filenames and canonical URLs, textbook chapter numbers, lesson identifiers, component paths or maintenance findings. Use stable identities even when titles or paths change, preserving the relevant revision history.

## 5. Universal production status and lifecycle control

| Status | Meaning |
|---|---|
| Proposed | Identified for consideration but not yet included in the authorized or adopted production baseline. |
| Planned | Included in the established production baseline. |
| In Production | Work has commenced and remains active. |
| Partially Complete | A substantive partial deliverable exists; completion criteria remain unmet. |
| Under Review | Awaiting applicable editorial, technical or other acceptance review. |
| Completed | Defined production requirements have been satisfied. |
| Published / Deployed | Released or implemented in the intended environment; separately recorded where applicable. |
| Deferred | Temporarily suspended but retained in scope. |
| Superseded | Replaced by an identified successor deliverable. |
| Cancelled | Removed from active scope through a documented decision. |

Production status and release status should be maintained in distinct fields where a completed work may remain unpublished. A manuscript may be complete, an HTML file may be deployed locally, and its public URL may still be unverified. Unknown or unverified status must not be interpreted as either completion or failure. For tasks without a release stage, record release as not applicable.

## 6. Initial implementation priorities

The following proposed sequence emphasizes existing high-volume work and the operating programs identified during the initial ledger-planning discussion. It is an implementation priority order, not a binding calendar or numerical production quota.

| Priority | Initial ledger | Family |
|---:|---|---|
| 1 | Computer Science Encyclopedia Publication Ledger | LIB |
| 2 | MGU Master Departmental Development Ledger | DEP |
| 3 | Departmental Lesson Production Ledger | EDU |
| 4 | Textbook Production Ledger | LIB |
| 5 | Malone Math Production Ledger | EDU |
| 6 | Library Development Ledger | LIB |
| 7 | Website Overhaul Ledger | MOD |
| 8 | Website Housekeeping Ledger | MNT |
| 9 | Newspaper Article Production Ledger | MED |
| 10 | Institutional Public Records Production Ledger | ADM |

**Stage I — Establish the baseline:** Preserve the Computer Science ledger package as the initial operational model. Establish the directory and ledger index, standard fields, classification codes and reporting conventions. Register each ledger's scope, owner, source evidence and baseline date.

**Stage II — Extend to active programs:** Build the remaining priority ledgers from existing outlines, work plans, inventories and confirmed production evidence. Reconcile completed and partially built work before scheduling new assignments. Flag unknowns instead of inventing records.

**Stage III — Institutionalize reporting:** Create the master production register and derive weekly, monthly and subsequent periodic reports from maintained ledgers and corroborating worklogs. Expand to additional programs according to actual workload and administrative value.

## 7. Operating responsibilities and reporting

### 7.1 Distinguish institutional instruments

| Instrument | Governing question |
|---|---|
| Master plan | What is the program intended to accomplish? |
| Production ledger | What specific work is required, and what is its status? |
| Work authorization | What work has been authorized? |
| Worklog | What work was performed during the recorded period? |
| Audit | Was the work performed correctly against applicable requirements? |
| Production report | What progress was achieved during the reporting period? |

The production ledger is the operational source of truth for workload and progress, subject to reconciliation with authoritative evidence. It complements existing planning, work authorization, editorial standards, audits and document control. Those institutional functions retain their respective mandates.

### 7.2 Maintenance and reporting procedures

- Establish each program's scope and count distinct planned work items. Preserve proposed items separately from adopted baseline work.
- Update production records when work begins, a partial deliverable is produced, acceptance occurs, deployment is confirmed, or scope changes. Record evidence and relevant dates at the point of transition.
- Reconcile overlapping ledgers and duplicate work items before aggregating totals. Preserve completed records and record cancellations, deferrals and supersessions without silently deleting historical entries.
- Summarize beginning and ending scope, additions and removals, new completions, releases, active work and remaining backlog during the reporting period. Report significant exceptions and unresolved evidence gaps.
- Preserve historical reports and baseline snapshots. Correct material errors through a documented revision or addendum.

### 7.3 Performance measures

Use comparable counts within each program: adopted scope, open work, completed work, confirmed releases, deferred work, scope changes and unresolved exceptions. Completion percentage is completed in-scope items divided by the adopted baseline of in-scope items; define the inclusion and exclusion rules consistently. Track publication rates separately using release-eligible items as the denominator. State baseline dates and report revisions where scope changes affect comparisons.

Institution-wide figures should be presented by ledger family and deliverable type; one chapter, one article and one maintenance task are distinct outputs, not equivalent units of effort. File creation or modification counts remain supporting evidence, not automatic proof of completed work or scholarly acceptance.

## 8. Records classification and adoption

File this framework under MGU Public Records — Production Records, at the category root, with an identifier assigned according to existing document-control rules. Place the operational ledger collections under the proposed `production-ledgers/` directory. The existing periodic reports and historical reporting disclosures remain part of Production Records.

The Computer Science Master Publication Plan and its supporting ledger package should also be classified under Production Records; reconcile any provisional EPP designation with the applicable document-control process. No separate Editorial and Publication Planning record series is required under the proposed lifecycle approach.

**Filing location:** `C:/MGU/library/reference/mgu-public-records/production-records/`

**Public category:** <https://maloneuniversity.org/library/reference/mgu-public-records/production-records/>

**Proposed adoption:** Establish the eight ledger families as the initial operational taxonomy, recognize the Computer Science ledger as the first program implementation, and create additional ledgers progressively as production needs warrant. Maintain one authoritative source per work item, independent production and publication status, and evidence-based reporting. This report does not create new approval authorities or require every prospective ledger to be built immediately.

**Planning basis:** MGU's November 23, 2026 Computer Science publication-ledger baseline; the revised Production Records lifecycle mandate; and the institutional production-ledger classification and implementation discussion of November 24, 2026.
