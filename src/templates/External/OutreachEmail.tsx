import { Button, Section, Text } from '@react-email/components';
import type { ReactElement } from 'react';
import EmailLayout from '../../components/EmailLayout';

export type OutreachEmailProps = {
  subject: string;
  body: string;
  locale?: string;
};

const renderBody = (body: string) =>
  body.split(/\n{2,}/).map((paragraph, index) => (
    <Text
      key={`${index}-${paragraph.slice(0, 16)}`}
      className="m-0 mb-5 whitespace-pre-line text-[16px] leading-[1.75] text-slate-700 last:mb-0"
    >
      {paragraph}
    </Text>
  ));

const OutreachEmail = ({ subject, body, locale }: OutreachEmailProps): ReactElement => {
  return (
    <EmailLayout preview={subject} title={subject} locale={locale}>
      {renderBody(body)}
      <Section className="mt-7">
        <Button
          href="https://www.murphyrepos.com/book-consultation"
          className="box-border rounded-md bg-brand px-6 py-3.5 text-center text-[15px] font-semibold text-white no-underline"
        >
          Book a call
        </Button>
      </Section>
    </EmailLayout>
  );
};

export default OutreachEmail;
