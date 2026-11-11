/**
 * Tests for app/data/products.ts and app/types/product.ts
 *
 * Verifies the complete product catalogue matches the approved client portfolio:
 *   - 12 total published SKUs
 *   - 9 Critical Care Injections
 *   - 1 Nutrition IV
 *   - 2 Nutrition Sachets
 *   - 3 product categories
 *   - No missing required fields
 *   - Filter helpers return correct results
 */

import { describe, it, expect } from "vitest";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  getProducts,
  getCategoryById,
} from "../app/data/products";

describe("PRODUCT_CATEGORIES", () => {
  it("defines exactly 3 categories", () => {
    expect(PRODUCT_CATEGORIES).toHaveLength(3);
  });

  it("contains critical-care-injection", () => {
    expect(PRODUCT_CATEGORIES.some((c) => c.id === "critical-care-injection")).toBe(true);
  });

  it("contains nutrition-iv", () => {
    expect(PRODUCT_CATEGORIES.some((c) => c.id === "nutrition-iv")).toBe(true);
  });

  it("contains nutrition-sachet", () => {
    expect(PRODUCT_CATEGORIES.some((c) => c.id === "nutrition-sachet")).toBe(true);
  });

  it("every category has a non-empty name", () => {
    PRODUCT_CATEGORIES.forEach((c) => expect(c.name.length).toBeGreaterThan(0));
  });

  it("every category has a non-empty tagline", () => {
    PRODUCT_CATEGORIES.forEach((c) => expect(c.tagline.length).toBeGreaterThan(0));
  });
});

describe("PRODUCTS array — total counts", () => {
  const published = PRODUCTS.filter((p) => p.published);

  it("has exactly 12 published SKUs", () => {
    expect(published).toHaveLength(12);
  });

  it("has 9 critical-care-injection SKUs", () => {
    expect(published.filter((p) => p.category === "critical-care-injection")).toHaveLength(9);
  });

  it("has 1 nutrition-iv SKU", () => {
    expect(published.filter((p) => p.category === "nutrition-iv")).toHaveLength(1);
  });

  it("has 2 nutrition-sachet SKUs", () => {
    expect(published.filter((p) => p.category === "nutrition-sachet")).toHaveLength(2);
  });
});

describe("PRODUCTS — required field completeness", () => {
  PRODUCTS.filter((p) => p.published).forEach((product) => {
    describe(`product: ${product.name}`, () => {
      it("has a non-empty id", () => {
        expect(product.id.length).toBeGreaterThan(0);
      });

      it("has a non-empty name", () => {
        expect(product.name.length).toBeGreaterThan(0);
      });

      it("has a valid category", () => {
        expect(["critical-care-injection", "nutrition-iv", "nutrition-sachet"]).toContain(
          product.category
        );
      });

      it("has a non-empty composition", () => {
        expect(product.composition.length).toBeGreaterThan(0);
      });

      it("has a short description of at least 20 characters", () => {
        expect(product.shortDescription.length).toBeGreaterThanOrEqual(20);
      });
    });
  });
});

describe("PRODUCTS — ID uniqueness", () => {
  it("has no duplicate product IDs", () => {
    const ids = PRODUCTS.map((p) => p.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});

describe("PRODUCTS — known SKU presence", () => {
  const ids = PRODUCTS.map((p) => p.id);

  const expectedIds = [
    "merozil-1gm",
    "merozil-500mg",
    "ziltaz-4-5gm",
    "polyzil-5lac",
    "polyzil-7-5lac",
    "fosfozil-4gm",
    "tigezil-50mg",
    "zilfcm-500mg",
    "micasure-50mg",
    "zinctrace-iv",
    "hmb-zil-3gm",
    "glutashape-sachet",
  ];

  expectedIds.forEach((id) => {
    it(`contains product with id "${id}"`, () => {
      expect(ids).toContain(id);
    });
  });
});

describe("getProducts()", () => {
  it("returns all 12 published products when called with no argument", () => {
    expect(getProducts()).toHaveLength(12);
  });

  it("returns all 12 published products when called with 'all'", () => {
    expect(getProducts("all")).toHaveLength(12);
  });

  it("returns 9 critical-care-injection products", () => {
    expect(getProducts("critical-care-injection")).toHaveLength(9);
  });

  it("returns 1 nutrition-iv product", () => {
    expect(getProducts("nutrition-iv")).toHaveLength(1);
  });

  it("returns 2 nutrition-sachet products", () => {
    expect(getProducts("nutrition-sachet")).toHaveLength(2);
  });

  it("only returns published products", () => {
    const all = getProducts();
    expect(all.every((p) => p.published)).toBe(true);
  });
});

describe("getCategoryById()", () => {
  it("returns correct category for critical-care-injection", () => {
    const cat = getCategoryById("critical-care-injection");
    expect(cat?.id).toBe("critical-care-injection");
  });

  it("returns correct category for nutrition-iv", () => {
    const cat = getCategoryById("nutrition-iv");
    expect(cat?.id).toBe("nutrition-iv");
  });

  it("returns correct category for nutrition-sachet", () => {
    const cat = getCategoryById("nutrition-sachet");
    expect(cat?.id).toBe("nutrition-sachet");
  });
});
