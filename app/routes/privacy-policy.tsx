import { LegalPageLayout } from "~/components/sections/legal/LegalPageLayout";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "Privacy Policy",
    description:
      "Privacy Policy for ZILTON LIFE CARE PRIVATE LIMITED detailing our data handling practices for business enquiries.",
    canonicalPath: "/privacy-policy",
  });
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How ZILTON LIFE CARE handles information submitted through our corporate platform."
      lastUpdated="Draft Baseline (November 2026)"
    >
      <section className="space-y-6 text-sm text-[#46534C] leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Overview</h2>
          <p>
            <strong>ZILTON LIFE CARE PRIVATE LIMITED</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting the limited commercial contact information you share with us through this website. This Privacy Policy describes how we collect, store, and utilize that data.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Information We Collect</h2>
          <p>
            We collect information voluntarily provided by visitors when submitting business enquiries via our contact form, including:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Full name and professional title</li>
            <li>Organization or hospital affiliation</li>
            <li>Business email address</li>
            <li>Telephone number</li>
            <li>Content of your commercial message or distributor enquiry</li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
          <h3 className="text-sm font-bold text-emerald-900 mb-1">
            Important Health Data Restriction
          </h3>
          <p className="text-xs text-emerald-800">
            ZILTON LIFE CARE strictly does not solicit, require, or process patient medical records, clinical case notes, prescriptions, or sensitive health data. Please do not submit confidential medical information through this website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. How Information Is Used</h2>
          <p>The information collected is used exclusively to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Evaluate and respond to your commercial or distributor enquiry</li>
            <li>Facilitate verified B2B and institutional supply communication</li>
            <li>Maintain internal business correspondence records</li>
          </ul>
          <p className="mt-2">
            We do not sell, rent, or trade your personal or commercial contact information to third-party marketing brokers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Data Security</h2>
          <p>
            We implement administrative and technical measures to protect submitted contact records from unauthorized access, accidental alteration, or disclosure. However, no electronic transmission over the Internet can be guaranteed completely invulnerable.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Updates and Contact</h2>
          <p>
            For questions regarding this policy or to request rectification of submitted business details, please reach out via our official telephone desk at <strong>+91 9819667211</strong> or write to our registered office:
          </p>
          <address className="not-italic mt-2 p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700">
            <strong>ZILTON LIFE CARE PRIVATE LIMITED</strong><br />
            LAXMI HOUSING &amp; FINANCE<br />
            67 B, GOPAL MANSION, GURUNANAK ROAD, BANDRA WEST, MUMBAI 400050
          </address>
        </div>
      </section>
    </LegalPageLayout>
  );
}
