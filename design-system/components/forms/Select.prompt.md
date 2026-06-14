One-line: Brand-styled dropdown for picking a programme, age group, or session time.

```jsx
import { Select } from "./Select";

<Select label="Programme" options={["1-2-1 coaching", "Group session", "Team training"]} />
<Select label="Age group" options={[{value:"6-11",label:"Ages 6–11"},{value:"12-16",label:"Ages 12–16"},{value:"adult",label:"Adult / semi-pro"}]} />
```

Pass `options` as strings or `{value,label}`, or nest `<option>` children. Forwards native select props (`value`, `onChange`, `defaultValue`…).
