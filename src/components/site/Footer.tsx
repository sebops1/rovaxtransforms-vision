import { Link } from "@tanstack/react-router";
import { solutions, industries } from "@/lib/site-data";
import { RovaxMark } from "./RovaxMark";

const company = [
  { label: "About RovaX", to: "/about" },
  { label: "Partners", to: "/partners" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Cookie Policy", to: "/cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-glass-line bg-[color-mix(in_oklab,var(--background)_92%,black)]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <RovaxMark className="size-9" />
              <span className="font-display text-lg font-semibold">
                Rova<span className="text-gradient">X</span> Technologies Limited
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Enterprise Technology · Digital Transformation · FinTech · Smart Infrastructure.
              Transforming operations through intelligent technology.
            </p>

            <dl className="mt-6 space-y-2 text-sm">
              {[
                ["Business address", "To be published"],
                ["Telephone", "To be published"],
                ["Corporate email", "To be published"],
                ["LinkedIn", "To be published"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-wrap gap-x-2">
                  <dt className="text-muted-foreground">{k}:</dt>
                  <dd className="text-foreground/70">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <FooterCol title="Solutions">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Industries">
            {industries
              .filter((i) => i.featured)
              .map((i) => (
                <li key={i.slug}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: i.slug }}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/industries" className="text-muted-foreground transition-colors hover:text-foreground">
                All industries
              </Link>
            </li>
          </FooterCol>

          <FooterCol title="Company">
            {company.map((c) => (
              <li key={c.to}>
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={c.to as any}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-glass-line pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RovaX Technologies Limited. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.to}>
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={l.to as any}
                  className="transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}
