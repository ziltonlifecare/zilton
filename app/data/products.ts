import type { CategoryInfo, Product, ProductCategory } from "~/types/product";
import { IMAGES } from "./images";

/**
 * Verified Product Categories for ZILTON LIFE CARE PRIVATE LIMITED
 */
export const PRODUCT_CATEGORIES: CategoryInfo[] = [
  {
    id: "critical-care-injection",
    name: "Critical Care Injection",
    tagline: "Therapeutic parenteral injectables for intensive medical care",
    description:
      "Specialized critical-care formulations covering advanced IV Antibiotics, Antifungals, and Haematinics engineered for emergency and intensive hospital care.",
  },
  {
    id: "nutrition-iv",
    name: "Nutrition IV",
    tagline: "Intravenous clinical nutrition and infusion solutions",
    description:
      "Sterile parenteral nutrition preparations and essential trace element infusions designed for clinical parenteral therapy and patient replenishment.",
  },
  {
    id: "nutrition-sachet",
    name: "Nutrition Sachet",
    tagline: "Oral nutrition supplement sachets and dietary support",
    description:
      "Advanced therapeutic nutrition sachets containing pharmaceutical-grade amino acids and metabolic nutrients for clinical and general dietary management.",
  },
];

/**
 * Official Product Catalogue for ZILTON LIFE CARE PRIVATE LIMITED
 * Based directly on approved client portfolio.
 * Curated high-resolution pharmaceutical packshot imagery mapped via central image registry.
 */
