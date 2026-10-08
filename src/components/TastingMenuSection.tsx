"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  GlassWater,
  ShoppingBag,
  Check,
  Flame,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import Tag from "@/components/Tag";
import { TASTING_COURSES, MenuItem } from "@/data/restaurantData";
import { useCart } from "@/context/CartContext";

const courseImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80", // Truffle Fries
  2: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80", // Double Smokehouse
  3: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80", // BBQ Wings
  4: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80", // Lava Cake
  5: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80", // Pretzel Shake
};

export default function TastingMenuSection() {
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const currentCourse = TASTING_COURSES[activeCourseIdx];
  const { addToCart, recentlyAddedId } = useCart();

  const tiers = [
    {
      id: "combo-classic",
      title: "Classic Set",
      subtitle: "Single Diner • Quick Lunch",
      price: 24,
      savings: "Save $6 vs à la carte",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      drinkTier: "Includes Choice of Craft Drink",
      description:
        "Single flame-grilled cheeseburger, seasoned shoestring fries, and a fresh soda or iced tea.",
      itemsIncluded: [
        "Single Flame-Grilled Cheeseburger",
        "Crispy Herb Shoestring Fries",
        "Choice of Craft Soda or Fresh Iced Tea",
      ],
      popular: false,
    },
    {
      id: "combo-smokehouse",
      title: "Double Smokehouse Set",
      subtitle: "Customer Favorite • Hearty Meal",
      price: 32,
      savings: "Save $10 vs à la carte • Best Value",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
      drinkTier: "Includes Loaded Fries & Milkshake",
      description:
        "Double prime beef burger, crispy bacon, loaded cheese fries, and handspun milkshake.",
      itemsIncluded: [
        "Double Prime Beef & Smoked Bacon Burger",
        "Golden Loaded Cheddar Cheese Fries",
        "Handspun Madagascar Vanilla Milkshake",
      ],
      popular: true,
    },
    {
      id: "combo-feast",
      title: "The Ultimate Feast",
      subtitle: "Epic Spread • Shareable for 2",
      price: 45,
      savings: "Save $16 vs à la carte • Feast for 2",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      drinkTier: "Includes Starter, Wings, Burger & Shake",
      description:
        "Truffle burger, BBQ chicken wings, loaded fries, chocolate lava cake, and specialty shake.",
      itemsIncluded: [
        "Truffle Prime Beef Burger",
        "6x Honey BBQ Flame-Grilled Wings",
        "Loaded Fries & Warm Lava Cake",
        "Choice of Specialty Craft Shake",
      ],
      popular: false,
    },
  ];

  const handleAddCombo = (tier: (typeof tiers)[0]) => {
    const item: MenuItem = {
      id: tier.id,
      name: tier.title,
      price: tier.price,
      category: "mains",
      image: tier.image,
      description: tier.description,
      tags: ["Combo Meal", tier.popular ? "Best Value" : "Special Set"],
    };
    addToCart(item);
  };

  return (
    <section id="tasting" className="py-20 sm:py-28 relative bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <Eyebrow withLine>Combos and feasts</Eyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-3">
            Combo Meals
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Curated combinations featuring our top-rated flame-grilled burgers, loaded sides,
            and handcrafted drinks. Save up to 25% compared to individual items.
          </p>
        </div>

        {/* Pricing & Meal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {tiers.map((tier) => {
            const isAdded = recentlyAddedId === tier.id;
            return (
              <motion.div
                key={tier.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl bg-white flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  tier.popular
                    ? "border-2 border-amber-500 shadow-xl z-10 lg:-translate-y-2"
                    : "border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80"
                }`}
              >
                {/* Popular Tag (Clean 6px radius, no glows) */}
                {tier.popular && (
                  <div className="absolute top-3 right-3 z-20">
                    <Tag variant="accent">Popular</Tag>
                  </div>
                )}

                <div>
                  {/* Card Food Image Banner */}
                  <div className="relative w-full h-52 overflow-hidden bg-stone-100">
                    <Image
                      src={tier.image}
                      alt={tier.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    
                    {/* Bottom Tag on Image */}
                    <div className="absolute bottom-3 left-3">
                      <Tag variant="dark">{tier.subtitle}</Tag>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Title & Price Header */}
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                        {tier.title}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                          ${tier.price}
                        </span>
                        <span className="text-stone-500 text-xs font-medium">/ set</span>
                      </div>
                    </div>

                    {/* Savings Tag */}
                    <div className="mb-4">
                      <Tag variant="success">{tier.savings}</Tag>
                    </div>

                    {/* Drink Tier Highlight */}
                    <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 mb-5 flex items-center gap-2 text-xs text-amber-900 font-medium">
                      <GlassWater className="w-4 h-4 text-amber-700 flex-shrink-0" />
                      <span>{tier.drinkTier}</span>
                    </div>

                    {/* Itemized Feature Checklist */}
                    <div className="space-y-2.5 mb-6 pt-3 border-t border-stone-100">
                      <div className="text-xs text-stone-500 font-medium mb-2">
                        Included in this combo:
                      </div>
                      {tier.itemsIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 sm:p-7 pt-0 flex flex-col gap-2.5">
                  <button
                    onClick={() => handleAddCombo(tier)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                      isAdded
                        ? "bg-emerald-600 text-white"
                        : tier.popular
                        ? "bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:scale-[1.02]"
                        : "bg-stone-900 hover:bg-stone-800 text-white hover:scale-[1.02]"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" /> Added to Order
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" /> Add Combo to Order
                      </>
                    )}
                  </button>

                  <a
                    href="#reservation"
                    className="text-center text-xs font-semibold text-stone-600 hover:text-amber-700 transition-colors py-1"
                  >
                    Reserve Table for This Combo &rarr;
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Combo Signature Dish Highlights (Interactive Taste Viewer) */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 border border-stone-200/90 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              Inside Our Signature Sets
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Tap any item below to explore the freshly ground prime ingredients and preparation notes.
            </p>
          </div>

          {/* Responsive Course Selector Tabs */}
          {/* Mobile / Tablet Horizontal Scrollable Pills */}
          <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-4 mb-6 w-full scrollbar-none">
            {TASTING_COURSES.map((course, idx) => {
              const isActive = activeCourseIdx === idx;
              return (
                <button
                  key={course.courseNumber}
                  onClick={() => setActiveCourseIdx(idx)}
                  className={`px-3.5 py-2 rounded-[6px] text-xs font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 border flex-shrink-0 ${
                    isActive
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white text-stone-700 hover:bg-stone-50 border-stone-200"
                  }`}
                >
                  <span className={isActive ? "text-stone-300" : "text-stone-500 font-medium"}>
                    0{course.courseNumber}
                  </span>
                  <span>{course.title}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Desktop Left Column: Full-width clean vertical selector cards */}
            <div className="hidden lg:flex lg:w-1/3 flex-col gap-2.5 w-full">
              {TASTING_COURSES.map((course, idx) => {
                const isActive = activeCourseIdx === idx;
                return (
                  <button
                    key={course.courseNumber}
                    onClick={() => setActiveCourseIdx(idx)}
                    className={`text-left p-4 rounded-2xl transition-all duration-300 cursor-pointer w-full flex items-center justify-between border ${
                      isActive
                        ? "bg-amber-500/10 border-amber-600 text-stone-900 shadow-xs"
                        : "bg-stone-50/80 border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                    }`}
                  >
                    <div className="pr-2">
                      <div className="text-xs text-stone-500 font-medium mb-1">
                        Item 0{course.courseNumber} • {course.title}
                      </div>
                      <div className="text-sm font-semibold text-stone-900 leading-snug">
                        {course.dishName}
                      </div>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        isActive ? "bg-amber-600" : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Animated Display with Dish Image & Details */}
            <div className="w-full lg:w-2/3 bg-[#faf9f6] rounded-2xl p-6 sm:p-8 border border-stone-200 min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCourse.courseNumber}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Dish Image Banner in Detail View */}
                  <div className="relative w-full h-44 sm:h-56 rounded-xl overflow-hidden mb-5 border border-stone-200 bg-stone-100">
                    <Image
                      src={courseImages[currentCourse.courseNumber] || tiers[0].image}
                      alt={currentCourse.dishName}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <Tag variant="dark">
                        Item 0{currentCourse.courseNumber} • {currentCourse.title}
                      </Tag>
                    </div>
                  </div>

                  <h4 className="text-2xl sm:text-3xl text-stone-900 font-bold tracking-tight mb-3">
                    {currentCourse.dishName}
                  </h4>

                  <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                    {currentCourse.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-stone-200">
                    <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                      <div className="flex items-center gap-2 text-stone-500 text-xs font-medium mb-1">
                        <GlassWater className="w-3.5 h-3.5 text-stone-600" /> Pairing recommendation
                      </div>
                      <div className="text-stone-900 text-xs sm:text-sm font-semibold">
                        {currentCourse.winePairing}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                      <div className="flex items-center gap-2 text-stone-500 text-xs font-medium mb-1">
                        <Flame className="w-3.5 h-3.5 text-stone-600" /> Sourcing &amp; preparation
                      </div>
                      <div className="text-stone-900 text-xs sm:text-sm font-semibold">
                        {currentCourse.origin}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
