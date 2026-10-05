"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "@/data/restaurantData";

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (item: MenuItem, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  tax: number;
  serviceCharge: number;
  total: number;
  recentlyAddedId: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  // Restore cart from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem("letoile_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("letoile_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = (item: MenuItem, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { item, quantity }];
    });

    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 2000);
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce(
    (acc, curr) => acc + curr.item.price * curr.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.08875 * 100) / 100;
  const serviceCharge = Math.round(subtotal * 0.12 * 100) / 100;
  const total = Math.round((subtotal + tax + serviceCharge) * 100) / 100;

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        tax,
        serviceCharge,
        total,
        recentlyAddedId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
