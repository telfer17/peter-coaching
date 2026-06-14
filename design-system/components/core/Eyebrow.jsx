import React from "react";

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-eyebrow-styles";
  el.textContent = `
  .wc-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--font-heading); font-weight: 600;
    font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase;
    line-height: 1; color: var(--text-accent);
  }
  .wc-eyebrow--muted { color: var(--text-muted); }
  .wc-eyebrow--inverse { color: var(--c-blue-electric); }
  .wc-eyebrow__tick { width: 18px; height: 2px; background: currentColor; display: inline-block; }
  `;
  document.head.appendChild(el);
}

/** Section eyebrow / kicker — the condensed uppercase label above a heading. */
export function Eyebrow({ tone = "accent", tick = true, className = "", children, ...rest }) {
  ensureStyles();
  const cls = ["wc-eyebrow", tone !== "accent" ? `wc-eyebrow--${tone}` : "", className]
    .filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {tick ? <span className="wc-eyebrow__tick" /> : null}
      {children}
    </span>
  );
}
