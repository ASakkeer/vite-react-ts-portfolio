// Utilities for applying client-side filters to the ecommerce product listing.
import products from "../data/products.json";

export type Product = (typeof products)[number];

export interface ProductFilters {
  category: string; // "All" or specific category
  minPrice: string;
  maxPrice: string;
}

export const applyProductFilters = (allProducts: Product[], filters: ProductFilters): Product[] => {
  const min = filters.minPrice ? Number(filters.minPrice) : undefined;
  const max = filters.maxPrice ? Number(filters.maxPrice) : undefined;

  return allProducts.filter((product) => {
    if (filters.category !== "All" && product.category !== filters.category) {
      return false;
    }
    if (min !== undefined && product.price < min) {
      return false;
    }
    if (max !== undefined && product.price > max) {
      return false;
    }
    return true;
  });
};

