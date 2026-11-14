import { malaysianGreenDwarfCoconut } from "../assets/catalogue-images-1";
import { gangaBondamDwarfCoconut } from "../assets/catalogue-images-2";
import { coconutYellowFruit, custardAppleFruit } from "../assets/catalogue-images-3";
import { custardAppleHand, custardApplePile, laxmanphalFruit, mangoFruit } from "../assets/catalogue-images-4";
import { guavaFruit, lemonCluster } from "../assets/catalogue-images-5";
import { lemonPlant } from "../assets/catalogue-images-6";
import { lemonSaplings } from "../assets/catalogue-images-7";
import { malaysianOrangeDwarfCoconut, chandaShankaraHybridCoconut } from "../assets/catalogue-images-9";
import { viyathnamJackfruit, yellowJackfruitBulbs, pinkPanasaJackfruit, honeyJackfruit, cricketSapota, bananaSapota, palaSapota, kalapathiSapota, redSapota } from "../assets/catalogue-images-10";
import { alahabadSafedhaJama, thaiJamaWhite, kgJama, thaiPinkJama, redDaimondGuava, blackJamaGuava, straberryGuavaRed, straberryGuavaYellow } from "../assets/catalogue-images-11";
import { suvarnaRekhaMango, mallikaMango, himayathMango, kesariMango, daseriMango, banginpalliMango, cherukuRasamMango } from "../assets/catalogue-images-13";
import { panduriMango, panchadharaKalasaMango, kothapallyKobbariMango, punasaMango } from "../assets/catalogue-images-14";
import { katimanMango, r2e2Mango } from "../assets/catalogue-images-15";
import { exoticMangoFruit, ramaphalamFruit, redSeethaphalFruit, nmkGoldSeethaphal, hanumanphalFruit, chowgardOrangeCoconut, chowgardGreenCoconut, chowgardYellowCoconut } from "../assets/catalogue-images-12";
import { balajiLemon, namDacMyYellowMango, appleMango, namDacMyPurpleMango } from "../assets/catalogue-images-16";
import { miyazakiMango, bananaMangoRed, pusaArunima } from "../assets/catalogue-images-17";
import { amrapaliMango, petlorLemon } from "../assets/catalogue-images-18";
import { westCoastalTallCoconut } from "../assets/catalogue-images-19";
import { sweetLemon, alphanasoMango } from "../assets/catalogue-images-20";
import { bagadoliAllaneredu, sirArdhanKatanAllaneredu } from "../assets/catalogue-images-21";
import { whiteAllaneredu, puneAnjeera } from "../assets/catalogue-images-22";
import { jamboWaterAppleRedSweet } from "../assets/catalogue-images-23";
import { tableLemon } from "../assets/catalogue-images-24";
import { hrmnApple99 } from "../assets/catalogue-images-25";
import { annaApple } from "../assets/catalogue-images-26";
import { redBigAmla } from "../assets/catalogue-images-27";
import { greenAmla, smallUsiri } from "../assets/catalogue-images-28";
import { mulberryGreenLong, mulberryBlack } from "../assets/catalogue-images-29";
import { miracleFruit } from "../assets/catalogue-images-30";
import { dragonFruit } from "../assets/catalogue-images-31";
import { velagaPanduSweet } from "../assets/catalogue-images-32";
import { milkFruit, longanFruit } from "../assets/catalogue-images-33";
import { kashmirRedAppleBer } from "../assets/catalogue-images-34";
import { karondaOrVakkayyaCherri, chekkarakeliBanana } from "../assets/catalogue-images-35";
import { missIndiaAppleBer } from "../assets/catalogue-images-36";
import { roseApple } from "../assets/catalogue-images-37";
import { sweetChintha } from "../assets/catalogue-images-38";
import { redChintha } from "../assets/catalogue-images-39";
import { pineApple } from "../assets/catalogue-images-40";
import { dhalchina } from "../assets/catalogue-images-41";
import { lavanga } from "../assets/catalogue-images-42";
import { ilachi } from "../assets/catalogue-images-43";
import { allSpice } from "../assets/catalogue-images-44";
import { peppar, biryaniLeaf } from "../assets/catalogue-images-45";
import { basmathiLeaf } from "../assets/catalogue-images-46";

