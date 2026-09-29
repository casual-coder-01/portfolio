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
    'Abhinav Thakur works across B2B business development, CRM, outbound growth and AI-assisted marketing — talking to prospective clients, then building the systems that keep the pipeline moving. Based in Melbourne.',

  /** Contact — replace null with your details, e.g. 'hello@yourname.com' */
  email: null as string | null,
  /** Full LinkedIn URL, e.g. 'https://www.linkedin.com/in/your-handle/' */
  linkedin: null as string | null,
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
  company: 'RBP Finivis Pvt Ltd',
  brands: 'RBP Finivis · MEGO Forex · associated businesses',
  title: null as string | null, // e.g. 'Business Development & Growth'
  period: null as string | null, // e.g. 'May 2025 – Present'
};
