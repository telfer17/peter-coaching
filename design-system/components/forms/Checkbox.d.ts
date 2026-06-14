import * as React from "react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Main label text. */
  label?: React.ReactNode;
  /** Optional secondary description under the label. */
  description?: React.ReactNode;
  disabled?: boolean;
}

/** Custom-styled checkbox with optional description line. */
export function Checkbox(props: CheckboxProps): JSX.Element;
