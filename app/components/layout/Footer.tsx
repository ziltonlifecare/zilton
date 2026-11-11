import React from "react";
import { Link } from "react-router";
import { ArrowUp, Phone, Mail, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { NAV_ITEMS, FOOTER_LEGAL_LINKS } from "~/data/navigation";
import { COMPANY } from "~/data/company";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A192F] text-slate-100 pt-16 sm:pt-24 pb-12 overflow-hidden border-t border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline & Back-To-Top */}
        <div className="pb-10 border-b border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] block mb-2">
              Critical Care & Clinical Nutrition · Mumbai
            </span>
            <p className="font-editorial text-2xl sm:text-3xl text-white tracking-tight leading-snug font-bold">
              {COMPANY.tagline}
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#10B981] transition-colors cursor-pointer group px-4 py-2 rounded-full bg-white/5 border border-white/10"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-[#10B981]" />
          </button>
        </div>

        {/* 4-Column Grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          {/* Col 1: Registered Entity & Logo */}
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-13 h-13 rounded-2xl bg-white p-1.5 shadow-md flex items-center justify-center shrink-0 border border-slate-200">
                <img
                  src="/images/branding/logo-512.png"
                  alt="Zilton Life Care Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-editorial text-xl font-extrabold text-white">
                  Zilton Life Care
                </span>
                <span className="text-xs text-[#10B981] font-bold tracking-wider uppercase">
                  Private Limited
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Dedicated to hospital formulations, critical IV parenterals, and specialized clinical nutrition therapy across India.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#10B981] font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-[#10B981] transition-colors flex items-center gap-2 py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Communications */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#10B981] font-bold mb-4">
              Registered Office
            </h4>
            <div className="space-y-3.5 text-xs text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-slate-300">
                  {COMPANY.address.line1},<br />
                  {COMPANY.address.line2},<br />
                  {COMPANY.address.city} {COMPANY.address.pincode}
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#10B981] transition-colors font-bold text-white"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Institutional Mandate */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#10B981] font-bold mb-4">
              Institutional Notice
            </h4>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed font-normal">
              This site is designed strictly for licensed medical professionals, hospital procurement bodies, and authorized stockists. Formulations are scheduled prescription drugs.
            </div>
          </div>
        </div>

        {/* Wordmark Banner */}
        <div className="pt-8 select-none overflow-hidden text-center">
          <span className="font-editorial text-[12vw] sm:text-[10vw] font-extrabold tracking-tighter text-white/5 block leading-none">
            ZILTON
          </span>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
