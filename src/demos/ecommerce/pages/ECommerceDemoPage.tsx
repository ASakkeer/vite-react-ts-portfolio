// Route-level page for the ecommerce demo (product listing, cart, checkout).
import type { FC } from "react";
import Layout from "../../../components/layout/Layout";
import BackButton from "../../../components/BackButton";
import DemoDisclaimer from "../../../components/DemoDisclaimer";
import { useCart } from "../hooks/useCart";
import { useProductFilters } from "../hooks/useProductFilters";
import ProductCard from "../components/ProductCard";
import FiltersBar from "../components/FiltersBar";
import CartPanel from "../components/CartPanel";
import CheckoutSection from "../components/CheckoutSection";

export const ECommerceDemoPage: FC = () => {
  const { filters, categories, products, setCategory, setMinPrice, setMaxPrice } =
    useProductFilters();
  const { items, subtotal, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handlePlaceOrder = () => {
    // In a real system, this would trigger a checkout flow. Here we just clear the cart.
    clearCart();
  };

  return (
    <Layout>
      <div className="mb-4">
        <BackButton fallbackPath="/projects" label="Back to projects" />
      </div>
      <section className="space-y-6 bg-white px-8 py-4">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            E-commerce Demo
          </h1>
          <div className="space-y-2">
            <p className="max-w-2xl text-sm text-slate-600 md:text-base">
              Lightweight storefront UI showing product browsing, client-side filters, cart
              interactions, and a mock checkout experience. All data and flows are simulated in the
              browser.
            </p>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">What this demo shows:</p>
              <ul className="mt-1 list-disc space-y-0.5 pl-4">
                <li>For: Product teams building customer-facing storefronts</li>
                <li>Problem: Need intuitive product discovery, cart management, and checkout flow</li>
                <li>Workflow: Browse → Filter → Add to cart → Checkout</li>
              </ul>
            </div>
          </div>
        </header>
        <FiltersBar
          filters={filters}
          categories={categories}
          onCategoryChange={setCategory}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
        />
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <section className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-900">Products</h2>
            {products.length === 0 ? (
              <p className="text-xs text-slate-600">No products match the selected filters.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addToCart(product.id)}
                  />
                ))}
              </div>
            )}
          </section>
          <div className="space-y-4">
            <CartPanel
              items={items}
              subtotal={subtotal}
              onRemove={removeFromCart}
              onQuantityChange={updateQuantity}
            />
            <CheckoutSection
              subtotal={subtotal}
              onPlaceOrder={handlePlaceOrder}
              cartEmpty={items.length === 0}
            />
          </div>
        </div>
        <DemoDisclaimer />
      </section>
    </Layout>
  );
};

export default ECommerceDemoPage;

