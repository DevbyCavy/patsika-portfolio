export const site = {
  name: "Patsika",
  fullName: "Patsika Media House",
  tagline: "We build brands that move.",
  description:
    "Patsika Media House is a design agency working across branding, 3D, motion, product design, graphic design, and video — for founders building something worth noticing.",
  email: "hello@patsika.studio",
  location: "Worldwide, remote-first",
  phones: ["+263 78 668 6261", "+263 71 561 0868"],
  whatsapp: {
    number: "+263 71 561 0868",
    href: "https://wa.me/263715610868",
  },
  whatsappChannel: {
    label: "Follow the PATSIKA Pvt Ltd channel on WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb88UdvKLaHi2vA8600H",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  number: string;
  name: string;
  short: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "design-branding",
    number: "01",
    name: "Design & Branding",
    short: "Identity systems built to travel.",
    description:
      "Naming, logo systems, colour and type, and the guidelines that keep a brand consistent as it scales across founders, teams, and markets.",
    deliverables: [
      "Brand strategy & positioning",
      "Logo & identity systems",
      "Brand guidelines",
      "Voice & messaging",
    ],
  },
  {
    slug: "3d-modeling",
    number: "02",
    name: "3D Modeling",
    short: "Product, environment, and character work.",
    description:
      "Photoreal and stylised 3D for product visualisation, environments, and characters — built for renders, animation, and real-time use.",
    deliverables: [
      "Product visualisation",
      "Environment & set design",
      "Character modeling",
      "Render-ready assets",
    ],
  },
  {
    slug: "motion-graphics",
    number: "03",
    name: "Motion Graphics",
    short: "Identities and stories that move.",
    description:
      "Animated logos, explainers, and social-first motion design that carry a brand's identity into video, without losing what makes it recognisable.",
    deliverables: [
      "Animated identities",
      "Explainer & product videos",
      "Social & campaign motion",
      "Title & broadcast design",
    ],
  },
  {
    slug: "ui-ux-product-design",
    number: "04",
    name: "UI/UX & Product Design",
    short: "Interfaces people actually enjoy using.",
    description:
      "End-to-end product design — research, flows, and interface design for web and mobile products, backed by systems that scale with the team.",
    deliverables: [
      "Product & UX strategy",
      "Wireframes & prototypes",
      "UI design systems",
      "Web & mobile interfaces",
    ],
  },
  {
    slug: "graphic-design",
    number: "05",
    name: "Graphic Design",
    short: "Print and campaign work with intent.",
    description:
      "Editorial, packaging, and campaign design — the everyday material that carries a brand into the world, designed with the same rigor as the identity.",
    deliverables: [
      "Packaging design",
      "Print & editorial",
      "Campaign design",
      "Presentation & pitch decks",
    ],
  },
  {
    slug: "video-editing",
    number: "06",
    name: "Video Editing",
    short: "Post-production with a point of view.",
    description:
      "Cut, colour, and sound for brand films, campaigns, and social content — post-production that shapes footage into something worth watching.",
    deliverables: [
      "Narrative & brand films",
      "Colour grading",
      "Sound design",
      "Social & short-form edits",
    ],
  },
];

export type WorkMedia =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string; poster: string };

export type WorkItem = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year?: string;
  blurb: string;
  media: WorkMedia;
  concept?: boolean;
};

