import React from "react";
import type { ProductCategory } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";

interface CategoryFilterProps {
  selectedCategory: "all" | ProductCategory;
  onSelectCategory: (category: "all" | ProductCategory) => void;
  productCounts?: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  productCounts = {},
}) => {
  const options = [
    { id: "all" as const, label: "All Formulations", count: productCounts["all"] ?? 12 },
    ...PRODUCT_CATEGORIES.map((cat) => ({
      id: cat.id,
      label: cat.name,
      count: productCounts[cat.id] ?? 0,
    })),
  ];

  return (
    <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto py-2 no-scrollbar">
      <div
        role="tablist"
        aria-label="Filter formulations by category"
        className="inline-flex p-1.5 rounded-full bg-white border border-slate-200/90 gap-1.5 shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
      >
        {options.map((option) => {
          const isActive = selectedCategory === option.id;
          return (
            <button
              key={option.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(option.id)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-[#0D9E71] to-[#059669] text-white shadow-[0_4px_14px_rgba(13,158,113,0.35)] scale-[1.02]"
                  : "text-slate-600 hover:text-[#0A192F] hover:bg-slate-100/80"
              }`}
            >
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
