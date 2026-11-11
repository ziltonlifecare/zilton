import React, { useEffect } from "react";
import type { Product } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { Button } from "~/components/common/Button";
import {
  X,
  Pill,
  ShieldCheck,
  Package,
  Thermometer,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [product, onClose]);

  if (!product) return null;

  const categoryInfo = PRODUCT_CATEGORIES.find((c) => c.id === product.category);

  // Suggested pack presentation based on category
  const presentationText =
    product.category === "critical-care-injection"
      ? "Sterile Dry Powder / Liquid Injection with Sterile Water for Injection (WFI)"
      : product.category === "nutrition-iv"
      ? "Sterile Non-PVC / Glass IV Infusion Bottle (500 mL / 100 mL)"
      : "Multi-layer Barrier Foil Sachet Pack (Box of 10 / 20 Sachets)";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#123D32]/60 backdrop-blur-xs luxury-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E4EBE6] overflow-hidden flex flex-col max-h-[90vh] luxury-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E4EBE6] bg-[#F2F7F4]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#123D32] bg-white px-3 py-1 rounded-full border border-[#E4EBE6]">
              {categoryInfo?.name || product.category}
            </span>
            {product.subCategory && (
              <span className="text-xs font-medium text-[#53635C] bg-white/80 px-2.5 py-1 rounded-full border border-[#E4EBE6]">
                {product.subCategory}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#53635C] hover:text-[#123D32] hover:bg-white transition-colors focus-visible:outline-[#07845E] cursor-pointer"
            aria-label="Close product quick view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Product Title & Visual */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-[#F2F7F4] rounded-2xl border border-[#E4EBE6] flex flex-col items-center justify-center p-3 text-center">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/images/branding/logo-512.png"
                    alt="Zilton Life Care Mark"
                    className="w-12 h-12 object-contain opacity-80"
                  />
                  <span className="text-[9px] font-bold text-[#123D32] mt-1.5 uppercase tracking-wider">
                    Packshot Pending
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3
                id="quick-view-title"
                className="text-2xl font-bold text-[#123D32] leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-[#07845E] font-semibold">
                {product.composition}
              </p>
              <p className="mt-3 text-sm text-[#53635C] leading-relaxed">
                {product.shortDescription}
              </p>
            </div>
          </div>

          {/* Clinical Specification Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Active Composition Card */}
            <div className="p-4 rounded-2xl bg-[#F2F7F4] border border-[#E4EBE6] flex items-start gap-3">
              <Pill className="w-5 h-5 text-[#07845E] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#53635C] block">
                  Active Formulation
                </span>
                <span className="text-sm font-semibold text-[#123D32] block mt-0.5">
                  {product.composition}
                </span>
              </div>
            </div>

            {/* Packaging Presentation */}
            <div className="p-4 rounded-2xl bg-[#F2F7F4] border border-[#E4EBE6] flex items-start gap-3">
              <Package className="w-5 h-5 text-[#07845E] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#53635C] block">
                  Packaging Form
                </span>
                <span className="text-sm font-medium text-[#123D32] block mt-0.5">
                  {presentationText}
                </span>
              </div>
            </div>

            {/* Storage Guidelines */}
            <div className="p-4 rounded-2xl bg-[#FAFCFA] border border-[#E4EBE6] flex items-start gap-3">
              <Thermometer className="w-5 h-5 text-[#07845E] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#53635C] block">
                  Storage Parameters
                </span>
                <span className="text-xs text-[#53635C] block mt-0.5 leading-relaxed">
                  Product-specific as per approved packaging insert. Protect from excessive heat, moisture &amp; direct light.
                </span>
              </div>
            </div>

            {/* Quality Standard */}
            <div className="p-4 rounded-2xl bg-[#FAFCFA] border border-[#E4EBE6] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#07845E] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#53635C] block">
                  Regulatory Grade
                </span>
                <span className="text-xs text-[#53635C] block mt-0.5 leading-relaxed">
                  Manufactured at audited cGMP facility with Certificate of Analysis (CoA).
                </span>
              </div>
            </div>
          </div>

          {/* Legal / Institutional Prescription Disclaimer */}
          <div className="p-4 rounded-2xl bg-[#DFF1E9]/50 border border-[#07845E]/20 text-xs text-[#123D32] flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#07845E] shrink-0 mt-0.5" />
            <p>
              <strong>Healthcare Professional Notice:</strong> For sale and use by licensed hospitals, healthcare institutions, and authorized pharmaceutical distributors only. Rx Only.
            </p>
          </div>
        </div>

        {/* Modal Footer / Direct Enquiry Link */}
        <div className="p-5 sm:p-6 border-t border-[#E4EBE6] bg-[#F2F7F4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#53635C] text-center sm:text-left">
            Need commercial pricing, CoA, or batch availability?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="flex-1 sm:flex-none justify-center"
            >
              Close
            </Button>
            <Button
              to={`/contact?product=${encodeURIComponent(product.name)}&type=product-related`}
              size="sm"
              className="flex-1 sm:flex-none justify-center flex items-center gap-1.5"
            >
              Enquire About {product.name}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
