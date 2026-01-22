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
      <div className="mb-3 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="flex flex-col items-center gap-1 text-xs text-slate-500">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[10px]">{product.name}</span>
        </div>
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

