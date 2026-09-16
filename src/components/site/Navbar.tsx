import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { btnStyles } from "./primitives";
import { RovaxMark } from "./RovaxMark";

type NavItem = { label: string; to: string; params?: Record<string, string> };

const navItems: NavItem[] = [
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "FinTech", to: "/solutions/$slug", params: { slug: "fintech" } },
  { label: "Partners", to: "/partners" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-7xl items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled ? "glass" : "border border-transparent",
        )}
      >
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2.5" aria-label="RovaX Technologies home">
          <RovaxMark className="size-8 shrink-0" />
          <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
            Rova<span className="text-gradient">X</span>
          </span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={item.to as any}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                params={item.params as any}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                activeProps={{ className: "text-foreground bg-surface" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className={cn(btnStyles.primary, "ml-auto hidden px-4 py-2.5 lg:ml-3 lg:inline-flex")}>
          Discuss Your Project
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="ml-auto inline-flex size-10 items-center justify-center rounded-xl border border-glass-line bg-surface text-foreground lg:hidden"
        >
          <Menu className="size-5" aria-hidden />
        </button>
      </nav>

      {/* Mobile slide-out */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "glass absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col rounded-l-3xl p-5 transition-transform duration-400 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-semibold">
              Rova<span className="text-gradient">X</span>
            </span>
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-glass-line bg-surface"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <ul className="mt-6 flex flex-col gap-1.5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  to={item.to as any}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  params={item.params as any}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-transparent px-4 py-3.5 text-base text-muted-foreground transition-colors hover:border-glass-line hover:bg-surface hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-surface border-glass-line" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className={cn(btnStyles.primary, "mt-auto w-full")}
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </header>
  );
}
