import React from "react";

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-select-styles";
  el.textContent = `
  .wc-select-field { display: flex; flex-direction: column; gap: 7px; font-family: var(--font-body); }
  .wc-select-field__label { font-weight: 600; font-size: 14px; color: var(--text-strong); }
  .wc-select-wrap { position: relative; display: flex; align-items: center; }
  .wc-select {
    width: 100%; height: 46px; padding: 0 40px 0 14px;
    font-family: var(--font-body); font-size: 15px; color: var(--text-strong);
    background: var(--c-paper); border: 1.5px solid var(--border-strong);
    border-radius: var(--radius-sm); outline: none; cursor: pointer;
    appearance: none; -webkit-appearance: none;
    transition: border-color var(--dur-fast) var(--ease-snap), box-shadow var(--dur-fast) var(--ease-snap);
  }
  .wc-select:hover { border-color: var(--c-gray-400); }
  .wc-select:focus { border-color: var(--accent); box-shadow: var(--ring-focus); }
  .wc-select-caret { position: absolute; right: 14px; pointer-events: none; color: var(--text-muted); display: inline-flex; }
  .wc-select-caret svg { width: 18px; height: 18px; display: block; }
  `;
  document.head.appendChild(el);
}

/** Native select, styled to match the brand fields. */
export function Select({ label, id, options = [], children, className = "", ...rest }) {
  ensureStyles();
  const fid = id || `wc-select-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div className={["wc-select-field", className].filter(Boolean).join(" ")}>
      {label ? <label className="wc-select-field__label" htmlFor={fid}>{label}</label> : null}
      <div className="wc-select-wrap">
        <select id={fid} className="wc-select" {...rest}>
          {options.map((o) =>
            typeof o === "string"
              ? <option key={o} value={o}>{o}</option>
              : <option key={o.value} value={o.value}>{o.label}</option>
          )}
          {children}
        </select>
        <span className="wc-select-caret">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </div>
    </div>
  );
}
