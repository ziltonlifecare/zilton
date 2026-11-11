# ZILTON LIFE CARE PRIVATE LIMITED — Corporate Web Platform

Modern corporate pharmaceutical marketing website for **ZILTON LIFE CARE PRIVATE LIMITED**, Mumbai.

The platform is a B2B informational and enquiry portal — not an e-commerce store or patient portal. It presents 12 hospital-grade pharmaceutical formulations across 3 therapeutic divisions, supports institutional enquiries via a validated contact form and WhatsApp Business desk, and delivers full server-side rendering for SEO.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React Router v8 (framework mode, SSR) | `^8.5.1` |
| UI library | React | `^19.2.8` |
| Build tool | Vite | `^8.0.3` |
| Language | TypeScript | `^5.9.3` (strict mode) |
| Styling | Tailwind CSS v4 (`@theme` directive) | `^4.2.2` |
| Animation | GSAP + `@gsap/react` | `^3.15.0` |
| Animation | Framer Motion | `^14.9.0` |
| Smooth scroll | Lenis | `^1.3.27` |
| Forms | React Hook Form + Zod | `^7.54.2` / `^3.24.2` |
| Icons | Lucide React | `^1.67.0` |
| Testing | Vitest | `^5.1.0` |

**Typography:** Fraunces (editorial serif, display headings) + Inter (sans-serif body) — loaded via Google Fonts.

---

## Project Structure

```
app/
├── root.tsx                    # App shell, Layout, ErrorBoundary, JSON-LD injection
├── routes.ts                   # React Router v8 typed route config (8 routes)
├── app.css                     # Tailwind v4 @theme tokens, base styles, focus rings
├── components/
│   ├── common/                 # Button, Container, SectionHeading, StatisticCard,
│   │                           # FloatingWhatsAppButton, FloatingContactWidget
│   ├── layout/                 # Navbar, Footer, SiteLayout
│   ├── motion/                 # 11 animation components (GSAP, Framer Motion, Lenis)
│   ├── sections/               # Page-specific sections (products, contact, quality,
│   │                           # home, about, legal)
│   └── ui/                     # ImageSlot (centralized image component with fallback)
├── data/
│   ├── company.ts              # Single source of truth for verified company facts
│   ├── products.ts             # 12 product SKUs + 3 categories + filter helpers
│   ├── images.ts               # Centralized image registry (all assets route through here)
│   └── navigation.ts           # Nav items and footer legal links
├── routes/
│   ├── home.tsx                # Homepage
│   ├── about.tsx               # About Us
│   ├── products.tsx            # Product catalogue (GSAP Flip category filter)
│   ├── quality.tsx             # Quality Assurance
│   ├── contact.tsx             # Contact (React Hook Form + Zod, URL pre-fill)
│   ├── privacy-policy.tsx      # Privacy Policy
│   ├── disclaimer.tsx          # Disclaimer
│   └── terms.tsx               # Terms of Use
├── schemas/
│   └── contact.schema.ts       # Zod validation schema for contact form
├── services/
│   └── contact.service.ts      # Contact form submission (live endpoint + staging mode)
├── types/
│   └── product.ts              # Product, CategoryInfo, ProductCategory types
├── utils/
│   ├── seo.ts                  # generateRouteMeta(), JSON-LD, SITEMAP_ROUTES
│   ├── whatsapp.ts             # getWhatsAppLink() helper
│   └── inquiry.ts              # WhatsApp & mailto URL builders
└── hooks/
    ├── useCountUp.ts
    └── useScrollReveal.ts

public/
├── favicon.ico
├── robots.txt
├── sitemap.xml                 # 8 URLs, all routes, priorities set
└── images/
    ├── branding/               # logo-512.png, logo.png
    ├── company/                # company-graphic.svg
    ├── hero/                   # hero-medical-graphic.svg
    └── products/               # 12 SVG product illustrations + 3 category placeholders

tests/
├── contact.service.test.ts     # Contact service: 4 scenarios + honeypot (36 tests)
├── contact.schema.test.ts      # Zod schema validation (31 tests)
├── products.data.test.ts       # Product catalogue data integrity (75 tests)
├── seo.utils.test.ts           # SEO metadata generation (27 tests)
└── whatsapp.utils.test.ts      # WhatsApp/inquiry utilities (27 tests)

docs/                           # Audit reports, QA phases, readiness reports
.github/workflows/ci.yml        # CI: test → typecheck → build
Dockerfile                      # Multi-stage Alpine Node.js 24 build
vercel.json                     # Vercel deployment config (Node 22.x SSR)
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/about` | About Us |
| `/products` | Product Catalogue |
| `/quality` | Quality Assurance |
| `/contact` | Contact Us |
| `/privacy-policy` | Privacy Policy |
| `/disclaimer` | Disclaimer |
| `/terms` | Terms of Use |

