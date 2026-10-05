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
  const [tableNumber, setTableNumber] = useState("Table 14 - Salon");

  const handleCheckout = () => {
    setCheckoutStep("processing");
    setTimeout(() => {
      setCheckoutStep("success");
    }, 1200);
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
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
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
                    <h2 className="font-serif text-lg font-medium text-stone-900">Your Tasting Order</h2>
                    <span className="text-xs text-stone-500">
                      {totalItems} {totalItems === 1 ? "item" : "items"} selected
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
                    <Sparkles className="w-10 h-10 text-amber-500 animate-spin mb-4" />
                    <h3 className="font-serif text-xl text-stone-900">Transmitting to the Kitchen...</h3>
                    <p className="text-xs text-stone-500 mt-2">
                      Chef Laurent is reviewing your order course progression.
                    </p>
                  </div>
                ) : checkoutStep === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-amber-600 font-mono font-medium">
                      Order Received
                    </span>
                    <h3 className="font-serif text-2xl text-stone-900 mt-2 mb-3">
                      The Kitchen Has Begun Preparation
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed max-w-xs mb-8">
                      Your order ticket has been forwarded to the kitchen pass. A sommelier will arrive shortly with your paired vintage.
                    </p>

                    <div className="w-full bg-[#faf9f6] rounded-2xl p-4 border border-stone-200 text-xs text-left mb-6">
                      <div className="flex justify-between py-1 border-b border-stone-200">
                        <span className="text-stone-500">Target Station:</span>
                        <span className="text-stone-800 font-medium">{tableNumber}</span>
                      </div>
                      <div className="flex justify-between py-1 pt-2">
                        <span className="text-stone-500">Total Billed:</span>
                        <span className="text-stone-900 font-serif font-bold text-sm">${total.toFixed(2)}</span>
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
                    <h3 className="font-serif text-xl text-stone-800 mb-2">Your Order Is Empty</h3>
                    <p className="text-xs text-stone-500 max-w-xs mb-6">
                      Explore our à la carte signatures and curate your tasting experience.
                    </p>
                    <a
                      href="#menu"
                      onClick={handleClose}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-amber-500 hover:bg-amber-600 transition-colors"
                    >
                      View Menu
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
                          <h4 className="font-serif text-sm text-stone-900 font-medium truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs text-amber-700 font-semibold font-serif">
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
                            <span className="px-2 text-xs font-mono text-stone-800 font-medium">
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
                        Clear all items
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
                      <span>State &amp; Local Tax (8.875%)</span>
                      <span className="text-stone-900 font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sommelier &amp; Kitchen Gratuity (12%)</span>
                      <span className="text-stone-900 font-medium">${serviceCharge.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-serif font-bold text-stone-900 pt-2 border-t border-stone-100">
                      <span>Grand Total</span>
                      <span className="text-amber-700">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Dining Location selector */}
                  <div className="pt-1">
                    <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-1">
                      Dining Table / Service Option
                    </label>
                    <select
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full bg-[#faf9f6] border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-500"
                    >
                      <option value="Table 14 - Main Dining Salon">Table 14 - Main Dining Salon</option>
                      <option value="Chef's Counter - Seat 4">Chef&apos;s Counter - Seat 4</option>
                      <option value="Garden Terrace - Table 08">Garden Terrace - Table 08</option>
                      <option value="Takeaway Concierge Packaging">Private Takeaway Concierge Box</option>
                    </select>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-600 hover:to-amber-700 shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                  >
                    <span>Transmit Order to Kitchen</span>
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
