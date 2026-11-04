# Project skill installation and workflow

## What is installed

Eight discoverable project-owned SKILL.md adapters in `.agents/skills/`: the seven requested plugins, plus Frontend Design Premium’s required frontend-design dependency. UI UX Designer is deduplicated. `skills.registry.json` records plugin IDs, upstream source locators and capability status.

**These are adapters, not complete upstream plugin distributions.** ChatGPT plugins/connectors are installed at the host/account level, not by npm or a Git repository. The tagged skill sources and Better Design tools were available in this authoring session. The adapters make the required routing durable for future agents; the host must still provide the actual skills/tools.

Impeccable’s CLI and Premium’s Python audit scripts were not available as installed executables here. Their required commands must be run when a full upstream runtime is available. Do not claim they ran because an adapter exists. Project-owned token/link/contrast checks are separate checks.

## Apple Design addition

Installed the upstream `apple-design` skill from https://github.com/emilkowalski/skills using the requested skills CLI, scoped to this project and Codex:

```sh
npx --yes skills add https://github.com/emilkowalski/skills --skill apple-design --agent codex --yes
```

The full skill is in `.agents/skills/apple-design/SKILL.md`; `skills-lock.json` records its source path and computed hash. This brings the total to nine skill entries: eight adapters covering seven plugins, plus one directly installed upstream skill. Read Apple Design for gesture handling, interruptible motion, sheets, feedback, typography, and accessibility. Apply its interaction guidance within Brandfolio’s existing expressive identity; it does not replace the approved direction or canonical tokens. No UI was restyled by installation.

## Use in a cloud workspace

1. Open this repository in Codespaces or an equivalent hosted workspace.
2. Use an agent host that discovers `.agents/skills/`, or explicitly load the relevant adapter from AGENTS.md.
3. Resolve its upstream source through the host’s skills reader/installed plugin.
4. Load only the references required for the work, and follow project contracts.
5. Record unavailable capabilities; continue independent work without faking installation or audit success.

## Ordered workflow

Brief and constraints → product/flows → architecture and screen contract → visual direction → tokens and component ownership → representative design → implementation → behavior/accessibility/visual review → evidence and docs.

The current task stops at the documentation/design-system foundation. Application UI implementation is P1 onward. No plugin catalog style may silently override the owner’s chosen expressive studio identity.

## Sources consulted

- Frontend Design Premium + upstream frontend-design; canonical ownership, context lifecycle, token mapping, verification references.
- Awesome DESIGN.md index and static Figma design study.
- UI UX Designer and design-system-builder.
- Standalone Impeccable, shape/new-work/craft-floor references; manual context fallback.
- DesignSystem entry and its own bundled Impeccable init.
- Redesign entry and redesign-existing-projects.
- Better Design team rules (none configured), catalog discovery, UI principles, forms principles and review rules.

## Updating

Source locators are retrieval references, not immutable version pins. Record upstream version/digest when a full package can be resolved; never invent a hash or claim a tested compatibility match. Updates require reviewing differences and rerunning relevant checks. Do not scrape and redistribute full third-party bundles without their license/installation mechanism. No paid tool is required by this foundation.
