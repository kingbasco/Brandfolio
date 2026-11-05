# Installed development libraries

Installed official registry releases of the requested repositories in the cloud workspace:

| Repository | Package | Pinned version | Scope |
| --- | --- | --- | --- |
| https://github.com/motiondivision/motion | npm `motion` | 14.9.1 | Web animation dependency; integration during UI implementation |
| https://github.com/scientific-python/lazy-loader | PyPI `lazy-loader` | 0.6 | Isolated Python tooling; no current product integration |

These are libraries, not agent skills. They do not change the skill registry. Motion is recorded in package.json and package-lock.json. Python requirements include its resolved packaging dependency. The React/Vite landing-page scaffold is now implemented. Motion remains installed but unused by this surface; its simple hover feedback uses CSS with reduced-motion handling. Installing libraries does not implement the planned editor or backend.

The frontend also pins React/React DOM 19.3.1 and Lucide React 1.69.0. Development uses Vite 8.3.6, TypeScript 7.0.2, Playwright 1.64.1 and Prettier 3.9.10; package.json and package-lock.json are the installation source of truth. Node 24 and Python 3.12 match the GitHub Actions workflow.

## Restore in a cloud workspace

```sh
npm ci
python -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

No services or models run on the owner's computer. Python tooling is separate from the browser and proposed JavaScript Workers runtime. The virtual environment and node_modules are excluded from Git.

## Verification

Motion's animate and spring exports imported successfully in Node. lazy-loader successfully resolved a deferred standard-library import. These are installation smoke checks, not UI animation or deployment tests. Apply Apple Design and existing motion/accessibility contracts when Motion is integrated. The landing page additionally passes TypeScript/build, formatting and six Chromium browser tests; see [verification](verification.md).
