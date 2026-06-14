import { Text } from '@react-email/components';
import DetailTable from '../../components/DetailTable';
import EmailCallout from '../../components/EmailCallout';
import EmailLayout from '../../components/EmailLayout';
import { useTranslation } from '../../i18n/useTranslation';
import type { EmailProps } from '../../types';
import type { ReactElement } from 'react';

export type JobApplicationConfirmationTemplateProps = {
  position: string;
  jobCode: string;
  submittedAt?: string;
};

export type JobApplicationConfirmationProps = EmailProps<JobApplicationConfirmationTemplateProps>;

export const JobApplicationConfirmationContent = ({
  locale,
  name,
  email,
  template: { position, jobCode, submittedAt = '' },
}: JobApplicationConfirmationProps): ReactElement => {
  const { t, interpolate } = useTranslation(locale);
  const conf = t.jobApplicationConfirmation;

  const rows = [
    { label: t.labels.position, value: position },
    { label: t.labels.jobCode, value: jobCode },
    { label: t.labels.name, value: name },
    { label: t.labels.email, value: email },
    submittedAt ? { label: t.labels.submitted, value: submittedAt } : null,
  ].filter((row): row is { label: string; value: string } => Boolean(row));

  return (
    <>
      <Text className="m-0 text-[15px] leading-relaxed text-ink">
        Hi <strong>{name}</strong>,
      </Text>
      <Text className="m-0 mt-7 text-[16px] leading-relaxed text-slate-700">{conf.intro}</Text>
      <Text className="m-0 mt-6 text-[16px] leading-relaxed text-slate-700">
        {conf.summaryIntro}
      </Text>
      <DetailTable title={t.labels.applicationSummary} rows={rows} />
      <EmailCallout title={conf.nextStepsTitle} variant="brand">
        <Text className="m-0 text-[15px] leading-relaxed text-white">{conf.nextSteps}</Text>
      </EmailCallout>
      <Text className="m-0 text-[15px] leading-relaxed text-slate-700">{conf.outro}</Text>
      <Text className="m-0 mt-7 rounded-md border border-solid border-slate-200 bg-slate-50 px-5 py-4 text-[14px] leading-relaxed text-slate-500">
        {interpolate(conf.referenceNote, { jobCode })}
      </Text>
      <Text className="m-0 mt-7 text-[15px] leading-relaxed text-slate-700">
        {conf.signature},
        <br />
        <strong className="text-brand">{conf.team}</strong>
      </Text>
    </>
  );
};

const JobApplicationConfirmation = (props: JobApplicationConfirmationProps): ReactElement => {
  const { t } = useTranslation(props.locale);
  const conf = t.jobApplicationConfirmation;

  return (
    <EmailLayout preview={conf.preview} title={conf.title} locale={props.locale}>
      <JobApplicationConfirmationContent {...props} />
    </EmailLayout>
  );
};

export default JobApplicationConfirmation;
