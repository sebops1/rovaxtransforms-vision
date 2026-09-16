import { cn } from "@/lib/utils";

/** RovaX glass monogram: two intersecting strokes forming an X inside a rounded glass tile. */
export function RovaxMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" role="img" aria-label="RovaX logo" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient id="rovax-mark-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--electric)" />
          <stop offset="100%" stopColor="var(--emerald)" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="11"
        fill="var(--surface-strong)"
        stroke="var(--glass-line)"
      />
      <path
        d="M11 11 L29 29 M29 11 L11 29"
        stroke="url(#rovax-mark-grad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="3.2" fill="var(--background)" stroke="url(#rovax-mark-grad)" strokeWidth="1.6" />
    </svg>
  );
}
