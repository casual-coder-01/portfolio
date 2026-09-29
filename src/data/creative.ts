/**
 * ─────────────────────────────────────────────────────────────
 *  CREATIVE GALLERY — to add an image:
 *   1. put the file in src/assets/creative/<campaign>/
 *   2. import it below and add an entry to the right array
 *  Images are optimised automatically at build time (AVIF/WebP,
 *  several sizes). Keep originals at full quality.
 * ─────────────────────────────────────────────────────────────
 */
import gloveEnvelope from '../assets/creative/rbp/glove-envelope.jpg';
import suitCufflink from '../assets/creative/rbp/suit-cufflink.jpg';
import lotusArch from '../assets/creative/rbp/lotus-arch.jpg';
import statueRbp from '../assets/creative/rbp/statue-rbp.jpg';
import goldenRopes from '../assets/creative/rbp/golden-ropes.jpg';
import glovedCard from '../assets/creative/rbp/gloved-card.jpg';
import brandFirst from '../assets/creative/rbp/brand-first.jpg';

import oneCard from '../assets/creative/mego/one-card.jpg';
import dreamGlobal from '../assets/creative/mego/dream-global.jpg';
import passportStamps from '../assets/creative/mego/passport-stamps.jpg';
import glassJar from '../assets/creative/mego/glass-jar.jpg';
import bordersBeginnings from '../assets/creative/mego/borders-beginnings.jpg';

import type { ImageMetadata } from 'astro';

export interface CreativeItem {
  src: ImageMetadata;
  title: string;
  alt: string;
  format: string;
}

export const rbpCampaign: CreativeItem[] = [
  {
    src: gloveEnvelope,
    title: 'The sealed letter',
    format: 'Social · 4:5',
    alt: 'A navy velvet-gloved hand reaches out of an ornate gold frame holding a cream envelope sealed with navy wax bearing the RBP Finivis eagle. Headline: Your brand on top. Our engine underneath.',
  },
  {
    src: suitCufflink,
    title: 'The cufflink',
    format: 'Social · 2:3',
    alt: 'Side profile of a man in a dark tailored suit in warm side light; a gold eagle cufflink shows at the white shirt cuff. Headline: Your brand on top. Our engine underneath.',
  },
  {
    src: lotusArch,
    title: 'Lotus arch',
    format: 'Social · 2:3',
    alt: 'A white lotus with gold-edged petals rises from dark water beneath a gilded Indian arch. Headline: White label — your brand on top, our engine underneath.',
  },
  {
    src: statueRbp,
    title: 'R · B · P',
    format: 'Social · 4:5',
    alt: 'Giant gold serif letters R, B and P interlock with a close-up of a dark classical winged statue; small type reads Your brand on top. Our engine underneath.',
  },
  {
    src: goldenRopes,
    title: 'The stage',
    format: 'Poster · A-series',
    alt: 'Massive navy ropes edged with gold light coil through space; a tiny figure stands at a lectern in front of a glowing gold disc. Tagline: Built for forward brands.',
  },
  {
    src: glovedCard,
    title: 'The calling card',
    format: 'Story · 9:16',
    alt: 'A cream silk glove holds up an engraved gold card reading Your Brand, backed by RBP Finivis, against a deep navy background.',
  },
  {
    src: brandFirst,
    title: 'Your brand first',
    format: 'Social · 4:5',
    alt: 'A candlelit palace hall with an ornate wooden desk draped in navy velvet embroidered with a gold eagle. Headline: Your Brand First — our infrastructure behind it.',
  },
];

export const megoCampaign: CreativeItem[] = [
  {
    src: oneCard,
    title: 'Multi-currency forex card',
    format: 'Social · 2:3',
    alt: 'MEGO Forex ad: a navy multi-currency card floats over a globe at sunset with dollar, euro, pound and yen coins. Headline: One card. More horizons.',
  },
  {
    src: dreamGlobal,
    title: 'Education loan facilitation',
    format: 'Social · 2:3',
    alt: 'MEGO Forex ad: a student with a backpack walks a glowing path past glass panels showing Australia, the USA, the UK and Canada. Headline: Dream global. Study without borders.',
  },
  {
    src: passportStamps,
    title: 'Different stamps',
    format: 'Social · 2:3',
    alt: 'MEGO Forex ad: an open passport whose visa stamps each name a service — currency exchange, remittance, forex card, insurance — beside a coffee cup. Headline: Different stamps. Same stories.',
  },
  {
    src: glassJar,
    title: 'More of what moves you',
    format: 'Social · 2:3',
    alt: 'MEGO Forex ad: a glass bell jar holds a spiral of travel tickets for studying, travelling and doing business abroad. Headline: More of what moves you.',
  },
  {
    src: bordersBeginnings,
    title: 'Brand awareness',
    format: 'Social · 2:3',
    alt: 'MEGO Forex ad in warm cream tones: an arched window opens onto a Mediterranean coast above a desk with books and a passport. Headline: Borders are just beginnings.',
  },
];

export interface VideoItem {
  slug: string;          // file name in public/media/video/<slug>.mp4 (+ -poster.webp/.jpg)
  title: string;
  description: string;
  width: number;
  height: number;
  duration: string;
  kind: 'client' | 'spec';
  tools: string;
}

export const videos: VideoItem[] = [
  {
    slug: 'money-moves',
    title: 'Money moves with you',
    description: 'Outward-remittance reel for MEGO Forex. Suitcase, flight, globe and coin as one continuous idea, ending on the card and the call to action.',
    width: 720,
    height: 1280,
    duration: '0:10',
    kind: 'client',
    tools: 'AI video · edit',
  },
  {
    slug: 'spec-music',
    title: 'Listening, visualised',
    description: 'Spec concept for a music-streaming brand: sound rendered as light moving through a room.',
    width: 1280,
    height: 720,
    duration: '0:08',
    kind: 'spec',
    tools: 'Google Flow',
  },
  {
    slug: 'spec-product',
    title: 'Product insert shot',
    description: 'Spec macro insert for an oral-care brand — texture, timing and light for a hero product moment.',
    width: 1280,
    height: 720,
    duration: '0:08',
    kind: 'spec',
    tools: 'Google Flow',
  },
];
