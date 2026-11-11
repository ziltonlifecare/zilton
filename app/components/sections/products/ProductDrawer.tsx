import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { X, ArrowRight, ShieldCheck, Pill, Package, Thermometer, MessageSquare } from "lucide-react";
import type { Product } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { getWhatsAppLink } from "~/utils/whatsapp";

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDrawer: React.FC<ProductDrawerProps> = ({ product, onClose }) => {
  // Lock body scroll and handle Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.stop();
      }
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.start();
      }
    };
  }, [product, onClose]);

  const categoryInfo = product ? PRODUCT_CATEGORIES.find((c) => c.id === product.category) : null;

  return (
    <AnimatePresence>
      {product && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 flex justify-end"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            onWheel={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            data-lenis-prevent="true"
            className="fixed inset-0 bg-[#0A192F]/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Sliding Right-Side Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg h-full bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between overflow-hidden overscroll-contain"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200/90 flex items-center justify-between bg-slate-50/80 shrink-0">
              <div>
                <span className="text-xs font-bold text-[#0D9E71] block uppercase tracking-wider">
                  {categoryInfo?.name || "Therapeutic Division"}
                </span>
                <span className="text-xs text-slate-500 font-semibold mt-0.5 block">
                  Product Code: {product.id.toUpperCase()}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-[#0A192F] hover:bg-slate-200/60 transition-colors cursor-pointer"
                aria-label="Close product drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Technical Content */}
            <div
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              className="p-6 sm:p-8 overflow-y-auto overscroll-contain space-y-6 flex-1 touch-pan-y"
            >
              {/* Product Packshot Image Slot */}
              <div className="w-full bg-gradient-to-b from-slate-50 to-white rounded-2xl p-4 border border-slate-100 shadow-xs">
                <ImageSlot
                  src={product.image || undefined}
                  slotKey={`product.${product.id}`}
                  ratio="16/9"
                  caption="Calibrated clinical packaging presentation."
                  className="w-full object-contain"
                />
              </div>

              {/* Title & Core Formulation */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-extrabold text-[#0A192F] leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#0D9E71] mt-1.5">
                  {product.composition}
                </p>
                {product.subCategory && (
                  <span className="inline-block mt-2 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {product.subCategory}
                  </span>
                )}
              </div>

              {/* Description / Therapeutic Intended Use */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#0A192F] font-bold mb-1.5">
                  Therapeutic Scope
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {product.shortDescription}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                    <Pill className="w-4 h-4" />
                    <span className="text-xs font-bold text-[#0A192F]">
                      Active Assay
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 block font-medium">
                    {product.composition}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                    <Package className="w-4 h-4" />
                    <span className="text-xs font-bold text-[#0A192F]">
                      Presentation
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 block font-medium">
                    Sterile Hospital Pack
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                    <Thermometer className="w-4 h-4" />
                    <span className="text-xs font-bold text-[#0A192F]">
                      Thermal Control
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 block font-medium">
                    Per package insert
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold text-[#0A192F]">
                      Assurance
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 block font-medium">
                    CoA batch verified
                  </span>
                </div>
              </div>

              {/* Institutional Notice */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/70 text-xs text-[#065F46] leading-relaxed">
                <strong>Rx Institutional Drug:</strong> Formulations are supplied exclusively to licensed hospital pharmacies, healthcare institutions, and authorized pharmaceutical distribution networks.
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-slate-200/90 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <a
                href={getWhatsAppLink(`Hello Zilton Life Care Team,\n\nI am interested in your formulation: ${product.name} (${product.composition}).\n\nPlease share its institutional availability and commercial pricing terms.\n\nThank you.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4.5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-[0_2px_8px_rgba(37,211,102,0.3)]"
                title="Enquire on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}&type=product-related`}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0D9E71] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-[0_4px_16px_rgba(13,158,113,0.35)]"
              >
                <span>Institutional Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
