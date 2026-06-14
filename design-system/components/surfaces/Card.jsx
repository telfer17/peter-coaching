import React from "react";

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-card-styles";
  el.textContent = `
  .wc-card {
    background: var(--bg-surface); border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg); overflow: hidden;
    transition: transform var(--dur-base) var(--ease-snap), box-shadow var(--dur-base) var(--ease-snap), border-color var(--dur-base) var(--ease-snap);
  }
  .wc-card--pad { padding: var(--space-5); }
  .wc-card--elevated { box-shadow: var(--shadow-md); border-color: transparent; }
  .wc-card--interactive { cursor: pointer; }
  .wc-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); border-color: var(--border-strong); }
  .wc-card--dark { background: var(--c-ink-900); border-color: var(--c-ink-800); color: #fff; }
  .wc-card--accent { background: var(--accent); border-color: transparent; color: #fff; }
  `;
  document.head.appendChild(el);
}

/** Base surface card. Composes everything else. */
export function Card({
  tone = "default", padded = true, elevated = false, interactive = false,
  className = "", children, ...rest
}) {
  ensureStyles();
  const cls = [
    "wc-card",
    padded ? "wc-card--pad" : "",
    elevated ? "wc-card--elevated" : "",
    interactive ? "wc-card--interactive" : "",
    tone !== "default" ? `wc-card--${tone}` : "",
    className,
  ].filter(Boolean).join(" ");
  return <div className={cls} {...rest}>{children}</div>;
}
