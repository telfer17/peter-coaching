import type { ReactNode } from "react";

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] || "")
    .join("")
    .toUpperCase();
}

type AvatarProps = {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "default" | "accent";
  className?: string;
};

/** Round avatar — image or initials fallback. */
export function Avatar({ src, name = "", size = "md", tone = "default", className = "" }: AvatarProps) {
  const cls = ["wc-avatar", `wc-avatar--${size}`, tone !== "default" ? `wc-avatar--${tone}` : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} title={name || undefined}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}

/** Overlapping row of avatars (social proof). */
export function AvatarGroup({ className = "", children }: { className?: string; children: ReactNode }) {
  return <span className={["wc-avatar-group", className].filter(Boolean).join(" ")}>{children}</span>;
}
