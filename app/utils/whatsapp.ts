export const WHATSAPP_NUMBER = "919819667211";

/**
 * Returns a full WhatsApp link with URL‑encoded message.
 *
 * @param message - The plain text message to pre‑fill.
 */
export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

