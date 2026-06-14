/* @ds-bundle: {"format":3,"namespace":"WeathersonCoachingDesignSystem_5286a0","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Avatar","sourcePath":"components/surfaces/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/surfaces/Avatar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ServiceCard","sourcePath":"components/surfaces/ServiceCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"c88c6406cc44","components/core/Button.jsx":"3ebf30494742","components/core/Eyebrow.jsx":"df642462da04","components/core/Stat.jsx":"cc8f1a5f51ab","components/forms/Checkbox.jsx":"b9bcd82814ca","components/forms/Input.jsx":"1ddcd1d7c0a4","components/forms/Select.jsx":"d5f2f305ea1a","components/surfaces/Avatar.jsx":"8b2dba5441f6","components/surfaces/Card.jsx":"32a18204499c","components/surfaces/ServiceCard.jsx":"03b121b8b5b1","ui_kits/website/About.jsx":"c7e80d10a076","ui_kits/website/App.jsx":"c64a72fc368f","ui_kits/website/Booking.jsx":"e4f3321feac2","ui_kits/website/Hero.jsx":"7c070c2d7d68","ui_kits/website/Programmes.jsx":"27b3fc8c25de","ui_kits/website/SiteFooter.jsx":"c4ab46a10c77","ui_kits/website/SiteHeader.jsx":"b39cc0c47a8d","ui_kits/website/StatsStrip.jsx":"c6441ba7cadf","ui_kits/website/Testimonials.jsx":"b0190b9a5158","ui_kits/website/icons.jsx":"1068b7250e2d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WeathersonCoachingDesignSystem_5286a0 = window.WeathersonCoachingDesignSystem_5286a0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  variant = "accent",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const cls = ["wc-badge", `wc-badge--${variant}`, dot ? "wc-badge--dot" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ["wc-btn", `wc-btn--${variant}`, `wc-btn--${size}`, fullWidth ? "wc-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "wc-btn__i"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "wc-btn__i"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Eyebrow({
  tone = "accent",
  tick = true,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const cls = ["wc-eyebrow", tone !== "accent" ? `wc-eyebrow--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), tick ? /*#__PURE__*/React.createElement("span", {
    className: "wc-eyebrow__tick"
  }) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Stat({
  value,
  unit,
  label,
  tone = "default",
  className = "",
  ...rest
}) {
  ensureStyles();
  const cls = ["wc-stat", tone !== "default" ? `wc-stat--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "wc-stat__v"
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    className: "wc-stat__u"
  }, unit) : null), /*#__PURE__*/React.createElement("div", {
    className: "wc-stat__k"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Checkbox({
  label,
  description,
  disabled = false,
  className = "",
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["wc-check", disabled ? "wc-check--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "wc-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  }))), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "wc-check__body"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "wc-check__label"
  }, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    className: "wc-check__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
  label,
  hint,
  error,
  required = false,
  icon,
  id,
  className = "",
  ...rest
}) {
  ensureStyles();
  const fid = id || `wc-input-${Math.random().toString(36).slice(2, 8)}`;
  const msg = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    className: ["wc-field", error ? "wc-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "wc-field__label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "wc-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: ["wc-field__wrap", icon ? "wc-field__wrap--icon" : ""].filter(Boolean).join(" ")
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "wc-field__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "wc-input",
    "aria-invalid": !!error
  }, rest))), msg ? /*#__PURE__*/React.createElement("span", {
    className: "wc-field__help"
  }, msg) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Select({
  label,
  id,
  options = [],
  children,
  className = "",
  ...rest
}) {
  ensureStyles();
  const fid = id || `wc-select-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: ["wc-select-field", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "wc-select-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "wc-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "wc-select"
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), /*#__PURE__*/React.createElement("span", {
    className: "wc-select-caret"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
}

/** Round avatar — image or initials fallback. */
function Avatar({
  src,
  name = "",
  size = "md",
  tone = "default",
  className = "",
  ...rest
}) {
  ensureStyles();
  const cls = ["wc-avatar", `wc-avatar--${size}`, tone !== "default" ? `wc-avatar--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}

/** Overlapping row of avatars (social proof). */
function AvatarGroup({
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["wc-avatar-group", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  tone = "default",
  padded = true,
  elevated = false,
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const cls = ["wc-card", padded ? "wc-card--pad" : "", elevated ? "wc-card--elevated" : "", interactive ? "wc-card--interactive" : "", tone !== "default" ? `wc-card--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "wc-service-styles";
  el.textContent = `
  .wc-svc {
    position: relative; display: flex; flex-direction: column;
    background: var(--bg-surface); border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg); padding: var(--space-5); overflow: hidden;
    transition: transform var(--dur-base) var(--ease-snap), box-shadow var(--dur-base) var(--ease-snap), border-color var(--dur-base) var(--ease-snap);
  }
  .wc-svc--featured { background: var(--c-ink-900); border-color: var(--c-gray-200); color: #fff; }
  .wc-svc--featured .wc-svc__name { color: #fff; }
  .wc-svc--featured .wc-svc__desc { color: var(--c-gray-500); }
  .wc-svc--featured .wc-svc__feat { color: var(--c-ink-700); }
  .wc-svc--featured .wc-svc__price { color: #fff; }
  .wc-svc:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
  .wc-svc__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4); }
  .wc-svc__icon { width: 46px; height: 46px; border-radius: var(--radius-md); background: var(--accent-tint); color: var(--accent); display: grid; place-items: center; }
  .wc-svc--featured { box-shadow: inset 0 3px 0 0 var(--c-gold-400); }
  .wc-svc--featured .wc-svc__icon { background: rgba(242,183,5,0.16); color: var(--c-gold-amber); }
  .wc-svc__icon svg { width: 24px; height: 24px; }
  .wc-svc__name { font-family: var(--font-heading); font-weight: 700; font-size: 24px; line-height: 1.1; color: var(--text-strong); margin: 0 0 6px; letter-spacing: 0.005em; }
  .wc-svc__desc { font-size: 14.5px; line-height: 1.55; color: var(--text-muted); margin: 0 0 var(--space-4); }
  .wc-svc__price { font-family: var(--font-display); font-size: 38px; line-height: 1; color: var(--text-strong); }
  .wc-svc__price small { font-family: var(--font-mono); font-size: 13px; color: var(--text-muted); font-weight: 500; margin-left: 4px; }
  .wc-svc--featured .wc-svc__price small { color: var(--c-gray-500); }
  .wc-svc__list { list-style: none; margin: var(--space-4) 0 var(--space-5); padding: 0; display: flex; flex-direction: column; gap: 9px; }
  .wc-svc__feat { display: flex; align-items: flex-start; gap: 9px; font-size: 14.5px; line-height: 1.4; color: var(--text-body); }
  .wc-svc__feat svg { flex: none; width: 17px; height: 17px; margin-top: 1px; color: var(--accent); }
  .wc-svc--featured .wc-svc__feat svg { color: var(--c-gold-amber); }
  .wc-svc__foot { margin-top: auto; }
  `;
  document.head.appendChild(el);
}
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12l5 5L20 7"
}));

/** Programme / pricing card for a coaching service. */
function ServiceCard({
  icon,
  name,
  description,
  price,
  priceNote,
  features = [],
  badge,
  featured = false,
  cta,
  className = "",
  ...rest
}) {
  ensureStyles();
  const cls = ["wc-svc", featured ? "wc-svc--featured" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "wc-svc__top"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "wc-svc__icon"
  }, icon) : /*#__PURE__*/React.createElement("span", null), badge), /*#__PURE__*/React.createElement("h3", {
    className: "wc-svc__name"
  }, name), description ? /*#__PURE__*/React.createElement("p", {
    className: "wc-svc__desc"
  }, description) : null, price != null ? /*#__PURE__*/React.createElement("div", {
    className: "wc-svc__price"
  }, price, priceNote ? /*#__PURE__*/React.createElement("small", null, priceNote) : null) : null, features.length ? /*#__PURE__*/React.createElement("ul", {
    className: "wc-svc__list"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    className: "wc-svc__feat",
    key: i
  }, /*#__PURE__*/React.createElement(Check, null), f))) : null, cta ? /*#__PURE__*/React.createElement("div", {
    className: "wc-svc__foot"
  }, cta) : null);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
