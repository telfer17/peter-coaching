// Sticky site header with logo lockup + nav + CTA.
function SiteHeader({ onBook }) {
  const { Menu } = window.WCIcons;
  const { Button } = window.WeathersonCoachingDesignSystem_5286a0;
  const link = { fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600, color: "var(--text-body)", textDecoration: "none", padding: "8px 2px" };
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, height: "var(--header-h)",
      background: "rgba(7,9,13,0.72)", backdropFilter: "saturate(180%) blur(12px)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", height: "100%", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
          <span style={{ width: 38, height: 38, borderRadius: 9, background: "var(--c-ink-900)", display: "grid", placeItems: "center" }}>
            <svg viewBox="0 0 94 82" width="25" height="22" fill="none" aria-hidden="true">
              <polygon points="18,46 36,46 22,80 4,80" fill="#2E86F0"/>
              <polygon points="45,24 63,24 49,80 31,80" fill="#fff"/>
              <polygon points="72,2 90,2 76,80 58,80" fill="#FFC629"/>
            </svg>
          </span>
          <span>
            <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 19, lineHeight: 1, letterSpacing: "0.02em", color: "var(--text-strong)" }}>MOMENTUM</span>
            <span style={{ display: "block", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 9.5, letterSpacing: "0.3em", color: "var(--text-muted)", marginTop: 2 }}>COACHING</span>
          </span>
        </a>
        <nav className="wc-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a href="#programmes" style={{ ...link, color: "var(--text-strong)", borderBottom: "2px solid var(--gold)" }}>Programmes</a>
          <a href="#about" style={link}>About Peter</a>
          <a href="#results" style={link}>Results</a>
          <a href="#contact" style={link}>Contact</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Button variant="primary" onClick={onBook} className="wc-header-cta">Book a session</Button>
          <button className="wc-menu-btn" aria-label="Menu" style={{ display: "none", background: "none", border: "none", color: "var(--text-strong)", cursor: "pointer", padding: 6 }}><Menu /></button>
        </div>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
