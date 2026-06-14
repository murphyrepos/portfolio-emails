import { Text } from '@react-email/components';
import DetailTable from '../../components/DetailTable';
import EmailLayout from '../../components/EmailLayout';
import MessageBlock from '../../components/MessageBlock';
import { useTranslation } from '../../i18n/useTranslation';
import type { EmailProps } from '../../types';
import type { ReactElement } from 'react';

export type ContactConfirmationTemplateProps = {
  inquiryType: string;
  company?: string;
  budget?: string;
  message: string;
};

export type ContactConfirmationProps = EmailProps<ContactConfirmationTemplateProps>;

export const ContactConfirmationContent = ({
  locale,
  name,
  email,
  template: { inquiryType, company = '', budget = '', message },
}: ContactConfirmationProps): ReactElement => {
  const { t } = useTranslation(locale);
  const conf = t.contactConfirmation;

  return (
    <>
      <Text className="m-0 text-[15px] leading-relaxed text-ink">
        Hi <strong>{name}</strong>,
      </Text>
      <Text className="m-0 mt-7 text-[16px] leading-relaxed text-slate-700">{conf.intro}</Text>
      <DetailTable
        title={t.labels.contactSummary}
        rows={[
          { label: t.labels.inquiryType, value: inquiryType },
          { label: t.labels.name, value: name },
          { label: t.labels.email, value: email },
          { label: t.labels.company, value: company },
          { label: t.labels.budget, value: budget },
        ]}
      />
      <MessageBlock title={conf.messageLabel}>
        <Text className="m-0 whitespace-pre-wrap text-[15px] italic leading-relaxed text-slate-700">
          "{message}"
        </Text>
      </MessageBlock>
      <Text className="m-0 text-[15px] leading-relaxed text-slate-700">{conf.outro}</Text>
      <Text className="m-0 mt-7 text-[15px] leading-relaxed text-slate-700">
        {conf.signature},
        <br />
        <strong className="text-brand">{conf.team}</strong>
      </Text>
    </>
  );
};

const ContactConfirmation = (props: ContactConfirmationProps): ReactElement => {
  const { t } = useTranslation(props.locale);
  const conf = t.contactConfirmation;

  return (
    <EmailLayout preview={conf.preview} title={conf.title} locale={props.locale}>
      <ContactConfirmationContent {...props} />
    </EmailLayout>
  );
};

export default ContactConfirmation;
