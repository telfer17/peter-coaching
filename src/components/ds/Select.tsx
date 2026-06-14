"use client";

import { useId } from "react";
import type { ReactNode, SelectHTMLAttributes } from "react";

type Option = string | { value: string; label: string };

type SelectProps = {
  label?: string;
  options?: Option[];
  className?: string;
  children?: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

/** Native select, styled to match the brand fields. */
export function Select({ label, id, options = [], children, className = "", ...rest }: SelectProps) {
  const reactId = useId();
  const fid = id || reactId;
  return (
    <div className={["wc-select-field", className].filter(Boolean).join(" ")}>
      {label ? (
        <label className="wc-select-field__label" htmlFor={fid}>
          {label}
        </label>
      ) : null}
      <div className="wc-select-wrap">
        <select id={fid} className="wc-select" {...rest}>
          {options.map((o) =>
            typeof o === "string" ? (
              <option key={o} value={o}>
                {o}
              </option>
            ) : (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            )
          )}
          {children}
        </select>
        <span className="wc-select-caret">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </div>
    </div>
  );
}
