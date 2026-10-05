"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Maximize2 } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/restaurantData";

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<null | {
    title: string;
    caption: string;
    image: string;
  }>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-3">
            Photo Gallery
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Take a look at our open flame grill, fresh prep stations, and dining space.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPhoto(item)}
              className="relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer group border border-stone-200 shadow-xs hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-amber-300" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg text-white font-semibold mb-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-300 text-xs line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-2xl text-stone-900"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-96 sm:h-[480px]">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl text-stone-900 font-bold mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
