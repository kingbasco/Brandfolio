# Brandfolio

A cloud-based workspace for turning brand assets into editable brand guidelines, reusable templates, and controlled client deliverables.

**Current stage: documentation and design-system foundation. No application is implemented in this repository yet.** The previous private preview is a rejected exploration, not this repository’s implementation baseline. Nothing from its interface or data has been migrated.

## Start here

1. [Product brief](PRODUCT.md) — audience, scope, constraints, and open decisions.
2. [Context and decisions](CONTEXT.md) — what is confirmed versus proposed.
3. [Architecture](ARCHITECTURE.md) — cloud services and boundaries.
4. [Screen inventory](docs/screens.md) — 46 screen types, routes, permissions, and delivery phases.
5. [User journeys](docs/user-flows.md) — creation, imports, delivery, and administration.
6. [Development phases](docs/development/phases.md) and [initial backlog](docs/development/backlog.md).
7. [Design system](DESIGN.md), [interaction contract](UX-CONTRACT.md), and [component specification](docs/design/components.md).
8. [Skill workflow](docs/development/skills.md) — seven requested plugins, eight project adapters including the premium dependency, plus the installed Apple Design skill.

## Design direction

The owner selected **“Expressive creative studio: stronger color, distinctive typography, more visual personality.”** The proposed v0.1 system uses cobalt, lilac, yellow, expressive geometric display type, and quiet working surfaces. The direction is confirmed; the exact token choices remain a reviewable proposal.

[Design-system reference sheet](design-system/index.html) is a static documentation specimen, not the application. Open it through a browser-based cloud workspace preview. GitHub’s file view displays its source, not a running app. It loads the generated tokens and shows foundations, controls, states, editor structure, and admin patterns.

## Repository layout

```text
.agents/skills/          Project-owned adapters to the requested plugins
.github/                Foundation checks and contribution templates
design-system/          Canonical tokens, generated CSS, reference sheet
docs/architecture/      Data, API, permission and deployment contracts
docs/development/       Phases, backlog, skill routing, verification
docs/design/            Component and surface specifications
scripts/                Dependency-free token generation and foundation checks
```

## Cloud-only development

Use GitHub Codespaces or an equivalent hosted workspace. Nothing needs to be installed or kept running on the owner’s computer. The planned stack is React/TypeScript, Cloudflare Workers, hosted Supabase, R2, and hosted AI. Service subscriptions are not provisioned by these documents; free allowances and commercial terms must be checked before enabling them.

Inside the cloud workspace:

```sh
python scripts/generate_tokens.py
python scripts/check_foundation.py
```

The check validates links, screen IDs/phase mapping, token output, contrast pairs, and skill registrations. It does not claim product functionality or production accessibility.

See the [verification record](docs/development/verification.md) for completed checks and limitations.

## Next implementation milestone

[Installed libraries and cloud setup](docs/development/dependencies.md): Motion for web animation and lazy-loader for isolated Python tooling.

Follow **P1** in the [phase plan](docs/development/phases.md): scaffold the cloud app and shared component workbench, using this system. Do not recreate the discarded preview or jump straight to dozens of screens. Product backend and screen implementation must have their own acceptance evidence.
