import React from "react";
import { QrCode, FileText, CheckCircle2, Truck, Building2, Shield, ArrowRight } from "lucide-react";

export function TraceabilityVisual() {
  const steps = [
    {
      num: "01",
      title: "Product Master",
      subtitle: "Specification & Label Code",
      desc: "Standardized formulation master data, regulatory labeling compliance, and unique SKU identification established prior to manufacturing authorization.",
      icon: QrCode,
      tag: "Master Data",
    },
    {
      num: "02",
      title: "Batch & Lot Code",
      subtitle: "Manufacturer Assignment",
      desc: "Qualified manufacturing partners assign distinct batch and lot numbers upon production execution, physically stamped with manufacturing and expiry dates.",
      icon: Building2,
      tag: "Partner Site",
    },
    {
      num: "03",
      title: "Release Records",
      subtitle: "CoA & BMR Validation",
      desc: "Batch Manufacturing Records (BMR) and Certificate of Analysis (CoA) verified against analytical standards before commercial dispatch approval.",
      icon: FileText,
      tag: "QA Review",
    },
    {
      num: "04",
      title: "Institutional Dispatch",
      subtitle: "Traceable Distribution",
      desc: "Invoiced consignment documentation matches batch records down to regional distributors and hospital pharmacy receiving departments.",
      icon: Truck,
      tag: "Handover",
    },
  ];

  return (
    <section className="mt-16 sm:mt-24">
      <div className="bg-[#123D32] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-[#07845E]/30 shadow-xl">
        {/* Background Decorative Rings */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border border-[#07845E]/10 pointer-events-none" />

        <div className="relative z-10">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#DFF1E9] uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/10 mb-3">
              <Shield className="w-3.5 h-3.5 text-[#07845E]" />
              Batch Governance Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              End-to-End Batch Traceability
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#DFF1E9]/80 font-light leading-relaxed">
              Every unit distributed by ZILTON LIFE CARE is underpinned by systematic batch-level documentation, ensuring transparent lineage from manufacturing partner release to institutional healthcare facility.
            </p>
          </div>

          {/* 4-Stage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#07845E] bg-[#DFF1E9] px-2.5 py-0.5 rounded-full">
                        {step.num}
                      </span>
                      <span className="text-[11px] font-medium text-white/50 bg-white/5 px-2 py-0.5 rounded">
                        {step.tag}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#DFF1E9] mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white mb-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#07845E] font-medium mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-[#DFF1E9]/75 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-6 h-6 rounded-full bg-[#07845E] text-white flex items-center justify-center shadow-md">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Clarification Disclaimer Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#DFF1E9]/75">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#07845E] shrink-0" />
              <span>
                <strong>Institutional Note:</strong> Traceability is maintained via rigorous physical batch manufacturing records, verified Certificates of Analysis, and audited distribution manifests.
              </span>
            </div>
            <span className="text-white/40 italic shrink-0">
              Regulatory Compliance Standard
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

