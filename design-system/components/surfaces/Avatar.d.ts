import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when absent. */
  src?: string;
  /** Person's name — used for initials and the title tooltip. */
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /** `accent` fills the initials background with Momentum blue. */
  tone?: "default" | "accent";
}

/** Round avatar with an initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/** Overlapping row of avatars for social proof. */
export function AvatarGroup(props: AvatarGroupProps): JSX.Element;
