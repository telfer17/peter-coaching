"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ds/Button";
import { Input } from "@/components/ds/Input";
import { Select } from "@/components/ds/Select";
import { Checkbox } from "@/components/ds/Checkbox";
import { Badge } from "@/components/ds/Badge";
import { Check, X } from "@/components/ds/icons";

type BookingContextValue = { open: () => void };
const BookingContext = createContext<BookingContextValue>({ open: () => {} });

/** Access the shared booking modal — call `open()` from any client component. */
export function useBooking() {
  return useContext(BookingContext);
}

/**
 * Provides the shared "Get in touch" enquiry modal across the whole app
 * (header CTA, hero, programmes, contact band all open the same modal).
 */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  // Bumped on every open so the modal remounts and its internal state resets
  // (avoids resetting `done` via an effect).
  const [openKey, setOpenKey] = useState(0);
  const open = useCallback(() => {
    setOpenKey((k) => k + 1);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      {isOpen ? <BookingModal key={openKey} onClose={close} /> : null}
    </BookingContext.Provider>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [done, setDone] = useState(false);

  // Close on Escape while the modal is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get in touch"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.66)",
        backdropFilter: "blur(3px)",
        display: "grid",
        placeItems: "center",
        padding: 20,
        animation: "wcFade 180ms ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(520px, 100%)",
          maxHeight: "92vh",
          overflowY: "auto",
          background: "var(--bg-surface)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-xl)",
          padding: 30,
          position: "relative",
          animation: "wcPop 220ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: "var(--c-mist)",
            border: "1px solid var(--border-subtle)",
            borderRadius: 8,
            width: 34,
            height: 34,
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            color: "var(--text-body)",
          }}
        >
          <X size={18} />
        </button>

        {done ? (
          <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
            <span
              style={{
                width: 64,
                height: 64,
                borderRadius: "var(--radius-pill)",
                background: "var(--c-success-tint)",
                color: "var(--c-success)",
                display: "grid",
                placeItems: "center",
                margin: "0 auto",
              }}
            >
              <Check size={32} />
            </span>
            <h3 style={{ font: "var(--type-h3)", color: "var(--text-strong)", margin: "18px 0 0" }}>
              Request received
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                color: "var(--text-muted)",
                margin: "8px auto 24px",
                maxWidth: 360,
              }}
            >
              {/* PLACEHOLDER — confirm with client: response-time promise is illustrative */}
              Thanks — we&apos;ll be in touch to confirm a session and time.
            </p>
            <Button variant="primary" onClick={onClose}>
              Done
            </Button>
          </div>
        ) : (
          <>
            <Badge variant="accent">Get in touch</Badge>
            <h3 style={{ font: "var(--type-h3)", color: "var(--text-strong)", margin: "12px 0 4px" }}>
              Tell us about the player
            </h3>
            <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 22px" }}>
              Takes under a minute. No payment now.
            </p>
            {/*
              TODO: Connect this booking form to Formspree (or a backend) before launch.
              1. Create a form at https://formspree.io and copy its endpoint.
              2. POST these fields to it (fetch) instead of the local success state below,
                 then show the confirmation on a successful response.
              Right now submission is NOT wired — it only flips to a local confirmation UI.
            */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <Input label="Player name" name="player" placeholder="e.g. Jamie Smith" required />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Select label="Programme" name="programme" options={["1-2-1 coaching", "Group session", "Team training"]} />
                <Select
                  label="Age group"
                  name="ageGroup"
                  options={[
                    { value: "6", label: "Ages 6–11" },
                    { value: "12", label: "Ages 12–16" },
                    { value: "a", label: "Adult / semi-pro" },
                  ]}
                />
              </div>
              <Input label="Your email" name="email" type="email" placeholder="you@email.com" required />
              <Checkbox label="I'm booking on behalf of my child" name="onBehalf" defaultChecked />
              <Button variant="primary" size="lg" fullWidth type="submit" style={{ marginTop: 4 }}>
                Send request
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
