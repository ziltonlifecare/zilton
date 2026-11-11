/**
 * ZILTON LIFE CARE — PREMIUM EXPERIENCE 2.0
 * 
 * Design Philosophy: Cinematic, editorial, sophisticated
 * Premium pharmaceutical branding with asymmetric layouts and refined interactions
 */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Syringe, Droplets, Package, ChevronDown, Shield, Award, TrendingUp, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PRODUCTS } from "~/data/products";
import type { Product } from "~/types/product";
import { Reveal } from "~/components/motion/Reveal";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { IMAGES } from "~/data/images";
import { COMPANY } from "~/data/company";
import { generateRouteMeta } from "~/utils/seo";
import { ProductDrawer } from "~/components/sections/products/ProductDrawer";

export function meta() {
  return generateRouteMeta({
    title: "Zilton Life Care | Critical Care & Clinical Nutrition Formulations",
    description:
      "Zilton Life Care Private Limited has more than 20+ years experience in Critical Care, Parenteral and Clinical Nutrition formulation across India, supported by audited cGMP, WHO, US FDA approved partner manufacturing and disciplined distribution.",
    canonicalPath: "/",
  });
}

export default function HomePage() {
  const [activeDrawerProduct, setActiveDrawerProduct] = useState<Product | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.7]);

  return (
    <div className="w-full bg-[#F0FDF4]">
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CINEMATIC HERO — ASYMMETRIC EDITORIAL COMPOSITION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0A192F]">
        {/* Animated background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
          <motion.div 
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')]"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        </div>

        {/* Main pharmaceutical photograph with parallax */}
        {IMAGES.heroMain && (
          <motion.div 
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            <motion.img
              src={IMAGES.heroMain}
              alt="Pharmaceutical cleanroom manufacturing excellence"
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="sync"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>
        )}

        {/* Sophisticated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/95 via-50% to-[#0A192F]/30"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />

        {/* Emerald accent glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0D9E71]/10 to-transparent pointer-events-none" />

        {/* Hero Content Grid */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* LEFT: Editorial Content */}
            <div className="lg:col-span-12 space-y-8 max-w-5xl">
              {/* Category label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A7F3D0] font-semibold">
                    Critical Care & Clinical Nutrition
                  </span>
                </div>
              </motion.div>

              {/* Main headline */}
              <div className="space-y-4">
                <motion.h1
                  className="font-editorial font-extrabold text-white leading-[0.95] tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="block text-6xl sm:text-7xl lg:text-8xl">
                    Better
                  </span>
                  <span className="block text-6xl sm:text-7xl lg:text-8xl">
                    Healthcare.
                  </span>
                  <span className="block text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">
                    Healthier Lives.
                  </span>
                </motion.h1>
              </div>

              {/* Supporting text with integrated credentials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6 max-w-3xl"
              >
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                  More than <span className="font-semibold text-white">20+ years</span> of specialized experience in Critical Care, Parenteral and Clinical Nutrition formulation across India.
                </p>
                <p className="text-base text-slate-400 leading-relaxed">
                  Supported by audited <span className="text-[#10B981]">cGMP, WHO, US FDA approved partner manufacturing</span> facilities and disciplined institutional distribution.
                </p>

                {/* Inline credentials */}
                <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#10B981]" />
                    <div>
                      <div className="text-sm font-bold text-white">20+ Years</div>
                      <div className="text-xs text-slate-400">Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#10B981]" />
                    <div>
                      <div className="text-sm font-bold text-white">Partner Standards</div>
                      <div className="text-xs text-slate-400">cGMP, WHO, US FDA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#10B981]" />
                    <div>
                      <div className="text-sm font-bold text-white">Pan-India</div>
                      <div className="text-xs text-slate-400">Distribution</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <Link
                  to="/products"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#0D9E71] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-sm font-bold uppercase tracking-wider transition-all shadow-[0_8px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.4)] hover:scale-105 duration-300"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md text-white text-sm font-bold uppercase tracking-wider transition-all border border-white/10 hover:border-white/20"
                >
                  <span>About Zilton</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform opacity-70" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60 cursor-pointer group">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile credential summary (visible only on mobile) */}
        <div className="absolute bottom-0 left-0 right-0 lg:hidden bg-gradient-to-t from-[#0A192F] to-transparent p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-6 text-xs text-slate-300"
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#10B981]" />
              <div>
                <div className="font-bold text-white">20+ Years</div>
                <div className="text-slate-400">Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#10B981]" />
              <div>
                <div className="font-bold text-white">Partner Standards</div>
                <div className="text-slate-400">cGMP, WHO, US FDA</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#10B981]" />
              <div>
                <div className="font-bold text-white">Pan-India</div>
                <div className="text-slate-400">Distribution</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* EDITORIAL INFORMATION STRIP */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative border-y border-emerald-200/60 bg-[#F0FDF4] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#0D9E71]" />
              <span className="text-slate-600">
                <span className="font-bold text-[#0A192F]">Focus:</span> Critical Care Injections, Clinical Nutrition IV, Therapeutic Sachets
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#0D9E71]" />
              <span className="text-slate-600">
                <span className="font-bold text-[#0A192F]">Institutional Supply</span> for hospitals and authorized distributors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* COMPANY INTRODUCTION — EDITORIAL SPLIT LAYOUT */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F0FDF4]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Left: Large-format image */}
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#0D9E71]/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <ImageSlot
                    slotKey="aboutPlant"
                    ratio="4/5"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating stat badge */}
                <div className="absolute -bottom-6 -right-6 px-8 py-4 rounded-2xl bg-[#F0FDF4] shadow-2xl border border-emerald-200/60">
                  <div className="text-3xl font-editorial font-bold text-[#0A192F]">20+</div>
                  <div className="text-xs uppercase tracking-wider text-slate-600 font-bold">Years</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Editorial content */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                  <span className="text-xs uppercase tracking-wider text-[#0D9E71] font-bold">
                    Who We Are
                  </span>
                </div>

                <h2 className="font-editorial text-5xl sm:text-6xl font-bold text-[#0A192F] mb-8 leading-[1.1]">
                  Pharmaceutical excellence through scientific rigor.
                </h2>

                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Founded in Mumbai, Zilton Life Care operates as a dedicated pharmaceutical
                    healthcare company bridging certified cGMP, WHO and US FDA approved
                    manufacturing with clinical care facilities across India.
                  </p>
                  <p>
                    Modern hospital pharmacotherapy demands uncompromising quality control,
                    verified batch release documentation, and disciplined cold-chain management.
                    Our operational model pairs audited partner facilities with rigorous technical
                    due-diligence.
                  </p>
                  <p>
                    We focus on critical hospital therapeutics: advanced parenteral antibiotics for
                    intensive care, intravenous nutrition for compromised patients, and oral
                    metabolic sachets for surgical recovery.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A192F] hover:bg-[#0F382C] text-white text-sm font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Learn More About Zilton</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* THERAPEUTIC CATEGORIES — INTERACTIVE CARDS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18 bg-[#F0FDF4] relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#0D9E71]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                <span className="text-xs uppercase tracking-wider text-[#0D9E71] font-bold">
                  Our Therapeutic Focus
                </span>
              </div>

              <h2 className="font-editorial text-5xl sm:text-6xl font-bold text-[#0A192F] mb-6 leading-tight">
                Specialized Hospital Formulations
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Formulations engineered for intensive hospital protocols, emergency admissions, and
                clinical patient recovery.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Critical Care Injections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/products#critical-care-injection"
                className="group block h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-[#0D9E71]/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(13,158,113,0.15)] overflow-hidden">
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D9E71]/0 to-[#059669]/0 group-hover:from-[#0D9E71]/5 group-hover:to-[#059669]/5 transition-all duration-500" />
                  
                  <div className="relative space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Syringe className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-editorial text-3xl font-bold text-[#0A192F] mb-3 group-hover:text-[#0D9E71] transition-colors">
                        Critical Care Injections
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        Intensive-care parenteral formulations including IV Carbapenems, Polypeptides,
                        Echinocandin Antifungals, and Haematinics for ICU and surgical admissions.
                      </p>
                    </div>

                    {/* Illustration */}
                    <div className="pt-6 border-t border-slate-200">
                      <p className="text-xs text-slate-400 mb-3 italic">Category illustration</p>
                      <img
                        src="/images/products/placeholder-injection.svg"
                        alt="Critical Care Injection category"
                        className="w-40 h-40 object-contain opacity-30 group-hover:opacity-50 transition-opacity"
                      />
                    </div>

                    {/* Link indicator */}
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0D9E71] group-hover:gap-3 transition-all">
                      <span>View Formulations</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2: Nutrition IV */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/products#nutrition-iv"
                className="group block h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-[#0D9E71]/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(13,158,113,0.15)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D9E71]/0 to-[#059669]/0 group-hover:from-[#0D9E71]/5 group-hover:to-[#059669]/5 transition-all duration-500" />
                  
                  <div className="relative space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Droplets className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="font-editorial text-3xl font-bold text-[#0A192F] mb-3 group-hover:text-[#0D9E71] transition-colors">
                        Nutrition IV Solutions
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        Sterile parenteral nutrition preparations and essential trace element infusions
                        designed for clinical parenteral therapy and patient replenishment.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <p className="text-xs text-slate-400 mb-3 italic">Category illustration</p>
                      <img
                        src="/images/products/placeholder-iv.svg"
                        alt="Nutrition IV category"
                        className="w-40 h-40 object-contain opacity-30 group-hover:opacity-50 transition-opacity"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold text-[#0D9E71] group-hover:gap-3 transition-all">
                      <span>View Solutions</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3: Nutrition Sachets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/products#nutrition-sachet"
                className="group block h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-[#0D9E71]/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(13,158,113,0.15)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D9E71]/0 to-[#059669]/0 group-hover:from-[#0D9E71]/5 group-hover:to-[#059669]/5 transition-all duration-500" />
                  
                  <div className="relative space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Package className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="font-editorial text-3xl font-bold text-[#0A192F] mb-3 group-hover:text-[#0D9E71] transition-colors">
                        Therapeutic Nutrition Sachets
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        Advanced therapeutic nutrition sachets containing pharmaceutical-grade amino
                        acids and metabolic nutrients for clinical and dietary management.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <p className="text-xs text-slate-400 mb-3 italic">Category illustration</p>
                      <img
                        src="/images/products/placeholder-sachet.svg"
                        alt="Nutrition Sachet category"
                        className="w-40 h-40 object-contain opacity-30 group-hover:opacity-50 transition-opacity"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold text-[#0D9E71] group-hover:gap-3 transition-all">
                      <span>View Sachets</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* WHY ZILTON — DISTINCTIVE CAPABILITIES */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
              <span className="text-xs uppercase tracking-wider text-[#0D9E71] font-bold">
                Why Zilton
              </span>
            </div>

            <h2 className="font-editorial text-5xl sm:text-6xl font-bold text-[#0A192F] mb-6 leading-tight">
              Built on trust, precision and institutional commitment.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-[#F0FDF4] rounded-3xl p-10 border border-emerald-200/60 hover:border-[#0D9E71]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0D9E71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#0A192F] mb-4">
                  20+ Years of Dedicated Experience
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  More than two decades of specialized focus on Critical Care, Parenteral and Clinical Nutrition formulations for hospital and institutional supply across India.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-[#F0FDF4] rounded-3xl p-10 border border-emerald-200/60 hover:border-[#0D9E71]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0D9E71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#0A192F] mb-4">
                  Partner Manufacturing Standards
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Every formulation manufactured through audited cGMP, WHO, and US FDA approved partner facilities, ensuring compliance with international pharmaceutical standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-[#F0FDF4] rounded-3xl p-10 border border-emerald-200/60 hover:border-[#0D9E71]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0D9E71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#0A192F] mb-4">
                  Pan-India Institutional Distribution
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Disciplined distribution network serving hospitals, procurement committees, and authorized distributors across India with reliable cold-chain logistics.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-[#F0FDF4] rounded-3xl p-10 border border-emerald-200/60 hover:border-[#0D9E71]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0D9E71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#0A192F] mb-4">
                  Focused Institutional Approach
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Direct engagement with hospital procurement teams, ensuring batch traceability, analytical verification, and documented quality compliance at every stage.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* QUALITY ASSURANCE — EDITORIAL LAYOUT WITH IMAGERY */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18 bg-[#F0FDF4]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Left: Editorial Content */}
            <div className="lg:col-span-6 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                  <span className="text-xs uppercase tracking-wider text-[#0D9E71] font-bold">
                    Quality Assurance
                  </span>
                </div>

                <h2 className="font-editorial text-5xl sm:text-6xl font-bold text-[#0A192F] mb-8 leading-[1.1]">
                  Documented quality verification from manufacturing to hospital delivery.
                </h2>

                <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
                  <p>
                    Every parenteral injectable and clinical nutrition formulation undergoes
                    documented release testing from audited cGMP, WHO, and US FDA approved partner
                    manufacturing facilities.
                  </p>
                  <p>
                    Our quality framework ensures batch traceability, analytical verification, and
                    temperature-controlled distribution for sensitive formulations.
                  </p>
                </div>

                <Link
                  to="/quality"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A192F] hover:bg-[#0F382C] text-white text-sm font-bold uppercase tracking-wider transition-all"
                >
                  <span>View Quality Framework</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right: Image */}
            <motion.div 
              className="lg:col-span-6 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#0D9E71]/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <ImageSlot
                    slotKey="quality01"
                    ratio="4/3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* INSTITUTIONAL SUPPLY CTA — CINEMATIC CLOSING */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-[#0A192F]">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(13,158,113,0.15),transparent_70%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0D9E71]/10 to-transparent" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-[#A7F3D0] font-bold">
                Institutional Partnerships
              </span>
            </div>

            <h2 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Partner with Zilton Life Care for institutional pharmaceutical supply.
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              We work directly with hospital procurement committees, authorized distributors, and
              institutional healthcare providers across India. Direct your commercial inquiries,
              batch allocation schedules, and partnership proposals to our Mumbai corporate desk.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#0D9E71] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-sm font-bold uppercase tracking-wider transition-all shadow-[0_20px_60px_rgba(16,185,129,0.3)] hover:shadow-[0_24px_70px_rgba(16,185,129,0.4)] hover:scale-105 duration-300"
              >
                <span>Start an Institutional Enquiry</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/products"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md text-white text-sm font-bold uppercase tracking-wider transition-all border border-white/10 hover:border-white/20"
              >
                <span>Browse Product Catalogue</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform opacity-70" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Drawer (preserved functionality) */}
      <ProductDrawer product={activeDrawerProduct} onClose={() => setActiveDrawerProduct(null)} />
    </div>
  );
}
