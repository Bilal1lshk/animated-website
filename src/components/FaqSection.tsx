"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQS } from "@/data/restaurantData";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 relative bg-black border-t border-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Guest Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            Frequently Asked <span className="italic text-gold-gradient">Questions</span>
          </h2>
          <p className="text-stone-400 text-sm font-light">
            Everything you need to know before visiting our salons and private tasting tables.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl glass-panel border border-stone-800/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-amber-300 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg text-stone-100 font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-400/15 border-amber-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-stone-300 text-sm font-light leading-relaxed border-t border-stone-800/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
