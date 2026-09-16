import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, GlassPanel, CtaLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const title = "Technology Partnerships — RovaX Technologies Limited";
const description =
  "RovaX works with technology vendors, OEMs, cloud providers, software companies, FinTech platforms and international system integrators. Global technology, local execution.";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/partners" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: Partners,
});

const partnerTypes = [
  ["Technology vendors", "Products that need credible local implementation and support."],
  ["OEM manufacturers", "Hardware requiring deployment, commissioning and field maintenance."],
  ["Cloud providers", "Migration, landing zones and managed operations."],
  ["Software companies", "Localisation, integration and customer onboarding."],
  ["FinTech platforms", "Integration into banking, payment and identity environments."],
  ["Cybersecurity vendors", "Assessment, deployment and monitoring services."],
  ["Equipment manufacturers", "Telematics, sensors, cameras and connected devices."],
  ["International system integrators", "Local delivery capability inside larger programmes."],
  ["Specialist engineering partners", "Joint delivery on complex infrastructure scopes."],
];

const whatWeBring = [
  "Local implementation, commissioning and field support capability",
  "Integration engineering between new platforms and existing systems",
  "Training for administrators and end users",
  "Ongoing monitoring and maintenance after go-live",
  "Familiarity with enterprise and public-sector procurement processes",
];

function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title={<>Global Technology. <span className="text-gradient">Local Execution.</span></>}
        lede="RovaX brings international technology into local environments — and gives international partners a delivery team on the ground."
      >
        <CtaLink to="/contact">
          Become a Technology Partner <ArrowRight className="size-4" aria-hidden />
        </CtaLink>
      </PageHero>

      <Section tight>
        <Reveal>
          <SectionHeading
            eyebrow="Who we work with"
            title="Partnership types RovaX is open to."
            lede="We do not display partner logos unless a partnership is formally agreed and confirmed."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map(([t, b], i) => (
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
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <GlassPanel className="h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">What RovaX brings to a partnership</h2>
              <ul className="mt-5 space-y-3">
                {whatWeBring.map((w) => (
                  <li
                    key={w}
                    className="rounded-xl border border-glass-line bg-surface p-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </Reveal>
          <Reveal delay={100}>
            <GlassPanel className="relative h-full overflow-hidden p-6 sm:p-8">
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-30 blur-3xl"
                style={{ background: "var(--gradient-brand)" }}
                aria-hidden
              />
              <h2 className="relative font-display text-xl font-semibold">
                Interested in partnering with RovaX?
              </h2>
              <p className="relative mt-3 leading-relaxed text-muted-foreground">
                Tell us about your technology, the markets you want to reach and the delivery model you
                have in mind. We will respond with how RovaX could support it.
              </p>
              <CtaLink to="/contact" className="relative mt-8">
                Become a Technology Partner <ArrowRight className="size-4" aria-hidden />
              </CtaLink>
            </GlassPanel>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
