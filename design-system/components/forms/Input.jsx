import React from "react";

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-input-styles";
  el.textContent = `
  .wc-field { display: flex; flex-direction: column; gap: 7px; font-family: var(--font-body); }
  .wc-field__label { font-family: var(--font-body); font-weight: 600; font-size: 14px; color: var(--text-strong); }
  .wc-field__req { color: var(--accent); margin-left: 2px; }
  .wc-field__wrap { position: relative; display: flex; align-items: center; }
  .wc-field__icon { position: absolute; left: 14px; display: inline-flex; color: var(--text-muted); pointer-events: none; }
  .wc-field__icon svg { width: 18px; height: 18px; display: block; }
  .wc-input {
    width: 100%; height: 46px; padding: 0 14px;
    font-family: var(--font-body); font-size: 15px; color: var(--text-strong);
    background: var(--c-paper); border: 1.5px solid var(--border-strong);
    border-radius: var(--radius-sm); outline: none;
    transition: border-color var(--dur-fast) var(--ease-snap), box-shadow var(--dur-fast) var(--ease-snap);
  }
  .wc-input::placeholder { color: var(--c-gray-400); }
  .wc-input:hover { border-color: var(--c-gray-400); }
  .wc-input:focus { border-color: var(--accent); box-shadow: var(--ring-focus); }
  .wc-field__wrap--icon .wc-input { padding-left: 42px; }
  .wc-field--error .wc-input { border-color: var(--c-danger); }
  .wc-field--error .wc-input:focus { box-shadow: 0 0 0 3px var(--c-danger-tint); }
  .wc-field__help { font-size: 13px; color: var(--text-muted); }
  .wc-field--error .wc-field__help { color: var(--c-danger); }
  .wc-input:disabled { background: var(--c-polar); color: var(--text-muted); cursor: not-allowed; }
  `;
  document.head.appendChild(el);
}

/** Labelled text input with optional icon, helper text & error state. */
export function Input({
  label, hint, error, required = false, icon, id, className = "", ...rest
}) {
  ensureStyles();
  const autoId = React.useId();
  const fid = id || autoId;
  const msg = error || hint;
  return (
    <div className={["wc-field", error ? "wc-field--error" : "", className].filter(Boolean).join(" ")}>
      {label ? (
        <label className="wc-field__label" htmlFor={fid}>
          {label}{required ? <span className="wc-field__req">*</span> : null}
        </label>
      ) : null}
      <div className={["wc-field__wrap", icon ? "wc-field__wrap--icon" : ""].filter(Boolean).join(" ")}>
        {icon ? <span className="wc-field__icon">{icon}</span> : null}
        <input id={fid} className="wc-input" aria-invalid={!!error} {...rest} />
      </div>
      {msg ? <span className="wc-field__help">{msg}</span> : null}
    </div>
  );
}
