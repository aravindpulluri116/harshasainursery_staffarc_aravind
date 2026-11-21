export const SITE_URL = "https://harshasainursery.com";
export const SITE_NAME = "Harsha Sai Nursery";
export const DEFAULT_DESCRIPTION = "Fruit plants, coconut and mango varieties, indoor plants and vegetable saplings from Harsha Sai Nursery in Medak, Telangana. Browse wholesale prices and plant details.";

export function pageMetadata({ title, description = DEFAULT_DESCRIPTION, path = "/", index = true }) {
  const url = new URL(path, SITE_URL).href;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: { type: "website", locale: "en_IN", siteName: SITE_NAME, title: fullTitle, description, url },
    twitter: { card: "summary", title: fullTitle, description },
  };
}

export function plantDescription(plant) {
  return `${plant.name}, ${plant.group} at Harsha Sai Nursery, Medak, Telangana. ${plant.wholesale ? `Wholesale price: INR ${plant.wholesale} per plant. ` : ""}View the plant photo and order details.`;
}
