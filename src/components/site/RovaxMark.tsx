import { cn } from "@/lib/utils";
import emblem from "@/assets/rovax-emblem.png";

/** RovaX liquid-glass RX emblem. */
export function RovaxMark({ className }: { className?: string }) {
  return (
    <img
      src={emblem}
      alt="RovaX Technologies logo"
      width={512}
      height={512}
      loading="eager"
      decoding="async"
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
