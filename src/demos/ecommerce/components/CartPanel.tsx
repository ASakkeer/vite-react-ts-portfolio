// Cart panel for viewing and updating items in the ecommerce demo.
import type { FC } from "react";
import type { CartItem } from "../hooks/useCart";

interface CartPanelProps {
  items: (CartItem & { product?: { name: string; price: number }; lineTotal: number })[];
  subtotal: number;
  onRemove: (productId: string) => void;
  onQuantityChange: (productId: string, quantity: number) => void;
}

export const CartPanel: FC<CartPanelProps> = ({
  items,
  subtotal,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <header className="mb-3 flex items-baseline justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Cart</h2>
          <p className="text-xs text-slate-600">
            Review items before placing a mock order. No payment is processed.
          </p>
        </div>
      </header>
      {items.length === 0 ? (
        <p className="text-xs text-slate-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-3 text-sm text-slate-700">
            {items.map((item) =>
              !item.product ? null : (
                <li
                  key={item.productId}
                  className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{item.product.name}</p>
                    <p className="text-xs text-slate-500">
                      ${item.product.price.toLocaleString("en-US")} each
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-xs">
                      <label htmlFor={`qty-${item.productId}`} className="text-slate-600">
                        Qty:
                      </label>
                      <input
                        id={`qty-${item.productId}`}
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(event) =>
                          onQuantityChange(item.productId, Number(event.target.value))
                        }
                        className="w-16 rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                      />
                      <button
                        type="button"
                        onClick={() => onRemove(item.productId)}
                        className="ml-2 text-xs font-medium text-red-600 underline-offset-2 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    ${item.lineTotal.toLocaleString("en-US")}
                  </p>
                </li>
              ),
            )}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-2 text-sm">
            <p className="font-semibold text-slate-900">Subtotal</p>
            <p className="font-semibold text-slate-900">
              ${subtotal.toLocaleString("en-US")}
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPanel;

