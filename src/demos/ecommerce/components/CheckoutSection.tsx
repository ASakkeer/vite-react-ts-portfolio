// Checkout UI for the ecommerce demo (shipping form + order summary).
import type { FC, FormEvent } from "react";
import { useState } from "react";

interface CheckoutSectionProps {
  subtotal: number;
  onPlaceOrder: () => void;
  cartEmpty: boolean;
}

export const CheckoutSection: FC<CheckoutSectionProps> = ({
  subtotal,
  onPlaceOrder,
  cartEmpty,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; address?: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    if (cartEmpty) {
      setErrors({ name: "Cart is empty. Add items before checkout." });
      return;
    }

    const newErrors: { name?: string; email?: string; address?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Shipping address is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    onPlaceOrder();
    setFormData({ name: "", email: "", address: "" });
    setSuccess(true);
    setLoading(false);
    
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <header className="mb-3">
        <h2 className="text-sm font-semibold text-slate-900">Checkout</h2>
        <p className="text-xs text-slate-600">
          Shipping information is collected for demo purposes only. No payment is processed.
        </p>
      </header>
      {success ? (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          <p className="font-semibold">Order placed successfully!</p>
          <p className="mt-1 text-xs">
            Your order has been received. This is a demo—no real order was placed.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="checkout-name" className="text-xs font-medium text-slate-800">
                Full name
              </label>
              <input
                id="checkout-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full rounded-lg border px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                    : "border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600">{errors.name}</p>
              )}
            </div>
            <div className="space-y-1">
              <label htmlFor="checkout-email" className="text-xs font-medium text-slate-800">
                Email
              </label>
              <input
                id="checkout-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full rounded-lg border px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                    : "border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="checkout-address" className="text-xs font-medium text-slate-800">
              Shipping address
            </label>
            <textarea
              id="checkout-address"
              name="address"
              rows={3}
              value={formData.address}
              onChange={handleChange}
              required
              className={`w-full rounded-lg border px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                errors.address
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                  : "border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20"
              }`}
            />
            {errors.address && (
              <p className="text-xs text-red-600">{errors.address}</p>
            )}
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
              disabled={loading || cartEmpty}
              className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1d4ed8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Processing..." : "Place Order (Mock)"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default CheckoutSection;

