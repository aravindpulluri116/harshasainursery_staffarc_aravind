import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-amber-400 text-green-950 hover:bg-amber-300",
        outline: "border border-white/70 text-white hover:bg-white hover:text-green-900",
        outlineDark: "border border-green-700 text-green-800 hover:bg-green-700 hover:text-white",
        whatsapp: "bg-[#25d366] text-white hover:bg-[#1ebe5a]",
        ghost: "text-ink hover:bg-green-100",
      },
      size: {
        default: "h-10 px-5",
        lg: "h-11 px-6 md:h-12 md:px-8",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
