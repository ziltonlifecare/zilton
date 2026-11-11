import React from "react";
import { ShieldCheck, Award, Building2, MapPin, CheckCircle2, Sparkles, FileText } from "lucide-react";

export const CorporateGovernanceGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#07845E]/15 via-[#DFF1E9]/30 to-transparent blur-2xl opacity-60"
        aria-hidden="true"
      />

      {/* Main Structural Card */}
      <div className="relative rounded-3xl border border-[#E4EBE6] bg-white p-6 sm:p-8 shadow-[0_16px_45px_rgba(18,61,50,0.07)]">
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-5 border-b border-[#E4EBE6]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#DFF1E9] text-[#07845E] flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#123D32] uppercase tracking-wider">
                Corporate Governance Matrix
              </h4>
              <p className="text-[10px] text-[#53635C]">
                Zilton Life Care Private Limited
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#DFF1E9] text-[#123D32] text-[10px] font-bold uppercase tracking-wider">
            Active &amp; Verified
          </span>
        </div>

        {/* Central Official Emblem & Mission Display */}
        <div className="py-6 flex flex-col items-center text-center">
          <div className="relative h-24 w-24 rounded-2xl bg-white p-2 border border-[#E4EBE6] shadow-md flex items-center justify-center mb-4 group hover:scale-105 transition-transform">
            <img
              src="/images/branding/logo-512.png"
              alt="Zilton Life Care Mark"
              className="w-full h-full object-contain"
            />
          </div>

          <h3
            className="text-lg font-bold text-[#123D32]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Zilton Life Care Private Limited
          </h3>
          <p className="text-xs text-[#07845E] font-semibold italic mt-0.5">
            &ldquo;Caring for Life, Committed to Health&rdquo;
          </p>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-[#53635C] mt-2 bg-[#F2F7F4] px-3 py-1 rounded-full border border-[#E4EBE6]">
            <MapPin className="w-3 h-3 text-[#07845E]" />
            Bandra West, Mumbai – 400050, India
          </span>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E4EBE6] text-center">
          <div className="p-3 rounded-xl bg-[#FAFCFA] border border-[#E4EBE6]">
            <ShieldCheck className="w-4 h-4 text-[#07845E] mx-auto mb-1.5" />
            <span className="text-[10px] font-bold text-[#123D32] block">Schedule M</span>
            <span className="text-[9px] text-[#53635C] block">cGMP Mandate</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FAFCFA] border border-[#E4EBE6]">
            <FileText className="w-4 h-4 text-[#07845E] mx-auto mb-1.5" />
            <span className="text-[10px] font-bold text-[#123D32] block">Batch CoA</span>
            <span className="text-[9px] text-[#53635C] block">HPLC Assay</span>
          </div>
          <div className="p-3 rounded-xl bg-[#FAFCFA] border border-[#E4EBE6]">
            <Award className="w-4 h-4 text-[#07845E] mx-auto mb-1.5" />
            <span className="text-[10px] font-bold text-[#123D32] block">GDP Transit</span>
            <span className="text-[9px] text-[#53635C] block">Cold-Chain Rigor</span>
          </div>
        </div>
      </div>

      {/* Floating Micro-Badge */}
      <div className="absolute -bottom-3 right-0 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E4EBE6] px-3.5 py-2 rounded-2xl shadow-md flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#07845E]" />
        <div>
          <span className="block text-[10px] font-bold text-[#123D32]">Ethical Distribution</span>
          <span className="block text-[9px] text-[#53635C]">Licensed Supply Only</span>
        </div>
      </div>
    </div>
  );
};

