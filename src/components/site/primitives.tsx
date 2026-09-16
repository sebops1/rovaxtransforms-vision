import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tight,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tight?: boolean;
}) {
  return (
    <section id={id} className={cn(tight ? "py-14 sm:py-16" : "py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-glass-line bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-emerald shadow-[0_0_10px_var(--emerald)]" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{lede}</p>
      ) : null}
    </div>
  );
}

export function GlassPanel({
  children,
  className,
  interactive = false,
  ...rest
}: ComponentProps<"div"> & { interactive?: boolean }) {
  return (
    <div
      className={cn("glass rounded-2xl", interactive && "glass-hover", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-60";

export const btnStyles = {
  primary: cn(
    btnBase,
    "bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow-blue)] hover:brightness-110 hover:-translate-y-0.5",
  ),
  glass: cn(
    btnBase,
    "glass text-foreground hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--electric)_50%,transparent)]",
  ),
  quiet: cn(
    btnBase,
    "border border-glass-line bg-transparent text-foreground hover:bg-surface",
  ),
};

export function CtaLink({
  to,
  children,
  variant = "primary",
  className,
  params,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof btnStyles;
  className?: string;
  params?: Record<string, string>;
}) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} params={params as any} className={cn(btnStyles[variant], className)}>
      {children}
    </Link>
  );
}

export function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-glass-line bg-surface-strong px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
        className,
      )}
    >
      Demonstration data
    </span>
  );
}

export function StatRow({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-glass-line bg-surface p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold">{value}</p>
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
