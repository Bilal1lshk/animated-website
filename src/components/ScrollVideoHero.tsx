"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollVideoHeroProps {
  /**
   * Path to your video file in the public directory (defaults to "/burger.mp4")
   */
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
}

export default function ScrollVideoHero({
  videoSrc = "/burger.mp4",
  posterSrc,
  className = "",
}: ScrollVideoHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 1) {
      setIsVideoReady(true);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // 1. Smooth, slow Lenis scrolling
    let lenis: Lenis | null = null;
    let tickerHandler: ((time: number) => void) | null = null;

    if (typeof window !== "undefined") {
      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      lenis.on("scroll", ScrollTrigger.update);
      tickerHandler = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerHandler);
      gsap.ticker.lagSmoothing(0);
    }

    video.pause();
    video.currentTime = 0;

    let stopTimeout: NodeJS.Timeout | null = null;
    let isReversing = false;
    let reverseRaf: number | null = null;

    // 2. Hardware-Accelerated Smooth Playback Engine:
    // Instead of forcing video.currentTime every 16ms (which causes browser decoder lag),
    // we let the video play naturally with GPU acceleration and dynamically steer playbackRate!
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=1900", // Pinned distance to display burger cleanly
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (!video.duration || isNaN(video.duration)) return;

          const targetTime = self.progress * video.duration;
          const timeDiff = targetTime - video.currentTime;

          // Clear any pending pause
          if (stopTimeout) clearTimeout(stopTimeout);

          // Moving Forward
          if (self.direction === 1) {
            isReversing = false;
            if (reverseRaf) cancelAnimationFrame(reverseRaf);

            // Dynamically adjust playback rate to sync with scroll speed smoothly
            if (timeDiff > 0.4) {
              video.playbackRate = 1.5;
            } else if (timeDiff > 0.1) {
              video.playbackRate = 1.15;
            } else if (timeDiff < -0.1) {
              video.playbackRate = 0.8;
            } else {
              video.playbackRate = 1.0;
            }

            if (video.paused && video.currentTime < video.duration - 0.05) {
              video.play().catch(() => {});
            }

            // Pause gently when scrolling stops after 180ms
            stopTimeout = setTimeout(() => {
              video.pause();
            }, 180);
          }
          // Moving Backward
          else if (self.direction === -1) {
            video.pause();

            if (!isReversing) {
              isReversing = true;
              const stepBack = () => {
                if (video.currentTime > targetTime + 0.04) {
                  video.currentTime = Math.max(0, video.currentTime - 0.06);
                  reverseRaf = requestAnimationFrame(stepBack);
                } else {
                  isReversing = false;
                }
              };
              reverseRaf = requestAnimationFrame(stepBack);
            }
          }
        },
        onLeave: () => {
          video.pause();
        },
        onLeaveBack: () => {
          video.pause();
          video.currentTime = 0;
        },
      });
    }, container);

    return () => {
      if (stopTimeout) clearTimeout(stopTimeout);
      if (reverseRaf) cancelAnimationFrame(reverseRaf);
      ctx.revert();
      if (tickerHandler) gsap.ticker.remove(tickerHandler);
      lenis?.destroy();
    };
  }, [isVideoReady]);

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden flex items-center justify-center bg-black select-none ${className}`}
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative w-full h-full flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          playsInline
          muted
          preload="auto"
          onLoadedMetadata={() => setIsVideoReady(true)}
          onCanPlay={() => setIsVideoReady(true)}
          className="w-full h-full object-contain block will-change-transform bg-black"
          style={{ backgroundColor: "#000000" }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
