import React, { useMemo, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { Search, X, ShieldAlert } from "lucide-react";
import { CategoryFilter } from "~/components/sections/products/CategoryFilter";
import { ProductGrid } from "~/components/sections/products/ProductGrid";
import { ProductDrawer } from "~/components/sections/products/ProductDrawer";
import { getProducts, PRODUCT_CATEGORIES } from "~/data/products";
import { IMAGES } from "~/data/images";
import type { Product, ProductCategory } from "~/types/product";
import { generateRouteMeta } from "~/utils/seo";

gsap.registerPlugin(Flip);

export function meta() {
  return generateRouteMeta({
    title: "Pharmaceutical Products | Zilton Life Care",
    description:
      "Explore Zilton Life Care's portfolio in Critical Care Injections, IV Antibiotics, Nutrition IV solutions, and therapeutic Nutrition Sachets.",
    canonicalPath: "/products",
  });
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProductCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDrawerProduct, setActiveDrawerProduct] = useState<Product | null>(null);
  const location = useLocation();
  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Sync with URL hash or search params
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "") as ProductCategory;
      if (PRODUCT_CATEGORIES.some((c) => c.id === hash)) {
        setSelectedCategory(hash);
      }
    } else if (location.search) {
      const params = new URLSearchParams(location.search);
      const cat = params.get("category") as ProductCategory;
      if (cat && PRODUCT_CATEGORIES.some((c) => c.id === cat)) {
        setSelectedCategory(cat);
      }
    }
  }, [location.hash, location.search]);

  // Filtered dataset
  const displayedProducts = useMemo(() => {
    let list = getProducts(selectedCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.composition.toLowerCase().includes(q) ||
          (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedCategory, searchQuery]);

  // Product counts
  const productCounts = useMemo(() => {
    const all = getProducts().length;
    const counts: Record<string, number> = { all };
    PRODUCT_CATEGORIES.forEach((cat) => {
      counts[cat.id] = getProducts(cat.id).length;
    });
    return counts;
  }, []);

  const handleCategoryChange = (category: "all" | ProductCategory) => {
    if (gridContainerRef.current) {
      const state = Flip.getState(gridContainerRef.current.querySelectorAll("article"));
      setSelectedCategory(category);
      requestAnimationFrame(() => {
        if (gridContainerRef.current) {
          Flip.from(state, {
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.04,
          });
        }
      });
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="w-full bg-[#F0FDF4]">
      {/* ─── PREMIUM HERO BANNER ─────────── */}
      <section className="relative w-full overflow-hidden min-h-[50vh] flex items-center bg-[#0A192F]">
        {IMAGES.productsHero && (
          <motion.img
            src={IMAGES.productsHero}
            alt="Pharmaceutical quality control and analytical testing laboratory"
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
                Formulations Catalogue
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-editorial font-bold text-white leading-[1.1] mb-6">
              Parenteral & Clinical Portfolios
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Specialized pharmaceutical preparations spanning intensive critical care injectables, trace element infusions, and therapeutic oral nutrition sachets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CATALOGUE BODY CONTAINER ─────────────────────────── */}
      <div className="py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          {/* Institutional Prescription Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 p-5 rounded-2xl bg-[#F0FDF4] border border-emerald-200 flex items-start gap-4"
          >
            <ShieldAlert className="w-5 h-5 text-[#0D9E71] shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm font-bold text-[#0A192F] mb-1">
                Institutional Notice
              </div>
              <div className="text-sm text-slate-700">
                Exclusively for hospital procurement committees, registered stockists, and licensed pharmacies. Prescription only.
              </div>
            </div>
          </motion.div>

          {/* Search & Category Filter Bar */}
          <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            {/* Category Filter */}
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
              productCounts={productCounts}
            />

            {/* Search Input */}
            <div className="relative w-full md:w-96 shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or composition..."
                className="w-full pl-12 pr-12 py-3.5 rounded-full bg-white/90 border-2 border-emerald-200/60 text-sm text-[#0A192F] placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9E71] focus:border-[#0D9E71] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors p-1"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Catalog Grid */}
          <div ref={gridContainerRef}>
            <ProductGrid
              products={displayedProducts}
              onSelectProduct={(p) => setActiveDrawerProduct(p)}
            />
          </div>

          {/* Technical Specs Drawer */}
          <ProductDrawer
            product={activeDrawerProduct}
            onClose={() => setActiveDrawerProduct(null)}
          />
        </div>
      </div>
    </div>
  );
}
