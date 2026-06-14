import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = Momentum blue, `dark` = near-black, `secondary` = outline, `ghost` = text-only. */
  variant?: "primary" | "dark" | "secondary" | "ghost";
  /** Control height & padding. */
  size?: "sm" | "md" | "lg";
  /** Optional icon node rendered before the label (e.g. a Lucide <svg>). */
  iconLeft?: React.ReactNode;
  /** Optional icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  /** Render as a different element, e.g. "a" for a link button. */
  as?: "button" | "a";
  children?: React.ReactNode;
}

/**
 * The Momentum action button.
 *
 * @startingPoint section="Core" subtitle="Primary, dark, secondary & ghost buttons" viewport="700x150"
 */
export function Button(props: ButtonProps): React.JSX.Element;
