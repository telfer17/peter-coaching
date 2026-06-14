// Programmes section — three ServiceCards.
function Programmes({ onBook }) {
  const { User, Users, Whistle } = window.WCIcons;
  const { ServiceCard, Button, Badge, Eyebrow } = window.WeathersonCoachingDesignSystem_5286a0;
  return (
    <section id="programmes" style={{ background: "var(--bg-page)", padding: "84px 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 40, flexWrap: "wrap" }}>
          <div>
            <Eyebrow>Programmes</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 44, lineHeight: 1.02, color: "var(--text-strong)", margin: "14px 0 0", maxWidth: 520 }}>
              Coaching shaped around the player in front of us
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--text-muted)", maxWidth: 320, margin: 0 }}>
            Every session has a clear focus and a plan. No drills for the sake of it — just real, deliberate development.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "stretch" }} className="wc-prog-grid">
          <ServiceCard icon={<User/>} name="1-2-1 Coaching"
            description="Individual sessions built entirely around one player's game and goals."
            price="£40" priceNote="/ 60 min"
            features={["Fully personalised plan", "Technical & decision-making focus", "Optional video clip analysis"]}
            badge={<Badge variant="solid">Most popular</Badge>}
            featured
            cta={<Button variant="primary" fullWidth onClick={onBook}>Book 1-2-1</Button>}/>
          <ServiceCard icon={<Users/>} name="Group Sessions"
            description="Small-group coaching that keeps every player on the ball and competing."
            price="£15" priceNote="/ player"
            features={["Max 6 players per coach", "Age & ability matched", "Weekday evenings & weekends"]}
            badge={<Badge variant="accent">Ages 6–16</Badge>}
            cta={<Button variant="secondary" fullWidth onClick={onBook}>Join a group</Button>}/>
          <ServiceCard icon={<Whistle/>} name="Team Training"
            description="Sessions for grassroots clubs and squads, planned with your coaches."
            price="POA" priceNote="/ block"
            features={["Tailored to your season plan", "Up to 18 players", "Coach education included"]}
            badge={<Badge variant="neutral">Clubs</Badge>}
            cta={<Button variant="secondary" fullWidth onClick={onBook}>Enquire</Button>}/>
        </div>
      </div>
    </section>
  );
}
window.Programmes = Programmes;
