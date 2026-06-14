One-line: Small condensed-uppercase label for status, category, or metadata (Ages 6–11, Fully booked, New).

```jsx
import { Badge } from "./Badge";

<Badge variant="accent">1-2-1</Badge>
<Badge variant="gold">Featured</Badge>
<Badge variant="solid">Most popular</Badge>
<Badge variant="success" dot>Spaces open</Badge>
<Badge variant="danger" dot>Fully booked</Badge>
<Badge variant="outline">Ages 6–11</Badge>
```

Variants: `accent` (Momentum blue tint), `gold` (premium gold tint), `neutral` (grey), `solid` (near-black), `success`/`warning`/`danger` (status tints), `outline`.
Set `dot` for a leading status dot. Keep labels 1–3 words.
