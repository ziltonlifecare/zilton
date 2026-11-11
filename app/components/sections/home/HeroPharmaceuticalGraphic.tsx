import React from "react";
import { ShieldCheck, Snowflake, FlaskConical, Sparkles, CheckCircle2 } from "lucide-react";

export const HeroPharmaceuticalGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#07845E]/15 via-[#DFF1E9]/30 to-transparent blur-2xl opacity-70"
        aria-hidden="true"
      />

      {/* Main Structural Card */}
      <div className="relative rounded-3xl border border-[#E4EBE6] bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-[0_20px_50px_rgba(18,61,50,0.08)] overflow-hidden">
        {/* Subtle geometric scientific SVG background grid */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pharma-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#123D32" strokeWidth="1" />
                <circle cx="16" cy="16" r="1.5" fill="#07845E" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pharma-grid)" />
          </svg>
        </div>

        {/* Concentric scientific orbital rings (pure SVG) */}
        <div className="relative flex items-center justify-center my-6 py-6">
          <svg
            className="w-64 h-64 sm:w-72 sm:h-72 animate-[spin_60s_linear_infinite] motion-reduce:animate-none opacity-40"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Outer dotted orbital */}
            <circle
              cx="150"
              cy="150"
              r="140"
              stroke="#07845E"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
            {/* Middle continuous orbital */}
            <circle
              cx="150"
              cy="150"
              r="110"
              stroke="#123D32"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            {/* Molecular node points */}
            <circle cx="150" cy="10" r="4" fill="#07845E" />
            <circle cx="290" cy="150" r="4" fill="#123D32" />
            <circle cx="150" cy="290" r="4" fill="#07845E" />
            <circle cx="10" cy="150" r="4" fill="#123D32" />
            {/* Inner ellipse orbits */}
            <ellipse
              cx="150"
              cy="150"
              rx="120"
              ry="55"
              stroke="#07845E"
              strokeWidth="1"
              strokeOpacity="0.4"
              transform="rotate(30 150 150)"
            />
            <ellipse
              cx="150"
              cy="150"
              rx="120"
              ry="55"
              stroke="#123D32"
              strokeWidth="1"
              strokeOpacity="0.4"
              transform="rotate(-30 150 150)"
            />
          </svg>

          {/* Central Branded Insignia Emblem */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-3xl bg-white p-3 border border-[#E4EBE6] shadow-xl flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#07845E]/20 to-[#DFF1E9] blur-xs -z-10" />
              <img
                src="/images/branding/logo-512.png"
                alt="Zilton Life Care Logo Mark"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Clinical Assurance Metrics Strip */}
        <div className="pt-4 border-t border-[#E4EBE6]/80 flex items-center justify-between text-xs text-[#53635C]">
          <span className="font-semibold text-[#123D32] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#07845E]" />
            Regulatory Compliance
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#DFF1E9] text-[#123D32] font-semibold text-[10px] uppercase tracking-wider">
            Schedule M &amp; cGMP
          </span>
        </div>
      </div>

      {/* Floating Micro-Badge 1: Top-Right (cGMP Verification) */}
      <div className="absolute -top-3 right-0 sm:-top-5 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E4EBE6] px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl shadow-lg flex items-center gap-2 sm:gap-2.5 animate-[bounce_5s_ease-in-out_infinite] motion-reduce:animate-none">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#DFF1E9] text-[#07845E] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[10px] sm:text-[11px] font-bold text-[#123D32] leading-tight">
            cGMP Audited
          </span>
          <span className="block text-[9px] text-[#07845E] font-medium">
            Batch CoA Documented
          </span>
        </div>
      </div>

      {/* Floating Micro-Badge 2: Bottom-Left (Cold-Chain Logistics) */}
      <div className="absolute -bottom-3 left-0 sm:-bottom-5 sm:-left-4 bg-white/95 backdrop-blur-md border border-[#E4EBE6] px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl shadow-lg flex items-center gap-2 sm:gap-2.5">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#DFF1E9] text-[#07845E] flex items-center justify-center shrink-0">
          <Snowflake className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[10px] sm:text-[11px] font-bold text-[#123D32] leading-tight">
            GDP Cold-Chain
          </span>
          <span className="block text-[9px] text-[#53635C] font-medium">
            Monitored 2°C – 8°C Transit
          </span>
        </div>
      </div>

      {/* Floating Micro-Badge 3: Middle-Left (Therapeutic Portfolios) */}
      <div className="hidden sm:flex absolute top-1/2 -left-6 -translate-y-1/2 bg-white/95 backdrop-blur-md border border-[#E4EBE6] px-3 py-2 rounded-xl shadow-md items-center gap-2">
        <FlaskConical className="w-3.5 h-3.5 text-[#07845E]" />
        <span className="text-[10px] font-bold text-[#123D32]">
          Sterile Injectables &amp; IV
        </span>
      </div>
    </div>
  );
};

