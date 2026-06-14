// About Peter — photo + story + credential badges.
function About() {
  const { Trophy, Target, Video, Check } = window.WCIcons;
  const { Eyebrow, Badge } = window.WeathersonCoachingDesignSystem_5286a0;
  const PhotoSlot = window.PhotoSlot;
  const creds = [
    { icon: <Trophy size={18}/>, text: "14 years professional football" },
    { icon: <Target size={18}/>, text: "FA / UEFA qualified coach" },
    { icon: <Video size={18}/>, text: "Video analysis & player reports" },
  ];
  return (
    <section id="about" style={{ background: "var(--bg-surface)", padding: "84px 0", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px",
        display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 56, alignItems: "center",
      }} className="wc-about-grid">
        <div style={{ position: "relative" }}>
          <PhotoSlot label="Peter Weatherson" ratio="1 / 1"/>
          <div style={{ position: "absolute", right: -16, top: 24, display: "flex", flexDirection: "column", gap: 8 }} className="wc-about-tags">
            <Badge variant="solid">Ex-pro</Badge>
            <Badge variant="accent">Coach educator</Badge>
          </div>
        </div>
        <div>
          <Eyebrow>About Peter</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 42, lineHeight: 1.04, color: "var(--text-strong)", margin: "14px 0 0" }}>
            A professional career, now in service of the next player
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-body)", margin: "20px 0 0" }}>
            Peter spent fourteen years in the professional game before turning fully to coaching. That experience — the standards, the detail, the mentality — is what every player he works with gets access to.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-body)", margin: "14px 0 0" }}>
            Sessions are honest and demanding, but always built around encouragement. Parents get clear feedback; players get a plan they can feel themselves improving against.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
            {creds.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 38, height: 38, flex: "none", borderRadius: "var(--radius-sm)", background: "var(--accent-tint)", color: "var(--accent)", display: "grid", placeItems: "center" }}>{c.icon}</span>
                <span style={{ fontSize: 16, fontWeight: 500, color: "var(--text-strong)" }}>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
