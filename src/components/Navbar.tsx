"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  UtensilsCrossed,
  ShoppingBag,
  Menu as MenuIcon,
  X,
  Sparkles,
  Phone,
  Clock,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple clean max 4 navigation sections, concluding with Order Booking
  const navLinks = [
    { label: "Story", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Combos", href: "#tasting" },
    { label: "Order Booking", href: "#reservation" },
  ];

  return (
    <>
      {/* Streamlined Main Navbar */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-stone-200/90 py-3 shadow-xs"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-stone-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border border-amber-600/30 bg-amber-500/10 flex items-center justify-center text-amber-700 group-hover:border-amber-600 group-hover:scale-105 transition-all duration-300">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                The Golden Star
              </span>
              <span className="hidden sm:block text-[10px] tracking-[0.2em] text-stone-500 uppercase font-semibold">
                Craft Kitchen &amp; Grill
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Max 4 clean items) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-700 hover:text-amber-700 transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Cart / Order & Booking */}
          <div className="flex items-center gap-3">
            {/* Cart / Order Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800 hover:text-amber-700 transition-all duration-300 cursor-pointer"
              aria-label="View Order Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Quick Order Button */}
            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-600 rounded-full shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Order Online
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-800 hover:text-amber-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-[60px] left-0 w-full bg-white/98 backdrop-blur-xl border-b border-stone-200 z-30 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold tracking-wide text-stone-900 hover:text-amber-700 transition-colors border-b border-stone-100 pb-3"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="#reservation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-600 transition-all"
                >
                  Order Booking
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
