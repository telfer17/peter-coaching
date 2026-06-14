"use client";

import Image from "next/image";
import { Button, LinkButton } from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { ArrowRight } from "@/components/ds/icons";
import { useBooking } from "@/components/BookingProvider";

export function Hero() {
  const { open } = useBooking();
  return (
    <section id="top" style={{ background: "var(--bg-page)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div
        className="wc-hero-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "72px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <Eyebrow>Football coaching · every age, every level</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(48px, 6vw, 84px)",
              lineHeight: 0.92,
              letterSpacing: "0.005em",
              color: "var(--text-strong)",
              margin: "20px 0 0",
            }}
          >
            TRANSFORM
            <br />
            POTENTIAL
            <br />
            <span style={{ color: "var(--accent)" }}>INTO GROWTH</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--text-body)",
              maxWidth: 480,
              margin: "24px 0 0",
            }}
          >
            1-to-1 and small-group football coaching for players of all ages and
            abilities — led by ex-professional Peter Weatherson, over 20 years in
            the game.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={open} iconRight={<ArrowRight size={18} />}>
              Get in touch
            </Button>
            <LinkButton variant="secondary" size="lg" href="#programmes">
              See programmes
            </LinkButton>
          </div>
          {/* TODO: add real social proof once available — fabricated avatars, star rating
              and "120+ players" removed (must not ship invented proof). */}
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              background: "var(--c-bg)",
              border: "1px solid var(--border-subtle)",
              aspectRatio: "4 / 5",
            }}
          >
            <Image
              src="/peter-hero.png"
              alt="Peter Weatherson celebrating"
              fill
              priority
              sizes="(max-width: 920px) 100vw, 460px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            className="wc-hero-badge"
            style={{
              position: "absolute",
              left: -18,
              bottom: 28,
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-lg)",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 0.9, color: "var(--text-strong)" }}>
              20+
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 13,
                lineHeight: 1.15,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Years in
              <br />
              the game
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
