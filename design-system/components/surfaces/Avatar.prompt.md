One-line: Round avatar (photo or initials) for coaches, testimonials, and "parents trust us" social-proof rows.

```jsx
import { Avatar, AvatarGroup } from "./Avatar";

<Avatar name="Peter Weatherson" size="lg" />
<Avatar src="/assets/coach.jpg" name="Peter Weatherson" size="xl" />

<AvatarGroup>
  <Avatar name="Jamie S" size="sm" />
  <Avatar name="Aoife M" size="sm" tone="accent" />
  <Avatar name="Tom R" size="sm" />
</AvatarGroup>
```

Sizes: `sm` 32 · `md` 44 · `lg` 64 · `xl` 96. Falls back to two initials when `src` is omitted. Use `AvatarGroup` for overlapping social-proof rows.
