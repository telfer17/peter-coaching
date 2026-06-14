import type { InputHTMLAttributes } from "react";

type CheckboxProps = {
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

/** Custom checkbox with optional description. */
export function Checkbox({ label, description, disabled = false, className = "", ...rest }: CheckboxProps) {
  return (
    <label className={["wc-check", disabled ? "wc-check--disabled" : "", className].filter(Boolean).join(" ")}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="wc-check__box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
      {label || description ? (
        <span className="wc-check__body">
          {label ? <span className="wc-check__label">{label}</span> : null}
          {description ? <span className="wc-check__desc">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
