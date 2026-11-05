# Surface briefs and wireframes

These specify surface families, not blanket high-fidelity approval of all 46 screens. S01 has an implementation and scoped verification described below; remaining screens inherit these families plus the component/state contract.

## Public website — Persuade (S01–S07)

Job: understand the actual product and choose a next step. S01 follows the owner's large-banner/gallery brief: oversized system-sans headline on a turquoise banner beside original cover artwork, then a catalog with restrained metadata. Dark neutral actions remain readable against the banner. No fictitious testimonials or adoption metrics. The other public routes remain planned; legal/help routes will use a reading layout.

```text
Brandfolio       Templates  How it works  FAQs       Find your template
[Large brand-guideline promise + action]     [Original cover concept]
[Search / style filters / sort / shown count]
[Repeated concept covers → preview → SVG cover download]
[Planned workflow / accurate FAQ / attribution]
```

See [S01's implementation brief](landing-page.md) for canonical owners, states, responsive behavior and evidence. Authentication, account creation and full template editing are not exposed as working landing-page actions.

## Authentication — Operate (S08–S12)

One focused form, clear return path, specific validation, password-manager support. A bounded expressive side panel may carry a real product specimen on desktop; it disappears before shrinking the phone form. No fake dashboard hidden behind login.

## Workspace and brands — Operate (S13–S18, S23–S26)

Start with the job: “Brands” + short explanation + Create brand. Real records dominate; no oversized aspirational greeting. Brand detail uses a folio strip to connect logo, palette and type. Create forms appear after intent. Empty state explains what to add next.

```text
[Workspace nav] | Brands                         [Create brand]
                | [Search + filters + count]
                | [Real brand specimens / names / status]
                | [Details or relevant next action]
```

## Editor — Operate (S21–S22)

The document is the visual focus. Strong brand expression comes from customer content, not application wallpaper. Stable Save/status, clear current selection, explicit preview and delivery.

```text
Back / Document name       Saved state        Preview / Deliver
[Sections 224] | [Neutral canvas + customer document] | [Inspector 304]
[Move controls]             [Zoom]                     [Content/layout]
```

At tablet size, inspector becomes a drawer. At phone width, section navigation becomes a sheet and document preview fits width with explicit zoom. Controls remain readable; full desktop layout must not simply shrink.

## Import review — Operate (S19–S20)

Source and reconstructed document share a synchronized page selector. Issues are a navigable list with text explanations. Accepting conversion opens the normal editor. Phone mode toggles source/result without losing page position. A flattened image is labeled accurately.

## Recipient — Read / Experience (S28–S30, S44)

Client brand governs document. Contents navigation, revision/date, permitted downloads and optional comments. No studio admin navigation. Access failures reveal no private metadata. Review approval is tied to a revision.

## Administration — Operate (S31–S43)

Same typography, tokens and controls; higher information density. Overview leads with issues requiring action, then records and relevant interpretation. Avoid decorative metric-card rows. Detail shows scope, evidence and audited actions. Role and restrictions are explicit.

```text
[Admin nav] | Submissions                [Filters]
            | [Count / queue context derived from actual records]
            | [Name | contributor | submitted | status | open]
            | [Selected submission / evidence / review decision]
```

## Notifications and utility states

Account email, import/export completion and moderation decisions use the same plain verbs. System messages explain what happened and what remains possible. Never use a progress timer as evidence of backend work.
