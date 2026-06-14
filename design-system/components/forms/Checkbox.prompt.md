One-line: Custom checkbox for opt-ins and multi-select choices (consent, session add-ons).

```jsx
import { Checkbox } from "./Checkbox";

<Checkbox label="I'm booking on behalf of my child" />
<Checkbox label="Add video analysis" description="Receive a clipped breakdown after each session (+£10)." defaultChecked />
```

Props: `label`, `description`, `disabled`, plus native input props (`checked`, `defaultChecked`, `onChange`).