export const work: WorkItem[] = [
  {
    slug: "mutapa-investment-fund",
    client: "Mutapa Investment Fund",
    title: "Exhibition stand for Zimbabwe's sovereign wealth fund",
    category: "3D Modeling",
    blurb:
      "A full 3D visualisation of a trade-fair exhibition stand, from structure to signage.",
    media: { kind: "image", src: "/work/images/mutapa-investment-fund.jpg" },
  },
  {
    slug: "ministry-industry-commerce",
    client: "Ministry of Industry & Commerce",
    title: "Government exhibition stand for a national trade fair",
    category: "3D Modeling",
    blurb:
      "Multi-agency exhibition stand design bringing together several government commissions under one stand.",
    media: {
      kind: "image",
      src: "/work/images/ministry-industry-commerce.jpg",
    },
  },
  {
    slug: "magaya-mining",
    client: "Magaya Mining",
    title: "“Mine Entra 2026” exhibition stand",
    category: "3D Modeling",
    year: "2026",
    blurb:
      "A themed, rock-hewn exhibition stand built around Magaya Mining's brand for the Mine Entra trade show.",
    media: { kind: "image", src: "/work/images/magaya-mining.jpg" },
  },
  {
    slug: "blackbox-henkel",
    client: "Blackbox Investments × Henkel",
    title: "Co-branded exhibition stand for a mining-sector partnership",
    category: "3D Modeling",
    blurb:
      "A joint exhibition stand for Blackbox Investments and Henkel, built around a shared bonding-solutions campaign.",
    media: { kind: "image", src: "/work/images/blackbox-henkel.jpg" },
  },
  {
    slug: "brand-systems",
    client: "Jast Steel & Hardware, Bishop A.T Muzorewa University",
    title: "Logo systems and brand collateral",
    category: "Design & Branding",
    blurb:
      "Logo design and applied brand collateral — signage, merchandise, and print — across two identity systems.",
    media: { kind: "image", src: "/work/images/brand-systems.jpg" },
  },
  {
    slug: "magic-moments",
    client: "Magic Moments",
    title: "Logo design",
    category: "Design & Branding",
    blurb: "A mark built around a mountain sunrise motif for an events and travel brand.",
    media: { kind: "image", src: "/work/images/magic-moments-logo.jpg" },
  },
  {
    slug: "curtains-and-blinds-boulevard",
    client: "Curtains & Blinds Boulevard",
    title: "Flyer campaign for a window-treatment showroom",
    category: "Graphic Design",
    blurb:
      "Print flyer design for a curtains-and-blinds retailer, built around their showroom photography.",
    media: { kind: "image", src: "/work/images/curtains-and-blinds.jpg" },
  },
  {
    slug: "flyer-campaigns",
    client: "Holy Ghost Prep School, Princess Beauty Salon, and others",
    title: "Flyer and poster campaigns for local businesses",
    category: "Graphic Design",
    blurb:
      "A run of flyer and poster designs for small businesses and community organisations.",
    media: { kind: "image", src: "/work/images/flyer-campaigns.jpg" },
  },
  {
    slug: "mosi-oa-tunya-magazine",
    client: "Mosi-oa-Tunya",
    title: "Editorial cover design, Issue No. 1",
    category: "Graphic Design",
    year: "2025",
    blurb:
      "Cover design for an independent travel and culture magazine centred on Victoria Falls.",
    media: { kind: "image", src: "/work/images/mosi-oa-tunya-magazine.jpg" },
  },
  {
    slug: "crocs-ad",
    client: "Crocs",
    title: "Brand video edit",
    category: "Video Editing",
    blurb: "Edit and post-production for a short-form brand video.",
    media: {
      kind: "video",
      src: "/work/video/crocs-ad.mp4",
      poster: "/work/video/crocs-ad-poster.jpg",
    },
  },
  {
    slug: "musango",
    client: "Musango",
    title: "Brand film edit",
    category: "Video Editing",
    blurb: "Edit and motion titling for a destination brand film.",
    media: {
      kind: "video",
      src: "/work/video/musango.mp4",
      poster: "/work/video/musango-poster.jpg",
    },
  },
  {
    slug: "vic-falls",
    client: "Victoria Falls",
    title: "Aerial brand film along the Zambezi",
    category: "Video Editing",
    blurb:
      "Edit and post-production for an aerial film of Victoria Falls and the Zambezi River.",
    media: {
      kind: "video",
      src: "/work/video/vic-falls.mp4",
      poster: "/work/video/vic-falls-poster.jpg",
    },
  },
  {
    slug: "concept-apple-billboard",
    client: "Apple (concept)",
    title: "iPhone 17 Pro — concept ad",
    category: "Graphic Design",
    blurb: "A self-directed concept ad, not a commissioned client project.",
    media: { kind: "image", src: "/work/images/concept-apple-billboard.jpg" },
    concept: true,
  },
  {
    slug: "concept-ford-ranger",
    client: "Ford (concept)",
    title: "Ford Ranger — concept billboard",
    category: "Graphic Design",
    blurb: "A self-directed concept billboard, not a commissioned client project.",
    media: { kind: "image", src: "/work/images/concept-ford-ranger.jpg" },
    concept: true,
  },
];

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  caption: string;
  concept?: boolean;
  /** For video posters — links through to the playable clip on /work */
  workSlug?: string;
};

