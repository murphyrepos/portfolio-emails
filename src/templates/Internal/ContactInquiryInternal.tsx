import { Text } from '@react-email/components';
import DetailTable from '../../components/DetailTable';
import EmailCallout from '../../components/EmailCallout';
import EmailLayout from '../../components/EmailLayout';
import MessageBlock from '../../components/MessageBlock';
import StepList from '../../components/StepList';
import { useTranslation } from '../../i18n/useTranslation';
import type { EmailProps } from '../../types';

export type ContactInquiryInternalTemplateProps = {
  inquiryType: string;
  company?: string;
  budget?: string;
  message: string;
  submittedAt?: string;
};

export type ContactInquiryInternalProps = EmailProps<ContactInquiryInternalTemplateProps>;

export const ContactInquiryInternalContent = ({
  locale,
  name,
  email,
  template: { inquiryType, company = '', budget = '', message, submittedAt = '' },
}: ContactInquiryInternalProps) => {
  const { t, interpolate } = useTranslation(locale);
  const conf = t.contactInquiryInternal;

  const rows = [
    submittedAt ? { label: t.labels.submitted, value: submittedAt } : null,
    { label: t.labels.inquiryType, value: inquiryType },
    { label: t.labels.name, value: name },
    { label: t.labels.email, value: email },
    { label: t.labels.company, value: company },
    { label: t.labels.budget, value: budget },
  ].filter((row): row is { label: string; value: string } => Boolean(row));

  return (
    <>
      <Text className="m-0 text-[16px] leading-relaxed text-slate-700">{conf.intro}</Text>
      <DetailTable title={t.labels.contactDetails} rows={rows} variant="accent" />
      <MessageBlock title={conf.messageLabel} variant="accent">
        <Text className="m-0 whitespace-pre-wrap text-[15px] leading-relaxed text-slate-700">
          "{message}"
        </Text>
      </MessageBlock>
      <EmailCallout title={t.labels.nextSteps}>
        <StepList steps={conf.nextSteps.split('\n')} />
      </EmailCallout>
    </>
  );
};

const ContactInquiryInternal = (props: ContactInquiryInternalProps) => {
  const { t, interpolate } = useTranslation(props.locale);
  const conf = t.contactInquiryInternal;

  return (
    <EmailLayout
      preview={interpolate(conf.preview, { name: props.name })}
      title={conf.title}
      locale={props.locale}
    >
      <ContactInquiryInternalContent {...props} />
    </EmailLayout>
  );
};

export default ContactInquiryInternal;
