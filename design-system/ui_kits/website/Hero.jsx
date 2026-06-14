// Hero — big Anton headline, eyebrow, CTAs, coach photo + floating proof.
function Hero({ onBook }) {
  const { ArrowRight, Star } = window.WCIcons;
  const { Button, Eyebrow, Avatar, AvatarGroup } = window.WeathersonCoachingDesignSystem_5286a0;
  const PhotoSlot = window.PhotoSlot;
  return (
    <section id="top" style={{ background: "var(--bg-page)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px 24px 80px",
        display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center",
      }} className="wc-hero-grid">
        <div>
          <Eyebrow>Football coaching · every age, every level</Eyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(48px, 6vw, 84px)",
            lineHeight: 0.92, letterSpacing: "0.005em", color: "var(--text-strong)", margin: "20px 0 0",
          }}>
            TRANSFORM<br/>POTENTIAL<br/><span style={{ color: "var(--accent)" }}>INTO GROWTH</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55, color: "var(--text-body)", maxWidth: 480, margin: "24px 0 0" }}>
            One-to-one and small-group coaching led by Peter Weatherson — turning a professional playing career into real, measurable development for players aged 6 to adult.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={onBook} iconRight={<ArrowRight size={18}/>}>Book a session</Button>
            <Button variant="secondary" size="lg" as="a" href="#programmes">See programmes</Button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 34 }}>
            <AvatarGroup>
              <Avatar name="Jamie Smith" size="sm"/>
              <Avatar name="Aoife Murphy" size="sm" tone="accent"/>
              <Avatar name="Tom Reilly" size="sm"/>
              <Avatar name="Niamh Doyle" size="sm"/>
            </AvatarGroup>
            <div>
              <div style={{ display: "flex", gap: 2, color: "var(--gold)" }}>
                {[0,1,2,3,4].map(i => <Star key={i} size={15}/>)}
              </div>
              <p style={{ margin: "3px 0 0", fontSize: 13.5, color: "var(--text-muted)" }}><strong style={{ color: "var(--text-strong)" }}>120+ players</strong> coached across the North East</p>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--c-bg)", border: "1px solid var(--border-subtle)", aspectRatio: "4 / 5" }}>
            <img src="../../assets/peter-hero.png" alt="Peter Weatherson celebrating" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
          </div>
          <div style={{
            position: "absolute", left: -18, bottom: 28, background: "var(--bg-elevated)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", padding: "14px 18px",
            display: "flex", alignItems: "center", gap: 14,
          }} className="wc-hero-badge">
            <span style={{ fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 0.9, color: "var(--text-strong)" }}>14</span>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13, lineHeight: 1.15, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text-muted)" }}>Years as a<br/>pro footballer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
