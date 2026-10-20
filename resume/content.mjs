/**
 * ─────────────────────────────────────────────────────────────
 *  RÉSUMÉ CONTENT — one file for all five versions.
 *  Facts shared by every version live at the top; each role
 *  below picks its own title, numbers, order and bullets.
 *  Build with: npm run resume
 * ─────────────────────────────────────────────────────────────
 */

const SITE = 'https://casual-coder-01.github.io/portfolio';
const ARR = '<svg class="arr" viewBox="0 0 20 10" width="16" height="8"><path d="M0 5h17M13 1l4 4-4 4" fill="none" stroke="#8a6a2f" stroke-width="1.8"/></svg>';

export const person = {
  name: 'Abhinav Thakur',
  location: 'Melbourne, VIC',
  phone: '+61 412 006 323',
  email: 'abhinav2006206@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhinav-thakur-163501250',
  site: SITE,
  availability: '<b>Available 20–24 hrs/week</b> in semester, full-time in uni breaks · Student visa with work rights',
  company: 'Royal Bank Pacific · RBP Finivis · MEGO Forex — Remote, Melbourne',
  education: {
    degree: 'Bachelor of Business (Management)',
    school: 'Ozford Institute of Higher Education, Melbourne',
    when: 'Expected 2028',
  },
  studyLine: 'I’m studying a Bachelor of Business in Melbourne until 2028',
};

/* ---------- headline numbers (each role picks six, in its own order) ---------- */
const P = {
  revenue: { n: 'US$8M<em>+</em>', l: 'group revenue in 18 months' },
  channels: { n: `5 ${ARR} 1`, l: 'outreach channels into one CRM, built single-handedly' },
  deals: { n: '9 <em>×</em> US$10k', l: 'international onboarding deals I closed personally' },
  dealsSupported: { n: '15<em>+</em>', l: 'more onboarding deals I supported, each with recurring revenue' },
  team: { n: '25', l: 'people led across operations, marketing &amp; sales, and tech' },
  audience: { n: `28k ${ARR} 275k`, l: 'social audience across four platforms (~10×)' },
  instagram: { n: `8k ${ARR} 130k`, l: 'Instagram followers, organic and paid' },
  creatives: { n: '100<em>+</em>', l: 'campaign creatives and AI videos produced' },
  countries: { n: '8', l: 'countries with clients, from Canada to South Korea' },
  pipelines: { n: '3 <em>+</em> 4', l: 'deal pipelines and custom CRM modules designed' },
  promoted: { n: '2', l: 'promotions in under a year, intern to Head of Operations' },
  zohoApps: { n: '9', l: 'Zoho One apps rolled out across one organisation' },
};

