"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles, Utensils, ShoppingBag } from "lucide-react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef(false);

  // Vertical scroll tracking across 320vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Video subtle zoom in at the start of scrolling (from 1.0 to 1.12)
  const videoScale = useTransform(scrollYProgress, [0, 0.30], [1.0, 1.12]);

  // Scene 1: Slides in from LEFT (0.00 -> 0.30)
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.22, 0.32], [0.8, 1, 1, 0]);
  const scene1X = useTransform(scrollYProgress, [0, 0.08, 0.24, 0.32], [-70, 0, 0, -90]);

  // Scene 2: Slides in from RIGHT (0.33 -> 0.66)
  const scene2Opacity = useTransform(scrollYProgress, [0.32, 0.42, 0.58, 0.67], [0, 1, 1, 0]);
  const scene2X = useTransform(scrollYProgress, [0.32, 0.42, 0.58, 0.67], [90, 0, 0, 90]);

  // Scene 3: Slides in from LEFT with CTAs (0.68 -> 1.00)
  const scene3Opacity = useTransform(scrollYProgress, [0.68, 0.78, 0.95, 1.0], [0, 1, 1, 1]);
  const scene3X = useTransform(scrollYProgress, [0.68, 0.78], [-90, 0]);

  // Progress Bar / Indicator
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Normal natural 1.0x playback speed
    video.playbackRate = 1.0;
    video.muted = true;

    // Start video on user scroll (wheel, touch, or window scroll)
    const startVideoOnScroll = () => {
      if (!hasStartedRef.current && video) {
        hasStartedRef.current = true;
        video.play().catch(() => {});
      }
    };

    window.addEventListener("scroll", startVideoOnScroll, { passive: true });
    window.addEventListener("wheel", startVideoOnScroll, { passive: true });
    window.addEventListener("touchmove", startVideoOnScroll, { passive: true });

    // Intersection observer to pause offscreen, play when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto play while in view once scrolling has initiated
            if (hasStartedRef.current) {
              video.play().catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", startVideoOnScroll);
      window.removeEventListener("wheel", startVideoOnScroll);
      window.removeEventListener("touchmove", startVideoOnScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-[320vh] bg-[#E5E5E5] ${className}`}
      style={{ backgroundColor: "#E5E5E5" }}
    >
      {/* Sticky Viewport Stage */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#E5E5E5]"
        style={{ backgroundColor: "#E5E5E5" }}
      >
        {/* Background & Centered Video with Start-of-Scroll Zoom anchored to top of div / end of nav */}
        <motion.div
          style={{ scale: videoScale, transformOrigin: "top center" }}
          className="absolute inset-0 flex items-center justify-center bg-[#E5E5E5] will-change-transform origin-top"
        >
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            playsInline
            muted
            loop
            preload="auto"
            className="w-full h-full object-contain block bg-[#E5E5E5] origin-top"
            style={{ backgroundColor: "#E5E5E5", transformOrigin: "top center" }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Text Overlays: Positioned on Left and Right (Not directly blocking burger video) */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pointer-events-none flex items-center">
          {/* Scene 1: Introduction (From LEFT) */}
          <motion.div
            style={{ opacity: scene1Opacity, x: scene1X }}
            className="absolute left-6 sm:left-10 lg:left-16 top-1/2 -translate-y-1/2 w-[85%] max-w-sm sm:max-w-md text-left z-10"
          >
            <div className="backdrop-blur-md bg-[#E5E5E5]/80 border border-stone-300/80 p-6 sm:p-8 rounded-2xl shadow-xs">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-[1.12] mb-3">
                Crafted Fresh <br />
                <span className="text-amber-800 font-semibold">Every Single Day</span>
              </h1>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Flame-grilled beef, warm toasted brioche, and house-made signature sauce.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-stone-500 animate-bounce">
                <span>Scroll down</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>

          {/* Scene 2: Craft & Ingredients (From RIGHT) */}
          <motion.div
            style={{ opacity: scene2Opacity, x: scene2X }}
            className="absolute right-6 sm:right-10 lg:right-16 top-1/2 -translate-y-1/2 w-[85%] max-w-sm sm:max-w-md text-left z-10"
          >
            <div className="backdrop-blur-md bg-[#E5E5E5]/80 border border-stone-300/80 p-6 sm:p-8 rounded-2xl shadow-xs">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-[1.12] mb-3">
                100% Prime Beef <br />
                <span className="text-amber-800 font-semibold">&amp; Real Embers</span>
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Charcoal-seared beef patty topped with aged cheddar, crisp lettuce, and caramelized sweet onions.
              </p>
            </div>
          </motion.div>

          {/* Scene 3: Grand Tasting & CTA (From LEFT) */}
          <motion.div
            style={{ opacity: scene3Opacity, x: scene3X }}
            className="absolute left-6 sm:left-10 lg:left-16 top-1/2 -translate-y-1/2 w-[85%] max-w-sm sm:max-w-md text-left z-10 pointer-events-auto"
          >
            <div className="backdrop-blur-md bg-[#E5E5E5]/80 border border-stone-300/80 p-6 sm:p-8 rounded-2xl shadow-xs">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-[1.12] mb-3">
                Taste the <br />
                <span className="text-amber-800 font-semibold">Difference</span>
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Order your favorites online for fast pickup or delivery.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#reservation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-600 shadow-md transition-all duration-300 cursor-pointer text-center"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order Online</span>
                </a>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-stone-800 bg-white/90 hover:bg-white border border-stone-300 shadow-xs transition-all duration-300 cursor-pointer text-center"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>View Menu</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Scroll Progress Bar (Right Side) */}
        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20 pointer-events-none">
          <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">01</span>
          <div className="w-[2px] h-24 bg-stone-300 rounded-full overflow-hidden">
            <motion.div
              style={{ height: progressHeight }}
              className="w-full bg-stone-800 origin-top"
            />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">03</span>
        </div>
      </div>
    </section>
  );
}