// Real catalogue supplied by the nursery owner via WhatsApp on 2026-10-30.
// Names and prices preserved as supplied. Prices are per-plant wholesale (INR).
// image: null = no photo yet (leaf placeholder). representative: true = clear fruit/category
// photo supplied by owner, exact variety not visually verifiable - pending his confirmation.
export const plants = [
  // Coconut
  { id: 1, name: "Malaysian Green Dwarf Coconut", group: "Coconut", wholesale: 450, image: malaysianGreenDwarfCoconut },
  { id: 2, name: "Ganga Bavani / Ganga Bondam Hybrid Dwarf Coconut", group: "Coconut", wholesale: 600, image: gangaBondamDwarfCoconut },
  { id: 3, name: "Malaysian Yellow Dwarf Coconut", group: "Coconut", wholesale: 450, image: coconutYellowFruit },
  { id: 4, name: "Malaysian Orange Dwarf Coconut", group: "Coconut", wholesale: 450, image: malaysianOrangeDwarfCoconut },
  { id: 5, name: "Chanda Shankara Hybrid Coconut", group: "Coconut", wholesale: 550, image: chandaShankaraHybridCoconut },
  { id: 6, name: "Chowgard Orange Dwarf Coconut", group: "Coconut", wholesale: 450, image: chowgardOrangeCoconut },
  { id: 7, name: "Chowgard Green Dwarf Coconut", group: "Coconut", wholesale: 450, image: chowgardGreenCoconut },
  { id: 8, name: "Chowgard Yellow Dwarf Coconut", group: "Coconut", wholesale: 450, image: chowgardYellowCoconut },
  // Owner WhatsApp 2026-11-12 15:18 IST: name, price and photo sent together for this item.
  { id: 64, name: "West coastal tall coconut", group: "Coconut", wholesale: 200, image: westCoastalTallCoconut },
  // Mango
  { id: 9, name: "Indian Mango Varieties", group: "Mango", wholesale: 250, image: mangoFruit, representative: true, desc: "Like Mallika, kesari, Benisha, daseri, Panduri... so so." },
  { id: 10, name: "Exotic Mango Varieties", group: "Mango", wholesale: 650, image: exoticMangoFruit, desc: "Like R2E2 mango, Nam dac my mango, Miyazaki, Banana mango, katiman mango." },
  // Individual mango varieties (owner WhatsApp 2026-11-07). Names as typed. Indian mango varieties Rs.250; Katiman and R2E2 Rs.700.
  // representative: true = photo chosen by owner's discretion, exact variety not verified.
  { id: 40, name: "Suvarna rekha mango", group: "Mango", wholesale: 250, image: suvarnaRekhaMango, representative: true },
  { id: 41, name: "Mallika", group: "Mango", wholesale: 250, image: mallikaMango, representative: true },
  { id: 42, name: "Himayath mango", group: "Mango", wholesale: 250, image: himayathMango, representative: true },
  { id: 43, name: "Kesari", group: "Mango", wholesale: 250, image: kesariMango, representative: true },
  { id: 44, name: "Peddarasal mango", group: "Mango", wholesale: 250, image: mangoFruit, representative: true },
  { id: 45, name: "Banginpalli mango", group: "Mango", wholesale: 250, image: banginpalliMango, representative: true },
  { id: 46, name: "Cheruku rasam", group: "Mango", wholesale: 250, image: cherukuRasamMango, representative: true },
  { id: 47, name: "Panduri mango", group: "Mango", wholesale: 250, image: panduriMango, representative: true },
  { id: 48, name: "Daseri mango", group: "Mango", wholesale: 250, image: daseriMango, representative: true },
  { id: 49, name: "Panchadhara kalasa mango", group: "Mango", wholesale: 250, image: panchadharaKalasaMango, representative: true },
  // Real owner photo for this variety received 2026-11-12 15:18 IST ("Alphanaso Mango" / 250), replacing the representative stock image.
  { id: 50, name: "Alphanaso mango", group: "Mango", wholesale: 250, image: alphanasoMango },
  { id: 51, name: "Kothapally kobbari mango", group: "Mango", wholesale: 250, image: kothapallyKobbariMango },
  { id: 52, name: "Punasa", group: "Mango", wholesale: 250, image: punasaMango, representative: true },
  { id: 53, name: "Katiman mango", group: "Mango", wholesale: 700, image: katimanMango, representative: true },
  { id: 54, name: "R2E2 mango", group: "Mango", wholesale: 700, image: r2e2Mango, representative: true },
  // Individual mango varieties (owner WhatsApp 2026-11-12 batch). Names as typed, photos captioned in the same messages.
  // Owner 2026-11-12 15:07 IST: "Above all Exotic mango plants" - all 7 batch mangoes carry the site's exotic tag.
  { id: 55, name: "Nam dac my yellow mango", group: "Mango", wholesale: 700, image: namDacMyYellowMango, tag: "exotic" },
  { id: 56, name: "Apple mango", group: "Mango", wholesale: 700, image: appleMango, tag: "exotic" },
  { id: 57, name: "Nam dac my purple mango", group: "Mango", wholesale: 700, image: namDacMyPurpleMango, tag: "exotic" },
  { id: 58, name: "Miyazaki mango", group: "Mango", wholesale: 700, image: miyazakiMango, tag: "exotic" },
  { id: 59, name: "Banana mango red", group: "Mango", wholesale: 700, image: bananaMangoRed, tag: "exotic" },
  { id: 60, name: "Pusa Arunima", group: "Mango", wholesale: 700, image: pusaArunima, tag: "exotic" },
  { id: 61, name: "Amrapali mango", group: "Mango", wholesale: 500, image: amrapaliMango, tag: "exotic" },
  // Jackfruit
  { id: 11, name: "Viyathnam Super Early Jackfruit (Panasa)", group: "Jackfruit", wholesale: 300, image: viyathnamJackfruit },
  { id: 12, name: "Yellow Jackfruit (Normal Panasa)", group: "Jackfruit", wholesale: 250, image: yellowJackfruitBulbs },
  { id: 13, name: "Pink Panasa", group: "Jackfruit", wholesale: 350, image: pinkPanasaJackfruit },
  { id: 14, name: "Honey Jackfruit", group: "Jackfruit", wholesale: 450, image: honeyJackfruit },
  // Sapota
  { id: 15, name: "Cricket Sapota", group: "Sapota", wholesale: 400, image: cricketSapota },
  { id: 16, name: "Banana Sapota", group: "Sapota", wholesale: 350, image: bananaSapota },
  { id: 17, name: "Pala Sapota", group: "Sapota", wholesale: 250, image: palaSapota },
  { id: 18, name: "Kalapathi Sapota", group: "Sapota", wholesale: 250, image: kalapathiSapota },
  { id: 19, name: "Red Sapota", group: "Sapota", wholesale: 500, image: redSapota },
  // Guava (Jama)
  { id: 20, name: "Alahabad Safedha Jama", group: "Guava", wholesale: 150, image: alahabadSafedhaJama },
  { id: 21, name: "Thai Jama White", group: "Guava", wholesale: 150, image: thaiJamaWhite },
  { id: 22, name: "K. G Jama", group: "Guava", wholesale: 150, image: kgJama },
  { id: 23, name: "Thai Pink Jama", group: "Guava", wholesale: 150, image: thaiPinkJama },
  { id: 24, name: "Seed Less Jama (Red Daimond Guava)", group: "Guava", wholesale: 500, image: redDaimondGuava },
  { id: 25, name: "Black Jama (Forest Guava)", group: "Guava", wholesale: 300, image: blackJamaGuava },
  { id: 26, name: "Straberry Guava Red", group: "Guava", wholesale: 500, image: straberryGuavaRed },
  { id: 27, name: "Straberry Guava Yellow", group: "Guava", wholesale: 500, image: straberryGuavaYellow },
  { id: 28, name: "Lucknow 49 Jama", group: "Guava", wholesale: 150, image: guavaFruit },
  // Custard apple (Seethaphal)
  { id: 29, name: "Ramaphalam", group: "Custard Apple", wholesale: 350, image: ramaphalamFruit },
  { id: 30, name: "Bala Nagar Seethaphal", group: "Custard Apple", wholesale: 250, image: custardAppleFruit },
  { id: 31, name: "N. M. K Gold Seethaphal", group: "Custard Apple", wholesale: 250, image: nmkGoldSeethaphal },
  { id: 32, name: "Normal Seethaphal", group: "Custard Apple", wholesale: 150, image: custardAppleHand, desc: "Local forest" },
  { id: 33, name: "Laxmanphal", group: "Custard Apple", wholesale: 450, image: laxmanphalFruit },
  { id: 34, name: "Jambo Seethaphal", group: "Custard Apple", wholesale: 450, image: custardApplePile },
  { id: 35, name: "Red Seethaphal", group: "Custard Apple", wholesale: 450, image: redSeethaphalFruit },
  { id: 36, name: "Hanumanphal", group: "Custard Apple", wholesale: 500, image: hanumanphalFruit },
  // Lemon
  { id: 37, name: "Market Lemon", group: "Lemon", wholesale: 200, image: lemonCluster },
  { id: 38, name: "Thaiwan Lemon", group: "Lemon", wholesale: 200, image: lemonPlant },
  { id: 39, name: "Pakistan Lemon (KP Lemon)", group: "Lemon", wholesale: 250, image: lemonSaplings },
  // Owner WhatsApp 2026-11-12 batch; "Rate... 250 grafted", photo sent in the same batch.
  { id: 62, name: "Petlor selecton--1 lemon", group: "Lemon", wholesale: 250, image: petlorLemon, desc: "Grafted" },
  // Owner WhatsApp 2026-11-12 13:50 IST: name, price and photo sent together for this item.
  { id: 63, name: "Balaji lemon", group: "Lemon", wholesale: 200, image: balajiLemon },
  // Owner WhatsApp 2026-11-12 15:18 IST batch: name, price and photo sent together per item.
  { id: 65, name: "Table lemon", group: "Lemon", wholesale: 250, image: tableLemon },
  { id: 66, name: "Sweet lemon", group: "Lemon", wholesale: 350, image: sweetLemon },
  // Jamun (Allaneredu) - owner WhatsApp 2026-11-12 batches, names as typed, photos sent in the same batches.
  { id: 67, name: "Bagadoli Allaneredu", group: "Jamun", wholesale: 250, image: bagadoliAllaneredu },
  { id: 68, name: "Sir ardhan katan.. Allaneredu..", group: "Jamun", wholesale: 350, image: sirArdhanKatanAllaneredu },
  { id: 69, name: "White allaneredu", group: "Jamun", wholesale: 400, image: whiteAllaneredu },
  // Fig (anjeera) - owner WhatsApp 2026-11-12 15:34 IST batch.
  { id: 70, name: "Pune anjeera", group: "Fig", wholesale: 150, image: puneAnjeera },
  // Water apple - owner WhatsApp 2026-11-12 15:34 IST batch.
  { id: 71, name: "Jambo Water apple red sweet", group: "Water Apple", wholesale: 350, image: jamboWaterAppleRedSweet },
  // Apple - owner WhatsApp 2026-11-12 15:53 IST: "HRMN Apple 99" / "Rate.. 750", photo sent in the same batch.
  { id: 72, name: "HRMN Apple 99", group: "Apple", wholesale: 750, image: hrmnApple99 },
  { id: 73, name: "Anna Apple", group: "Apple", wholesale: 750, image: annaApple },
  // Amla (Indian gooseberry) - owner WhatsApp 2026-11-12 batch, approved 16:24 IST.
  { id: 74, name: "Red big Amla", group: "Amla", wholesale: 350, image: redBigAmla },
  { id: 75, name: "Green Amla", group: "Amla", wholesale: 250, image: greenAmla },
  { id: 76, name: "Small Usiri", group: "Amla", wholesale: 250, image: smallUsiri },
  // Mulberry - same batch. Literal wording kept as sent by the owner.
  { id: 77, name: "Mulberry green long...", group: "Mulberry", wholesale: 350, image: mulberryGreenLong },
  { id: 78, name: "Mulberry black", group: "Mulberry", wholesale: 200, image: mulberryBlack },
  // Miracle Fruit and Dragon fruit - same batch.
  { id: 79, name: "Miracle Fruit", group: "Miracle Fruit", wholesale: 700, image: miracleFruit },
  { id: 80, name: "Dragon fruit", group: "Dragon fruit", wholesale: 150, image: dragonFruit },
  // Owner WhatsApp 2026-11-14 batch: name, price and photo sent together per item; "Upload them" 19:07 IST.
  { id: 93, name: "Velaga pandu sweet", group: "Velaga Pandu", wholesale: 450, image: velagaPanduSweet },
  { id: 94, name: "Milk fruit", group: "Milk Fruit", wholesale: 600, image: milkFruit },
  { id: 95, name: "Longan fruit", group: "Longan", wholesale: 800, image: longanFruit },
  { id: 96, name: "Kashmir red apple ber", group: "Apple Ber", wholesale: 250, image: kashmirRedAppleBer },
  // Same batch, 19:09 IST pair.
  { id: 97, name: "Karonda or vakkayya cherri", group: "Karonda", wholesale: 250, image: karondaOrVakkayyaCherri },
  { id: 98, name: "Chekkarakeli Banana", group: "Banana", wholesale: 150, image: chekkarakeliBanana },
  // Same batch, 19:10 IST trio.
  { id: 99, name: "Miss india apple ber", group: "Apple Ber", wholesale: 250, image: missIndiaAppleBer },
  { id: 100, name: "Rose apple", group: "Rose Apple", wholesale: 600, image: roseApple },
  { id: 101, name: "Sweet chintha", group: "Chintha", wholesale: 450, image: sweetChintha },
  // Same batch, 19:12 IST pair.
  { id: 102, name: "Red chintha", group: "Chintha", wholesale: 450, image: redChintha },
  { id: 103, name: "Pine apple", group: "Pineapple", wholesale: 150, image: pineApple },
  // Spice plants - owner WhatsApp 2026-11-14 19:19-19:20 IST batch: name, price and photo sent together per item.
  { id: 104, name: "Peppar", group: "Spices", wholesale: 250, image: peppar },
  { id: 105, name: "Dhalchina", group: "Spices", wholesale: 250, image: dhalchina },
  { id: 106, name: "Lavanga", group: "Spices", wholesale: 250, image: lavanga },
  { id: 107, name: "Biryani leaf", group: "Spices", wholesale: 250, image: biryaniLeaf },
  { id: 108, name: "Ilachi", group: "Spices", wholesale: 250, image: ilachi },
  { id: 109, name: "All spice", group: "Spices", wholesale: 250, image: allSpice },
  { id: 110, name: "Basmathi leaf", group: "Spices", wholesale: 260, image: basmathiLeaf },
];
