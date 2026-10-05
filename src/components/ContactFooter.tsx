"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  UtensilsCrossed,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function ContactFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-[#fbfbf9] text-stone-700 border-t border-stone-200 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Info Banner */}
        <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-600/20 flex items-center justify-center text-amber-700 flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                Dinner Service
              </div>
              <div className="text-stone-900 font-serif text-lg font-medium">
                Tue – Sun: 6:00 PM – 11:30 PM
              </div>
              <div className="text-stone-500 text-xs mt-0.5">
                Lunch: 12:00 PM – 3:00 PM
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-600/20 flex items-center justify-center text-amber-700 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                Sanctuary Location
              </div>
              <div className="text-stone-900 font-serif text-base font-medium">
                740 Park Avenue, New York
              </div>
              <div className="text-stone-500 text-xs mt-0.5">
                White-glove valet on arrival
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-600/20 flex items-center justify-center text-amber-700 flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                Concierge Line
              </div>
              <a
                href="tel:+12125558392"
                className="text-stone-900 font-serif text-lg font-medium hover:text-amber-700 transition-colors block"
              >
                +1 (212) 555-8392
              </a>
              <div className="text-stone-500 text-xs mt-0.5">
                reservations@letoiledoree.com
              </div>
            </div>
          </div>
        </div>

        {/* 4 Columns Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-amber-600/30 bg-amber-500/10 flex items-center justify-center text-amber-700">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-stone-900">
                L&apos;Étoile Dorée
              </span>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-sm">
              Contemporary French haute cuisine rooted in seasonal biodynamic agriculture, elemental
              fire, and cellar-aged vintages.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-800 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Michelin Guide Selected 2026</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-900 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light">
              <li>
                <a href="#about" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="text-stone-600 hover:text-amber-700 transition-colors">
                  À La Carte Menu
                </a>
              </li>
              <li>
                <a href="#tasting" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Tasting Journey
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Table Reservations
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Atmosphere
                </a>
              </li>
            </ul>
          </div>

          {/* Private Events */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-900 mb-4">
              Private Dining
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light">
              <li>
                <a href="#reservation" className="text-stone-600 hover:text-amber-700 transition-colors">
                  The Wine Vault (14 Seats)
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-stone-600 hover:text-amber-700 transition-colors">
                  The Garden Terrace (30 Seats)
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Chef&apos;s Private Salon (20 Seats)
                </a>
              </li>
              <li>
                <a href="mailto:events@letoiledoree.com" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Bespoke Corporate Buyouts
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-900 mb-4">
              The Sommelier&apos;s Gazette
            </h4>
            <p className="text-stone-600 text-xs font-light leading-relaxed mb-4">
              Subscribe to receive exclusive invitations to private cellar unveilings, seasonal menu
              previews, and guest chef residency dinners.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Thank you. You have been added to our private guest book.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-stone-300 rounded-full px-4 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 flex-1 shadow-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light gap-4">
          <div>
            &copy; {new Date().getFullYear()} L&apos;Étoile Dorée Restaurant Group. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-stone-900 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-stone-900 transition-colors cursor-pointer">
              Terms of Hospitality
            </span>
            <span className="hover:text-stone-900 transition-colors cursor-pointer">
              Accessibility
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
