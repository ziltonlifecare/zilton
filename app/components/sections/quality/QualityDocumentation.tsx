import React from "react";
import { FileCheck, FileSpreadsheet, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export const QualityDocumentation: React.FC = () => {
  const docCategories = [
    {
      title: "Certificate of Analysis (CoA)",
      code: "DOC-COA",
      description:
        "Comprehensive analytical reports documenting active ingredient assay, microbial limits, and physicochemical purity for every released batch.",
      details: ["Assay quantification", "Microbial limit testing", "Physicochemical parameters"],
      icon: FileCheck,
    },
    {
      title: "Batch Manufacturing Records",
      code: "DOC-BMR",
      description:
        "Documentation maintained by audited manufacturing partners covering formulation lot records, sterilization cycles, and packaging integrity.",
      details: ["Sterilization verification", "Lot compounding archives", "Cleanroom air monitoring"],
      icon: FileSpreadsheet,
    },
    {
      title: "Partner Site Accreditations",
      code: "DOC-GMP",
      description:
        "Statutory manufacturing site licenses, Schedule M compliance credentials, and state drug regulatory authority renewal files.",
      details: ["Drug manufacturing licenses", "Schedule M / cGMP credentials", "Facility compliance audits"],
      icon: ShieldAlert,
    },
    {
      title: "Product Regulatory Dossiers",
      code: "DOC-REG",
      description:
        "Formulation specifications, package insert literature, stability data summaries, and approved institutional labelling guidelines.",
      details: ["Approved package inserts", "Real-time stability profiles", "Institutional labelling data"],
      icon: FileText,
    },
  ];

  return (
    <div className="py-16 sm:py-20 border-t border-[#E4EBE6]">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#123D32] bg-[#DFF1E9] px-3.5 py-1 rounded-full">
          Documented Governance
        </span>
        <h2
          className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123D32]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Quality Documentation Architecture
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#53635C]">
          Systematic regulatory records archived to ensure complete compliance transparency for hospital review boards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 stagger-container">
        {docCategories.map((doc) => {
          const Icon = doc.icon;
          return (
            <div
              key={doc.code}
              className="luxury-card hover-lift p-7 sm:p-8 rounded-3xl bg-white border border-[#E4EBE6] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#DFF1E9] text-[#07845E] flex items-center justify-center shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#53635C] font-mono bg-[#F2F7F4] border border-[#E4EBE6] px-2.5 py-1 rounded-full">
                    {doc.code}
                  </span>
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold text-[#123D32] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {doc.title}
                </h3>

                <p className="text-sm text-[#53635C] leading-relaxed mb-6">
                  {doc.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#E4EBE6]">
                  {doc.details.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#123D32]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#07845E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E4EBE6] text-[11px] text-[#53635C]">
                Available to institutional partners upon verified formal request.
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

