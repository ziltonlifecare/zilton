/**
 * Tests for app/schemas/contact.schema.ts
 *
 * Verifies Zod validation rules match documented form behaviour:
 *   - Valid payload passes
 *   - Required fields are enforced
 *   - Email, phone, name, subject, message constraints
 *   - Consent must be literal true
 *   - Enquiry type enum
 */

import { describe, it, expect } from "vitest";
import { contactFormSchema, enquiryTypeValues } from "../app/schemas/contact.schema";

const validData = {
  fullName: "Dr. Priya Nair",
  organization: "Kokilaben Hospital",
  email: "priya.nair@kokilaben.com",
  phone: "+91 9876543210",
  enquiryType: "product-related" as const,
  productName: "Zinctrace IV",
  subject: "TPN supply enquiry for nutrition ward",
  message: "We need monthly supply of Zinctrace IV for our parenteral nutrition program. Please advise on availability.",
  consent: true as const,
};

describe("contactFormSchema — valid payload", () => {
  it("passes validation with a fully valid payload", () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("passes validation when optional fields are omitted", () => {
    const { organization, productName, ...minimal } = validData;
    const result = contactFormSchema.safeParse(minimal);
    expect(result.success).toBe(true);
  });
});

describe("contactFormSchema — fullName validation", () => {
  it("rejects name shorter than 2 characters", () => {
    const result = contactFormSchema.safeParse({ ...validData, fullName: "A" });
    expect(result.success).toBe(false);
  });

  it("rejects name longer than 80 characters", () => {
    const result = contactFormSchema.safeParse({ ...validData, fullName: "A".repeat(81) });
    expect(result.success).toBe(false);
  });

  it("rejects name with numeric characters", () => {
    const result = contactFormSchema.safeParse({ ...validData, fullName: "Dr4567" });
    expect(result.success).toBe(false);
  });

  it("accepts name with spaces and periods", () => {
    const result = contactFormSchema.safeParse({ ...validData, fullName: "Dr. Ravi Kumar" });
    expect(result.success).toBe(true);
  });
});

describe("contactFormSchema — email validation", () => {
  it("rejects missing email", () => {
    const result = contactFormSchema.safeParse({ ...validData, email: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email format", () => {
    const result = contactFormSchema.safeParse({ ...validData, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects email without domain", () => {
    const result = contactFormSchema.safeParse({ ...validData, email: "user@" });
    expect(result.success).toBe(false);
  });

  it("accepts valid email", () => {
    const result = contactFormSchema.safeParse({ ...validData, email: "contact@hospital.in" });
    expect(result.success).toBe(true);
  });
});

describe("contactFormSchema — phone validation", () => {
  it("rejects empty phone", () => {
    const result = contactFormSchema.safeParse({ ...validData, phone: "" });
    expect(result.success).toBe(false);
  });

  it("rejects phone that is too short", () => {
    const result = contactFormSchema.safeParse({ ...validData, phone: "12345" });
    expect(result.success).toBe(false);
  });

  it("accepts standard Indian mobile number", () => {
    const result = contactFormSchema.safeParse({ ...validData, phone: "+91 9819667211" });
    expect(result.success).toBe(true);
  });

  it("accepts international format", () => {
    const result = contactFormSchema.safeParse({ ...validData, phone: "+1 800 555 0100" });
    expect(result.success).toBe(true);
  });
});

describe("contactFormSchema — message validation", () => {
  it("rejects message shorter than 15 characters", () => {
    const result = contactFormSchema.safeParse({ ...validData, message: "Hi there" });
    expect(result.success).toBe(false);
  });

  it("rejects message longer than 1500 characters", () => {
    const result = contactFormSchema.safeParse({ ...validData, message: "A".repeat(1501) });
    expect(result.success).toBe(false);
  });

  it("accepts message within range", () => {
    const result = contactFormSchema.safeParse({ ...validData, message: "This is a valid institutional enquiry message." });
    expect(result.success).toBe(true);
  });
});

describe("contactFormSchema — subject validation", () => {
  it("rejects subject shorter than 3 characters", () => {
    const result = contactFormSchema.safeParse({ ...validData, subject: "Hi" });
    expect(result.success).toBe(false);
  });

  it("rejects subject longer than 150 characters", () => {
    const result = contactFormSchema.safeParse({ ...validData, subject: "A".repeat(151) });
    expect(result.success).toBe(false);
  });
});

describe("contactFormSchema — consent validation", () => {
  it("rejects consent: false", () => {
    const result = contactFormSchema.safeParse({ ...validData, consent: false });
    expect(result.success).toBe(false);
  });

  it("rejects missing consent", () => {
    const { consent, ...noConsent } = validData;
    const result = contactFormSchema.safeParse(noConsent);
    expect(result.success).toBe(false);
  });

  it("accepts consent: true", () => {
    const result = contactFormSchema.safeParse({ ...validData, consent: true });
    expect(result.success).toBe(true);
  });
});

describe("contactFormSchema — enquiryType validation", () => {
  enquiryTypeValues.forEach((type) => {
    it(`accepts valid enquiry type: ${type}`, () => {
      const result = contactFormSchema.safeParse({ ...validData, enquiryType: type });
      expect(result.success).toBe(true);
    });
  });

  it("rejects unknown enquiry type", () => {
    const result = contactFormSchema.safeParse({ ...validData, enquiryType: "unknown-type" });
    expect(result.success).toBe(false);
  });
});
