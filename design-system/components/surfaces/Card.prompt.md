One-line: The base surface container — wrap any content block, list, or stat group in it.

```jsx
import { Card } from "./Card";

<Card>Plain padded surface</Card>
<Card elevated interactive>Lifts on hover</Card>
<Card tone="dark">Inverse panel</Card>
<Card tone="accent">Momentum-blue feature panel</Card>
```

Props: `tone` (default / dark / accent), `padded`, `elevated`, `interactive`. Compose ServiceCard, testimonial blocks, etc. on top of it.
