import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
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
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
