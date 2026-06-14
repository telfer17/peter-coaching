import { Stat } from "@/components/ds/Stat";

// Verified facts (confirmed by client).
const items = [
  { value: 20, unit: "+", label: "Years in the game" },
  { value: 122, label: "Goals for Greenock Morton" },
  { value: "Hall of Fame", label: "Morton, 2023" },
];

export function StatsStrip() {
  return (
    <section style={{ background: "var(--bg-surface)" }}>
      <div
        className="wc-stats-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "44px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
        }}
      >
        {items.map((s, i) => (
          <div
            key={i}
            style={{
              borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
              paddingLeft: i === 0 ? 0 : 28,
            }}
          >
            <Stat value={s.value} unit={s.unit} label={s.label} tone="inverse" />
          </div>
        ))}
      </div>
    </section>
  );
}
