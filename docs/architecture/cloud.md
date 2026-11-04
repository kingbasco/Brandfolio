# Cloud development and operations

No owner-computer service is required. All shell commands in repository instructions are intended for a cloud workspace or CI.

## Environments

- Development: Codespaces + isolated hosted test resources.
- Preview: branch builds with nonproduction auth/database/storage bindings.
- Production: main release with distinct credentials and explicit deployment checks.

Do not use production client files in previews. Keep secrets in GitHub/cloud service secret stores. Commit `.env.example` names only when actual integration code needs them. No secret values, account emails, tokenized service links, or previous preview credentials belong in this public repository.

## Provider choices

| Need | Planned service | P0 verification |
|---|---|---|
| Static app/API | Cloudflare Workers | Build/runtime compatibility, request/CPU quotas |
| Login/database | Hosted Supabase | Auth email delivery, RLS, free-plan limits, backups |
| Asset bytes | R2 | Bucket privacy, signed operations, request/storage billing |
| Export | Hosted browser renderer | Fonts, PDFs, limits, commercial terms |
| Jobs | Cloudflare Queues/Workflows or equivalent | Current plan availability, retries, throughput |
| AI | Hosted provider | Vision capability, quality, data terms, budget caps |
| Heavy OCR/import | Isolated hosted worker/API | Memory, runtime, file safety, cost/page |

Free allowances and commercial eligibility change. No exact pricing is asserted here. Avoid automatic paid overflow. Application limits complement provider controls; alerts alone are not spend caps. If a necessary paid capability is not authorized, gate that feature and preserve ordinary editing.

## Operations required before public launch

Structured logs with request/job IDs; error reporting; usage counters; health probes; bounded retry and dead-letter handling; tested database restore; asset cleanup; abuse throttling; alert ownership; dependency review; deployment rollback. Select retention and RPO/RTO targets before promising them.

## Cloud-only developer loop

Open repository in Codespaces → read AGENTS.md and routed skills → branch → edit → run checks in Codespaces/Actions → preview → inspect states/accessibility → PR evidence → release. CI uses dependency lockfiles when the application is scaffolded. No local model, local database, or laptop-based background worker is a supported production dependency.
