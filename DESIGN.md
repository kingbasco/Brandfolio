---
version: alpha
colors:
  primary: "#15C5CE"
  canvas: "#FAFAFA"
  surface: "#FFFFFF"
  ink: "#1F1F1F"
  accent: "#DFF7F7"
  auxiliary: "#FFE1D6"
  marketing-paper: "#FAF8F0"
  marketing-forest: "#132015"
  marketing-pink: "#F7B5D0"
  marketing-lime: "#D6F600"
typography:
  marketing:
    fontFamily: "Inter Tight, Arial, sans-serif"
  display:
    fontFamily: "system-ui, sans-serif"
  body:
    fontFamily: "system-ui, sans-serif"
  mono:
    fontFamily: "Consolas, monospace"
rounded:
  control: "4px"
  panel: "8px"
  feature: "8px"
spacing:
  unit: "4px"
  group: "16px"
  section: "32px"
components:
  button:
    height: "44px"
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  input:
    height: "44px"
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  canvas:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  selection:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
  auxiliary-sample:
    backgroundColor: "{colors.auxiliary}"
    textColor: "{colors.ink}"
---

# Brandfolio design system

Version 0.2.0 — adapted from the owner's selected **TapTap Design System | Developers**. This replaces the custom cobalt/lilac/yellow and Outfit/Manrope proposal. It defines the foundation and reference specimens; production React components remain P1 work.

## Source and attribution

[TapTap source file](https://www.figma.com/design/2To7iHU0ouUB2HarbFHM8z/) by TapTap, licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), as stated on source node `2220:27663`. Adaptations include Brandfolio content, responsive layouts, semantic accessibility colors, enlarged targets, and an experimental dark counterpart. No TapTap logo, endorsement, or proprietary font files are included. See [source mapping](docs/design/taptap-adoption.md) and [extracted evidence](design-system/taptap-source.json).

## Overview

**Public marketing update, November 5:** the owner-approved screenshot direction introduces cream and forest surfaces, pink and lime accents, rounded cards and Inter Tight. These tokens live in the marketing group of tokens.json and are generated alongside the unchanged operational TapTap palette. This is a public-site register; see [marketing direction](docs/design/marketing-direction.md) for scope, font provenance and composition.


A precise, approachable workspace with turquoise actions, neutral working surfaces, system typography, small corner radii, and restrained elevation. Warm orange is an auxiliary accent, not an error color. Customer identity assets supply the expressive content; the surrounding editor/admin chrome remains calm. Public marketing may use larger specimen-led compositions, but should use this foundation rather than revive the retired palette.

The folio strip remains a Brandfolio composition: a customer logo, palette, and type specimen grouped together. Customer colors and fonts are independent from platform themes. Published guidelines use customer styles.

## Colors

Canonical runtime values: [tokens.json](design-system/tokens.json), generated into [tokens.css](design-system/tokens.css). The frontmatter is a checked subset. Raw source colors are preserved separately; accessible semantic values must not be mislabeled as original TapTap values.

| Role | Light value | Origin/use |
| --- | --- | --- |
| Primary | #15C5CE | TapTap Primary 600; action background |
| Hover / pressed | #47CFD6 / #00ABB6 | TapTap Primary 500 / 700 |
| On primary | #1F1F1F | Neutral 700; dark labels replace source white labels for contrast |
| Auxiliary | #FF8156 | TapTap Auxiliary 600; bounded accent |
| Canvas / surface | #FAFAFA / #FFFFFF | Neutral 50 / white |
| Text / supporting | #1F1F1F / #4B4B4B | Neutral 700 / 600 |
| Divider / control border | #E1E1E1 / #8E8E8E | Neutral 300 / 500; control boundaries need stronger contrast |
| Selection | #DFF7F7 | Primary 200 |
| Links / focus | #007780 | Brandfolio accessibility adaptation; turquoise 600 is too light on white |

Semantic status surfaces come from TapTap's light ramps. Foregrounds are darker Brandfolio variants to meet small-text contrast. Keep labels/icons with status color. Filled primary buttons use an accessible border to distinguish their light turquoise fill from white surfaces. Dark tokens are a Brandfolio extension, not an extracted TapTap dark theme, and are not production-ready without component testing.

## Typography

Use the source's platform stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif`. Use Consolas with monospace fallbacks for values/code. Platform fonts are resolved on the viewer's OS; do not redistribute SF UI Text or PingFang files.

| Style | Size / line height |
| --- | --- |
| H1 | 30 / 38px |
| H2 | 24 / 32px |
| H3 | 20 / 28px |
| Title | 18 / 26px |
| Subtitle | 16 / 24px |
| Body | 14 / 22px |
| Caption | 12 / 18px |

Weights: regular 400, medium 500. Brandfolio uses 16/24 for reading and phone inputs, 14/22 for desktop utilities. The reference heading may use 48px as a documented display extension; operational page titles use H1. Use rem equivalents in implementation, accommodate zoom, wrap long names, and preserve full accessible labels.

## Layout

Use 4px control increments with 8/16/24/32px grouping. These are Brandfolio layout rules informed by inspected source components, not a claimed full TapTap spacing scale. Preserve 240px app nav, 64px toolbar, 224px editor section rail and 304px inspector where space allows. Below 1024px use a drawer for the inspector; below 640px use a section sheet. Tables scroll inside a labeled, keyboard-focusable region. Controls and save/error status remain reachable.

## Shapes and elevation

TapTap primary buttons: 4px radius, 40/36/24px large/medium/small source heights; default/hover/pressed/disabled, text/left-icon/right-icon variants. Brandfolio uses a 44px standard hit target and does not expose 24px controls without larger hit areas. Panels use an 8px adaptation. Pills are not the default badge shape.

Four extracted shadow levels are in the token file: subtle dual-layer shadows for raised elements, stronger levels for overlays. Use borders for static working surfaces. No ornamental glass, gradient text or nested decorative cards. Scrollbars, selection, focus and tabular numbers use theme tokens.

## Components and behavior

[Component specifications](docs/design/components.md) and [UX-CONTRACT.md](UX-CONTRACT.md) retain canonical ownership. TapTap supplies visual reference; Brandfolio supplies tenant permissions, recovery, autosave/conflicts, validation, keyboard operation and domain behavior. Follow the source map before implementing each component. Uninspected variants require a targeted Figma read, not a guess.

Motion remains a Brandfolio behavior extension: 120ms feedback, 180ms transitions, 240ms panels; Motion and Apple Design guide interruptible gestures and reduced-motion alternatives. Installing Motion is not evidence that animation is implemented.

## Governance

Update tokens, generated CSS, source mapping and specimens together. Verify contrast in all states, responsive layout, keyboard/focus and reduced motion. Preserve source attribution and distinguish source values from adaptations. Token or specimen approval is not approval of production screens. Do not copy TapTap branding, sample metrics, or factual claims into Brandfolio.
