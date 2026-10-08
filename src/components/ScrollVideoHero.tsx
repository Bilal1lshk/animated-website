"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  ShoppingBag,
  Clock,
  Play,
  Pause,
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
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isManuallyPlayingRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is muted and set to normal playback rate
    video.muted = true;
    video.playbackRate = 1.0;
    // Explicitly pause on mount — do NOT autoplay automatically
    video.pause();

    const handleScrollActivity = () => {
      const vid = videoRef.current;
      if (!vid) return;

      // Check if video is visible within the viewport
      const rect = vid.getBoundingClientRect();
      const inView = rect.bottom > 40 && rect.top < window.innerHeight - 40;

      if (!inView) {
        if (!vid.paused) {
          vid.pause();
          setIsPlaying(false);
        }
        return;
      }

      // Play video as user scrolls
      if (vid.paused) {
        vid.play().catch(() => {});
        setIsPlaying(true);
      }

      // Debounce: pause after scrolling stops (500ms inactivity window)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (!isManuallyPlayingRef.current && videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }, 500);
    };

    // Listen to wheel, scroll, and touchmove gestures
    window.addEventListener("scroll", handleScrollActivity, { passive: true });
    window.addEventListener("wheel", handleScrollActivity, { passive: true });
    window.addEventListener("touchmove", handleScrollActivity, { passive: true });

    // Intersection observer to pause playback when hero leaves screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScrollActivity);
      window.removeEventListener("wheel", handleScrollActivity);
      window.removeEventListener("touchmove", handleScrollActivity);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      observer.disconnect();
    };
  }, []);

  const toggleManualPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      isManuallyPlayingRef.current = true;
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      isManuallyPlayingRef.current = false;
      video.pause();
      setIsPlaying(false);
    }
  };

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
            {/* The Video Container with scroll-driven playback and click-to-play toggle */}
            <div
              onClick={toggleManualPlay}
              className="relative w-full max-w-lg lg:max-w-xl aspect-[16/9] flex items-center justify-center cursor-pointer group"
              title={isPlaying ? "Click to pause" : "Scroll page or click to play"}
            >
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

              {/* Status Indicator pill */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/75 hover:bg-stone-900 text-white text-[11px] font-medium backdrop-blur-xs transition-all duration-300 select-none shadow-xs">
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-amber-400" />
                    <span className="text-stone-200">Playing</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-stone-200">Scroll to play</span>
                  </>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Seamless Transition Gradient to eliminate wide space after video section */}
      <div className="w-full h-10 sm:h-14 bg-gradient-to-b from-[#DDDDDD] to-white" />
    </section>
  );
}
