import { DemoBadge } from "@/components/site/primitives";

const metrics = [
  { label: "Operational performance", value: "92.6%", delta: "+1.8 pts", tone: "up" },
  { label: "System availability", value: "99.42%", delta: "30-day", tone: "flat" },
  { label: "Fleet status", value: "62 / 74 active", delta: "9 idle · 3 service", tone: "flat" },
  { label: "Fuel efficiency", value: "4.1 km/L", delta: "-0.2 vs target", tone: "down" },
  { label: "Open requests", value: "38", delta: "12 awaiting approval", tone: "flat" },
  { label: "Approval status", value: "81% within SLA", delta: "+6 pts", tone: "up" },
  { label: "Security alerts", value: "4 open", delta: "0 critical", tone: "up" },
  { label: "Asset utilisation", value: "76%", delta: "+3 pts", tone: "up" },
  { label: "Financial operations", value: "1,284 reconciled", delta: "11 exceptions", tone: "flat" },
  { label: "Service performance", value: "94% first-response", delta: "SLA 90%", tone: "up" },
];

const series = [34, 46, 41, 55, 49, 63, 58, 71, 66, 79, 73, 86, 81, 92];

export function DashboardDemo() {
  return (
    <div className="glass overflow-hidden rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-glass-line px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="size-2.5 shrink-0 rounded-full bg-emerald pulse-node" aria-hidden />
          <p className="truncate font-display text-sm font-semibold sm:text-base">
            RovaX Executive Operations View
          </p>
        </div>
        <DemoBadge />
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[1.35fr_1fr]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-glass-line bg-surface p-3.5 transition-colors hover:border-[color-mix(in_oklab,var(--electric)_45%,transparent)]"
            >
              <p className="text-[11px] uppercase leading-tight tracking-[0.12em] text-muted-foreground">
                {m.label}
              </p>
              <p className="mt-2 font-display text-lg font-semibold leading-tight">{m.value}</p>
              <p
                className={
                  "mt-1 text-[11px] " +
                  (m.tone === "up"
                    ? "text-emerald"
                    : m.tone === "down"
                      ? "text-destructive"
                      : "text-muted-foreground")
                }
              >
                {m.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-glass-line bg-surface p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Operational index · 14 periods
            </p>
            <svg viewBox="0 0 280 90" className="mt-3 h-28 w-full" role="img" aria-label="Demonstration trend line showing a rising operational index">
              <defs>
                <linearGradient id="dash-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--electric)" />
                  <stop offset="100%" stopColor="var(--emerald)" />
                </linearGradient>
                <linearGradient id="dash-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--electric)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--electric)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {(() => {
                const pts = series.map((v, i) => `${(i / (series.length - 1)) * 280},${90 - (v / 100) * 80}`);
                return (
                  <>
                    <polygon points={`0,90 ${pts.join(" ")} 280,90`} fill="url(#dash-fill)" />
                    <polyline points={pts.join(" ")} fill="none" stroke="url(#dash-line)" strokeWidth="2" />
                  </>
                );
              })()}
            </svg>
          </div>

          <div className="rounded-xl border border-glass-line bg-surface p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Live event stream</p>
            <ul className="mt-3 space-y-2.5 text-sm">
              {[
                ["09:42", "Geofence exit — Vehicle SL-142 left Depot A"],
                ["09:37", "Requisition #2291 approved by Technical"],
                ["09:21", "Backup verified — Finance database"],
                ["08:58", "MFA enforced for 14 new accounts"],
              ].map(([t, e]) => (
                <li key={t} className="flex gap-3">
                  <span className="shrink-0 font-mono text-xs text-electric">{t}</span>
                  <span className="min-w-0 text-muted-foreground">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
