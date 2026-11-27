# MGU Markdown Editor v0.4.0 — Engineering Specification

**Revision 0.1 | November 27, 2026 | Proposed implementation baseline | WA-008**

## Purpose

Distribute the renderer independently and add publication-oriented presentation and HTML output while maintaining the v0.3.0 capabilities. This build does not implement PDF publishing or persistence.

| ID | Requirement | Acceptance criterion |
|---|---|---|
| FR-401 | Independent renderer distribution | Build generates importable ESM bundle; Node and browser example consume without editor UI. |
| FR-402 | Backward compatibility | Prior 27 tests retained, with corrected escaped-text security assertion. |
| FR-403 | Publication presets | Four distinct styles available, no source or saved-state change. |
| FR-404 | Custom CSS | Valid approved declarations apply; unsafe/unsupported syntax rejected atomically. |
| FR-405 | HTML fragment | Current Markdown converts to markup without wrapper or source maps. |
| FR-406 | Full HTML document | Includes chosen styling, escaped title, viewport, charset and CSP. |
| FR-407 | Copy/download HTML | Output is current source even if preview stale; failed render cannot produce a misleading export. |
| FR-408 | Heading outline | Real heading tokens map to source lines; duplicate headings distinguishable; stale outline disabled. |
| FR-409 | Configurable renderer | Independent feature switches, no global state leakage, defaults retained. |
| FR-410 | Security | Raw HTML and image restrictions preserved; preview links inert; export links opt-in; restricted custom CSS. |
| FR-411 | Build verification | 38 automated source tests and successful standalone bundle import; abbreviated browser inspection. |

## Release gate

All automated checks must pass locally and both bundles must be generated. Brief manual verification targets new controls, standalone integration and data preservation. Record known limitations, lock and archive only after acceptance. Retain root dependency manifests and earlier versions unchanged. PDF generation, advanced pagination, session recovery and persistent publication profiles are excluded from this milestone.
