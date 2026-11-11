/**
 * Tests for app/services/contact.service.ts
 *
 * Covers four required scenarios:
 *   1. Successful HTTP response (2xx) → success: true, isLiveEndpoint: true
 *   2. Unsuccessful HTTP response (4xx / 5xx) → success: false, isLiveEndpoint: true, NEVER staging fallthrough
 *   3. Network failure (fetch throws) → success: false, isLiveEndpoint: true
 *   4. Missing endpoint → staging mode, success: true, isLiveEndpoint: false
 *
 * Additional:
 *   5. Honeypot protection
 *   6. Submission ID format (ZLC-XXXXXX)
 *   7. Non-2xx does NOT fall through to staging
 */

import { describe, it, expect, vi, afterEach } from "vitest";
import { submitContactForm } from "../app/services/contact.service";
import type { ContactPayload } from "../app/services/contact.service";

const ENDPOINT = "https://formspree.io/f/test_endpoint";

// Minimal valid payload
const validPayload: ContactPayload = {
  fullName: "Dr. Ravi Sharma",
  organization: "Apollo Hospital",
  email: "ravi.sharma@apollo.com",
  phone: "+91 9876543210",
  enquiryType: "product-related",
  productName: "MEROZIL 1gm",
  subject: "Hospital supply enquiry for critical care unit",
  message: "We require monthly supply of MEROZIL 1gm for our ICU. Please share pricing and availability.",
  consent: true,
};

afterEach(() => {
  vi.restoreAllMocks();
});

// ── 1. Successful HTTP response ──────────────────────────────────────────────
describe("live endpoint — 2xx success", () => {
  const mockFetch = (status = 200) =>
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, status } as Response));

  it("returns success: true", async () => {
    mockFetch();
    const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
    expect(result.success).toBe(true);
  });

  it("marks isLiveEndpoint: true", async () => {
    mockFetch();
    const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
    expect(result.isLiveEndpoint).toBe(true);
  });

  it("returns a submissionId in ZLC- format", async () => {
    mockFetch();
    const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
    expect(result.submissionId).toMatch(/^ZLC-[0-9A-Z]+$/);
  });

  it("returns a valid ISO timestamp", async () => {
    mockFetch();
    const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
    expect(result.timestamp).toBeDefined();
    expect(() => new Date(result.timestamp!).toISOString()).not.toThrow();
  });

  it("POSTs to the configured endpoint", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 } as Response);
    vi.stubGlobal("fetch", fetchMock);
    await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledWith(
      ENDPOINT,
      expect.objectContaining({ method: "POST" })
    );
  });
});

// ── 2. Unsuccessful HTTP responses (4xx / 5xx) ────────────────────────────────
describe("live endpoint — non-2xx failure", () => {
  const failureCases = [
    { status: 400, label: "400 Bad Request" },
    { status: 401, label: "401 Unauthorized" },
    { status: 403, label: "403 Forbidden" },
    { status: 429, label: "429 Too Many Requests" },
    { status: 500, label: "500 Internal Server Error" },
    { status: 502, label: "502 Bad Gateway" },
    { status: 503, label: "503 Service Unavailable" },
  ];

  for (const { status, label } of failureCases) {
    it(`returns success: false for ${label}`, async () => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status } as Response));
      const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
      expect(result.success).toBe(false);
    });

    it(`marks isLiveEndpoint: true for ${label}`, async () => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status } as Response));
      const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
      expect(result.isLiveEndpoint).toBe(true);
    });

    it(`never falls through to staging on ${label}`, async () => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status } as Response));
      const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
      // Staging responses have isLiveEndpoint: false and contain "staging" in the message
      expect(result.isLiveEndpoint).toBe(true);
      expect(result.message.toLowerCase()).not.toContain("staging");
    });
  }
});

// ── 3. Network failure ────────────────────────────────────────────────────────
describe("live endpoint — network failure", () => {
  it("returns success: false on network error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
    expect(result.success).toBe(false);
  });

  it("marks isLiveEndpoint: true on network error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
    expect(result.isLiveEndpoint).toBe(true);
  });

  it("provides a user-readable message mentioning telephone", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
    expect(result.message).toContain("+91 9819667211");
  });

  it("never falls through to staging on network failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    const result = await submitContactForm(validPayload, { endpointOverride: ENDPOINT });
    expect(result.isLiveEndpoint).toBe(true);
    expect(result.message.toLowerCase()).not.toContain("staging");
  });
});

// ── 4. Missing endpoint (staging mode) ───────────────────────────────────────
describe("staging mode — no endpoint configured", () => {
  it("returns success: true in staging mode", async () => {
    const result = await submitContactForm(validPayload, { endpointOverride: null });
    expect(result.success).toBe(true);
  });

  it("marks isLiveEndpoint: false in staging mode", async () => {
    const result = await submitContactForm(validPayload, { endpointOverride: null });
    expect(result.isLiveEndpoint).toBe(false);
  });

  it("returns a submissionId in ZLC- format in staging", async () => {
    const result = await submitContactForm(validPayload, { endpointOverride: null });
    expect(result.submissionId).toMatch(/^ZLC-[0-9A-Z]+$/);
  });

  it("does not call fetch in staging mode", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    await submitContactForm(validPayload, { endpointOverride: null });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

// ── 5. Honeypot protection ────────────────────────────────────────────────────
describe("honeypot spam protection", () => {
  it("rejects submission when honeypot is populated", async () => {
    const spamPayload: ContactPayload = { ...validPayload, honeypot: "spambot@example.com" };
    const result = await submitContactForm(spamPayload, { endpointOverride: ENDPOINT });
    expect(result.success).toBe(false);
  });

  it("does not call fetch when honeypot is populated", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const spamPayload: ContactPayload = { ...validPayload, honeypot: "spambot@example.com" };
    await submitContactForm(spamPayload, { endpointOverride: ENDPOINT });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
