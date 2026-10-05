"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wine, GlassWater, ChevronRight, Award } from "lucide-react";
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
    <section id="tasting" className="py-24 sm:py-32 relative bg-black overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>The Chef&apos;s Table</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
            The Sensory Tasting{" "}
            <span className="italic text-gold-gradient">Journey</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light">
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
                  ? "glass-panel border-2 border-amber-400/60 shadow-2xl shadow-amber-500/15"
                  : "bg-stone-900/40 border border-stone-800 hover:border-amber-400/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-[#0d0e12] text-[11px] font-bold uppercase tracking-wider shadow-lg">
                  Most Beloved Experience
                </div>
              )}
              <h3 className="font-serif text-2xl text-stone-100 mb-2">{tier.title}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-serif text-4xl font-bold text-amber-300">
                  ${tier.price}
                </span>
                <span className="text-stone-400 text-xs">/ guest</span>
              </div>
              <div className="text-xs text-amber-400/80 mb-4 flex items-center gap-1.5">
                <Wine className="w-3.5 h-3.5" />
                <span>{tier.wineTier}</span>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {tier.description}
              </p>
              <a
                href="#reservation"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  tier.popular
                    ? "bg-amber-400 hover:bg-amber-300 text-black shadow-md"
                    : "bg-stone-800 hover:bg-stone-700 text-stone-200"
                }`}
              >
                <span>Reserve Experience</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Course Progression Viewer */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-amber-400/20">
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
                        ? "bg-amber-500/15 border-amber-400/60 text-white shadow-lg"
                        : "bg-stone-900/40 border-stone-800/80 text-stone-400 hover:text-stone-200 hover:bg-stone-900/80"
                    }`}
                  >
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-amber-400/80 font-mono">
                        Course {course.courseNumber} • {course.title}
                      </div>
                      <div className="font-serif text-base text-stone-100 font-medium truncate">
                        {course.dishName}
                      </div>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-amber-400" : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Animated Display of selected course */}
            <div className="w-full lg:w-2/3 bg-stone-900/50 rounded-2xl p-6 sm:p-8 border border-stone-800 min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCourse.courseNumber}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono uppercase tracking-wider">
                      Course 0{currentCourse.courseNumber}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-stone-400">
                      {currentCourse.title}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-100 font-normal mb-4">
                    {currentCourse.dishName}
                  </h3>

                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                    {currentCourse.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-800/80">
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-wider font-medium mb-1">
                        <Wine className="w-4 h-4" /> Sommelier Pairing
                      </div>
                      <div className="text-stone-200 text-sm font-serif">
                        {currentCourse.winePairing}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-700/50">
                      <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-wider font-medium mb-1">
                        <GlassWater className="w-4 h-4 text-amber-400" /> Terroir & Origin
                      </div>
                      <div className="text-stone-200 text-sm font-serif">
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
