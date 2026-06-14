import type { ReactNode } from "react";

type BadgeVariant =
  | "accent"
  | "gold"
  | "neutral"
  | "solid"
  | "success"
  | "warning"
  | "danger"
  | "outline";

type BadgeProps = {
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
  children: ReactNode;
};

/** Small status / category label. Condensed uppercase, athletic. */
export function Badge({ variant = "accent", dot = false, className = "", children }: BadgeProps) {
  const cls = ["wc-badge", `wc-badge--${variant}`, dot ? "wc-badge--dot" : "", className]
    .filter(Boolean)
    .join(" ");
  return <span className={cls}>{children}</span>;
}
