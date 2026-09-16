import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, GlassPanel } from "@/components/site/primitives";

const title = "Terms of Use — RovaX Technologies Limited";
const description =
  "The terms governing use of the RovaX Technologies Limited website, its content and the demonstration material presented on it.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const sections = [
  [
    "Acceptance",
    "By accessing this website you agree to these terms. If you do not agree, please discontinue use of the site.",
  ],
  [
    "Purpose of the content",
    "The content describes the services RovaX Technologies Limited is able to deliver. It is provided for general information and does not constitute a contractual offer, professional advice or a warranty of any specific result.",
  ],
  [
    "Demonstration material",
    "Dashboards, workflows, maps, metrics and monitoring views shown on this website use fictional demonstration data created to illustrate an interface. They do not represent any organization's actual data or performance.",
  ],
  [
    "Scope of services",
    "RovaX is a technology solutions and integration provider. RovaX is not a bank, a licensed payment provider or a regulated financial institution, and nothing on this website should be read as offering regulated financial services.",
  ],
  [
    "Intellectual property",
    "The RovaX name, marks, site design, text and graphics are the property of RovaX Technologies Limited unless stated otherwise. They may not be reproduced commercially without written permission.",
  ],
  [
    "Third-party technologies",
    "References to categories of technology vendors, platforms or standards are descriptive. They do not imply endorsement, certification or a formal partnership unless expressly stated.",
  ],
  [
    "Limitation of liability",
    "To the extent permitted by law, RovaX is not liable for loss arising from reliance on general website content. Engagement-specific commitments are set out in the relevant signed agreement.",
  ],
  [
    "Governing terms",
    "Where RovaX and a client enter into a written agreement, that agreement takes precedence over these website terms.",
  ],
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        lede="These terms govern use of this website and the information presented on it."
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
