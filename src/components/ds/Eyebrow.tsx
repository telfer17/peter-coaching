import type { ReactNode } from "react";

type EyebrowProps = {
  tone?: "accent" | "muted" | "inverse";
  tick?: boolean;
  className?: string;
  children: ReactNode;
};

/** Section eyebrow / kicker — the condensed uppercase label above a heading. */
export function Eyebrow({ tone = "accent", tick = true, className = "", children }: EyebrowProps) {
  const cls = ["wc-eyebrow", tone !== "accent" ? `wc-eyebrow--${tone}` : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls}>
      {tick ? <span className="wc-eyebrow__tick" /> : null}
      {children}
    </span>
  );
}
