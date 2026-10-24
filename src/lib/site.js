export const PHONE = "9949492854";
export const WHATSAPP = "919949492854";

export const waLink = (text = "Hi Harsha Sai Nursery! I'm interested in your plants.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#plants", label: "Our Plants" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact Us" },
];

export const CATEGORIES = [
  { name: "Fruit Plants", note: "Premium Varieties", image: "/assets/fruit.webp", count: 103 },
  { name: "Indoor Plants", note: "Beautiful Collection", image: "/assets/indoor.webp" },
  { name: "Outdoor Plants", note: "Garden Essentials", image: "/assets/outdoor.webp" },
  { name: "Ornamental Plants", note: "Decorative Beauties", image: "/assets/ornamental.webp" },
];

export const TAGS = {
  imported: "Imported",
  exotic: "Exotic",
  bestseller: "Best Seller",
};

export const FILTERS = [
  { key: "all", label: "All Plants" },
  { key: "imported", label: "Imported" },
  { key: "exotic", label: "Exotic" },
  { key: "bestseller", label: "Best Sellers" },
];

// Indices (1-based) into the plants list shown in the gallery
export const GALLERY_IDS = [4, 8, 17, 26, 6, 11, 38, 58, 72, 95, 29, 42];
