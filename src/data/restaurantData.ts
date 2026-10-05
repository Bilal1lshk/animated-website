export interface MenuItem {
  id: string;
  name: string;
  category: "starters" | "mains" | "pasta" | "grill" | "desserts" | "drinks";
  price: number;
  description: string;
  image: string;
  tags: string[];
  isChefSpecial?: boolean;
  calories?: number;
  prepTime?: string;
  winePairing?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  source: string;
  avatar: string;
  date: string;
}

export interface TastingCourse {
  courseNumber: number;
  title: string;
  dishName: string;
  description: string;
  winePairing: string;
  origin: string;
}

export const RESTAURANT_INFO = {
  name: "L'Étoile Dorée",
  tagline: "Contemporary Haute Cuisine & Artisanal Wine Cellar",
  address: "482 Boulevard Saint-Honoré, Paris & 740 Park Avenue, NY",
  phone: "+1 (212) 555-8392",
  email: "reservations@letoiledoree.com",
  hours: {
    lunch: "Tuesday – Sunday: 12:00 PM – 3:00 PM",
    dinner: "Tuesday – Sunday: 6:00 PM – 11:30 PM",
    closed: "Mondays (Private Culinary Masterclasses)",
  },
  stats: [
    { label: "Michelin Accolade", value: "★★ Guide Selected" },
    { label: "Wine Selections", value: "350+ Rare Vintages" },
    { label: "Organic Sourcing", value: "100% Farm-to-Table" },
    { label: "Guest Satisfaction", value: "4.9 / 5.0 (2,400+)" },
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: "starter-1",
    name: "Hokkaido Scallop Crudo",
    category: "starters",
    price: 34,
    description:
      "Hand-dived sea scallops, finger lime pearls, white truffle vinaigrette, pickled sea fennel & crispy nori tuile.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    tags: ["Gluten-Free", "Chef's Signature", "Seafood"],
    isChefSpecial: true,
    calories: 280,
    prepTime: "12 mins",
    winePairing: "Domaine Leflaive Puligny-Montrachet 2020",
  },
  {
    id: "starter-2",
    name: "Foie Gras Poêlé au Miel",
    category: "starters",
    price: 38,
    description:
      "Pan-seared artisanal duck liver, caramelized mission figs, spiced brioche & aged Modena balsamic reduction.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Gourmet", "Signature"],
    isChefSpecial: true,
    calories: 420,
    prepTime: "15 mins",
    winePairing: "Château d'Yquem Sauternes 2017",
  },
  {
    id: "starter-3",
    name: "Burrata Pugliese Truffée",
    category: "starters",
    price: 28,
    description:
      "24-hour aged heirloom tomatoes, black winter truffle caviar, basil sponge & cold-pressed Tuscan olive oil.",
    image:
      "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Organic"],
    calories: 340,
    prepTime: "10 mins",
    winePairing: "Gavi di Gavi La Scolca 2022",
  },

  // MAINS
  {
    id: "main-1",
    name: "Pan-Roasted Glacier 51 Toothfish",
    category: "mains",
    price: 68,
    description:
      "Known as the Wagyu of the sea. Served with sweet corn velouté, charred baby leeks, and saffron dashi foam.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    tags: ["Gluten-Free", "Chef's Signature"],
    isChefSpecial: true,
    calories: 520,
    prepTime: "22 mins",
    winePairing: "Chassagne-Montrachet Premier Cru 2019",
  },
  {
    id: "main-2",
    name: "Canard Rôti à l'Orange Sangvine",
    category: "mains",
    price: 54,
    description:
      "Crispy-skin dry-aged heritage duck breast, blood orange gastrique, parsnip mousseline & Romanesco florets.",
    image:
      "https://images.unsplash.com/photo-1514944298352-7b28dbb3a0f7?auto=format&fit=crop&w=800&q=80",
    tags: ["Chef's Pick"],
    calories: 610,
    prepTime: "24 mins",
    winePairing: "Domaine Dujac Morey-Saint-Denis 2018",
  },
  {
    id: "main-3",
    name: "Wild Morel & Porcini Risotto",
    category: "pasta",
    price: 42,
    description:
      "Carnaroli rice slow-cooked in forest mushroom consommé, 36-month Parmigiano Reggiano & shaved Alba white truffles.",
    image:
      "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Gluten-Free", "Truffle"],
    isChefSpecial: true,
    calories: 460,
    prepTime: "20 mins",
    winePairing: "Barolo Vietti Castiglione 2017",
  },

  // PASTA
  {
    id: "pasta-1",
    name: "Lobster & Crab Handmade Agnolotti",
    category: "pasta",
    price: 48,
    description:
      "Silky pillow pasta filled with Maine lobster & king crab, coral shellfish emulsion, and Oscietra sturgeon caviar.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    tags: ["Artisanal", "Chef's Signature"],
    isChefSpecial: true,
    calories: 540,
    prepTime: "18 mins",
    winePairing: "Meursault Domaine des Comtes Lafon",
  },
  {
    id: "pasta-2",
    name: "Tagliolini al Tartufo Nero",
    category: "pasta",
    price: 44,
    description:
      "Fresh golden egg pasta, mountain churned Normandy butter, Pecorino Romano and freshly shaved Périgord black truffles.",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "House Special"],
    calories: 490,
    prepTime: "16 mins",
    winePairing: "Brunello di Montalcino Biondi-Santi",
  },

  // GRILL
  {
    id: "grill-1",
    name: "Miyazaki A5 Wagyu Tenderloin",
    category: "grill",
    price: 110,
    description:
      "Authentic BMS 11 Japanese Wagyu, binchotan charcoal sear, bone marrow glaze, smoked shallot puree & smoked salt.",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    tags: ["Gluten-Free", "Prestige Cut"],
    isChefSpecial: true,
    calories: 680,
    prepTime: "25 mins",
    winePairing: "Château Margaux Premier Grand Cru 2012",
  },
  {
    id: "grill-2",
    name: "Colorado Rack of Lamb en Croûte",
    category: "grill",
    price: 64,
    description:
      "Herb-crusted spring lamb rack, rosemary-infused jus, braised baby artichokes, and roasted garlic potato purée.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Gluten-Free"],
    calories: 590,
    prepTime: "25 mins",
    winePairing: "Côte-Rôtie Guigal La Mouline",
  },

  // DESSERTS
  {
    id: "dessert-1",
    name: "Sphère Chocolat Valrhona & Or",
    category: "desserts",
    price: 26,
    description:
      "70% Guanaja chocolate sphere, hazelnut praline crunch, warm Tahitian vanilla bean ganache poured tableside, 24K gold leaf.",
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Chef's Signature"],
    isChefSpecial: true,
    calories: 480,
    prepTime: "12 mins",
    winePairing: "Taylor's 20 Year Old Tawny Port",
  },
  {
    id: "dessert-2",
    name: "Mille-Feuille Croustillant Vanille",
    category: "desserts",
    price: 22,
    description:
      "Caramelized inverted puff pastry, whipped bourbon vanilla cream, wild raspberry gel & salted butter caramel.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Classic French"],
    calories: 390,
    prepTime: "10 mins",
    winePairing: "Tokaji Aszú 5 Puttonyos 2016",
  },

  // DRINKS & COCKTAILS
  {
    id: "drink-1",
    name: "The Golden Empress Cocktail",
    category: "drinks",
    price: 25,
    description:
      "Botanist Gin, elderflower liqueur, edible 24K gold dust, clarified lemon essence, topped with Dom Pérignon Champagne.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    tags: ["Cocktail", "Signature Drink"],
    isChefSpecial: true,
    calories: 160,
    prepTime: "5 mins",
  },
  {
    id: "drink-2",
    name: "Smoked Cherrywood Old Fashioned",
    category: "drinks",
    price: 24,
    description:
      "WhistlePig 10-Year Rye, organic demerara, angostura bitters, ignited cherrywood aromatics served under a smoke cloche.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
    tags: ["Cocktail", "Smoked"],
    calories: 190,
    prepTime: "6 mins",
  },
];

