# TapTap adoption and provenance

Selected by the owner. Accessible copy: https://www.figma.com/design/2To7iHU0ouUB2HarbFHM8z/. Inspected November 4, 2026 using Figma design context, screenshots and read-only node inspection. Earlier file keys were inaccessible; that blocker is resolved for this copy. No source Figma nodes were edited.

## Attribution

Adapted from **TapTap Design System | Developers**, © TapTap, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source license frame: `2220:27663`. The source credits Windows UI (Community) for its documentation-page template structure. Brandfolio uses its own reference-page layout and content. Changes: semantic accessibility mapping, responsive reference sheet, touch-target sizing, Brandfolio component contracts and experimental dark palette. No endorsement is implied. Preserve this notice and visible reference-sheet attribution when redistributing adapted material.

## Evidence map

| Source | Node / page | Extracted or inspected |
| --- | --- | --- |
| Colors | 4:925 / 4:462 | Seven named ramps, eight steps each, black/white; extracted labels and hex values |
| Typography | 4:1431 / 4:1418 | Platform font stack, seven type styles, 400/500 weights |
| Shadows | 4:1346 / 4:1339 | Four dual-shadow elevation recipes |
| Primary button | 15:12712 / 15:12480 | 36 variants; 40/36/24px heights, 4px radius; measured fills and padding |
| Default large button | 15:13086 | Design-context code and screenshot; turquoise fill, white source label |
| Input | 11:7673 / 11:7661 | Structural context inspected; detailed state extraction remains per-component work |
| Table | 11:31423 / 11:29730 | Structural context inspected; detailed cell/selection contracts remain per-component work |
| Basic dialog | 13:11412 / 12:11244 | Context and screenshot: small/medium/large, title/body/footer actions |
| License | 2220:27663 | Source license screenshot states CC BY 4.0 |

[Raw extracted evidence](../../design-system/taptap-source.json) contains source colors with text-node IDs, type documentation and shadow recipes. This is not a full file export or published-library subscription. The source's 50 pages include icons, inputs, navigation, feedback and other components; their presence does not imply they were all extracted or implemented.

## Intentional adaptations

- Keep Primary 600 #15C5CE; use Neutral 700 text instead of white for readable labels. Default, hover and pressed labels are checked.
- Use #007780 for light-theme link text, focus and primary control boundary; this is a Brandfolio adaptation.
- Use Neutral 600 for essential secondary copy instead of low-contrast Neutral 500.
- Retain light semantic surfaces, with darker accessible status text variants. Do not claim these foregrounds are original TapTap ramps.
- 44px standard hit area; source medium 36px may be used with sufficient spacing/hit area. Source small 24px is not the mobile default.
- Use the documented OS font stack without bundling proprietary fonts. Source type scale is preserved; reading text/phone inputs use 16px.
- Dark palette, product shell dimensions, responsive behavior, motion timings and client document isolation are Brandfolio extensions.

## Component migration

Primary/outline/ghost/link source styles map to Button primary/secondary/ghost/link. Add explicit busy/focus/error behavior under the shared contract. Inputs map to Field; tables to Table plus TableSelection; basic dialogs to Dialog with focus restoration; drawer/message/alert concepts route to existing planned owners. Inspect exact source variants when implementing them. Never replace security or asynchronous behavior with a visual-only source pattern.
