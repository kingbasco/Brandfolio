"""Generate CSS from Brandfolio's single token source. No dependencies."""
import json,sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
t=json.loads((root/'design-system/tokens.json').read_text())
lines=['/* Generated from tokens.json; do not edit by hand. */',':root {']
for key,value in t['themes']['light'].items():lines.append(f'  --color-{key}: {value};')
for group in ('fonts','font-size','line-height','space','radius','size','motion','shadow','z','breakpoint','identity','overlay','marketing'):
 for key,value in t[group].items():lines.append(f'  --{group}-{key}: {value};')
lines+=['}', '[data-theme="dark"] {']
for key,value in t['themes']['dark'].items():lines.append(f'  --color-{key}: {value};')
lines+=['}', '']
output='\n'.join(lines);target=root/'design-system/tokens.css'
if '--check' in sys.argv:
 if not target.exists() or target.read_text()!=output:raise SystemExit('FAIL: generated tokens.css is stale')
 print('PASS: generated token parity')
else:target.write_text(output);print('Generated design-system/tokens.css')
