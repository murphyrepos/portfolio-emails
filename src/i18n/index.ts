import en from './locales/en.json';

export const languages = ['en', 'de'] as const;

export type EmailLocale = (typeof languages)[number];

export type EmailMessages = {
  common: {
    brandName: string;
    tagline: string;
    contactEmail: string;
    careersEmail: string;
    copyright: string;
    disclaimer: string;
  };
  labels: {
    inquiryType: string;
    name: string;
    email: string;
    company: string;
    budget: string;
    message: string;
    position: string;
    jobCode: string;
    phone: string;
    links: string;
    coverLetter: string;
    resume: string;
    contactSummary: string;
    contactDetails: string;
    applicationSummary: string;
    candidateDetails: string;
    submitted: string;
    nextSteps: string;
    whatHappensNext: string;
  };
  contactInquiryInternal: {
    subject: string;
    preview: string;
    title: string;
    subtitle: string;
    intro: string;
    messageLabel: string;
    nextSteps: string;
  };
  contactConfirmation: {
    subject: string;
    preview: string;
    title: string;
    subtitle: string;
    intro: string;
    messageLabel: string;
    outro: string;
    signature: string;
    team: string;
  };
  jobApplicationInternal: {
    subject: string;
    preview: string;
    title: string;
    subtitle: string;
    intro: string;
    resumeAttached: string;
  };
  jobApplicationConfirmation: {
    subject: string;
    preview: string;
    title: string;
    subtitle: string;
    intro: string;
    summaryIntro: string;
    nextStepsTitle: string;
    nextSteps: string;
    outro: string;
    referenceNote: string;
    signature: string;
    team: string;
  };
};

const emailLocales: Record<EmailLocale, EmailMessages> = {
  en,
  de: en,
};

export const defaultEmailLocale: EmailLocale = 'en';

export const getEmailMessages = (locale?: string): EmailMessages =>
  emailLocales[locale as EmailLocale] ?? emailLocales[defaultEmailLocale];

export const interpolate = (template: string, vars: Record<string, string>): string =>
  template.replace(/\{\{(\w+)\}\}/g, (match, key) => vars[key] ?? match);

export { useTranslation } from './useTranslation';
