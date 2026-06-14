import en from './locales/en.json';

export const emailLocales = { en } as const;

export type EmailLocale = keyof typeof emailLocales;
export type EmailMessages = (typeof emailLocales)[EmailLocale];

export const defaultEmailLocale: EmailLocale = 'en';

export const getEmailMessages = (locale?: string): EmailMessages =>
  emailLocales[locale as EmailLocale] ?? emailLocales[defaultEmailLocale];

export const interpolate = (template: string, vars: Record<string, string>): string =>
  template.replace(/\{\{(\w+)\}\}/g, (match, key) => vars[key] ?? match);

export { useTranslation } from './useTranslation';
