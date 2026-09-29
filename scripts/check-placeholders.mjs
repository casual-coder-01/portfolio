// Lists every placeholder that still needs real information.
// Usage: npm run check:placeholders
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const roots = ['src/content', 'src/data', 'src/pages'];
const hits = [];
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(astro|mdx?|ts)$/.test(f)) {
      readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
        if (line.includes('NEEDS USER INFORMATION') || /:\s*null as string \| null/.test(line) || /resumeAvailable:\s*false/.test(line)) {
          hits.push(`${p}:${i + 1}  ${line.trim()}`);
        }
      });
    }
  }
};
roots.forEach(walk);
console.log(hits.length ? `Placeholders still to fill (${hits.length}):\n` + hits.join('\n') : 'No placeholders left.');
