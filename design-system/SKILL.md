---
name: momentum-coaching-design
description: Use this skill to generate well-branded interfaces and assets for Momentum Coaching (Peter Weatherson — 1-2-1 & group football coaching for all ages), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, logo assets, and a UI kit of components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Momentum Coaching (head coach Peter Weatherson). Voice: confident, direct, working-coach plain-talk. No emoji.
- **Foundation:** **dark theme** — deep near-black base (`#07090D`), surfaces (`#11151C`), border (`#1E2530`), text (`#F7F7F7`), muted (`#9AA3AE`). Two-tone accent — **Momentum Blue** `#1E80E3` (links/buttons/hover/focus) + deep `#0556AF` (large fills/gradients/blocks); **Momentum Gold** `#E7B617` (sparingly: heading underlines, active nav, dividers, hover highlights). Never gold body text.
- **Type:** Anton (display, all-caps), Barlow Condensed (headings/labels), Hanken Grotesk (body), Geist Mono (stats).
- **Tokens:** link `styles.css`; use CSS custom properties (`--accent`, `--gold`, `--text-strong`, `--bg-page`, `--space-*`, `--radius-*`, …).
- **Components:** load `_ds_bundle.js`, read from `window.WeathersonCoachingDesignSystem_5286a0` (internal namespace, invisible to users) — Button, Badge, Eyebrow, Stat, Input, Select, Checkbox, Card, ServiceCard, Avatar. See each `components/**/*.prompt.md`.
- **Logo:** ascending-slash mark (blue → ink/white → gold) + `MOMENTUM` / `COACHING` wordmark in `assets/`. The **number-9 player silhouette** (`assets/player-9.png`) is the hero/brand image — use on near-black panels.
- **UI kit:** `ui_kits/website/` — full interactive homepage to copy patterns from.

Honour the README's content & visual rules. Keep it dark (deep near-black) with a focused blue+gold accent, athletic, and clean.
