// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/**
 * Deployment target is controlled by two env vars so the same code works on
 * GitHub Pages (project site under /portfolio) and on Cloudflare Pages / Netlify (root).
 *   SITE_URL  – full origin, e.g. https://casual-coder-01.github.io
 *   BASE_PATH – path prefix, e.g. /portfolio  (use "/" for Cloudflare/Netlify)
 */
const site = process.env.SITE_URL ?? 'https://casual-coder-01.github.io';
const base = process.env.BASE_PATH ?? '/portfolio';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  // Role landing pages under /for/ are unlisted: shared via résumé links only.
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/for/') })],
  build: { inlineStylesheets: 'auto', format: 'directory' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
