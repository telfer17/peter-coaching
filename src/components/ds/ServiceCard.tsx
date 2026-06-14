import type { ReactNode } from "react";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

type ServiceCardProps = {
  icon?: ReactNode;
  name: string;
  description?: string;
  price?: ReactNode;
  priceNote?: string;
  features?: ReactNode[];
  badge?: ReactNode;
  featured?: boolean;
  cta?: ReactNode;
  className?: string;
};

/** Programme / pricing card for a coaching service. */
export function ServiceCard({
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
}: ServiceCardProps) {
  const cls = ["wc-svc", featured ? "wc-svc--featured" : "", className].filter(Boolean).join(" ");
  return (
    <div className={cls}>
      <div className="wc-svc__top">
        {icon ? <span className="wc-svc__icon">{icon}</span> : <span />}
        {badge}
      </div>
      <h3 className="wc-svc__name">{name}</h3>
      {description ? <p className="wc-svc__desc">{description}</p> : null}
      {price != null ? (
        <div className="wc-svc__price">
          {price}
          {priceNote ? <small>{priceNote}</small> : null}
        </div>
      ) : null}
      {features.length ? (
        <ul className="wc-svc__list">
          {features.map((f, i) => (
            <li className="wc-svc__feat" key={i}>
              <Check />
              {f}
            </li>
          ))}
        </ul>
      ) : null}
      {cta ? <div className="wc-svc__foot">{cta}</div> : null}
    </div>
  );
}
