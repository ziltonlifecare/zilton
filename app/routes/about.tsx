import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronDown, MapPin, Building2, ShieldCheck, Target, Eye, HeartHandshake, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { ScrollText } from "~/components/motion/ScrollText";
import { COMPANY } from "~/data/company";
import { IMAGES } from "~/data/images";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "About Zilton Life Care | Our Company & Mission",
    description:
      "Discover Zilton Life Care Private Limited — corporate vision, clinical mission, operating principles, and commitment to hospital-grade pharmaceutical quality.",
    canonicalPath: "/about",
  });
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");
  const [activeValue, setActiveValue] = useState<number | null>(0);

  const values = [
    {
      title: "Quality",
      tagline: "Uncompromising standards in every released batch.",
      desc: "We enforce strict adherence to pharmacopeial assay parameters, sterility checks, and Schedule M cGMP, WHO and US FDA compliant requirements across partner manufacturing lines.",
    },
    {
      title: "Integrity",
      tagline: "Transparent and honest in all institutional relationships.",
      desc: "Truth in labeling, transparent batch documentation, and open commercial communications guide our interactions with healthcare professionals.",
    },
    {
      title: "Trust",
      tagline: "Enduring partnerships with hospitals and medical specialists.",
      desc: "Clinical trust is earned through zero-deviation product availability, rapid documentation fulfillment, and reliable supply chains.",
    },
    {
      title: "Innovation",
      tagline: "Modern scientific approaches to advanced healthcare formulations.",
      desc: "Focusing on advanced antibiotic delivery systems, colloidal iron replenishment, and targeted metabolic amino acid therapy.",
    },
    {
      title: "Commitment",
      tagline: "Dedicated to improving patient clinical outcomes.",
      desc: "Ensuring intensive care units and hospital departments receive critical therapeutics without delay or thermal excursion.",
    },
    {
      title: "Excellence",
      tagline: "Striving for the highest operational benchmark.",
      desc: "Continuous refinement of our distribution controls, partner audits, and regulatory compliance infrastructure.",
    },
  ];

  return (
    <div className="w-full bg-[#F0FDF4]">
      {/* ─── PREMIUM HERO BANNER ─────────── */}
      <section className="relative w-full overflow-hidden min-h-[50vh] flex items-center bg-[#0A192F]">
        {IMAGES.aboutLeadership && (
          <motion.img
            src={IMAGES.aboutLeadership}
            alt="Pharmaceutical corporate governance and clinical team"
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
                Corporate Overview
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-editorial font-bold text-white leading-[1.1] mb-6">
              Institutional Purpose & Governance
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Bridging certified cGMP, WHO and US FDA approved manufacturing with clinical care facilities across India through uncompromised quality assurance and ethical governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT CONTENT BODY ─────────────────────────────────── */}
      <div className="py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          {/* ─── 1. OUR STORY & FOUNDING CHARTER ─────────────────── */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <ScrollText as="h2">
                Founded in Mumbai, Zilton Life Care operates as a dedicated pharmaceutical healthcare company bridging certified cGMP, WHO and US FDA approved manufacturing with clinical care facilities across India.
              </ScrollText>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-6 text-lg text-slate-600 leading-relaxed"
              >
                <p>
                  Modern hospital pharmacotherapy demands uncompromising quality control, verified batch release documentation, and disciplined cold-chain management.
                </p>
                <p>
                  Zilton Life Care focuses on critical hospital therapeutics: advanced parenteral antibiotics for intensive clinical care, intravenous nutrition for compromised patients, and oral metabolic sachets for surgical recovery.
                </p>
                <p>
                  Our operational model pairs audited cGMP, WHO and US FDA compliant manufacturing partner facilities with rigorous technical due-diligence in Mumbai, ensuring institutional healthcare providers receive formulations that meet exact pharmacopeial monographs.
                </p>

                <div className="pt-4 flex flex-col gap-3">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F0FDF4] border border-emerald-100">
                    <MapPin className="w-5 h-5 text-[#0D9E71] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">LAXMI HOUSING & FINANCE, 67 B, GOPAL MANSION, GURUNANAK ROAD, BANDRA WEST, MUMBAI 400050</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F0FDF4] border border-emerald-100">
                    <Building2 className="w-5 h-5 text-[#0D9E71]" />
                    <span className="text-sm font-medium text-slate-700">Dedicated Institutional Supply Desk</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#0D9E71]/20 to-transparent rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <ImageSlot
                      slotKey="aboutPlant"
                      ratio="4/3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ─── 2. TABBED VISION, MISSION & VALUES ──────────────── */}
          <section className="py-12 border-t border-emerald-200/60 bg-slate-50 -mx-6 sm:-mx-8 lg:-mx-16 px-6 sm:px-8 lg:px-16">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D9E71]">
                      Guiding Principles
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-editorial font-bold text-[#0A192F]">
                    Discover Our Healthcare Commitment
                  </h2>
                </div>
                <p className="text-base text-slate-600 max-w-md">
                  A focused corporate vision paired with disciplined execution for institutional hospital trust.
                </p>
              </div>

              {/* Premium Tabs */}
              <div className="flex items-center gap-2 border-b border-emerald-200/60 pb-px mb-8">
                <button
                  type="button"
                  onClick={() => setActiveTab("mission")}
                  className={`px-6 py-3 text-sm font-bold transition-all ${
                    activeTab === "mission"
                      ? "text-[#0D9E71] border-b-2 border-[#0D9E71] -mb-px"
                      : "text-slate-600 hover:text-[#0D9E71]"
                  }`}
                >
                  Our Mission
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("vision")}
                  className={`px-6 py-3 text-sm font-bold transition-all ${
                    activeTab === "vision"
                      ? "text-[#0D9E71] border-b-2 border-[#0D9E71] -mb-px"
                      : "text-slate-600 hover:text-[#0D9E71]"
                  }`}
                >
                  Our Vision
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("values")}
                  className={`px-6 py-3 text-sm font-bold transition-all ${
                    activeTab === "values"
                      ? "text-[#0D9E71] border-b-2 border-[#0D9E71] -mb-px"
                      : "text-slate-600 hover:text-[#0D9E71]"
                  }`}
                >
                  Our Values
                </button>
              </div>

            {/* Tab Contents */}
            <div className="bg-[#F0FDF4] rounded-2xl p-8 sm:p-12 border border-emerald-200/60 shadow-[0_4px_24px_rgba(15,23,42,0.05)]">
              {activeTab === "mission" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                  <div className="md:col-span-8">
                    <span className="text-xs font-bold text-[#0D9E71] uppercase tracking-wider block mb-2">
                      Operational Mission
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-4xl font-bold text-[#0A192F] leading-tight mb-4">
                      &ldquo;{COMPANY.mission}&rdquo;
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-normal">
                      Building lasting confidence with healthcare specialists, hospital drug committees, and distributors through batch-level traceability, zero-deviation dispatch, and strict cGMP, WHO and US FDA partner compliance.
                    </p>
                  </div>
                  <div className="md:col-span-4 p-6 rounded-xl bg-white/80 border border-emerald-200/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A192F] mb-3">Key Focus</h4>
                    <ul className="space-y-2 text-xs text-slate-600 font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                        <span>Critical Care Injectables</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                        <span>Clinical Nutrition Infusions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                        <span>Hospital Procurement Reliability</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                  <div className="md:col-span-8">
                    <span className="text-xs font-bold text-[#0D9E71] uppercase tracking-wider block mb-2">
                      Corporate Vision
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-4xl font-bold text-[#0A192F] leading-tight mb-4">
                      &ldquo;{COMPANY.vision}&rdquo;
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-normal">
                      Establishing a dependable national benchmark in hospital formulations through clinical discipline, transparent batch documentation, and uninterrupted product availability for critical care settings.
                    </p>
                  </div>
                  <div className="md:col-span-4 p-6 rounded-xl bg-white/80 border border-emerald-200/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A192F] mb-3">Strategic Goals</h4>
                    <ul className="space-y-2 text-xs text-slate-600 font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                        <span>Pan-India Hospital Access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                        <span>Therapeutic Monograph Purity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                        <span>Disciplined Cold-Chain Transport</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className="animate-in fade-in duration-300">
                  <span className="text-xs font-bold text-[#0D9E71] uppercase tracking-wider block mb-2">
                    Core Operational Values
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0A192F] leading-tight mb-6">
                    {COMPANY.tagline}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {COMPANY.values.map((val) => (
                      <div key={val.label} className="p-4.5 rounded-xl bg-white/80 border border-emerald-200/60">
                        <h4 className="font-editorial text-base font-bold text-[#0A192F] mb-1.5 text-[#0D9E71]">
                          {val.label}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            </div>
          </section>

          {/* ─── 3. CORE VALUES ACCORDION ─── */}
          <section className="py-12">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9E71]">
                  Operational Framework
                </span>
              </div>
              <h2 className="text-fluid-h2 font-editorial font-bold text-[#0A192F]">
                Guiding Corporate Standards
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Our cultural charter guiding every manufacturing partner evaluation, release protocol, and client dialogue.
              </p>
            </div>

            {/* Values List with Clean Check Indicators (Numbers removed) */}
            <div className="divide-y divide-emerald-100/60 border-y border-emerald-100/60 mb-12">
              {values.map((val, idx) => {
                const isExpanded = activeValue === idx;
                return (
                  <div
                    key={val.title}
                    onClick={() => setActiveValue(isExpanded ? null : idx)}
                    onMouseEnter={() => setActiveValue(idx)}
                    className="py-6 sm:py-7 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0D9E71] flex items-center justify-center shrink-0 border border-emerald-200/60">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <div>
                          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0A192F] group-hover:text-[#0D9E71] transition-colors">
                            {val.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                            {val.tagline}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 group-hover:text-[#0D9E71] transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-[#0D9E71]" : ""
                        }`}
                      />
                    </div>

                    {isExpanded && (
                      <div className="mt-3 pl-12 sm:pl-14 pr-4 animate-in fade-in duration-200">
                        <p className="text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
                          {val.desc}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ─── 4. STRATEGIC OBJECTIVES ─── */}
            <div className="my-10 p-10 sm:p-12 rounded-3xl bg-[#F0FDF4] border border-emerald-200/60 shadow-sm">
              <div className="max-w-2xl mb-10">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D9E71]">
                    Institutional Priorities
                  </span>
                </div>
                <h3 className="text-fluid-h2 font-editorial font-bold text-[#0A192F]">
                  Our Strategic Objectives
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
                  Focused commitments that guide our day-to-day manufacturing partnerships, cold chain distribution, and clinical interactions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-emerald-200/60 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-8 h-8 rounded-xl bg-emerald-50 text-[#0D9E71] flex items-center justify-center shrink-0 border border-emerald-200/60">
                      <Target className="w-4 h-4" />
                    </span>
                    <h4 className="font-editorial text-lg font-bold text-[#0A192F]">
                      Advancing Critical Healthcare
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    We aim to improve patient outcomes by providing high-quality, clinically validated critical care injectables and clinical nutrition solutions across India.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-emerald-200/60 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-8 h-8 rounded-xl bg-emerald-50 text-[#0D9E71] flex items-center justify-center shrink-0 border border-emerald-200/60">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <h4 className="font-editorial text-lg font-bold text-[#0A192F]">
                      Rigorous Pharmacopeial Excellence
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Every batch is manufactured in audited cGMP, WHO and US FDA approved partner facilities, ensuring absolute compliance with Indian Pharmacopoeia monographs.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-emerald-200/60 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-8 h-8 rounded-xl bg-emerald-50 text-[#0D9E71] flex items-center justify-center shrink-0 border border-emerald-200/60">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <h4 className="font-editorial text-lg font-bold text-[#0A192F]">
                      Clinical Nutrition for Every Patient Stage
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Our specialized parenteral trace elements and amino acid formulations meet the therapeutic metabolic demands of intensive care and surgical recovery patients.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-emerald-200/60 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-8 h-8 rounded-xl bg-emerald-50 text-[#0D9E71] flex items-center justify-center shrink-0 border border-emerald-200/60">
                      <Award className="w-4 h-4" />
                    </span>
                    <h4 className="font-editorial text-lg font-bold text-[#0A192F]">
                      Disciplined Supply &amp; Ethical Governance
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Maintaining dependable cold-chain distribution (2°–8°C), 100% Certificate of Analysis availability, and transparent institutional relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* ─── 5. PARTNERSHIP CTA ─── */}
            <div className="mb-10 p-10 rounded-3xl bg-gradient-to-r from-[#0A192F] to-[#0F382C] text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A7F3D0]">
                    Institutional Collaboration
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
                  Join Hands with Us to Advance Critical Care &amp; Clinical Nutrition
                </h3>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-light">
                  We invite hospitals, procurement directors, clinical specialists, and authorized distributors across India to partner with us in delivering patient recovery and nutritional excellence.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0D9E71] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-[0_4px_16px_rgba(13,158,113,0.4)]"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs uppercase tracking-wider font-bold transition-all"
                >
                  <span>Explore Products</span>
                </Link>
              </div>
            </div>

            {/* Statutory Governance Note */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F0FDF4] border border-emerald-200/60 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
              <div className="flex items-center gap-2.5 text-[#0D9E71] font-bold text-xs mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Regulatory Compliance</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Zilton Life Care Private Limited strictly adheres to the Drugs and Cosmetics Act, cGMP, WHO and US FDA manufacturing partner requirements, and Indian Pharmacopoeia standards. We do not engage in direct-to-consumer dispensing. All clinical information is addressed exclusively to licensed practitioners and authorized hospital channels.
              </p>
              <div className="mt-4 pt-3 border-t border-emerald-100/60">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#0D9E71] hover:text-[#059669] transition-colors"
                >
                  <span>Direct inquiries to Mumbai corporate desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
