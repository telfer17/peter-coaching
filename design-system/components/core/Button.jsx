import React from "react";

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-button-styles";
  el.textContent = `
  .wc-btn {
    --_h: 44px; --_px: 20px; --_fs: 15px;
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: var(--_h); padding: 0 var(--_px);
    font-family: var(--font-body); font-weight: 600; font-size: var(--_fs);
    letter-spacing: 0.005em; line-height: 1; white-space: nowrap;
    border: 1.5px solid transparent; border-radius: var(--radius-sm);
    cursor: pointer; user-select: none; text-decoration: none;
    transition: background var(--dur-fast) var(--ease-snap),
                border-color var(--dur-fast) var(--ease-snap),
                color var(--dur-fast) var(--ease-snap),
                transform var(--dur-fast) var(--ease-snap),
                box-shadow var(--dur-fast) var(--ease-snap);
  }
  .wc-btn:focus-visible { outline: none; box-shadow: var(--ring-focus); }
  .wc-btn:active { transform: translateY(1px); }
  .wc-btn[disabled] { opacity: 0.45; cursor: not-allowed; transform: none; box-shadow: none; }
  .wc-btn__i { display: inline-flex; align-items: center; }
  .wc-btn__i svg { width: 1.1em; height: 1.1em; display: block; }
  .wc-btn--block { width: 100%; }

  /* sizes */
  .wc-btn--sm { --_h: 36px; --_px: 14px; --_fs: 13.5px; }
  .wc-btn--md { --_h: 44px; --_px: 20px; --_fs: 15px; }
  .wc-btn--lg { --_h: 54px; --_px: 28px; --_fs: 17px; }

  /* primary — Momentum blue */
  .wc-btn--primary { background: var(--accent); color: var(--text-on-accent); }
  .wc-btn--primary:hover:not([disabled]) { background: var(--accent-hover); box-shadow: var(--shadow-accent); }
  .wc-btn--primary:active:not([disabled]) { background: var(--accent-press); box-shadow: none; }

  /* dark — near-black */
  .wc-btn--dark { background: var(--c-ink-900); color: #fff; }
  .wc-btn--dark:hover:not([disabled]) { background: var(--c-ink-800); box-shadow: var(--shadow-md); }
  .wc-btn--dark:active:not([disabled]) { background: #000; }

  /* secondary — outline on dark */
  .wc-btn--secondary { background: var(--c-mist); color: var(--text-strong); border-color: var(--border-strong); }
  .wc-btn--secondary:hover:not([disabled]) { background: var(--c-gray-200); border-color: var(--c-gray-300); }
  .wc-btn--secondary:active:not([disabled]) { background: var(--c-line); }

  /* ghost — text */
  .wc-btn--ghost { background: transparent; color: var(--text-accent); }
  .wc-btn--ghost:hover:not([disabled]) { background: var(--accent-tint); }
  .wc-btn--ghost:active:not([disabled]) { background: var(--c-blue-tint-2); }
  `;
  document.head.appendChild(el);
}

/**
 * Momentum primary button. Athletic, crisp, token-driven.
 */
export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  as = "button",
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const Tag = as;
  const cls = [
    "wc-btn",
    `wc-btn--${variant}`,
    `wc-btn--${size}`,
    fullWidth ? "wc-btn--block" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <Tag className={cls} {...rest}>
      {iconLeft ? <span className="wc-btn__i">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className="wc-btn__i">{iconRight}</span> : null}
    </Tag>
  );
}
