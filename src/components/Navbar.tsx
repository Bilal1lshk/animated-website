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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Tasting Journey", href: "#tasting" },
    { label: "Reserve", href: "#reservation" },
    { label: "Reviews", href: "#reviews" },
    { label: "Atmosphere", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-black border-b border-stone-900 text-xs py-2 px-4 text-stone-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Michelin Guide Selected 2026 • Curated Wine Pairing Experience</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Dinner service tonight: 6:00 PM – 11:30 PM
            </span>
            <a
              href="tel:+12125558392"
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> +1 (212) 555-8392
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-black/80"
            : "bg-black/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-amber-400/40 bg-gradient-to-br from-amber-500/20 to-stone-900/60 flex items-center justify-center text-amber-300 group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-amber-100 group-hover:text-amber-300 transition-colors">
                L&apos;Étoile Dorée
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-amber-400/70 uppercase">
                Haute Gastronomie
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-amber-300 transition-colors tracking-wide relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full border border-stone-700/60 bg-stone-900/60 hover:bg-stone-800 text-stone-200 hover:text-amber-300 hover:border-amber-500/40 transition-all duration-300 cursor-pointer"
              aria-label="View Order"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-500 text-black text-[11px] font-bold flex items-center justify-center shadow-lg"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Book Table Button */}
            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0d0e12] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-full hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Book a Table
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-300 hover:text-amber-300 hover:bg-stone-800/60 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
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
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[60px] left-0 w-full bg-black/98 backdrop-blur-xl border-b border-amber-500/20 z-30 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-wide text-stone-200 hover:text-amber-300 transition-colors border-b border-stone-800/80 pb-3"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#reservation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-[#0d0e12] bg-amber-400 hover:bg-amber-300 transition-all"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
