"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ds/Button";
import { Menu, X } from "@/components/ds/icons";
import { useBooking } from "@/components/BookingProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Peter" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const { open } = useBooking();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = {
    fontFamily: "var(--font-body)",
    fontSize: 15,
    fontWeight: 600,
    textDecoration: "none",
    padding: "8px 2px",
  } as const;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(7,9,13,0.72)",
        backdropFilter: "saturate(180%) blur(12px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          height: "var(--header-h)",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" aria-label="Momentum Coaching — home" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo-horizontal-inverse.svg"
            alt="Momentum Coaching"
            width={210}
            height={70}
            priority
            style={{ height: 44, width: "auto" }}
          />
        </Link>

        <nav className="wc-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  ...linkStyle,
                  color: active ? "var(--text-strong)" : "var(--text-body)",
                  borderBottom: active ? "2px solid var(--gold)" : "2px solid transparent",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Button variant="primary" onClick={open} className="wc-header-cta">
            Get in touch
          </Button>
          <button
            className="wc-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-strong)",
              cursor: "pointer",
              padding: 6,
            }}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu (shown < 920px via the .wc-menu-btn toggle) */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            background: "var(--bg-page)",
            padding: "12px 24px 20px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    ...linkStyle,
                    padding: "10px 0",
                    color: active ? "var(--gold)" : "var(--text-body)",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
            <Button
              variant="primary"
              fullWidth
              className="wc-mobile-book"
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
            >
              Get in touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