---

## Product Catalogue

**12 published SKUs across 3 categories** (all client-verified):

**Critical Care Injection (9 SKUs)**
- MEROZIL 1gm — Meropenem 1gm
- MEROZIL 500mg — Meropenem 500mg
- Ziltaz 4.5gm — Piperacillin 4gm + Tazobactam 500mg
- Polyzil 5 lac IU — Polymyxin B 5,00,000 IU
- Polyzil 7.5 lac IU — Polymyxin B 7,50,000 IU
- Fosfozil 4gm — Fosfomycin 4gm IV Infusion
- Tigezil 50mg — Tigecycline 50mg
- ZilFCM 500mg — Ferric Carboxymaltose 500mg
- Micasure 50mg — Micafungin 50mg

**Nutrition IV (1 SKU)**
- Zinctrace IV — Zinc Chloride 10mg/10ml IV

**Nutrition Sachet (2 SKUs)**
- HMB ZIL 3gm Sachet — Beta-hydroxy-beta-methylbutyrate 3gm
- Glutashape Sachet — L-Glutamine + Antioxidants

> **Note:** 3 brand name variants require final client sign-off. See `docs/PRODUCT_RECONCILIATION_REPORT.md`.

---

## Image Registry

All images are managed through a single centralized registry at `app/data/images.ts`. To swap any image, update only that file.

- **Product images:** SVG illustrations at `public/images/products/*.svg` — one per SKU. Client packshots pending.
- **Hero / About / Quality / Contact:** Unsplash stock photography (clearly labelled as illustrative placeholders — not actual Zilton Life Care premises or products).
- **Branding:** `public/images/branding/logo-512.png` and `logo.png`.

See `docs/FINAL_ASSET_INVENTORY.md` for the complete asset status table.

---

## Contact Form

The contact form uses React Hook Form with Zod validation. Submission behaviour:

- **Live mode:** Set `VITE_CONTACT_FORM_ENDPOINT` in your hosting environment (e.g. Formspree, Resend, AWS SES webhook). Returns success **only** on HTTP 2xx. Non-2xx responses return an explicit failure — never falls through to staging.
- **Staging mode:** No endpoint configured. Simulates 750ms latency, generates a ZLC-reference ID, and clearly labels the response as staging.
- Honeypot field silently rejects automated spam submissions.

```bash
# .env (production hosting)
VITE_CONTACT_FORM_ENDPOINT="https://formspree.io/f/your_form_id"
```

---

## Development Commands

```bash
# Install dependencies (requires Node.js ≥ 22)
npm install

# Start development server
npm run dev

# Run test suite (196 tests across 5 files)
npm test

# TypeScript typecheck
npm run typecheck

# Production build
npm run build

# Start production server (after build)
npm run start
```

> Node.js 22+ is required. Use `nvm use 22` if you have nvm installed.

---

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`) runs on every push and pull request to `main`:

1. `npm ci` — install dependencies
2. `npm test` — run 196-test suite (contact service, schema validation, product data, SEO utilities)
3. `npm run typecheck` — TypeScript strict check + React Router typegen
4. `npm run build` — production build verification

The workflow fails if any step exits with a non-zero code.

---

## Deployment

The project is configured for Vercel deployment via `vercel.json` (Node 22.x, SSR). See deployment steps:

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects `vercel.json` and deploys

Custom domain can be configured later under Project → Settings → Domains in the Vercel dashboard.

---

## Outstanding Client Actions

Before commercial launch, the client must complete:

1. **Configure form endpoint** — provide `VITE_CONTACT_FORM_ENDPOINT` on production hosting
2. **Provision email mailbox** — activate `info@ziltonlifecare.com`
3. **Domain & DNS** — point DNS to production host and activate SSL
4. **Brand name confirmation** — sign off on 3 product name variants (see `docs/PRODUCT_RECONCILIATION_REPORT.md`)
5. **Product packshots** — supply official photography to replace SVG placeholders
6. **Establishment date** — supply MCA Certificate of Incorporation to confirm date
7. **Legal review** — sign off on Privacy Policy, Disclaimer, Terms drafts

Full details: `CLIENT_VERIFICATION.md` and `docs/FINAL_REPOSITORY_AUDIT.md`.

---

## Company

**ZILTON LIFE CARE PRIVATE LIMITED**  
Laxmi Housing & Finance, 67 B, Gopal Mansion, Gurunanak Road, Bandra West, Mumbai 400050  
Phone: +91 9819667211  
Email: info@ziltonlifecare.com *(mailbox provisioning pending)*
