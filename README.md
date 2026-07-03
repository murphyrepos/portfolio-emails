# @murphyrepos/emails

Published React Email templates and i18n helpers for the portfolio app.

## Next.js Integration

Install the package in the Next.js app:

```sh
pnpm add @murphyrepos/emails
```

Use the package from server-side route handlers or server actions:

```ts
import { ContactConfirmation, getEmailMessages, interpolate } from '@murphyrepos/emails';
```

The Next.js app owns:

- Resend client setup
- API routes or server actions
- request validation
- recipient routing
- subject interpolation
- attachments
- provider secrets

This package owns:

- email templates
- locale-aware email copy
- subject and preview strings
- public template prop types

Provider secrets such as `RESEND_API_KEY` belong in the Next.js app, not this package.

## Outreach email

The outreach template receives all message content from the caller. Only the shared company footer is fixed.

```tsx
import { OutreachEmail } from '@murphyrepos/emails';

const email = (
  <OutreachEmail
    subject="A practical way to simplify your product workflow"
    body={`Hi Jordan,

I noticed your team is expanding. We help growing teams streamline their workflow and ship consistently.

Would a short conversation next week be useful?

Best,
Alex`}
  />
);
```

Pass the same `subject` value to your email provider when sending the rendered template.
