export type PathName =
  | "All"
  | "Analytics & BI"
  | "AI & Machine Learning"
  | "Product & Systems"
  | "Security & Risk"
  | "Business Strategy"
  | "Founder Projects";

export const paths: PathName[] = [
  "All",
  "Analytics & BI",
  "AI & Machine Learning",
  "Product & Systems",
  "Security & Risk",
  "Business Strategy",
  "Founder Projects",
];

export const pathThemes: Record<PathName, {
  label: string;
  headline: string;
  description: string;
  shell: string;
  text: string;
  muted: string;
  accent: string;
  accentColor: string;
  accentSoft: string;
  accentGlow: string;
  accentBorder: string;
  card: string;
  border: string;
}> = {
  All: {
    label: "Full system view",
    headline: "Systems-oriented AI/data builder.",
    description: "A premium command center for analytics, AI, product, strategy, and security-aware work.",
    shell: "bg-[#050505]",
    text: "text-slate-50",
    muted: "text-zinc-400",
    accent: "from-[#F5D76E] to-[#D4AF37]",
    accentColor: "#D4AF37",
    accentSoft: "#F5D76E",
    accentGlow: "rgba(212, 175, 55, 0.18)",
    accentBorder: "rgba(245, 215, 110, 0.35)",
    card: "bg-[#101010]/82 backdrop-blur-xl",
    border: "border-[#f5d76e]/15",
  },
  "Analytics & BI": {
    label: "Analytical clarity",
    headline: "Dashboards, SQL, business questions, measurable decisions.",
    description: "Clean data storytelling, BI dashboards, modeling, and decision support.",
    shell: "bg-[#050505]",
    text: "text-slate-50",
    muted: "text-zinc-400",
    accent: "from-[#F5F5F5] to-[#D4D4D8]",
    accentColor: "#F5F5F5",
    accentSoft: "#D4D4D8",
    accentGlow: "rgba(245, 245, 245, 0.14)",
    accentBorder: "rgba(245, 245, 245, 0.32)",
    card: "bg-[#101010]/82 backdrop-blur-xl",
    border: "border-[#f5d76e]/15",
  },
  "AI & Machine Learning": {
    label: "Model intelligence",
    headline: "AI agents, ML pipelines, NLP, and cloud experimentation.",
    description: "Technical projects that connect models to real decision workflows.",
    shell: "bg-[#050505]",
    text: "text-slate-50",
    muted: "text-zinc-400",
    accent: "from-[#86EFAC] to-[#22C55E]",
    accentColor: "#22C55E",
    accentSoft: "#86EFAC",
    accentGlow: "rgba(34, 197, 94, 0.18)",
    accentBorder: "rgba(134, 239, 172, 0.35)",
    card: "bg-[#101010]/82 backdrop-blur-xl",
    border: "border-[#f5d76e]/15",
  },
  "Product & Systems": {
    label: "Built product proof",
    headline: "From idea to workflows, screens, APIs, and shipping decisions.",
    description: "Product systems with architecture, UX logic, and implementation depth.",
    shell: "bg-[#050505]",
    text: "text-slate-50",
    muted: "text-zinc-400",
    accent: "from-[#D1D5DB] to-[#9CA3AF]",
    accentColor: "#9CA3AF",
    accentSoft: "#D1D5DB",
    accentGlow: "rgba(156, 163, 175, 0.16)",
    accentBorder: "rgba(209, 213, 219, 0.34)",
    card: "bg-[#101010]/82 backdrop-blur-xl",
    border: "border-[#f5d76e]/15",
  },
  "Security & Risk": {
    label: "Risk-aware systems",
    headline: "Access control, privacy, governance, and adversarial thinking.",
    description: "Security-aware design without gimmicky hacker aesthetics.",
    shell: "bg-[#050505]",
    text: "text-slate-50",
    muted: "text-zinc-400",
    accent: "from-[#C084FC] to-[#A855F7]",
    accentColor: "#A855F7",
    accentSoft: "#C084FC",
    accentGlow: "rgba(168, 85, 247, 0.18)",
    accentBorder: "rgba(192, 132, 252, 0.35)",
    card: "bg-[#101010]/82 backdrop-blur-xl",
    border: "border-[#f5d76e]/15",
  },
  "Business Strategy": {
    label: "Executive decision view",
    headline: "Frameworks, trade-offs, risk, and recommendations.",
    description: "Business analysis that moves from diagnosis to action.",
    shell: "bg-[#050505]",
    text: "text-slate-50",
    muted: "text-zinc-400",
    accent: "from-[#FCD34D] to-[#F59E0B]",
    accentColor: "#F59E0B",
    accentSoft: "#FCD34D",
    accentGlow: "rgba(245, 158, 11, 0.18)",
    accentBorder: "rgba(252, 211, 77, 0.35)",
    card: "bg-[#101010]/82 backdrop-blur-xl",
    border: "border-[#f5d76e]/15",
  },
  "Founder Projects": {
    label: "Founder operating mode",
    headline: "Launch thinking, product vision, and fast proof-of-work loops.",
    description: "Ambitious product direction grounded in executable systems.",
    shell: "bg-[#050505]",
    text: "text-slate-50",
    muted: "text-zinc-400",
    accent: "from-[#FDA4AF] to-[#F43F5E]",
    accentColor: "#F43F5E",
    accentSoft: "#FDA4AF",
    accentGlow: "rgba(244, 63, 94, 0.18)",
    accentBorder: "rgba(253, 164, 175, 0.35)",
    card: "bg-[#101010]/82 backdrop-blur-xl",
    border: "border-[#f5d76e]/15",
  },
};
