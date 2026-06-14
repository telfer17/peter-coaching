"use client";

import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  icon?: ReactNode;
  /** render a multi-line textarea instead of an input */
  multiline?: boolean;
  rows?: number;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>;

/** Labelled text input with optional icon, helper text & error state. */
export function Input({
  label,
  hint,
  error,
  required = false,
  icon,
  multiline = false,
  rows = 5,
  id,
  className = "",
  ...rest
}: InputProps) {
  const reactId = useId();
  const fid = id || reactId;
  const msg = error || hint;
  return (
    <div className={["wc-field", error ? "wc-field--error" : "", className].filter(Boolean).join(" ")}>
      {label ? (
        <label className="wc-field__label" htmlFor={fid}>
          {label}
          {required ? <span className="wc-field__req">*</span> : null}
        </label>
      ) : null}
      <div className={["wc-field__wrap", icon ? "wc-field__wrap--icon" : ""].filter(Boolean).join(" ")}>
        {icon ? <span className="wc-field__icon">{icon}</span> : null}
        {multiline ? (
          <textarea id={fid} className="wc-input" rows={rows} aria-invalid={!!error} {...rest} />
        ) : (
          <input id={fid} className="wc-input" aria-invalid={!!error} {...rest} />
        )}
      </div>
      {msg ? <span className="wc-field__help">{msg}</span> : null}
    </div>
  );
}
