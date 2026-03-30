export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const nodeTypeConfig = {
  upstream: {
    label: "Root Cause",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.35)",
    bg: "rgba(139,92,246,0.08)",
    border: "#8b5cf6",
    tailwind: "text-upstream",
  },
  mechanism: {
    label: "Mechanism",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.35)",
    bg: "rgba(56,189,248,0.08)",
    border: "#38bdf8",
    tailwind: "text-gold",
  },
  outcome: {
    label: "Outcome",
    color: "#34d399",
    glow: "rgba(52,211,153,0.35)",
    bg: "rgba(52,211,153,0.08)",
    border: "#34d399",
    tailwind: "text-outcome",
  },
  critique: {
    label: "Shadow / Critique",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.35)",
    bg: "rgba(245,158,11,0.08)",
    border: "#f59e0b",
    tailwind: "text-critique",
  },
} as const;
