# @interstellar/emails

Transactional email templates for the portfolio site, built with
[React Email](https://react.email) + Tailwind, sent via [Resend](https://resend.com).

## Layout

```
emails/
├── index.ts              Package entry — exports templates + i18n helpers
├── src/
│   ├── components/       Shared building blocks (CompanyHeader, CompanyFooter,
│   │                     EmailLayout, DetailTable)
│   ├── templates/        Production templates (what the portfolio imports)
│   │   ├── External/     Recipient-facing confirmations
│   │   └── Internal/     Team-facing notifications
│   ├── i18n/             Email copy per locale (locales/en.json) + helpers
│   └── theme.ts          Tailwind config mirroring the portfolio brand tokens
└── previews/             Preview entries for the React Email studio — sample
    ├── External/         Recipient-facing preview entries
    ├── Internal/         Team-facing preview entries
    └── static/           Local logo copies for offline preview work
```

## Develop

```sh
npm run dev        # React Email studio on http://localhost:3001
npm run typecheck
```

The studio renders the files in `previews/External` and `previews/Internal`,
which wrap the real templates in `src/templates/External` and
`src/templates/Internal` with sample props. Keep sample data in the preview
files — production templates must stay prop-driven.

## Templates

| Template | Sent to | Trigger |
| --- | --- | --- |
| `ContactInquiryInternal` | hello@ / careers@ | Contact form submission |
| `ContactConfirmation` | the visitor | Contact form submission |
| `JobApplicationInternal` | careers@ | Job application |
| `JobApplicationConfirmation` | the applicant | Job application |

All templates take a `locale` prop (defaults to `en`). Logo URLs are derived
from `EMAIL_ASSET_BASE_URL`, falling back to `NEXT_PUBLIC_SITE_URL`, then
`SITE_URL`, then `https://murphyrepos.com`. The hook normalizes
`www.murphyrepos.com` to `murphyrepos.com` for image assets because email
clients require a valid TLS certificate for remote images. Header and footer
marks use `/logos/small_white.png`; the header renders the brand name as text
so it stays readable on the blue background.

## i18n

Email copy lives in `src/i18n/locales/<locale>.json`. To add a language, copy
`en.json`, translate it, and register it in `src/i18n/index.ts`
(`emailLocales`). Subjects live there too — the portfolio API routes read them
via `getEmailMessages(locale)` so subject and body always match.

## Using from the portfolio

```jsonc
// portfolio/package.json
"dependencies": { "@interstellar/emails": "file:../emails" }
```

```ts
// next.config.ts
transpilePackages: ['@interstellar/emails']
```

```ts
import { ContactConfirmation, getEmailMessages } from '@interstellar/emails';
// render via resend: send({ react: <ContactConfirmation {...props} /> })
```
