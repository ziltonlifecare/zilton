'use client';

import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, MessageSquare, Syringe, FlaskConical, Droplets, Package, Thermometer, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '~/utils/whatsapp';

export interface InstitutionalCapability {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

export interface Cta3Props {
  badgeText?: string;
  headline?: React.ReactNode;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  whatsappMessage?: string;
  capabilities?: InstitutionalCapability[];
  className?: string;
}

export const DEFAULT_CAPABILITIES: InstitutionalCapability[] = [
  { id: 'iv-antibiotics', name: 'IV Antibiotics Range', category: 'Carbapenems & Polypeptides (Meropenem, Polymyxin B)', icon: <Syringe className="w-5 h-5 text-[#10B981]" /> },
  { id: 'antifungals', name: 'Antifungal Prophylaxis', category: 'Echinocandins (Micafungin 50mg Injectable)', icon: <FlaskConical className="w-5 h-5 text-[#10B981]" /> },
  { id: 'haematinics', name: 'Colloidal Iron Therapy', category: 'High-Dose Ferric Carboxymaltose 500mg Infusion', icon: <FlaskConical className="w-5 h-5 text-[#10B981]" /> },
  { id: 'nutrition-iv', name: 'Clinical Nutrition IV', category: 'Zinc Chloride & Essential Trace Element Replenishment', icon: <Droplets className="w-5 h-5 text-[#10B981]" /> },
  { id: 'nutrition-sachets', name: 'Metabolic Nutrition Sachets', category: 'HMB ZIL 3gm & L-Glutamine Amino Acid Formulations', icon: <Package className="w-5 h-5 text-[#10B981]" /> },
  { id: 'cold-chain', name: 'Cold-Chain Traceability', category: '2°C–8°C Temperature-Governed Institutional Logistics', icon: <Thermometer className="w-5 h-5 text-[#10B981]" /> },
];

function CapabilityCard({ name, category, icon }: InstitutionalCapability) {
  return (
    <div className="group relative flex items-start gap-4 p-4.5 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-[0_8px_24px_rgba(13,158,113,0.18)] hover:-translate-y-0.5">
      <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-400/25 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-white transition-all flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-editorial text-sm sm:text-base font-bold text-white group-hover:text-[#A7F3D0] transition-colors leading-snug">
          {name}
        </h4>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
          {category}
        </p>
      </div>
    </div>
  );
}

export const Cta3: React.FC<Cta3Props> = ({
  badgeText = 'Institutional Supply & Hospital Procurement',
  headline = 'Partner with Zilton Life Care for Hospital & Institutional Supply.',
  subtitle = 'Direct your commercial hospital inquiries, batch allocation schedules, or authorized distribution partnership proposals to our corporate supply desk in Mumbai.',
  primaryCta = { label: 'Start an Institutional Enquiry', href: '/contact' },
  whatsappMessage = 'Hello Zilton Life Care Team,\n\nI would like to inquire about institutional hospital supply schedules, product allocations, and pricing terms.\n\nThank you.',
  capabilities = DEFAULT_CAPABILITIES,
  className = '',
}) => {
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#0E2738] to-[#0A192F] text-white py-20 sm:py-28 my-10 border-y border-slate-800 select-none shadow-2xl ${className}`}>
      {/* Subtle Molecular Mesh Overlay */}
      <div className="absolute inset-0 bg-science-mesh-dark opacity-35 mix-blend-screen pointer-events-none" />

      {/* Radiant Ambient Light Orbs */}
      <div className="absolute top-1/4 left-5 w-96 h-96 rounded-full bg-[#0D9E71]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#06B6D4]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* Left Column: Corporate Authority Message & Actions */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#A7F3D0] text-xs font-semibold border border-emerald-400/25 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>{badgeText}</span>
            </span>

            <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-sm">
              {headline}
            </h2>

            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-lg">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={primaryCta.href}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#0D9E71] via-[#10B981] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(13,158,113,0.45)] hover:shadow-[0_12px_32px_rgba(13,158,113,0.6)] hover:-translate-y-0.5"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Supply Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Therapeutic Capabilities Grid (No Truncation) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            {capabilities.map((item) => (
              <CapabilityCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta3;