// About Peter — photo + story + credential badges.
function About() {
  const {
    Trophy,
    Target,
    Video,
    Check
  } = window.WCIcons;
  const {
    Eyebrow,
    Badge
  } = window.WeathersonCoachingDesignSystem_5286a0;
  const PhotoSlot = window.PhotoSlot;
  const creds = [{
    icon: /*#__PURE__*/React.createElement(Trophy, {
      size: 18
    }),
    text: "14 years professional football"
  }, {
    icon: /*#__PURE__*/React.createElement(Target, {
      size: 18
    }),
    text: "FA / UEFA qualified coach"
  }, {
    icon: /*#__PURE__*/React.createElement(Video, {
      size: 18
    }),
    text: "Video analysis & player reports"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: "var(--bg-surface)",
      padding: "84px 0",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px",
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 56,
      alignItems: "center"
    },
    className: "wc-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Peter Weatherson",
    ratio: "1 / 1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -16,
      top: 24,
      display: "flex",
      flexDirection: "column",
      gap: 8
    },
    className: "wc-about-tags"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid"
  }, "Ex-pro"), /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "Coach educator"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "About Peter"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 42,
      lineHeight: 1.04,
      color: "var(--text-strong)",
      margin: "14px 0 0"
    }
  }, "A professional career, now in service of the next player"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "20px 0 0"
    }
  }, "Peter spent fourteen years in the professional game before turning fully to coaching. That experience \u2014 the standards, the detail, the mentality \u2014 is what every player he works with gets access to."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: "14px 0 0"
    }
  }, "Sessions are honest and demanding, but always built around encouragement. Parents get clear feedback; players get a plan they can feel themselves improving against."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 28
    }
  }, creds.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: "none",
      borderRadius: "var(--radius-sm)",
      background: "var(--accent-tint)",
      color: "var(--accent)",
      display: "grid",
      placeItems: "center"
    }
  }, c.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: "var(--text-strong)"
    }
  }, c.text)))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Composes the full Momentum Coaching homepage.
