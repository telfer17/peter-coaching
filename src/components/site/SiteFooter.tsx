import Link from "next/link";
import Image from "next/image";
import { Instagram, X } from "@/components/ds/icons";

const colTitle = {
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  fontSize: 12,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--c-gray-400)",
  margin: "0 0 14px",
} as const;

const fl = {
  display: "block",
  fontSize: 15,
  color: "var(--c-gray-300)",
  textDecoration: "none",
  padding: "5px 0",
} as const;

export function SiteFooter() {
  return (
    <footer style={{ background: "#06080B", color: "#fff", padding: "56px 0 30px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 32 }} className="wc-foot-grid">
          <div>
            <Image
              src="/logo-horizontal-inverse.svg"
              alt="Momentum Coaching"
              width={210}
              height={70}
              style={{ height: 48, width: "auto" }}
            />
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--c-gray-400)", maxWidth: 280, margin: "18px 0 0" }}>
              Professional-standard football coaching for every age and level across Renfrewshire.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {/* PLACEHOLDER — confirm with client: social profiles not yet linked */}
              {[
                { label: "Instagram", icon: <Instagram size={18} /> },
                { label: "X", icon: <X size={18} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p style={colTitle}>Programmes</p>
            <Link href="/#programmes" style={fl}>1-2-1 Coaching</Link>
            <Link href="/#programmes" style={fl}>Group Sessions</Link>
            <Link href="/#programmes" style={fl}>Team Training</Link>
          </div>
          <div>
            <p style={colTitle}>Club</p>
            <Link href="/about" style={fl}>About Peter</Link>
            <Link href="/#results" style={fl}>Results</Link>
            <Link href="/contact" style={fl}>Contact</Link>
          </div>
          <div>
            <p style={colTitle}>Get in touch</p>
            {/* PLACEHOLDER — confirm with client: contact details are invented */}
            <a href="#" style={fl}>hello@momentumcoaching.co.uk</a>
            <a href="#" style={fl}>07700 900 187</a>
            <a href="#" style={fl}>Renfrewshire, UK</a>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: 40,
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ fontSize: 13, color: "var(--c-gray-500)" }}>
            © {new Date().getFullYear()} Peter Weatherson Momentum Coaching. All rights reserved.
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--c-gray-500)", letterSpacing: "0.04em" }}>
            TRANSFORM POTENTIAL INTO GROWTH
          </span>
        </div>
      </div>
    </footer>
  );
}
