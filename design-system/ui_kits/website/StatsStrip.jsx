// Dark stats strip — the scoreboard credibility band.
function StatsStrip() {
  const { Stat } = window.WeathersonCoachingDesignSystem_5286a0;
  const items = [
    { value: 540, unit: "+", label: "Sessions delivered" },
    { value: 120, unit: "+", label: "Players coached" },
    { value: 14, label: "Years as a pro" },
    { value: "6–34", label: "Ages coached" },
  ];
  return (
    <section style={{ background: "var(--bg-surface)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "44px 24px",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28,
      }} className="wc-stats-grid">
        {items.map((s, i) => (
          <div key={i} style={{ borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)", paddingLeft: i === 0 ? 0 : 28 }}>
            <Stat value={s.value} unit={s.unit} label={s.label} tone="inverse"/>
          </div>
        ))}
      </div>
    </section>
  );
}
window.StatsStrip = StatsStrip;
