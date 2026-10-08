import React from "react";

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  withLine?: boolean;
  accent?: boolean;
}

/**
 * Clean, minimal section eyebrow label based on website design tokens:
 * - font-size: 14px (text-sm)
 * - weight: 500 (font-medium)
 * - line-height: 1.4 (leading-[1.4])
 * - letter-spacing: normal
 * - colour: muted stone-500 or brand accent
 * - spacing: 12px between eyebrow and heading (mb-3)
 * - sentence case, no borders, no pill shapes, no gradients
 */
export default function Eyebrow({
  children,
  className = "",
  withLine = false,
  accent = false,
}: EyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 mb-3 text-sm font-medium leading-[1.4] tracking-normal ${
        accent ? "text-amber-800" : "text-stone-500"
      } ${className}`}
    >
      {withLine && <span className="w-6 h-[1.5px] bg-stone-300 inline-block flex-shrink-0" />}
      <span>{children}</span>
    </div>
  );
}
