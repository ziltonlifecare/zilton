import React from "react";
import { CheckCircle2, FileCheck2, Thermometer, Hospital, Building2, Truck } from "lucide-react";

export const QualityLifecycleFlow: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Partner Qualification",
      subtitle: "Manufacturing Partner Evaluation",
      actor: "Contract Manufacturing Plants",
      role: "Audited by Zilton Life Care",
      description:
        "Rigorous verification of licensed third-party cleanrooms, air filtration systems, and cGMP compliance before any formulation agreement is initiated.",
      icon: CheckCircle2,
    },
    {
      step: "02",
      title: "Documentation Review",
      subtitle: "Analytical Batch Release",
      actor: "Testing Laboratories",
      role: "Reviewed by Zilton Quality Desk",
      description:
        "Every production lot is cross-verified against verified testing protocols covering chemical assay, microbial limits, and sterility documentation.",
      icon: FileCheck2,
    },
    {
      step: "03",
      title: "Distribution Controls",
      subtitle: "Product-Specific Handling",
      actor: "Specialized Logistics Partners",
      role: "Monitored under GDP Guidelines",
      description:
        "Preserving formulation potency through dedicated storage and transit conditions aligned strictly with each drug's approved technical specifications.",
      icon: Thermometer,
    },
    {
      step: "04",
      title: "Institutional Supply",
      subtitle: "Traceable Hospital Delivery",
      actor: "Healthcare Institutions & Stockists",
      role: "Governed by Zilton Distribution",
      description:
        "Authorized dispatch to registered medical practitioners, hospital intensive care units, and licensed stockists with batch lot identification.",
      icon: Hospital,
    },
  ];

  return (
    <div className="py-16 sm:py-20 border-t border-[#E4EBE6]">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#123D32] bg-[#DFF1E9] px-3.5 py-1 rounded-full">
          Quality Control Lifecycle
        </span>
        <h2
          className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123D32]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The Four-Stage Quality Assurance Cycle
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#53635C]">
          A structured framework distinguishing manufacturing partner execution from Zilton corporate oversight at every milestone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="luxury-card hover-lift relative p-6 sm:p-7 rounded-3xl bg-white border border-[#E4EBE6] flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-[#DFF1E9] font-mono">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-2xl bg-[#DFF1E9] text-[#07845E] shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3
                  className="text-lg font-bold text-[#123D32] leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-[#07845E] block mt-0.5">
                  {item.subtitle}
                </span>

                {/* Actor & Oversight Pill */}
                <div className="mt-4 p-2.5 rounded-xl bg-[#F2F7F4] border border-[#E4EBE6] text-[11px] space-y-0.5">
                  <span className="text-[#53635C] block">
                    Execution: <strong className="text-[#123D32]">{item.actor}</strong>
                  </span>
                  <span className="text-[#07845E] font-medium block">
                    Oversight: {item.role}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#53635C] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#E4EBE6] items-center justify-center text-[#07845E] text-[10px] font-bold shadow-xs">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
