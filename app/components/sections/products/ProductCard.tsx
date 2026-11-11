import React from "react";
import { FileSpreadsheet, ArrowRight } from "lucide-react";
import type { Product } from "~/types/product";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { getWhatsAppLink } from "~/utils/whatsapp";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const waMessage = `Hello Zilton Life Care Team,\n\nI am interested in your product: ${product.name}.\n\nPlease share its details, pricing information, availability, and ordering process.\n\nThank you.`;

  return (
    <article
      data-cursor="view"
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#F0FDF4]/80 to-white/90 backdrop-blur-sm border border-emerald-200/60 hover:border-[#0D9E71]/40 transition-all duration-500 shadow-[0_8px_32px_-8px_rgba(13,158,113,0.12)] hover:shadow-[0_24px_48px_-8px_rgba(13,158,113,0.25)] hover:-translate-y-2 cursor-pointer select-none overflow-hidden"
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D9E71]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Top Meta Line: Division Badge & Rx Spec */}
        <div className="flex items-center justify-between text-xs mb-4">
          <span className="text-[#065F46] font-bold bg-emerald-50 border border-emerald-200/90 px-3 py-1 rounded-full capitalize text-[11px] shadow-2xs">
            {product.category.replace(/-/g, " ")}
          </span>
          <span className="text-slate-600 bg-slate-100 border border-slate-200/60 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold tracking-wider uppercase">
            {product.subCategory || "Rx Only"}
          </span>
        </div>

        {/* Elevated Architectural Packshot Presentation Stage */}
        <div className="mb-5 overflow-hidden rounded-2xl bg-gradient-to-b from-white/90 via-emerald-50/40 to-white/80 border border-emerald-100/80 p-4 relative flex items-center justify-center min-h-[175px] backdrop-blur-sm">
          {/* Subtle Radial Ambient Spotlight */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(13, 158, 113, 0.15) 0%, transparent 70%)",
            }}
          />
          <ImageSlot
            src={product.image || undefined}
            slotKey={`product.${product.id}`}
            ratio="4/3"
            className="w-full object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.08)] group-hover:drop-shadow-[0_16px_32px_rgba(13,158,113,0.22)] transition-transform duration-500 ease-out group-hover:scale-106"
          />
        </div>

        {/* Product Brand Name */}
        <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0A192F] group-hover:text-[#0D9E71] transition-colors duration-200 leading-tight">
          {product.name}
        </h3>

        {/* Composition in Vibrant Clinical Text */}
        <p className="text-xs sm:text-[12.5px] text-[#0D9E71] font-bold mt-1.5 leading-snug">
          {product.composition}
        </p>

        {/* Brief Description */}
        <p className="text-xs sm:text-sm text-slate-600 font-normal mt-2.5 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* Card Footer Actions */}
      <div className="relative z-10 mt-6 pt-4 border-t border-emerald-100/60 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="text-xs font-bold text-[#0A192F] group-hover:text-[#0D9E71] transition-colors flex items-center gap-1.5 cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-slate-50"
        >
          <FileSpreadsheet className="w-3.5 h-3.5 text-[#0D9E71]" />
          <span>Technical specs</span>
        </button>

        {/* WhatsApp product enquiry button */}
        <a
          href={getWhatsAppLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-[#25D366] text-[#065F46] hover:text-white border border-emerald-200/80 hover:border-transparent text-[11px] font-bold transition-all duration-200 shadow-2xs hover:shadow-sm"
          title={`Inquire about ${product.name} on WhatsApp`}
        >
          <span>WhatsApp</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
};
