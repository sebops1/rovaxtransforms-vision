import { Users, Laptop, Network, Cloud, AppWindow, Database } from "lucide-react";

const layers = [
  { label: "Users", Icon: Users, detail: "Identity, MFA, privilege" },
  { label: "Endpoints", Icon: Laptop, detail: "EDR, patching, encryption" },
  { label: "Networks", Icon: Network, detail: "Segmentation, filtering" },
  { label: "Cloud", Icon: Cloud, detail: "Posture, configuration" },
  { label: "Applications", Icon: AppWindow, detail: "Access, logging, testing" },
  { label: "Data", Icon: Database, detail: "Classification, backup" },
];

export function SecurityLayers() {
  return (
    <div className="glass rounded-3xl p-5 sm:p-7">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {layers.map(({ label, Icon, detail }) => (
          <div
            key={label}
            className="rounded-xl border border-glass-line bg-surface p-4 transition-colors hover:border-[color-mix(in_oklab,var(--electric)_45%,transparent)]"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface-strong">
                <Icon className="size-4 text-electric" aria-hidden />
              </span>
              <p className="truncate font-semibold">{label}</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
          </div>
        ))}
      </div>

      <svg viewBox="0 0 320 30" className="h-8 w-full" aria-hidden>
        {[40, 100, 160, 220, 280].map((x) => (
          <path
            key={x}
            d={`M${x} 0 C ${x} 16, 160 14, 160 28`}
            fill="none"
            stroke="var(--electric)"
            strokeWidth="1.2"
            className="flow-dash"
            opacity="0.7"
          />
        ))}
      </svg>

      <div className="rounded-2xl border border-glass-line bg-surface-strong p-4 text-center">
        <p className="font-display font-semibold">Security & Monitoring Layer</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Log collection · Correlation · Alerting · Incident visibility
        </p>
      </div>

      <svg viewBox="0 0 320 26" className="h-7 w-full" aria-hidden>
        <path d="M160 0 L160 24" stroke="var(--emerald)" strokeWidth="1.6" className="flow-dash" fill="none" />
      </svg>

      <div className="rounded-2xl border border-glass-line bg-surface p-4 text-center">
        <p className="font-display font-semibold">Executive Security Visibility</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Posture, open risks and remediation progress in language leadership can act on.
        </p>
      </div>
    </div>
  );
}
