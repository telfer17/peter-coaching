import React from "react";

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-stat-styles";
  el.textContent = `
  .wc-stat { display: flex; flex-direction: column; gap: 6px; }
  .wc-stat__k { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted); }
  .wc-stat__v { font-family: var(--font-display); font-size: 48px; line-height: 0.9; color: var(--text-strong); letter-spacing: 0.01em; }
  .wc-stat__u { font-family: var(--font-mono); font-size: 0.4em; color: var(--accent); margin-left: 2px; vertical-align: 0.18em; }
  .wc-stat--inverse .wc-stat__v { color: #fff; }
  .wc-stat--inverse .wc-stat__k { color: var(--c-gray-400); }
  .wc-stat--inverse .wc-stat__u { color: var(--c-gold-amber); }
  .wc-stat--accent .wc-stat__v { color: var(--accent); }
  `;
  document.head.appendChild(el);
}

/** Big mono/display stat block — the "scoreboard" voice. */
export function Stat({ value, unit, label, tone = "default", className = "", ...rest }) {
  ensureStyles();
  const cls = ["wc-stat", tone !== "default" ? `wc-stat--${tone}` : "", className]
    .filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      <div className="wc-stat__v">{value}{unit ? <span className="wc-stat__u">{unit}</span> : null}</div>
      <div className="wc-stat__k">{label}</div>
    </div>
  );
}
