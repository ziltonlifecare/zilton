export type NavItem = {
  label: string;
  to: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home",       to: "/" },
  { label: "About Us",   to: "/about" },
  { label: "Products",   to: "/products" },
  { label: "Quality",    to: "/quality" },
  { label: "Contact",    to: "/contact" },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Disclaimer",     to: "/disclaimer" },
  { label: "Terms of Use",   to: "/terms" },
];

