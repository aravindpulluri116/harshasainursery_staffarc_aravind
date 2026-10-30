import { malaysianGreenDwarfCoconut } from "../assets/catalogue-images-1";
import { gangaBondamDwarfCoconut } from "../assets/catalogue-images-2";
import { coconutGreenFruit, coconutYellowFruit, custardAppleFruit } from "../assets/catalogue-images-3";
import { custardAppleHand, custardApplePile, laxmanphalFruit, mangoFruit } from "../assets/catalogue-images-4";
import { guavaFruit, lemonCluster } from "../assets/catalogue-images-5";
import { lemonPlant } from "../assets/catalogue-images-6";
import { lemonSaplings } from "../assets/catalogue-images-7";
import { malaysianOrangeDwarfCoconut, chandaShankaraHybridCoconut } from "../assets/catalogue-images-9";

// Real catalogue supplied by the nursery owner via WhatsApp on 2026-10-30.
// Names and prices preserved as supplied. Prices are per-plant wholesale (INR).
// image: null = no photo yet (leaf placeholder). representative: true = clear fruit/category
// photo supplied by owner, exact variety not visually verifiable - pending his confirmation.
export const plants = [
  // Coconut
  { id: 1, name: "Malaysian Green Dwarf Coconut", group: "Coconut", wholesale: 450, image: malaysianGreenDwarfCoconut },
  { id: 2, name: "Ganga Bavani / Ganga Bondam Hybrid Dwarf Coconut", group: "Coconut", wholesale: 600, image: gangaBondamDwarfCoconut },
  { id: 3, name: "Malaysian Yellow Dwarf Coconut", group: "Coconut", wholesale: 450, image: coconutYellowFruit, representative: true },
  { id: 4, name: "Malaysian Orange Dwarf Coconut", group: "Coconut", wholesale: 450, image: malaysianOrangeDwarfCoconut },
  { id: 5, name: "Chanda Shankara Hybrid Coconut", group: "Coconut", wholesale: 550, image: chandaShankaraHybridCoconut },
  { id: 6, name: "Chowgard Orange Dwarf Coconut", group: "Coconut", wholesale: 450, image: null },
  { id: 7, name: "Chowgard Green Dwarf Coconut", group: "Coconut", wholesale: 450, image: coconutGreenFruit, representative: true },
  { id: 8, name: "Chowgard Yellow Dwarf Coconut", group: "Coconut", wholesale: 450, image: null },
  // Mango
  { id: 9, name: "Indian Mango Varieties", group: "Mango", wholesale: 250, image: mangoFruit, representative: true, desc: "Like Mallika, kesari, Benisha, daseri, Panduri... so so." },
  { id: 10, name: "Exotic Mango Varieties", group: "Mango", wholesale: 650, image: null, desc: "Like R2E2 mango, Nam dac my mango, Miyazaki, Banana mango, katiman mango." },
  // Jackfruit
  { id: 11, name: "Viyathnam Super Early Jackfruit (Panasa)", group: "Jackfruit", wholesale: 300, image: null },
  { id: 12, name: "Yellow Jackfruit (Normal Panasa)", group: "Jackfruit", wholesale: 250, image: null },
  { id: 13, name: "Pink Panasa", group: "Jackfruit", wholesale: 350, image: null },
  { id: 14, name: "Honey Jackfruit", group: "Jackfruit", wholesale: 450, image: null },
  // Sapota
  { id: 15, name: "Cricket Sapota", group: "Sapota", wholesale: 400, image: null },
  { id: 16, name: "Banana Sapota", group: "Sapota", wholesale: 350, image: null },
  { id: 17, name: "Pala Sapota", group: "Sapota", wholesale: 250, image: null },
  { id: 18, name: "Kalapathi Sapota", group: "Sapota", wholesale: 250, image: null },
  { id: 19, name: "Red Sapota", group: "Sapota", wholesale: 500, image: null },
  // Guava (Jama)
  { id: 20, name: "Alahabad Safedha Jama", group: "Guava", wholesale: 150, image: guavaFruit, representative: true },
  { id: 21, name: "Thai Jama White", group: "Guava", wholesale: 150, image: null },
  { id: 22, name: "K. G Jama", group: "Guava", wholesale: 150, image: null },
  { id: 23, name: "Thai Pink Jama", group: "Guava", wholesale: 150, image: null },
  { id: 24, name: "Seed Less Jama (Red Daimond Guava)", group: "Guava", wholesale: 500, image: null },
  { id: 25, name: "Black Jama (Forest Guava)", group: "Guava", wholesale: 300, image: null },
  { id: 26, name: "Straberry Guava Red", group: "Guava", wholesale: 500, image: null },
  { id: 27, name: "Straberry Guava Yellow", group: "Guava", wholesale: 500, image: null },
  { id: 28, name: "Lucknow 49 Jama", group: "Guava", wholesale: 150, image: null },
  // Custard apple (Seethaphal)
  { id: 29, name: "Ramaphalam", group: "Custard Apple", wholesale: 350, image: null },
  { id: 30, name: "Bala Nagar Seethaphal", group: "Custard Apple", wholesale: 250, image: null },
  { id: 31, name: "N. M. K Gold Seethaphal", group: "Custard Apple", wholesale: 250, image: custardApplePile, representative: true },
  { id: 32, name: "Normal Seethaphal", group: "Custard Apple", wholesale: 150, image: custardAppleFruit, representative: true, desc: "Local forest" },
  { id: 33, name: "Laxmanphal", group: "Custard Apple", wholesale: 450, image: laxmanphalFruit, representative: true },
  { id: 34, name: "Jambo Seethaphal", group: "Custard Apple", wholesale: 450, image: custardAppleHand, representative: true },
  { id: 35, name: "Red Seethaphal", group: "Custard Apple", wholesale: 450, image: null },
  { id: 36, name: "Hanumanphal", group: "Custard Apple", wholesale: 500, image: null },
  // Lemon
  { id: 37, name: "Market Lemon", group: "Lemon", wholesale: 200, image: lemonCluster, representative: true },
  { id: 38, name: "Thaiwan Lemon", group: "Lemon", wholesale: 200, image: lemonPlant, representative: true },
  { id: 39, name: "Pakistan Lemon (KP Lemon)", group: "Lemon", wholesale: 250, image: lemonSaplings, representative: true },
];
