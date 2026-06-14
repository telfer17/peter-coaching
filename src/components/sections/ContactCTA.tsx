"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { ArrowRight, MapPin, Mail, Phone } from "@/components/ds/icons";
import { useBooking } from "@/components/BookingProvider";

function Detail({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 40,
          height: 40,
          flex: "none",
          borderRadius: "var(--radius-sm)",
          background: "rgba(255,255,255,0.16)",
          color: "#fff",
          display: "grid",
          placeItems: "center",
        }}
      >
        {icon}
      </span>
      <span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.62)",
          }}
        >
          {label}
        </span>
        <span style={{ display: "block", fontSize: 16, fontWeight: 500, color: "#fff", marginTop: 2 }}>{value}</span>
      </span>
    </div>
  );
}

export function ContactCTA() {
  const { open } = useBooking();
  return (
    <section id="contact" style={{ background: "linear-gradient(135deg, #0556AF 0%, #073257 100%)", padding: "84px 0" }}>
      <div
        className="wc-cta-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <Eyebrow tone="inverse">Get started</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 0.94,
              color: "#fff",
              margin: "16px 0 0",
              letterSpacing: "0.005em",
            }}
          >
            LET&apos;S BUILD
            <br />
            MOMENTUM TOGETHER
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", maxWidth: 440, margin: "20px 0 0" }}>
            Tell us a little about the player and we&apos;ll match the right session and time. No commitment to book.
          </p>
          <div style={{ marginTop: 32 }}>
            <Button variant="dark" size="lg" onClick={open} iconRight={<ArrowRight size={18} />}>
              Get in touch
            </Button>
          </div>
        </div>
        <div
          className="wc-cta-details"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            borderLeft: "1px solid rgba(255,255,255,0.12)",
            paddingLeft: 40,
          }}
        >
          {/* PLACEHOLDER — confirm with client: contact details are invented */}
          <Detail icon={<MapPin size={20} />} label="Where" value="Astro & 3G pitches · Renfrewshire" />
          <Detail icon={<Mail size={20} />} label="Email" value="hello@momentumcoaching.co.uk" />
          <Detail icon={<Phone size={20} />} label="Phone" value="07700 900 187" />
        </div>
      </div>
    </section>
  );
}
