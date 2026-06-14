// Contact CTA band + interactive booking modal (form -> success).
function ContactCTA({ onBook }) {
  const { ArrowRight, MapPin, Mail, Phone } = window.WCIcons;
  const { Button, Eyebrow } = window.WeathersonCoachingDesignSystem_5286a0;
  const detail = (icon, label, val) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ width: 40, height: 40, flex: "none", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.16)", color: "#fff", display: "grid", placeItems: "center" }}>{icon}</span>
      <span>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.62)" }}>{label}</span>
        <span style={{ display: "block", fontSize: 16, fontWeight: 500, color: "#fff", marginTop: 2 }}>{val}</span>
      </span>
    </div>
  );
  return (
    <section id="contact" style={{ background: "linear-gradient(135deg, #0556AF 0%, #073257 100%)", padding: "84px 0" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px",
        display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center",
      }} className="wc-cta-grid">
        <div>
          <Eyebrow tone="inverse">Get started</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 0.94, color: "#fff", margin: "16px 0 0", letterSpacing: "0.005em" }}>
            READY TO<br/>GET TO WORK?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", maxWidth: 440, margin: "20px 0 0" }}>
            Tell us a little about the player and we'll match the right session and time. No commitment to book.
          </p>
          <div style={{ marginTop: 32 }}>
            <Button variant="dark" size="lg" onClick={onBook} iconRight={<ArrowRight size={18}/>}>Book a session</Button>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, borderLeft: "1px solid rgba(255,255,255,0.12)", paddingLeft: 40 }} className="wc-cta-details">
          {detail(<MapPin size={20}/>, "Where", "Astro & 3G pitches · North East")}
          {detail(<Mail size={20}/>, "Email", "hello@momentumcoaching.co.uk")}
          {detail(<Phone size={20}/>, "Phone", "07700 900 187")}
        </div>
      </div>
    </section>
  );
}

function BookingModal({ open, onClose }) {
  const { Check, X } = window.WCIcons;
  const { Button, Input, Select, Checkbox, Badge } = window.WeathersonCoachingDesignSystem_5286a0;
  const [done, setDone] = React.useState(false);
  React.useEffect(() => { if (open) setDone(false); }, [open]);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.66)",
      backdropFilter: "blur(3px)", display: "grid", placeItems: "center", padding: 20,
      animation: "wcFade 180ms ease",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: "min(520px, 100%)", maxHeight: "92vh", overflowY: "auto", background: "var(--bg-surface)",
        borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-xl)", padding: 30, position: "relative",
        animation: "wcPop 220ms cubic-bezier(0.16,1,0.3,1)",
      }}>
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 18, right: 18, background: "var(--c-mist)", border: "1px solid var(--border-subtle)", borderRadius: 8, width: 34, height: 34, display: "grid", placeItems: "center", cursor: "pointer", color: "var(--text-body)" }}><X size={18}/></button>
        {done ? (
          <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
            <span style={{ width: 64, height: 64, borderRadius: "var(--radius-pill)", background: "var(--c-success-tint)", color: "var(--c-success)", display: "grid", placeItems: "center", margin: "0 auto" }}><Check size={32}/></span>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 28, color: "var(--text-strong)", margin: "18px 0 0" }}>Request sent</h3>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--text-muted)", margin: "8px 0 24px", maxWidth: 360, marginInline: "auto" }}>
              Thanks — Peter will be in touch within 24 hours to confirm your session and time.
            </p>
            <Button variant="primary" onClick={onClose}>Done</Button>
          </div>
        ) : (
          <React.Fragment>
            <Badge variant="accent">Book a session</Badge>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 28, color: "var(--text-strong)", margin: "12px 0 4px" }}>Tell us about the player</h3>
            <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 22px" }}>Takes under a minute. No payment now.</p>
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Input label="Player name" placeholder="e.g. Jamie Smith" required/>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Select label="Programme" options={["1-2-1 coaching", "Group session", "Team training"]}/>
                <Select label="Age group" options={[{value:"6",label:"Ages 6–11"},{value:"12",label:"Ages 12–16"},{value:"a",label:"Adult / semi-pro"}]}/>
              </div>
              <Input label="Your email" type="email" placeholder="you@email.com" required/>
              <Checkbox label="I'm booking on behalf of my child" defaultChecked/>
              <Button variant="primary" size="lg" fullWidth type="submit" style={{ marginTop: 4 }}>Send request</Button>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
Object.assign(window, { ContactCTA, BookingModal });
