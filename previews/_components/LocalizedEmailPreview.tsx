import { Body, Head, Html, Preview, Section, Tailwind } from '@react-email/components';
import type { ReactNode } from 'react';
import { EmailChrome } from '../../src/components/EmailLayout';
import { defaultEmailLocale, type EmailLocale } from '../../src/i18n';
import { tailwindConfig } from '../../src/theme';

type LocalizedEmailPreviewProps = {
  languages: readonly EmailLocale[];
  getPreview: (locale: EmailLocale) => string;
  getSubject: (locale: EmailLocale) => string;
  getTitle: (locale: EmailLocale) => string;
  renderBody: (locale: EmailLocale) => ReactNode;
};

const getLocaleClass = (locale: EmailLocale) => locale.replace(/[^a-zA-Z0-9_-]/g, '-');

const getLanguageStyles = (languages: readonly EmailLocale[]) => `
  .localized-preview-panel {
    display: none !important;
  }

  ${languages
    .map((locale) => {
      const localeClass = getLocaleClass(locale);
      const inputId = `preview-locale-${localeClass}`;

      return `
        #${inputId}:checked ~ .localized-preview-stack .localized-preview-panel-${localeClass} {
          display: block !important;
        }

        #${inputId}:checked ~ .localized-preview-controls label[for="${inputId}"] {
          background: #2563eb !important;
          border-color: #2563eb !important;
          color: #ffffff !important;
        }
      `;
    })
    .join('\n')}
`;

const PreviewMetadata = ({ preview, subject }: { preview: string; subject: string }) => (
  <Section
    className="mb-4 rounded-md border border-solid border-slate-200 bg-slate-50 px-5 py-4"
    style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '728px' }}
  >
    <div style={{ marginBottom: '8px' }}>
      <span
        style={{
          color: '#64748b',
          display: 'inline-block',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '1.4px',
          marginRight: '8px',
          textTransform: 'uppercase',
        }}
      >
        Subject
      </span>
      <span style={{ color: '#0f172a', fontSize: '14px', lineHeight: '20px' }}>{subject}</span>
    </div>
    <div>
      <span
        style={{
          color: '#64748b',
          display: 'inline-block',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '1.4px',
          marginRight: '8px',
          textTransform: 'uppercase',
        }}
      >
        Preview
      </span>
      <span style={{ color: '#475569', fontSize: '14px', lineHeight: '20px' }}>{preview}</span>
    </div>
  </Section>
);

const LocalizedEmailPreview = ({
  languages,
  getPreview,
  getSubject,
  getTitle,
  renderBody,
}: LocalizedEmailPreviewProps) => {
  const [defaultLocale = defaultEmailLocale] = languages;
  const hasMultipleLanguages = languages.length > 1;

  if (!hasMultipleLanguages) {
    return (
      <Tailwind config={tailwindConfig}>
        <Html lang={defaultLocale}>
          <Head />
          <Preview>{getPreview(defaultLocale)}</Preview>
          <Body className="m-0 bg-white py-6 font-sans">
            <PreviewMetadata
              preview={getPreview(defaultLocale)}
              subject={getSubject(defaultLocale)}
            />
            <EmailChrome title={getTitle(defaultLocale)} locale={defaultLocale}>
              {renderBody(defaultLocale)}
            </EmailChrome>
          </Body>
        </Html>
      </Tailwind>
    );
  }

  return (
    <Tailwind config={tailwindConfig}>
      <Html lang={defaultLocale}>
        <Head>
          <style>{getLanguageStyles(languages)}</style>
        </Head>
        <Preview>{getPreview(defaultLocale)}</Preview>
        <Body className="m-0 bg-white py-6 font-sans">
          {languages.map((locale, index) => {
            const localeClass = getLocaleClass(locale);

            return (
              <input
                key={locale}
                id={`preview-locale-${localeClass}`}
                type="radio"
                name="preview-locale"
                defaultChecked={index === 0}
                style={{ display: 'none' }}
              />
            );
          })}
          <Section className="localized-preview-controls mb-4 text-center">
            {languages.map((locale) => {
              const localeClass = getLocaleClass(locale);
              const inputId = `preview-locale-${localeClass}`;

              return (
                <label
                  key={locale}
                  htmlFor={inputId}
                  style={{
                    border: '1px solid #cbd5e1',
                    borderRadius: '999px',
                    color: '#334155',
                    cursor: 'pointer',
                    display: 'inline-block',
                    fontSize: '13px',
                    fontWeight: 700,
                    lineHeight: '16px',
                    margin: '0 4px',
                    padding: '8px 12px',
                    textTransform: 'uppercase',
                  }}
                >
                  {locale}
                </label>
              );
            })}
          </Section>
          <div className="localized-preview-stack">
            {languages.map((locale) => {
              const localeClass = getLocaleClass(locale);

              return (
                <div
                  key={locale}
                  className={`localized-preview-panel localized-preview-panel-${localeClass}`}
                >
                  <PreviewMetadata preview={getPreview(locale)} subject={getSubject(locale)} />
                  <EmailChrome title={getTitle(locale)} locale={locale}>
                    {renderBody(locale)}
                  </EmailChrome>
                </div>
              );
            })}
          </div>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default LocalizedEmailPreview;
