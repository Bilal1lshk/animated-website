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
  name: "Ember & Oak",
  tagline: "Craft Kitchen & Woodfire Grill",
  address: "142 Market Street, Downtown",
  phone: "+1 (555) 234-5678",
  email: "hello@emberandoak.com",
  hours: {
    lunch: "Monday – Sunday: 11:30 AM – 3:30 PM",
    dinner: "Monday – Sunday: 5:00 PM – 11:00 PM",
    closed: "Open 7 Days a Week",
  },
  stats: [
    { label: "Fresh Daily", value: "100% Ground Fresh" },
    { label: "Customer Rating", value: "4.9 / 5.0 (3,200+)" },
    { label: "Flame Grilled", value: "Real Wood Embers" },
    { label: "House Sauces", value: "Made Fresh Daily" },
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  // SIDES & STARTERS (Simple Clean English)
  {
    id: "starter-1",
    name: "Crispy Truffle Fries",
    category: "starters",
    price: 12,
    description:
      "Golden shoestring fries tossed in white truffle oil, grated aged parmesan, and fresh chopped parsley.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Popular"],
    isChefSpecial: true,
    calories: 380,
    prepTime: "6 mins",
    winePairing: "House Garlic Aioli",
  },
  {
    id: "starter-2",
    name: "Loaded Bacon Cheese Fries",
    category: "starters",
    price: 14,
    description:
      "Crispy french fries smothered in warm melted cheddar sauce, crispy smoked bacon bits, sour cream, and fresh scallions.",
    image:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    tags: ["Loaded", "Customer Favorite"],
    isChefSpecial: true,
    calories: 580,
    prepTime: "8 mins",
    winePairing: "Cool Ranch Dip",
  },
  {
    id: "starter-3",
    name: "Crispy Golden Onion Rings",
    category: "starters",
    price: 10,
    description:
      "Thick-cut sweet onions in crunchy seasoned batter, fried until crisp and served with smoky house barbecue sauce.",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Crispy"],
    calories: 340,
    prepTime: "6 mins",
    winePairing: "Smoky BBQ Sauce",
  },
  {
    id: "starter-4",
    name: "Flame-Grilled BBQ Wings",
    category: "starters",
    price: 15,
    description:
      "Juicy chicken wings seared on the grill, tossed in sweet honey BBQ sauce, served with fresh celery sticks and ranch.",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    tags: ["Popular", "Gluten-Free"],
    calories: 520,
    prepTime: "12 mins",
    winePairing: "Chilled Soda or Beer",
  },

  // GRILL & BURGERS (Simple Clean English)
  {
    id: "grill-1",
    name: "Classic Cheeseburger",
    category: "grill",
    price: 16,
    description:
      "Flame-grilled prime beef patty, melted American cheddar, crisp lettuce, ripe tomato, pickles, and our signature burger sauce on a toasted brioche bun.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    tags: ["Best Seller", "Signature"],
    isChefSpecial: true,
    calories: 620,
    prepTime: "10 mins",
    winePairing: "Craft Root Beer or Pale Ale",
  },
  {
    id: "grill-2",
    name: "Double Smokehouse Burger",
    category: "grill",
    price: 21,
    description:
      "Two flame-grilled beef patties, thick-cut applewood bacon, aged sharp cheddar, crispy onions, and sweet smoky BBQ sauce.",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    tags: ["Customer Favorite", "Double Patty"],
    isChefSpecial: true,
    calories: 840,
    prepTime: "12 mins",
    winePairing: "Vanilla Bean Shake",
  },
  {
    id: "grill-3",
    name: "Truffle Mushroom Swiss Burger",
    category: "grill",
    price: 19,
    description:
      "Grilled prime beef, sautéed garlic butter mushrooms, melted Swiss cheese, caramelized onions, and white truffle aioli.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    tags: ["Chef Special", "Truffle"],
    isChefSpecial: true,
    calories: 710,
    prepTime: "12 mins",
    winePairing: "Iced Caramel Tea",
  },
  {
    id: "grill-4",
    name: "Crispy Buttermilk Chicken Burger",
    category: "grill",
    price: 17,
    description:
      "Golden fried chicken breast, crunchy house slaw, bread & butter pickles, and honey mustard sauce on a warm brioche bun.",
    image:
      "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy", "Poultry"],
    calories: 650,
    prepTime: "10 mins",
    winePairing: "Fresh Mint Lemonade",
  },
  {
    id: "grill-5",
    name: "Spicy Jalapeño Smash Burger",
    category: "grill",
    price: 18,
    description:
      "Two smashed beef patties with crispy edges, pepper jack cheese, pickled jalapeño slices, and smoky chipotle mayo.",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    tags: ["Spicy", "Double Patty"],
    calories: 740,
    prepTime: "10 mins",
    winePairing: "Chilled Craft Soda",
  },
  {
    id: "grill-6",
    name: "Plant-Based Garden Burger",
    category: "grill",
    price: 16,
    description:
      "Grilled plant-based patty, sliced avocado, baby arugula, fresh tomato, red onion, and herb vegan mayo on a multigrain bun.",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Plant-Based"],
    calories: 490,
    prepTime: "10 mins",
    winePairing: "Sparkling Water with Lime",
  },

  // CHEF'S SPECIALS & MAINS
  {
    id: "main-1",
    name: "Slow-Smoked BBQ Ribs",
    category: "mains",
    price: 28,
    description:
      "Tender baby back pork ribs slow-cooked for six hours, glazed in sweet brown sugar BBQ sauce, served with seasoned fries and slaw.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Chef Special", "Gluten-Free"],
    isChefSpecial: true,
    calories: 780,
    prepTime: "15 mins",
    winePairing: "Chilled Craft Lager",
  },
  {
    id: "main-2",
    name: "Flame-Grilled Ribeye Steak",
    category: "mains",
    price: 34,
    description:
      "10oz hand-cut prime ribeye grilled to perfection over oak embers, topped with garlic herb butter and rosemary roasted fries.",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    tags: ["Prime Cut", "Gluten-Free"],
    isChefSpecial: true,
    calories: 720,
    prepTime: "16 mins",
    winePairing: "Iced Lemon Tea or Beer",
  },

  // PASTA & BOWLS
  {
    id: "pasta-1",
    name: "Baked Four-Cheese Mac & Cheese",
    category: "pasta",
    price: 16,
    description:
      "Tender macaroni pasta in creamy cheddar, gouda, and mozzarella cheese sauce, finished with crispy garlic toasted breadcrumbs.",
    image:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Comfort Food"],
    isChefSpecial: true,
    calories: 610,
    prepTime: "10 mins",
    winePairing: "Chilled Iced Tea",
  },
  {
    id: "pasta-2",
    name: "Creamy Garlic Parmesan Bowl",
    category: "pasta",
    price: 18,
    description:
      "Fresh pasta tossed with sautéed mushrooms, baby spinach, roasted garlic cream, and freshly shaved parmesan cheese.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian"],
    calories: 540,
    prepTime: "12 mins",
    winePairing: "Fresh Lemonade",
  },

  // DESSERTS
  {
    id: "dessert-1",
    name: "Warm Chocolate Lava Cake",
    category: "desserts",
    price: 12,
    description:
      "Warm dark chocolate cake with a molten chocolate center, served with a scoop of Madagascar vanilla bean ice cream.",
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Customer Favorite"],
    isChefSpecial: true,
    calories: 460,
    prepTime: "8 mins",
    winePairing: "Hot Fresh Coffee",
  },
  {
    id: "dessert-2",
    name: "New York Strawberry Cheesecake",
    category: "desserts",
    price: 11,
    description:
      "Rich and creamy baked cheesecake on a golden graham cracker crust, topped with fresh strawberry sauce.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian"],
    calories: 410,
    prepTime: "5 mins",
    winePairing: "Iced Vanilla Latte",
  },

  // DRINKS & SHAKES
  {
    id: "drink-1",
    name: "Handspun Vanilla Milkshake",
    category: "drinks",
    price: 8,
    description:
      "Spun with whole milk, real Madagascar vanilla ice cream, and finished with whipped cream and a cherry on top.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    tags: ["Shake", "Classic"],
    isChefSpecial: true,
    calories: 360,
    prepTime: "4 mins",
  },
  {
    id: "drink-2",
    name: "Salted Caramel Pretzel Shake",
    category: "drinks",
    price: 9,
    description:
      "Rich caramel shake with sea salt swirl, whipped cream, and crunchy crushed pretzel pieces on top.",
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
    tags: ["Shake", "Popular"],
    isChefSpecial: true,
    calories: 420,
    prepTime: "5 mins",
  },
  {
    id: "drink-3",
    name: "Fresh Mint Lemonade",
    category: "drinks",
    price: 6,
    description:
      "Freshly squeezed lemons, crushed garden mint leaves, and light cane sugar served over ice.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    tags: ["Refreshing", "Cold Drink"],
    calories: 120,
    prepTime: "3 mins",
  },
  {
    id: "drink-4",
    name: "Craft Root Beer Float",
    category: "drinks",
    price: 7,
    description:
      "Chilled artisanal draft root beer poured over two generous scoops of creamy vanilla bean ice cream.",
    image:
      "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80",
    tags: ["Classic Float", "Refreshing"],
    calories: 280,
    prepTime: "3 mins",
  },
];

