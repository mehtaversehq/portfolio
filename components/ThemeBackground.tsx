"use client";

import type { CSSProperties } from "react";
import { pathThemes, type PathName } from "@/data/paths";
import { CursorSpotlight } from "./CursorSpotlight";

export function ThemeBackground({ selectedPath, children }: { selectedPath: PathName; children: React.ReactNode }) {
  const theme = pathThemes[selectedPath];
  const accentStyle = {
    "--accent": theme.accentColor,
    "--accent-soft": theme.accentSoft,
    "--accent-glow": theme.accentGlow,
    "--accent-border": theme.accentBorder,
  } as CSSProperties;

  return (
    <main
      className={`relative min-h-screen overflow-hidden ${theme.shell} ${theme.text}`}
      style={accentStyle}
    >
      <div className="pointer-events-none fixed inset-0 will-change-[opacity,transform] bg-[radial-gradient(circle_at_18%_18%,var(--accent-glow),transparent_31%),radial-gradient(circle_at_78%_22%,rgba(245,215,110,0.08),transparent_29%),radial-gradient(circle_at_50%_95%,rgba(24,24,27,0.54),transparent_44%)] opacity-75 transition-colors duration-500 motion-safe:md:animate-[ambient-drift_24s_ease-in-out_infinite]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.42)_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(color-mix(in_srgb,var(--accent)_16%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--accent)_16%,transparent)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(color-mix(in_srgb,var(--accent-soft)_24%,transparent)_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.045]" />
      <CursorSpotlight />
      <div className="relative z-10">{children}</div>
    </main>
  );
}
