import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. `accent` = Momentum blue, `gold` = premium gold. */
  variant?: "accent" | "gold" | "neutral" | "solid" | "success" | "warning" | "danger" | "outline";
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Condensed uppercase status / category label. */
export function Badge(props: BadgeProps): JSX.Element;
