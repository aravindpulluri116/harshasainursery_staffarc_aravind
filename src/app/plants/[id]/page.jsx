import { notFound } from "next/navigation";
import { pageMetadata, plantDescription, SITE_URL } from "@/lib/seo";
import { plants } from "@/data/plants";
import { PlantDetail } from "@/components/plant-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  return plants.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const plant = plants.find((p) => String(p.id) === id);
  if (!plant) notFound();
  return pageMetadata({ title: `${plant.name} | Harsha Sai Nursery`, description: plantDescription(plant), path: `/plants/${plant.id}` });
}

export default async function PlantPage({ params }) {
  const { id } = await params;
  const plant = plants.find((p) => String(p.id) === id) ?? null;
  if (!plant) notFound();
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Plants", item: `${SITE_URL}/plants` },
      { "@type": "ListItem", position: 3, name: plant.name, item: `${SITE_URL}/plants/${plant.id}` },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} /><PlantDetail plant={plant} /></>;
}
