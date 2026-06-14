import * as React from "react";

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big number / value, e.g. 540 or "6–34". */
  value: React.ReactNode;
  /** Optional small accent unit after the value, e.g. "+", "%", "yrs". */
  unit?: React.ReactNode;
  /** Uppercase mono caption under the value. */
  label: React.ReactNode;
  /** `inverse` for dark backgrounds, `accent` to colour the number. */
  tone?: "default" | "inverse" | "accent";
}

/** Display-size stat block with a mono caption — for credibility numbers. */
export function Stat(props: StatProps): JSX.Element;
