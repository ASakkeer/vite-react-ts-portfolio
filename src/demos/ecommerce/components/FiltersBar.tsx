// Filters bar for the ecommerce demo (category and price range).
import type { FC } from "react";
import type { ProductFilters } from "../utils/productFilters";

interface FiltersBarProps {
  filters: ProductFilters;
  categories: string[];
  onCategoryChange: (category: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

export const FiltersBar: FC<FiltersBarProps> = ({
  filters,
  categories,
  onCategoryChange,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Filters</h2>
          <p className="text-xs text-slate-600">
            Narrow down products by category and price range.
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-1">
          <label htmlFor="filter-category" className="text-xs font-medium text-slate-800">
            Category
          </label>
          <select
            id="filter-category"
            value={filters.category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="filter-min-price" className="text-xs font-medium text-slate-800">
            Min price
          </label>
          <input
            id="filter-min-price"
            type="number"
            min={0}
            value={filters.minPrice}
            onChange={(event) => onMinPriceChange(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="filter-max-price" className="text-xs font-medium text-slate-800">
            Max price
          </label>
          <input
            id="filter-max-price"
            type="number"
            min={0}
            value={filters.maxPrice}
            onChange={(event) => onMaxPriceChange(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
        </div>
      </div>
    </section>
  );
};

export default FiltersBar;

