---
version: alpha
colors:
  primary: "#3434DF"
  canvas: "#F5F5FA"
  surface: "#FFFFFF"
  ink: "#17152B"
  lilac: "#D9C8FF"
  yellow: "#F6E169"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
  body:
    fontFamily: "Manrope, sans-serif"
  mono:
    fontFamily: "IBM Plex Mono, monospace"
rounded:
  control: "8px"
  panel: "12px"
  feature: "16px"
spacing:
  unit: "4px"
  group: "16px"
  section: "32px"
components:
  button:
    height: "44px"
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
  input:
    height: "44px"
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  canvas:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  expressive-lilac:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.ink}"
  expressive-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
---
# Brandfolio design system

Version 0.1.0 — reviewable proposal. The owner confirmed expressive creative studio; exact palette/font/layout values are proposed. Do not claim approval of a screen from token approval alone.

## Overview

A working studio for people who make identities. Brandfolio should feel like a lively specimen book wrapped around a precise design tool. The signature is a **folio strip**: related logo, palette and typography specimens arranged as one coherent preview of a real brand. It appears in template discovery and brand overview, not as decoration on every screen.

Replace the rejected cream/olive/serif dashboard. No oversized motivational greeting inside the workspace, invented metrics, emoji logos, decorative section numbers, tilted fake documents or generic hero card. Retain product requirements, not the old visual skin.

Surface registers:
- Marketing/gallery: expressive color fields, generous type, actual template/document specimens.
- Workspace/editor/admin: task-first, readable density, restrained chrome; identity in type, active controls and specimen content.
- Published guideline: the customer’s brand, with minimal platform chrome.

Reference: Awesome DESIGN.md’s **static Figma design study** informed color-block pacing and the distinction between expressive marketing and practical controls. This is not a copy of Figma, its proprietary fonts, assets, logo, text or current live website. Better Design catalog matches were evaluated but not installed: dark analytics systems did not fit the chosen expressive light studio. The custom proposal follows the owner’s direction.

## Colors

Exact values live in [tokens.json](design-system/tokens.json). CSS is generated into [tokens.css](design-system/tokens.css); component code consumes semantic variables rather than copied hex values. The frontmatter above is a checked human-readable subset, not a second editable token source.

| Role | Light value | Use |
|---|---|---|
| Primary cobalt | #3434DF | Main action, links, selection controls; sparing brand identity |
| Canvas | #F5F5FA | Application background |
| Surface | #FFFFFF | Content/work surfaces |
| Ink | #17152B | Main text |
| Muted text | #625F75 | Supporting text, never low-opacity essential copy |
| Lilac | #D9C8FF | Expressive specimens/marketing; use ink text |
| Yellow | #F6E169 | Expressive specimens/marketing; use ink text |
| Control border | #898599 | Form boundaries when needed for identification |
| Selected surface | #EAE7FF | Active row/navigation fill |

Success, warning, danger and info have independent semantic foreground/surface pairs in both themes. Color alone never conveys a status. Decorative brand yellow is not a warning indicator. The client’s colors are content, not app control tokens.

Light theme is the initial application target. Dark tokens are supplied as a proposed counterpart and demonstrated in the reference sheet; no product dark-mode support is claimed until every component/state passes. Customer document canvas colors remain unchanged when the app theme changes.

## Typography

- **Outfit**: expressive display and key brand headings; 48–72px marketing, 28–32px page headings, 20px section headings. Do not put marketing-scale type over working records.
- **Manrope**: controls, forms, navigation and body. 16px body/phone fields, 14px dense desktop labels, 12px nonessential metadata. Weight 400/500/600/700 with restrained bold.
- **IBM Plex Mono**: color values, dimensions, IDs and measurement only. Never all body copy or decorative technical labels.
- Line heights: 1.05 display, 1.2 headings, 1.6 reading text, 1.4 utility. Tracking no tighter than -0.03em. Prose measure 65–75ch.

Use licensed self-hosted WOFF2 at application implementation time; retain license notices and verify actual loaded faces. The reference sheet may use a clearly disclosed hosted font source and fallbacks. Long names wrap; IDs can truncate with accessible full value. Do not truncate task labels.

## Layout

4px base unit, 8/16/24/32px working rhythm. Group related controls tightly; separate sections more strongly. Avoid spacing as decoration.

- Public: up to 1440px, 24–64px gutters; one expressive composition at a time.
- Workspace: 240px navigation, 64px toolbar; document scroll owns ordinary pages.
- Editor desktop: 224px section rail + flexible neutral canvas + 304px inspector. Canvas zoom does not scale control text.
- Below 1024px: inspector becomes a labeled drawer; below 640px: section rail becomes a sheet. Keep Save/status and section navigation reachable.
- Admin: same tokens/primitives; data tables with filters and page controls, not a separate visual brand. Table scroll is contained without trapping the whole settings page.
- Published guidelines: responsive reader; fixed print layout is a separate renderer mode.

## Elevation & Depth

Default surfaces are flat. Use borders for boundaries and soft shadows only for floating popovers/dialogs. No glass, gradient text, hard slab shadows or competing nested cards. Global scrollbar tokens apply to all app-owned scroll regions; visible thumb, hover and forced-colors behavior are required.

## Shapes

8px controls, 12px panels, 16px large expressive frames. Pills reserved for compact badges. Active navigation uses a filled selected surface, not a colored edge. Icons use one declared library (proposed Lucide, 1.75–2px stroke) with accessible names; no Unicode substitute icons.

## Components

See [component specification](docs/design/components.md), [surface briefs](docs/design/surfaces.md) and [UX contract](UX-CONTRACT.md). Canonical values flow JSON → generator → CSS → primitives → screens. Component state demos are specimens, not evidence that production components exist.

Motion: 120ms control feedback, 180ms normal transitions, 240ms drawers; honor reduced motion. No entrance animation blocks content. Pending feedback preserves button and panel geometry.

## Do's and Don'ts

**Do:** make the designer’s actual work the visual focus; use expressive color in bounded areas; preserve readable hierarchy; design all states; keep customer brand and platform styling separate; test long content and keyboard navigation.

**Don’t:** recycle the rejected interface; fake completed integrations; treat sample brands as customers; automatically publish uploads; use one-off component colors; hide errors in transient toasts; ship dead buttons; copy another company’s assets or proprietary fonts.

## Governance

Tokens are versioned. Token changes update JSON and regenerate CSS in one changeset. The check enforces frontmatter subset parity and key contrast pairs. New variants need a business purpose, accessibility behavior and state coverage. Separate capability status (planned/implemented/verified) from attractive visual specimens.
