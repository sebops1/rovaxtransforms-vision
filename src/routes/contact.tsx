import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, GlassPanel, btnStyles } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import {
  consultationSchema,
  submitConsultation,
  type ConsultationInput,
} from "@/lib/contact.functions";
import { industries, solutionInterestOptions } from "@/lib/site-data";

const title = "Contact RovaX Technologies — Request a Consultation";
const description =
  "Request a consultation with RovaX Technologies Limited on enterprise IT, cybersecurity, digital transformation, FinTech integration, fleet and IoT, or managed services.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const timelines = [
  "Immediate (0–1 month)",
  "Short term (1–3 months)",
  "This year (3–12 months)",
  "Planning / budgeting stage",
  "Not yet determined",
];

const emptyForm: ConsultationInput = {
  fullName: "",
  organization: "",
  jobTitle: "",
  email: "",
  phone: "",
  country: "",
  industry: "",
  solution: "",
  timeline: "",
  description: "",
};

type Errors = Partial<Record<keyof ConsultationInput, string>>;

function Contact() {
  const send = useServerFn(submitConsultation);
  const [values, setValues] = useState<ConsultationInput>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [reference, setReference] = useState<string | null>(null);

  const set = (key: keyof ConsultationInput) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = consultationSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ConsultationInput;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }

    setStatus("loading");
    try {
      const result = await send({ data: parsed.data });
      setReference(result.reference);
      setStatus("success");
      setValues(emptyForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Discuss a project with <span className="text-gradient">RovaX.</span></>}
        lede="Tell us about the operational problem, the environment it sits in and the outcome you need. We will respond with a considered next step — not a sales script."
      />

      <Section tight>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <Reveal>
            <GlassPanel className="p-6 sm:p-8">
              {status === "success" ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto size-12 text-emerald" aria-hidden />
                  <h2 className="mt-5 font-display text-2xl font-semibold">Request received</h2>
                  <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                    Thank you. Your consultation request has been logged with reference{" "}
                    <span className="font-mono text-foreground">{reference}</span>. A member of the
                    RovaX team will respond to the email address you provided.
                  </p>
                  <button
                    type="button"
                    className={cn(btnStyles.glass, "mt-8")}
                    onClick={() => {
                      setStatus("idle");
                      setReference(null);
                    }}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5">
                  <div>
                    <h2 className="font-display text-xl font-semibold">Request a Consultation</h2>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      All fields are required so we can route your enquiry correctly.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="fullName" value={values.fullName} onChange={set("fullName")} error={errors.fullName} autoComplete="name" />
                    <Field label="Organization" name="organization" value={values.organization} onChange={set("organization")} error={errors.organization} autoComplete="organization" />
                    <Field label="Job title" name="jobTitle" value={values.jobTitle} onChange={set("jobTitle")} error={errors.jobTitle} autoComplete="organization-title" />
                    <Field label="Business email" name="email" type="email" value={values.email} onChange={set("email")} error={errors.email} autoComplete="email" />
                    <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={set("phone")} error={errors.phone} autoComplete="tel" />
                    <Field label="Country" name="country" value={values.country} onChange={set("country")} error={errors.country} autoComplete="country-name" />
                    <SelectField
                      label="Industry"
                      name="industry"
                      value={values.industry}
                      onChange={set("industry")}
                      error={errors.industry}
                      options={industries.map((i) => i.name)}
                    />
                    <SelectField
                      label="Solution interested in"
                      name="solution"
                      value={values.solution}
                      onChange={set("solution")}
                      error={errors.solution}
                      options={solutionInterestOptions}
                    />
                    <SelectField
                      label="Estimated project timeline"
                      name="timeline"
                      value={values.timeline}
                      onChange={set("timeline")}
                      error={errors.timeline}
                      options={timelines}
                      className="sm:col-span-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium">
                      Project description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={6}
                      value={values.description}
                      onChange={(e) => set("description")(e.target.value)}
                      aria-invalid={Boolean(errors.description)}
                      aria-describedby={errors.description ? "description-error" : undefined}
                      className="mt-2 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-electric"
                      placeholder="What are you trying to solve, what systems are involved, and what does success look like?"
                    />
                    {errors.description ? (
                      <p id="description-error" className="mt-1.5 text-xs text-destructive">
                        {errors.description}
                      </p>
                    ) : null}
                  </div>

                  {status === "error" ? (
                    <p
                      role="alert"
                      className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                    >
                      <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
                      <span>
                        We couldn't submit your request just now. Please try again, or use the contact
                        details published in the footer.
                      </span>
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(btnStyles.primary, "w-full sm:w-auto")}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
                      </>
                    ) : (
                      "Request a Consultation"
                    )}
                  </button>
                  <p aria-live="polite" className="sr-only">
                    {status === "loading" ? "Submitting your request" : ""}
                  </p>
                </form>
              )}
            </GlassPanel>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-4">
              <GlassPanel className="p-6">
                <h2 className="font-display text-lg font-semibold">Contact details</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    ["Business address", "To be published"],
                    ["Telephone", "To be published"],
                    ["Corporate email", "To be published"],
                    ["LinkedIn", "To be published"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="text-foreground/80">{v}</dd>
                    </div>
                  ))}
                </dl>
              </GlassPanel>

              <GlassPanel className="p-6">
                <h2 className="font-display text-lg font-semibold">What happens next</h2>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {[
                    "We review your request and confirm receipt.",
                    "A short discovery call to understand the environment.",
                    "An outline approach, scope and indicative delivery plan.",
                  ].map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="font-mono text-xs text-electric">0{i + 1}</span>
                      <span className="min-w-0">{s}</span>
                    </li>
                  ))}
                </ol>
              </GlassPanel>

              <GlassPanel className="p-6">
                <h2 className="font-display text-lg font-semibold">Partnership enquiries</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Technology vendors, OEMs and integrators: select "Technology Partnership" as your
                  solution interest and describe your platform and target markets.
                </p>
              </GlassPanel>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-electric"
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  options,
  className,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 w-full appearance-none rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-electric"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-popover text-popover-foreground">
            {o}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
