import type { ReactNode } from "react";
import { Eyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="aurora relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{lede}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
