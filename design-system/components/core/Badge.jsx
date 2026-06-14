import React from "react";

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-badge-styles";
  el.textContent = `
  .wc-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--font-heading); font-weight: 600; font-size: 12px;
    letter-spacing: 0.06em; text-transform: uppercase; line-height: 1;
    padding: 5px 10px 4px; border-radius: var(--radius-xs);
    border: 1px solid transparent; white-space: nowrap;
  }
  .wc-badge--dot::before { content: ""; width: 6px; height: 6px; border-radius: 999px; background: currentColor; opacity: 0.9; }
  .wc-badge--accent  { background: var(--c-blue-tint);   color: var(--c-blue-300); }
  .wc-badge--gold    { background: var(--c-gold-tint);   color: var(--c-gold-300); }
  .wc-badge--neutral { background: var(--c-mist);        color: var(--c-ink-700); }
  .wc-badge--solid   { background: var(--c-white);       color: var(--c-ink-900); }
  .wc-badge--success { background: var(--c-success-tint); color: var(--c-success); }
  .wc-badge--warning { background: var(--c-warning-tint); color: var(--c-warning); }
  .wc-badge--danger  { background: var(--c-danger-tint);  color: var(--c-danger); }
  .wc-badge--outline { background: transparent; color: var(--text-body); border-color: var(--border-strong); }
  `;
  document.head.appendChild(el);
}

/** Small status / category label. Condensed uppercase, athletic. */
export function Badge({ variant = "accent", dot = false, className = "", children, ...rest }) {
  ensureStyles();
  const cls = ["wc-badge", `wc-badge--${variant}`, dot ? "wc-badge--dot" : "", className]
    .filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>{children}</span>
  );
}
