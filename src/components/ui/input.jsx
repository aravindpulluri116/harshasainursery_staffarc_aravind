import { cn } from "@/lib/utils";

const field =
  "w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/50 outline-none transition-colors focus:border-green-600 focus:ring-2 focus:ring-green-600/20 aria-invalid:border-red-500";

export function Input({ className, ...props }) {
  return <input className={cn(field, className)} {...props} />;
}

export function Textarea({ className, ...props }) {
  return <textarea className={cn(field, "resize-none", className)} {...props} />;
}
