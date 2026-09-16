import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, GlassPanel, CtaLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { solutions, processSteps } from "@/lib/site-data";

const title = "Enterprise Technology Solutions — RovaX Technologies Limited";
const description =
  "Six solution divisions: enterprise IT and cloud, cybersecurity, digital transformation and AI, FinTech, smart infrastructure and IoT, and managed services.";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Technology divisions built around <span className="text-gradient">operational outcomes.</span></>}
        lede="RovaX delivers six connected solution divisions. Most engagements begin in one and grow across several as systems and data are joined up."
      >
        <CtaLink to="/contact">
          Discuss a Project <ArrowRight className="size-4" aria-hidden />
        </CtaLink>
      </PageHero>

      <Section tight>
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="glass glass-hover flex h-full flex-col rounded-2xl p-6 sm:p-8"
              >
                <span className="font-mono text-xs text-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold">{s.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
                <ul className="mt-5 grid gap-1.5 text-sm sm:grid-cols-2">
                  {s.capabilities.slice(0, 6).map((c) => (
                    <li key={c} className="flex gap-2">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-emerald" aria-hidden />
                      <span className="min-w-0 text-muted-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold">
                  View division <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="How we deliver" title="One delivery process across every division." />
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.n} delay={i * 50}>
              <GlassPanel className="h-full p-5">
                <span className="font-mono text-sm text-gradient">{p.n}</span>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
