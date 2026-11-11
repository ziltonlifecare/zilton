import React from "react";
import { Award, ShieldCheck, Microscope, HeartHandshake } from "lucide-react";
import { COMPANY } from "~/data/company";

export const QualityPhilosophy: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#123D32] text-white p-8 sm:p-12 lg:p-16 my-16 sm:my-24 shadow-xl">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pharma-lattice" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DFF1E9" strokeWidth="1" />
              <circle cx="20" cy="20" r="1.5" fill="#07845E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pharma-lattice)" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#DFF1E9] mx-auto mb-6 shadow-xs">
          <Award className="w-8 h-8 stroke-[1.5]" />
        </div>

        <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#DFF1E9] mb-3">
          Our Quality Charter
        </span>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Quality as an Uncompromised Standard
        </h2>

        <blockquote className="mt-6 text-base sm:text-lg text-[#DFF1E9]/90 italic leading-relaxed font-light border-l-2 border-[#07845E] pl-4 sm:pl-6 max-w-2xl mx-auto text-left">
          &ldquo;{COMPANY.mission} Through rigorous manufacturing partner audits, verified formulation stability, and disciplined institutional supply chains.&rdquo;
        </blockquote>

        <p className="mt-6 text-sm sm:text-base text-[#DFF1E9]/80 leading-relaxed max-w-2xl mx-auto font-light">
          We believe that enduring trust within the medical community is earned only through consistent adherence to verified analytical limits, batch transparency, and ethical distribution governance.
        </p>

        {/* 4 Feature Badges */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <ShieldCheck className="w-5 h-5 text-[#DFF1E9] mb-2" />
            <h4 className="text-xs font-bold text-white">cGMP Qualification</h4>
            <p className="text-[10px] text-[#DFF1E9]/70 mt-0.5">Audited partner cleanrooms</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <Microscope className="w-5 h-5 text-[#DFF1E9] mb-2" />
            <h4 className="text-xs font-bold text-white">Batch Analytical Review</h4>
            <p className="text-[10px] text-[#DFF1E9]/70 mt-0.5">Assay &amp; stability records</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <Award className="w-5 h-5 text-[#DFF1E9] mb-2" />
            <h4 className="text-xs font-bold text-white">GDP Sourcing Oversight</h4>
            <p className="text-[10px] text-[#DFF1E9]/70 mt-0.5">Preserved formulation integrity</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <HeartHandshake className="w-5 h-5 text-[#DFF1E9] mb-2" />
            <h4 className="text-xs font-bold text-white">Institutional Accountability</h4>
            <p className="text-[10px] text-[#DFF1E9]/70 mt-0.5">Licensed wholesale channels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

