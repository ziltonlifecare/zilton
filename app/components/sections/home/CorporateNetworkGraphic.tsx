import React from "react";
import { Building2, ShieldCheck, Truck, Hospital, CheckCircle2, ArrowRight } from "lucide-react";

export const CorporateNetworkGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      <div className="rounded-3xl border border-[#E4EBE6] bg-white p-6 sm:p-8 shadow-[0_12px_40px_rgba(18,61,50,0.06)]">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#E4EBE6]">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-[#DFF1E9] text-[#07845E] flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#123D32] uppercase tracking-wider">
                Distribution Architecture
              </h4>
              <p className="text-[10px] text-[#53635C]">
                Audited cGMP to Hospital ICU Delivery
              </p>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#DFF1E9] text-[#123D32] text-[10px] font-bold">
            GDP Compliant
          </span>
        </div>

        {/* 3-Step Flow Diagram */}
        <div className="py-6 space-y-4">
          {/* Step 1: Partner cGMP Manufacturing */}
          <div className="p-4 rounded-2xl bg-[#FAFCFA] border border-[#E4EBE6] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center justify-center text-[#07845E] shrink-0 font-bold text-xs">
                01
              </div>
              <div>
                <span className="text-xs font-bold text-[#123D32] block">
                  Audited cGMP Manufacturing
                </span>
                <span className="text-[11px] text-[#53635C] block">
                  Sterile cleanroom lines &amp; batch CoA testing
                </span>
              </div>
            </div>
            <ShieldCheck className="w-5 h-5 text-[#07845E] shrink-0" />
          </div>

          {/* Connection Indicator */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-4 bg-[#07845E]/30" />
          </div>

          {/* Step 2: Mumbai Corporate Regulatory & Cold Chain */}
          <div className="p-4 rounded-2xl bg-[#DFF1E9]/40 border border-[#07845E]/20 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center justify-center text-[#123D32] shrink-0 font-bold text-xs">
                02
              </div>
              <div>
                <span className="text-xs font-bold text-[#123D32] block">
                  Zilton Life Care (Mumbai HQ)
                </span>
                <span className="text-[11px] text-[#53635C] block">
                  Batch evaluation, temperature controls &amp; compliance
                </span>
              </div>
            </div>
            <Truck className="w-5 h-5 text-[#07845E] shrink-0" />
          </div>

          {/* Connection Indicator */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-4 bg-[#07845E]/30" />
          </div>

          {/* Step 3: Healthcare Institutions & Stockists */}
          <div className="p-4 rounded-2xl bg-[#FAFCFA] border border-[#E4EBE6] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center justify-center text-[#07845E] shrink-0 font-bold text-xs">
                03
              </div>
              <div>
                <span className="text-xs font-bold text-[#123D32] block">
                  Hospitals, ICUs &amp; Stockists
                </span>
                <span className="text-[11px] text-[#53635C] block">
                  Direct supply to critical care units across India
                </span>
              </div>
            </div>
            <Hospital className="w-5 h-5 text-[#07845E] shrink-0" />
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="pt-4 border-t border-[#E4EBE6] flex items-center justify-between text-xs text-[#53635C]">
          <span className="flex items-center gap-1.5 font-medium text-[#123D32]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#07845E]" />
            Full Batch Traceability
          </span>
          <span className="text-[11px] text-[#07845E] font-semibold">
            Institutional Standard
          </span>
        </div>
      </div>

      {/* Floating HQ Badge */}
      <div className="absolute -bottom-3 right-0 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E4EBE6] px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl shadow-md flex items-center gap-2.5 sm:gap-3">
        <div className="h-8 w-8 rounded-lg bg-white p-0.5 border border-[#E4EBE6] shadow-2xs flex items-center justify-center shrink-0">
          <img
            src="/images/branding/logo-512.png"
            alt="Zilton Mark"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#123D32]">Bandra West, Mumbai</span>
          <span className="block text-[9px] text-[#53635C]">Corporate Headquarters</span>
        </div>
      </div>
    </div>
  );
};

