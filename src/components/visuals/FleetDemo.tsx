import { DemoBadge } from "@/components/site/primitives";

const assets = [
  { id: "SL-142", type: "Haul truck", status: "Moving", fuel: 72, idle: "12m", tone: "ok" },
  { id: "SL-208", type: "Excavator", status: "Idling", fuel: 41, idle: "1h 24m", tone: "warn" },
  { id: "SL-311", type: "Fuel bowser", status: "In geofence", fuel: 88, idle: "4m", tone: "ok" },
  { id: "SL-076", type: "Light vehicle", status: "Offline", fuel: 19, idle: "—", tone: "bad" },
  { id: "SL-455", type: "Generator", status: "Running", fuel: 63, idle: "—", tone: "ok" },
];

const pins = [
  { x: 22, y: 30, tone: "ok" },
  { x: 48, y: 22, tone: "warn" },
  { x: 65, y: 52, tone: "ok" },
  { x: 34, y: 66, tone: "bad" },
  { x: 78, y: 36, tone: "ok" },
];

const toneClass: Record<string, string> = {
  ok: "bg-emerald",
  warn: "bg-chart-4",
  bad: "bg-destructive",
};

export function FleetDemo() {
  return (
    <div className="glass overflow-hidden rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-glass-line px-5 py-4">
        <p className="min-w-0 truncate font-display text-sm font-semibold sm:text-base">
          Fleet & IoT monitoring console
        </p>
        <DemoBadge />
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-glass-line bg-surface sm:aspect-[16/10]">
          <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
          <svg viewBox="0 0 100 70" className="absolute inset-0 size-full" aria-hidden>
            <path d="M5 55 C 30 50, 40 25, 72 20 L 96 16" fill="none" stroke="var(--glass-line)" strokeWidth="1.2" />
            <path d="M10 12 C 35 18, 50 45, 90 58" fill="none" stroke="var(--glass-line)" strokeWidth="1.2" />
            <circle
              cx="48"
              cy="22"
              r="14"
              fill="color-mix(in oklab, var(--electric) 12%, transparent)"
              stroke="var(--electric)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
            />
            <rect
              x="58"
              y="42"
              width="26"
              height="18"
              rx="3"
              fill="color-mix(in oklab, var(--emerald) 10%, transparent)"
              stroke="var(--emerald)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
            />
          </svg>
          {pins.map((p, i) => (
            <span
              key={i}
              className={`absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full pulse-node ${toneClass[p.tone]}`}
              style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${i * 400}ms` }}
              aria-hidden
            />
          ))}
          <div className="absolute bottom-3 left-3 rounded-lg border border-glass-line bg-background/70 px-3 py-2 text-[11px] backdrop-blur">
            <p className="text-muted-foreground">Geofences: Site perimeter · Fuel depot</p>
          </div>
          <span className="sr-only">
            Illustrative map showing demonstration vehicle positions inside two geofenced zones.
          </span>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              ["Assets", "74"],
              ["Moving", "38"],
              ["Alerts", "6"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-glass-line bg-surface px-3 py-2.5">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</p>
                <p className="font-display text-lg font-semibold">{v}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-glass-line bg-surface">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Demonstration asset status list</caption>
              <thead>
                <tr className="border-b border-glass-line text-[10px] uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-3 py-2 font-medium">Asset</th>
                  <th scope="col" className="px-3 py-2 font-medium">Status</th>
                  <th scope="col" className="px-3 py-2 font-medium">Fuel</th>
                  <th scope="col" className="px-3 py-2 font-medium">Idle</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((a) => (
                  <tr key={a.id} className="border-b border-glass-line/60 last:border-0">
                    <td className="px-3 py-2.5">
                      <span className="font-mono text-xs">{a.id}</span>
                      <span className="block text-[11px] text-muted-foreground">{a.type}</span>
                    </td>
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className={`size-1.5 rounded-full ${toneClass[a.tone]}`} aria-hidden />
                        {a.status}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <span className="block h-1.5 w-12 overflow-hidden rounded-full bg-surface-strong">
                        <span
                          className="block h-full rounded-full bg-[image:var(--gradient-brand)]"
                          style={{ width: `${a.fuel}%` }}
                        />
                      </span>
                      <span className="mt-1 block text-[11px] text-muted-foreground">{a.fuel}%</span>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-muted-foreground">{a.idle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
