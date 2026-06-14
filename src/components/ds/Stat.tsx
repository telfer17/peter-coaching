import type { ReactNode } from "react";

type StatProps = {
  value: ReactNode;
  unit?: ReactNode;
  label: ReactNode;
  tone?: "default" | "inverse" | "accent";
  className?: string;
};

/** Big mono/display stat block — the "scoreboard" voice. */
export function Stat({ value, unit, label, tone = "default", className = "" }: StatProps) {
  const cls = ["wc-stat", tone !== "default" ? `wc-stat--${tone}` : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls}>
      <div className="wc-stat__v">
        {value}
        {unit ? <span className="wc-stat__u">{unit}</span> : null}
      </div>
      <div className="wc-stat__k">{label}</div>
    </div>
  );
}
