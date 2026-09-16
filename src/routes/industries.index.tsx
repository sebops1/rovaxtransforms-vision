import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, CtaLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { industries } from "@/lib/site-data";

const title = "Industries We Serve — RovaX Technologies Limited";
const description =
  "Technology for government, banking and finance, mining, logistics, utilities, ports, construction, telecoms, healthcare, education, NGOs, agriculture and corporates.";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesIndex,
});

const detailed = new Set(["government", "banking-finance", "mining", "logistics", "utilities"]);

function IndustriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Sector problems first. <span className="text-gradient">Technology second.</span></>}
        lede="Every sector has its own constraints — remote sites, regulators, procurement rules, field conditions. We design around them."
      >
        <CtaLink to="/contact">
          Request a Consultation <ArrowRight className="size-4" aria-hidden />
        </CtaLink>
      </PageHero>

      <Section tight>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const body = (
              <>
                <h2 className="font-display text-lg font-semibold">{ind.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {ind.problems.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-glass-line bg-surface px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                {detailed.has(ind.slug) ? (
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold">
                    Read more <ArrowRight className="size-4" aria-hidden />
                  </span>
                ) : null}
              </>
            );

            return (
              <Reveal key={ind.slug} delay={(i % 3) * 60}>
                {detailed.has(ind.slug) ? (
                  <Link
                    to="/industries/$slug"
                    params={{ slug: ind.slug }}
                    className="glass glass-hover flex h-full flex-col rounded-2xl p-6"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="glass flex h-full flex-col rounded-2xl p-6">{body}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
