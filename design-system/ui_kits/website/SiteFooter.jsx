// Site footer.
function SiteFooter() {
  const { Instagram, X } = window.WCIcons;
  const colTitle = { fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-gray-400)", margin: "0 0 14px" };
  const fl = { display: "block", fontSize: 15, color: "var(--c-gray-300)", textDecoration: "none", padding: "5px 0" };
  return (
    <footer style={{ background: "#06080B", color: "#fff", padding: "56px 0 30px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 32 }} className="wc-foot-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <span style={{ width: 36, height: 36, borderRadius: 9, background: "#fff", display: "grid", placeItems: "center" }}>
                <svg viewBox="0 0 94 82" width="24" height="21" fill="none" aria-hidden="true">
                  <polygon points="18,46 36,46 22,80 4,80" fill="#1A6FD4"/>
                  <polygon points="45,24 63,24 49,80 31,80" fill="#0A0E15"/>
                  <polygon points="72,2 90,2 76,80 58,80" fill="#F2B705"/>
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 20, letterSpacing: "0.02em" }}>MOMENTUM</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--c-gray-400)", maxWidth: 280, margin: "18px 0 0" }}>
              Professional-standard football coaching for every age and level across the North East.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {[<Instagram size={18}/>, <X size={18}/>].map((ic, i) => (
                <a key={i} href="#" aria-label="social" style={{ width: 38, height: 38, borderRadius: "var(--radius-sm)", border: "1px solid rgba(255,255,255,0.16)", display: "grid", placeItems: "center", color: "#fff" }}>{ic}</a>
              ))}
            </div>
          </div>
          <div>
            <p style={colTitle}>Programmes</p>
            <a href="#programmes" style={fl}>1-2-1 Coaching</a>
            <a href="#programmes" style={fl}>Group Sessions</a>
            <a href="#programmes" style={fl}>Team Training</a>
          </div>
          <div>
            <p style={colTitle}>Club</p>
            <a href="#about" style={fl}>About Peter</a>
            <a href="#results" style={fl}>Results</a>
            <a href="#contact" style={fl}>Contact</a>
          </div>
          <div>
            <p style={colTitle}>Get in touch</p>
            <a href="#" style={fl}>hello@momentumcoaching.co.uk</a>
            <a href="#" style={fl}>07700 900 187</a>
            <a href="#" style={fl}>North East, UK</a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40, paddingTop: 22, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontSize: 13, color: "var(--c-gray-500)" }}>© 2026 Momentum Coaching. All rights reserved.</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--c-gray-500)", letterSpacing: "0.04em" }}>TRANSFORM POTENTIAL INTO GROWTH</span>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
