"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Flame, Leaf, Wine, Sparkles } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Leaf,
      title: "Botanical Terroir",
      description:
        "Every green, herb, and micro-vegetable is harvested at dawn from biodynamic regenerative farms in the Hudson Valley and Provence.",
    },
    {
      icon: Flame,
      title: "Binchotan Charcoal",
      description:
        "We cook over pure Japanese white oak binchotan, imparting a delicate smoky whisper without masking natural succulent textures.",
    },
    {
      icon: Wine,
      title: "350+ Cellar Vintages",
      description:
        "Curated by Head Sommelier Margot Dubois, featuring biodynamic natural crus, cult Napa Cabernets, and pre-phylloxera gems.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-white overflow-hidden">
      {/* Subtle warm ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-600/30 bg-amber-500/10 text-amber-800 text-xs uppercase tracking-[0.16em] font-medium mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Our Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-6">
            A Reverence for the Earth,{" "}
            <span className="text-amber-800 block sm:inline font-semibold">
              Elevated to High Art
            </span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Founded in 2012 by Executive Chef Antoine Laurent, L&apos;Étoile Dorée merges classic French
            culinary discipline with modern avant-garde sensibilities. We believe dining should be an
            unhurried, sensory journey that lingers long in memory.
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
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl group border border-stone-200"
              >
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                  alt="Executive Chef preparing dish"
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-medium">
                    The Pass
                  </span>
                  <p className="text-white text-sm font-semibold">Chef Antoine Laurent</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl group border border-stone-200 mt-8 sm:mt-12"
              >
                <Image
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                  alt="Artisanal fresh farm produce"
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-medium">
                    Provenance
                  </span>
                  <p className="text-white text-sm font-semibold">Morning Harvest</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 bg-white/95 px-6 py-4 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-4 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-600/30 flex items-center justify-center text-amber-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-stone-900">14 Years</div>
                <div className="text-xs uppercase tracking-widest text-stone-500">
                  Of Culinary Excellence
                </div>
              </div>
            </motion.div>
          </div>

          {/* Narrative Details */}
          <div className="lg:col-span-5 pt-8 lg:pt-0">
            <h3 className="text-2xl sm:text-3xl text-stone-900 font-semibold tracking-tight mb-6">
              &ldquo;We cook not just to feed, but to evoke nostalgia, surprise, and quiet ecstasy.&rdquo;
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              Each recipe begins not on the stovetop, but in direct dialogue with our purveyors —
              oyster divers in Brittany, heritage grain millers in Auvergne, and wagyu ranchers in
              Kagoshima.
            </p>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-8">
              We discard pretense in favor of clarity. By combining ancestral fermentation techniques
              with precise thermal roasting, every note on your palate is resonant and vivid.
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
                <div className="text-xs text-amber-700 font-medium">Executive Chef & Co-Founder</div>
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
              className="bg-[#faf9f6] p-8 rounded-2xl border border-stone-200/90 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-600/20 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500/25 transition-all duration-300">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg text-stone-900 font-semibold mb-3">
                {pillar.title}
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