export const TASTING_COURSES: TastingCourse[] = [
  {
    courseNumber: 1,
    title: "Starter",
    dishName: "Crispy Truffle Shoestring Fries",
    description:
      "Hot shoestring fries tossed in aromatic white truffle oil, grated aged parmesan, and chopped garden parsley.",
    winePairing: "House Garlic Herb Dip",
    origin: "Hand Cut Daily",
  },
  {
    courseNumber: 2,
    title: "Main Course",
    dishName: "The Double Smokehouse Burger",
    description:
      "Two flame-grilled beef patties, crisp applewood bacon, aged sharp cheddar, crispy onions, and smoky BBQ sauce on toasted brioche.",
    winePairing: "Craft Root Beer or Pale Ale",
    origin: "100% Prime Beef",
  },
  {
    courseNumber: 3,
    title: "Grill Side",
    dishName: "Flame-Grilled Honey BBQ Wings",
    description:
      "Juicy chicken wings seared over open fire, coated in sticky honey BBQ sauce, served with crisp celery.",
    winePairing: "Fresh Mint Lemonade",
    origin: "Local Farm Sourced",
  },
  {
    courseNumber: 4,
    title: "Dessert",
    dishName: "Warm Chocolate Lava Cake",
    description:
      "Rich dark chocolate cake with a warm flowing center, served alongside cold vanilla bean ice cream.",
    winePairing: "Fresh Brewed Coffee",
    origin: "Baked In-House",
  },
  {
    courseNumber: 5,
    title: "Sweet Finish",
    dishName: "Salted Caramel Pretzel Shake",
    description:
      "Thick handspun milkshake layered with buttery caramel, fine sea salt, and crispy crushed pretzels.",
    winePairing: "Sweet Treats",
    origin: "Real Dairy Ice Cream",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "David Miller",
    role: "Local Food Critic",
    rating: 5,
    comment:
      "Hands down the best flame-grilled burger in town. The meat is juicy, the bun is toasted just right, and the truffle fries are phenomenal.",
    source: "Google Reviews",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "2 days ago",
  },
  {
    id: "rev-2",
    name: "Sarah Jenkins",
    role: "Regular Customer",
    rating: 5,
    comment:
      "The Double Smokehouse combo is unmatched. Everything tastes fresh, the staff is welcoming, and orders come out fast.",
    source: "Yelp Reviews",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    date: "1 week ago",
  },
  {
    id: "rev-3",
    name: "Marcus Chen",
    role: "Burger Lover",
    rating: 5,
    comment:
      "Clean dining room, great music, and simple high-quality food. You can taste the real wood grill flavor in every bite.",
    source: "Verified Diner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "2 weeks ago",
  },
];

