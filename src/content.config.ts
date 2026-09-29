import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Case studies live in src/content/work/*.mdx
 * Frontmatter fields below; the body is MDX (Markdown + components).
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    cardTitle: z.string(),
    kicker: z.string(),
    summary: z.string(),
    preview: z.string(), // one-line description used on the homepage
    meta: z.array(z.object({ label: z.string(), value: z.string() })),
    tools: z.array(z.string()),
    tags: z.array(z.string()),
    visual: z.enum(['markets', 'crm', 'outbound', 'whatsapp', 'creative']),
    tone: z.enum(['paper', 'night']).default('paper'),
    seoDescription: z.string(),
  }),
});

export const collections = { work };