function App() {
  const [booking, setBooking] = React.useState(false);
  const open = () => setBooking(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SiteHeader, {
    onBook: open
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Hero, {
    onBook: open
  }), /*#__PURE__*/React.createElement(window.StatsStrip, null), /*#__PURE__*/React.createElement(window.Programmes, {
    onBook: open
  }), /*#__PURE__*/React.createElement(window.About, null), /*#__PURE__*/React.createElement(window.Testimonials, null), /*#__PURE__*/React.createElement(window.ContactCTA, {
    onBook: open
  })), /*#__PURE__*/React.createElement(window.SiteFooter, null), /*#__PURE__*/React.createElement(window.BookingModal, {
    open: booking,
    onClose: () => setBooking(false)
  }));
}
window.WCApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
// Contact CTA band + interactive booking modal (form -> success).
function ContactCTA({
  onBook
}) {
  const {
    ArrowRight,
    MapPin,
    Mail,
    Phone
  } = window.WCIcons;
  const {
    Button,
    Eyebrow
  } = window.WeathersonCoachingDesignSystem_5286a0;
  const detail = (icon, label, val) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: "none",
      borderRadius: "var(--radius-sm)",
      background: "rgba(255,255,255,0.16)",
      color: "#fff",
      display: "grid",
      placeItems: "center"
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.62)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 16,
      fontWeight: 500,
      color: "#fff",
      marginTop: 2
    }
  }, val)));
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: "linear-gradient(135deg, #0556AF 0%, #073257 100%)",
      padding: "84px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 56,
      alignItems: "center"
    },
    className: "wc-cta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Get started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(40px, 5vw, 64px)",
      lineHeight: 0.94,
      color: "#fff",
      margin: "16px 0 0",
      letterSpacing: "0.005em"
    }
  }, "READY TO", /*#__PURE__*/React.createElement("br", null), "GET TO WORK?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 440,
      margin: "20px 0 0"
    }
  }, "Tell us a little about the player and we'll match the right session and time. No commitment to book."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    onClick: onBook,
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    })
  }, "Book a session"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      borderLeft: "1px solid rgba(255,255,255,0.12)",
      paddingLeft: 40
    },
    className: "wc-cta-details"
  }, detail(/*#__PURE__*/React.createElement(MapPin, {
    size: 20
  }), "Where", "Astro & 3G pitches · North East"), detail(/*#__PURE__*/React.createElement(Mail, {
    size: 20
  }), "Email", "hello@momentumcoaching.co.uk"), detail(/*#__PURE__*/React.createElement(Phone, {
    size: 20
  }), "Phone", "07700 900 187"))));
}
function BookingModal({
  open,
  onClose
}) {
  const {
    Check,
    X
  } = window.WCIcons;
  const {
    Button,
    Input,
    Select,
    Checkbox,
    Badge
  } = window.WeathersonCoachingDesignSystem_5286a0;
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    if (open) setDone(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(0,0,0,0.66)",
      backdropFilter: "blur(3px)",
      display: "grid",
      placeItems: "center",
      padding: 20,
      animation: "wcFade 180ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(520px, 100%)",
      maxHeight: "92vh",
      overflowY: "auto",
      background: "var(--bg-surface)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      padding: 30,
      position: "relative",
      animation: "wcPop 220ms cubic-bezier(0.16,1,0.3,1)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: "absolute",
      top: 18,
      right: 18,
      background: "var(--c-mist)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 8,
      width: 34,
      height: 34,
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(X, {
    size: 18
  })), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "20px 0 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-pill)",
      background: "var(--c-success-tint)",
      color: "var(--c-success)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 32
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 28,
      color: "var(--text-strong)",
      margin: "18px 0 0"
    }
  }, "Request sent"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--text-muted)",
      margin: "8px 0 24px",
      maxWidth: 360,
      marginInline: "auto"
    }
  }, "Thanks \u2014 Peter will be in touch within 24 hours to confirm your session and time."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "Done")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "Book a session"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 28,
      color: "var(--text-strong)",
      margin: "12px 0 4px"
    }
  }, "Tell us about the player"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      margin: "0 0 22px"
    }
  }, "Takes under a minute. No payment now."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Player name",
    placeholder: "e.g. Jamie Smith",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Programme",
    options: ["1-2-1 coaching", "Group session", "Team training"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Age group",
    options: [{
      value: "6",
      label: "Ages 6–11"
    }, {
      value: "12",
      label: "Ages 12–16"
    }, {
      value: "a",
      label: "Adult / semi-pro"
    }]
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Your email",
    type: "email",
    placeholder: "you@email.com",
    required: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'm booking on behalf of my child",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    type: "submit",
    style: {
      marginTop: 4
    }
  }, "Send request")))));
}
Object.assign(window, {
  ContactCTA,
  BookingModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero — big Anton headline, eyebrow, CTAs, coach photo + floating proof.
function Hero({
  onBook
}) {
  const {
    ArrowRight,
    Star
  } = window.WCIcons;
  const {
    Button,
    Eyebrow,
    Avatar,
    AvatarGroup
  } = window.WeathersonCoachingDesignSystem_5286a0;
  const PhotoSlot = window.PhotoSlot;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: "var(--bg-page)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 24px 80px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    },
    className: "wc-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Football coaching \xB7 every age, every level"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(48px, 6vw, 84px)",
      lineHeight: 0.92,
      letterSpacing: "0.005em",
      color: "var(--text-strong)",
      margin: "20px 0 0"
    }
  }, "TRANSFORM", /*#__PURE__*/React.createElement("br", null), "POTENTIAL", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "INTO GROWTH")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 19,
      lineHeight: 1.55,
      color: "var(--text-body)",
      maxWidth: 480,
      margin: "24px 0 0"
    }
  }, "One-to-one and small-group coaching led by Peter Weatherson \u2014 turning a professional playing career into real, measurable development for players aged 6 to adult."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook,
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    })
  }, "Book a session"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    as: "a",
    href: "#programmes"
  }, "See programmes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(AvatarGroup, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "Jamie Smith",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Aoife Murphy",
    size: "sm",
    tone: "accent"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Tom Reilly",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Niamh Doyle",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      color: "var(--gold)"
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    size: 15
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "3px 0 0",
      fontSize: 13.5,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, "120+ players"), " coached across the North East")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--c-bg)",
      border: "1px solid var(--border-subtle)",
      aspectRatio: "4 / 5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/peter-hero.png",
    alt: "Peter Weatherson celebrating",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -18,
      bottom: 28,
      background: "var(--bg-elevated)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      gap: 14
    },
    className: "wc-hero-badge"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      lineHeight: 0.9,
      color: "var(--text-strong)"
    }
  }, "14"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1.15,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Years as a", /*#__PURE__*/React.createElement("br", null), "pro footballer")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programmes.jsx
