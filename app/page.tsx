"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Database,
  FileCheck,
  GitBranch,
  LockKeyhole,
  Radar,
  ShieldCheck,
} from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";

const auditHref =
  "mailto:founder@reprolayer.ai?subject=Agent%20Failure%20Audit";
const nav = ["Problem", "How it works", "Outputs", "Pilot"];

function ReproLogo({ large = false }: { large?: boolean }) {
  return (
    <svg
      aria-label="ReproLayer logo"
      viewBox="0 0 168 48"
      className={large ? "h-16 w-56" : "h-8 w-32"}
      role="img"
    >
      <path
        d="M10 25H35C45 25 45 12 56 12H73"
        fill="none"
        stroke="#7AA7FF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle
        cx="76"
        cy="12"
        r="5"
        fill="#07090D"
        stroke="#FF6B6B"
        strokeWidth="2.4"
      />
      <path
        d="M81 12H100C111 12 108 34 120 34H134"
        fill="none"
        stroke="#7AA7FF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M137 31L144 38L158 21"
        fill="none"
        stroke="#7CFFB2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="25" r="3" fill="#7AA7FF" />
      <circle cx="35" cy="25" r="3" fill="#7AA7FF" />
      <circle cx="120" cy="34" r="3" fill="#7AA7FF" />
    </svg>
  );
}

const Fade = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

function Button({
  children,
  variant = "primary",
  href = auditHref,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 border px-5 py-3 text-sm font-semibold transition ${variant === "primary" ? "border-green/50 bg-green text-[#07100b] hover:bg-[#a0ffc8]" : "border-border bg-surface/70 text-primary hover:border-blue/60 hover:bg-elevated"}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <Fade className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 text-base leading-7 text-secondary md:text-lg">
          {copy}
        </p>
      )}
    </Fade>
  );
}

function Card({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <Fade className="border border-border bg-surface/70 p-6 transition hover:-translate-y-1 hover:border-blue/40 hover:bg-elevated/80">
      {Icon && <Icon className="mb-5 h-5 w-5 text-blue" />}
      <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-secondary">{text}</p>
    </Fade>
  );
}

function HeroVisual() {
  const steps = [
    "Production failure",
    "Trace captured",
    "Root cause found",
    "Repro scenario",
    "Regression test",
  ];
  return (
    <Fade className="relative border border-border bg-elevated/70 p-5 shadow-2xl shadow-black/40">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-3 text-xs text-muted">
        <span>incident / eval pipeline</span>
        <span className="text-green">ready</span>
      </div>
      <div className="relative grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`relative min-h-28 border p-4 ${i === 0 ? "border-red/60 bg-red/5" : i === 4 ? "border-green/60 bg-green/5" : "border-border bg-background/60"}`}
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              0{i + 1}
            </p>
            <p className="mt-5 text-sm font-medium text-primary">{s}</p>
            {i === 0 && (
              <CircleAlert className="absolute right-3 top-3 h-4 w-4 text-red" />
            )}
            {i === 4 && (
              <Check className="absolute right-3 top-3 h-4 w-4 text-green" />
            )}
          </div>
        ))}
      </div>
      <svg
        className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-20 -translate-y-1/2 md:block"
        viewBox="0 0 900 80"
      >
        <path
          className="trace-dash"
          d="M0 40H900"
          stroke="#7AA7FF"
          strokeOpacity=".35"
          strokeWidth="1.5"
        />
      </svg>
    </Fade>
  );
}

