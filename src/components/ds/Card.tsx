import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  tone?: "default" | "dark" | "accent";
  padded?: boolean;
  elevated?: boolean;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/** Base surface card. */
export function Card({
  tone = "default",
  padded = true,
  elevated = false,
  interactive = false,
  className = "",
  children,
  ...rest
}: CardProps) {
  const cls = [
    "wc-card",
    padded ? "wc-card--pad" : "",
    elevated ? "wc-card--elevated" : "",
    interactive ? "wc-card--interactive" : "",
    tone !== "default" ? `wc-card--${tone}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}
