"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Database,
  FileCheck,
  GitBranch,
  Radar,
  Rows3,
  ShieldCheck,
} from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";

const auditHref =
  "mailto:founder@reprolayer.ai?subject=Agent%20Failure%20Audit";
const nav = ["Problem", "Workflow", "Outputs", "Pilot"];

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

function SectionTitle({ title, copy }: { title: string; copy?: string }) {
  return (
    <Fade className="mx-auto mb-10 max-w-3xl text-center">
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
  const fields = [
    ["Agent", "Support Agent"],
    ["Workflow", "Refund request"],
    ["Status", "Regression test drafted"],
    ["Severity", "High"],
    ["Root cause", "Policy retrieval + tool selection"],
    ["Prompt version", "v42"],
    ["Model", "gpt-4.1"],
    ["Source", "Langfuse export + support ticket"],
  ];
  const flow = [
    "Failed session",
    "Root cause hypothesis",
    "Repro scenario",
    "Test spec",
  ];

  return (
    <Fade className="relative border border-border bg-elevated/80 p-5 shadow-2xl shadow-black/40">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Failure Review
          </p>
          <p className="mt-1 text-sm text-secondary">case RL-0421</p>
        </div>
        <span className="border border-green/30 bg-green/10 px-3 py-1 text-xs font-semibold text-green">
          drafted
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map(([label, value]) => (
          <div key={label} className="border border-border bg-background/55 p-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              {label}
            </p>
            <p className="mt-1 text-sm font-medium text-primary">{value}</p>
          </div>
        ))}
      </div>
      <div className="my-5 grid gap-2 md:grid-cols-4">
        {flow.map((item, index) => (
          <div
            key={item}
            className={`relative border p-3 text-sm ${index === 0 ? "border-red/50 bg-red/5" : index === 3 ? "border-green/50 bg-green/5" : "border-border bg-background/50"}`}
          >
            <span className="text-[11px] text-muted">0{index + 1}</span>
            <p className="mt-2 font-medium">{item}</p>
            {index < flow.length - 1 && (
              <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-blue md:block" />
            )}
          </div>
        ))}
      </div>
      <pre className="overflow-x-auto border border-border bg-[#07090d] p-4 text-xs leading-6 text-secondary">
{`{
  "expected": "Apply refund policy for annual plan",
  "actual": "Used monthly-plan refund policy",
  "root_cause": "retrieval + tool_selection",
  "test_status": "drafted"
}`}
      </pre>
    </Fade>
  );
}

