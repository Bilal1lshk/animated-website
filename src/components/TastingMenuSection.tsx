"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wine, GlassWater, ChevronRight, Award } from "lucide-react";
import { TASTING_COURSES } from "@/data/restaurantData";

export default function TastingMenuSection() {
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const currentCourse = TASTING_COURSES[activeCourseIdx];

  const tiers = [
    {
      title: "Prestige 3-Course",
      price: 145,
      wineTier: "+$85 Sommelier Pairing",
      description: "An essential exploration of signature starters, prime charcoal main, and dessert.",
    },
    {
      title: "Grand 5-Course",
      price: 210,
      wineTier: "+$120 Grand Cru Pairing",
      description: "Our definitive multi-course narrative tracing seasonal land and ocean pairings.",
      popular: true,
    },
    {
      title: "Imperial 7-Course Omakase",
      price: 295,
      wineTier: "+$195 Rare Cellar Vintages",
      description: "Private chef's counter sequence featuring A5 Kagoshima Wagyu & Russian Sturgeon caviar.",
    },
  ];

  return (
    <section id="tasting" className="py-24 sm:py-32 relative bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-600/30 bg-amber-500/10 text-amber-800 text-xs uppercase tracking-[0.16em] font-medium mb-4">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>The Chef&apos;s Table</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            The Sensory Tasting{" "}
            <span className="text-amber-800 font-semibold">Journey</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            An orchestrated progression of contrasting temperatures, delicate textures, and
            sommelier-selected cellar pairings crafted for each seat.
          </p>
        </div>

        {/* Pricing Tiers Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                tier.popular
                  ? "bg-white border-2 border-amber-500 shadow-xl"
                  : "bg-white border border-stone-200 shadow-sm hover:border-amber-400"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  Most Beloved Experience
                </div>
              )}
              <h3 className="text-xl font-bold text-stone-900 mb-2">{tier.title}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl sm:text-4xl font-bold text-stone-900">
                  ${tier.price}
                </span>
                <span className="text-stone-500 text-xs">/ guest</span>
              </div>
              <div className="text-xs text-amber-800 mb-4 flex items-center gap-1.5 font-medium">
                <Wine className="w-3.5 h-3.5 text-amber-600" />
                <span>{tier.wineTier}</span>
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                {tier.description}
              </p>
              <a
                href="#reservation"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  tier.popular
                    ? "bg-stone-900 hover:bg-amber-600 text-white shadow-md"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-800"
                }`}
              >
                <span>Reserve Experience</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Course Progression Viewer */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 border border-stone-200 shadow-md">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: Course Selector Buttons */}
            <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {TASTING_COURSES.map((course, idx) => {
                const isActive = activeCourseIdx === idx;
                return (
                  <button
                    key={course.courseNumber}
                    onClick={() => setActiveCourseIdx(idx)}
                    className={`text-left p-4 rounded-2xl transition-all duration-300 cursor-pointer flex-shrink-0 w-60 lg:w-full flex items-center justify-between border ${
                      isActive
                        ? "bg-amber-50/80 border-amber-600 text-stone-900 shadow-sm"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                    }`}
                  >
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-amber-800 font-mono font-medium">
                        Course {course.courseNumber} • {course.title}
                      </div>
                      <div className="text-base text-stone-900 font-semibold truncate">
                        {course.dishName}
                      </div>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-amber-600" : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Animated Display of selected course */}
            <div className="w-full lg:w-2/3 bg-[#faf9f6] rounded-2xl p-6 sm:p-8 border border-stone-200 min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCourse.courseNumber}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-900 text-xs font-mono uppercase tracking-wider font-semibold">
                      Course 0{currentCourse.courseNumber}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                      {currentCourse.title}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl text-stone-900 font-bold tracking-tight mb-4">
                    {currentCourse.dishName}
                  </h3>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                    {currentCourse.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-200">
                    <div className="p-4 rounded-xl bg-white border border-amber-200">
                      <div className="flex items-center gap-2 text-amber-800 text-xs uppercase tracking-wider font-medium mb-1">
                        <Wine className="w-4 h-4 text-amber-700" /> Sommelier Pairing
                      </div>
                      <div className="text-stone-900 text-sm font-semibold">
                        {currentCourse.winePairing}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200">
                      <div className="flex items-center gap-2 text-stone-500 text-xs uppercase tracking-wider font-medium mb-1">
                        <GlassWater className="w-4 h-4 text-amber-600" /> Terroir &amp; Origin
                      </div>
                      <div className="text-stone-900 text-sm font-semibold">
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
