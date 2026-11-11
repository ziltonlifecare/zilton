import React from "react";
import { ShieldCheck, Award, FileCheck2, FlaskConical, Sparkles } from "lucide-react";

export const QualityHeroGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#07845E]/15 via-[#DFF1E9]/30 to-transparent blur-2xl opacity-70"
        aria-hidden="true"
      />

      {/* Main Structural Card */}
      <div className="relative rounded-3xl border border-[#E4EBE6] bg-white p-6 sm:p-8 shadow-[0_18px_45px_rgba(18,61,50,0.07)] overflow-hidden">
        {/* Subtle geometric scientific pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="quality-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#123D32" strokeWidth="1" />
                <circle cx="14" cy="14" r="1.5" fill="#07845E" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#quality-grid)" />
          </svg>
        </div>

        {/* Concentric Verification Rings */}
        <div className="relative flex items-center justify-center my-6 py-6">
          <svg
            className="w-60 h-60 sm:w-68 sm:h-68 animate-[spin_50s_linear_infinite] motion-reduce:animate-none opacity-35"
            viewBox="0 0 260 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="130" cy="130" r="120" stroke="#07845E" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="130" cy="130" r="95" stroke="#123D32" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="130" cy="10" r="4" fill="#07845E" />
            <circle cx="250" cy="130" r="4" fill="#123D32" />
            <circle cx="130" cy="250" r="4" fill="#07845E" />
            <circle cx="10" cy="130" r="4" fill="#123D32" />
          </svg>

          {/* Central Logo Emblem Badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-28 w-28 rounded-2xl bg-white p-2.5 border border-[#E4EBE6] shadow-xl flex items-center justify-center group hover:scale-105 transition-transform">
              <img
                src="/images/branding/logo-512.png"
                alt="Zilton Life Care Mark"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Verification Status */}
        <div className="pt-4 border-t border-[#E4EBE6] flex items-center justify-between text-xs text-[#53635C]">
          <span className="font-semibold text-[#123D32] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#07845E]" />
            Quality Oversight Standard
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#DFF1E9] text-[#123D32] font-semibold text-[10px] uppercase tracking-wider">
            cGMP &amp; GDP Aligned
          </span>
        </div>
      </div>

      {/* Floating Micro-Badge Top Right */}
      <div className="absolute -top-3 right-0 sm:-top-5 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E4EBE6] px-3.5 py-2 rounded-2xl shadow-md flex items-center gap-2">
        <div className="w-7 h-7 rounded-xl bg-[#DFF1E9] text-[#07845E] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#123D32]">Partner Qualification</span>
          <span className="block text-[9px] text-[#07845E]">Audited Facility Rigor</span>
        </div>
      </div>

      {/* Floating Micro-Badge Bottom Left */}
      <div className="absolute -bottom-3 left-0 sm:-bottom-5 sm:-left-4 bg-white/95 backdrop-blur-md border border-[#E4EBE6] px-3.5 py-2 rounded-2xl shadow-md flex items-center gap-2">
        <div className="w-7 h-7 rounded-xl bg-[#DFF1E9] text-[#07845E] flex items-center justify-center shrink-0">
          <FileCheck2 className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#123D32]">Batch Documentation</span>
          <span className="block text-[9px] text-[#53635C]">CoA Verified per Lot</span>
        </div>
      </div>
    </div>
  );
};