export default function Page() {
  const problems = [
    [
      "The trace shows what happened",
      "But it usually does not tell you why the agent selected the wrong tool, used stale context, skipped a step, or misunderstood the user.",
    ],
    [
      "The evidence is scattered",
      "Failed sessions live across traces, support tickets, Slack threads, Jira issues, screenshots, user complaints, and one-off engineer notes.",
    ],
    [
      "The fix rarely becomes reusable",
      "Teams patch the immediate problem, but the same failure pattern often never becomes a regression test before the next release.",
    ],
  ];
  const workflow = [
    ["Send failed sessions", "You share 20-50 failed sessions as sanitized exports, trace links, support tickets, or JSON/CSV files."],
    ["Review and classify", "We review each case and label likely failure modes: prompt, model, memory, retrieval, tool call, browser state, auth, external API, user ambiguity, or workflow design."],
    ["Find recurring patterns", "We group similar failures and identify which ones create the highest product, customer, or release risk."],
    ["Draft reproducible scenarios", "For the most important failures, we create minimal repro specs: input, state, expected behavior, actual behavior, and suspected root cause."],
    ["Create regression test specs", "Your team receives test-ready specs that can be implemented in your eval framework, CI, or QA workflow."],
    ["Define a release checklist", "We give your team a practical gate for the next release: what must be re-tested, what remains unresolved, and what needs engineering review."],
  ];
  const outputs = [
    ["Failure Ledger", "Structured table of reviewed failures, severity, affected workflow, source, suspected root cause, and status.", Database],
    ["Failure Taxonomy", "Clear classification of recurring failure modes across prompt, model, memory, retrieval, tools, browser state, auth, APIs, and workflow design.", Rows3],
    ["Pattern Report", "Summary of the most repeated and highest-risk failure patterns found in your agent sessions.", Radar],
    ["Repro Specs", "Minimal reproducible scenario specs for selected critical failures.", GitBranch],
    ["Regression Test Specs", "Test-ready descriptions your team can implement in Braintrust, LangSmith, Langfuse, custom evals, or CI.", FileCheck],
    ["Release Review Checklist", "A practical checklist for what should be tested before the next agent release.", ShieldCheck],
  ] as const;
  const tableRows = [
    ["Works from traces and tickets", "Captures signals", "Imports selected runs", "Manual review", "Connects evidence to reusable tests"],
    ["Classifies failure modes", "Limited labels", "Test outcomes", "Ad hoc notes", "Structured taxonomy"],
    ["Identifies recurring patterns", "Dashboards", "Eval trends", "Manual grouping", "Pattern report"],
    ["Drafts reproducible scenarios", "—", "—", "Sometimes", "Selected critical failures"],
    ["Drafts regression test specs", "—", "Runs implemented tests", "Sometimes", "Test-ready specs"],
    ["Creates release checklist", "—", "Gates tests", "Manual checklist", "Practical release review"],
  ];

  return (
    <main className="overflow-hidden bg-background text-primary">
      <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3" aria-label="ReproLayer home">
            <ReproLogo />
            <span className="text-sm font-semibold tracking-[-0.02em] text-primary">ReproLayer</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-sm text-secondary hover:text-primary">
                {n}
              </a>
            ))}
            <Button>Book a failure audit</Button>
          </div>
        </div>
      </nav>

      <section className="grid-bg px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.92fr_1fr]">
          <Fade>
            <div className="flex items-center gap-4">
              <ReproLogo large />
              <span className="text-2xl font-semibold tracking-[-0.04em]">ReproLayer</span>
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
              Ship reliable AI agents.
            </h1>
            <div className="mt-6 space-y-2 text-2xl font-medium tracking-[-0.04em] text-primary md:text-3xl">
              <p>Understand every production failure.</p>
              <p>Turn the important ones into regression tests.</p>
            </div>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary">
              ReproLayer helps AI-agent teams review failed production sessions, identify recurring failure patterns, and convert high-risk incidents into reproducible test specs before the next release.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button>Book a failure audit</Button>
              <Button variant="secondary" href="#workflow">See the audit workflow</Button>
            </div>
            <p className="mt-6 max-w-xl text-sm text-muted">
              Built for teams shipping voice agents, browser agents, support agents, SDR agents, and tool-calling workflows.
            </p>
          </Fade>
          <HeroVisual />
        </div>
      </section>

      <section className="border-y border-border bg-surface/35 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="AI teams have a new reliability problem."
            copy="Traditional software bugs are usually deterministic. Agent failures are messier. The same incident can involve the model, prompt, memory, retrieval, tool call, browser state, external API, or user ambiguity."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <Fade className="border border-border bg-background/60 p-6">
              <h3 className="text-lg font-semibold">Software bug</h3>
              <p className="mt-6 text-xl text-secondary">Bug → Fix → Regression test</p>
            </Fade>
            <Fade className="border border-red/30 bg-red/5 p-6">
              <h3 className="text-lg font-semibold">Agent failure</h3>
              <p className="mt-6 text-xl text-secondary">Failure → Model? Prompt? Memory? Tool? Browser? API? User? → Unknown</p>
            </Fade>
          </div>
          <p className="mt-6 text-center text-lg text-secondary">
            ReproLayer helps turn that uncertainty into a structured failure review process.
          </p>
        </div>
      </section>

      <section id="problem" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Your agent failed. Now the hard part begins." />
          <div className="grid gap-4 md:grid-cols-3">
            {problems.map(([title, text]) => <Card key={title} title={title} text={text} icon={CircleAlert} />)}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/35 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Reliability engineering for AI agents."
            copy="ReproLayer starts as a manual, high-signal failure review service. Over time, the repeated workflow becomes infrastructure. We do not replace your observability or eval stack. We turn evidence from those tools into structured failure reviews, reproducible scenarios, and regression test specs."
          />
          <div className="overflow-x-auto border border-border">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-elevated text-secondary">
                <tr>{["Capability", "Observability tools", "Eval platforms", "Internal QA", "ReproLayer"].map((h) => <th key={h} className="border-b border-border p-4 font-medium">{h}</th>)}</tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row[0]} className="border-b border-border/70">
                    {row.map((cell, index) => <td key={cell} className={`p-4 ${index === 0 ? "text-primary" : index === 4 ? "text-green" : "text-secondary"}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="workflow" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="From failed sessions to test specs." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map(([title, text], i) => (
              <Fade key={title} className="border border-border bg-surface p-5">
                <div className="mb-5 text-xs font-semibold text-green">STEP {i + 1}</div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{text}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section id="outputs" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="What you actually receive." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {outputs.map(([title, text, Icon]) => <Card key={title} title={title} text={text} icon={Icon} />)}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/35 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle title="Example failure review" />
          <Fade className="border border-border bg-elevated p-7">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">Example: support agent applies the wrong refund policy</h3>
              <span className="w-fit border border-blue/30 bg-blue/10 px-3 py-1 text-xs text-blue">Realistic example, not customer data.</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["Source", "Support ticket + trace export"],
                ["Agent", "Customer support agent"],
                ["Workflow", "Refund request"],
                ["Failure", "Agent applied monthly-plan policy to annual-plan customer"],
                ["Suspected root cause", "Retrieval returned stale policy snippet; tool call used incomplete account context"],
                ["Repro scenario", "Annual-plan customer asks for refund after 14 days. Agent must retrieve annual policy and verify account type before answering."],
                ["Regression test spec", "Given annual customer + refund request + policy docs, expected answer must reference annual-plan policy and call account verification tool before final response."],
              ].map(([label, value]) => (
                <div key={label} className="border border-border bg-background/50 p-4 md:[&:nth-last-child(-n+2)]:col-span-2">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-secondary">{value}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <section id="pilot" className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1fr]">
          <SectionTitle
            title="Start with a 10-day Agent Failure Audit."
            copy="Send us 20-50 failed sessions. We review them manually, identify recurring failure modes, and turn the highest-risk cases into reproducible scenarios and regression test specs."
          />
          <Fade className="border border-green/30 bg-elevated p-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {["Reviewed failure ledger", "Failure taxonomy", "Top 5-10 recurring patterns", "5-10 repro specs", "5-10 regression test specs", "Release review checklist", "30-minute walkthrough call"].map((x) => (
                <div key={x} className="flex gap-3 text-sm text-secondary"><Check className="h-4 w-4 shrink-0 text-green" />{x}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button>Book a failure audit</Button>
              <div className="text-sm text-muted">
                <p>Early pilot pricing starts at $2,000.</p>
                <p>This is a founder-led service. No platform migration required.</p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Works from exports. No platform migration required."
            copy="ReproLayer can work from sanitized exports, limited trace samples, support tickets, screenshots, JSON/CSV files, or temporary read-only access to selected sessions. You stay in control of what you share."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {["Langfuse exports", "LangSmith traces", "Braintrust eval logs", "Helicone logs", "Arize traces", "Jira / Linear issues", "Slack threads", "Zendesk / Intercom tickets", "CSV / JSON", "Screenshots", "Session recordings"].map((x) => (
              <span key={x} className="border border-border bg-surface px-4 py-2 text-sm text-secondary">{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-bg px-5 py-24 text-center">
        <Fade className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Do not let agent failures disappear into Slack threads.
          </h2>
          <p className="mt-5 text-lg text-secondary">
            Turn your next set of failed sessions into a structured failure ledger, repro specs, and regression test specs your team can act on.
          </p>
          <div className="mt-8"><Button>Book a failure audit</Button></div>
        </Fade>
      </section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <ReproLogo />
            <p className="mt-3 text-sm text-secondary">Reliability reviews for AI agents.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="text-sm text-muted hover:text-primary">{n}</a>)}
          </div>
          <p className="text-sm text-muted">© 2026 ReproLayer. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
