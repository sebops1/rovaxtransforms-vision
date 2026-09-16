import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, GlassPanel, CtaLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const title = "Insights & Resources — RovaX Technologies Limited";
const description =
  "Practical guidance on digital transformation, cybersecurity, cloud migration, fleet monitoring and executive dashboards for enterprises and public institutions.";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insights" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const briefings = [
  {
    topic: "Digital transformation",
    title: "Before you digitise a process, map who actually approves it",
    body: "Most failed workflow projects automate an undocumented process. RovaX starts by mapping the real approval chain, the exceptions and the evidence each approver needs — then builds the system around that reality.",
  },
  {
    topic: "Cybersecurity",
    title: "A vulnerability scan is not a security programme",
    body: "A raw scan produces hundreds of findings with no business context. What leadership needs is a prioritised, costed remediation plan tied to the systems that would actually hurt if they failed.",
  },
  {
    topic: "Cloud",
    title: "Cloud migration is a network and identity project first",
    body: "Bandwidth, latency to remote sites, and identity design determine whether a migration feels like an upgrade or a downgrade. Those decisions belong in the design phase, not after cutover.",
  },
  {
    topic: "Fleet & IoT",
    title: "Fuel monitoring only works when the alerting is trusted",
    body: "Sensors are the easy part. Value comes from calibrated baselines, sensible alert thresholds, and a defined person who acts on each alert within a defined time.",
  },
  {
    topic: "FinTech",
    title: "Integration layers need reconciliation designed in from day one",
    body: "Any channel connected to core financial systems should be able to prove, daily, that both sides agree. Reconciliation designed late becomes a permanent manual cost.",
  },
  {
    topic: "Executive visibility",
    title: "Agree the definition of a metric before you build the dashboard",
    body: "Most dashboard disputes are definition disputes. Fix the definitions and the data sources in writing, and the dashboard becomes a decision tool instead of a debate.",
  },
];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Practical technology thinking, <span className="text-gradient">without the jargon.</span></>}
        lede="Short briefings drawn from how these projects actually succeed or fail. A full resource library and publication archive will be added as the programme grows."
      >
        <CtaLink to="/contact">
          Discuss a Project <ArrowRight className="size-4" aria-hidden />
        </CtaLink>
      </PageHero>

      <Section tight>
        <Reveal>
          <SectionHeading eyebrow="Briefings" title="Technology briefings for decision makers." />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {briefings.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 60}>
              <GlassPanel interactive className="flex h-full flex-col p-6">
                <span className="w-fit rounded-full border border-glass-line bg-surface px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {b.topic}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
