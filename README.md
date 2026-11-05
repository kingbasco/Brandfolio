# Brandfolio

A cloud-based workspace for turning brand assets into editable brand guidelines, reusable templates, and controlled client deliverables.

**Current stage: documentation, TapTap design-system foundation, and a working React landing page.** The landing page has a large product banner and 12 original brand-cover concepts with search, filters, sorting, previews, and SVG downloads. These are cover concepts; editable templates, accounts, the guideline editor, backend services, and AI are still planned. The previous private preview is a rejected exploration, not this repository’s implementation baseline. Nothing from its interface or data has been migrated.

## Start here

1. [Product brief](PRODUCT.md) — audience, scope, constraints, and open decisions.
2. [Context and decisions](CONTEXT.md) — what is confirmed versus proposed.
3. [Architecture](ARCHITECTURE.md) — cloud services and boundaries.
4. [Screen inventory](docs/screens.md) — 46 screen types, routes, permissions, and delivery phases.
5. [User journeys](docs/user-flows.md) — creation, imports, delivery, and administration.
6. [Development phases](docs/development/phases.md) and [initial backlog](docs/development/backlog.md).
7. [Design system](DESIGN.md), [interaction contract](UX-CONTRACT.md), and [component specification](docs/design/components.md).
8. [Landing-page scope and behavior](docs/design/landing-page.md) — the implemented S01 slice.
9. [Skill workflow](docs/development/skills.md) — seven requested plugins, eight project adapters including the premium dependency, plus the installed Apple Design skill.

## Design direction

The owner selected **TapTap Design System**. Version 0.2 now adapts its turquoise palette, neutral surfaces, platform typography, small control radii and component patterns. [Source mapping and attribution](docs/design/taptap-adoption.md) distinguish extracted values from Brandfolio accessibility changes and the experimental dark extension. The earlier cobalt/lilac/yellow proposal is superseded.

[Design-system reference sheet](design-system/index.html) is a static documentation specimen, not the application. Open it through a browser-based cloud workspace preview. GitHub’s file view displays its source, not a running app. It loads the generated tokens and shows foundations, controls, states, editor structure, and admin patterns.

## Repository layout

```text
.agents/skills/          Project-owned adapters to the requested plugins
.github/                Foundation checks and contribution templates
design-system/          Canonical tokens, generated CSS, reference sheet
docs/architecture/      Data, API, permission and deployment contracts
docs/development/       Phases, backlog, skill routing, verification
docs/design/            Component and surface specifications
src/                    React landing page and concept catalog
packages/ui/            Initial Button and Dialog components
public/templates/       Original downloadable SVG cover concepts
tests/                  Landing-page browser tests
scripts/                Dependency-free token generation and foundation checks
```

## Cloud-only development

Use GitHub Codespaces or an equivalent hosted workspace. Nothing needs to be installed or kept running on the owner’s computer. React/TypeScript/Vite powers the landing page. Cloudflare Workers, hosted Supabase, R2, and hosted AI remain the planned backend architecture. Service subscriptions are not provisioned by these documents; free allowances and commercial terms must be checked before enabling them.

Inside the cloud workspace:

```sh
npm ci
npm run dev
```

Open the cloud workspace's forwarded Vite port in your browser. To verify the implementation in that workspace (Node 24 and Python 3.12 match CI):

```sh
python scripts/generate_tokens.py --check
python scripts/check_foundation.py
npm run format:check
npm run build
npx playwright install --with-deps chromium
npm test
```

The foundation check validates links, screen IDs/phase mapping, token output, contrast pairs, and skill registrations. The build includes TypeScript checking; six browser tests cover the landing-page interactions and responsive layouts. These checks do not certify the planned backend or full accessibility conformance.

See the [verification record](docs/development/verification.md) for completed checks and limitations.

## Next implementation milestone

[Installed libraries and cloud setup](docs/development/dependencies.md): Motion for web animation and lazy-loader for isolated Python tooling.

Continue **P1** in the [phase plan](docs/development/phases.md): complete the shared component workbench and representative app/editor/admin layouts. The landing page brings S01 from P7 forward at the owner's request; neither P1 nor P7 is complete. Authentication and tenancy then begin in P2. No public deployment or paid cloud service has been provisioned.