/* ---------- bullet library ---------- */
const B = {
  zohoMove: '<b>Moved the whole organisation onto Zoho One</b> and designed the end-to-end lead journey: every lead carries its source, stage, owner and next action, giving management and sales a live view of the pipeline.',
  outbound: '<b>Built the multi-channel outbound engine single-handedly</b>: LinkedIn (Sales Navigator, Evaboot, SBL), Google Maps prospecting (PhantomBuster, 379-query matrix), email (Instantly, Zoho Marketing Automation), WhatsApp (Interakt) and calling. Interested leads route automatically to sales for a demo.',
  pipelines: '<b>Designed 3 deal pipelines</b> (B2B white-label, retail forex, agent referrals) <b>and 4 custom modules</b> (Cohorts, Agents, Commissions, Payouts) linking every commission to an agent and a deal.',
  governance: '<b>Built lead governance into every record</b>: timestamped consent per channel, first-response SLA, who handled it (AI bot, person or escalation) and lead points for scoring.',
  team: '<b>Lead 25 people across three teams</b>, operations, marketing &amp; sales (10) and tech: hiring, training and setting weekly priorities.',
  jv: '<b>Coordinate a joint venture with Synergy Data Labs (Canada)</b> that built a payment operating system and payment gateway, from requirements through to client onboarding and API integration.',
  deals: '<b>Personally closed 9 payment-gateway onboarding deals at US$10k each</b> and supported 15+ more, each followed by recurring revenue, with clients in France, Canada, the USA, Malaysia, the UAE, Saudi Arabia, South Korea and India.',
  products: '<b>Sold banking-as-a-service, SaaS subscriptions and a white-label forex platform</b> to founders and senior decision-makers, matching each prospect to a branded platform or an API integration.',
  social: '<b>Led digital marketing, organic and paid,</b> across Meta, LinkedIn, X and Google: Instagram 8k to 130k, Facebook 5k to 80k, LinkedIn 15k to 45k and X 0 to 20k, while local SEO brought walk-in customers and calls to our offices.',
  creatives: '<b>Produced 100+ campaign creatives and AI videos</b> for two financial brands (Higgsfield, Google Flow, ElevenLabs, ChatGPT, Claude, Canva, Photoshop), every one checked against a written compliance rulebook.',

  // manager-era (Aug 2025 – Apr 2026)
  zohoImpl: '<b>Led the Zoho One implementation</b> for an RBI-licensed forex company running three customer journeys (retail, white-label and intern-agent) in one CRM org, with brand-specific layouts.',
  dataFault: '<b>Found and fixed a hidden lead-status fault</b>: values showed one label but stored another, so reports now count the right stage.',
  api: '<b>Ran the API integration between Zoho and the corporate website</b> so enquiries land in the CRM with their full context.',
  memo: '<b>Unblocked the CRM rollout with one decision memo</b> to the Managing Director: eight decisions, each with options and a recommendation. Three were closed the same day.',
  whatsapp: '<b>Designed the WhatsApp intern-agent programme</b> for MEGO Forex: a bilingual (English and Hindi) 5-message Interakt sequence, registration, KYC and entry exam, trainee-to-agent stages in the CRM, and a payout model (gross, TDS, deductions, net).',
  templates: '<b>Rebuilt WhatsApp templates with variables</b> so Meta approves each once and every cohort reuses it, with bot-to-human handoff logged in the CRM.',
  agent: '<b>Set up an AI browser agent</b> for repetitive CRM configuration and audits, with an evidence log and a human checkpoint before anything irreversible.',
  supervised: '<b>Supervised about ten employees and interns</b> across sales, HR and IT, and recruited and trained new team members.',
  discovery: '<b>Ran discovery and follow-up with prospective B2B clients</b> in France, Canada, Malaysia and the UAE evaluating SaaS, BaaS and payment infrastructure, sending written recaps with an agreed next step and qualifying real opportunities into the CRM.',
  firstCampaigns: '<b>Produced two AI campaigns</b>, one per brand (RBP Finivis and MEGO Forex), plus short-form brand films, from brief to final edit.',
};

/* ---------- project library (page 2) ---------- */
const PR = {
  outbound: { t: 'B2B outbound engine', href: `${SITE}/work/outbound/`, d: 'Finds fintechs, banks and travel, education and immigration firms for the white-label platform. A LinkedIn track plus a local Google Maps track, with every email verified before sending and every institution licence-checked against RBI public lists.' },
  zoho: { t: 'Zoho One: three journeys, one CRM', href: `${SITE}/work/zoho/`, d: 'White-label partner onboarding (enquiry to activated, seven stages), retail forex orders and intern-agent sales, each pipeline carrying only the stages and checks its journey needs.' },
  whatsapp: { t: 'WhatsApp intern-agent programme', href: `${SITE}/work/whatsapp/`, d: 'Recruitment, onboarding and a sales channel in one: interns register, pass KYC and an exam, refer customers and are paid commission tracked per agent.' },
  gateway: { t: 'Payment OS and gateway, with Synergy Data Labs', href: `${SITE}/work/business-development/`, d: 'Joint venture with a Canadian partner: I took the gateway to market and onboarded international clients at US$10k each.' },
  creative: { t: 'AI creative production', href: `${SITE}/work/ai-creative/`, d: '100+ creatives and videos for two brands through one pipeline: brief, compliance check, voice, stills, video, edit and QA, then an asset register for reuse.' },
  social: { t: 'Social growth across four platforms', href: `${SITE}/for/marketing/`, d: 'Organic content plus paid campaigns took our combined audience from 28k to 275k, with Instagram alone growing from 8k to 130k.' },
};