export const PRODUCTS: Product[] = [
  // ─── CRITICAL CARE: IV ANTIBIOTICS RANGE ───────────────────
  {
    id: "merozil-1gm",
    name: "MEROZIL 1gm",
    category: "critical-care-injection",
    subCategory: "IV Antibiotics Range",
    composition: "Meropenem 1gm Injection",
    image: IMAGES.products["merozil-1gm"] || "",
    shortDescription:
      "Parenteral carbapenem antibiotic indicated for severe hospital-acquired pneumonia, complicated intra-abdominal, and systemic bacterial infections.",
    published: true,
  },
  {
    id: "merozil-500mg",
    name: "MEROZIL 500mg",
    category: "critical-care-injection",
    subCategory: "IV Antibiotics Range",
    composition: "Meropenem 500mg Injection",
    image: IMAGES.products["merozil-500mg"] || "",
    shortDescription:
      "Broad-spectrum carbapenem injectable formulation designed for severe bacterial infections and targeted dosage titration in hospital care.",
    published: true,
  },
  {
    id: "ziltaz-4-5gm",
    name: "Ziltaz 4.5gm",
    category: "critical-care-injection",
    subCategory: "IV Antibiotics Range",
    composition: "Piperacillin 4gm + Tazobactam 500mg Injection",
    image: IMAGES.products["ziltaz-4-5gm"] || "",
    shortDescription:
      "Synergistic broad-spectrum antipseudomonal penicillin with beta-lactamase inhibitor for complicated nosocomial respiratory and intra-abdominal conditions.",
    published: true,
  },
  {
    id: "polyzil-5lac",
    name: "Polyzil 5 lac IU",
    category: "critical-care-injection",
    subCategory: "IV Antibiotics Range",
    composition: "Polymyxin B 5,00,000 IU Injection",
    image: IMAGES.products["polyzil-5lac"] || "",
    shortDescription:
      "Targeted polypeptide bactericidal antibiotic indicated for multidrug-resistant (MDR) Gram-negative pathogens in intensive care environments.",
    published: true,
  },
  {
    id: "polyzil-7-5lac",
    name: "Polyzil 7.5 lac IU",
    category: "critical-care-injection",
    subCategory: "IV Antibiotics Range",
    composition: "Polymyxin B 7,50,000 IU Injection",
    image: IMAGES.products["polyzil-7-5lac"] || "",
    shortDescription:
      "Higher-strength Polymyxin B formulation indicated for critical resistance profiles and critically ill ICU patient interventions.",
    published: true,
  },
  {
    id: "fosfozil-4gm",
    name: "Fosfozil 4gm",
    category: "critical-care-injection",
    subCategory: "IV Antibiotics Range",
    composition: "Fosfomycin 4gm IV Infusion",
    image: IMAGES.products["fosfozil-4gm"] || "",
    shortDescription:
      "Sterile broad-spectrum bactericidal infusion active against complicated Gram-positive and Gram-negative resistant strains.",
    published: true,
  },
  {
    id: "tigezil-50mg",
    name: "Tigezil 50mg",
    category: "critical-care-injection",
    subCategory: "IV Antibiotics Range",
    composition: "Tigecycline 50mg Injection",
    image: IMAGES.products["tigezil-50mg"] || "",
    shortDescription:
      "First-in-class glycylcycline antibiotic indicated for complicated skin and skin-structure infections (cSSSI) and intra-abdominal infections.",
    published: true,
  },

  // ─── CRITICAL CARE: HAEMATINICS & ANTI-ANAEMIC ─────────────
  {
    id: "zilfcm-500mg",
    name: "ZilFCM 500mg",
    category: "critical-care-injection",
    subCategory: "Haematinics & Anti-anaemic",
    composition: "Ferric Carboxymaltose 500mg Inj (50mg/ml)",
    image: IMAGES.products["zilfcm-500mg"] || "",
    shortDescription:
      "Colloidal iron complex for high-dose intravenous replenishment of elemental iron in clinical and hospital-managed iron-deficiency anaemia.",
    published: true,
  },

  // ─── CRITICAL CARE: ANTIFUNGAL RANGE ───────────────────────
  {
    id: "micasure-50mg",
    name: "Micasure 50mg",
    category: "critical-care-injection",
    subCategory: "Antifungal Range",
    composition: "Micafungin 50mg Injection",
    image: IMAGES.products["micasure-50mg"] || "",
    shortDescription:
      "Echinocandin antifungal agent for the treatment of invasive candidiasis, candidemia, and antifungal prophylaxis in surgical patients.",
    published: true,
  },

  // ─── NUTRITION RANGE: IV INFUSION ──────────────────────────
  {
    id: "zinctrace-iv",
    name: "Zinctrace IV",
    category: "nutrition-iv",
    subCategory: "Clinical Nutrition IV",
    composition: "Zinc Chloride 10mg / 10ml IV (Each 1ml contains 1mg Zinc Chloride IV)",
    image: IMAGES.products["zinctrace-iv"] || "",
    shortDescription:
      "Essential intravenous trace element supplement formulated as an additive for Total Parenteral Nutrition (TPN) and correction of clinical zinc deficiency.",
    published: true,
  },

  // ─── NUTRITION RANGE: SACHETS ──────────────────────────────
  {
    id: "hmb-zil-3gm",
    name: "HMB ZIL 3gm Sachet",
    category: "nutrition-sachet",
    subCategory: "Therapeutic Nutrition Sachet",
    composition: "Beta-hydroxy-beta-methylbutyrate 3gm",
    image: IMAGES.products["hmb-zil-3gm"] || "",
    shortDescription:
      "Advanced oral metabolic nutrition sachet designed to support muscle protein synthesis, minimize catabolic muscle wasting, and accelerate clinical recovery.",
    published: true,
  },
  {
    id: "glutashape-sachet",
    name: "Glutashape Sachet",
    category: "nutrition-sachet",
    subCategory: "Therapeutic Nutrition Sachet",
    composition: "L-Glutamine combined with Antioxidants",
    image: IMAGES.products["glutashape-sachet"] || "",
    shortDescription:
      "Targeted oral nutrition formula combining immunonutrient L-Glutamine with powerful antioxidants to maintain gut barrier function and systemic immunity.",
    published: true,
  },
];

/**
 * Filter products by category or retrieve all active products
 */
export function getProducts(category?: ProductCategory | "all"): Product[] {
  if (!category || category === "all") {
    return PRODUCTS.filter((p) => p.published);
  }
  return PRODUCTS.filter((p) => p.published && p.category === category);
}

/**
 * Retrieve metadata for a specific category
 */
export function getCategoryById(id: ProductCategory): CategoryInfo | undefined {
  return PRODUCT_CATEGORIES.find((c) => c.id === id);
}
