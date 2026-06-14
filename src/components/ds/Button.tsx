import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "dark" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/** Momentum action button. Athletic, crisp, token-driven. */
export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const cls = [
    "wc-btn",
    `wc-btn--${variant}`,
    `wc-btn--${size}`,
    fullWidth ? "wc-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={cls} {...rest}>
      {iconLeft ? <span className="wc-btn__i">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className="wc-btn__i">{iconRight}</span> : null}
    </button>
  );
}

type LinkButtonProps = {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
  href: string;
};

/** Link styled as a button (for navigation CTAs). */
export function LinkButton({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  className = "",
  children,
  href,
}: LinkButtonProps) {
  const cls = [
    "wc-btn",
    `wc-btn--${variant}`,
    `wc-btn--${size}`,
    fullWidth ? "wc-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <a className={cls} href={href}>
      {iconLeft ? <span className="wc-btn__i">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className="wc-btn__i">{iconRight}</span> : null}
    </a>
  );
}
