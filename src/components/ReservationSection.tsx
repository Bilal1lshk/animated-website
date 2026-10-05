"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  Sparkles,
  CheckCircle2,
  X,
  Share2,
  Utensils,
  MapPin,
} from "lucide-react";

export default function ReservationSection() {
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState("Main Dining Salon");
  const [occasion, setOccasion] = useState("Celebration / Date Night");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<any | null>(null);

  const seatingOptions = [
    {
      name: "Main Dining Salon",
      description: "Center chandeliers, velvet banquettes, live soft acoustics.",
    },
    {
      name: "The Chef's Counter",
      description: "Front-row seats facing the kitchen pass and binchotan hearth.",
    },
    {
      name: "Garden Terrace",
      description: "Heated botanical glass patio with starlight views.",
    },
    {
      name: "The Wine Vault",
      description: "Intimate sommelier lounge surrounded by rare vintages.",
    },
  ];

  const timeSlots = [
    { label: "12:30 PM", category: "Lunch" },
    { label: "1:30 PM", category: "Lunch" },
    { label: "6:00 PM", category: "Dinner" },
    { label: "7:00 PM", category: "Dinner" },
    { label: "7:30 PM", category: "Dinner" },
    { label: "8:30 PM", category: "Dinner" },
    { label: "9:15 PM", category: "Dinner" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const confirmationNumber = "LD-" + Math.floor(100000 + Math.random() * 900000);
      const bookingData = {
        confirmationNumber,
        name,
        email,
        phone,
        date,
        time,
        guests,
        seatingArea,
        occasion,
        specialNotes,
      };

      setBookingConfirmed(bookingData);

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#d4af37", "#f3e5ab", "#ffffff"],
        });
      } catch {
        // ignore if canvas not supported
      }
    }, 900);
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 relative bg-black overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Table Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
            An Evening of{" "}
            <span className="italic text-gold-gradient">Unforgettable Flavors</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light">
            We reserve a portion of tables each evening for online booking. Please reserve in advance
            for weekend dinner services and the Chef&apos;s Counter experience.
          </p>
        </div>

        {/* Booking Card & Form */}
        <div className="glass-panel rounded-3xl p-6 sm:p-12 border border-amber-400/20 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Date, Time & Party Size */}
            <div>
              <h3 className="font-serif text-xl text-stone-100 font-normal mb-6 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-amber-400 text-black text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span>Select Date, Time &amp; Guests</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Date Picker */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">
                    Date of Dining
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-stone-900/80 border border-stone-700/80 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-2 bg-stone-900/80 border border-stone-700/80 rounded-xl px-4 py-2.5">
                    <Users className="w-4 h-4 text-amber-400" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-transparent text-sm text-stone-100 focus:outline-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num} className="bg-stone-900 text-stone-100">
                          {num} {num === 1 ? "Guest (Solo Epicure)" : `Guests`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Time Slot Picker */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">
                    Preferred Time Slot
                  </label>
                  <div className="flex items-center gap-2 bg-stone-900/80 border border-stone-700/80 rounded-xl px-4 py-2.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-transparent text-sm text-stone-100 focus:outline-none cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot.label} value={slot.label} className="bg-stone-900 text-stone-100">
                          {slot.label} ({slot.category})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Seating Experience */}
            <div className="pt-6 border-t border-stone-800">
              <h3 className="font-serif text-xl text-stone-100 font-normal mb-6 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-amber-400 text-black text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span>Choose Your Atmosphere</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {seatingOptions.map((opt) => {
                  const isSelected = seatingArea === opt.name;
                  return (
                    <div
                      key={opt.name}
                      onClick={() => setSeatingArea(opt.name)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-amber-500/15 border-amber-400 shadow-lg shadow-amber-500/10 scale-[1.02]"
                          : "bg-stone-900/50 border-stone-800 hover:border-stone-700 hover:bg-stone-900/80"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-serif text-sm font-semibold text-stone-100">
                            {opt.name}
                          </h4>
                          <div
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                              isSelected ? "border-amber-400 bg-amber-400" : "border-stone-600"
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-stone-400 leading-relaxed font-light">
                          {opt.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Contact & Special Notes */}
            <div className="pt-6 border-t border-stone-800">
              <h3 className="font-serif text-xl text-stone-100 font-normal mb-6 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-amber-400 text-black text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span>Diner Contact &amp; Special Requests</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lorde Harrington"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-900/80 border border-stone-700/80 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-900/80 border border-stone-700/80 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-900/80 border border-stone-700/80 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">
                    Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-stone-900/80 border border-stone-700/80 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="Celebration / Date Night">Celebration / Romantic Date</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Executive Business Dinner">Executive Business Dinner</option>
                    <option value="Casual Gastronomy">Casual Gastronomic Journey</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">
                    Dietary Allergies or Special Notes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nut allergy, gluten sensitive, anniversary flowers"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full bg-stone-900/80 border border-stone-700/80 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-400 font-light text-center sm:text-left">
                No prepayment required. Cancellations requested at least 24 hours in advance.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0d0e12] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Securing Table...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Reservation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {bookingConfirmed && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-lg w-full rounded-3xl glass-panel border border-amber-400/40 p-8 shadow-2xl bg-[#0f1016]"
            >
              <button
                onClick={() => setBookingConfirmed(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-mono">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-2xl text-stone-100 font-normal mt-1">
                  We Look Forward to Welcoming You
                </h3>
              </div>

              {/* Digital Pass Ticket */}
              <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-800 mb-6 space-y-3 font-light text-xs sm:text-sm">
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">Confirmation Code:</span>
                  <span className="font-mono text-amber-300 font-bold">
                    {bookingConfirmed.confirmationNumber}
                  </span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">Guest Name:</span>
                  <span className="text-white font-medium">{bookingConfirmed.name}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">Date &amp; Time:</span>
                  <span className="text-white font-medium">
                    {bookingConfirmed.date} at {bookingConfirmed.time}
                  </span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">Party Size:</span>
                  <span className="text-white font-medium">
                    {bookingConfirmed.guests} Guests
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Atmosphere:</span>
                  <span className="text-amber-200 font-medium">
                    {bookingConfirmed.seatingArea}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setBookingConfirmed(null)}
                  className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  Close &amp; Continue Exploring
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
