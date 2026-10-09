"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  ShoppingBag,
  Clock,
  Plus,
  Minus,
  CheckCircle2,
  X,
  ArrowRight,
  Bike,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import Tag from "@/components/Tag";
import { useCart } from "@/context/CartContext";
import { MENU_ITEMS, MenuItem } from "@/data/restaurantData";

export default function ReservationSection() {
  const {
    items,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    tax,
    total,
  } = useCart();

  const [orderType, setOrderType] = useState<"pickup" | "delivery" | "dinein">("pickup");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [timeSlot, setTimeSlot] = useState("ASAP (15–20 mins)");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    name: string;
    phone: string;
    orderType: string;
    address?: string;
    timeSlot: string;
    total: number;
    itemCount: number;
  } | null>(null);

  // Quick items to display if cart is empty
  const quickItems = MENU_ITEMS.slice(0, 4);

  const handleQuickAdd = (item: MenuItem) => {
    addToCart(item);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    if (items.length === 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const orderId = "GS-" + Math.floor(100000 + Math.random() * 900000);
      setConfirmedOrder({
        orderId,
        name,
        phone,
        orderType:
          orderType === "pickup"
            ? "Takeaway / Pickup"
            : orderType === "delivery"
            ? "Local Delivery"
            : "Dine-In Quick Order",
        address: orderType === "delivery" ? address : undefined,
        timeSlot,
        total,
        itemCount: items.reduce((sum, i) => sum + i.quantity, 0),
      });

      try {
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.6 },
          colors: ["#b48c1e", "#d97706", "#1c1917"],
        });
      } catch {
        // ignore
      }
    }, 700);
  };

  const handleReset = () => {
    setConfirmedOrder(null);
    clearCart();
    setName("");
    setPhone("");
    setAddress("");
    setNotes("");
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 relative bg-white overflow-hidden scroll-mt-12">
      {/* Anchor for #order links */}
      <div id="order" className="absolute -top-16" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-3">
            Place Your Order
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Order fresh flame-grilled burgers, loaded fries, and craft shakes for fast pickup or delivery.
          </p>
        </motion.div>

        {/* Order Booking Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#faf9f6] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs"
        >
          {/* Step 1: Order Type Selector */}
          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
              1. Choose Order Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setOrderType("pickup")}
                className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  orderType === "pickup"
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-700 border-stone-200 hover:border-amber-500"
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Pickup / Takeaway</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType("delivery")}
                className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  orderType === "delivery"
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-700 border-stone-200 hover:border-amber-500"
                }`}
              >
                <Bike className="w-4 h-4" />
                <span>Local Delivery</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType("dinein")}
                className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  orderType === "dinein"
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-700 border-stone-200 hover:border-amber-500"
                }`}
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Dine-In Quick Order</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Order Items Selection */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  2. Your Order Items ({items.length})
                </label>
                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-stone-400 hover:text-rose-600 underline cursor-pointer"
                  >
                    Clear items
                  </button>
                )}
              </div>

              {items.length === 0 ? (
                <div className="bg-white rounded-2xl p-6 border border-dashed border-stone-300 text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mx-auto mb-3">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-stone-900 mb-1">
                    Your order is empty
                  </h4>
                  <p className="text-xs text-stone-500 mb-4">
                    Tap a popular item below to add it immediately, or browse our menu.
                  </p>

                  {/* Quick-add popular items */}
                  <div className="space-y-2 text-left">
                    {quickItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#faf9f6] border border-stone-200 hover:border-amber-400 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden relative flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-stone-900">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-amber-800 font-bold">
                              ${item.price}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleQuickAdd(item)}
                          className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#menu"
                    className="inline-block mt-4 text-xs font-semibold text-amber-700 hover:text-amber-800 underline uppercase tracking-wider"
                  >
                    Browse Full Menu &rarr;
                  </a>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-4 border border-stone-200 divide-y divide-stone-100 max-h-80 overflow-y-auto">
                  {items.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-xl overflow-hidden relative flex-shrink-0 border border-stone-200">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="truncate">
                          <h4 className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs text-amber-800 font-bold">
                            ${(item.price * quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-lg p-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-1.5 text-xs font-bold text-stone-900">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="pt-3 flex justify-between items-center text-xs">
                    <a
                      href="#menu"
                      className="text-amber-700 hover:text-amber-800 font-medium underline"
                    >
                      + Add more items from menu
                    </a>
                    <span className="text-stone-500">
                      Subtotal: <strong className="text-stone-900">${subtotal.toFixed(2)}</strong>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Customer Details & Submit */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                  3. Contact &amp; Timing Details
                </label>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (555) 234-5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                {/* Delivery Address (if delivery) */}
                {orderType === "delivery" && (
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street address, apartment or suite number"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                )}

                {/* Preferred Ready Time */}
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  >
                    <option value="ASAP (15–20 mins)">ASAP (15–20 mins)</option>
                    <option value="In 30 mins">In 30 mins</option>
                    <option value="In 45 mins">In 45 mins</option>
                    <option value="In 1 hour">In 1 hour</option>
                    <option value="Lunch: 12:30 PM">Lunch: 12:30 PM</option>
                    <option value="Lunch: 1:30 PM">Lunch: 1:30 PM</option>
                    <option value="Dinner: 6:00 PM">Dinner: 6:00 PM</option>
                    <option value="Dinner: 7:00 PM">Dinner: 7:00 PM</option>
                    <option value="Dinner: 8:00 PM">Dinner: 8:00 PM</option>
                  </select>
                </div>

                {/* Order Notes */}
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1">
                    Kitchen Notes / Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Extra sauce, no onions, cutlery needed"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                {/* Price Breakdown */}
                <div className="bg-white rounded-2xl p-4 border border-stone-200 text-xs space-y-1.5 pt-3">
                  <div className="flex justify-between text-stone-500">
                    <span>Subtotal:</span>
                    <span className="text-stone-900 font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>Estimated Tax (8%):</span>
                    <span className="text-stone-900 font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-100">
                    <span>Total Amount:</span>
                    <span className="text-amber-800">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || items.length === 0}
                  className="w-full py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-600 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Submitting Order...</span>
                  ) : items.length === 0 ? (
                    <span>Add Items to Place Order</span>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Confirm Order Booking (${total.toFixed(2)})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xl text-stone-900 text-center"
            >
              <button
                onClick={handleReset}
                className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="mb-2">
                <Tag variant="success">Order received</Tag>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mt-1 mb-2">
                Order Placed Successfully!
              </h3>
              <p className="text-xs text-stone-600 mb-6">
                Our kitchen is firing up the grill. Confirmation SMS sent to {confirmedOrder.phone}.
              </p>

              <div className="bg-[#faf9f6] rounded-2xl p-4 border border-stone-200 text-xs text-left space-y-2 mb-6">
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span className="text-stone-500">Order ID:</span>
                  <span className="font-mono font-bold text-amber-800">{confirmedOrder.orderId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span className="text-stone-500">Customer:</span>
                  <span className="font-semibold text-stone-900">{confirmedOrder.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span className="text-stone-500">Order Type:</span>
                  <span className="font-medium text-stone-900">{confirmedOrder.orderType}</span>
                </div>
                {confirmedOrder.address && (
                  <div className="flex justify-between py-1 border-b border-stone-200">
                    <span className="text-stone-500">Deliver To:</span>
                    <span className="font-medium text-stone-900 truncate max-w-[200px]">{confirmedOrder.address}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span className="text-stone-500">Estimated Ready:</span>
                  <span className="font-medium text-stone-900">{confirmedOrder.timeSlot}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Total Billed:</span>
                  <span className="font-bold text-stone-900 text-sm">${confirmedOrder.total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Done &amp; Order More
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
