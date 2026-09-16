import { Cloud, Banknote, Truck, Server, ShieldCheck, Factory } from "lucide-react";

const sources = [
  { label: "Cloud", Icon: Cloud },
  { label: "Finance", Icon: Banknote },
  { label: "Fleet", Icon: Truck },
  { label: "Infrastructure", Icon: Server },
  { label: "Security", Icon: ShieldCheck },
  { label: "Operations", Icon: Factory },
];

/**
 * Operations → Data → Intelligence → Decisions.
 * Six operational sources flow into the RovaX platform and out to an executive view.
 */
export function HeroVisual() {
  return (
    <div className="glass relative overflow-hidden rounded-3xl p-5 sm:p-7">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full opacity-40 blur-3xl drift-slow"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Operations → Data → Intelligence → Decisions
          </p>
          <span className="hidden text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
            Illustrative
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
          {sources.map(({ label, Icon }, i) => (
            <div
              key={label}
              className="rounded-xl border border-glass-line bg-surface p-3 text-center"
              style={{ animationDelay: `${i * 260}ms` }}
            >
              <Icon className="mx-auto size-5 text-electric" aria-hidden />
              <p className="mt-2 truncate text-[11px] text-muted-foreground sm:text-xs">{label}</p>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 320 60" className="mt-3 h-12 w-full" aria-hidden>
          <defs>
            <linearGradient id="hero-flow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--electric)" />
              <stop offset="100%" stopColor="var(--emerald)" />
            </linearGradient>
          </defs>
          {[40, 106, 160, 214, 280].map((x) => (
            <path
              key={x}
              d={`M${x} 0 C ${x} 30, 160 26, 160 58`}
              fill="none"
              stroke="url(#hero-flow)"
              strokeWidth="1.4"
              className="flow-dash"
              opacity="0.8"
            />
          ))}
        </svg>

        <div className="relative rounded-2xl border border-glass-line bg-surface-strong p-4 text-center">
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-25 blur-xl"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden
          />
          <p className="relative font-display text-sm font-semibold sm:text-base">
            RovaX Intelligence Platform
          </p>
          <p className="relative mt-1 text-xs text-muted-foreground">
            Integration · Normalisation · Automation · Analytics
          </p>
        </div>

        <svg viewBox="0 0 320 34" className="h-8 w-full" aria-hidden>
          <path
            d="M160 0 L160 32"
            stroke="var(--emerald)"
            strokeWidth="1.6"
            className="flow-dash"
            fill="none"
          />
        </svg>

        <div className="rounded-2xl border border-glass-line bg-surface p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Executive dashboard
            </p>
            <span className="size-2 rounded-full bg-emerald pulse-node" aria-hidden />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {[
              ["Availability", "99.4%"],
              ["Open requests", "38"],
              ["Fleet active", "62"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-surface-strong px-2.5 py-2">
                <p className="truncate text-[10px] uppercase tracking-wider text-muted-foreground">{k}</p>
                <p className="mt-0.5 font-display text-base font-semibold">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-12 items-end gap-1" aria-hidden>
            {[38, 52, 44, 61, 57, 72, 66, 80, 74, 88, 82, 94].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-sm bg-[image:var(--gradient-brand)] opacity-80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Demonstration data
          </p>
        </div>
      </div>
    </div>
  );
}
