/**
 * SEO & Metadata Utilities
 * Owned by Developer 2 (Catalogue & Business Functionality Lead)
 */

export interface MetaTagProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
}

export const SITE_CONFIG = {
  name: "ZILTON LIFE CARE PRIVATE LIMITED",
  shortName: "ZILTON LIFE CARE",
  domain: "https://ziltonlifecare.com", // Canonical placeholder pending final domain setup
  defaultDescription:
    "ZILTON LIFE CARE PRIVATE LIMITED is dedicated to advancing patient health through high-standard Critical Care, Parenteral and Clinical Nutrition formulations.",
  phone: "+91 9819667211",
  address: {
    street: "LAXMI HOUSING & FINANCE, 67 B, GOPAL MANSION, GURUNANAK ROAD, BANDRA WEST",
    city: "MUMBAI",
    postalCode: "400050",
    state: "MAHARASHTRA",
    country: "INDIA",
  },
  vision: "Better Healthcare, Healthier Lives",
  mission: "Delivering Quality, Building Trust, Improving Lives",
};

/**
 * Generate standard SEO and Open Graph metadata for React Router v7 routes
 */
export function generateRouteMeta({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
}: MetaTagProps) {
  const fullTitle = title.toLowerCase().includes("zilton")
    ? title
    : `${title} | ${SITE_CONFIG.shortName}`;
  const canonicalUrl = `${SITE_CONFIG.domain}${canonicalPath}`;
  const ogImageUrl = `${SITE_CONFIG.domain}/images/branding/logo-512.png`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "application-name", content: SITE_CONFIG.name },

    // Open Graph
    { property: "og:site_name", content: SITE_CONFIG.name },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: ogImageUrl },

    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImageUrl },

    // Canonical link tag indicator
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
}

/**
 * Verified Organization Schema (JSON-LD)
 * Only contains client-verified facts. No invented CIN, certificates, or unverified claims.
 */
export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.domain}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.name,
        url: SITE_CONFIG.domain,
        telephone: SITE_CONFIG.phone,
        email: "info@ziltonlifecare.com",
        slogan: SITE_CONFIG.vision,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.city,
          postalCode: SITE_CONFIG.address.postalCode,
          addressRegion: SITE_CONFIG.address.state,
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE_CONFIG.phone,
            contactType: "Customer Support & Hospital Supply",
            availableLanguage: ["English", "Hindi"],
            areaServed: "IN",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.domain}/#website`,
        url: SITE_CONFIG.domain,
        name: SITE_CONFIG.shortName,
        description: SITE_CONFIG.defaultDescription,
        publisher: { "@id": `${SITE_CONFIG.domain}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };
}

/**
 * Public routes list for static pre-rendering and sitemap.xml generation
 */
export const SITEMAP_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/products", priority: 0.9, changefreq: "weekly" },
  { path: "/quality", priority: 0.8, changefreq: "monthly" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/disclaimer", priority: 0.3, changefreq: "yearly" },
  { path: "/terms", priority: 0.3, changefreq: "yearly" },
];

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_CONFIG.domain}/sitemap.xml\n`;
}