export const TASTING_COURSES: TastingCourse[] = [
  {
    courseNumber: 1,
    title: "L'Accueil",
    dishName: "Amuse-Bouche & Caviar Tartlet",
    description:
      "Crisp tartlet with smoked crème fraîche, chive oil, and Royal Imperial Kaluga caviar.",
    winePairing: "Champagne Krug Grande Cuvée 170th Edition",
    origin: "Petrossian Caviar Reserve",
  },
  {
    courseNumber: 2,
    title: "La Mer",
    dishName: "Brittany Blue Lobster Bisque",
    description:
      "Gentle steamed blue lobster tail, cognac scented bisque, kaffir lime and brioche croutons.",
    winePairing: "Domaine Leflaive Batard-Montrachet Grand Cru 2018",
    origin: "Brittany Coast, France",
  },
  {
    courseNumber: 3,
    title: "La Terre",
    dishName: "Périgord Truffle Agnolotti",
    description:
      "Silken yolk pasta, 36-month Reggiano fondue, and shaved fresh black tuber melanosporum.",
    winePairing: "Gaja Barbaresco DOCG 2016",
    origin: "Piedmont & Périgord",
  },
  {
    courseNumber: 4,
    title: "Le Cœur",
    dishName: "Kagoshima A5 Wagyu Tenderloin",
    description:
      "Glazed over binchotan embers, smoked marrow emulsion, baby Japanese turnips.",
    winePairing: "Château Latour Premier Grand Cru Classé 2010",
    origin: "Kagoshima Prefecture",
  },
  {
    courseNumber: 5,
    title: "L'Apogée",
    dishName: "Golden Grand Cru Chocolate & Cloud",
    description:
      "Valrhona 85% single-origin criollo chocolate, smoked sea salt, passionfruit pearls & gold cloud.",
    winePairing: "Château d'Yquem Premier Cru Supérieur 2015",
    origin: "Madagascar & Bordeaux",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Michelin Guide Inspector",
    role: "Culinary Reviewer",
    rating: 5,
    comment:
      "Chef Antoine Laurent balances audacity with reverence for French classical heritage. The Miyazaki Wagyu and Hokkaido Scallop Crudo are sheer masterclasses in harmony.",
    source: "Michelin Dining Guide",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "Autumn Selection",
  },
  {
    id: "rev-2",
    name: "Eleanor Vance-St. Claire",
    role: "Vogue Gourmet Editor",
    rating: 5,
    comment:
      "The atmosphere transcends typical dining. From the moment the sommelier presents the vintage list to the dramatic chocolate sphere finale, it is an unparalleled symphony.",
    source: "Vogue Gastronomy",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    date: "2 weeks ago",
  },
  {
    id: "rev-3",
    name: "Marcus Sterling",
    role: "Private Collector & Epicure",
    rating: 5,
    comment:
      "Hosted our 10th anniversary in the Private Wine Cellar. The service was telepathic, the wine pairings revealed notes I had never experienced, and every course was perfection.",
    source: "Verified Diner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "Last month",
  },
];

