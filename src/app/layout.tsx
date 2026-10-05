import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Golden Star | Craft Kitchen & Flame-Grilled Burgers",
  description:
    "Fresh flame-grilled burgers, crispy loaded fries, handcrafted shakes, and casual dining made fresh daily.",
  keywords: [
    "Craft Burgers",
    "Flame Grilled",
    "Burger Restaurant",
    "Loaded Fries",
    "Milkshakes",
    "Table Booking",
    "Takeaway Food",
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
