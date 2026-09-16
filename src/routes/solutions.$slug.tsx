import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, GlassPanel, CtaLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { solutions, processSteps } from "@/lib/site-data";
import { DashboardDemo } from "@/components/visuals/DashboardDemo";
import { WorkflowDemo } from "@/components/visuals/WorkflowDemo";
import { FleetDemo } from "@/components/visuals/FleetDemo";
import { SecurityLayers } from "@/components/visuals/SecurityLayers";
import { FintechFlow } from "@/components/visuals/FintechFlow";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = solutions.find((s) => s.slug === params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Solution unavailable — RovaX" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.solution.name} — RovaX Technologies Limited`;
    const d = loaderData.solution.intro.slice(0, 155);
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/solutions/${params.slug}` },
        { name: "twitter:title", content: t },
        { name: "twitter:description", content: d },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.solution.name,
            description: loaderData.solution.intro,
            provider: { "@type": "Organization", name: "RovaX Technologies Limited" },
          }),
        },
      ],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const { solution } = Route.useLoaderData();
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <PageHero eyebrow="Solution division" title={solution.name} lede={solution.tagline}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink to="/contact">
            Discuss a Project <ArrowRight className="size-4" aria-hidden />
          </CtaLink>
          <CtaLink to="/solutions" variant="glass">
            All divisions
          </CtaLink>
        </div>
      </PageHero>

      <Section tight>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassPanel className="h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">What we do</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{solution.intro}</p>
              <h3 className="mt-8 text-xs uppercase tracking-[0.16em] text-electric">Capabilities</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {solution.capabilities.map((c) => (
                  <li key={c} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-emerald" aria-hidden />
                    <span className="min-w-0 text-muted-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </Reveal>

          <Reveal delay={100}>
            <GlassPanel className="h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">What good looks like</h2>
              <ul className="mt-4 space-y-4">
                {solution.outcomes.map((o) => (
                  <li key={o} className="rounded-xl border border-glass-line bg-surface p-4 text-sm leading-relaxed text-muted-foreground">
                    {o}
                  </li>
                ))}
              </ul>
              {solution.slug === "fintech" ? (
                <p className="mt-6 rounded-xl border border-glass-line bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
                  RovaX operates as a technology integrator and solution provider. RovaX is not a bank,
                  a licensed payment provider or a regulated financial institution.
                </p>
              ) : null}
            </GlassPanel>
          </Reveal>
        </div>
      </Section>

      {solution.slug === "fintech" ? (
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow="Delivery approaches"
              title="Three ways RovaX delivers financial technology."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["RovaX Built", "Custom applications, dashboards, integrations and automation."],
              ["Partner Technology", "Integration and implementation of proven third-party financial platforms."],
              [
                "Hybrid Delivery",
                "International technology plus RovaX local implementation, customization, integration, training and support.",
              ],
            ].map(([t, b]) => (
              <GlassPanel key={t} interactive className="p-6">
                <h3 className="font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </GlassPanel>
            ))}
          </div>
          <Reveal delay={100} className="mt-8">
            <FintechFlow />
          </Reveal>
        </Section>
      ) : null}

      {solution.slug === "cybersecurity" ? (
        <Section>
          <Reveal>
            <SectionHeading eyebrow="Architecture" title="Security Built Into Every Layer." />
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <SecurityLayers />
          </Reveal>
        </Section>
      ) : null}

      {solution.slug === "digital-transformation-ai" ? (
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow="Workflow automation"
              title="Manual process to real-time executive visibility."
            />
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <WorkflowDemo />
          </Reveal>
        </Section>
      ) : null}

      {solution.slug === "smart-infrastructure-iot" ? (
        <Section>
          <Reveal>
            <SectionHeading eyebrow="Monitoring" title="Assets, fuel, geofences and device health." />
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <FleetDemo />
          </Reveal>
        </Section>
      ) : null}

      {solution.slug === "enterprise-it-cloud" || solution.slug === "managed-services" ? (
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow="Visibility"
              title="Infrastructure health, reported in management language."
            />
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <DashboardDemo />
          </Reveal>
        </Section>
      ) : null}

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Delivery process" title="How the work runs." />
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.n} delay={i * 40}>
              <GlassPanel className="h-full p-5">
                <span className="font-mono text-sm text-gradient">{p.n}</span>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tight>
        <h2 className="font-display text-xl font-semibold">Other divisions</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/solutions/$slug"
              params={{ slug: o.slug }}
              className="glass glass-hover rounded-xl p-4 text-sm font-medium"
            >
              {o.name}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
