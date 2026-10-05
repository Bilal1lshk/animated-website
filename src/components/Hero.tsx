"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Star,
  Plus,
  Check,
  Award,
  Wine,
  Flame,
} from "lucide-react";
import { RESTAURANT_INFO, MENU_ITEMS } from "@/data/restaurantData";
import { useCart } from "@/context/CartContext";

export default function Hero() {
  const { addToCart, recentlyAddedId } = useCart();
  const spotlightDishes = MENU_ITEMS.filter((i) => i.isChefSpecial).slice(0, 3);
  const [activeDishIndex, setActiveDishIndex] = useState(0);
  const currentDish = spotlightDishes[activeDishIndex] || spotlightDishes[0];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 bg-[#0d0e12] z-0">
        {/* Soft Radial Amber Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-amber-600/15 via-yellow-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-700/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-stone-700/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Ambient Subtle Grid / Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Michelin Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-amber-300">
                Michelin Guide Recommended • 2026 Season
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.1] mb-6">
              Where Culinary Art{" "}
              <span className="italic font-normal block sm:inline text-gold-gradient">
                Meets Pure Alchemy
              </span>
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8">
              Immerse your senses in a symphony of rare French terroir, artisanal dry-aged meats,
              and Michelin-acclaimed gastronomy. Each plate is an intimate celebration of seasonal
              craftsmanship and heritage vines.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#reservation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-[#0d0e12] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Reserve A Table</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium tracking-wide text-stone-200 border border-stone-700/80 bg-stone-900/40 hover:bg-stone-800/80 hover:border-amber-400/40 transition-all duration-300"
              >
                <span>Explore The Menu</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-stone-800/80 pt-8">
              {RESTAURANT_INFO.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="font-serif text-lg sm:text-xl font-bold text-amber-200">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-stone-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Dish Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/30 via-yellow-500/10 to-amber-600/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

              {/* Dish Showcase Card */}
              <div className="relative rounded-3xl glass-panel p-6 sm:p-7 shadow-2xl border border-white/10">
                {/* Header within card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-xs uppercase tracking-widest text-amber-300/90 font-medium">
                      Tonight&apos;s Feature
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {spotlightDishes.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveDishIndex(idx)}
                        aria-label={`Select dish ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === activeDishIndex ? "w-6 bg-amber-400" : "w-2 bg-stone-700 hover:bg-stone-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Dish Photo with interactive hover zoom */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 group">
                  <Image
                    src={currentDish.image}
                    alt={currentDish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3 bg-[#0d0e12]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/40 text-amber-300 font-serif text-lg font-bold">
                    ${currentDish.price}
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-white text-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9</span>
                  </div>
                </div>

                {/* Dish Information */}
                <h3 className="font-serif text-2xl text-stone-100 font-normal mb-2">
                  {currentDish.name}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                  {currentDish.description}
                </p>

                {/* Pairing Note */}
                {currentDish.winePairing && (
                  <div className="flex items-center gap-2 text-xs text-amber-300/80 bg-amber-500/10 px-3 py-2 rounded-xl mb-5 border border-amber-500/20">
                    <Wine className="w-3.5 h-3.5 flex-shrink-0 text-amber-400" />
                    <span className="truncate">Pairing: {currentDish.winePairing}</span>
                  </div>
                )}

                {/* Add to Order Quick Action */}
                <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span>{currentDish.prepTime} table preparation</span>
                  </div>

                  <button
                    onClick={() => addToCart(currentDish)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    {recentlyAddedId === currentDish.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" /> Add to Order
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
