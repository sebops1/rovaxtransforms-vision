import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, GlassPanel } from "@/components/site/primitives";

const title = "Privacy Policy — RovaX Technologies Limited";
const description =
  "How RovaX Technologies Limited collects, uses and protects personal information submitted through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  [
    "Information we collect",
    "When you submit a consultation or partnership request we collect the details you provide: your name, organization, job title, business email, telephone number, country, industry, solution interest, estimated timeline and project description.",
  ],
  [
    "How we use it",
    "We use this information solely to respond to your enquiry, assess how RovaX can assist, and maintain a record of business correspondence. We do not sell personal information.",
  ],
  [
    "Legal basis",
    "We process enquiry information on the basis of your request to be contacted and our legitimate interest in responding to business enquiries.",
  ],
  [
    "Retention",
    "Enquiry records are retained for as long as needed to progress the discussion and to meet business record-keeping obligations, after which they are deleted or anonymised.",
  ],
  [
    "Sharing",
    "Information is accessible to RovaX personnel involved in responding to your enquiry and to service providers that host or transmit our systems under confidentiality obligations. Where a partner organization must be involved to answer your enquiry, we will tell you first.",
  ],
  [
    "Security",
    "Enquiry data is transmitted over encrypted connections and access is restricted to authorised personnel.",
  ],
  [
    "Your rights",
    "You may request access to, correction of, or deletion of the personal information you submitted, and you may ask us to stop contacting you at any time. Use the corporate contact details published on this website.",
  ],
  [
    "Changes",
    "This policy will be updated as RovaX's services and jurisdictions of operation develop. The current version always appears on this page.",
  ],
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="This policy explains how RovaX Technologies Limited handles personal information submitted through this website."
      />
      <Section tight>
        <GlassPanel className="p-6 sm:p-10">
          <div className="grid gap-8">
            {sections.map(([h, b]) => (
              <section key={h}>
                <h2 className="font-display text-lg font-semibold">{h}</h2>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">{b}</p>
              </section>
            ))}
          </div>
        </GlassPanel>
      </Section>
    </>
  );
}
