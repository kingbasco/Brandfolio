# Shared interaction contract

Visual source: [TapTap-derived v0.2](docs/design/taptap-adoption.md); source appearance does not replace this behavior contract.

Status: implementation contract for upcoming code. No primitives listed below are implemented by this document.

## Canonical ownership

| Capability | Planned owner | Variants | Required evidence |
|---|---|---|---|
| Button | packages/ui/Button | primary/secondary/ghost × neutral/danger; default/compact | Keyboard, busy width, contrast |
| Field/Form | packages/ui/Field + domain schemas | create/edit/inline | Label/error association, first-error focus |
| Select/Listbox | packages/ui/Select | authored listbox; native only when OS popup is accepted | Keyboard, focus, collision |
| Date | packages/ui/DateField | typed date first; authored picker when required | Locale, invalid dates |
| Table selection | packages/ui/TableSelection | current page/all results explicitly distinguished | Mixed/selected scope and bulk confirmation |
| Scrollbar | generated tokens + global app CSS | ordinary document vs bounded table/editor | Visibility, contrast, keyboard scrolling |
| Toast | packages/ui/NotificationProvider | success/info/warning/error | Live region, deduplication |
| Dialog | packages/ui/Dialog | modal/alert; drawer explicitly modal or nonmodal | Trap, Escape, restore, stacking |
| Search | packages/ui/SearchField | local/remote | Clear, 300ms debounce, IME, stale cancellation |
| CRUD | route/service adapters | create-return; guideline-create-and-edit; editor-stay | Full flow and failure recovery |
| Save state | packages/ui/SaveStatus + document service | clean/dirty/saving/saved/error/conflict | No lost edits or stale overwrite |

## Navigation and lists

Native links for destinations, buttons for actions. Preserve committed query/filter/sort/page in URL; no sensitive raw source content in URLs. Stable cursor pagination for admin tables; Load more for template discovery. New filters reset cursor. Empty datasets and no search results have different guidance. Every search has an accessible clear control that restores input focus.

## Forms

Use app-owned validation with `noValidate`; keep semantic input types and labels. Do not disable submit merely because a form is incomplete. On submission, prevent duplicates, preserve fields, focus the first error and associate error text via aria-describedby/aria-invalid. Keep button dimensions stable. Textareas auto-grow with a tested fallback and resize disabled by the shared primitive; offer explicit expansion for long copy.

## Overlay and confirmation

No browser alert/confirm/prompt for product decisions. Canonical dialogs have accessible title/description, initial focus, focus containment, Escape and restoration. Confirm destructive, publication, privacy/permission-changing and costly actions with object and consequence. Routine reversible Save needs no confirmation. Unsaved in-app navigation uses a shared dialog; beforeunload is limited to actual unload.

## Editor and asynchronous work

Autosave is debounced and revision-aware, with explicit Save to flush. Show clean/dirty/saving/saved/error/conflict and retain entered edits after failure. Undo/redo operates on documented editing units, not arbitrary network successes. A restored revision creates a new draft. Do not publish through autosave. AI suggestions are previewed and individually accepted; accepting stale proposals requires reconciliation.

Job statuses reflect server state, not timers pretending work completed. Cancellation and retry labels reflect actual backend support. Partial import results remain usable and uncertainty is visible. Toasts acknowledge, but persistent errors also appear beside the failing work.

## Accessibility, responsive behavior and locale

WCAG 2.2 AA target. 44px standard touch targets; compact 36px visuals require sufficiently sized hit areas or an equivalent accessible mode. Visible focus, no obscured focused controls, reduced motion, non-drag reordering, keyboard-compatible dialogs/lists and password-manager/paste support. Body text 16px on phone forms. Locale-aware formatting, UTC storage, display timezone visible where operationally important. Strings externalized; no localization rollout claimed yet.

## Reference-sheet boundary

The documentation specimen demonstrates token application and simple theme/state examples. It is not a production component library, editor, moderation system or form submission backend. Implementation must use the canonical owners above once created.
