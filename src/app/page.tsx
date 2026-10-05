"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import ScrollVideoHero from "@/components/ScrollVideoHero";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import TastingMenuSection from "@/components/TastingMenuSection";
import ReservationSection from "@/components/ReservationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FaqSection from "@/components/FaqSection";
import ContactFooter from "@/components/ContactFooter";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <CartProvider>
      <div className="relative min-h-screen bg-white text-stone-900 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main>
          {/* Text-Free Fullscreen Video Hero Section */}
          <ScrollVideoHero videoSrc="/burger3.mp4" />

          {/* Restaurant Experience Sections */}
          <AboutSection />
          <MenuSection />
          <TastingMenuSection />
          <ReservationSection />
          <TestimonialsSection />
          <GallerySection />
          <FaqSection />
        </main>
        <ContactFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
