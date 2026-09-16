import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, GlassPanel } from "@/components/site/primitives";

const title = "Cookie Policy — RovaX Technologies Limited";
const description =
  "How cookies and similar technologies are used on the RovaX Technologies Limited website, and how you can control them.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

const sections = [
  [
    "What cookies are",
    "Cookies are small files placed on your device by a website. They can hold settings, session information or measurement identifiers.",
  ],
  [
    "Cookies used on this site",
    "This website is currently built to operate without advertising or third-party tracking cookies. Strictly necessary cookies may be used to keep the site secure and functioning correctly.",
  ],
  [
    "Analytics",
    "If website analytics are introduced in future, this policy will be updated first to state what is measured, how long it is retained and how you can opt out.",
  ],
  [
    "Managing cookies",
    "You can block or delete cookies in your browser settings at any time. Blocking strictly necessary cookies may affect how parts of the site behave.",
  ],
  [
    "Contact",
    "Questions about this policy can be directed to RovaX using the corporate contact details published on this website.",
  ],
];

function Cookies() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        lede="How cookies and similar technologies are used on this website."
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
