export { default as ContactInquiryInternal } from './src/templates/Internal/ContactInquiryInternal';
export type { ContactInquiryInternalProps } from './src/templates/Internal/ContactInquiryInternal';

export { default as ContactConfirmation } from './src/templates/External/ContactConfirmation';
export type { ContactConfirmationProps } from './src/templates/External/ContactConfirmation';

export { default as JobApplicationInternal } from './src/templates/Internal/JobApplicationInternal';
export type { JobApplicationInternalProps } from './src/templates/Internal/JobApplicationInternal';

export { default as JobApplicationConfirmation } from './src/templates/External/JobApplicationConfirmation';
export type { JobApplicationConfirmationProps } from './src/templates/External/JobApplicationConfirmation';

export {
  defaultEmailLocale,
  emailLocales,
  getEmailMessages,
  interpolate,
  useTranslation,
} from './src/i18n';
export type { EmailLocale, EmailMessages } from './src/i18n';
