# Permissions, privacy and administration

## Workspace roles

| Capability | Owner | Editor | Viewer | Published-link recipient |
|---|---|---|---|---|
| View assigned workspace | Yes | Yes | Yes | No |
| Create/edit brand or guideline | Yes | Yes | No | No |
| Export accessible revision | Yes | Yes | If granted | If published grant allows |
| Publish/revoke | Yes | Explicit permission only | No | No |
| Manage members/workspace | Yes | No | No | No |
| Submit community template | Rights-holder confirmation | Explicit permission only | No | No |
| Read published revision | Yes | Yes | Yes | Scoped grant only |

## Platform roles

| Role | Permitted scope | Explicitly excluded |
|---|---|---|
| Support | Account metadata, usage and job diagnostics | Browsing private client content by default |
| Moderator | Submitted copies, reports and review decisions | Original private project and arbitrary exports |
| Operations | Job/provider health and enforced limits | Secret values or unnecessary prompt content |
| Super admin | Role assignment and platform configuration | Unlogged, unrestricted impersonation |

Admin accounts require stronger authentication before public release. Privileged mutations need a reason, audit trail, and suitable confirmation. Support content access, if added, must be explicit, scoped, time-limited and recorded; no silent “log in as user.”

## Privacy boundaries

1. Upload/processing permission does not imply sharing permission.
2. Publishing a template does not imply AI-reference or training permission.
3. User declarations do not automatically establish rights to an image found on Behance.
4. Community submissions are sanitized copies with their own immutable asset manifest.
5. AI context is minimized; provider terms and retention behavior must be reviewed before real client data is sent.
6. Log IDs, timings and error codes by default; redact asset URLs, document content and secrets.
7. Store tokens hashed where possible; use expiring signed file URLs. Do not expose R2 buckets publicly by default.

## Admin workflows

- User lookup → metadata → scoped action → confirmation/reason → audit event → visible outcome.
- Submission queue → original submitted copy and sample-brand render → rights/quality checklist → approve/request changes/reject → contributor notification.
- Failed job → stage/provider error → eligible retry/cancel → deduplicated processing → updated status.
- Report → evidence → moderation decision → affected publication action → notification and appeal record where supported.

## Launch blockers

Cross-tenant isolation tests; role escalation tests; signed URL scope/expiry; malicious SVG/PDF cases; stale-write protection; secret scanning; admin MFA/roles; publication revocation; approved legal/retention decisions. The foundation does not claim these are implemented.
