// Local filter state for the ecommerce product listing.
import { useState, useMemo } from "react";
import products from "../data/products.json";
import { applyProductFilters, type ProductFilters } from "../utils/productFilters";

export const useProductFilters = () => {
  const [filters, setFilters] = useState<ProductFilters>({
    category: "All",
    minPrice: "",
    maxPrice: "",
  });

  const categories = useMemo(() => {
    const all = Array.from(new Set(products.map((product) => product.category))).sort();
    return ["All", ...all];
  }, []);

  const filteredProducts = useMemo(
    () => applyProductFilters(products, filters),
    [filters],
  );

  const setCategory = (category: string) =>
    setFilters((current) => ({
      ...current,
      category,
    }));

  const setMinPrice = (minPrice: string) =>
    setFilters((current) => ({
      ...current,
      minPrice,
    }));

  const setMaxPrice = (maxPrice: string) =>
    setFilters((current) => ({
      ...current,
      maxPrice,
    }));

  return {
    filters,
    categories,
    products: filteredProducts,
    setCategory,
    setMinPrice,
    setMaxPrice,
  };
};

