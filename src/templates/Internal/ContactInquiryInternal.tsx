import { Text } from '@react-email/components';
import DetailTable from '../../components/DetailTable';
import EmailCallout from '../../components/EmailCallout';
import EmailLayout from '../../components/EmailLayout';
import MessageBlock from '../../components/MessageBlock';
import StepList from '../../components/StepList';
import { useTranslation } from '../../i18n/useTranslation';

export type ContactInquiryInternalProps = {
  locale?: string;
  inquiryType: string;
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  submittedAt?: string;
};

const ContactInquiryInternal = ({
  locale,
  inquiryType,
  name,
  email,
  company = '',
  budget = '',
  message,
  submittedAt = '',
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
    <EmailLayout
      preview={interpolate(conf.preview, { name })}
      title={conf.title}
      locale={locale}
    >
      <Text className='m-0 text-[16px] leading-relaxed text-slate-700'>
        {conf.intro}
      </Text>
      <DetailTable title={t.labels.contactDetails} rows={rows} variant='accent' />
      <MessageBlock title={conf.messageLabel} variant='accent'>
        <Text className='m-0 whitespace-pre-wrap text-[15px] leading-relaxed text-slate-700'>
          "{message}"
        </Text>
      </MessageBlock>
      <EmailCallout title={t.labels.nextSteps}>
        <StepList steps={conf.nextSteps.split('\n')} />
      </EmailCallout>
    </EmailLayout>
  );
};

export default ContactInquiryInternal;
