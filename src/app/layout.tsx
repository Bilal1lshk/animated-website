import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ember & Oak | Craft Kitchen & Woodfire Grill",
  description:
    "Prime beef seared over real wood embers, handcrafted brioche burgers, loaded sides, and casual dining made fresh daily.",
  keywords: [
    "Ember & Oak",
    "Craft Kitchen",
    "Woodfire Grill",
    "Artisan Burgers",
    "Flame Grilled",
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