/* ---------- skills library ---------- */
const S = {
  crm: ['CRM &amp; RevOps', 'Zoho One (CRM, Marketing Automation, SalesIQ, Forms, Projects, People, WorkDrive, Cliq, Sign) · HubSpot and Salesforce (working knowledge) · pipeline design · lead scoring · data hygiene · reporting'],
  outbound: ['Outbound', 'LinkedIn Sales Navigator · Evaboot · SBL · PhantomBuster · Instantly'],
  automation: ['Automation', 'Interakt / WhatsApp Business · Zoho Marketing Automation · REST APIs · AI browser agents'],
  marketing: ['Marketing', 'Meta (organic and paid) · LinkedIn · X · SEO · content calendars · campaign compliance'],
  creative: ['AI &amp; creative', 'Higgsfield · Google Flow · ElevenLabs · ChatGPT · Claude · Canva · Photoshop'],
  business: ['Business', 'B2B sales · payments, BaaS and SaaS · partner management · team leadership · hiring and training'],
  sales: ['Sales', 'Discovery · demos · qualification · proposals · follow-up · closing · partner onboarding'],
  domain: ['Products', 'Payment gateways · banking-as-a-service · SaaS · forex and remittance · API integrations · KYC'],
  ops: ['Operations', 'Process design · SOPs · project management · reporting · hiring and training · partner management · compliance'],
  languages: ['Languages', 'English · Hindi · French (intermediate)'],
};