export type GalleryCategory = {
  slug: string;
  name: string;
  description: string;
  images: GalleryImage[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "3d-modeling",
    name: "3D Modeling",
    description:
      "Exhibition stands and trade-fair environments, from structure to signage.",
    images: [
      { src: "/work/images/mutapa-investment-fund.jpg", width: 1600, height: 900, caption: "Mutapa Investment Fund" },
      { src: "/work/images/ministry-industry-commerce.jpg", width: 1600, height: 900, caption: "Ministry of Industry & Commerce" },
      { src: "/gallery/ministry-of-justice.jpg", width: 1600, height: 900, caption: "Ministry of Justice, Legal & Parliamentary Affairs" },
      { src: "/work/images/magaya-mining.jpg", width: 1600, height: 900, caption: "Magaya Mining — Mine Entra 2026" },
      { src: "/gallery/magaya-mining-2.jpg", width: 1600, height: 900, caption: "Magaya Mining — Mine Entra 2026" },
      { src: "/work/images/blackbox-henkel.jpg", width: 1600, height: 900, caption: "Blackbox Investments × Henkel" },
      { src: "/gallery/blackbox-henkel-2.jpg", width: 1600, height: 900, caption: "Blackbox Investments × Henkel" },
      { src: "/gallery/adk-event.jpg", width: 1600, height: 900, caption: "ADK — event space" },
    ],
  },
  {
    slug: "design-branding",
    name: "Design & Branding",
    description: "Logo systems and applied brand collateral.",
    images: [
      { src: "/work/images/brand-systems.jpg", width: 1600, height: 1128, caption: "Jast Steel & Hardware, Bishop A.T Muzorewa University" },
      { src: "/work/images/magic-moments-logo.jpg", width: 1600, height: 1600, caption: "Magic Moments" },
    ],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    description: "Flyers, posters, editorial covers, and campaign design.",
    images: [
      { src: "/work/images/curtains-and-blinds.jpg", width: 1140, height: 1600, caption: "Curtains & Blinds Boulevard" },
      { src: "/work/images/flyer-campaigns.jpg", width: 1128, height: 1600, caption: "Holy Ghost Prep School, Princess Beauty Salon, and others" },
      { src: "/work/images/mosi-oa-tunya-magazine.jpg", width: 1236, height: 1600, caption: "Mosi-oa-Tunya — Issue No. 1" },
      { src: "/gallery/magazine-layout-trio.jpg", width: 1600, height: 900, caption: "Musango, Captured, Console — magazine covers" },
      { src: "/gallery/zviri-mumaoko-exhibition.jpg", width: 1200, height: 1600, caption: "“Zviri Mumaoko” art exhibition poster" },
      { src: "/gallery/harvest-link-posters.jpg", width: 1600, height: 900, caption: "Harvest Link — poster campaign" },
      { src: "/gallery/predict-and-win.jpg", width: 1500, height: 1500, caption: "SugarCane Bites — Predict & Win campaign" },
      { src: "/gallery/church-flyer-night-of-change.jpg", width: 1600, height: 1600, caption: "Acts of the Apostles — event flyer" },
      { src: "/gallery/church-flyer-ane-chimuti.jpg", width: 1600, height: 1600, caption: "Tabernacle of Power Church — event flyer" },
      { src: "/gallery/illustration-portfolio.jpg", width: 1600, height: 900, caption: "Character illustration practice" },
      {
        src: "/work/images/concept-apple-billboard.jpg",
        width: 1600,
        height: 467,
        caption: "Apple iPhone 17 Pro — concept ad",
        concept: true,
      },
      {
        src: "/work/images/concept-ford-ranger.jpg",
        width: 1600,
        height: 467,
        caption: "Ford Ranger — concept billboard",
        concept: true,
      },
    ],
  },
  {
    slug: "video-editing",
    name: "Video Editing",
    description: "Brand films and ad edits — tap a still to watch on the Work page.",
    images: [
      { src: "/work/video/crocs-ad-poster.jpg", width: 1280, height: 720, caption: "Crocs — brand video edit", workSlug: "crocs-ad" },
      { src: "/work/video/musango-poster.jpg", width: 1280, height: 720, caption: "Musango — brand film edit", workSlug: "musango" },
      { src: "/work/video/vic-falls-poster.jpg", width: 1280, height: 720, caption: "Victoria Falls — aerial brand film", workSlug: "vic-falls" },
    ],
  },
];
