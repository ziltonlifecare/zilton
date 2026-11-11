import { COMPANY } from "../data/company";
import { ENQUIRY_TYPES, type ContactFormData } from "../schemas/contact.schema";

/**
 * Returns human-readable label for enquiry classification
 */
export function getEnquiryTypeLabel(value: string): string {
  const match = ENQUIRY_TYPES.find((t) => t.value === value);
  return match ? match.label : value;
}

/**
 * Formats a clean, structured plain text body for Corporate Inquiries
 */
export function formatInquiryBodyText(data: ContactFormData): string {
  const classification = getEnquiryTypeLabel(data.enquiryType);

  const lines = [
    "CORPORATE INQUIRY — ZILTON LIFE CARE PRIVATE LIMITED",
    "==================================================",
    "",
    `Representative Name : ${data.fullName}`,
    `Institution / Hospital: ${data.organization?.trim() || "Not Specified"}`,
    `Official Email      : ${data.email}`,
    `Telephone           : ${data.phone}`,
    `Classification      : ${classification}`,
    ...(data.productName ? [`Referenced Product  : ${data.productName}`] : []),
    `Subject Line        : ${data.subject}`,
    "",
    "DETAILED MESSAGE & REQUIRED VOLUMES:",
    "--------------------------------------------------",
    data.message,
    "",
    "--------------------------------------------------",
    "Certification       : Verified institutional/clinical inquiry.",
  ];

  return lines.join("\r\n");
}

/**
 * Generates an official mailto URL for direct email client submission to info@ziltonlifecare.com
 */
export function buildCorporateInquiryMailto(data: ContactFormData): string {
  const recipient = COMPANY.email; // info@ziltonlifecare.com
  const subject = `Corporate Enquiry: ${data.subject || "Zilton Life Care Formulations"}`;
  const body = formatInquiryBodyText(data);

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Backward-compatible alias for corporate email compose
 */
export function buildCorporateInquiryGmail(data: ContactFormData): string {
  return buildCorporateInquiryMailto(data);
}

/**
 * Generates the full WhatsApp URL (wa.me) for the Corporate Inquiry form.
 * Uses official WhatsApp number from COMPANY.whatsapp.
 */
export function buildCorporateInquiryWhatsApp(data: ContactFormData): string {
  const number = COMPANY.whatsapp;
  const classification = getEnquiryTypeLabel(data.enquiryType);

  const lines = [
    "*NEW CORPORATE INQUIRY — ZILTON LIFE CARE*",
    "--------------------------------------",
    `*Representative:* ${data.fullName}`,
    `*Institution / Hospital:* ${data.organization?.trim() || "Not Specified"}`,
    `*Official Email:* ${data.email}`,
    `*Telephone:* ${data.phone}`,
    `*Classification:* ${classification}`,
    ...(data.productName ? [`*Referenced Product:* ${data.productName}`] : []),
    `*Subject Line:* ${data.subject}`,
    "",
    "*Detailed Message & Required Volumes:*",
    data.message,
    "",
    "✓ _Certified Institutional / Commercial Request_",
  ];

  const message = lines.join("\n");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

