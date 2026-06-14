import * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  /** Field label shown above the input. */
  label?: React.ReactNode;
  /** Helper text shown below (hidden when `error` is set). */
  hint?: React.ReactNode;
  /** Error message — also turns the field red. */
  error?: React.ReactNode;
  /** Show a required asterisk. */
  required?: boolean;
  /** Optional leading icon node (e.g. a Lucide <svg>). */
  icon?: React.ReactNode;
  id?: string;
}

/**
 * Labelled text input with hint / error states.
 *
 * @startingPoint section="Forms" subtitle="Text input with label, hint & error" viewport="700x150"
 */
export function Input(props: InputProps): JSX.Element;
