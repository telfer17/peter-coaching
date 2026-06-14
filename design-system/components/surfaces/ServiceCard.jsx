import React from "react";

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

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
);

/** Programme / pricing card for a coaching service. */
export function ServiceCard({
  icon, name, description, price, priceNote, features = [], badge, featured = false,
  cta, className = "", ...rest
}) {
  ensureStyles();
  const cls = ["wc-svc", featured ? "wc-svc--featured" : "", className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      <div className="wc-svc__top">
        {icon ? <span className="wc-svc__icon">{icon}</span> : <span />}
        {badge}
      </div>
      <h3 className="wc-svc__name">{name}</h3>
      {description ? <p className="wc-svc__desc">{description}</p> : null}
      {price != null ? (
        <div className="wc-svc__price">{price}{priceNote ? <small>{priceNote}</small> : null}</div>
      ) : null}
      {features.length ? (
        <ul className="wc-svc__list">
          {features.map((f, i) => (
            <li className="wc-svc__feat" key={i}><Check />{f}</li>
          ))}
        </ul>
      ) : null}
      {cta ? <div className="wc-svc__foot">{cta}</div> : null}
    </div>
  );
}
