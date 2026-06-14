import { useMemo } from 'react';
import { getEmailMessages, interpolate, type EmailMessages } from './index';

type EmailTranslation = {
  t: EmailMessages;
  interpolate: typeof interpolate;
};

export const useTranslation = (locale?: string): EmailTranslation =>
  useMemo(
    () => ({
      t: getEmailMessages(locale),
      interpolate,
    }),
    [locale],
  );
