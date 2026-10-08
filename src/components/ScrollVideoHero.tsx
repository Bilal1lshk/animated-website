"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  ShoppingBag,
  Clock,
} from "lucide-react";

export interface ScrollVideoHeroProps {
  /**
   * Path to your video file in the public directory (defaults to "/burger3.mp4")
   */
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
}

export default function ScrollVideoHero({
  videoSrc = "/burger3.mp4",
  posterSrc,
  className = "",
}: ScrollVideoHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is muted and set to normal playback rate
    video.muted = true;
    video.playbackRate = 1.0;
    // Explicitly pause on mount — do NOT autoplay automatically on page load
    video.pause();

    // Start video on the very first user scroll interaction
    const handleFirstScroll = () => {
      const vid = videoRef.current;
      if (!vid) return;

      if (!hasStartedRef.current) {
        hasStartedRef.current = true;
        vid.play().catch(() => {});
      }
    };

    // Listen to user scroll, wheel, and touch gestures
    window.addEventListener("scroll", handleFirstScroll, { passive: true });
    window.addEventListener("wheel", handleFirstScroll, { passive: true });
    window.addEventListener("touchmove", handleFirstScroll, { passive: true });

    // Intersection observer to pause offscreen and resume when in view (if already started)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            if (hasStartedRef.current) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleFirstScroll);
      window.removeEventListener("wheel", handleFirstScroll);
      window.removeEventListener("touchmove", handleFirstScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full bg-[#DDDDDD] text-stone-900 overflow-hidden ${className}`}
      style={{ backgroundColor: "#DDDDDD" }}
    >
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Desktop) / Top Section (Mobile): Clean Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 text-center lg:text-left z-10 flex flex-col items-center lg:items-start"
          >
        
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-4">
              Crafted Fresh <br />
              <span className="text-amber-800">Every Single Day</span>
            </h1>

            {/* Subtitle */}
            <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6">
              100% prime beef seared over real wood embers, nestled in warm toasted brioche
              with house-made signature sauce and crisp garden produce.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <a
                href="#reservation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-600 shadow-md transition-all duration-300 cursor-pointer text-center hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Online</span>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-800 bg-white/90 hover:bg-white border border-stone-300 shadow-xs transition-all duration-300 cursor-pointer text-center hover:scale-[1.02] active:scale-[0.98]"
              >
                <Utensils className="w-4 h-4" />
                <span>View Menu</span>
              </a>
            </div>

            {/* Preparation Note */}
            <div className="flex items-center gap-2 pt-4 border-t border-stone-300/60 text-xs text-stone-600">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>Prepared fresh to order in 15 minutes</span>
            </div>
          </motion.div>

          {/* Right Column (Desktop) / Center Visual (Mobile): 100% Unobstructed Burger Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 w-full flex items-center justify-center relative"
          >
            {/* The Video Container with NO button or overlay on top */}
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[16/9] flex items-center justify-center">
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                playsInline
                muted
                loop
                preload="auto"
                className="w-full h-full object-contain block bg-[#DDDDDD]"
                style={{ backgroundColor: "#DDDDDD" }}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Seamless Transition Gradient to eliminate wide space after video section */}
      <div className="w-full h-10 sm:h-14 bg-gradient-to-b from-[#DDDDDD] to-white" />
    </section>
  );
}
