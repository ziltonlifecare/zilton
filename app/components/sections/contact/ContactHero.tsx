import React from "react";
import { Building2, PhoneCall, ShieldCheck, Clock3 } from "lucide-react";
import { COMPANY } from "~/data/company";

export function ContactHero() {
  return (
    <div className="relative mb-12 sm:mb-16">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#07845E] uppercase bg-[#DFF1E9]/70 px-3.5 py-1.5 rounded-full border border-[#07845E]/20 mb-4 luxuryFadeIn">
          <Building2 className="w-3.5 h-3.5 text-[#07845E]" />
          Institutional Communications Desk
        </span>

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123D32] tracking-tight leading-tight luxuryFadeUp"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Connect with Our Corporate Leadership &amp; Procurement Desk
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#53635C] leading-relaxed max-w-2xl mx-auto luxuryFadeUp delay-100">
          Whether you represent an institutional hospital committee, regional distribution consortium, or healthcare regulatory authority, our executive desk is prepared to assist with technical documentation, batch allocation, and supply logistics.
        </p>

        {/* 3 Quick Corporate Status Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 luxuryFadeUp delay-200">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs text-xs font-medium text-[#123D32]">
            <ShieldCheck className="w-4 h-4 text-[#07845E]" />
            <span>Official Corporate Entity: {COMPANY.name}</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs text-xs font-medium text-[#123D32]">
            <PhoneCall className="w-4 h-4 text-[#07845E]" />
            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
              className="hover:text-[#07845E] transition-colors"
              title="Call Direct Corporate Desk"
            >
              Direct Line: <strong>{COMPANY.phone}</strong>
            </a>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs text-xs font-medium text-[#123D32]">
            <Clock3 className="w-4 h-4 text-[#07845E]" />
            <span>Mon–Sat | 09:30 AM – 06:30 PM IST</span>
          </div>
        </div>
      </div>
    </div>
  );
}

