import Image from "next/image";
import { Sprout } from "lucide-react";

// Plant photo, or a leaf placeholder for plants that don't have one yet.
export function PlantImage({ plant, ...props }) {
  if (!plant.image) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-green-100 to-green-200 text-green-700/60" role="img" aria-label={plant.name}>
        <Sprout className="size-1/3" />
      </div>
    );
  }
  return <Image src={plant.image} alt={plant.name} fill {...props} />;
}
