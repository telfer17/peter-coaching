# Momentum Coaching — Design System

> The brand and component system for **Momentum Coaching**, the football coaching business of **Peter Weatherson**, a former professional footballer offering 1-2-1 and group coaching for players of all ages. A **dark, deep near-black foundation** (`#07090D`) with layered surfaces, energised by a **two-tone Momentum Blue + Gold** accent lifted from the brand badge. Athletic, condensed, professional — built to feel **elite *and* energetic**.

This system gives design agents everything needed to produce on-brand interfaces and assets: tokens, fonts, logos, reusable components, and a full website UI kit.

---

## 1 · Company & brand context

**Who:** Peter Weatherson — ex-pro footballer, now head coach of **Momentum Coaching**. A personal-brand coaching service.
**What:** 1-2-1 coaching and small-group sessions, for all ages — from young academy players to adult / semi-pro.
**Tagline:** *Transform potential into growth.* (The single slogan used throughout the site — hero headline and footer.)

**Who it's for (three audiences, one tone):**
- **Young / academy players** — and the *parents* who book and pay. Trust, encouragement, clear feedback.
- **Semi-pro / serious players** wanting an edge — credibility, technical detail, "professional standard".
- **Parents** booking for their children — reassurance, safety, visible progress.

The brand must hold *elite + professional + serious* **and** *energetic + motivating* at once. We resolve that with a disciplined polar-white + ink base (no slop, no clutter) energised by a focused **blue + gold** accent and big athletic display type.

### Naming & identity
The business is **Momentum Coaching**. The name + the **ascending-slash mark** carry the whole idea: *momentum, forward motion, growth*. The mark is three forward-leaning bars stepping **up** to the right — blue → (ink/white) → gold.

> The user supplied an existing logo (`uploads/peter-logo.jpg`): a number-9 player silhouette + speed-streaks + "MOMENTUM COACHING" wordmark on near-black, in blue/gold/white. **This system refines that identity** — we rebuilt the ascending blue→white→gold **slash mark** as clean, scalable vector for the primary logo, AND **kept the number-9 player silhouette** (extracted, cropped and cleaned from the original to `assets/player-9.png`) as the brand's hero imagery. The rim-lit figure carries its own near-black background, so it drops straight onto the dark surfaces. Real photography of Peter can join it later.

### Sources provided
- GitHub repo **`telfer17/peter-coaching`** (`https://github.com/telfer17/peter-coaching`) — *referenced by the user but returns 404 at build time* (the GitHub App is installed for `telfer17` and other repos are reachable, so this repo does not exist under that name yet). No code/assets were importable, so the system was built **greenfield** from the brief, questionnaire answers, and the uploaded logo. If/when the repo exists, explore it to align copy, services, pricing and photography.
- **Uploaded logo:** `uploads/peter-logo.jpg` — the existing Momentum Coaching badge (refined here).
- No Figma, decks, or other codebases were attached.

---

## 2 · Content fundamentals (voice & tone)

**Vibe:** confident, direct, working-coach plain-talk. Professional pedigree without arrogance. Encouraging to kids and parents; demanding about standards.

- **Person:** Mostly **"we"** for the business and **"you / your player / your child"** for the reader. Peter is referred to by name in third person on the site ("Peter spent fourteen years…"), first person in personal notes.
- **Casing:** Sentence case for body and most headings. **ALL-CAPS reserved** for the Anton display headlines, eyebrows/labels, and stat captions — the "stadium" voice, used sparingly.
- **Sentence length:** Short. Punchy. Often fragments for rhythm. *"Proper coaching."* *"No drills for the sake of it."*
- **Numbers:** Lead with them — they're credibility. 14 years pro, 120+ players, 540+ sessions, ages 6–34. Set in the mono "scoreboard" voice.
- **Emoji:** **None.** Not part of the brand. Use icons instead.
- **Punctuation:** En-dashes for ranges (6–16). Real apostrophes/quotes. Pound prices `£40`.
- **What we avoid:** hype-speak ("revolutionary", "game-changing"), corporate filler, exclamation overload, anything that talks down to kids or over-promises to parents.

**Example copy that's on-brand:**
> Eyebrow: `FOOTBALL COACHING · EVERY AGE, EVERY LEVEL`
> Headline: `TRANSFORM POTENTIAL INTO GROWTH`
> Body: "One-to-one and small-group coaching led by Peter Weatherson — turning a professional playing career into real, measurable development."
> CTA: `Book a session` · `See programmes` · `Enquire`
> Testimonial framing: "Players improve. Parents notice. Coaches come back."

