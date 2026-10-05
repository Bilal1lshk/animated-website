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
    <section className="py-20 sm:py-28 relative bg-[#faf9f6] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-600/30 bg-amber-500/10 text-amber-800 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Guest Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 tracking-tight mb-4">
            Frequently Asked <span className="italic text-gold-gradient font-normal">Questions</span>
          </h2>
          <p className="text-stone-600 text-sm font-light">
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
                className="rounded-2xl bg-white border border-stone-200/90 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-amber-700 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg text-stone-900 font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-amber-700 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-500/15 border-amber-500 text-amber-800" : ""
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
                      <div className="px-6 pb-6 pt-1 text-stone-600 text-sm font-light leading-relaxed border-t border-stone-100">
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
