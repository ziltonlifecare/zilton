import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Thermometer, ChevronRight, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { IMAGES } from "~/data/images";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "Quality Assurance & Compliance | Zilton Life Care",
    description:
      "Learn about Zilton Life Care's quality assurance framework, Schedule M partner audits, batch documentation, and cold-chain distribution standards.",
    canonicalPath: "/quality",
  });
}

export default function QualityPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Product Master & Specification",
      subtitle: "Formulation Parameters",
      desc: "Standardized formulation master data, regulatory labeling compliance, and verified pharmacopeial parameters established prior to manufacturing authorization.",
      detail: "Cleanroom compounding protocols, approved pharmacopeial references, and primary packaging integrity specifications.",
      slotKey: "quality01",
    },
    {
      num: "02",
      title: "Batch & Lot Assignment",
      subtitle: "Production Execution",
      desc: "Contract manufacturing partners assign distinct batch and lot numbers upon production, physically printed with manufacturing and expiry dates.",
      detail: "Cleanroom environment validation, sterilization records, and in-process quality control checkpoints.",
      slotKey: "quality02",
    },
    {
      num: "03",
      title: "Release Testing & CoA Records",
      subtitle: "Analytical Verification",
      desc: "Batch Manufacturing Records (BMR) and Certificate of Analysis (CoA) verified against analytical standards before commercial dispatch approval.",
      detail: "Active assay quantification, sterility confirmation for parenteral lines, and particulate matter evaluations.",
      slotKey: "quality03",
    },
    {
      num: "04",
      title: "Institutional Dispatch & Handover",
      subtitle: "Traceable Distribution",
      desc: "Invoiced consignment documentation matches batch records down to regional distributors and hospital pharmacy receiving departments.",
      detail: "Controlled thermal logging, insulated shipping for temperature-sensitive vials, and signed hospital delivery receipts.",
      slotKey: "quality04",
    },
  ];

  const complianceDocs = [
    {
      code: "DOC-COA",
      title: "Certificate of Analysis (CoA)",
      scope: "Batch Purity & Active Assay",
      desc: "Quantitative HPLC assay reports, physicochemical limits, endotoxin levels, and sterility validation for released lots.",
    },
    {
      code: "DOC-BMR",
      title: "Batch Manufacturing Records (BMR)",
      scope: "Production Line Traceability",
      desc: "Detailed compounding logs, autoclave sterilization cycles, and air filtration records maintained by manufacturing partners.",
    },
    {
      code: "DOC-GMP",
      title: "Partner Site Accreditations",
      scope: "Statutory Manufacturing Licenses",
      desc: "Audited cGMP, WHO, US FDA approved partner credentials, state drug regulatory licenses, and cleanroom air handling certifications.",
    },
    {
      code: "DOC-REG",
      title: "Product Regulatory Dossiers",
      scope: "Prescribing & Packaging Literature",
      desc: "Approved package insert specifications, stability study summaries, and barcode verification master data.",
    },
  ];

  return (
    <div className="w-full bg-[#F0FDF4]">
      {/* ─── PREMIUM HERO BANNER ─────────── */}
      <section className="relative w-full overflow-hidden min-h-[50vh] flex items-center bg-[#0A192F]">
        {IMAGES.quality01 && (
          <motion.img
            src={IMAGES.quality01}
            alt="Pharmaceutical analytical laboratory and quality testing"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            decoding="sync"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.55 }}
            transition={{ duration: 1.2 }}
          />
        )}

        {/* Gradient overlay - lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/85 via-[#0A192F]/80 to-[#0A192F]/50" />

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="text-xs uppercase tracking-wider text-[#A7F3D0] font-bold">
                Quality Assurance Charter
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-editorial font-bold text-white leading-[1.1] mb-6">
              Safety, Standards & Verification
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Our quality assurance framework ensures that every parenteral and oral therapeutic distributed by Zilton Life Care meets statutory Indian pharmacopeial and Schedule M standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. 4-STAGE BATCH LIFECYCLE STEPPER ───────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
        <section className="mb-12">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9E71]">
                  Process Traceability
                </span>
              </div>
              <h2 className="text-fluid-h2 font-editorial font-bold text-[#0A192F]">
                Quality Batch Lifecycle &amp; Traceability
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xs font-normal">
              Physical batch documentation tracking from partner plant to hospital delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Selection Buttons */}
            <div className="lg:col-span-6 space-y-3.5">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                      isActive
                        ? "bg-gradient-to-r from-[#0A192F] to-[#0F382C] text-white border-[#0D9E71]/50 shadow-[0_8px_24px_rgba(10,25,47,0.18)]"
                        : "bg-[#F0FDF4] text-[#0A192F] border-emerald-200/60 hover:border-emerald-500/50 hover:shadow-sm"
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5 ${
                        isActive
                          ? "bg-gradient-to-r from-[#0D9E71] to-[#059669] text-white shadow-[0_2px_8px_rgba(13,158,113,0.4)]"
                          : "bg-emerald-50 text-[#0D9E71] border border-emerald-200/60"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-editorial text-lg font-bold leading-tight ${
                            isActive ? "text-white" : "text-[#0A192F]"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isActive ? "rotate-90 text-[#10B981]" : "text-slate-400"
                          }`}
                        />
                      </div>
                      <p
                        className={`text-xs mt-1.5 font-semibold ${
                          isActive ? "text-[#A7F3D0]" : "text-[#0D9E71]"
                        }`}
                      >
                        {step.subtitle}
                      </p>
                      {isActive && (
                        <p className="text-xs sm:text-sm text-slate-200 mt-3 font-normal leading-relaxed animate-in fade-in duration-200">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Visual & Detail Card */}
            <div className="lg:col-span-6 sticky top-28">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#F0FDF4] border border-emerald-200/60 shadow-[0_4px_24px_rgba(15,23,42,0.05)] space-y-5">
                <div className="rounded-xl overflow-hidden border border-emerald-100/60 shadow-2xs">
                  <ImageSlot
                    slotKey={steps[activeStep].slotKey}
                    ratio="16/9"
                  />
                </div>

                <div>
                  <span className="text-xs text-[#0D9E71] font-bold uppercase tracking-wider block mb-1">
                    Verification Standard
                  </span>
                  <h4 className="font-editorial text-xl font-bold text-[#0A192F]">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed mt-2">
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-100/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Partner Compliance</span>
                  <span className="text-[#0D9E71] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    cGMP, WHO &amp; US FDA Standards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ─── 3. MID-PAGE QUALITY BAND: COLD-CHAIN PRECISION ─── */}
      <section className="relative w-full overflow-hidden min-h-[42vh] my-10 flex flex-col justify-center">
        {IMAGES.quality03 && (
          <img
            src={IMAGES.quality03}
            alt="Cold-chain temperature-controlled pharmaceutical distribution"
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
            loading="lazy"
            decoding="async"
          />
        )}

        {/* Directional Corporate Authority Scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A192F]/98 via-[#0F382C]/90 to-[#0A192F]/55"
          aria-hidden="true"
        />

        {/* Subtle Molecular Mesh */}
        <div className="absolute inset-0 bg-science-mesh-dark opacity-30 mix-blend-screen pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white">
          <div className="max-w-2xl text-left space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <Thermometer className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="text-xs uppercase tracking-wider text-[#A7F3D0] font-bold">
                Thermal Preservation
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-editorial font-extrabold text-white tracking-tight drop-shadow-sm">
              Cold-Chain Precision (2°C – 8°C)
            </h2>

            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              Storage and transport conditions are formulation-specific. Temperature-sensitive parenterals are monitored end-to-end to protect therapeutic stability from audited partner plants to hospital receiving bays.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4. COMPLIANCE & REGULATORY DOCUMENTATION ─────────── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
        <section className="mb-12">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9E71]">
                Official Records
              </span>
            </div>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#0A192F]">
              Verification Documentation
            </h2>
            <p className="text-sm text-slate-600 font-normal leading-relaxed mt-2">
              Institutional purchasers and hospital drug committees can request official batch documentation and manufacturing dossiers for all commercial lines.
            </p>
          </div>

          {/* Editorial Document List with Clean Cards */}
          <div className="divide-y divide-emerald-100/60 border-y border-emerald-100/60">
            {complianceDocs.map((doc) => (
              <div
                key={doc.code}
                className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-[#F0FDF4]/50 px-4 rounded-xl transition-colors duration-200"
              >
                {/* Code & Scope */}
                <div className="md:col-span-3">
                  <span className="text-xs font-extrabold text-[#065F46] bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-md shadow-2xs">
                    {doc.code}
                  </span>
                  <span className="block text-xs text-slate-500 mt-2 font-medium">
                    {doc.scope}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="md:col-span-6">
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#0A192F] group-hover:text-[#0D9E71] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>

                {/* Formal Request Action */}
                <div className="md:col-span-3 flex justify-start md:justify-end">
                  <Link
                    to="/contact?type=quality-docs"
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-[#0D9E71] hover:text-[#059669] transition-colors"
                  >
                    <span>Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 5. INSTITUTIONAL CTA PANEL (DEEP NAVY & EMERALD AUTHORITY) ─── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A192F] via-[#0F382C] to-[#0A192F] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-white/10">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-editorial text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Require batch certificates or regulatory dossiers?
            </h3>
            <p className="text-sm text-slate-200 font-normal mt-2.5 leading-relaxed">
              Our regulatory desk coordinates official CoA dispatches and facility qualification credentials for hospital pharmacy committees.
            </p>
          </div>

          <Link
            to="/contact?type=quality-docs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0D9E71] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_4px_16px_rgba(13,158,113,0.35)] shrink-0 hover:-translate-y-0.5"
          >
            <span>Contact quality desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
