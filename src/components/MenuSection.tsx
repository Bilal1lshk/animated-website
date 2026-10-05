"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  Search,
  Plus,
  Check,
  Wine,
  Sparkles,
  Flame,
  Leaf,
} from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/restaurantData";
import { useCart } from "@/context/CartContext";

type CategoryFilter = "all" | "starters" | "mains" | "pasta" | "grill" | "desserts" | "drinks";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<string>("all");
  const { addToCart, recentlyAddedId } = useCart();

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: "All Curations" },
    { key: "starters", label: "Starters & Raw" },
    { key: "mains", label: "Chef's Mains" },
    { key: "pasta", label: "Handcrafted Pasta" },
    { key: "grill", label: "Charcoal & Grill" },
    { key: "desserts", label: "Desserts" },
    { key: "drinks", label: "Cocktails & Cellar" },
  ];

  const dietaryOptions = [
    { key: "all", label: "All Items" },
    { key: "Chef's Signature", label: "Chef's Signatures" },
    { key: "Vegetarian", label: "Vegetarian" },
    { key: "Gluten-Free", label: "Gluten-Free" },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDietary =
        dietaryFilter === "all" ||
        item.tags.some((t) => t.toLowerCase() === dietaryFilter.toLowerCase()) ||
        (dietaryFilter === "Chef's Signature" && item.isChefSpecial);

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-24 sm:py-32 relative bg-black overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            <span>À La Carte & Curations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
            The Autumn Gastronomy{" "}
            <span className="italic text-gold-gradient">Collection</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light">
            Every dish is conceptualized around peak-season provenance, cooked with elemental flame,
            and plated with surgical precision.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Top Category Buttons */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-amber-400 text-[#0d0e12] font-semibold shadow-lg shadow-amber-500/20 scale-105"
                      : "bg-stone-900/60 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Filter: Search & Dietary Filter Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-stone-800/60">
            {/* Dietary Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-xs text-stone-400 uppercase tracking-widest hidden md:inline mr-1">
                Filter:
              </span>
              {dietaryOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setDietaryFilter(opt.key)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                    dietaryFilter === opt.key
                      ? "border-amber-400/80 bg-amber-500/15 text-amber-300"
                      : "border-stone-800 bg-stone-900/40 text-stone-400 hover:text-stone-200"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dish or ingredient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-stone-900/60 border border-stone-800 rounded-full text-xs text-stone-200 placeholder:text-stone-400 focus:outline-none focus:border-amber-400/60 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-stone-900/30 rounded-3xl border border-stone-800/60">
            <Utensils className="w-10 h-10 text-stone-400 mx-auto mb-4" />
            <p className="text-stone-300 font-serif text-lg">No dishes found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietaryFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 text-xs uppercase tracking-wider text-amber-400 hover:text-amber-300 underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-3xl glass-panel border border-stone-800/80 hover:border-amber-400/40 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
                >
                  <div>
                    {/* Dish Image Banner */}
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#15161d] via-black/30 to-transparent" />

                      {/* Tag Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.isChefSpecial && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-400 text-black shadow-md">
                            <Sparkles className="w-3 h-3" /> Special
                          </span>
                        )}
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-stone-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Price Pill */}
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#0d0e12]/85 backdrop-blur-md border border-amber-400/30 text-amber-300 font-serif text-lg font-bold">
                        ${item.price}
                      </div>
                    </div>

                    {/* Dish Info Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl text-stone-100 font-medium group-hover:text-amber-200 transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Wine Pairing recommendation if present */}
                      {item.winePairing && (
                        <div className="p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/15 mb-4 flex items-start gap-2 text-xs text-amber-300/80">
                          <Wine className="w-3.5 h-3.5 flex-shrink-0 text-amber-400 mt-0.5" />
                          <span className="leading-tight">
                            <strong className="text-amber-200 font-normal">Sommelier Note:</strong>{" "}
                            {item.winePairing}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Metadata & Add Button */}
                  <div className="px-6 pb-6 pt-2 border-t border-stone-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[11px] text-stone-400">
                      {item.prepTime && (
                        <span className="flex items-center gap-1">
                          <Flame className="w-3 h-3 text-amber-500" />
                          {item.prepTime}
                        </span>
                      )}
                      {item.calories && <span>{item.calories} kcal</span>}
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        recentlyAddedId === item.id
                          ? "bg-emerald-500 text-white"
                          : "bg-amber-400 hover:bg-amber-300 text-black shadow-md hover:shadow-amber-500/20"
                      }`}
                    >
                      {recentlyAddedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> Add
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
