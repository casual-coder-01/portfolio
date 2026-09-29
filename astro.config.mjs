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
  integrations: [mdx(), sitemap()],
  build: { inlineStylesheets: 'auto', format: 'directory' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
