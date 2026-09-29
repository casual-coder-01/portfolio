// Fails the build if any internal link or asset in dist/ points to a missing file.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const base = (process.env.BASE_PATH ?? '/portfolio').replace(/\/$/, '');
const html = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && html.push(p); });
walk(dist);

const missing = new Set();
for (const file of html) {
  const src = readFileSync(file, 'utf8');
  const refs = [...src.matchAll(/(?:href|src|poster)="([^"]+)"/g), ...src.matchAll(/srcset="([^"]+)"/g)]
    .flatMap((m) => m[1].split(',').map((s) => s.trim().split(' ')[0]));
  for (let r of refs) {
    if (!r || /^(https?:|mailto:|tel:|data:|#)/.test(r)) continue;
    r = r.split('#')[0].split('?')[0];
    if (!r) continue;
    if (!r.startsWith('/')) {
      // relative link: resolve against the page's directory URL
      const pageDir = '/' + file.replace(/^dist\/?/, '').replace(/index\.html$/, '');
      r = new URL(r, 'http://x' + base + pageDir).pathname;
    }
    if (!r.startsWith(base + '/') && r !== base) { missing.add(`${file}: outside base → ${r}`); continue; }
    let p = join(dist, r.slice(base.length));
    if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
    if (!existsSync(p)) missing.add(`${file}: ${r}`);
  }
}
if (missing.size) { console.error('Broken internal references:\n' + [...missing].join('\n')); process.exit(1); }
console.log(`Link check passed (${html.length} pages).`);
