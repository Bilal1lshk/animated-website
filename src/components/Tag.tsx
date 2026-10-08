import React from "react";

export interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "dark" | "success";
}

/**
 * Minimal rectangular product / card tag:
 * - font-size: 12px (text-xs)
 * - weight: 500 (font-medium)
 * - padding: 4px 8px (px-2 py-1)
 * - border-radius: 6px (rounded-[6px])
 * - solid subtle background, no glows, no pill shapes, sentence case
 */
export default function Tag({
  children,
  className = "",
  variant = "default",
}: TagProps) {
  const variantStyles = {
    default: "bg-stone-100 text-stone-700",
    accent: "bg-amber-100/80 text-amber-900 border border-amber-200/60",
    dark: "bg-black/75 text-stone-100",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200/60",
  }[variant];

  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2 py-1 rounded-[6px] leading-tight select-none ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
