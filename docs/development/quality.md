# Quality and release evidence

## Foundation checks (available now)

`python scripts/generate_tokens.py --check` verifies generated CSS matches canonical JSON.
`python scripts/check_foundation.py` checks files, links, screen/phase coverage, skill registrations and specified contrast pairs. It does not run vendor audits, product tests or certify WCAG compliance.

## Application checks (implement in P1 onward)

Typecheck, formatter, domain tests, API authorization tests, component state stories, keyboard/accessibility checks, browser end-to-end tests, build and cloud preview. Add commands only when implemented; do not add a CI command that always reports success.

## Critical test matrix

| Area | Required examples |
|---|---|
| Identity | Expired session, invalid invitation, role change |
| Tenancy | Two workspaces, guessed IDs, direct API reads/writes |
| Upload | Invalid MIME/signature, oversize, cancelled, malformed SVG/PDF |
| Editor | Long text, missing asset/font, undo, save failure, stale revision |
| Template | Switch without content loss, incompatible layout, private assets |
| Export | Font embedding/licensing, page breaks, vectors, retry duplication |
| Publishing | Draft independence, expiry/revocation, asset scopes |
| AI | Timeout, malformed output, prompt-injection source text, stale proposal |
| Admin | Unauthorized route/API, role assignment, reason and audit |
| Community | Sanitized copy, pending version isolation, withdrawn permission |

## Visual/interaction review

Capture affected surfaces at 390, 768, 1440 and 1728px where relevant; inspect 200% zoom, reduced motion, keyboard and long-content states. Settle animations before captures and verify images show the intended screen. Use a bounded review pass, batch fixes, then confirm. Product screenshots must use clearly labeled fixtures or actual authorized data.

## Skill verification limits

Premium’s upstream audit executable and Impeccable’s launcher are not bundled by project adapters. Run them when the corresponding upstream installation exists; otherwise mark them NOT RUN and use documented project checks. Better Design source rules are advice, not a rendered approval receipt. No missing tool may be replaced by a fabricated pass.

## Release evidence format

What changed; user-visible behavior; design decisions; commands and actual outcomes; rendered evidence; permissions tested; provider readiness; limitations. Distinguish passed, failed, not run and not applicable. Legal/retention decisions and service spend need resolution before the dependent feature ships.
