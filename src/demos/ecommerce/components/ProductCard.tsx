// Product card used in the ecommerce demo listing.
import type { FC } from "react";
import type { Product } from "../utils/productFilters";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-4">
      <div className="mb-3 flex h-32 items-center justify-center rounded-xl bg-slate-100 text-xs text-slate-500">
        {/* Placeholder thumbnail representing a product image */}
        <span>Image placeholder</span>
      </div>
      <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{product.category}</p>
      <p className="mt-2 text-sm font-semibold text-slate-900">
        ${product.price.toLocaleString("en-US")}
      </p>
      <div className="mt-auto pt-3">
        <button
          type="button"
          onClick={onAddToCart}
          className="pressable inline-flex w-full items-center justify-center rounded-full bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;

