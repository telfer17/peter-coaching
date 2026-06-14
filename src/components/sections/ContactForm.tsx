"use client";

import { useState } from "react";
import { Input } from "@/components/ds/Input";
import { Button } from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/Eyebrow";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section style={{ background: "var(--bg-page)", padding: "84px 0" }}>
      <div
        className="wc-about-grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 56,
          alignItems: "start",
        }}
      >
        <div>
          <Eyebrow>Send a message</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 40,
              lineHeight: 1.04,
              color: "var(--text-strong)",
              margin: "14px 0 0",
            }}
          >
            Get in touch
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-body)", margin: "18px 0 0", maxWidth: 420 }}>
            Tell us about the player — age, level and what you&apos;d like to work on — and we&apos;ll come back
            with the right session and time.
          </p>
        </div>

        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            padding: 30,
          }}
        >
          {sent ? (
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--text-body)" }}>
              {/* PLACEHOLDER — confirm with client: this is a local confirmation only; nothing is sent yet */}
              Thanks for your message. Once the form is connected, we&apos;ll reply by email.
            </p>
          ) : (
            <>
              {/*
                TODO: Connect this contact form to Formspree before launch.
                1. Create a form at https://formspree.io and copy its endpoint.
                2. Either set this <form action="https://formspree.io/f/<form-id>" method="POST">
                   and remove the onSubmit handler, or POST the fields via fetch() and show
                   the confirmation on a successful response.
                Right now submission is NOT wired — onSubmit only flips a local confirmation state.
              */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <Input label="Your name" name="name" placeholder="e.g. Claire Murray" required />
                <Input label="Email" name="email" type="email" placeholder="you@email.com" required />
                <Input label="Message" name="message" placeholder="Tell us about the player…" multiline rows={5} required />
                <Button variant="primary" size="lg" type="submit" style={{ marginTop: 4 }}>
                  Send message
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
