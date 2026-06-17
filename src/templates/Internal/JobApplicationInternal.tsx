import { Text } from '@react-email/components';
import DetailTable from '../../components/DetailTable';
import EmailLayout from '../../components/EmailLayout';
import MessageBlock from '../../components/MessageBlock';
import { useTranslation } from '../../i18n/useTranslation';
import type { EmailProps } from '../../types';
import type { ReactElement } from 'react';

export type JobApplicationInternalTemplateProps = {
  position: string;
  jobCode: string;
  phone?: string;
  links?: string;
  coverLetter: string;
  resumeUrl?: string;
};

export type JobApplicationInternalProps = EmailProps<JobApplicationInternalTemplateProps>;

export const JobApplicationInternalContent = ({
  locale,
  name,
  email,
  template: { position, jobCode, phone = '', links = '', coverLetter },
}: JobApplicationInternalProps): ReactElement => {
  const { t, interpolate } = useTranslation(locale);
  const conf = t.jobApplicationInternal;

  return (
    <>
      <Text className="m-0 text-[16px] leading-relaxed text-slate-700">
        {interpolate(conf.intro, { name, position, jobCode })}
      </Text>
      <DetailTable
        title={t.labels.candidateDetails}
        variant="accent"
        rows={[
          { label: t.labels.position, value: position },
          { label: t.labels.jobCode, value: jobCode },
          { label: t.labels.name, value: name },
          { label: t.labels.email, value: email },
          { label: t.labels.phone, value: phone },
          { label: t.labels.links, value: links },
        ]}
      />
      <MessageBlock title={t.labels.coverLetter} variant="accent">
        <Text className="m-0 whitespace-pre-wrap text-[15px] leading-relaxed text-slate-700">
          {coverLetter}
        </Text>
      </MessageBlock>
    </>
  );
};

const JobApplicationInternal = (props: JobApplicationInternalProps): ReactElement => {
  const { t, interpolate } = useTranslation(props.locale);
  const conf = t.jobApplicationInternal;
  const { name, template } = props;

  return (
    <EmailLayout
      preview={interpolate(conf.preview, { name, position: template.position })}
      title={conf.title}
      locale={props.locale}
    >
      <JobApplicationInternalContent {...props} />
    </EmailLayout>
  );
};

export default JobApplicationInternal;
