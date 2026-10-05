# L'Étoile Dorée — Haute Gastronomie & Fine Dining Next.js App

A luxury, interactive, animated restaurant web application built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons**.

---

## 🌟 Key Highlights & Sections Included

1. **Sticky Glassmorphic Navigation Bar (`Navbar.tsx`)**:
   - Blurred backdrop with responsive mobile drawer menu.
   - Live service hours and concierge contact bar.
   - Interactive cart drawer trigger with animated item counter badge.
   - Direct anchor navigation to all sections.

2. **Hero Section (`Hero.tsx`)**:
   - Animated ambient lighting and gold particle aesthetic.
   - Michelin Guide accolade badge and striking typography.
   - Interactive "Tonight's Chef Recommendation" spotlight card with quick course carousel and instant "Add to Order" action.
   - Dual Call-to-Actions for Table Reservations and Menu Exploration.
   - Accolade statistics (Michelin Guide Selected, 350+ Vintages, 100% Organic, 4.9★ Rating).

3. **Our Story & Philosophy (`AboutSection.tsx`)**:
   - Heritage narrative by Executive Chef Antoine Laurent.
   - Visual culinary collage with experience badge (14 Years of Excellence).
   - 3 Culinary pillars: Botanical Terroir, Binchotan Charcoal, and Curated Cellar Vintages.

4. **À La Carte Menu & Quick Ordering (`MenuSection.tsx`)**:
   - Filterable category tabs: Starters, Chef's Mains, Handcrafted Pasta, Charcoal Grill, Desserts, Cocktails & Cellar.
   - Dietary filter toggles (Vegetarian, Gluten-Free, Chef's Signatures).
   - Live search input to find dishes or ingredients.
   - Dish cards with high-res photography, sommelier wine pairing notes, prep time, calories, and "Add to Order" button with checkmark feedback.

5. **Multi-Course Tasting Journey (`TastingMenuSection.tsx`)**:
   - 3 Curated dining tiers: Prestige 3-Course, Grand 5-Course, and Imperial 7-Course Omakase with Sommelier wine tiers.
   - Interactive course progression viewer with course numbers, origins, and wine pairings.

6. **Interactive Table Reservation Engine (`ReservationSection.tsx`)**:
   - Date picker, guest party counter (1 to 12 guests), and time slot selection (Lunch & Dinner).
   - Seating zone selector: Main Dining Salon, Chef's Counter, Garden Terrace, or The Wine Vault.
   - Special occasion and dietary allergy inputs.
   - Instant confirmation pass with celebratory confetti animation (`canvas-confetti`) and booking reference code.

7. **Guest Acclaim & Reviews (`TestimonialsSection.tsx`)**:
   - Michelin Guide critique and verified diner reviews with 5-star ratings.

8. **Atmosphere & Gallery (`GallerySection.tsx`)**:
   - Visual tour of dining spaces, wine vaults, and plating craftsmanship with interactive modal lightbox.

9. **Guest FAQs (`FaqSection.tsx`)**:
   - Animated accordions for dress code, reservations, allergens, valet, and corkage policy.

10. **Concierge & Footer (`ContactFooter.tsx`)**:
    - Hours of operation, sanctuary locations (NY & Paris), and concierge lines.
    - Private dining & buyout information.
    - Newsletter subscription box with confirmation feedback.

11. **Interactive Cart & Order Drawer (`CartDrawer.tsx`)**:
    - Slide-over order panel with quantity controls, subtotals, tax, and gratuity calculations.
    - Simulated order transmission to the kitchen.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the site.

### 3. Production Build
```bash
npm run build
npm run start
```
