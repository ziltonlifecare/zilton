/**
 * Centralized Image Slot Registry for ZILTON LIFE CARE
 *
 * All images route through this registry. Professional pharmaceutical imagery
 * used for illustrative purposes. These do NOT represent actual Zilton facilities
 * unless explicitly verified by the client.
 */

export interface ImageRegistry {
  heroMain: string | null;
  aboutPlant: string | null;
  aboutLeadership: string | null;
  productsHero: string | null;
  quality01: string | null;
  quality02: string | null;
  quality03: string | null;
  quality04: string | null;
  contactOffice: string | null;
  // Home page division panels
  "division.critical-care-injection": string | null;
  "division.nutrition-iv": string | null;
  "division.nutrition-sachet": string | null;
  products: Record<string, string | null>;
}

export const IMAGES: ImageRegistry = {
  // ── HOME HERO ──────────────────────────────────────────────
  // Premium pharmaceutical cleanroom manufacturing environment
  heroMain: "/images/cleanroom/bofu-shaw-yqPZy461skQ-unsplash.jpg",

  // ── ABOUT ──────────────────────────────────────────────────
  // About page hero: Institutional cleanroom facility
  aboutLeadership: "/images/cleanroom/scarbor-siu-DBB4mcKRcCs-unsplash.jpg",
  // Homepage About section: Manufacturing facility
  aboutPlant: "/images/cleanroom/tecnic-bioprocess-solutions-9gZO2N6leRI-unsplash.jpg",

  // ── QUALITY ────────────────────────────────────────────────
  // Quality page hero: Cleanroom facility and sterile compounding
  quality01: "/images/cleanroom/toon-lambrechts-E1HSxmVG5lE-unsplash.jpg",
  // Quality page step 2: Analytical testing and quality control
  quality02: "/images/quality/trnava-university-_9xRHrMOjeg-unsplash.jpg",
  // Quality page cold-chain band: Laboratory instrumentation and analysis
  quality03: "/images/lab/julia-koblitz-RlOAwXt2fEA-unsplash.jpg",
  // Quality page step 4: Quality assurance and batch verification
  quality04: "/images/quality/etactics-inc-Qp1HJR46xw8-unsplash.jpg",

  // ── CONTACT ────────────────────────────────────────────────
  // Professional healthcare environment
  contactOffice: "/images/lab/paul-einerhand-bKd9KEELfmg-unsplash.jpg",

  // ── PRODUCTS PAGE HERO ─────────────────────────────────────
  // High-impact quality control and analytical testing
  productsHero: "/images/quality/raimond-klavins-n-7HTOiJPso-unsplash.jpg",

  // ── HOME DIVISION PANELS ───────────────────────────────────
  // Division 1: Sterile parenteral glass injection vial & monocarton
  "division.critical-care-injection":
    "/images/products/placeholder-injection.svg",
  // Division 2: Clinical intravenous infusion solution bottle
  "division.nutrition-iv":
    "/images/products/placeholder-iv.svg",
  // Division 3: Clinical metabolic dietary nutrition sachet pack
  "division.nutrition-sachet":
    "/images/products/placeholder-sachet.svg",

  // ── PRODUCTS (ALL 12 INDIVIDUAL FORMULATIONS) ──────────────
  // Authentic clinical packaging packshots matching exact title, salt & strength
  products: {
    // 1. Meropenem 1gm — Sterile carbapenem injection vial with carton & WFI ampoule
    "merozil-1gm": "/images/products/merozil-1gm.svg",

    // 2. Meropenem 500mg — Pharmaceutical carbapenem injection vial with carton & WFI ampoule
    "merozil-500mg": "/images/products/merozil-500mg.svg",

    // 3. Piperacillin + Tazobactam — Clear sterile antipseudomonal infusion vial & carton
    "ziltaz-4-5gm": "/images/products/ziltaz-4-5gm.svg",

    // 4. Polymyxin B 5,00,000 IU — Lyophilized sterile glass vial with amber seal & carton
    "polyzil-5lac": "/images/products/polyzil-5lac.svg",

    // 5. Polymyxin B 7,50,000 IU — High-potency intensive care antibiotic vial & carton
    "polyzil-7-5lac": "/images/products/polyzil-7-5lac.svg",

    // 6. Fosfomycin 4gm — Sterile bactericidal infusion glass bottle with volumetric scale & carton
    "fosfozil-4gm": "/images/products/fosfozil-4gm.svg",

    // 7. Tigecycline 50mg — Light-protective amber pharmaceutical glass vial with orange cap & carton
    "tigezil-50mg": "/images/products/tigezil-50mg.svg",

    // 8. Ferric Carboxymaltose 500mg — Dark colloidal iron complex in sterile vial & carton
    "zilfcm-500mg": "/images/products/zilfcm-500mg.svg",

    // 9. Micafungin 50mg — Lyophilized echinocandin antifungal vial with violet cap & carton
    "micasure-50mg": "/images/products/micasure-50mg.svg",

    // 10. Zinc Chloride IV — Intravenous infusion bottle for TPN replenishment & carton
    "zinctrace-iv": "/images/products/zinctrace-iv.svg",

    // 11. HMB 3gm — Oral metabolic nutrition recovery sachet & dispenser carton
    "hmb-zil-3gm": "/images/products/hmb-zil-3gm.svg",

    // 12. Glutashape — Pharmaceutical-grade L-Glutamine immunonutrient sachet & carton
    "glutashape-sachet": "/images/products/glutashape-sachet.svg",
  },
};

/**
 * Retrieve image source by slot key with safe fallback
 */
export function getImageSrc(key: string): string | null {
  if (key.startsWith("product.")) {
    const slug = key.replace("product.", "");
    return IMAGES.products[slug] || null;
  }
  // Support any top-level key (including those with dots like "division.xxx")
  return (IMAGES as Record<string, any>)[key] ?? null;
}
