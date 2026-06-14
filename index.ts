export { default as ContactInquiryInternal } from './src/templates/Internal/ContactInquiryInternal';
export type {
  ContactInquiryInternalProps,
  ContactInquiryInternalTemplateProps,
} from './src/templates/Internal/ContactInquiryInternal';

export { default as ContactConfirmation } from './src/templates/External/ContactConfirmation';
export type {
  ContactConfirmationProps,
  ContactConfirmationTemplateProps,
} from './src/templates/External/ContactConfirmation';

export { default as JobApplicationInternal } from './src/templates/Internal/JobApplicationInternal';
export type {
  JobApplicationInternalProps,
  JobApplicationInternalTemplateProps,
} from './src/templates/Internal/JobApplicationInternal';

export { default as JobApplicationConfirmation } from './src/templates/External/JobApplicationConfirmation';
export type {
  JobApplicationConfirmationProps,
  JobApplicationConfirmationTemplateProps,
} from './src/templates/External/JobApplicationConfirmation';

export { defaultEmailLocale, getEmailMessages, interpolate, languages } from './src/i18n';
export type { EmailLocale, EmailMessages } from './src/i18n';
export type { EmailAttachment, EmailProps, GenericEmailProps } from './src/types';
