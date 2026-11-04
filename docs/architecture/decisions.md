# Architecture decision records

## ADR-001 — Repository reset (accepted, 2026-11-04)

Owner rejected the previous preview and named this repository. Preserve requirements, replace visual implementation. Do not import its source, sample workspace records or hosting credentials. Foundation documentation comes before application screens.

## ADR-002 — Cloud-only, free-first (accepted constraint)

Use hosted development and services. Free allowances are verified at integration time. No silent paid provisioning or owner-computer compute. Keep costly AI/import/export features separately gated.

## ADR-003 — Modular application and structured documents (proposed)

One schema links brands, templates, imports, editor and export. Use relational metadata and immutable revisions, not a giant JSON workspace object in R2. Tradeoff: structured layouts are less freeform but improve reliability and template switching.

## ADR-004 — Separate platform and customer brand styling (proposed)

The platform’s expressive identity must never recolor the customer’s brand. Platform tokens govern controls; document tokens and client assets govern canvas content. Admin uses the same primitives at a documented density.

## ADR-005 — Permissioned community and AI use (proposed default)

Private by default; sanitized submission copies; separate publishing/reference/training grants. No automatic ingestion of all uploads into a model dataset. Tradeoff: more deliberate contribution workflow, stronger trust and provenance.

## ADR-006 — Project skill adapters (implemented in foundation)

Install repository-owned `.agents/skills/*/SKILL.md` adapters for all seven named plugins, plus Premium’s upstream dependency. Adapters identify authoritative cloud packages/tools and project-specific routing. They do not redistribute complete upstream plugin bundles or pretend unavailable CLI binaries are installed. Capability checks and explicit gaps are recorded in the skill registry.

## ADR-007 — Expressive studio visual system (direction accepted; tokens proposed)

Owner chose expressive creative studio. Replace cream/olive/serif-dashboard treatment with cobalt-led identity, lilac/yellow specimens and expressive sans typography. Task surfaces keep quiet backgrounds, normal-size headings and clear controls. Gain: a more memorable creative identity. Cost: disciplined color allocation is needed to avoid visual noise. This is addressed by separate expressive, operational and document-canvas roles.
