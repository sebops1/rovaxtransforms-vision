import { Check, Clock, Paperclip, Bell, ShieldCheck, FileText } from "lucide-react";
import { DemoBadge } from "@/components/site/primitives";

const steps = [
  { title: "Request Submitted", role: "Requester · Operations", time: "Mon 08:14", state: "done", note: "2 attachments" },
  { title: "Department Review", role: "Head of Operations", time: "Mon 09:02", state: "done", note: "Comment added" },
  { title: "Technical Approval", role: "Technical Manager", time: "Mon 11:47", state: "done", note: "Specification verified" },
  { title: "Management Approval", role: "Director", time: "Tue 08:30", state: "done", note: "Approved with condition" },
  { title: "Finance / Procurement", role: "Finance Officer", time: "Tue 10:05", state: "active", note: "Budget check in progress" },
  { title: "Final Approval", role: "Chief Executive", time: "Pending", state: "pending", note: "Awaiting finance" },
  { title: "Completion", role: "System", time: "Pending", state: "pending", note: "Auto-close + archive" },
];

const controls = [
  { Icon: Clock, label: "Timestamps on every action" },
  { Icon: Bell, label: "Automated notifications" },
  { Icon: Paperclip, label: "Document attachments" },
  { Icon: FileText, label: "Complete audit history" },
  { Icon: ShieldCheck, label: "Role-based permissions" },
  { Icon: Check, label: "Status and reporting" },
];

export function WorkflowDemo() {
  return (
    <div className="glass overflow-hidden rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-glass-line px-5 py-4">
        <p className="min-w-0 truncate font-display text-sm font-semibold sm:text-base">
          Requisition #2291 · Replacement network switch
        </p>
        <DemoBadge />
      </div>

      <div className="grid gap-6 p-5 lg:grid-cols-[1.25fr_1fr]">
        <ol className="relative space-y-0">
          {steps.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-4 pb-6 last:pb-0">
              {i < steps.length - 1 ? (
                <span
                  className="absolute left-[15px] top-8 h-full w-px bg-glass-line"
                  aria-hidden
                />
              ) : null}
              <span
                className={
                  "relative z-10 grid size-8 shrink-0 place-items-center rounded-full border text-xs font-semibold " +
                  (s.state === "done"
                    ? "border-transparent bg-[image:var(--gradient-brand)] text-primary-foreground"
                    : s.state === "active"
                      ? "border-electric bg-surface-strong text-electric pulse-node"
                      : "border-glass-line bg-surface text-muted-foreground")
                }
              >
                {s.state === "done" ? <Check className="size-4" aria-hidden /> : i + 1}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p className="font-semibold">{s.title}</p>
                  <span className="font-mono text-xs text-muted-foreground">{s.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{s.role}</p>
                <p className="mt-1 text-xs text-electric">{s.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="space-y-3">
          <div className="rounded-xl border border-glass-line bg-surface p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Built-in controls</p>
            <ul className="mt-3 grid gap-2.5">
              {controls.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <Icon className="size-4 shrink-0 text-emerald" aria-hidden />
                  <span className="min-w-0 text-muted-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-glass-line bg-surface p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Executive monitoring</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                ["Cycle time", "1d 6h"],
                ["In SLA", "81%"],
                ["Open", "38"],
                ["Escalated", "3"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-surface-strong px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</p>
                  <p className="font-display text-base font-semibold">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
