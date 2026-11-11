/**
 * Tests for app/utils/whatsapp.ts and app/utils/inquiry.ts
 */

import { describe, it, expect } from "vitest";
import { getWhatsAppLink, WHATSAPP_NUMBER } from "../app/utils/whatsapp";
import {
  buildCorporateInquiryWhatsApp,
  buildCorporateInquiryMailto,
  formatInquiryBodyText,
  getEnquiryTypeLabel,
} from "../app/utils/inquiry";
import type { ContactFormData } from "../app/schemas/contact.schema";

const sampleForm: ContactFormData = {
  fullName: "Dr. Ananya Menon",
  organization: "Tata Memorial Hospital",
  email: "ananya.menon@tmh.org",
  phone: "+91 2224177000",
  enquiryType: "quality-docs",
  productName: "MEROZIL 1gm",
  subject: "CoA request for recent batch",
  message: "Please provide the Certificate of Analysis for the most recent batch of MEROZIL 1gm supplied to our pharmacy.",
  consent: true,
};

describe("getWhatsAppLink()", () => {
  it("returns a wa.me URL", () => {
    const link = getWhatsAppLink("Hello");
    expect(link.startsWith("https://wa.me/")).toBe(true);
  });

  it("uses the correct WhatsApp number", () => {
    const link = getWhatsAppLink("Hello");
    expect(link).toContain(WHATSAPP_NUMBER);
  });

  it("URL-encodes the message", () => {
    const link = getWhatsAppLink("Hello World");
    expect(link).toContain("Hello%20World");
  });

  it("trims leading/trailing whitespace from message", () => {
    const link = getWhatsAppLink("  Hello  ");
    expect(link).toContain("Hello");
  });
});

describe("WHATSAPP_NUMBER", () => {
  it("is the verified corporate number", () => {
    expect(WHATSAPP_NUMBER).toBe("919819667211");
  });
});

describe("buildCorporateInquiryWhatsApp()", () => {
  it("returns a wa.me URL", () => {
    const link = buildCorporateInquiryWhatsApp(sampleForm);
    expect(link.startsWith("https://wa.me/")).toBe(true);
  });

  it("includes the representative name in the message", () => {
    const link = buildCorporateInquiryWhatsApp(sampleForm);
    expect(decodeURIComponent(link)).toContain("Dr. Ananya Menon");
  });

  it("includes the product name when provided", () => {
    const link = buildCorporateInquiryWhatsApp(sampleForm);
    expect(decodeURIComponent(link)).toContain("MEROZIL 1gm");
  });
});

describe("buildCorporateInquiryMailto()", () => {
  it("returns a mailto: URL", () => {
    const link = buildCorporateInquiryMailto(sampleForm);
    expect(link.startsWith("mailto:")).toBe(true);
  });

  it("addresses the official company email", () => {
    const link = buildCorporateInquiryMailto(sampleForm);
    expect(link).toContain("info@ziltonlifecare.com");
  });

  it("includes the subject in the URL", () => {
    const link = buildCorporateInquiryMailto(sampleForm);
    expect(decodeURIComponent(link)).toContain(sampleForm.subject);
  });
});

describe("formatInquiryBodyText()", () => {
  it("includes the representative name", () => {
    const body = formatInquiryBodyText(sampleForm);
    expect(body).toContain("Dr. Ananya Menon");
  });

  it("includes the organization", () => {
    const body = formatInquiryBodyText(sampleForm);
    expect(body).toContain("Tata Memorial Hospital");
  });

  it("includes the message text", () => {
    const body = formatInquiryBodyText(sampleForm);
    expect(body).toContain(sampleForm.message);
  });
});

describe("getEnquiryTypeLabel()", () => {
  it("returns readable label for 'general'", () => {
    expect(getEnquiryTypeLabel("general")).toBe("General Corporate Enquiry");
  });

  it("returns readable label for 'product-related'", () => {
    expect(getEnquiryTypeLabel("product-related")).toBe("Product Availability & Hospital Supply");
  });

  it("returns readable label for 'quality-docs'", () => {
    expect(getEnquiryTypeLabel("quality-docs")).toBe("Quality & Batch Documentation (CoA / BMR)");
  });

  it("returns the raw value for unknown types", () => {
    expect(getEnquiryTypeLabel("unknown")).toBe("unknown");
  });
});
