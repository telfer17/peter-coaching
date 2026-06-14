One-line: The Momentum action button — use for any primary or secondary call-to-action (Book a session, View programmes, Submit).

```jsx
import { Button } from "./Button";

<Button variant="primary" size="lg">Book a session</Button>
<Button variant="dark" iconRight={<ArrowRight />}>View programmes</Button>
<Button variant="secondary">Learn more</Button>
<Button variant="ghost" size="sm">Skip</Button>
```

Variants: `primary` (Momentum blue — the main CTA), `dark` (near-black — high-contrast CTA on light sections), `secondary` (outline), `ghost` (text-only, low emphasis).
Sizes: `sm` (36px), `md` (44px, default), `lg` (54px — hero CTAs).
Props: `iconLeft` / `iconRight` accept any node (pass a Lucide `<svg>`), `fullWidth`, `disabled`, `as="a"` for link buttons.
Use ONE primary per view. Don't stack two `primary` buttons side by side — pair primary with secondary or ghost.
