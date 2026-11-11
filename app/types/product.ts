/**
 * ZILTON LIFE CARE PRIVATE LIMITED
 * Product Data Model & Type Contracts
 * Owned by: Developer 2 (Catalogue & Business Functionality Lead)
 */

export type ProductCategory =
  | "critical-care-injection"
  | "nutrition-iv"
  | "nutrition-sachet";

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  tagline: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  /** Active pharmaceutical composition / therapeutic ingredients */
  composition: string;
  /** Specific clinical sub-division (e.g. IV Antibiotics, Haematinics, Antifungal, Nutrition) */
  subCategory?: string;
  image: string;
  shortDescription: string;
  published: boolean;
  /** Flag for packaging packshot status */
  isPendingClientData?: boolean;
}

export interface ProductCategoryFilterOption {
  id: "all" | ProductCategory;
  label: string;
  count?: number;
}