/* ---------- the five versions ---------- */
export const roles = [
  {
    slug: 'revops',
    file: 'Abhinav-Thakur-Resume-CRM-RevOps.pdf',
    title: 'CRM &amp; Revenue Operations Specialist',
    jobTitle: 'Head of Operations <small>(CRM &amp; Revenue Operations)</small>',
    proof: [P.revenue, P.channels, P.deals, P.team, P.audience, P.countries],
    summary: `Head of Operations at a fintech group that brought in US$8M+ in 18 months. I moved the whole business onto Zoho One and built the revenue engine behind it: LinkedIn, email, WhatsApp and calling all feed one CRM, so every lead is tracked from first touch to closed deal. Alongside the systems, I lead three teams, closed nine international deals myself and grew our social audience tenfold. ${person.studyLine} and want a hands-on part-time role where I can go deep on CRM and automation.`,
    groups: [
      ['Revenue operations &amp; CRM', [B.zohoMove, B.outbound, B.pipelines, B.governance]],
      ['Leadership &amp; operations', [B.team, B.jv]],
      ['Sales &amp; partnerships', [B.deals, B.products]],
      ['Marketing &amp; growth', [B.social, B.creatives]],
    ],
    manager: [B.zohoImpl, B.dataFault, B.api, B.memo, B.whatsapp, B.templates, B.agent, B.supervised],
    projects: [PR.outbound, PR.zoho, PR.whatsapp, PR.gateway, PR.creative],
    skills: [S.crm, S.outbound, S.automation, S.marketing, S.creative, S.business, S.languages],
  },
  {
    slug: 'marketing',
    file: 'Abhinav-Thakur-Resume-Digital-Marketing.pdf',
    title: 'Growth &amp; Digital Marketing Coordinator',
    jobTitle: 'Head of Operations <small>(Digital Marketing &amp; Growth)</small>',
    proof: [P.audience, P.instagram, P.creatives, P.revenue, P.channels, P.team],
    summary: `I grow audiences and turn them into customers. As Head of Operations at a fintech group that brought in US$8M+ in 18 months, I led digital marketing across Meta, LinkedIn, X and Google, organic and paid, and grew our combined social audience from 28k to 275k. I produce campaign creative and video with generative AI inside the rules of a regulated industry, and automate the email and WhatsApp follow-up that turns attention into enquiries. ${person.studyLine} and want a hands-on part-time role in content, campaigns and growth.`,
    groups: [
      ['Marketing &amp; growth', [
        '<b>Led digital marketing, organic and paid,</b> across Meta, LinkedIn, X and Google: Instagram 8k to 130k, Facebook 5k to 80k, LinkedIn 15k to 45k and X 0 to 20k.',
        '<b>Ran local SEO and Google search</b> that brought walk-in customers and phone enquiries to our offices.',
        '<b>Art-direct and produce 100+ campaign creatives and AI videos</b> for two financial brands with Higgsfield, Google Flow, ElevenLabs, ChatGPT and Claude, finished in Canva and Photoshop.',
        '<b>Built the production pipeline behind them</b>: brief and script, compliance check, voice, stills, video, edit and QA, then an asset register so every piece can be reused.',
        '<b>Wrote the creative rulebook for a regulated brand</b>: one message and one call to action per post, licence wording exactly as registered, approved claims only, and written sign-off on any figure.',
      ]],
      ['Marketing automation &amp; CRM', [
        '<b>Automated email and WhatsApp campaigns</b> (Zoho Marketing Automation, Instantly, Interakt), with timestamped consent and opt-outs, and every response reported into the CRM.',
        '<b>Connected every channel to Zoho CRM</b> (LinkedIn, email, WhatsApp, calling and the website) so the team can see which campaign produced which lead and which deal.',
        B.outbound,
        B.governance,
      ]],
      ['Leadership &amp; sales', [
        '<b>Lead a 10-person marketing &amp; sales team</b> within 25 people across operations, marketing &amp; sales, and tech.',
        '<b>Personally closed 9 onboarding deals at US$10k each</b> with clients in 8 countries, so my marketing is written for what the sales conversation actually needs.',
        B.jv,
      ]],
    ],
    manager: [B.firstCampaigns, B.whatsapp, B.templates, B.zohoImpl, B.api, B.memo, B.supervised],
    projects: [PR.creative, PR.social, PR.whatsapp, PR.outbound, PR.zoho],
    skills: [S.marketing, S.creative, S.automation, S.crm, S.outbound, S.business, S.languages],
  },
  {
    slug: 'sales',
    file: 'Abhinav-Thakur-Resume-Business-Development.pdf',
    title: 'Business Development — Fintech, Payments &amp; SaaS',
    jobTitle: 'Head of Operations <small>(Business Development &amp; Partnerships)</small>',
    proof: [P.deals, P.dealsSupported, P.countries, P.revenue, P.channels, P.team],
    summary: `I sell payments and banking infrastructure internationally. As Head of Operations at a fintech group that brought in US$8M+ in 18 months, I personally closed 9 payment-gateway onboarding deals at US$10k each, supported 15+ more, and sold to founders and senior decision-makers in 8 countries. I also built the outbound engine and CRM that fill the pipeline, so I know every step from first touch to signed deal. ${person.studyLine} and want a hands-on part-time business development or sales role.`,
    groups: [
      ['Sales &amp; partnerships', [
        B.deals,
        B.products,
        '<b>Run discovery, demos and follow-up</b>: map each prospect’s needs to the right offer, send a written recap with an agreed next step, and qualify real opportunities into the CRM as hot, warm, qualified or low.',
        '<b>Took a new payment gateway to market</b> with our joint-venture partner Synergy Data Labs (Canada), and supported clients through API integration after signing.',
      ]],
      ['Pipeline generation', [
        B.outbound,
        B.zohoMove,
        B.pipelines,
        '<b>Licence-check every institution</b> against public regulator lists before first contact, and verify every email before sending, so campaigns keep their deliverability.',
      ]],
      ['Leadership &amp; marketing', [B.team, B.social, B.creatives]],
    ],
    manager: [B.discovery, B.zohoImpl, B.whatsapp, B.api, B.memo, B.dataFault, B.supervised],
    projects: [PR.gateway, PR.outbound, PR.zoho, PR.whatsapp, PR.creative],
    skills: [S.sales, S.domain, S.outbound, S.crm, S.marketing, S.creative, S.languages],
  },
  {
    slug: 'operations',
    file: 'Abhinav-Thakur-Resume-Operations.pdf',
    title: 'Operations &amp; Growth Associate',
    jobTitle: 'Head of Operations',
    proof: [P.team, P.revenue, P.promoted, P.zohoApps, P.deals, P.countries],
    summary: `I run operations and build the systems that let a business grow. As Head of Operations at a fintech group that brought in US$8M+ in 18 months, I lead 25 people across operations, marketing &amp; sales, and tech, moved the whole company onto one system, and coordinate a joint venture with a Canadian payments partner. I was promoted twice in under a year, from intern to Head of Operations. ${person.studyLine} and want a hands-on part-time operations role in a growing business.`,
    groups: [
      ['Operations &amp; people', [
        B.team,
        '<b>Run day-to-day operations</b> across three brands: priorities, reporting to the Managing Director, key client relationships and onboarding.',
        B.jv,
      ]],
      ['Systems &amp; process', [
        '<b>Moved the whole organisation onto Zoho One</b> (CRM, Projects, People, WorkDrive, Cliq, Sign and more) so sales, HR and operations work in one system with a live view of the pipeline.',
        B.outbound,
        B.pipelines,
        B.governance,
        B.agent,
      ]],
      ['Commercial', [B.deals, B.social, B.creatives]],
    ],
    manager: [B.zohoImpl, B.memo, B.whatsapp, B.dataFault, B.api, B.templates, B.supervised],
    projects: [PR.zoho, PR.whatsapp, PR.gateway, PR.outbound, PR.creative],
    skills: [S.ops, S.crm, S.automation, S.business, S.marketing, S.creative, S.languages],
  },
];

