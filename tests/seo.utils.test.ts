/**
 * Tests for app/utils/seo.ts
 *
 * Verifies SEO metadata generation, structured data, and sitemap routes.
 */

import { describe, it, expect } from "vitest";
import {
  generateRouteMeta,
  getOrganizationStructuredData,
  SITEMAP_ROUTES,
  SITE_CONFIG,
} from "../app/utils/seo";

describe("SITE_CONFIG", () => {
  it("has the correct legal entity name", () => {
    expect(SITE_CONFIG.name).toBe("ZILTON LIFE CARE PRIVATE LIMITED");
  });

  it("has a non-empty domain", () => {
    expect(SITE_CONFIG.domain.startsWith("https://")).toBe(true);
  });

  it("has a phone number", () => {
    expect(SITE_CONFIG.phone).toBe("+91 9819667211");
  });
});

describe("generateRouteMeta()", () => {
  const meta = generateRouteMeta({
    title: "Products",
    description: "Browse our pharmaceutical product catalogue.",
    canonicalPath: "/products",
  });

  it("returns an array", () => {
    expect(Array.isArray(meta)).toBe(true);
  });

  it("includes a title entry", () => {
    const titleEntry = meta.find((m: any) => m.title);
    expect(titleEntry).toBeDefined();
  });

  it("includes ZILTON LIFE CARE in the title", () => {
    const titleEntry = meta.find((m: any) => m.title) as any;
    expect(titleEntry.title).toContain("ZILTON LIFE CARE");
  });

  it("includes og:title", () => {
    const ogTitle = meta.find((m: any) => m.property === "og:title") as any;
    expect(ogTitle).toBeDefined();
  });

  it("includes twitter:card", () => {
    const twitterCard = meta.find((m: any) => m.name === "twitter:card") as any;
    expect(twitterCard?.content).toBe("summary_large_image");
  });

  it("includes canonical link", () => {
    const canonical = meta.find((m: any) => m.rel === "canonical") as any;
    expect(canonical?.href).toContain("/products");
  });

  it("does not duplicate ZILTON LIFE CARE when title already contains it", () => {
    const meta2 = generateRouteMeta({ title: "ZILTON LIFE CARE — Home", description: "Home page." });
    const titleEntry = meta2.find((m: any) => m.title) as any;
    // Should not double-append the brand
    expect(titleEntry.title).toBe("ZILTON LIFE CARE — Home");
  });
});

describe("getOrganizationStructuredData()", () => {
  const data = getOrganizationStructuredData() as any;

  it("has @context: https://schema.org", () => {
    expect(data["@context"]).toBe("https://schema.org");
  });

  it("contains an @graph array", () => {
    expect(Array.isArray(data["@graph"])).toBe(true);
  });

  it("includes an Organization node", () => {
    const org = data["@graph"].find((n: any) => n["@type"] === "Organization");
    expect(org).toBeDefined();
  });

  it("Organization has correct legal name", () => {
    const org = data["@graph"].find((n: any) => n["@type"] === "Organization") as any;
    expect(org.legalName).toBe("ZILTON LIFE CARE PRIVATE LIMITED");
  });

  it("Organization address is in Mumbai", () => {
    const org = data["@graph"].find((n: any) => n["@type"] === "Organization") as any;
    expect(org.address.addressLocality).toBe("MUMBAI");
  });

  it("includes a WebSite node", () => {
    const website = data["@graph"].find((n: any) => n["@type"] === "WebSite");
    expect(website).toBeDefined();
  });
});

describe("SITEMAP_ROUTES", () => {
  it("contains exactly 8 routes", () => {
    expect(SITEMAP_ROUTES).toHaveLength(8);
  });

  it("includes the home route at priority 1.0", () => {
    const home = SITEMAP_ROUTES.find((r) => r.path === "/");
    expect(home?.priority).toBe(1.0);
  });

  it("includes /products", () => {
    expect(SITEMAP_ROUTES.some((r) => r.path === "/products")).toBe(true);
  });

  it("includes /contact", () => {
    expect(SITEMAP_ROUTES.some((r) => r.path === "/contact")).toBe(true);
  });

  it("includes all legal routes", () => {
    expect(SITEMAP_ROUTES.some((r) => r.path === "/privacy-policy")).toBe(true);
    expect(SITEMAP_ROUTES.some((r) => r.path === "/disclaimer")).toBe(true);
    expect(SITEMAP_ROUTES.some((r) => r.path === "/terms")).toBe(true);
  });

  it("legal routes have lower priority than core pages", () => {
    const legal = SITEMAP_ROUTES.filter((r) =>
      ["/privacy-policy", "/disclaimer", "/terms"].includes(r.path)
    );
    legal.forEach((r) => expect(r.priority).toBeLessThan(0.5));
  });
});
