# Project context

Updated: 2026-11-05 (Africa/Lagos). Repository: `kingbasco/Brandfolio`.

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

- Latest design-system selection: [TapTap Design System](https://www.figma.com/design/2To7iHU0ouUB2HarbFHM8z/). This supersedes the custom v0.1 proposal as the intended source. Source inspected; v0.2 foundations and reference sheet adapted with attribution and documented accessibility changes.

- Landing-page direction: a very large banner explaining Brandfolio, followed immediately by many template listings, inspired by the [Awwwards directory](https://www.awwwards.com/websites/).

## Implementation decisions

- React + TypeScript + Vite client implemented for the public landing page. Workers API, hosted PostgreSQL/Supabase Auth, and private R2 assets remain planned.
- One versioned document schema shared by template generation, imports, editor and export.
- Structured editor before freeform canvas; AI changes are reviewable proposals.
- Default private records; publication and AI-reference/training permissions are separate.
- TapTap-derived v0.2 is specified in DESIGN.md. Initial Button/Dialog components and S01 are implemented; the remaining component library, product screens, and owner acceptance remain outstanding.
- S01 includes 12 original SVG cover concepts, local search/style filtering/sorting, load more, modal preview and cover downloads. Full editable templates and guideline generation remain planned; see [landing-page scope](docs/design/landing-page.md).

## Evidence and limits

The repository initially contained only `# Brandfolio`. The repository now includes the landing-page frontend and original fictional cover artwork, but no validated team research, purchased font, pricing, live service configuration or production customer data. Earlier mock brand names are not customers. Do not invent testimonials, adoption numbers or completed service integrations.

## Open decisions

| Decision | Needed by | Safe current treatment |
|---|---|---|
| Exact visual tokens and representative screen composition | P1 visual review | TapTap-derived v0.2; validate each implemented surface |
| Preview-image-first vs code-first screen workflow | Future screen work | S01 was built from the owner's explicit banner/gallery brief; no standing workflow preference recorded |
| AI model/provider and data terms | P8 | No provider connected or training enabled |
| Retention periods, backup RPO/RTO and legal terms | Before public beta | No production deletion/retention promises |
| Published-link modes beyond revocable unlisted access | P5/P11 | No public sharing in foundation |
| Paid plans, prices and payment provider configuration | P11 | No billing enabled |
| Custom domain and final name clearance | Public launch | Brandfolio is a working name |

## Authority and conflict handling

Current explicit owner decisions outrank plugin defaults. Product/security contracts own behavior; DESIGN.md owns intent; tokens.json owns exact runtime values; UX-CONTRACT.md owns shared interaction rules. Plugin suggestions must not silently overwrite these contracts. Record material conflicts in an ADR. Changes to the rejected preview are out of scope.

## November 5 marketing and hosting update

The owner selected the supplied Plerouse screenshot as the landing-page reference and authorized a font alternative because the source link is unavailable. The reference font cannot be identified reliably; Inter Tight is the implemented substitute. The public site now uses cream, forest, pink and lime marketing tokens. Existing TapTap operational foundations remain available. Cloudflare hosts the landing page at https://brandfolio.adeseghacyril.workers.dev; backend services remain planned.
