import { Body, Container, Head, Html, Preview, Section, Tailwind } from '@react-email/components';
import type { CSSProperties, ReactNode } from 'react';
import { tailwindConfig } from '../theme';
import { defaultEmailLocale } from '../i18n';
import CompanyFooter from './CompanyFooter';
import CompanyHeader from './CompanyHeader';

const containerStyle: CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  margin: '0 auto',
  maxWidth: '768px',
  overflow: 'hidden',
  width: '768px',
};

type EmailLayoutProps = {
  preview: string;
  title: string;
  locale?: string;
  children: ReactNode;
};

type EmailChromeProps = {
  title: string;
  locale?: string;
  children: ReactNode;
};

export const EmailChrome = ({ title, locale, children }: EmailChromeProps) => (
  <Container width="768" className="mx-auto rounded-lg bg-white shadow-sm" style={containerStyle}>
    <CompanyHeader title={title} locale={locale} />
    <Section className="bg-white px-8 pb-5 pt-8">{children}</Section>
    <CompanyFooter locale={locale} />
  </Container>
);

const EmailLayout = ({ preview, title, locale, children }: EmailLayoutProps) => {
  return (
    <Tailwind config={tailwindConfig}>
      <Html lang={locale ?? defaultEmailLocale}>
        <Head />
        <Preview>{preview}</Preview>
        <Body className="m-0 bg-white py-6 font-sans">
          <EmailChrome title={title} locale={locale}>
            {children}
          </EmailChrome>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default EmailLayout;
