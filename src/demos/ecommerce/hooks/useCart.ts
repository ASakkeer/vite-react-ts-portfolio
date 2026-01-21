// Local cart state management hook for the ecommerce demo.
import { useState } from "react";
import products from "../data/products.json";

type Product = (typeof products)[number];

export interface CartItem {
  productId: string;
  quantity: number;
}

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (productId: string) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...current, { productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((current) => current.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.round(quantity) } : item,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const detailedItems = items.map((item) => {
    const product = products.find((p) => p.id === item.productId) as Product | undefined;
    return {
      ...item,
      product,
      lineTotal: product ? product.price * item.quantity : 0,
    };
  });

  const subtotal = detailedItems.reduce((sum, item) => sum + item.lineTotal, 0);

  return {
    items: detailedItems,
    subtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
};