---

## 3 · Visual foundations

**Overall:** a **dark** canvas — deep near-black base with layered dark surfaces — carrying a **two-tone blue + gold** accent. High contrast, generous space, big athletic type, rim-lit imagery. Think modern academy / sportswear brand at night under floodlights, not clip-art football.

### Colour
- **Base & surfaces (dark ladder):** `--c-bg #07090D` (page), `--c-paper #11151C` (cards/surface), `--c-mist #161B23` (elevated / hover), `--c-line #1E2530` (border). Text is `--text-strong #F7F7F7`, body `--c-ink-700 #C9CFD7`, muted `--c-gray-500 #9AA3AE`.
- **Primary accent — Momentum Blue:** `--c-blue-500 #1E80E3` for **links, primary buttons, focus, hover**; deeper **`--c-blue-700 #0556AF`** (`--accent-fill`) for **large fills, gradients, blocks** (e.g. the contact CTA band). Hover lightens to `#3B93E8`, press `#0A66C7`.
- **Secondary accent — Momentum Gold `#E7B617`:** used **sparingly** — heading underlines, the active nav item, small dividers, hover highlights, the featured card's top edge, stat units. **Never body text, never large fills.**
- **Status (tuned for dark):** success `#34C77B`, warning `#E7B617`, danger `#F0565B`, each with a soft translucent tint.
- **Imagery vibe:** rim-lit, contrasty action/portrait shots on near-black — the `player-9.png` silhouette is the reference. Cool floodlit tone, blue/gold edge light, no warm filters.

### Type
- **Display — Anton** (all-caps, line-height ~0.9): heroes, big numbers, "stadium" moments. Tight, impactful.
- **Heading — Barlow Condensed** (600/700): section titles, subheads, eyebrows, badges, the `COACHING` lockup line. Athletic condensed.
- **Body — Hanken Grotesk** (400/500/600): paragraphs and UI. Neutral-professional, highly readable.
- **Mono — Geist Mono**: stats, fixtures, times, metadata — the scoreboard/data voice.
- Eyebrows & micro-labels: uppercase, letter-spacing `0.08–0.14em`.

### Space, radius, elevation
- **4px base grid** (`--space-1`…`--space-12`).
- **Radii are modest** — `sm 6px` buttons/inputs, `md 10px` icon tiles, `lg 16px` cards, `xl 24px` modals, `pill` only for avatars/dots. **Crisp and athletic, not bubbly.**
- **Shadows are neutral and subtle** — depth, not drama (`xs`→`xl`). A dedicated **accent glow** (`--shadow-accent`) only on the primary button hover. Focus uses a 3px electric-blue ring.
- **Cards:** white surface, `1px` subtle border by default; switch to borderless + `shadow-md` when "elevated"; lift `-3/4px` + `shadow-lg` on hover for interactive cards. A dark (`ink-900`) variant and a **gold-topped featured** variant exist for emphasis.

### Motion
- **Easing:** `--ease-snap cubic-bezier(0.2,0.9,0.2,1)` — a slight athletic snap — for interactions; `--ease-out` for entrances.
- **Durations:** fast `120ms` (hover/press), base `200ms` (cards), slow `360ms`.
- **Hover:** buttons darken (primary→`600`, adds blue glow); cards lift + shadow. **Press:** `translateY(1px)` + darker (`700`). Modals fade + pop.
- Tasteful only — no infinite decorative loops, no bounce. Respect `prefers-reduced-motion`.

### Layout
- Centered container `--container-max 1200px`, 24px gutters. Sticky translucent header (`blur`) at `72px`.
- Backgrounds alternate **polar ↔ white ↔ ink-900** for rhythm (light hero → dark stats → light programmes → white about → light results → dark contact → near-black footer). At most two light tones + ink for dark bands.
- Transparency/blur used sparingly: the sticky header (`rgba white + blur`) and the modal scrim only.

---

## 4 · Iconography

