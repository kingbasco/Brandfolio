# API and asynchronous contracts

Proposed endpoints, not available services. JSON responses have a stable error shape: `{ error: { code, message, fieldErrors?, requestId } }`. Never return provider secrets or private object paths in errors.

| Endpoint | Purpose | Required authority / behavior |
|---|---|---|
| GET /v1/workspaces | Membership-scoped listing | Authenticated identity |
| POST /v1/workspaces | Create workspace | Idempotent request; owner membership transaction |
| GET/POST /v1/workspaces/:w/brands | List/create brands | Membership; editor or owner for create |
| PATCH /v1/brands/:id | Update brand | Tenant check; expected version |
| POST /v1/assets/upload-intents | Issue object-specific upload grant | Role, type, size and quota checks |
| POST /v1/assets/:id/complete | Verify upload | Verify actual bytes/size and ownership |
| GET /v1/assets/:id/download | Issue scoped short-lived download | Authorize before URL issuance |
| GET/POST /v1/workspaces/:w/documents | List/create guideline | Valid brand/template ownership |
| PATCH /v1/documents/:id/draft | Save document | Base version required; 409 on conflict |
| GET /v1/documents/:id/revisions | Revision history | Viewer or higher |
| POST /v1/documents/:id/restore | Restore snapshot as new draft | Editor; original revision preserved |
| POST /v1/documents/:id/exports | Queue export | Revision, limits, idempotency; 202 |
| POST /v1/documents/:id/publications | Publish snapshot | Explicit publish permission |
| DELETE /v1/publications/:id | Revoke access | Owner/publisher; audit; no draft deletion |
| POST /v1/imports | Queue PDF/image conversion | Verified source assets; page allowance |
| GET /v1/jobs/:id | Job progress and result | Tenant-scoped; bounded polling/SSE |
| POST /v1/jobs/:id/retry | Retry eligible job | Deduplication; no duplicated export |
| POST /v1/ai/proposals | Generate scoped proposal | Explicit task, input revision, budget |
| POST /v1/ai/proposals/:id/accept | Apply proposal | Editor; reject if base revision stale |
| POST /v1/templates | Save private template | Explicit asset/placeholder manifest |
| POST /v1/submissions | Submit sanitized version | Rights confirmation and scope |
| POST /v1/admin/submissions/:id/decisions | Moderate submission | Moderator role and reason |
| POST /v1/admin/workspaces/:id/restrictions | Account restriction | Privileged admin and audit |

## Shared protocol

- Validate auth server-side using the provider’s supported JWT verification/session pattern.
- Cookie-based mutations require CSRF protection; strict origin/CORS policies apply. Do not use permissive credentialed CORS.
- Paginated lists use stable cursor ordering and explicit limits. Search/filter criteria are validated and tenant-scoped.
- Idempotency keys are bound to identity, operation and payload digest; conflicting payload reuse fails.
- Distinguish 401, 403, 404, 409, 413, 415, 422, 429 and 503. Avoid leaking existence across tenants.
- Retry safe reads with bounded backoff. Never automatically retry an unprotected external side effect.
- A successful upload is not a verified asset. A queued job is not a successful export. A proposal is not an approved guideline.
- Revoke publication grants and purge applicable CDN entries; already downloaded copies cannot be revoked.

## Save contract

Editor states: clean → dirty → saving → saved, or save-failed/conflict. Autosave is debounced and revision-aware; explicit Save flushes pending edits. Keep recoverable unsaved edits in memory and offer recovery after reconnect. Browser persistence for private document content is off until a separate privacy decision. Before navigation, use the shared unsaved-change dialog; actual page unload may use the browser lifecycle warning.
