/**
 * ─────────────────────────────────────────────────────────────
 *  SITE SETTINGS — edit this file to update contact details,
 *  résumé and availability. Anything left as null shows a
 *  clearly-marked placeholder on the site (or is hidden).
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: 'Abhinav Thakur',
  role: 'Business Development · Growth Systems · AI Marketing',
  location: 'Melbourne, Australia',
  title: 'Abhinav Thakur — Business Development, Growth Systems & AI Marketing',
  description:
    'Abhinav Thakur is a Business Systems & Operations Manager working across B2B business development, CRM, outbound growth and AI-assisted marketing — talking to prospective clients, then building the systems that keep the pipeline moving. Based in Melbourne.',

  /** Contact — replace null with your details, e.g. 'hello@yourname.com' */
  email: 'abhinav2006206@gmail.com' as string | null,
  /** Full LinkedIn URL, e.g. 'https://www.linkedin.com/in/your-handle/' */
  linkedin: null as string | null,
  /** Phone, shown as text with a copy button. Leave null to hide. */
  phone: '+61 412 006 323' as string | null,
  /** Optional. Leave null to hide. */
  github: null as string | null,

  /**
   * Résumé: drop your PDF at public/resume/Abhinav-Thakur-Resume.pdf
   * and set this to true. While false, the Résumé button is hidden.
   */
  resumeAvailable: false,
  resumePath: '/resume/Abhinav-Thakur-Resume.pdf',

  availability:
    'Open to part-time roles in Melbourne — business development, growth, RevOps, CRM and marketing automation in SaaS, fintech and technology.',
};

/** Experience details that still need confirming. Replace the strings when ready. */
export const role = {
  company: 'Royal Bank Pacific',
  brands: 'incl. RBP Finivis · MEGO Forex',
  title: 'Business Systems & Operations Manager' as string | null,
  period: 'Aug 2025 – Present · part-time' as string | null,
  start: '2025-05-13', // first day (internship) — used for the "time in role" figure
};