try { (() => {
// Programmes section — three ServiceCards.
function Programmes({
  onBook
}) {
  const {
    User,
    Users,
    Whistle
  } = window.WCIcons;
  const {
    ServiceCard,
    Button,
    Badge,
    Eyebrow
  } = window.WeathersonCoachingDesignSystem_5286a0;
  return /*#__PURE__*/React.createElement("section", {
    id: "programmes",
    style: {
      background: "var(--bg-page)",
      padding: "84px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Programmes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.02,
      color: "var(--text-strong)",
      margin: "14px 0 0",
      maxWidth: 520
    }
  }, "Coaching shaped around the player in front of us")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      maxWidth: 320,
      margin: 0
    }
  }, "Every session has a clear focus and a plan. No drills for the sake of it \u2014 just real, deliberate development.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      alignItems: "stretch"
    },
    className: "wc-prog-grid"
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: /*#__PURE__*/React.createElement(User, null),
    name: "1-2-1 Coaching",
    description: "Individual sessions built entirely around one player's game and goals.",
    price: "\xA340",
    priceNote: "/ 60 min",
    features: ["Fully personalised plan", "Technical & decision-making focus", "Optional video clip analysis"],
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "solid"
    }, "Most popular"),
    featured: true,
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: onBook
    }, "Book 1-2-1")
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: /*#__PURE__*/React.createElement(Users, null),
    name: "Group Sessions",
    description: "Small-group coaching that keeps every player on the ball and competing.",
    price: "\xA315",
    priceNote: "/ player",
    features: ["Max 6 players per coach", "Age & ability matched", "Weekday evenings & weekends"],
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "accent"
    }, "Ages 6\u201316"),
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      onClick: onBook
    }, "Join a group")
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: /*#__PURE__*/React.createElement(Whistle, null),
    name: "Team Training",
    description: "Sessions for grassroots clubs and squads, planned with your coaches.",
    price: "POA",
    priceNote: "/ block",
    features: ["Tailored to your season plan", "Up to 18 players", "Coach education included"],
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "neutral"
    }, "Clubs"),
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      onClick: onBook
    }, "Enquire")
  }))));
}
window.Programmes = Programmes;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programmes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
// Site footer.
function SiteFooter() {
  const {
    Instagram,
    X
  } = window.WCIcons;
  const colTitle = {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--c-gray-400)",
    margin: "0 0 14px"
  };
  const fl = {
    display: "block",
    fontSize: 15,
    color: "var(--c-gray-300)",
    textDecoration: "none",
    padding: "5px 0"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#06080B",
      color: "#fff",
      padding: "56px 0 30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: 32
    },
    className: "wc-foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9,
      background: "#fff",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 94 82",
    width: "24",
    height: "21",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "18,46 36,46 22,80 4,80",
    fill: "#1A6FD4"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "45,24 63,24 49,80 31,80",
    fill: "#0A0E15"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "72,2 90,2 76,80 58,80",
    fill: "#F2B705"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      letterSpacing: "0.02em"
    }
  }, "MOMENTUM")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--c-gray-400)",
      maxWidth: 280,
      margin: "18px 0 0"
    }
  }, "Professional-standard football coaching for every age and level across the North East."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 20
    }
  }, [/*#__PURE__*/React.createElement(Instagram, {
    size: 18
  }), /*#__PURE__*/React.createElement(X, {
    size: 18
  })].map((ic, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    "aria-label": "social",
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-sm)",
      border: "1px solid rgba(255,255,255,0.16)",
      display: "grid",
      placeItems: "center",
      color: "#fff"
    }
  }, ic)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: colTitle
  }, "Programmes"), /*#__PURE__*/React.createElement("a", {
    href: "#programmes",
    style: fl
  }, "1-2-1 Coaching"), /*#__PURE__*/React.createElement("a", {
    href: "#programmes",
    style: fl
  }, "Group Sessions"), /*#__PURE__*/React.createElement("a", {
    href: "#programmes",
    style: fl
  }, "Team Training")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: colTitle
  }, "Club"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: fl
  }, "About Peter"), /*#__PURE__*/React.createElement("a", {
    href: "#results",
    style: fl
  }, "Results"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: fl
  }, "Contact")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: colTitle
  }, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: fl
  }, "hello@momentumcoaching.co.uk"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: fl
  }, "07700 900 187"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: fl
  }, "North East, UK"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      marginTop: 40,
      paddingTop: 22,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--c-gray-500)"
    }
  }, "\xA9 2026 Momentum Coaching. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--c-gray-500)",
      letterSpacing: "0.04em"
    }
  }, "TRANSFORM POTENTIAL INTO GROWTH"))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// Sticky site header with logo lockup + nav + CTA.
