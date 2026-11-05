# Public marketing direction — November 5, 2026

Owner reference: a supplied Plerouse banking-site screenshot. Adopt its centred spacious hero, cream/forest section contrast, pink/lime accents, rounded covers and oversized footer lettering for Brandfolio. Retain the template discovery gallery immediately after the hero. Do not copy banking claims, portraits, customer counts or product capabilities.

## Typography and tokens

The exact reference font cannot be verified from the screenshot. The owner has no source link and approved an alternative. Inter Tight is a close, free visual substitute, not a claimed identification. Source: https://github.com/google/fonts/tree/main/ofl/intertight . The normal variable font is self-hosted as a Latin WOFF subset (U+0000–024F, U+2000–206F, Euro and trademark), with its SIL Open Font License in public/fonts/OFL.txt. Non-Latin glyphs use fallback fonts. Font display uses swap.

Canonical marketing values live in design-system/tokens.json and are emitted by generate_tokens.py. src/marketing.css applies the marketing register to the public page; app/editor/admin tokens retain TapTap foundations. Forest text on paper/pink/lime, paper and muted text on forest, and muted text on pink all meet 4.5:1 for body text (minimum measured 4.51:1). Rounded cards use 14–16px, small controls may use pills. Headline scales 44–104px, with the owner's large-banner exception. Customer concept artwork keeps its own colors.

## Behavior and evidence

All catalog search/filter/sort/URL behavior, focus management, SVG downloads, empty states and artwork fallbacks are preserved. No fake customer claims or backend actions were introduced. Reduced motion removes the cover tilt. Desktop and phone captures were inspected. Six local Chromium checks passed at 390/768/1440px; this is not full WCAG or cross-browser certification. An independent review could not run because the agent service reported a usage limit; the primary agent reviewed the captures and contrast instead. Earlier review verdicts apply to the previous version only.
