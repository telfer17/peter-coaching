One-line: The programme/pricing card — one per coaching service (1-2-1, group, team), with price, features and a CTA.

```jsx
import { ServiceCard } from "./ServiceCard";
import { Button } from "../core/Button";
import { Badge } from "../core/Badge";

<ServiceCard
  icon={<UserIcon/>}
  name="1-2-1 Coaching"
  description="Individual sessions built entirely around one player's game."
  price="£40" priceNote="/ session"
  features={["60-minute focused session", "Tailored technical plan", "Optional video analysis"]}
  badge={<Badge variant="solid">Most popular</Badge>}
  featured
  cta={<Button variant="primary" fullWidth>Book 1-2-1</Button>}
/>
```

Set `featured` for the dark highlighted card (use on exactly one in a row of three). `cta` is usually a `<Button fullWidth>`. Pass a `<Badge>` to `badge` for the top-right tag.
