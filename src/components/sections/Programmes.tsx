"use client";

import { ServiceCard } from "@/components/ds/ServiceCard";
import { Button } from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { User, Users, Whistle } from "@/components/ds/icons";
import { useBooking } from "@/components/BookingProvider";

export function Programmes() {
  const { open } = useBooking();
  return (
    <section id="programmes" style={{ background: "var(--bg-page)", padding: "84px 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          <div>
            <Eyebrow>Programmes</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 44,
                lineHeight: 1.02,
                color: "var(--text-strong)",
                margin: "14px 0 0",
                maxWidth: 520,
              }}
            >
              Coaching shaped around the player in front of us
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--text-muted)", maxWidth: 320, margin: 0 }}>
            Every session has a clear focus and a plan. No drills for the sake of it — just real, deliberate
            development.
          </p>
        </div>
        {/* TODO: pricing to confirm — Peter hasn't set prices yet, so no price is shown
            on any card and every CTA is "Get in touch". */}
        <div
          className="wc-prog-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "stretch" }}
        >
          <ServiceCard
            icon={<User />}
            name="1-to-1 Coaching"
            description="Sessions tailored to your individual needs, focused on the areas you most want to develop."
            featured
            cta={
              <Button variant="primary" fullWidth onClick={open}>
                Get in touch
              </Button>
            }
          />
          <ServiceCard
            icon={<Users />}
            name="Small Group Sessions"
            description="Train and develop alongside other players in a supportive, motivating environment."
            cta={
              <Button variant="secondary" fullWidth onClick={open}>
                Get in touch
              </Button>
            }
          />
          <ServiceCard
            icon={<Whistle />}
            name="Technical, Tactical & Confidence"
            description="Technical, tactical and confidence-building training, always in a fun, positive and professional setting."
            cta={
              <Button variant="secondary" fullWidth onClick={open}>
                Get in touch
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
