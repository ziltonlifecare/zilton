import { LegalPageLayout } from "~/components/sections/legal/LegalPageLayout";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "Legal & Medical Disclaimer",
    description:
      "Important pharmaceutical and medical disclaimer for ZILTON LIFE CARE PRIVATE LIMITED website visitors.",
    canonicalPath: "/disclaimer",
  });
}

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Legal & Medical Disclaimer"
      subtitle="Critical boundaries regarding healthcare information, product references, and corporate operations."
      lastUpdated="Draft Baseline (November 2026)"
    >
      <section className="space-y-6 text-sm text-[#46534C] leading-relaxed">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-1">
            No Medical Advice
          </h2>
          <p className="text-xs leading-relaxed">
            The content provided on this website is for corporate, institutional, and informational purposes only. It does not constitute medical advice, diagnosis, treatment recommendation, or patient instruction.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Informational Nature of Content</h2>
          <p>
            All information regarding therapeutic categories (Critical Care Injection, Nutrition IV, and Nutrition Sachet) is provided solely to introduce our corporate focus to healthcare professionals and trade partners. Patients and consumers must always consult a licensed doctor or qualified medical practitioner regarding any health condition or therapeutic regimen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Not an Online Pharmacy</h2>
          <p>
            <strong>ZILTON LIFE CARE PRIVATE LIMITED</strong> does not operate an online pharmacy, e-commerce medicine portal, or direct retail dispensing channel. Formulations are supplied strictly through verified institutional distributors, hospitals, and licensed pharmacies in accordance with applicable drug regulations.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Product Availability & Formulations</h2>
          <p>
            Mention of product categories or prospective formulations does not guarantee commercial availability in every territory or jurisdiction. Specifications and packaging are subject to regulatory updates and authorized manufacturing batch releases.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Third-Party Links</h2>
          <p>
            This website may reference external links or industry resources for reference only. ZILTON LIFE CARE has no control over and assumes no responsibility for external content, privacy practices, or statements made on third-party domains.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
