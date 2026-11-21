import { plants } from "@/data/plants";
import { SITE_URL } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap() {
  return ["/", "/plants", "/certifications", ...plants.map((plant) => `/plants/${plant.id}`)]
    .map((path) => ({ url: new URL(path, SITE_URL).href }));
}
