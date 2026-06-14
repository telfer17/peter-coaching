import React from "react";

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-checkbox-styles";
  el.textContent = `
  .wc-check { display: inline-flex; align-items: flex-start; gap: 11px; font-family: var(--font-body); cursor: pointer; user-select: none; }
  .wc-check input { position: absolute; opacity: 0; width: 0; height: 0; }
  .wc-check__box {
    flex: none; width: 22px; height: 22px; margin-top: 1px;
    border: 1.5px solid var(--border-strong); border-radius: var(--radius-xs);
    background: var(--c-paper); display: grid; place-items: center;
    transition: background var(--dur-fast) var(--ease-snap), border-color var(--dur-fast) var(--ease-snap);
  }
  .wc-check__box svg { width: 14px; height: 14px; stroke: #fff; opacity: 0; transform: scale(0.6); transition: opacity var(--dur-fast) var(--ease-snap), transform var(--dur-fast) var(--ease-snap); }
  .wc-check:hover .wc-check__box { border-color: var(--accent); }
  .wc-check input:checked + .wc-check__box { background: var(--accent); border-color: var(--accent); }
  .wc-check input:checked + .wc-check__box svg { opacity: 1; transform: scale(1); }
  .wc-check input:focus-visible + .wc-check__box { box-shadow: var(--ring-focus); }
  .wc-check__body { display: flex; flex-direction: column; gap: 2px; }
  .wc-check__label { font-size: 15px; color: var(--text-strong); font-weight: 500; line-height: 1.3; }
  .wc-check__desc { font-size: 13px; color: var(--text-muted); line-height: 1.4; }
  .wc-check--disabled { opacity: 0.5; cursor: not-allowed; }
  `;
  document.head.appendChild(el);
}

/** Custom checkbox with optional description. */
export function Checkbox({ label, description, disabled = false, className = "", ...rest }) {
  ensureStyles();
  return (
    <label className={["wc-check", disabled ? "wc-check--disabled" : "", className].filter(Boolean).join(" ")}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="wc-check__box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
      </span>
      {(label || description) ? (
        <span className="wc-check__body">
          {label ? <span className="wc-check__label">{label}</span> : null}
          {description ? <span className="wc-check__desc">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
