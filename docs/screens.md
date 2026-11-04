# Screen inventory

46 screen types, with stable IDs S01–S46. A type can have multiple route states; dialogs/tabs are not extra screen counts. “Phase” means first introduction, not the last enhancement. All are planned, not implemented.

The earlier 30-screen beta estimate grouped admin views differently. This inventory replaces that ambiguous count: **34 screen types first appear by P7**, including grouped legal/password/access families. Actual release readiness is determined by acceptance gates, not a page count.

| ID | Screen | Route | Access | Primary job | Phase |
|---|---|---|---|---|---|
| S01 | Homepage | `/` | Visitor | Understand product and start | P7 |
| S02 | How it works | `/how-it-works` | Visitor | Explain workflow and import limits | P7 |
| S03 | Template gallery | `/templates` | Visitor / member | Filter and choose template | P3 |
| S04 | Template detail | `/templates/:id` | Visitor / member | Preview sections and use version | P3 |
| S05 | Plans and usage | `/plans` | Visitor | Explain verified allowances; no invented pricing | P7 |
| S06 | Help center | `/help/*` | Visitor / member | Find instructions and recovery paths | P7 |
| S07 | Legal/privacy family | `/legal/:document` | Visitor | Read approved terms and data policies | P7 |
| S08 | Sign up | `/sign-up` | Visitor | Create account and accept terms | P2 |
| S09 | Log in | `/login` | Visitor | Authenticate and return to intended route | P2 |
| S10 | Email verification | `/verify-email` | Pending account | Verify/resend/change address | P2 |
| S11 | Password recovery family | `/password/*` | Visitor | Request and complete reset | P2 |
| S12 | Workspace onboarding | `/onboarding` | Authenticated | Create initial workspace | P2 |
| S13 | Workspace home | `/w/:w` | Member | Resume work or create a brand | P3 |
| S14 | Brands list | `/w/:w/brands` | Member | Find/create/archive brand | P3 |
| S15 | Brand overview | `/w/:w/brands/:b` | Member | Review facts and related guidelines | P3 |
| S16 | Brand setup/assets | `/w/:w/brands/:b/assets` | Editor / owner | Manage logo, colors, fonts and brief | P3 |
| S17 | Guidelines library | `/w/:w/guidelines` | Member | Search/open/create/duplicate documents | P4 |
| S18 | New guideline wizard | `/w/:w/guidelines/new` | Editor / owner | Choose brand, template and sections | P4 |
| S19 | Import studio | `/w/:w/imports/new` | Editor / owner | Upload sources and choose intent | P9 |
| S20 | Import review | `/w/:w/imports/:i/review` | Editor / owner | Correct reconstruction and map fields | P9 |
| S21 | Guideline editor | `/w/:w/guidelines/:d/edit` | Editor / owner | Edit, save, reorder and recover | P4 |
| S22 | Preview and delivery | `/w/:w/guidelines/:d/deliver` | Editor / publisher | Preview/export/publish revision | P5 |
| S23 | Private template library | `/w/:w/templates` | Member | Reuse and version private templates | P6 |
| S24 | Jobs and activity | `/w/:w/jobs` | Member | Inspect progress and retry eligible jobs | P5 |
| S25 | Workspace settings | `/w/:w/settings` | Owner / scoped member | Workspace defaults, usage and members | P2 |
| S26 | Profile and security | `/account` | Authenticated | Profile/session/security settings | P2 |
| S27 | Community submission | `/w/:w/submissions/:id` | Contributor | Sanitize copy and submit for review | P10 |
| S28 | Published guideline | `/g/:token` | Authorized recipient | Read immutable published revision | P5 |
| S29 | Shared assets | `/g/:token/assets` | Authorized recipient | Download only permitted assets | P11 |
| S30 | Access/unavailable family | `/access` | Any | Explain access failure without leaking data | P2 |
| S31 | Admin overview | `/admin` | Scoped admin | Operational issues and queue summary | P2 |
| S32 | Users/workspaces | `/admin/workspaces` | Support / super admin | Search account metadata | P2 |
| S33 | Workspace/user detail | `/admin/workspaces/:w` | Support / super admin | Inspect metadata and audited restrictions | P2 |
| S34 | Template catalog management | `/admin/templates` | Template admin | Create, test and version platform templates | P3 |
| S35 | Submission queue | `/admin/submissions` | Moderator | Triage submitted copies | P10 |
| S36 | Submission review | `/admin/submissions/:s` | Moderator | Review copy, rights and quality | P10 |
| S37 | Reports/removals | `/admin/reports` | Moderator | Resolve reports and publish decisions | P10 |
| S38 | Processing jobs | `/admin/jobs` | Operations | Inspect errors and safe retries | P5 |
| S39 | AI and usage controls | `/admin/usage` | Operations / super admin | Budgets, provider state and feature controls | P8 |
| S40 | Website content | `/admin/content` | Content admin | Maintain public copy and help | P7 |
| S41 | Permissions/datasets | `/admin/datasets` | Data steward / super admin | Review grants, provenance and withdrawal | P12 |
| S42 | Audit log | `/admin/audit` | Scoped admin | Trace privileged changes | P2 |
| S43 | Platform settings | `/admin/settings` | Super admin | Limits, features and admin roles | P2 |
| S44 | Client review | `/review/:token` | Invited recipient | Comment/approve a specific revision | P11 |
| S45 | Team invitation | `/invite/:token` | Invited identity | Accept/decline assigned workspace role | P11 |
| S46 | Billing/subscription | `/w/:w/billing` | Owner | Manage subscription and invoices | P11 |

## Required states for every applicable screen

Initial loading, loaded, empty, no results, field validation, request failure, permission denied, session expired and narrow viewport. Editor adds unsaved/saving/saved/conflict/recovery. Jobs add queued/running/partial/failed/cancelled. Publication adds unpublished/current/stale-relative-to-draft/revoked. Submission adds draft/pending/changes requested/approved/rejected.

## Navigation groups

- Public: Product, Templates, How it works, Plans, Help; Log in/Create account.
- Workspace: Overview, Brands, Guidelines, Templates, Jobs; settings/profile separately.
- Brand context: Overview, Assets, Guidelines, Settings.
- Admin: Overview, Accounts, Templates, Submissions, Reports, Jobs, Usage, Content, Datasets, Audit, Settings; hide unavailable groups based on role and release.
- Client: document contents and permitted downloads; no workspace chrome.

## Dialogs/drawers

Create/rename; add color/font/asset; section selection; template change preview; AI proposal comparison; revision history; export options; publication settings; unsaved edits; archive/delete; admin reason/confirmation. Each uses the canonical overlay primitive and is included in the owning screen’s acceptance tests.
