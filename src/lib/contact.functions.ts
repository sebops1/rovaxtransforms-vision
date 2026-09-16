import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  organization: z.string().trim().min(2, "Please enter your organization").max(160),
  jobTitle: z.string().trim().min(2, "Please enter your job title").max(120),
  email: z.string().trim().email("Enter a valid business email").max(180),
  phone: z.string().trim().min(6, "Enter a reachable phone number").max(40),
  country: z.string().trim().min(2, "Please enter your country").max(80),
  industry: z.string().trim().min(2, "Please select your industry").max(80),
  solution: z.string().trim().min(2, "Please select a solution area").max(80),
  timeline: z.string().trim().min(2, "Please select an estimated timeline").max(80),
  description: z
    .string()
    .trim()
    .min(20, "Please describe the project in at least 20 characters")
    .max(4000),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

/**
 * Receives consultation requests. Currently records the enquiry server-side and
 * returns a reference; swap the persistence/notification step for a database or
 * CRM integration without changing the client contract.
 */
export const submitConsultation = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => consultationSchema.parse(data))
  .handler(async ({ data }) => {
    const reference = `RVX-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    console.info("[consultation]", {
      reference,
      organization: data.organization,
      country: data.country,
      industry: data.industry,
      solution: data.solution,
      timeline: data.timeline,
      receivedAt: new Date().toISOString(),
    });
    return { ok: true as const, reference };
  });