function SiteHeader({
  onBook
}) {
  const {
    Menu
  } = window.WCIcons;
  const {
    Button
  } = window.WeathersonCoachingDesignSystem_5286a0;
  const link = {
    fontFamily: "var(--font-body)",
    fontSize: 15,
    fontWeight: 600,
    color: "var(--text-body)",
    textDecoration: "none",
    padding: "8px 2px"
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      height: "var(--header-h)",
      background: "rgba(7,9,13,0.72)",
      backdropFilter: "saturate(180%) blur(12px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      height: "100%",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: "var(--c-ink-900)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 94 82",
    width: "25",
    height: "22",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "18,46 36,46 22,80 4,80",
    fill: "#2E86F0"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "45,24 63,24 49,80 31,80",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "72,2 90,2 76,80 58,80",
    fill: "#FFC629"
  }))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontSize: 19,
      lineHeight: 1,
      letterSpacing: "0.02em",
      color: "var(--text-strong)"
    }
  }, "MOMENTUM"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 9.5,
      letterSpacing: "0.3em",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, "COACHING"))), /*#__PURE__*/React.createElement("nav", {
    className: "wc-nav",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#programmes",
    style: {
      ...link,
      color: "var(--text-strong)",
      borderBottom: "2px solid var(--gold)"
    }
  }, "Programmes"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: link
  }, "About Peter"), /*#__PURE__*/React.createElement("a", {
    href: "#results",
    style: link
  }, "Results"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: link
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBook,
    className: "wc-header-cta"
  }, "Book a session"), /*#__PURE__*/React.createElement("button", {
    className: "wc-menu-btn",
    "aria-label": "Menu",
    style: {
      display: "none",
      background: "none",
      border: "none",
      color: "var(--text-strong)",
      cursor: "pointer",
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(Menu, null)))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatsStrip.jsx
try { (() => {
// Dark stats strip — the scoreboard credibility band.
function StatsStrip() {
  const {
    Stat
  } = window.WeathersonCoachingDesignSystem_5286a0;
  const items = [{
    value: 540,
    unit: "+",
    label: "Sessions delivered"
  }, {
    value: 120,
    unit: "+",
    label: "Players coached"
  }, {
    value: 14,
    label: "Years as a pro"
  }, {
    value: "6–34",
    label: "Ages coached"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "44px 24px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 28
    },
    className: "wc-stats-grid"
  }, items.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
      paddingLeft: i === 0 ? 0 : 28
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: s.value,
    unit: s.unit,
    label: s.label,
    tone: "inverse"
  })))));
}
window.StatsStrip = StatsStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatsStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
// Results / testimonials — quote cards with avatars.
function Testimonials() {
  const {
    Quote,
    Star
  } = window.WCIcons;
  const {
    Eyebrow,
    Avatar
  } = window.WeathersonCoachingDesignSystem_5286a0;
  const quotes = [{
    q: "Our son has come on more in three months with Peter than two years anywhere else. He actually looks forward to every session.",
    name: "Claire M.",
    role: "Parent · age 9",
    tone: "accent"
  }, {
    q: "Proper coaching. The detail on my first touch and movement off the ball got me back into the semi-pro setup.",
    name: "Daniel R.",
    role: "Player · age 19",
    tone: "default"
  }, {
    q: "Peter ran a block for our U14s and the difference in the lads' decision-making was night and day.",
    name: "Coach Owen",
    role: "Grassroots club",
    tone: "default"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "results",
    style: {
      background: "var(--bg-page)",
      padding: "84px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Results & reviews")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.04,
      color: "var(--text-strong)",
      margin: "14px auto 0",
      maxWidth: 600
    }
  }, "Players improve. Parents notice. Coaches come back.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    },
    className: "wc-quote-grid"
  }, quotes.map((t, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    style: {
      margin: 0,
      background: "var(--bg-surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    size: 34,
    style: {
      color: "var(--accent)",
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--text-strong)",
      fontWeight: 500,
      flex: 1,
      textWrap: "pretty"
    }
  }, "\"", t.q, "\""), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.name,
    tone: t.tone
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 600,
      fontSize: 14.5,
      color: "var(--text-strong)"
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, t.role)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 1,
      color: "var(--gold)"
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Star, {
    key: s,
    size: 13
  })))))))));
}
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide-style inline icons (stroke 2, round caps) + a branded photo placeholder.
// Self-contained so the kit needs no external icon dependency. These match the
// Lucide icon set 1:1 in style — see README → ICONOGRAPHY.
const I = p => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: p.sw || 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: p.size || 22,
  height: p.size || 22,
  style: p.style,
  "aria-hidden": true
}, p.children);
const ArrowRight = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const ChevronRight = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 6l6 6-6 6"
}));
const Check = p => /*#__PURE__*/React.createElement(I, _extends({}, p, {
  sw: 2.4
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 12l5 5L20 7"
}));
const User = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 21c0-4 4-6 8-6s8 2 8 6"
}));
const Users = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "8",
  r: "3.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 5.2a3.5 3.5 0 0 1 0 6.8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 14.5c2.4.5 4 2.3 4 5"
}));
const Whistle = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 11h9l4-3v8a5 5 0 1 1-10 0"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "16",
  r: "2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 5l3-2"
}));
const Target = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3.5"
}));
const Trophy = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M7 4h10v5a5 5 0 0 1-10 0V4Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 16h4M9 20h6M12 16v4"
}));
const Video = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
  x: "2.5",
  y: "6",
  width: "13",
  height: "12",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 10l6-3v10l-6-3"
}));
const Star = p => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: p.size || 18,
  height: p.size || 18,
  style: p.style,
  "aria-hidden": true
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.6 6.1 21l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z"
}));
const Quote = p => React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: p.size || 40,
  height: p.size || 40,
  style: p.style,
  "aria-hidden": true
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 7C4.8 8.3 4 10.3 4 12.8V17h5v-5H6.6c0-1.6.5-2.7 1.7-3.4L7 7Zm9 0c-2.2 1.3-3 3.3-3 5.8V17h5v-5h-2.4c0-1.6.5-2.7 1.7-3.4L16 7Z"
}));
const MapPin = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "2.5"
}));
const Mail = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 7l9 6 9-6"
}));
const Phone = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 6a2 2 0 0 1-2 1.7A15 15 0 0 1 3.3 6 2 2 0 0 1 5 4Z"
}));
const Clock = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7v5l3.5 2"
}));
const Menu = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18M3 12h18M3 18h18"
}));
const Instagram = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
  x: "3.5",
  y: "3.5",
  width: "17",
  height: "17",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.3",
  cy: "6.7",
  r: "1",
  fill: "currentColor",
  stroke: "none"
}));
const X = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6L6 18"
}));

/** Branded photo placeholder — dark panel with monogram watermark. */
function PhotoSlot({
  label = "PHOTO",
  ratio = "4 / 5",
  radius = "var(--radius-lg)",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      width: "100%",
      borderRadius: radius,
      background: "linear-gradient(150deg, #141922 0%, #0A0E15 100%)",
      overflow: "hidden",
      display: "grid",
      placeItems: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.07,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 94 82",
    width: "58%",
    height: "58%",
    fill: "none"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "18,46 36,46 22,80 4,80",
    fill: "#2E86F0"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "45,24 63,24 49,80 31,80",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "72,2 90,2 76,80 58,80",
    fill: "#FFC629"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.18em",
      color: "rgba(255,255,255,0.45)",
      textTransform: "uppercase"
    }
  }, label));
}
Object.assign(window, {
  WCIcons: {
    ArrowRight,
    ChevronRight,
    Check,
    User,
    Users,
    Whistle,
    Target,
    Trophy,
    Video,
    Star,
    Quote,
    MapPin,
    Mail,
    Phone,
    Clock,
    Menu,
    Instagram,
    X
  },
  PhotoSlot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
