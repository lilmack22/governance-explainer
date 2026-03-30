export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const nodeTypeConfig = {
  upstream: {
    label: "Root Cause",
    color: "#8CB3F4",
    glow: "rgba(140,179,244,0.25)",
    bg: "rgba(140,179,244,0.07)",
    border: "#8CB3F4",
    tailwind: "text-upstream",
  },
  mechanism: {
    label: "Mechanism",
    color: "#6495ED",
    glow: "rgba(100,149,237,0.25)",
    bg: "rgba(100,149,237,0.07)",
    border: "#6495ED",
    tailwind: "text-mechanism",
  },
  outcome: {
    label: "Outcome",
    color: "#4372C8",
    glow: "rgba(67,114,200,0.25)",
    bg: "rgba(67,114,200,0.07)",
    border: "#4372C8",
    tailwind: "text-outcome",
  },
  critique: {
    label: "Shadow / Critique",
    color: "#6B7B90",
    glow: "rgba(107,123,144,0.20)",
    bg: "rgba(107,123,144,0.06)",
    border: "#6B7B90",
    tailwind: "text-critique",
  },
} as const;