export default function Page() {
  const problems = [
    [
      "Traces are not enough",
      "Logs show what happened. They rarely explain why the agent chose the wrong tool, used stale context, skipped a step, or looped.",
    ],
    [
      "Failures live everywhere",
      "Support tickets, Slack threads, Jira issues, Langfuse traces, screenshots, user complaints, and one-off engineer notes.",
    ],
    [
      "Fixes don't become tests",
      "Teams patch the immediate bug, but the failure often never becomes a reusable regression case.",
    ],
  ];
  const steps = [
    "Connect failure sources|We ingest or review exported traces, support tickets, bug reports, user complaints, and session recordings.",
    "Classify failure modes|We label failures by root cause: prompt, model, tool call, memory, retrieval, browser, auth, user ambiguity, external API, or workflow design.",
    "Reproduce critical cases|We turn the most important failures into minimal reproducible scenarios with inputs, state, expected behavior, and actual behavior.",
    "Generate regression tests|We convert failures into repeatable test cases that can run after prompt, model, tool, or workflow changes.",
    "Create a release gate|Your team gets a practical reliability checklist before shipping the next version of the agent.",
  ];
  const outputs = [
    [
      "Failure Ledger",
      "Structured database of real production failures, severity, affected flows, root cause, and status.",
      Database,
    ],
    [
      "Root Cause Report",
      "Clear breakdown of what failed and why: model, prompt, tool, memory, retrieval, browser, auth, or workflow.",
      Radar,
    ],
    [
      "Repro Packs",
      "Minimal reproducible scenarios for the highest-risk failures.",
      GitBranch,
    ],
    [
      "Regression Test Pack",
      "Reusable test cases created from real failures, not synthetic guesses.",
      FileCheck,
    ],
    [
      "Release Gate Checklist",
      "A practical checklist your team can use before every agent release.",
      ShieldCheck,
    ],
    [
      "Reliability Snapshot",
      "Weekly view of recurring failures, resolved issues, open risks, and quality trends.",
      LockKeyhole,
    ],
  ] as const;
  const checks = [
    "Captures traces",
    "Finds root cause",
    "Builds reproducible scenarios",
    "Converts incidents into regression tests",
    "Tracks repeat failures",
    "Creates release gates",
  ];
  return (
    <main className="overflow-hidden bg-background text-primary">
      <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="ReproLayer home"
          >
            <ReproLogo />
            <span className="text-sm font-semibold tracking-[-0.02em] text-primary">
              ReproLayer
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replaceAll(" ", "-")}`}
                className="text-sm text-secondary hover:text-primary"
              >
                {n}
              </a>
            ))}
            <Button>Book a failure audit</Button>
          </div>
        </div>
      </nav>
      <section className="grid-bg px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.95fr]">
          <Fade>
            <div className="flex items-center gap-4">
              <ReproLogo large />
              <span className="text-2xl font-semibold tracking-[-0.04em]">
                ReproLayer
              </span>
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
              Turn real AI agent failures into regression tests.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary">
              ReproLayer helps AI-native teams investigate production agent
              failures, reproduce them, identify root causes, and convert them
              into regression tests before the next release.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button>Book a failure audit</Button>
              <Button variant="secondary" href="#how-it-works">
                See how it works
              </Button>
            </div>
            <p className="mt-6 max-w-xl text-sm text-muted">
              For teams shipping voice agents, browser agents, support agents,
              SDR agents, and tool-calling workflows.
            </p>
          </Fade>
          <HeroVisual />
        </div>
      </section>
      <section id="problem" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Your agent failed. Now what?"
            copy="Most AI teams can see that something went wrong. The hard part is understanding why, reproducing the failure, and making sure the same class of failure never ships again."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {problems.map(([title, text]) => (
              <Card key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-surface/35 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="The incident-to-eval layer for AI agents."
            copy="ReproLayer is not another chatbot QA checklist. We connect production failures to reproducible scenarios, root-cause labels, regression tests, and release gates."
          />
          <div className="overflow-x-auto border border-border">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-elevated text-secondary">
                <tr>
                  {[
                    "Capability",
                    "Observability tools",
                    "Eval platforms",
                    "Internal QA",
                    "ReproLayer",
                  ].map((h) => (
                    <th
                      key={h}
                      className="border-b border-border p-4 font-medium"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {checks.map((c, i) => (
                  <tr key={c} className="border-b border-border/70">
                    <td className="p-4 text-primary">{c}</td>
                    {[i < 1, i === 0 || i > 2, i < 3, true].map((ok, j) => (
                      <td key={j} className="p-4 text-secondary">
                        {ok ? (
                          <Check
                            className={`h-4 w-4 ${j === 3 ? "text-green" : "text-blue"}`}
                          />
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">
            Designed to complement the traces, eval suites, issue trackers, and
            QA workflows your team already uses.
          </p>
        </div>
      </section>
      <section id="how-it-works" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="From production failure to release gate." />
          <div className="grid gap-4 lg:grid-cols-5">
            {steps.map((s, i) => {
              const [title, text] = s.split("|");
              return (
                <Fade
                  key={title}
                  className="border border-border bg-surface p-5"
                >
                  <div className="mb-5 text-xs font-semibold text-green">
                    STEP {i + 1}
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary">
                    {text}
                  </p>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>
      <section id="outputs" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="What you get." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {outputs.map(([title, text, Icon]) => (
              <Card key={title} title={title} text={text} icon={Icon} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-surface/35 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Built for teams with agents already in production."
            copy="ReproLayer is most useful when your AI agent is already touching customers, workflows, tools, browsers, or business-critical data."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Voice AI agents",
              "Customer support agents",
              "AI SDR and sales agents",
              "Browser automation agents",
              "Internal workflow agents",
              "Tool-calling and MCP-based agents",
            ].map((x) => (
              <Fade
                key={x}
                className="border border-border bg-background/60 p-4 text-sm text-secondary hover:text-primary"
              >
                {x}
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <section id="pilot" className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1fr]">
          <SectionTitle
            title="Start with a 10-day Agent Failure Audit."
            copy="Send us 20-50 failed agent sessions. We identify recurring failure patterns, reproduce the most important cases, and turn them into your first regression test pack."
          />
          <Fade className="border border-green/30 bg-elevated p-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Failure taxonomy",
                "Top recurring failure patterns",
                "10 reproducible failure scenarios",
                "5-10 regression tests",
                "Release gate checklist",
                "Short remediation plan",
              ].map((x) => (
                <div key={x} className="flex gap-3 text-sm text-secondary">
                  <Check className="h-4 w-4 shrink-0 text-green" />
                  {x}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button>Book a failure audit</Button>
              <p className="text-sm text-muted">
                Pilot pricing starts at $2,000 for early teams.
              </p>
            </div>
          </Fade>
        </div>
      </section>
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Works with your existing stack and security constraints."
            copy="ReproLayer can work from sanitized exports, limited trace samples, or inside your existing workspace. We do not require you to replace your observability or eval stack."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Langfuse",
              "LangSmith",
              "Braintrust",
              "Helicone",
              "Arize",
              "Jira",
              "Linear",
              "Slack",
              "Support tickets",
              "Session recordings",
              "CSV / JSON exports",
            ].map((x) => (
              <span
                key={x}
                className="border border-border bg-surface px-4 py-2 text-sm text-secondary"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="grid-bg px-5 py-24 text-center">
        <Fade className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Stop letting agent failures disappear into Slack threads.
          </h2>
          <p className="mt-5 text-lg text-secondary">
            Turn the next production failure into a reproducible test your team
            can trust.
          </p>
          <div className="mt-8">
            <Button>Book a failure audit</Button>
          </div>
        </Fade>
      </section>
      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <ReproLogo />
            <p className="mt-3 text-sm text-secondary">
              Incident-to-eval infrastructure for AI agents.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replaceAll(" ", "-")}`}
                className="text-sm text-muted hover:text-primary"
              >
                {n}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted">
            © 2026 ReproLayer. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
