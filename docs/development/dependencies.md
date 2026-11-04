# Installed development libraries

Installed official registry releases of the requested repositories in the cloud workspace:

| Repository | Package | Pinned version | Scope |
| --- | --- | --- | --- |
| https://github.com/motiondivision/motion | npm `motion` | 14.9.1 | Web animation dependency; integration during UI implementation |
| https://github.com/scientific-python/lazy-loader | PyPI `lazy-loader` | 0.6 | Isolated Python tooling; no current product integration |

These are libraries, not agent skills. They do not change the skill registry. Motion is recorded in package.json and package-lock.json. Python requirements include its resolved packaging dependency. The application scaffold and React integration are still planned; installing libraries does not implement product features.

## Restore in a cloud workspace

```sh
npm ci
python -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

No services or models run on the owner's computer. Python tooling is separate from the browser and proposed JavaScript Workers runtime. The virtual environment and node_modules are excluded from Git.

## Verification

Motion's animate and spring exports imported successfully in Node. lazy-loader successfully resolved a deferred standard-library import. These are installation smoke checks, not UI animation or deployment tests. Apply Apple Design and existing motion/accessibility contracts when Motion is integrated.
