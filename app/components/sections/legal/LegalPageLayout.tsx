import React from "react";
import { Container } from "~/components/common/Container";
import { FileWarning, Calendar } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  subtitle,
  lastUpdated,
  children,
}) => {
  return (
    <div className="py-14 sm:py-24 bg-[#F8FAFC]">
      <Container>
        {/* Draft Notice Banner for Client & Legal Review */}
        <div className="mb-8 p-4.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-start sm:items-center gap-3.5 text-xs sm:text-sm text-[#065F46] shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
          <FileWarning className="w-5 h-5 text-[#0D9E71] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Draft Legal Baseline for Counsel Review:</strong> This document represents a preliminary corporate template prepared for Zilton Life Care Private Limited and remains subject to formal verification by company management and qualified legal counsel prior to final publication.
          </p>
        </div>

        {/* Header */}
        <div className="max-w-3xl pb-8 border-b border-slate-200/80">
          <span className="text-xs uppercase tracking-wider font-bold text-[#0D9E71] bg-emerald-50 border border-emerald-200/60 px-3.5 py-1 rounded-full inline-block">
            Corporate Governance &amp; Legal
          </span>
          <h1
            className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight font-editorial"
          >
            {title}
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Calendar className="w-4 h-4 text-[#0D9E71]" />
            <span>Effective Date / Last Revised: {lastUpdated}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="mt-10 max-w-3xl space-y-6 text-slate-600">
          {children}
        </div>
      </Container>
    </div>
  );
};
