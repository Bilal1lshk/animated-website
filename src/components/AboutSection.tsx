"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Flame, Leaf, Sparkles, Utensils } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description:
        "100% prime beef ground daily, freshly baked brioche buns, and crisp farm-fresh produce delivered every morning.",
    },
    {
      icon: Flame,
      title: "Flame Grilled",
      description:
        "Seared over real wood embers for crispy edges, tenderness, and rich smoky grill flavor in every single bite.",
    },
    {
      icon: Utensils,
      title: "Craft Combinations",
      description:
        "Warm toasted brioche buns, melted aged cheddar, loaded crispy fries, and house-made signature sauces.",
    },
  ];

  return (
    <section id="about" className="pt-8 sm:pt-12 pb-24 sm:pb-32 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-3">
            Our Story
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Real food, honest craft, and flame-grilled burgers prepared fresh every single day.
          </p>
        </div>

        {/* Visual Story Collage & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">
          {/* Collage Images */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md group border border-stone-200"
              >
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                  alt="Head Chef preparing burger"
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-amber-300 font-medium">
                    The Grill
                  </span>
                  <p className="text-white text-sm font-semibold">Chef Antoine Laurent</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md group border border-stone-200 mt-8 sm:mt-12"
              >
                <Image
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh farm produce and ingredients"
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-amber-300 font-medium">
                    Quality
                  </span>
                  <p className="text-white text-sm font-semibold">Fresh Daily Sourcing</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 bg-white px-6 py-4 rounded-2xl shadow-lg border border-stone-200 flex items-center gap-4 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-600/30 flex items-center justify-center text-amber-700">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-stone-900">10+ Years</div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500">
                  Of Culinary Passion
                </div>
              </div>
            </motion.div>
          </div>

          {/* Narrative Details */}
          <div className="lg:col-span-5 pt-8 lg:pt-0">
            <h3 className="text-2xl sm:text-3xl text-stone-900 font-bold tracking-tight mb-4">
              &ldquo;Good food shouldn&apos;t be complicated. It should just be undeniably good.&rdquo;
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              From our custom beef blend to slow-simmered sauces, everything we serve is prepared by hand
              every single morning. We never use frozen patties or artificial additives.
            </p>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf9f6] border border-stone-200">
              <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 border border-amber-600/40">
                <Image
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80"
                  alt="Antoine Laurent signature"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-stone-900">Antoine Laurent</div>
                <div className="text-xs text-amber-700 font-medium">Head Chef &amp; Co-Founder</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#faf9f6] p-7 rounded-2xl border border-stone-200 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-600/20 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h4 className="text-base text-stone-900 font-semibold mb-2">
                {pillar.title}
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
