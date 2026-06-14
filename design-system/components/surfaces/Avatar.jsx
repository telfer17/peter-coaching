import React from "react";

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-avatar-styles";
  el.textContent = `
  .wc-avatar {
    --_s: 44px;
    width: var(--_s); height: var(--_s); flex: none;
    border-radius: var(--radius-pill); overflow: hidden;
    background: var(--c-gray-200); color: #fff;
    display: inline-grid; place-items: center;
    font-family: var(--font-heading); font-weight: 700; letter-spacing: 0.02em;
    font-size: calc(var(--_s) * 0.4);
    border: 2px solid var(--c-bg); box-shadow: 0 0 0 1px var(--border-subtle);
  }
  .wc-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .wc-avatar--sm { --_s: 32px; }
  .wc-avatar--md { --_s: 44px; }
  .wc-avatar--lg { --_s: 64px; }
  .wc-avatar--xl { --_s: 96px; }
  .wc-avatar--accent { background: var(--accent); }
  .wc-avatar-group { display: inline-flex; }
  .wc-avatar-group .wc-avatar:not(:first-child) { margin-left: -12px; }
  `;
  document.head.appendChild(el);
}

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
}

/** Round avatar — image or initials fallback. */
export function Avatar({ src, name = "", size = "md", tone = "default", className = "", ...rest }) {
  ensureStyles();
  const cls = ["wc-avatar", `wc-avatar--${size}`, tone !== "default" ? `wc-avatar--${tone}` : "", className]
    .filter(Boolean).join(" ");
  return (
    <span className={cls} title={name || undefined} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}

/** Overlapping row of avatars (social proof). */
export function AvatarGroup({ className = "", children, ...rest }) {
  ensureStyles();
  return <span className={["wc-avatar-group", className].filter(Boolean).join(" ")} {...rest}>{children}</span>;
}
