# Initial development backlog

Status: planned unless explicitly marked. Each item becomes a small reviewable implementation change; these are specifications, not completed tickets.

| Ticket | Phase | Outcome | Acceptance evidence |
|---|---|---|---|
| BF-001 | P0 | Documentation and skill routing | Foundation checker passes; source/provenance documented |
| BF-002 | P0 | Cloud feasibility proof | Render/save/export test against chosen hosted services; actual limits recorded |
| BF-003 | P1 | Runtime scaffold and CI | Typecheck/build/test in cloud, branch preview available |
| BF-004 | P1 | Canonical primitives | Button/Field/Dialog/Select/Toast/Search state stories + keyboard checks |
| BF-005 | P1 | Representative layouts | Brand setup, editor, admin evidence at mobile/desktop; review against DESIGN.md |
| BF-006 | P2 | Authentication | Signup/verification/reset/reauth happy + failure flows |
| BF-007 | P2 | Tenant schema and policies | Cross-tenant read/write tests fail closed |
| BF-008 | P2 | Admin role/audit foundation | Permission denial, reason capture and audit record verified |
| BF-009 | P3 | Brand creation | Validated details persist and reopen |
| BF-010 | P3 | Asset pipeline | Actual type/size/ownership checks; verified files only |
| BF-011 | P3 | Versioned template engine | One template renders three different brands; no content leakage |
| BF-012 | P4 | Guideline creation | Brand/template/sections produce schema-valid document |
| BF-013 | P4 | Editor save/recovery | Save failure and stale conflict preserve user work |
| BF-014 | P4 | Reorder/template switching | Keyboard alternative and content preservation |
| BF-015 | P5 | Export jobs | Revision-bound output; retry safe; quality fixture set |
| BF-016 | P5 | Publication/revocation | Snapshot independence and scoped asset access |
| BF-017 | P6 | Private template conversion | Sanitized bindings tested against another brand |
| BF-018 | P7 | Pilot readiness | End-to-end participant tasks, issue severity and ship decision |

## Ticket template

**User story:** As [role], I can [action] so [outcome].
**Screen:** S-ID and state. **Dependencies:** schema/API/components.
**Acceptance:** success, failure, permissions, accessibility and persistence.
**Admin support:** diagnostics/action needed, or explicit none.
**Verification:** commands + browser scenarios + evidence location.
**Non-goals:** boundaries preventing accidental scope expansion.

## Example — BF-010

A workspace editor uploads a logo. Only permitted types/sizes get a signed upload intent; server verifies actual contents and tenant ownership before marking the asset ready. Upload progress and recoverable errors are visible. An unverified file cannot enter a guideline. A different workspace cannot fetch it. SVG is withheld until sanitization is implemented. No mock progress or fabricated success response qualifies.
