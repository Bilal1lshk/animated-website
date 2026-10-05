"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/data/restaurantData";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 relative bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-600/30 bg-amber-500/10 text-amber-800 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Quote className="w-3.5 h-3.5 text-amber-700" />
            <span>Critiques &amp; Praise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight mb-4">
            Words of <span className="italic text-gold-gradient font-normal">Acclaim</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Recognized by the world&apos;s most respected culinary institutions and cherished by
            discerning epicures around the globe.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-stone-200/90 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-500"
                    />
                  ))}
                  <span className="ml-2 text-xs font-mono text-stone-600 font-medium">
                    5.0 / 5.0
                  </span>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed font-light italic mb-8">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-stone-200 flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base text-stone-900 font-medium">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-light">
                    <span className="text-amber-800 font-medium">{review.role}</span>
                    <span>•</span>
                    <span>{review.source}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
