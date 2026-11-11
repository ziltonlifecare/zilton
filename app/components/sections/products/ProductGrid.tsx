import React from "react";
import type { Product } from "~/types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onSelectProduct }) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center text-sm text-[#3E6958] bg-[#FFFFFF] rounded-2xl border border-[#1B634E]/15">
        <p className="font-editorial text-xl text-[#1B634E] mb-2 font-bold">
          No formulations matched your query.
        </p>
        <p className="text-xs">
          Try adjusting your search terms or select &ldquo;All Formulations&rdquo;.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
        />
      ))}
    </div>
  );
};
