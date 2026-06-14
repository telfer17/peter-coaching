One-line: Labelled text input for forms — booking, contact, enquiry — with hint and error states.

```jsx
import { Input } from "./Input";

<Input label="Full name" placeholder="e.g. Jamie Smith" required />
<Input label="Email" type="email" icon={<MailIcon/>} hint="We'll only use this to confirm your session." />
<Input label="Phone" error="Please enter a valid number." defaultValue="07" />
```

Props: `label`, `hint`, `error` (red state), `required` (asterisk), `icon` (leading node). Forwards all native input props (`type`, `placeholder`, `value`, `onChange`, `disabled`…).
