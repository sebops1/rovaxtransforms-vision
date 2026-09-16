import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, GlassPanel, CtaLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { whyRovax, processSteps } from "@/lib/site-data";

const title = "About RovaX Technologies Limited — Technology Company";
const description =
  "RovaX Technologies Limited helps organizations modernize infrastructure, digitize operations, strengthen security and turn operational data into actionable intelligence.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  ["Integrity", "We say what is achievable and what is not."],
  ["Innovation", "We apply current technology to practical operational problems."],
  ["Security", "Protection is designed in, not added afterwards."],
  ["Reliability", "Systems are built to run, be monitored and be recovered."],
  ["Accountability", "Documented scope, documented delivery, documented support."],
  ["Partnership", "We work alongside internal teams, not around them."],
  ["Continuous Improvement", "Every deployment informs the next one."],
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About RovaX"
        title={<>A technology company built for <span className="text-gradient">serious operations.</span></>}
        lede="RovaX Technologies Limited is a technology solutions company focused on helping organizations modernize infrastructure, digitize operations, strengthen security and transform operational data into actionable intelligence."
      >
        <CtaLink to="/contact">
          Request a Consultation <ArrowRight className="size-4" aria-hidden />
        </CtaLink>
      </PageHero>

      <Section tight>
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <GlassPanel className="h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">Vision</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Build a technology company capable of delivering world-class solutions from Sierra Leone
                to Africa and global markets.
              </p>
            </GlassPanel>
          </Reveal>
          <Reveal delay={100}>
            <GlassPanel className="h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">Mission</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Help organizations improve efficiency, visibility, security and decision-making through
                practical, scalable technology.
              </p>
            </GlassPanel>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Values" title="The standards we hold ourselves to." />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, b], i) => (
            <Reveal key={t} delay={(i % 3) * 60}>
              <GlassPanel interactive className="h-full p-6">
                <h3 className="font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="Why organizations choose to work with RovaX."
            lede="No invented statistics, client logos or testimonials. Our credibility comes from how we deliver."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyRovax.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 60}>
              <GlassPanel className="h-full p-6">
                <h3 className="font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Delivery process" title="Seven steps, every engagement." />
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
    </>
  );
}
