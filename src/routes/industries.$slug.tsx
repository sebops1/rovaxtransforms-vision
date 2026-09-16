import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, GlassPanel, CtaLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { industries, solutions, scenarios } from "@/lib/site-data";

const relevantSolutions: Record<string, string[]> = {
  government: ["digital-transformation-ai", "cybersecurity", "enterprise-it-cloud", "managed-services"],
  "banking-finance": ["fintech", "cybersecurity", "enterprise-it-cloud", "digital-transformation-ai"],
  mining: ["smart-infrastructure-iot", "enterprise-it-cloud", "managed-services", "cybersecurity"],
  logistics: ["smart-infrastructure-iot", "digital-transformation-ai", "managed-services"],
  utilities: ["smart-infrastructure-iot", "cybersecurity", "digital-transformation-ai"],
};

const relevantScenarios: Record<string, string[]> = {
  government: ["digital-procurement-workflow", "executive-operations-center", "secure-enterprise-infrastructure"],
  "banking-finance": ["digital-financial-integration", "secure-enterprise-infrastructure", "executive-operations-center"],
  mining: ["smart-fleet-operations", "executive-operations-center", "secure-enterprise-infrastructure"],
  logistics: ["smart-fleet-operations", "digital-procurement-workflow"],
  utilities: ["smart-utility-monitoring", "executive-operations-center"],
};

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Industry unavailable — RovaX" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.industry.name} Technology Solutions — RovaX`;
    const d = loaderData.industry.summary;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/industries/${params.slug}` },
        { name: "twitter:title", content: t },
        { name: "twitter:description", content: d },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();
  const sols = solutions.filter((s) => (relevantSolutions[industry.slug] ?? []).includes(s.slug));
  const scens = scenarios.filter((s) => (relevantScenarios[industry.slug] ?? []).includes(s.slug));

  return (
    <>
      <PageHero eyebrow="Industry" title={industry.name} lede={industry.summary}>
        <CtaLink to="/contact">
          Discuss a Project <ArrowRight className="size-4" aria-hidden />
        </CtaLink>
      </PageHero>

      <Section tight>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <GlassPanel className="h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">Problems we can address</h2>
              <ul className="mt-5 grid gap-2.5">
                {industry.problems.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald" aria-hidden />
                    <span className="min-w-0 text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </Reveal>
          <Reveal delay={100}>
            <GlassPanel className="h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">Divisions most often involved</h2>
              <ul className="mt-5 grid gap-2.5">
                {sols.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/solutions/$slug"
                      params={{ slug: s.slug }}
                      className="flex items-center justify-between gap-3 rounded-xl border border-glass-line bg-surface px-4 py-3 text-sm transition-colors hover:border-[color-mix(in_oklab,var(--electric)_45%,transparent)]"
                    >
                      <span className="min-w-0 truncate">{s.name}</span>
                      <ArrowRight className="size-4 shrink-0 text-electric" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </Reveal>
        </div>
      </Section>

      {scens.length ? (
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow="Solutions in action"
              title="Demonstration scenarios for this sector"
              lede="Illustrative scenarios, not customer case studies."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {scens.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <GlassPanel className="h-full p-6">
                  <span className="rounded-full border border-glass-line bg-surface px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Solution Scenario
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.challenge}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.outcome}</p>
                </GlassPanel>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tight>
        <Link to="/industries" className="text-sm text-muted-foreground hover:text-foreground">
          ← All industries
        </Link>
      </Section>
    </>
  );
}
