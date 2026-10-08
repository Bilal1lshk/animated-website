"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  Search,
  Plus,
  Check,
  Sparkles,
  Flame,
} from "lucide-react";
import { MENU_ITEMS } from "@/data/restaurantData";
import { useCart } from "@/context/CartContext";

type CategoryFilter = "all" | "starters" | "mains" | "pasta" | "grill" | "desserts" | "drinks";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<string>("all");
  const { addToCart, recentlyAddedId } = useCart();

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: "All Items" },
    { key: "grill", label: "Burgers & Grill" },
    { key: "starters", label: "Sides & Starters" },
    { key: "mains", label: "Chef's Specials" },
    { key: "pasta", label: "Pasta & Bowls" },
    { key: "desserts", label: "Desserts" },
    { key: "drinks", label: "Drinks & Shakes" },
  ];

  const dietaryOptions = [
    { key: "all", label: "All" },
    { key: "Chef's Signature", label: "Popular" },
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
    <section id="menu" className="py-24 sm:py-32 relative bg-white overflow-hidden scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-3">
            Our Menu
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Fresh flame-grilled burgers, crispy loaded sides, desserts, and handcrafted milkshakes.
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
                      ? "bg-stone-900 text-white font-semibold shadow-md scale-105"
                      : "bg-stone-100 text-stone-700 hover:text-stone-900 hover:bg-stone-200 border border-stone-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Filter: Search & Dietary Filter Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
            {/* Dietary Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-xs text-stone-500 uppercase tracking-widest hidden md:inline mr-1">
                Filter:
              </span>
              {dietaryOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setDietaryFilter(opt.key)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                    dietaryFilter === opt.key
                      ? "border-amber-600 bg-amber-50 text-amber-900 font-medium"
                      : "border-stone-200 bg-stone-50 text-stone-600 hover:text-stone-900"
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
                className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-stone-50 rounded-3xl border border-stone-200">
            <Utensils className="w-10 h-10 text-stone-400 mx-auto mb-4" />
            <p className="text-stone-700 text-lg font-medium">No dishes found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietaryFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 text-xs uppercase tracking-wider text-amber-700 hover:text-amber-800 underline"
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
                  className="group rounded-3xl bg-white border border-stone-200/90 hover:border-amber-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 shadow-sm"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Tag Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.isChefSpecial && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500 text-white shadow-md">
                            <Sparkles className="w-3 h-3" /> Special
                          </span>
                        )}
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Price Pill */}
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-stone-900 text-base font-bold shadow-xs">
                        ${item.price}
                      </div>
                    </div>

                    {/* Dish Info Content */}
                    <div className="p-6">
                      <h3 className="text-lg text-stone-900 font-semibold group-hover:text-amber-700 transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Metadata & Add Button */}
                  <div className="px-6 pb-6 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[11px] text-stone-500">
                      {item.prepTime && (
                        <span className="flex items-center gap-1">
                          <Flame className="w-3 h-3 text-amber-600" />
                          {item.prepTime}
                        </span>
                      )}
                      {item.calories && <span>{item.calories} kcal</span>}
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        recentlyAddedId === item.id
                          ? "bg-emerald-600 text-white"
                          : "bg-stone-900 hover:bg-amber-600 text-white shadow-sm"
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
