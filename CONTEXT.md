# Project context

Updated: 2026-11-04 (Africa/Lagos). Repository: `kingbasco/Brandfolio`.

## Confirmed by the owner

- Product: upload brand assets, create editable guidelines, select reusable templates.
- Import images and PDFs; optionally turn a corrected document into a template.
- Include an admin end, not just the designer-facing application.
- Entirely cloud-based development and operation; no local AI or owner-operated computer services.
- Start with free tools/allowances; do not silently enable paid services.
- Use this GitHub repository as the source of truth.
- Write product, development, architecture and design documentation before rebuilding.
- Use the seven tagged plugins; UI UX Designer was tagged twice and is one integration.
- Previous interface rejected. New direction: expressive creative studio, stronger color, distinctive typography.

- Latest design-system selection: [TapTap Design System](https://www.figma.com/design/t6KToC5v6W2KNpPpmcGVVK/?node-id=4-462). This supersedes the custom v0.1 proposal as the intended source. Extraction is pending an accessible copy.

## Proposed implementation decisions

- React + TypeScript + Vite client; Workers API; hosted PostgreSQL/Supabase Auth; private R2 assets.
- One versioned document schema shared by template generation, imports, editor and export.
- Structured editor before freeform canvas; AI changes are reviewable proposals.
- Default private records; publication and AI-reference/training permissions are separate.
- Cobalt/lilac/yellow system v0.1, specified in DESIGN.md. These exact values are proposed, not individually approved by the owner.

## Evidence and limits

The repository initially contained only `# Brandfolio`. There is no incumbent code, team research, logo, purchased font, pricing, live service configuration or production customer data here. Earlier mock brand names are not customers. Do not invent testimonials, adoption numbers or completed service integrations.

## Open decisions

| Decision | Needed by | Safe current treatment |
|---|---|---|
| Exact visual tokens and representative screen composition | P1 visual review | v0.1 proposal, easy to change through one source |
| Preview-image-first vs code-first screen workflow | First actual application surface | No standing workflow preference recorded |
| AI model/provider and data terms | P8 | No provider connected or training enabled |
| Retention periods, backup RPO/RTO and legal terms | Before public beta | No production deletion/retention promises |
| Published-link modes beyond revocable unlisted access | P5/P11 | No public sharing in foundation |
| Paid plans, prices and payment provider configuration | P11 | No billing enabled |
| Custom domain and final name clearance | Public launch | Brandfolio is a working name |

## Authority and conflict handling

Current explicit owner decisions outrank plugin defaults. Product/security contracts own behavior; DESIGN.md owns intent; tokens.json owns exact runtime values; UX-CONTRACT.md owns shared interaction rules. Plugin suggestions must not silently overwrite these contracts. Record material conflicts in an ADR. Changes to the rejected preview are out of scope.