- **System:** **[Lucide](https://lucide.dev)** — clean 2px-stroke, round-cap, geometric outline icons. They match the athletic-but-friendly tone and pair well with condensed type.
- **In this kit:** the website's `icons.jsx` ships a small set of **Lucide-style inline SVGs** (`ArrowRight`, `Users`, `Whistle`, `Trophy`, `Target`, `Video`, `Quote`, `Star`, `MapPin`, `Mail`, `Phone`, `Clock`, `Instagram`, …) so the kit has **no external dependency**. For new work, reuse these or pull the real Lucide set from CDN — they're visually interchangeable.
  - CDN: `https://unpkg.com/lucide@latest` (or `lucide-react` in React projects).
- **Stroke weight:** 2 (2.4–2.6 for small checks/ticks). Round caps & joins. Size 18–24px inline.
- **Accent usage:** feature-tile icons sit on a blue tint (`--accent-tint`) in `--accent`; the **featured** card inverts them to **gold** on a translucent gold fill.
- **No emoji. No unicode-glyph icons.** The only hand-built mark is the **ascending-slash logo** — see `assets/`.
- ⚠️ Lucide is a **substitution** (no icon set was supplied). Flag if a specific set is preferred.

---

## 5 · Logo & brand assets (`assets/`)

The mark is three **forward-leaning slashes stepping up to the right** — **blue → ink/white → gold** — reading as *momentum, forward motion, growth*. Pure geometry, so it works at any size and on any background without a font dependency.

| File | Use |
|------|-----|
| `logo-mark.svg` | Slash mark, blue/ink/gold, transparent (on light) |
| `logo-mark-inverse.svg` | Slash mark on ink rounded tile (primary app/favicon mark) |
| `logo-mark-light.svg` | Slash mark on white rounded tile w/ border |
| `logo-horizontal.svg` | Mark + `MOMENTUM` / `COACHING` lockup (light bg) |
| `logo-horizontal-inverse.svg` | Same, for dark bg |
| `monogram-m.svg` | `M` monogram badge (avatars, stamps, favicon) |
| `player-9.png` | Stylised **number-9 silhouette** (rim-lit, from the logo) — small/brand uses, near-black panels |
| `peter-hero.png` | **Real hero photo** of Peter celebrating, colour-graded & vignetted into the dark theme — used in the homepage hero |

> The wordmark is **set in Anton** (`MOMENTUM`) + **Barlow Condensed** (`COACHING`). In the SVG lockups the text uses those families with a condensed fallback — when viewed outside this project (where the webfonts aren't loaded) it falls back gracefully but isn't pixel-identical. For fixed production logos, **outline the text to paths**.

---

## 6 · Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (`@import`s only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — logos & monogram (above).
- `README.md` (this file) · `SKILL.md` (Agent Skill wrapper).

**Foundation cards** (`guidelines/`) — render in the Design System tab:
- Brand: logo lockups, **brand imagery (No. 9 silhouette)** · Colors: base & surfaces, neutrals, **Momentum Blue scale**, **Momentum Gold scale**, status · Type: display, headings, body, mono · Spacing: scale, radii, shadows.

**Components** (`components/`) — `_ds_bundle.js` namespace `window.WeathersonCoachingDesignSystem_5286a0`:
- `core/` — **Button**, **Badge**, **Eyebrow**, **Stat**
- `forms/` — **Input**, **Select**, **Checkbox**
- `surfaces/` — **Card**, **ServiceCard**, **Avatar** / **AvatarGroup**

Each component directory has `.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` demo. Read the `.prompt.md` for usage. *(The window namespace keeps its original internal name; it is invisible to end users.)*

**UI kit** (`ui_kits/website/`) — full interactive homepage. See its `README.md`.

---

## 7 · Caveats & how to make this perfect

- **Logo direction.** Primary logo is the clean vector **slash mark** + wordmark; the **number-9 silhouette is kept** as hero imagery (`player-9.png`). If you'd like the silhouette *inside* a single combined logo lockup (as in the original), say so and I'll compose one — note raster silhouettes don't scale as cleanly as the vector mark.
- **Fonts load from Google Fonts CDN** (`@import` in `tokens/fonts.css`), so the compiler reports 0 self-hosted `@font-face`. For offline/production robustness, **self-host the `.woff2` files** (Anton, Barlow Condensed, Hanken Grotesk, Geist Mono) and replace the `@import` with local `@font-face` rules.
- **All photography is placeholder.** Supply real shots of Peter and sessions (cool/contrasty action + portrait) to drop into `PhotoSlot`s.
- **Copy, stats, pricing & contact details are representative**, not verified — confirm 1-2-1 / group pricing, the "14 years / 120+ players / 540+ sessions" figures, location, email and phone.
- **Icons are Lucide** (substituted) — swap if you prefer another set.
- The `telfer17/peter-coaching` repo was inaccessible — reconnect/repaste it and I can align copy & services to anything real in there.

> **👉 Your move:** confirm the **dark blue + gold** system reads right, send **real photos** of Peter + verified **services/pricing**, and tell me if you want a **single combined logo lockup** (mark + No. 9 silhouette + wordmark). I'll lock the system to those and iterate to perfect.