export const GALLERY_IMAGES = [
  {
    title: "The Main Dining Salon",
    caption: "Designed by Studio Liaigre with custom velvet banquettes and hand-blown chandeliers.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Culinary Precision",
    caption: "Every plate is treated as a delicate canvas of flavor and textural balance.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Heritage Wine Vault",
    caption: "Over 350 rare vintages guarded at precise cellar temperature and humidity.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "The Sommelier's Pour",
    caption: "Bespoke pairings matched dish by dish for our multi-course tasting journey.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Charcoal Mastery",
    caption: "Binchotan white oak embers searing prime cuts to smoky tenderness.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Pastry Artistry",
    caption: "Sculptural desserts featuring single-origin chocolates and botanical infusions.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80",
  },
];

export const FAQS = [
  {
    question: "What is the dress code at L'Étoile Dorée?",
    answer:
      "We encourage elegant or business casual attire. Jackets are appreciated for gentlemen in the main dining salon and tasting counter, while athletic wear and beachwear are not permitted.",
  },
  {
    question: "How far in advance can I book a table?",
    answer:
      "Online reservations open 30 days in advance at 9:00 AM local time. For private dining rooms and parties of 6 or more, reservations can be requested up to 90 days in advance.",
  },
  {
    question: "Do you accommodate dietary restrictions and allergies?",
    answer:
      "Absolutely. Our culinary team customizes both à la carte and tasting menus for vegetarian, pescatarian, gluten-free, and nut-allergy guests. Please notify us during booking.",
  },
  {
    question: "Is valet parking available?",
    answer:
      "Complimentary white-glove valet parking is provided at our main entrance from 5:30 PM until closing every evening.",
  },
  {
    question: "Can I bring my own special vintage wine (Corkage Policy)?",
    answer:
      "You are welcome to bring up to two 750ml bottles of wine not currently represented in our cellar list. Our corkage fee is $75 per bottle.",
  },
];
