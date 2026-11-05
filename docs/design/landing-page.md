# Landing page — S01 and concept discovery

## Scope and direction

Owner request: a very big banner explaining Brandfolio, immediately followed by many template listings, using https://www.awwwards.com/websites/ as inspiration. This is a user-authorized S01 slice of P7 pulled forward with P1 React/Vite scaffolding; P1 and P7 are not complete.

Mode: Persuade, followed by an artifact-led catalog. Preserve TapTap platform tokens. Signature: an oversized two-line brand-book headline on turquoise beside a real downloadable concept cover. The gallery follows directly, with restrained metadata and large 4:3 covers. A feature-heavy marketing sequence before the gallery was rejected in planning because it delays the user's requested template discovery.

Awwwards was inspected in a cloud browser. Its broad gallery/filter organization informs the layout; no logos, site screenshots, award labels, promotional claims, or customer metrics were copied. The text-fetch service timed out; browser navigation succeeded. Preview assets are original authored SVG brand-cover concepts with embedded titles/descriptions. They contain fictional identities, not customers. No proprietary fonts or external stock images are requested.

## Layout

- Header: Brandfolio home, Templates, How it works, FAQs; catalog CTA. Mobile navigation is a disclosure.
- Banner: 'Your brand. By the book.' plus explicit brand-guideline template explanation, catalog action, workflow anchor and featured concept preview.
- Catalog: 12 concepts, first nine shown; style buttons, immediate local search, native sort, result count, load more. Three columns desktop, two tablet, one phone.
- Cover preview: named modal with full cover, style/description/palette, working SVG download, close and return to discovery.
- Planned workflow, accurate FAQ, final catalog action and attribution footer.

## State and behavior contract

Public read-only frontend; no authentication, server writes or user uploads. Canonical owners: packages/ui/Button.tsx, packages/ui/Dialog.tsx; App owns catalog query/filter/sort. Original catalog data lives in src/data/templates.ts. Artwork handles image failures with a named fallback. Query/filter/sort persist in the URL and restore on refresh/history navigation; no results offers reset and restores search focus. Load more preserves existing records, focuses the first newly appended cover, and updates the polite shown/total live count. No artificial network loading or fake successful saves.

Dialog uses native modal semantics plus explicit boundary Tab cycling, Escape, scroll lock and trigger-focus restoration. SVG download is available now. Full editable templates, account creation, guideline generation, AI, publishing and billing remain unavailable and are not advertised as working actions. Catalog and preview label assets as concepts. No fabricated page count appears in the UI.

## Visual mapping

Application CSS imports generated design-system/tokens.css. Palette and typography remain TapTap-derived; the user's explicit large-banner request permits 48–120px marketing display text while operational headings stay unchanged. Responsive geometry belongs to this surface. Artwork colors are independent customer-concept data and must not change app controls. Reduced motion removes transforms/transitions; all meaningful actions are semantic links/buttons. Mobile search input text is 16px and all main controls have 44px or larger targets.

## Validation

On November 5, 2026, npm run format:check, npm run build (including TypeScript), six Playwright tests and the foundation checker passed in the cloud workspace. Desktop/mobile screenshots were refreshed after the final corrections. The independent reviewer returned **ship** for the two-item correction pass: phone search sizing and load-more focus/count feedback both resolved. This is a scoped verdict, not a blanket design or accessibility certification. Playwright covers filter/search/sort/reset/URL restoration, concept download, modal keyboard behavior, failed images, FAQs, mobile navigation, image loads and overflow at 390/768/1440px. Deployment, broad browser certification and full WCAG conformance are not implied. The [verification record](../development/verification.md) documents tool limitations and the remaining Better Design density finding.

The finished surface was compared with DESIGN.md, generated tokens, current CSS and Button/Dialog implementations. This is an extension of the established TapTap-derived world: DESIGN.md and token files are preserved. Surface-specific display sizing, gallery layout and concept artwork belong to this brief, not a new global identity. DESIGN.md's earlier P1 implementation-status wording remains historical; the phase plan and UX contract record current component status.
