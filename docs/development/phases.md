# Development phases

Build vertical journeys: screen + data + permission + failure states + admin support + verification. Do not implement all page shells and call the product finished. No committed schedule is inferred from the earlier rough estimates; size work after the P0 proofs.

## Current status

P0 documentation and design-system artifacts are created by this foundation. Cloud provider proofs and application implementation remain outstanding. All P1–P12 product work is planned.

## P0 — Foundation and proofs

**Screens:** None; requirements and contracts. **Depends on:** None.

**Work:** Read docs, register skills, verify cloud quotas and scaffold a small hosted render/save/export proof. Design-system proposal and explicit open decisions.

**Exit gate:** Documentation check plus proof records. No product completion claim.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P1 — Shared design system and app scaffold

**Screens:** Foundation workbench; route shells. **Depends on:** P0.

**Work:** React/TypeScript build, generated token adapter, accessible Button/Field/Dialog/Select/Toast/Search/Table primitives, routing, CI, cloud preview. Design representative brand setup/editor/admin layouts before scaling.

**Exit gate:** Component states, keyboard/focus, 390/768/1440/1728 widths, 200% zoom and reduced motion. Real browser evidence.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P2 — Identity, tenancy and admin foundation

**Screens:** S08–S12, S25–S26, S30–S33, S42–S43. **Depends on:** P1.

**Work:** Hosted authentication, email verification/reset, workspace and memberships, role policies, admin authorization and audit. Settings start narrow.

**Exit gate:** Two-user cross-tenant denial, role escalation denial, session recovery and audited privileged actions.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P3 — Brand assets and platform templates

**Screens:** S03–S04, S13–S16, S34. **Depends on:** P2.

**Work:** Brand CRUD/archive, verified R2 uploads, colors/fonts/brief, template schemas and versioned admin catalog. One template first, then three.

**Exit gate:** Actual uploads persist; type/size rejection; authorization and asset-reference integrity. Three brands render with one template.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P4 — Guideline generation and editor

**Screens:** S17–S18, S21. **Depends on:** P3.

**Work:** Create/edit structured documents, bindings, layouts, reorder/add/remove, autosave, explicit flush, undo and revisions. Template switch preview and conflict recovery.

**Exit gate:** Create → edit → save → reopen; stale save rejected; edits survive failed save; template switching preserves content.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P5 — Cloud delivery and jobs

**Screens:** S22, S24, S28, S38. **Depends on:** P4.

**Work:** Hosted PDF rendering, job state machine, retry/idempotency, immutable publication snapshots, revoke, recipient viewer.

**Exit gate:** Fonts/long text/vector cases verified; retry does not duplicate output; draft changes do not alter published revision; revoked link denied.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P6 — Private template authoring

**Screens:** S23. **Depends on:** P4; P5 for export QA.

**Work:** Save reusable template, placeholder mapping, private versions, portable validated packages and sample-brand preview.

**Exit gate:** Brand A template applied to Brand B contains no unintentional Brand A content.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P7 — Public site and pilot readiness

**Screens:** S01–S02, S05–S07, S40; polish earlier screens. **Depends on:** P2–P6.

**Work:** Marketing/help/legal integration, real usage allowance display, limited content administration, pilot scripts and core release hardening. No billing required.

**Exit gate:** Invited designers complete core flow; blockers triaged; privacy/legal/retention decisions resolved before public access.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P8 — Hosted AI assistance

**Screens:** S39; editor/wizard drawers. **Depends on:** P4; P5 job foundation.

**Work:** Provider adapter, draft/rewrite proposals, usage ledger, bounded retries, accept/reject and stale-proposal checks.

**Exit gate:** Manual work survives outage; no silent overwrite; quotas enforced server-side; provider data handling reviewed.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P9 — Assisted PDF/image imports

**Screens:** S19–S20; jobs/admin additions. **Depends on:** P4–P5; P8 for 9B.

**Work:** 9A extraction/OCR and manual mapping; 9B evaluated multimodal reconstruction, uncertainty flags, partial results and field suggestions.

**Exit gate:** Owned test corpus measures correction effort and accuracy; malicious/large/scanned files bounded; original kept private.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P10 — Community and moderation

**Screens:** S27, S35–S37. **Depends on:** P6; P7 legal readiness.

**Work:** Sanitized submissions, rights records, versioned review, decisions, notifications, reports/removals.

**Exit gate:** Publishing exposes only approved copy/assets; permissions not conflated; moderation actions audited.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P11 — Collaboration and commercial features

**Screens:** S29, S44–S46; settings additions. **Depends on:** P2, P5; billing decisions.

**Work:** Invitations, workspace roles UI, client comments/approval tied to revision, scoped downloads, billing only when authorized.

**Exit gate:** Access changes enforced; approval pinned; payment webhooks idempotent; actual plan rules server-enforced.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## P12 — Permissioned AI improvement

**Screens:** S41; contribution controls. **Depends on:** P8–P10; legal/data decisions.

**Work:** Separate reference/training consent, provenance, curation, withdrawal workflow, versioned datasets and held-out evaluation. Retrieval before fine-tuning.

**Exit gate:** Each example traces to eligible permission; measured improvement; no unsupported untraining promises.

**Evidence:** linked code/PR, deployed cloud preview where applicable, test results, screenshots for affected surfaces, and unresolved limitations.

## Releases

| Release | Scope | Excluded |
|---|---|---|
| Foundation | P0 documents/system proposal | Application or service readiness claims |
| Internal alpha | P1–P5 | Community, AI training, payment |
| Private beta | P6–P7 | Unlimited public imports/AI |
| AI/import releases | P8–P9 | Automatic publishing of uploads |
| Community release | P10 | Unreviewed submissions |
| Team/commercial | P11 | Unapproved pricing assumptions |
| Improvement program | P12 | Training on every upload |

## Definition of done for every feature

User outcome works; server enforces roles; schema/API contract implemented; loading/empty/error/conflict paths covered; critical accessibility checked; cloud limits respected; tests run; docs updated; implementation status recorded honestly. A screenshot or mock counter is not backend evidence.

## Design-to-development gate

Before implementing a screen, name its S-ID, job, canonical components, data contract, required states, responsive behavior and permission requirements. Use the selected skills through AGENTS.md. Changes to shared tokens regenerate CSS and include affected component evidence. Preserve accepted decisions instead of choosing a new design language each phase.
