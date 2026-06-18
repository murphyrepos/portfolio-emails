import { getEmailMessages, interpolate, type EmailMessages } from './index';

type EmailTranslation = {
  t: EmailMessages;
  interpolate: typeof interpolate;
};

export const useTranslation = (locale?: string): EmailTranslation => ({
  t: getEmailMessages(locale),
  interpolate,
});
