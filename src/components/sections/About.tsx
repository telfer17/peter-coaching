import Image from "next/image";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Badge } from "@/components/ds/Badge";
import { Trophy, Target, Star } from "@/components/ds/icons";

// Credential rows drawn from the verified bio (facts, not the kit's invented figures).
const creds = [
  {
    icon: <Trophy size={18} />,
    text: "Greenock Morton Hall of Fame — inducted 2023",
  },
  { icon: <Target size={18} />, text: "122 goals in ten seasons at Morton" },
  {
    icon: <Star size={18} />,
    text: "Second Division title winner with Queen of the South",
  },
];

export function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg-surface)",
        padding: "84px 0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        className="wc-about-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          {/* The number-9 silhouette is transparent — it blends directly onto the
              section surface, so it needs no backing panel. High-res asset
              (1086×1448); next/image downscales it via the sizes hint. */}
          <Image
            src="/player-9.png"
            alt="Momentum Coaching number-9 player silhouette"
            width={1086}
            height={1448}
            sizes="(max-width: 920px) 100vw, 460px"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
          <div
            className="wc-about-tags"
            style={{
              position: "absolute",
              right: -16,
              top: 24,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <Badge variant="solid">Ex-professional</Badge>
            <Badge variant="accent">Greenock Morton - Hall of Fame</Badge>
          </div>
        </div>
        <div>
          <Eyebrow>About Peter</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 42,
              lineHeight: 1.04,
              color: "var(--text-strong)",
              margin: "14px 0 0",
            }}
          >
            A professional career, now in service of the next player
          </h2>
          {/* Verified bio (replaces the kit's invented "14 years / 120+ players" narrative). */}
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--text-body)",
              margin: "20px 0 0",
            }}
          >
            Peter &ldquo;Spoonsy&rdquo; Weatherson is one of Greenock
            Morton&apos;s all-time greats. Across ten seasons at Cappielow he
            scored 122 goals — the club&apos;s joint fourth-highest scorer ever,
            and the only Morton player to reach a century of goals this century
            — earning his induction into the Morton Hall of Fame in 2023.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--text-body)",
              margin: "14px 0 0",
            }}
          >
            Before Morton he scored 45 goals in just over 100 appearances for
            Queen of the South, winning the Second Division title, and after
            leaving he added more than 60 goals across two spells at Annan
            Athletic.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 28,
            }}
          >
            {creds.map((c, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <span
                  style={{
                    width: 38,
                    height: 38,
                    flex: "none",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--accent-tint)",
                    color: "var(--accent)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {c.icon}
                </span>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "var(--text-strong)",
                  }}
                >
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
