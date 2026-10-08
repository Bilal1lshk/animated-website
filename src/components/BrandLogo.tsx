import React from "react";

interface BrandLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export default function BrandLogo({
  className = "",
  iconOnly = false,
  size = "md",
  dark = false,
}: BrandLogoProps) {
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Handcrafted Emblem: Fire Ember & Oak Crest */}
      <div
        className={`${iconDimensions} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/15 via-amber-600/10 to-stone-900/10 border border-amber-600/30 text-amber-700 shadow-xs flex-shrink-0 group-hover:border-amber-600 group-hover:scale-105 transition-all duration-300`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={size === "sm" ? "w-5 h-5" : size === "lg" ? "w-7 h-7" : "w-6 h-6"}
        >
          {/* Subtle Outer Dashed Crest Ring */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 3"
            className="opacity-40"
          />
          {/* Inner Accent Ring */}
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-70"
          />
          {/* Stylized Woodfire Ember Flame */}
          <path
            d="M20 7C20 7 24 13 24 17C24 20.3137 21.3137 23 18 23C16.8954 23 16 22.1046 16 21C16 19.5 17 18.5 17.5 17.5C18 16.5 18 15 17 14C14.5 16.5 12 19 12 23C12 27.4183 15.5817 31 20 31C24.4183 31 28 27.4183 28 23C28 17.5 23 13 20 7Z"
            fill="currentColor"
            className="opacity-90"
          />
          {/* Botanical Oak Branch Accents */}
          <path
            d="M17 25C15 26 14.5 28 15.5 29.5C16.5 30 18 29.5 19 28.5"
            stroke="#b45309"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M23 24.5C25 25.5 25.5 27.5 24.5 29C23.5 29.5 22 29 21 28"
            stroke="#b45309"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          <span
            className={`font-bold tracking-tight leading-none ${
              size === "sm"
                ? "text-lg"
                : size === "lg"
                ? "text-2xl"
                : "text-xl"
            } ${dark ? "text-white" : "text-stone-900"} group-hover:text-amber-700 transition-colors`}
          >
            Ember &amp; Oak
          </span>
          <span
            className={`text-[9px] sm:text-[10px] tracking-[0.22em] font-semibold uppercase mt-1 ${
              dark ? "text-stone-400" : "text-stone-500"
            }`}
          >
            Craft Kitchen &amp; Woodfire Grill
          </span>
        </div>
      )}
    </div>
  );
}
