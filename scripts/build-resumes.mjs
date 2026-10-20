#!/usr/bin/env node
/**
 * Builds the five résumé PDFs from resume/content.mjs into public/resume/.
 *
 *   npm run resume
 *
 * Needs a local Chrome/Chromium. Set CHROME_PATH if it isn't found
 * automatically. Fails if any page overflows, so a long bullet can never
 * silently fall off the bottom of a page.
 */
import { chromium } from 'playwright-core';
import QRCode from 'qrcode';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { person, roles, consulting } from '../resume/content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/resume');
const tmpDir = path.join(root, 'resume/.build');
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(tmpDir, { recursive: true });

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ].filter(Boolean);
  const hit = candidates.find((p) => fs.existsSync(p));
  if (!hit) throw new Error('No Chrome found. Set CHROME_PATH to your Chrome or Chromium executable.');
  return hit;
}

const landing = (slug) => `${person.site}/for/${slug}/`;

async function qr(url) {
  const svg = await QRCode.toString(url, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#0b0c10', light: '#00000000' } });
  return svg.replace(/<\?xml[^>]*>/, '');
}

function header(r, qrSvg, availability = person.availability) {
  const url = landing(r.slug);
  return `
<header class="top">
  <div class="who">
    <h1>${person.name}</h1>
    <p class="role">${r.title}</p>
    <div class="contact">
      <span>${person.location}</span><span><a href="tel:${person.phone.replace(/\s/g, '')}">${person.phone}</a></span><span><a href="mailto:${person.email}">${person.email}</a></span><br>
      <span><a href="${person.linkedin}">${person.linkedin.replace('https://www.', '')}</a></span><span><a href="${url}">${person.site.replace('https://', '')}</a></span>
    </div>
    <p class="avail">${availability}</p>
  </div>
  <a class="qr" href="${url}">
    ${qrSvg}
    <p class="lbl">See the work</p>
    <p class="url">Scan for case studies</p>
  </a>
</header>`;
}

const proof = (items) => `<div class="proof">${items.map((p) => `<div><b>${p.n}</b><span>${p.l}</span></div>`).join('')}</div>`;
const list = (items) => `<ul>${items.map((b) => `<li>${b}</li>`).join('')}</ul>`;
const skills = (rows) => `<dl class="skills">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;

function resumeHtml(r, qrSvg) {
  const url = landing(r.slug);
  const e = person.education;
  return `
<div class="page">
${header(r, qrSvg)}
${proof(r.proof)}
<main>
  <section><h2>Summary</h2><p class="summary">${r.summary}</p></section>
  <section>
    <h2>Experience</h2>
    <div class="job">
      <div class="job-head"><h3>${r.jobTitle}</h3><span class="date">Apr 2026 – Present</span></div>
      <p class="org">${person.company}</p>
      ${r.groups.map(([h, items]) => `<h4>${h}</h4>${list(items)}`).join('\n')}
    </div>
  </section>
</main>
</div>

<div class="page">
<header class="top2">
  <div><span class="n">${person.name}</span><span class="r">${r.title}</span></div>
  <a href="${url}">${person.site.replace('https://', '')}</a>
</header>
<main>
  <section>
    <h2>Experience, continued</h2>
    <div class="job">
      <div class="job-head"><h3>Business Systems &amp; Operations Manager</h3><span class="date">Aug 2025 – Apr 2026</span></div>
      <p class="org">${person.company}</p>
      ${list(r.manager)}
    </div>
    <div class="job one">
      <div class="job-head"><h3>Intern, Royal Bank Pacific <span>— promoted to manager after three months</span></h3><span class="date">May 2025 – Aug 2025</span></div>
    </div>
  </section>
  <section>
    <h2>Selected projects</h2>
    <div class="projects">
      ${r.projects.map((p) => `<div><div class="ph"><b>${p.t}</b><a href="${p.href}">Case study</a></div><p>${p.d}</p></div>`).join('\n')}
    </div>
  </section>
  <section><h2>Skills</h2>${skills(r.skills)}</section>
  <section>
    <h2>Education</h2>
    <div class="edu"><p><b>${e.degree}</b> — ${e.school}</p><span class="date">${e.when}</span></div>
  </section>
</main>
</div>`;
}

function consultingHtml(c, qrSvg) {
  return `
<div class="page">
${header(c, qrSvg, c.availability)}
${proof(c.proof)}
<main>
  <section><h2>What I do</h2><p class="summary">${c.intro}</p></section>
  <section>
    <h2>Services</h2>
    <div class="services">${c.services.map(([t, d]) => `<div><b>${t}</b><p>${d}</p></div>`).join('')}</div>
  </section>
  <section><h2>Recent build</h2><div class="case">${c.caseStudy.map((p) => `<p>${p}</p>`).join('')}</div></section>
  <section><h2>How I work</h2><div class="steps">${c.steps.map(([t, d]) => `<div><b>${t}</b><p>${d}</p></div>`).join('')}</div></section>
  ${c.tools.length ? `<section><h2>Tools</h2>${skills(c.tools)}</section>` : ''}
  <div class="cta">
    <div><div class="big">Let’s find where your leads leak.</div><p>Book a free 30-minute audit. No obligation.</p></div>
    <div class="links"><a href="mailto:${person.email}">${person.email}</a><br><a href="tel:${person.phone.replace(/\s/g, '')}">${person.phone}</a></div>
  </div>
</main>
</div>`;
}

const doc = (title, body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${person.name} — ${title.replace(/&amp;/g, '&')}</title>
<link rel="stylesheet" href="${pathToFileURL(path.join(root, 'resume/resume.css')).href}"></head><body>${body}</body></html>`;

const browser = await chromium.launch({ executablePath: findChrome() });
const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
await page.emulateMedia({ media: 'print' });
let failed = false;

const jobs = [
  ...roles.map((r) => ({ r, html: (q) => resumeHtml(r, q), pages: 2 })),
  { r: consulting, html: (q) => consultingHtml(consulting, q), pages: 1 },
];

for (const { r, html, pages } of jobs) {
  const htmlPath = path.join(tmpDir, `${r.slug}.html`);
  fs.writeFileSync(htmlPath, doc(r.title, html(await qr(landing(r.slug)))));
  await page.goto(pathToFileURL(htmlPath).href);
  await page.evaluate(() => document.fonts.ready);

  // Space left under the last section of each page, in mm. Negative = overflow.
  const free = await page.evaluate(() =>
    [...document.querySelectorAll('.page')].map((pg) => {
      const top = pg.getBoundingClientRect().top;
      const end = Math.max(...[...pg.querySelectorAll('main > *')].map((k) => k.getBoundingClientRect().bottom));
      return +((pg.getBoundingClientRect().height - (end - top)) / 3.7795).toFixed(1);
    }),
  );
  const out = path.join(outDir, r.file);
  await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });

  const tight = free.some((mm) => mm < 8);
  if (tight || free.length !== pages) failed = true;
  console.log(`${tight ? '✗' : '✓'} ${r.file.padEnd(48)} free space per page (mm): ${free.join(' / ')}`);
}

await browser.close();
if (failed) {
  console.error('\nA page is too full (under 8 mm bottom margin) or has the wrong page count. Trim a bullet in resume/content.mjs.');
  process.exit(1);
}
