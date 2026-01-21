// Checkout UI for the ecommerce demo (shipping form + order summary).
import type { FC, FormEvent } from "react";

interface CheckoutSectionProps {
  subtotal: number;
  onPlaceOrder: () => void;
}

export const CheckoutSection: FC<CheckoutSectionProps> = ({ subtotal, onPlaceOrder }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onPlaceOrder();
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <header className="mb-3">
        <h2 className="text-sm font-semibold text-slate-900">Checkout</h2>
        <p className="text-xs text-slate-600">
          Shipping information is collected for demo purposes only. No payment is processed.
        </p>
      </header>
      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="checkout-name" className="text-xs font-medium text-slate-800">
              Full name
            </label>
            <input
              id="checkout-name"
              type="text"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="checkout-email" className="text-xs font-medium text-slate-800">
              Email
            </label>
            <input
              id="checkout-email"
              type="email"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="checkout-address" className="text-xs font-medium text-slate-800">
            Shipping address
          </label>
          <textarea
            id="checkout-address"
            rows={3}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-sm">
          <p className="font-semibold text-slate-900">Order total</p>
          <p className="font-semibold text-slate-900">
            ${subtotal.toLocaleString("en-US")}
          </p>
        </div>
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
          >
            Place Order (Mock)
          </button>
        </div>
      </form>
    </section>
  );
};

export default CheckoutSection;

