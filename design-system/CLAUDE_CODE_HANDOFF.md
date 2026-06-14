# Using this in Claude Code

This is the **Momentum Coaching design system** — everything Claude Code needs to build or restyle the real website on-brand. The HTML/JSX here are **design references** (they show the intended look & behaviour); the **CSS tokens and assets are production-ready** and can be lifted directly.

## Quickest path

1. **Unzip into your website repo.** A good home is a top-level folder, e.g. `design-system/`, or as a Claude Code skill at `.claude/skills/momentum-coaching-design/`.
2. **Point Claude Code at it.** In your repo, tell Claude Code:
   > "Read `design-system/SKILL.md` and `design-system/readme.md`. This is our brand system. Build/restyle the site to match it — use the tokens in `styles.css`, recreate the components in our framework using the files in `components/` as reference, and use the real assets in `assets/`."
3. `SKILL.md` is already formatted as an **Agent Skill** (YAML front-matter + instructions), so if you drop it under `.claude/skills/` Claude Code can invoke it by name.

## What to use directly vs. recreate

| Use **directly** (production-ready) | Use as **reference** (recreate in your stack) |
|---|---|
| `styles.css` + `tokens/*.css` — CSS custom properties (colours, type, spacing, radii, shadows, motion). Link or import these as-is. | `components/**/*.jsx` — plain-React recreations of the primitives (Button, Card, Badge, Input…). Rebuild them in your framework (React/Vue/Svelte/etc.) using your conventions; copy the **styles/values**, not necessarily the code. |
| `assets/` — logo SVGs (`logo-horizontal*.svg`, `logo-mark*.svg`, `monogram-m.svg`), the `peter-hero.png` graded hero photo, `player-9.png` silhouette. Copy these in. | `ui_kits/website/` — the full interactive homepage. Use it as the **layout & interaction spec**; rebuild sections as real components. |
| `_ds_bundle.js` — the compiled component library (lets you render the reference HTML offline). | `guidelines/*.card.html` — visual spec sheets for colours / type / spacing. |

## The non-negotiable brand tokens (dark theme)

```css
/* surfaces */
--bg-page:    #07090D;   /* page base */
--bg-surface: #11151C;   /* cards */
--bg-elev:    #161B23;   /* elevated / hover */
--border:     #1E2530;
/* text */
--text:       #F7F7F7;
--text-body:  #C9CFD7;
--text-muted: #9AA3AE;
/* accent — Momentum Blue */
--blue:       #1E80E3;   /* links, primary buttons, hover, focus */
--blue-deep:  #0556AF;   /* large fills, gradients, blocks */
/* accent — Momentum Gold (sparingly) */
--gold:       #E7B617;   /* heading underlines, active nav, dividers, hover highlights */
```

Type: **Anton** (display/all-caps), **Barlow Condensed** (headings/labels/buttons), **Hanken Grotesk** (body/UI), **Geist Mono** (stats). All four are on Google Fonts — see `tokens/fonts.css`. For production, self-host the `.woff2` files.

## Read these first
- **`readme.md`** — the full design guide: brand context, voice & tone, visual foundations, iconography, asset list, component index.
- **`SKILL.md`** — the agent-skill entry point + quick reference.

Everything else is referenced from those two files.
