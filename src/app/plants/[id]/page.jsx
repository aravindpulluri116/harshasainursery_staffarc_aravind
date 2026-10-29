import { plants } from "@/data/plants";
import { PlantDetail } from "@/components/plant-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  return plants.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const plant = plants.find((p) => String(p.id) === id);
  return {
    title: plant ? `${plant.name} — Harsha Sai Nursery` : "Plant — Harsha Sai Nursery",
  };
}

export default async function PlantPage({ params }) {
  const { id } = await params;
  const plant = plants.find((p) => String(p.id) === id) ?? null;
  return <PlantDetail plant={plant} />;
}
