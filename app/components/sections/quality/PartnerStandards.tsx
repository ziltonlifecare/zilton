import React from "react";
import { Building2, FileCheck2, HelpCircle } from "lucide-react";

export const PartnerStandards: React.FC = () => {
  return (
    <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#F2F7F4] border border-[#E4EBE6]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E4EBE6]">
        <div>
          <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#07845E] mb-2">
            Governance &amp; Transparency
          </span>
          <h3
            className="text-xl sm:text-2xl font-bold text-[#123D32]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Manufacturing Partnerships &amp; Regulatory Statement
          </h3>
        </div>
        <div className="shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#DFF1E9] text-[#123D32] border border-[#07845E]/20">
            <FileCheck2 className="w-4 h-4 text-[#07845E]" />
            Verified Compliance Standard
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#53635C] leading-relaxed">
        <div>
          <h4 className="font-semibold text-[#123D32] mb-2 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#07845E]" />
            Corporate Operating Model
          </h4>
          <p>
            <strong>ZILTON LIFE CARE PRIVATE LIMITED</strong> focuses on Critical Care, Parenteral and Clinical Nutrition formulations. We collaborate with licensed, state-of-the-art third-party contract manufacturers equipped with audited cGMP, WHO, US FDA approved partner manufacturing, validated formulation technology, cleanroom standards, and automated packaging systems.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#123D32] mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#07845E]" />
            Verification &amp; Regulatory Substantiation
          </h4>
          <p>
            In accordance with Indian pharmaceutical regulations and corporate ethics, site-specific licences, facility accreditations, and batch analytical records are maintained in our technical archives and made available to institutional procurement partners upon request.
          </p>
        </div>
      </div>
    </div>
  );
};
