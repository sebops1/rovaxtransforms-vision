import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  Section,
  SectionHeading,
  GlassPanel,
  CtaLink,
  Eyebrow,
  btnStyles,
} from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { DashboardDemo } from "@/components/visuals/DashboardDemo";
import { WorkflowDemo } from "@/components/visuals/WorkflowDemo";
import { FleetDemo } from "@/components/visuals/FleetDemo";
import { SecurityLayers } from "@/components/visuals/SecurityLayers";
import { FintechFlow } from "@/components/visuals/FintechFlow";
import { solutions, industries, scenarios, processSteps, whyRovax } from "@/lib/site-data";

const title = "RovaX Technologies Limited — Technology That Moves Organizations Forward";
const description =
  "RovaX Technologies Limited designs, integrates and supports secure digital systems: enterprise IT and cloud, cybersecurity, digital transformation, FinTech integration, IoT and managed services in Sierra Leone and beyond.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const transformation = [
  "Manual Process",
  "Digital Workflow",
  "Centralized Data",
  "Automated Notifications",
  "Management Dashboard",
  "Real-Time Executive Visibility",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="aurora relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
          <Reveal>
            <Eyebrow>Enterprise Technology · Digital Transformation · FinTech</Eyebrow>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-[3.9rem]">
              Technology That Moves{" "}
              <span className="text-gradient">Organizations Forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              RovaX Technologies Limited designs, integrates and supports secure digital systems that
              connect operations, automate processes and give leaders the visibility they need to make
              better decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink to="/contact">
                Discuss Your Project <ArrowRight className="size-4" aria-hidden />
              </CtaLink>
              <CtaLink to="/solutions" variant="glass">
                Explore Our Solutions
              </CtaLink>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Design", "Architecture first"],
                ["Integrate", "Systems connected"],
                ["Secure", "Every layer"],
                ["Support", "Long term"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-glass-line bg-surface px-3.5 py-3">
                  <dt className="font-display text-sm font-semibold">{k}</dt>
                  <dd className="mt-0.5 text-xs text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* POSITIONING */}
      <Section tight>
        <Reveal>
          <GlassPanel className="p-6 sm:p-10">
            <p className="text-balance font-display text-xl leading-snug sm:text-2xl lg:text-3xl">
              "From infrastructure to intelligence, RovaX designs, integrates and supports technology
              that helps organizations operate smarter."
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A technology solutions and digital transformation company helping organizations modernize
              operations, connect systems, improve visibility, strengthen security, and make better
              decisions through intelligent technology.
            </p>
          </GlassPanel>
        </Reveal>
      </Section>

      {/* SOLUTIONS */}
      <Section id="solutions">
        <Reveal>
          <SectionHeading
            eyebrow="Solution divisions"
            title="Six divisions. One delivery standard."
            lede="Each division solves a distinct operational problem — and they are designed to work together."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="glass glass-hover flex h-full flex-col rounded-2xl p-6"
              >
                <span className="font-mono text-xs text-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {s.capabilities.slice(0, 4).map((c) => (
                    <li key={c} className="flex gap-2">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-emerald" aria-hidden />
                      <span className="min-w-0">{c}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-foreground">
                  View division <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EXECUTIVE VISIBILITY */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Executive visibility"
            title="From Operations to Executive Visibility"
            lede="RovaX connects operational systems and transforms complex data into actionable management intelligence."
          />
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <DashboardDemo />
        </Reveal>
        <p className="mt-4 text-xs text-muted-foreground">
          All figures shown are demonstration data created to illustrate the interface. They do not
          represent any organization's actual performance.
        </p>
      </Section>

      {/* AUTOMATION */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Workflow automation"
            title="Replace Manual Processes With Intelligent Workflows"
            lede="Requests captured once, routed automatically, approved with accountability, and reported without chasing anyone."
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
            {transformation.map((t, i) => (
              <li
                key={t}
                className="relative rounded-xl border border-glass-line bg-surface px-4 py-3 text-sm"
              >
                <span className="font-mono text-[11px] text-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 leading-snug">{t}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120} className="mt-6">
          <WorkflowDemo />
        </Reveal>
      </Section>

      {/* FLEET & IoT */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Fleet, IoT & smart infrastructure"
            title="Know Where Your Assets Are. Know How They're Performing."
            lede="Vehicles, equipment, fuel sensors, cameras, IoT devices and field operations connect into the RovaX platform — and out to an executive dashboard."
          />
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <FleetDemo />
        </Reveal>
      </Section>

      {/* CYBERSECURITY */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Cybersecurity"
              title="Security Built Into Every Layer."
              lede="Users, endpoints, networks, cloud, applications and data feed a monitoring layer that turns raw events into security visibility leadership can act on."
            />
            <CtaLink
              to="/solutions/$slug"
              params={{ slug: "cybersecurity" }}
              variant="glass"
              className="mt-8"
            >
              Explore cybersecurity <ArrowRight className="size-4" aria-hidden />
            </CtaLink>
          </Reveal>
          <Reveal delay={100}>
            <SecurityLayers />
          </Reveal>
        </div>
      </Section>

      {/* FINTECH */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="FinTech"
            title="Building the Infrastructure for Digital Finance."
            lede="RovaX connects customers, mobile channels, merchants, banks, payment platforms, identity verification, security and analytics through a secure integration layer."
          />
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <FintechFlow />
        </Reveal>
        <Reveal delay={140} className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                "RovaX Built",
                "Custom applications, dashboards, integrations and automation engineered by our team.",
              ],
              [
                "Partner Technology",
                "Integration and implementation of proven third-party financial platforms.",
              ],
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
        </Reveal>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Built around how your sector actually operates."
            lede="The technology is only credible when it answers the operational problem in front of you."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 50}>
              <Link
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="glass glass-hover flex h-full flex-col rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {ind.problems.slice(0, 4).map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-glass-line bg-surface px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-8">
          <Link to="/industries" className={btnStyles.quiet}>
            All industries <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </Section>

      {/* WHY ROVAX */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Why RovaX"
            title="Credibility earned through delivery, not claims."
            lede="We publish no invented statistics, logos or testimonials. What follows is how we work."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyRovax.map((w, i) => (
            <Reveal key={w.title} delay={i * 50}>
              <GlassPanel interactive className="h-full p-6">
                <h3 className="font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Delivery process"
            title="A defined path from problem to supported solution."
          />
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.n} delay={i * 50}>
              <div className="glass h-full rounded-2xl p-5">
                <span className="font-mono text-sm text-gradient">{p.n}</span>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SCENARIOS */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Solutions in action"
            title="Demonstration solution scenarios"
            lede="These are illustrative scenarios showing how RovaX approaches common problems. They are not customer case studies."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <GlassPanel interactive className="flex h-full flex-col p-6">
                <span className="w-fit rounded-full border border-glass-line bg-surface px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Solution Scenario
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-electric">Challenge</dt>
                    <dd className="mt-1 leading-relaxed text-muted-foreground">{s.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-electric">Solution</dt>
                    <dd className="mt-1 leading-relaxed text-muted-foreground">{s.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-electric">Technology</dt>
                    <dd className="mt-1.5 flex flex-wrap gap-1.5">
                      {s.technology.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-glass-line bg-surface px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-emerald">
                      Potential business outcome
                    </dt>
                    <dd className="mt-1 leading-relaxed text-muted-foreground">{s.outcome}</dd>
                  </div>
                </dl>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <GlassPanel className="relative overflow-hidden p-8 text-center sm:p-14">
            <div
              className="pointer-events-none absolute inset-x-0 -top-24 h-48 opacity-30 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden
            />
            <h2 className="relative text-balance text-3xl font-semibold sm:text-4xl">
              Transforming Operations Through Intelligent Technology.
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tell us the operational problem. We will tell you honestly whether technology is the
              right answer — and what it would take to deliver it.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaLink to="/contact">Request a Consultation</CtaLink>
              <CtaLink to="/partners" variant="glass">
                Become a Technology Partner
              </CtaLink>
            </div>
          </GlassPanel>
        </Reveal>
      </Section>
    </>
  );
}
