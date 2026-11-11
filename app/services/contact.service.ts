import type { ContactFormData } from "~/schemas/contact.schema";

export type ContactPayload = ContactFormData & { honeypot?: string };

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  timestamp?: string;
  /**
   * true  → dispatched successfully via a live gateway endpoint
   * false → staging simulation (no endpoint configured) OR delivery failure
   */
  isLiveEndpoint?: boolean;
  receivedData?: {
    fullName: string;
    organization?: string;
    email: string;
    phone: string;
    enquiryType?: string;
    productName?: string;
    subject?: string;
  };
}

/** Options accepted by submitContactForm — endpointOverride is for testing only. */
export interface SubmitOptions {
  /** For testing: pass a URL to use instead of import.meta.env.VITE_CONTACT_FORM_ENDPOINT */
  endpointOverride?: string | null;
}

/**
 * HTTP status codes the gateway may return on failure.
 * Used to produce a user-readable error without exposing API internals.
 */
const HTTP_ERROR_MESSAGES: Record<number, string> = {
  400: "The submission was rejected by the gateway (bad request). Please review your input.",
  401: "Gateway authentication failed. Please contact the site administrator.",
  403: "Submission access denied by the gateway. Please contact the site administrator.",
  429: "Too many requests. Please wait a moment before submitting again.",
  500: "The enquiry gateway encountered an internal error. Please try again or use WhatsApp (+91 9819667211).",
  502: "The enquiry gateway is temporarily unavailable. Please try again shortly.",
  503: "The enquiry gateway is temporarily unavailable. Please try again shortly.",
};

function gatewayErrorMessage(status: number): string {
  return (
    HTTP_ERROR_MESSAGES[status] ??
    `Enquiry gateway returned an unexpected response (HTTP ${status}). Please contact us via telephone (+91 9819667211).`
  );
}

function resolveEndpoint(override?: string | null): string | null {
  if (override !== undefined) return override || null;
  try {
    const val = (import.meta as any).env?.VITE_CONTACT_FORM_ENDPOINT;
    return typeof val === "string" && val.length > 0 ? val : null;
  } catch {
    return null;
  }
}

/**
 * Service to dispatch contact enquiries.
 *
 * Modes:
 *  1. Live delivery  — VITE_CONTACT_FORM_ENDPOINT is set (or endpointOverride provided).
 *                      Submits via HTTP POST.
 *                      Returns success ONLY on 2xx HTTP status.
 *                      Returns failure on any non-2xx status or network error.
 *                      Never falls through to staging mode.
 *  2. Staging mode   — No endpoint configured. Simulates submission with 750ms
 *                      latency and a ZLC-reference ID. Clearly labels the response
 *                      as staging so the UI can show an appropriate notice.
 *
 * Security notes:
 *  - Honeypot field silently rejects automated submissions.
 *  - The endpoint URL is never echoed back in any response object.
 *  - No API keys, tokens, or secrets are included in the response payload.
 *  - Duplicate submissions: the caller (form component) must disable the submit
 *    button after the first call; the service does not enforce this itself.
 */
export async function submitContactForm(
  payload: ContactPayload,
  options?: SubmitOptions
): Promise<ContactSubmissionResponse> {
  // ── Honeypot spam defense ────────────────────────────────────────────────
  if (payload.honeypot) {
    return { success: false, message: "Submission rejected." };
  }

  // ── Resolve live endpoint ────────────────────────────────────────────────
  const endpoint = resolveEndpoint(options?.endpointOverride);

  // ── LIVE DELIVERY MODE ───────────────────────────────────────────────────
  if (endpoint) {
    // Strip honeypot field before sending
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { honeypot: _hp, ...safePayload } = payload;

    let res: Response;
    try {
      res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(safePayload),
      });
    } catch {
      // Network-level failure (DNS, timeout, CORS, offline)
      return {
        success: false,
        message:
          "Enquiry dispatch failed due to a network error. Please check your connection or contact us via telephone (+91 9819667211).",
        isLiveEndpoint: true,
      };
    }

    // ── Success: only on 2xx ─────────────────────────────────────────────
    if (res.ok) {
      return {
        success: true,
        message:
          "Thank you for reaching out. Your enquiry has been dispatched directly to our executive corporate desk.",
        submissionId: `ZLC-${Date.now().toString(36).toUpperCase()}`,
        timestamp: new Date().toISOString(),
        isLiveEndpoint: true,
      };
    }

    // ── Non-2xx: return failure — NEVER fall through to staging ──────────
    return {
      success: false,
      message: gatewayErrorMessage(res.status),
      isLiveEndpoint: true,
    };
  }

  // ── STAGING MODE — no endpoint configured ───────────────────────────────
  await new Promise((resolve) => setTimeout(resolve, 750));

  return {
    success: true,
    message:
      "Your enquiry has been received on staging. Live email delivery requires VITE_CONTACT_FORM_ENDPOINT to be configured in the production environment.",
    submissionId: `ZLC-${Date.now().toString(36).toUpperCase()}`,
    timestamp: new Date().toISOString(),
    isLiveEndpoint: false,
  };
}