/* ---------- consulting services sheet (one page) ---------- */
export const consulting = {
  slug: 'consulting',
  file: 'Abhinav-Thakur-Zoho-Automation-Services.pdf',
  title: 'Zoho &amp; Automation Consultant',
  availability: '<b>ABN registered</b> · Melbourne-based, remote or on-site · Fixed-quote projects',
  proof: [P.channels, P.pipelines, P.zohoApps],
  intro: 'I set up Zoho so your leads stop falling through the cracks. As Head of Operations at a fintech group that brought in US$8M+ in 18 months, I moved the whole business onto Zoho One and connected LinkedIn, email, WhatsApp and calling to one CRM. I help small businesses do the same, without a full-time systems hire.',
  services: [
    ['Zoho CRM setup and migration', 'Modules, layouts and roles built around how your team sells; old data moved across cleanly.'],
    ['Lead capture into one CRM', 'Website forms, WhatsApp and calls land in the CRM with their source and context.'],
    ['Pipelines and custom modules', 'Deal stages that match your process, plus modules for agents, commissions or payouts.'],
    ['Outbound automation', 'LinkedIn and email prospecting (Sales Navigator, PhantomBuster, Instantly) tracked in the CRM.'],
    ['WhatsApp Business automation', 'Approved templates, sequences, bot-to-human handoff and consent tracking via Interakt.'],
    ['CRM clean-up and reporting', 'Fix the data faults that make reports lie, then build dashboards people use.'],
  ],
  caseStudy: [
    '<b>The business:</b> a fintech group with three brands and three customer journeys (retail, white-label partners and an intern-agent referral programme).',
    '<b>What I built:</b> one Zoho One org with 3 deal pipelines and 4 custom modules, a multi-channel outbound engine feeding the CRM, WhatsApp automation for agent recruitment, and an API link from the corporate website.',
    '<b>The result:</b> every lead tracked from first touch to closed deal across a group that brought in US$8M+ in 18 months, with commissions traced to the right agent and deal.',
  ],
  steps: [
    ['Free audit', 'A 30-minute call to see how leads flow today and where they leak.'],
    ['Plan and quote', 'A written plan with a fixed price, so there are no surprises.'],
    ['Build and test', 'I build it, then test it with your team on real leads.'],
    ['Handover', 'A short guide and screen-recorded walkthrough for your team.'],
  ],
  tools: [['Zoho One', 'CRM · Marketing Automation · SalesIQ · Forms · Projects · People · WorkDrive · Cliq · Sign · also HubSpot and Salesforce']],
};
