// Results / testimonials — quote cards with avatars.
function Testimonials() {
  const { Quote, Star } = window.WCIcons;
  const { Eyebrow, Avatar } = window.WeathersonCoachingDesignSystem_5286a0;
  const quotes = [
    { q: "Our son has come on more in three months with Peter than two years anywhere else. He actually looks forward to every session.", name: "Claire M.", role: "Parent · age 9", tone: "accent" },
    { q: "Proper coaching. The detail on my first touch and movement off the ball got me back into the semi-pro setup.", name: "Daniel R.", role: "Player · age 19", tone: "default" },
    { q: "Peter ran a block for our U14s and the difference in the lads' decision-making was night and day.", name: "Coach Owen", role: "Grassroots club", tone: "default" },
  ];
  return (
    <section id="results" style={{ background: "var(--bg-page)", padding: "84px 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ display: "flex", justifyContent: "center" }}><Eyebrow>Results &amp; reviews</Eyebrow></div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 44, lineHeight: 1.04, color: "var(--text-strong)", margin: "14px auto 0", maxWidth: 600 }}>
            Players improve. Parents notice. Coaches come back.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="wc-quote-grid">
          {quotes.map((t, i) => (
            <figure key={i} style={{
              margin: 0, background: "var(--bg-surface)", border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)", padding: 28, display: "flex", flexDirection: "column", gap: 18,
            }}>
              <Quote size={34} style={{ color: "var(--accent)", opacity: 0.9 }}/>
              <blockquote style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: "var(--text-strong)", fontWeight: 500, flex: 1, textWrap: "pretty" }}>
                "{t.q}"
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid var(--border-subtle)", paddingTop: 18 }}>
                <Avatar name={t.name} tone={t.tone}/>
                <span>
                  <span style={{ display: "block", fontWeight: 600, fontSize: 14.5, color: "var(--text-strong)" }}>{t.name}</span>
                  <span style={{ display: "block", fontSize: 13, color: "var(--text-muted)" }}>{t.role}</span>
                </span>
                <span style={{ marginLeft: "auto", display: "flex", gap: 1, color: "var(--gold)" }}>
                  {[0,1,2,3,4].map(s => <Star key={s} size={13}/>)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
