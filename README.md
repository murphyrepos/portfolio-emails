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
