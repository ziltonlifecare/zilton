import React from "react";
import { Thermometer, Snowflake, Sun, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export function ColdChainVisual() {
  return (
    <section className="mt-16 sm:mt-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#07845E] uppercase bg-[#DFF1E9]/60 px-3 py-1 rounded-full border border-[#07845E]/20 mb-3">
          Thermal Integrity & Storage
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#123D32] tracking-tight">
          Formulation-Specific Storage Parameters
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#53635C] leading-relaxed">
          Storage and distribution conditions are strictly governed by approved technical specifications, ensuring formulation integrity from partner manufacturing through institutional handover.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Controlled Cold-Chain Card (2°C – 8°C) */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-[#E4EBE6] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-0 opacity-60 group-hover:scale-105 transition-transform duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                <Snowflake className="w-6 h-6 animate-pulse" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-sky-100/80 text-sky-800">
                <Thermometer className="w-3.5 h-3.5" />
                2°C to 8°C
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#123D32] mb-2">
              Temperature-Sensitive Therapeutics
            </h3>
            <p className="text-sm text-[#53635C] mb-6 leading-relaxed">
              Applied selectively to designated parenteral solutions, biologicals, and sensitive liquid formulations where continuous refrigerated transit is clinically mandated.
            </p>

            <div className="space-y-3 pt-4 border-t border-[#E4EBE6]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#07845E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#53635C]">
                  Insulated thermal packaging with validated data logger indicators during partner logistics.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#07845E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#53635C]">
                  Dedicated cold-storage staging at regional distribution points prior to hospital delivery.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#07845E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#53635C]">
                  Direct handover verification with institutional pharmacy receiving staff.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-sky-100/60 flex items-center gap-2 text-xs text-sky-900 font-medium bg-sky-50/50 -mx-6 -mb-6 p-4 rounded-b-3xl">
            <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Applies exclusively to formulations marked for cold-chain compliance.</span>
          </div>
        </div>

        {/* Controlled Ambient / CRT Card (<25°C) */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-[#E4EBE6] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFF1E9]/40 rounded-bl-full -z-0 opacity-60 group-hover:scale-105 transition-transform duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F2F7F4] border border-[#E4EBE6] flex items-center justify-center text-[#07845E]">
                <Sun className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#DFF1E9] text-[#123D32]">
                <Thermometer className="w-3.5 h-3.5" />
                Controlled Ambient (&lt; 25°C)
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#123D32] mb-2">
              Controlled Room Temperature (CRT)
            </h3>
            <p className="text-sm text-[#53635C] mb-6 leading-relaxed">
              Standard for shelf-stable oral nutrition sachets, lyophilized powders, and solid oral dosage forms engineered for thermal resilience.
            </p>

            <div className="space-y-3 pt-4 border-t border-[#E4EBE6]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#07845E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#53635C]">
                  Climate-monitored dry storage protected from direct ultraviolet exposure and humidity.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#07845E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#53635C]">
                  Multi-layer moisture-barrier foil packaging preserving chemical stability.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#07845E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#53635C]">
                  Routine warehouse temperature logging ensuring excursions do not exceed stability parameters.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E4EBE6] flex items-center gap-2 text-xs text-[#123D32] font-medium bg-[#F2F7F4] -mx-6 -mb-6 p-4 rounded-b-3xl">
            <AlertCircle className="w-4 h-4 text-[#07845E] shrink-0" />
            <span>Formulation-specific storage parameters following approved manufacturer specifications.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

