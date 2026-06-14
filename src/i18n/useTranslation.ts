import { useMemo } from 'react';
import { getEmailMessages, interpolate } from './index';

export const useTranslation = (locale?: string) =>
  useMemo(
    () => ({
      t: getEmailMessages(locale),
      interpolate,
    }),
    [locale],
  );
