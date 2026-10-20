/**
 * ─────────────────────────────────────────────────────────────
 *  ROLE LANDING PAGES — /for/<slug>/
 *  Unlisted: each one is reached only from its matching résumé
 *  (QR code + links), never linked from the menu or each other.
 *  Numbers, titles and bullets come from resume/content.mjs so
 *  the page and the PDF always say the same thing.
 * ─────────────────────────────────────────────────────────────
 */
// @ts-ignore — plain ESM shared with the résumé build script
import { roles as resumeRoles, consulting as resumeConsulting, person } from '../../resume/content.mjs';

export type Extra = 'engine' | 'social' | 'studio' | 'reel' | 'products' | 'path';

export interface RolePage {
  slug: string;
  kind: 'job' | 'services';
  /** Plain-text title for <title> and the header tagline. */
  title: string;
  /** Title as shown in the hero (two lines). */
  heroTitle: [string, string];
  statement: string; // HTML, may contain <span class="serif gold">
  lede: string;
  seo: string;
  /** Case-study ids in the order this role should show them. */
  work: string[];
  extras: Extra[];
  resumeFile: string;
  proof: { n: string; l: string }[];
  groups?: [string, string[]][];
  skills: [string, string][];
}

const plain = (html: string) => html.replace(/&amp;/g, '&').replace(/<[^>]+>/g, '');
const byslug = Object.fromEntries(resumeRoles.map((r: any) => [r.slug, r]));

const job = (slug: string, extra: Omit<RolePage, 'slug' | 'kind' | 'title' | 'resumeFile' | 'proof' | 'groups' | 'skills'>): RolePage => {
  const r = byslug[slug];
  return { slug, kind: 'job', title: plain(r.title), resumeFile: r.file, proof: r.proof, groups: r.groups, skills: r.skills, ...extra };
};

export const rolePages: RolePage[] = [
  job('revops', {
    heroTitle: ['CRM & Revenue', 'Operations'],
    statement: 'Five channels in. <span class="serif gold">One CRM</span> out.',
    lede: 'I moved a fintech group onto Zoho One and built the revenue engine behind it: LinkedIn, Google Maps, email, WhatsApp and calling all feed one CRM, so every lead is tracked from first touch to closed deal.',
    seo: 'Abhinav Thakur — CRM and revenue operations: Zoho One implementation, multi-channel outbound automation and pipeline design for a fintech group with US$8M+ in revenue.',
    work: ['zoho', 'outbound', 'whatsapp', 'business-development', 'ai-creative'],
    extras: ['engine', 'path'],
  }),
  job('marketing', {
    heroTitle: ['Growth & Digital', 'Marketing'],
    statement: 'Audiences grown <span class="serif gold">tenfold,</span> then turned into customers.',
    lede: 'I led digital marketing for two financial brands across Meta, LinkedIn, X and Google, produced 100+ AI-made creatives and videos, and automated the follow-up that turns attention into enquiries.',
    seo: 'Abhinav Thakur — growth and digital marketing: social audience grown from 28k to 275k, 100+ AI campaign creatives and videos, and automated email and WhatsApp follow-up.',
    work: ['ai-creative', 'whatsapp', 'outbound', 'zoho', 'business-development'],
    extras: ['social', 'studio', 'reel', 'path'],
  }),
  job('sales', {
    heroTitle: ['Business', 'Development'],
    statement: 'Payments infrastructure, <span class="serif gold">sold in eight countries.</span>',
    lede: 'I closed 9 payment-gateway onboarding deals at US$10k each, supported 15+ more, and built the outbound engine and CRM that keep the pipeline full.',
    seo: 'Abhinav Thakur — business development in fintech, payments and SaaS: 9 international onboarding deals closed at US$10k each, clients in 8 countries.',
    work: ['business-development', 'outbound', 'zoho', 'whatsapp', 'ai-creative'],
    extras: ['products', 'engine', 'path'],
  }),
  job('operations', {
    heroTitle: ['Operations', '& Growth'],
    statement: 'I run the operation <span class="serif gold">and build the systems</span> behind it.',
    lede: 'Head of Operations at a fintech group that brought in US$8M+ in 18 months: 25 people across operations, marketing & sales, and tech, one system for the whole company, and a joint venture with a Canadian payments partner.',
    seo: 'Abhinav Thakur — operations: Head of Operations leading 25 people across three teams at a fintech group with US$8M+ in revenue, promoted twice in under a year.',
    work: ['zoho', 'whatsapp', 'business-development', 'outbound', 'ai-creative'],
    extras: ['path', 'engine'],
  }),
  {
    slug: 'consulting',
    kind: 'services',
    title: plain(resumeConsulting.title),
    heroTitle: ['Zoho &', 'Automation'],
    statement: 'Zoho, set up so your leads <span class="serif gold">stop leaking.</span>',
    lede: 'I moved a fintech group with US$8M+ in revenue onto Zoho One and connected LinkedIn, email, WhatsApp and calling to one CRM. I help small businesses do the same, without a full-time systems hire.',
    seo: 'Zoho CRM and automation setup in Melbourne by Abhinav Thakur: CRM migration, lead capture, pipelines, WhatsApp and outbound automation. ABN registered.',
    work: ['zoho', 'outbound', 'whatsapp'],
    extras: ['engine'],
    resumeFile: resumeConsulting.file,
    proof: resumeConsulting.proof,
    skills: resumeConsulting.tools,
  },
];

export const services: [string, string][] = resumeConsulting.services;
export const steps: [string, string][] = resumeConsulting.steps;
export const caseStudy: string[] = resumeConsulting.caseStudy;
export const availability: string = person.availability;

/** Career path shown on every job page. */
export const path = [
  { when: 'May 2025', title: 'Intern', note: 'Royal Bank Pacific' },
  { when: 'Aug 2025', title: 'Business Systems & Operations Manager', note: 'Promoted after three months' },
  { when: 'Apr 2026', title: 'Head of Operations', note: 'Operations, marketing & sales, and tech — 25 people' },
];

/** Social growth, organic and paid. */
export const social = [
  { platform: 'Instagram', from: 8, to: 130 },
  { platform: 'Facebook', from: 5, to: 80 },
  { platform: 'LinkedIn', from: 15, to: 45 },
  { platform: 'X', from: 0, to: 20 },
];

export const products = [
  { name: 'Payment gateway', note: 'Built in a joint venture with Synergy Data Labs (Canada). US$10k onboarding, then recurring revenue.' },
  { name: 'Banking-as-a-service', note: 'International bank account numbers through Royal Bank Pacific, for businesses building their own products.' },
  { name: 'SaaS subscriptions', note: 'Payment and operations software, sold to founders and senior decision-makers.' },
  { name: 'White-label forex platform', note: 'Remittance, currency exchange, forex cards and more under the partner’s own brand.' },
];

export const countries = ['France', 'Canada', 'USA', 'Malaysia', 'UAE', 'Saudi Arabia', 'South Korea', 'India'];
