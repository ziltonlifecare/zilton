import React from "react";
import { ShieldCheck, Microchip, Truck } from "lucide-react";

export const QualityPillars: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      number: "01",
      title: "Audited Partner Manufacturing",
      tagline: "Rigorous Partner Qualification",
      description:
        "We selectively engage contract manufacturing plants that operate in compliance with certified Good Manufacturing Practices (cGMP). Every manufacturing source is evaluated on facility hygiene, automated batch control, and regulatory compliance.",
    },
    {
      icon: Microchip,
      number: "02",
      title: "Stringent Analytical Testing",
      tagline: "Batch Purity & Certificate of Analysis",
      description:
        "Every production lot is supported by verified testing protocols covering chemical assay, microbial limits, sterility for parenteral lines, and real-time stability verification before market release.",
    },
    {
      icon: Truck,
      number: "03",
      title: "Cold Chain & Supply Chain Integrity",
      tagline: "Good Distribution Practices (GDP)",
      description:
        "From formulation dispatch to regional healthcare stockists, temperature-sensitive injectables and nutritional liquids are monitored to prevent thermal degradation and preserve therapeutic potency.",
    },
  ];

  return (
    <div className="py-14 border-t border-[#E4EBE6]">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#123D32] bg-[#DFF1E9] px-3.5 py-1 rounded-full">
          Three Core Pillars
        </span>
        <h2
          className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#123D32]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The Pillars of Our Quality Framework
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#53635C]">
          Systematic checks deployed at every milestone from facility inspection to healthcare facility receipt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              className="luxury-card relative p-8 rounded-3xl bg-white border border-[#E4EBE6] hover:border-[#07845E]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#DFF1E9] text-[#07845E] flex items-center justify-center">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="text-2xl font-black text-[#DFF1E9]">
                    {pillar.number}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#07845E] uppercase tracking-wide">
                  {pillar.tagline}
                </span>
                <h3
                  className="mt-1 text-lg font-bold text-[#123D32]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-[#53635C] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E4EBE6] text-xs font-medium text-[#53635C]">
                Continuous compliance oversight
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
