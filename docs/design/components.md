# Component specification

Every component requires default, hover, focus-visible, pressed/selected, disabled and busy states where relevant. Forms add invalid/help; data regions add loading/empty/no-results/error/partial. All are **specified**, not implemented React components yet.

| Component | Anatomy / variants | Accessibility and behavior | Principal screens |
|---|---|---|---|
| Button | label, optional icon, busy indicator; emphasis × intent | 44px target, stable busy width, real disabled state | All |
| IconButton | named action, tooltip | aria-label, keyboard focus, 44px target | Editor/admin |
| Field/Input | label, input, hint, error | explicit association, invalid text, 16px phone input | S08–S12, S16, S25–S26 |
| Textarea | label, body, expansion | auto-grow and accessible expanded view | S16, S21 |
| Select/Combobox | trigger, listbox, option, query | keyboard selection, Escape, collision, no hover-only discovery | S18, S21, admin |
| Checkbox/Radio | control + clickable label + help | fieldset/legend for groups; tri-state only when meaningful | Permissions, sections |
| Switch | label + current state | only immediate reversible settings; confirm risky changes separately | S25, S43 |
| ColorField | swatch + HEX text + role | validation; never color-only meaning | S16, S21 |
| UploadField | picker, drop zone, file rows, progress/error | non-drag alternative; truthful progress/cancel | S16, S19 |
| AssetTile | preview, filename, role, size, menu | readable name, safe preview, state | S16, S29 |
| TypefaceSpecimen | font role, sample, license/source metadata | fallback clearly identified; sample not UI font | S16, S21 |
| Dialog/AlertDialog | title, body, actions | focus trap/restoration, least-destructive focus when appropriate | Cross-cutting |
| Drawer | title, content, close | modal choice explicit; mobile inspector modal | S21, S20 |
| Toast/InlineNotice | tone, message, optional action | live region; critical messages persist inline | Cross-cutting |
| Tabs | tablist, tab, panel | arrow navigation, selected semantics, no hidden required errors | Brand/settings |
| Navigation | workspace identity, links, current item | nav landmark, aria-current, skip link | S13–S27, admin |
| Breadcrumb | ancestors + current item | meaningful path, no repeated page title decoration | Details |
| Search/FilterBar | query, clear, filters, result scope | URL state, keyboard, cancellation | Libraries/admin |
| Table | header, cells, sort, selection, pagination | semantic table; aria-sort; explicit bulk scope | S32–S43 |
| Pagination/LoadMore | range + previous/next or more | stable focus, announced updates | Lists/catalog |
| StatusBadge | text + optional icon + semantic surface | no color-only status | Documents/jobs |
| Empty/ErrorState | explanation + recovery action | distinguish no data/no results/failure | All lists |
| Progress/JobTimeline | stage, status, attempt, error | announce stage not every percent; cancel only if supported | S24, S38 |
| BrandFolioStrip | logo/palette/type specimens | one coherent artifact; client colors remain content | S15, S03–S04 |
| TemplatePreview | pages, format, included sections, use action | keyboard browsing; accurate previews | S03–S04, S23 |
| SectionRail | order, title, selected item, move controls | non-drag reorder; delete separate | S21 |
| DocumentCanvas | schema renderer, pages, zoom | no app colors leaking into customer document | S21–S22, S28 |
| Inspector | scoped fields and reset | shows selected block/section, preserve focus | S21 |
| SaveStatus | revision/time/state + retry | persistent error/conflict, polite status | S21 |
| RevisionHistory | time, author, preview, restore | restore creates new revision; explicit action | S21 |
| AIProposal | source scope, diff, accept/discard | no silent apply; show stale state | P8 additions |
| ImportComparison | source, reconstruction, issue list | stacked phone mode; uncertainty text | S20 |
| PublishPanel | revision, audience, assets, revoke | explicit exposure boundary, snapshot confirmation | S22 |
| PermissionField | purpose, scope, terms, opt-in | unchecked optional grants, no bundled consent | S27, S41 |
| ModerationPanel | submitted copy, evidence, reason, decision | scope enforced; no private-source browsing | S36–S37 |
| AuditEntry | actor, action, object, time, reason | accessible chronology; redact content | S42 |

## Surface states to demonstrate before reuse

- A field with long label, help, validation, autofill and busy submission.
- Button intent and emphasis independently; danger cannot look like ordinary navigation.
- Selected navigation/table row on both themes with contrast intact.
- Modal plus nested confirmation with correct focus return.
- Upload success, rejection, interrupted and retry.
- Table with 0, 1 and many rows; long names and narrow viewport.
- Editor missing font/image, long paragraphs and stale revision.

## Governance

New patterns start in shared primitives, with a documented reason and state coverage. A feature may compose primitives but must not fork spacing, colors, toast timing or confirmation rules. Implementation owners are named in UX-CONTRACT.md. Review token changes across affected public/product/admin contexts, not only the screen that motivated them.

## TapTap source mapping

Visual foundations now follow [TapTap adoption](taptap-adoption.md). Primary/outline/ghost/link styles map to existing planned button ownership. Source primary buttons use 4px corners and default/hover/pressed/disabled variants; retain Brandfolio 44px targets, dark readable labels, focus, busy and keyboard contracts. Input/table/dialog pages are identified in the evidence map; read detailed source nodes when implementing those variants. Production primitives remain planned.
