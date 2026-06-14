import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface treatment. */
  tone?: "default" | "dark" | "accent";
  /** Apply default internal padding. */
  padded?: boolean;
  /** Drop shadow + borderless. */
  elevated?: boolean;
  /** Lift on hover (use for clickable cards). */
  interactive?: boolean;
  children?: React.ReactNode;
}

/** Base surface container that everything else sits on. */
export function Card(props: CardProps): JSX.Element;