export const GALLERY_IMAGES = [
  {
    title: "Flame Grill in Action",
    caption: "Fresh beef patties seared over open fire for maximum flavor and crispy edges.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Handcrafted Burgers",
    caption: "Stacked fresh with toasted brioche, melted cheddar, crisp greens, and signature sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Crispy Golden Fries",
    caption: "Cut fresh every morning and fried golden with sea salt and garlic herbs.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Handspun Milkshakes",
    caption: "Thick, creamy shakes whipped fresh with real dairy ice cream and artisan toppings.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Warm Dining Room",
    caption: "Bright, comfortable seating designed for casual family dinners and friendly get-togethers.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Outdoor Patio Seating",
    caption: "Enjoy open-air dining on our sunny outdoor deck for lunch and breezy evening dinners.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
  },
];

export const FAQS = [
  {
    question: "How do I place an order online?",
    answer:
      "You can select your items on our website and place an order in seconds. Choose between fast pickup, local delivery, or quick dine-in order.",
  },
  {
    question: "Is your beef fresh or frozen?",
    answer:
      "We use 100% prime beef ground fresh daily. We never freeze our meat or use artificial fillers or preservatives.",
  },
  {
    question: "Do you offer vegetarian and gluten-free choices?",
    answer:
      "Yes! We offer a grilled plant-based burger, gluten-free buns upon request, and fresh loaded salads and sides.",
  },
  {
    question: "Can I order for takeaway or pickup?",
    answer:
      "Yes! You can order directly through our website for quick pickup or choose takeaway when booking.",
  },
  {
    question: "Do you have options for kids and families?",
    answer:
      "Yes, we have kid-friendly burger sets, crispy chicken tenders, fries, and shakes that both kids and adults enjoy.",
  },
];
