"""Foundation integrity checks; not a vendor audit or production accessibility certification."""
import json,re,subprocess,sys
from pathlib import Path
root=Path(__file__).resolve().parents[1];failures=[]
def check(ok,message):
 if not ok:failures.append(message)
required=['README.md','AGENTS.md','CONTEXT.md','PRODUCT.md','ARCHITECTURE.md','DESIGN.md','UX-CONTRACT.md','docs/screens.md','docs/user-flows.md','docs/development/phases.md','docs/development/skills.md','design-system/index.html']
for name in required:check((root/name).exists(),'Missing '+name)
for file in root.rglob('*.md'):
 if any(part in {'.venv','node_modules','.git'} for part in file.relative_to(root).parts):continue
 for url in re.findall(r'\]\(([^\s)]+)(?:\s+"[^"]*")?\)',file.read_text()):
  if re.match(r'^[a-zA-Z][\w+.-]*:',url) or url.startswith('#'):continue
  path=url.split('#')[0]
  if path:check((file.parent/path).exists(),f'Broken link in {file.relative_to(root)}: {url}')
screens=json.loads((root/'docs/screens.json').read_text());check(len(screens)==46,'Expected 46 screen types')
check({s['id'] for s in screens}=={f'S{i:02}' for i in range(1,47)},'Screen IDs not unique/complete')
check(all(s['phase'] in {f'P{i}' for i in range(13)} for s in screens),'Unknown phase')
check(all(s['id'] in (root/'docs/screens.md').read_text() for s in screens),'Screen docs incomplete')
check(all('## P'+str(i)+' —' in (root/'docs/development/phases.md').read_text() for i in range(13)),'Phase coverage incomplete')
check(sum(int(s['phase'][1:])<=7 for s in screens)==34,'Release screen count mismatch')
reg=json.loads((root/'skills.registry.json').read_text());check(len(reg['entries'])==9,'Expected 8 adapters and Apple Design')
check(len({e['plugin'] for e in reg['entries'] if e.get('plugin')})==7,'Expected seven unique plugins')
for e in reg['entries']:check((root/e['adapter']).exists(),'Missing adapter '+e['id'])
lock=json.loads((root/'skills-lock.json').read_text())
check('apple-design' in lock['skills'],'Missing Apple Design lock entry')
t=json.loads((root/'design-system/tokens.json').read_text());check(t['themes']['light'].keys()==t['themes']['dark'].keys(),'Theme token sets differ')
def lum(hex):
 v=[int(hex[i:i+2],16)/255 for i in (1,3,5)];v=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in v];return sum(a*b for a,b in zip(v,[.2126,.7152,.0722]))
def contrast(a,b):
 x,y=sorted([lum(a),lum(b)]);return (y+.05)/(x+.05)
pairs=[('text','surface',4.5),('text-muted','surface',4.5),('text-muted','canvas',4.5),('on-primary','primary',4.5),('accent-ink','accent-soft',4.5),('accent-ink','auxiliary-soft',4.5),('success','success-surface',4.5),('warning','warning-surface',4.5),('danger','danger-surface',4.5),('info','info-surface',4.5),('focus','surface',3),('link','surface',4.5),('on-primary','primary-hover',4.5),('on-primary','primary-pressed',4.5),('control-border','surface',3)]
ratios=[]
for theme,colors in t['themes'].items():
 for fg,bg,minimum in pairs:
  ratio=contrast(colors[fg],colors[bg]);check(ratio>=minimum,f'{theme} {fg}/{bg}: {ratio:.2f} < {minimum}');ratios.append((theme,fg,bg,round(ratio,2)))
front=(root/'DESIGN.md').read_text().split('---',2)[1]
for key,token in [('primary','primary'),('canvas','canvas'),('surface','surface'),('ink','text'),('accent','accent-soft'),('auxiliary','auxiliary-soft')]:check(f'{key}: "{t["themes"]["light"][token]}"' in front,'DESIGN frontmatter drift: '+key)
css=(root/'design-system/tokens.css').read_text();declared=set(re.findall(r'(--[\w-]+)\s*:',css))
for file in (root/'design-system').glob('*.css'):
 for token in re.findall(r'var\((--[\w-]+)',file.read_text()):check(token in declared,f'Undefined token {token} in {file.name}')
p=subprocess.run([sys.executable,str(root/'scripts/generate_tokens.py'),'--check'],capture_output=True,text=True);check(p.returncode==0,p.stdout+p.stderr)
if failures:
 for f in failures:print('FAIL:',f)
 sys.exit(1)
print(f'PASS: links, 46 screens, 13 phases, 8 adapters / 7 plugins + Apple Design, generated CSS, {len(ratios)} contrast pairs and frontmatter parity')
print('Scope: documentation and token integrity only; product runtime tests and upstream vendor audits are not included.')
