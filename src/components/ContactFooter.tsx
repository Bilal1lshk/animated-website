"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import BrandLogo from "@/components/BrandLogo";

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
        <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-600/20 flex items-center justify-center text-amber-700 flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-stone-500 font-medium">
                Opening hours
              </div>
              <div className="text-stone-900 text-base font-semibold">
                Mon – Sun: 11:30 AM – 11:00 PM
              </div>
              <div className="text-stone-500 text-xs mt-0.5">
                Kitchen closes 30 mins before closing
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-600/20 flex items-center justify-center text-amber-700 flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-stone-500 font-medium">
                Location
              </div>
              <div className="text-stone-900 text-base font-semibold">
                {RESTAURANT_INFO.address}
              </div>
              <div className="text-stone-500 text-xs mt-0.5">
                Convenient parking available nearby
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-600/20 flex items-center justify-center text-amber-700 flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-stone-500 font-medium">
                Call us
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="text-stone-900 text-base font-semibold hover:text-amber-700 transition-colors block"
              >
                {RESTAURANT_INFO.phone}
              </a>
              <div className="text-stone-500 text-xs mt-0.5">
                {RESTAURANT_INFO.email}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Columns Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <BrandLogo size="md" />
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Handcrafted burgers grilled over real embers, crispy sides, and fresh milkshakes. Simple, honest, and delicious food every single day.
            </p>
            <p className="text-xs text-stone-500 font-medium">
              Dine-in • Takeaway • Fast pickup
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-stone-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Full Menu
                </a>
              </li>
              <li>
                <a href="#tasting" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Combo Sets
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Dining Options */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-stone-900 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#reservation" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Order Booking
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Takeaway &amp; Pickup
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Group Gatherings
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-stone-600 hover:text-amber-700 transition-colors">
                  Birthday Parties
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-stone-900 mb-4">
              Stay in Touch
            </h4>
            <p className="text-stone-600 text-xs leading-relaxed mb-4">
              Subscribe for weekly special items, student discounts, and event updates. No spam, ever.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing! We&apos;ll keep you posted.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-stone-300 rounded-full px-4 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-600 flex-1 shadow-xs"
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
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-stone-900 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-stone-900 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-stone-900 transition-colors cursor-pointer">
              Contact Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
