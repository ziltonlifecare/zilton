import { LegalPageLayout } from "~/components/sections/legal/LegalPageLayout";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "Terms of Use",
    description:
      "Terms and Conditions governing the use of the corporate website of ZILTON LIFE CARE PRIVATE LIMITED.",
    canonicalPath: "/terms",
  });
}

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Use"
      subtitle="Terms governing your access to and interaction with this corporate platform."
      lastUpdated="Draft Baseline (November 2026)"
    >
      <section className="space-y-6 text-sm text-[#46534C] leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Intellectual Property Rights</h2>
          <p>
            All trademarks, logos, brand names, visual styling, text copy, and technical documentation displayed on this website are the intellectual property of <strong>ZILTON LIFE CARE PRIVATE LIMITED</strong> or licensed partners, protected by applicable copyright and trademark law. Unauthorized copying or redistribution is strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Acceptable Use</h2>
          <p>When interacting with this website, you agree not to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Submit inaccurate, misleading, or fraudulent enquiry data</li>
            <li>Transmit malicious code, viruses, or disruptive scripts</li>
            <li>Attempt unauthorized access to our hosting infrastructure or services</li>
            <li>Misrepresent your association or institutional authority when making enquiries</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Limitation of Liability</h2>
          <p>
            In no event shall ZILTON LIFE CARE PRIVATE LIMITED, its directors, or associates be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the information published on this website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India. Any legal disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in <strong>Mumbai, Maharashtra, India</strong>.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
