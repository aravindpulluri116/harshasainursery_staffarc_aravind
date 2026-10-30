import { plants } from "@/data/plants";

export const PHONE = "8143941125";
export const WHATSAPP = "918143941125"; // Harsha Sai Nursery WhatsApp

// Social profiles
export const INSTAGRAM = "https://www.instagram.com/harshasainursery";
export const YOUTUBE = "https://youtube.com/@harshasainursery";

export const HOURS = "9 AM – 6:30 PM, Every Day";
export const LICENCE = "Telangana Government Horticulture Licenced & Approved Nursery";

// Real coordinates from Google Maps: 18.11702715, 78.35640861
export const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d954.2!2d78.35640861!3d18.11702715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDA3JzAxLjMiTiA3OMKwMjEnMjMuMSJF!5e0!3m2!1sen!2sin!4v1698000000000";

export const waLink = (text = "Hi Harsha Sai Nursery! I'm interested in your plants.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "/plants", label: "Our Plants" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact Us" },
  { href: "/certifications", label: "Certifications" },
];

export const CATEGORIES = [
  { name: "Fruit Plants", note: "Premium Varieties", image: "/assets/fruit.webp", count: plants.length },
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
  { key: "Coconut", label: "Coconut" },
  { key: "Mango", label: "Mango" },
  { key: "Jackfruit", label: "Jackfruit" },
  { key: "Sapota", label: "Sapota" },
  { key: "Guava", label: "Guava" },
  { key: "Custard Apple", label: "Custard Apple" },
  { key: "Lemon", label: "Lemon" },
];

