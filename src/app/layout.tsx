import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Étoile Dorée | Haute Cuisine & Fine Dining Experience",
  description:
    "Award-winning contemporary restaurant celebrating artisanal gastronomy, heritage wines, and unforgettable culinary craftsmanship.",
  keywords: [
    "Fine Dining",
    "Haute Cuisine",
    "Gourmet Restaurant",
    "Michelin Star",
    "Table Reservation",
    "Artisanal Dining",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-black text-[#f6f5f1] font-sans selection:bg-[#d4af37]/30 selection:text-[#f3e5ab]">
        {children}
      </body>
    </html>
  );
}
