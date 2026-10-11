import { damMay } from "@/data/lettering";

// thought cloud, tail included. the outline is its own shape so it scales without thinning
export default function DamMay({ vi, className = "" }: { vi: keyof typeof damMay; className?: string }) {
  const may = damMay[vi];
  return (
    <svg viewBox={`0 0 ${may.rong} ${may.cao}`} aria-hidden className={`bong-hinh overflow-visible ${className}`}>
      <path d={may.nen} fill="#fff" />
      <path d={may.vien} fill="#b4e6f6" fillOpacity={0.79} />
    </svg>
  );
}
