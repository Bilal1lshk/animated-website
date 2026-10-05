"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal,
    tax,
    serviceCharge,
    total,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "processing" | "success">("cart");
  const [tableNumber, setTableNumber] = useState("Dine-In Table");

  const handleCheckout = () => {
    setCheckoutStep("processing");
    setTimeout(() => {
      setCheckoutStep("success");
    }, 1000);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    if (checkoutStep === "success") {
      clearCart();
      setCheckoutStep("cart");
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-white border-l border-stone-200 text-stone-900 flex flex-col justify-between shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-stone-900">Your Order</h2>
                    <span className="text-xs text-stone-500">
                      {totalItems} {totalItems === 1 ? "item" : "items"} in cart
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {checkoutStep === "processing" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <Sparkles className="w-10 h-10 text-amber-600 animate-spin mb-4" />
                    <h3 className="text-xl font-bold text-stone-900">Sending Order to Kitchen...</h3>
                    <p className="text-xs text-stone-500 mt-2">
                      Please wait a moment while we send your ticket.
                    </p>
                  </div>
                ) : checkoutStep === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
                      Order Confirmed
                    </span>
                    <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3">
                      Order Placed Successfully!
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed max-w-xs mb-8">
                      Your order has been received by our grill team and is being cooked fresh to order.
                    </p>

                    <div className="w-full bg-[#faf9f6] rounded-2xl p-4 border border-stone-200 text-xs text-left mb-6">
                      <div className="flex justify-between py-1.5 border-b border-stone-200">
                        <span className="text-stone-500">Service Option:</span>
                        <span className="text-stone-900 font-semibold">{tableNumber}</span>
                      </div>
                      <div className="flex justify-between py-1.5 pt-2">
                        <span className="text-stone-500">Total:</span>
                        <span className="text-stone-900 font-bold text-sm">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleClose}
                      className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer"
                    >
                      Done &amp; Return
                    </button>
                  </div>
                ) : items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 text-stone-400">
                    <ShoppingBag className="w-12 h-12 text-stone-300 mb-4 stroke-[1.5]" />
                    <h3 className="text-lg font-bold text-stone-800 mb-2">Your Cart is Empty</h3>
                    <p className="text-xs text-stone-500 max-w-xs mb-6">
                      Explore our menu and add burgers, sides, and shakes to your order.
                    </p>
                    <a
                      href="#menu"
                      onClick={handleClose}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-600 transition-colors"
                    >
                      Browse Menu
                    </a>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map(({ item, quantity }) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-3.5 rounded-2xl bg-[#faf9f6] border border-stone-200 items-center justify-between shadow-xs"
                      >
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-stone-200">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0 pr-2">
                          <h4 className="text-sm text-stone-900 font-semibold truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs text-amber-800 font-bold">
                            ${item.price} each
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center bg-white rounded-lg border border-stone-200 shadow-xs">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2 text-xs font-medium text-stone-800">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 text-stone-400 hover:text-rose-500 transition-colors cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="pt-2 flex justify-between">
                      <button
                        onClick={clearCart}
                        className="text-[11px] text-stone-400 hover:text-rose-500 underline cursor-pointer"
                      >
                        Clear cart
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer Calculations */}
              {items.length > 0 && checkoutStep === "cart" && (
                <div className="p-6 border-t border-stone-200 bg-white space-y-4">
                  <div className="space-y-1.5 text-xs text-stone-500">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-stone-900 font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sales Tax (8%)</span>
                      <span className="text-stone-900 font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Fee</span>
                      <span className="text-stone-900 font-medium">${serviceCharge.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-100">
                      <span>Total</span>
                      <span className="text-amber-800">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Dining Location selector */}
                  <div className="pt-1">
                    <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-medium">
                      Order / Dining Type
                    </label>
                    <select
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full bg-[#faf9f6] border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-600"
                    >
                      <option value="Dine-In Table">Dine-In Table</option>
                      <option value="Takeaway / Pickup">Takeaway / Pickup</option>
                      <option value="Outdoor Patio">Outdoor Patio</option>
                      <option value="Curbside Pickup">Curbside Pickup</option>
                    </select>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-600 shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                  >
                    <span>Place Order (${total.toFixed(2)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
