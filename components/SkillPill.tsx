export function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[color-mix(in_srgb,var(--accent)_16%,transparent)] bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] px-3 py-1 text-xs font-medium text-zinc-300 transition hover:border-[var(--accent-border)] hover:text-[var(--accent-soft)]">
      {children}
    </span>
  );
}
