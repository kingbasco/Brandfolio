# Data and lifecycle model

Logical schema proposal; implement with reviewed migrations, constraints and RLS tests.

| Entity | Keys and relationships | Key invariants |
|---|---|---|
| profiles | auth user ID | No duplicate password store |
| workspaces | UUID, owner membership | Ownership change is explicit and audited |
| memberships | unique workspace/user, role | No cross-tenant escalation |
| brands | workspace FK, name, facts JSON | Archive does not destroy referenced assets |
| assets | workspace FK, opaque R2 key, MIME, size, hash, lifecycle | uploaded → verified → ready; rejected/quarantined alternatives |
| brand_assets | brand/asset FKs, role | Asset tenant matches brand tenant |
| documents | workspace/brand FK, draft version, template version | Consistent tenant FKs and optimistic concurrency |
| document_revisions | document FK, sequence, schema version, content JSON | Immutable; unique document/sequence |
| templates | owner workspace or platform owner, visibility | private by default |
| template_versions | template FK, schema/layout JSON, asset manifest | Immutable once published/used |
| jobs | workspace FK, type, input revision, idempotency key, state | Unique operation key; bounded retries |
| exports | revision FK, job FK, asset FK | Output represents exactly the recorded revision |
| publications | revision FK, share settings, revoked_at | Publishing never exposes mutable draft |
| share_grants | publication FK, token hash, expiry/revocation | Scope only permitted revision/assets |
| submissions | contributor FK, sanitized template version, state | Separate copy, never a private document pointer |
| moderation_events | submission/report FK, actor, reason, decision | Append-only audit trail |
| permission_grants | contributor, artifact version, purpose, terms version | publishing/reference/training separately scoped |
| dataset_examples | source/grant references, sanitized content, dataset version | Eligible only after permission and review |
| usage_events | workspace, operation ID, units, provider | Deduplicate billing/usage events |
| audit_events | actor, scope, operation, target, timestamp | Redact content/secrets; restricted access |

## Documents

```json
{
  "schemaVersion": 1,
  "id": "document-uuid",
  "brandId": "brand-uuid",
  "templateVersionId": "template-version-uuid",
  "baseRevision": 7,
  "sections": [
    {"id": "section-uuid", "kind": "brand-overview", "layout": "split", "blocks": [
      {"id": "block-uuid", "kind": "text", "role": "introduction", "content": "Approved brand introduction"},
      {"id": "logo-uuid", "kind": "logo", "binding": "brand.primaryLogo"}
    ]}
  ]
}
```

IDs above are illustrative, not a production payload. Validate field lengths, allowed kinds/layouts, reference ownership and schema version. Rich text needs a safe structured subset and sanitized rendering, not arbitrary HTML.

## Lifecycles

- Document: draft → published snapshot; draft remains editable. Archive hides the project; restore can reverse archive. Hard deletion policy is not decided.
- Template: private draft → reusable private version → submitted copy → approved/published, changes requested, or rejected. A published update creates a new version.
- Job: queued → running → succeeded/failed/cancelled. Cancellation is best-effort; a completed operation cannot be undone by cancelling its UI.
- Consent: recorded → withdrawn prospectively. Remove eligible retrieval/dataset copies according to policy; do not promise to reverse model weights already trained.
- Upload: pending → uploaded → verified → ready, or rejected. Periodic cleanup resolves abandoned uploads according to an approved retention schedule.

## Indexes and integrity

Index tenant plus updated timestamp for lists; unique membership pairs; unique revision sequences; unique workspace/operation/idempotency keys; job state/next-attempt time; submission status/date. Enforce tenant consistency through composite constraints or transaction checks. Never treat a guessed UUID as permission.

## Migration and retention rules

Append migrations, test rollback/recovery and reapply from a clean cloud test branch. No migration seeds private sample customer content. Retention, deletion grace periods, backup RPO/RTO and dataset withdrawal schedules remain pre-launch decisions. No numeric legal promises are implied here.
