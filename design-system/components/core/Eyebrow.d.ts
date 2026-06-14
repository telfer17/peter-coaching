import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. `accent` = Momentum blue, `muted` = grey, `inverse` = electric blue (for dark backgrounds). */
  tone?: "accent" | "muted" | "inverse";
  /** Show the leading tick mark. */
  tick?: boolean;
  children?: React.ReactNode;
}

/** Condensed uppercase kicker that sits above section headings. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
