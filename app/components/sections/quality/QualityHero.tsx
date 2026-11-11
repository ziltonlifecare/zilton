import React from "react";
import { Award, CheckCircle, ShieldCheck } from "lucide-react";
import { QualityHeroGraphic } from "./QualityHeroGraphic";

export const QualityHero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 luxury-fade-up">
      {/* Left Column: Text Story */}
      <div className="lg:col-span-7">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#123D32] bg-[#DFF1E9] border border-[#07845E]/20 px-3.5 py-1.5 rounded-full mb-5 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#07845E]" />
          <span>Quality Assurance Framework</span>
        </span>

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123D32] tracking-tight leading-[1.14]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Engineered for Safety, <br className="hidden sm:inline" />
          Guided by Clinical Standards.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#53635C] leading-relaxed font-normal">
          At <strong>ZILTON LIFE CARE PRIVATE LIMITED</strong>, quality is the foundational prerequisite of every healthcare formulation we represent. We operate with a disciplined commitment to patient safety, molecular stability, and regulatory transparency.
        </p>

        <p className="mt-4 text-sm sm:text-base text-[#53635C] leading-relaxed font-normal">
          We selectively collaborate with licensed third-party manufacturing plants adhering to certified cGMP, WHO, and US FDA standards. Every batch distributed through our network is supported by documented quality controls and verified Certificate of Analysis protocols.
        </p>

        {/* 3 Metric Pills */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E4EBE6] pt-6">
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-5 h-5 text-[#07845E] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#123D32]">
              cGMP Sourced Lines
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-5 h-5 text-[#07845E] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#123D32]">
              Batch CoA Review
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-5 h-5 text-[#07845E] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#123D32]">
              Formulation-Specific Storage
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Original Quality Graphic */}
      <div className="lg:col-span-5 flex justify-center">
        <QualityHeroGraphic />
      </div>
    </div>
  );
};
