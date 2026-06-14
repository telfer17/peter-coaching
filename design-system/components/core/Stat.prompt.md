One-line: A big display-number stat with an uppercase mono caption — the brand's "scoreboard" voice for credibility figures.

```jsx
import { Stat } from "./Stat";

<Stat value={540} unit="+" label="Sessions delivered" />
<Stat value={14} label="Years pro" tone="accent" />
<Stat value="6–34" label="Ages coached" tone="inverse" />  {/* on dark */}
```

Tones: `default`, `accent` (Momentum-blue number), `inverse` (dark backgrounds). Use in rows of 3–4 to build a stats strip. Keep labels short (1–2 words).
