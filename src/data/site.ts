/**
 * ─────────────────────────────────────────────────────────────
 *  SITE SETTINGS — edit this file to update contact details,
 *  résumé and availability. Anything left as null shows a
 *  clearly-marked placeholder on the site (or is hidden).
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: 'Abhinav Thakur',
  role: 'Operations · CRM & RevOps · Growth',
  location: 'Melbourne, Australia',
  title: 'Abhinav Thakur — Operations, Revenue Systems & Growth',
  description:
    'Abhinav Thakur is Head of Operations at a fintech group that brought in US$8M+ in 18 months: CRM and revenue operations, outbound and digital marketing, international business development and a 25-person team. Based in Melbourne.',

  /** Contact — replace null with your details, e.g. 'hello@yourname.com' */
  email: 'abhinav2006206@gmail.com' as string | null,
  /** Full LinkedIn URL, e.g. 'https://www.linkedin.com/in/your-handle/' */
  linkedin: 'https://www.linkedin.com/in/abhinav-thakur-163501250' as string | null,
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

  /**
   * Background music for the Sound button. Put an MP3 in public/media/audio/ and set the
   * path here, e.g. '/media/audio/ambient.mp3'. Leave null to use the generated ambient pad.
   */
  ambientTrack: null as string | null,

  availability:
    'Open to part-time roles in Melbourne — CRM and revenue operations, digital marketing, business development and operations in fintech, SaaS and technology. 20–24 hours a week in semester, full-time in uni breaks.',
};

/** Experience details that still need confirming. Replace the strings when ready. */
export const role = {
  company: 'Royal Bank Pacific',
  brands: 'incl. RBP Finivis · MEGO Forex',
  title: 'Head of Operations' as string | null,
  period: 'Apr 2026 – Present' as string | null,
  start: '2025-05-13', // first day (internship) — used for the "time in role" figure
};
