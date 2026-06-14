# Website UI Kit — Momentum Coaching

A high-fidelity, interactive recreation of the Momentum Coaching marketing site homepage. Built entirely from the design system's tokens (`styles.css`) and component primitives (`Button`, `ServiceCard`, `Badge`, `Stat`, `Avatar`, `Input`, `Select`, `Checkbox`).

## Run it
Open `index.html`. It loads React + the compiled `_ds_bundle.js`, then the section files in order.

## Interactions
- **Book a session** (header, hero, programmes, contact) opens a booking modal with a real form → submit shows a confirmation state.
- Nav links smooth-scroll to each section.
- Cards lift on hover; buttons have hover/press states.
- Responsive: nav collapses < 920px; grids reflow to 2-up then 1-up.

## Files
| File | Role |
|------|------|
| `index.html` | Page shell, fonts, responsive CSS, mounts `<App/>` |
| `App.jsx` | Composes all sections, owns the booking modal state |
| `icons.jsx` | Lucide-style inline icons + branded `PhotoSlot` placeholder |
| `SiteHeader.jsx` | Sticky header — logo lockup, nav, CTA |
| `Hero.jsx` | Anton headline, CTAs, photo + floating proof |
| `StatsStrip.jsx` | Dark scoreboard credibility band |
| `Programmes.jsx` | Three `ServiceCard`s (1-2-1 featured, group, team) |
| `About.jsx` | Peter's story + credential rows |
| `Testimonials.jsx` | Quote cards with avatars + star ratings |
| `Booking.jsx` | Contact CTA band + interactive `BookingModal` |
| `SiteFooter.jsx` | Footer nav, contact, socials |

## Placeholders
Photos use the branded `PhotoSlot` placeholder (dark panel + monogram watermark). **Swap in real photography** of Peter and sessions for production — see the root README → Caveats. Copy (stats, testimonials, pricing) is representative and should be confirmed before launch.
