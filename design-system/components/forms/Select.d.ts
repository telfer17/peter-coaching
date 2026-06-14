import * as React from "react";

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label shown above. */
  label?: React.ReactNode;
  /** Options as strings or {value,label} objects. You can also pass <option> children. */
  options?: Array<string | SelectOption>;
  id?: string;
}

/** Brand-styled native select with a custom caret. */
export function Select(props: SelectProps): JSX.Element;
