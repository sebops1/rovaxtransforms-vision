import { Smartphone, Store, Landmark, CreditCard, Fingerprint, ShieldCheck, BarChart3, User } from "lucide-react";

const left = [
  { label: "Customer", Icon: User },
  { label: "Mobile", Icon: Smartphone },
  { label: "Merchant", Icon: Store },
  { label: "Bank", Icon: Landmark },
];

const right = [
  { label: "Payment platform", Icon: CreditCard },
  { label: "Identity / KYC", Icon: Fingerprint },
  { label: "Security", Icon: ShieldCheck },
  { label: "Analytics", Icon: BarChart3 },
];

export function FintechFlow() {
  return (
    <div className="glass rounded-3xl p-5 sm:p-7">
      <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {left.map(({ label, Icon }) => (
            <li
              key={label}
              className="flex min-w-0 items-center gap-3 rounded-xl border border-glass-line bg-surface px-4 py-3"
            >
              <Icon className="size-4 shrink-0 text-electric" aria-hidden />
              <span className="truncate text-sm">{label}</span>
            </li>
          ))}
        </ul>

        <div className="relative mx-auto w-full max-w-xs lg:w-56">
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-30 blur-2xl"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden
          />
          <div className="relative rounded-2xl border border-glass-line bg-surface-strong p-5 text-center">
            <p className="font-display font-semibold">RovaX Secure Integration Layer</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Authenticated APIs · Encryption in transit · Transaction logging · Reconciliation ·
              Monitoring
            </p>
          </div>
          <svg viewBox="0 0 200 20" className="h-6 w-full lg:hidden" aria-hidden>
            <path d="M100 0 L100 18" stroke="var(--emerald)" strokeWidth="1.6" className="flow-dash" fill="none" />
          </svg>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {right.map(({ label, Icon }) => (
            <li
              key={label}
              className="flex min-w-0 items-center gap-3 rounded-xl border border-glass-line bg-surface px-4 py-3"
            >
              <Icon className="size-4 shrink-0 text-emerald" aria-hidden />
              <span className="truncate text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 rounded-xl border border-glass-line bg-surface px-4 py-3 text-sm text-muted-foreground">
        RovaX builds, integrates and supports digital financial technology, working with established
        technology partners where specialised or regulated platforms are required. RovaX is not a bank,
        licensed payment provider or regulated financial institution.
      </p>
    </div>
  );
}
