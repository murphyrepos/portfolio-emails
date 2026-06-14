import { Link, Text } from '@react-email/components';
import DetailTable from '../../components/DetailTable';
import EmailLayout from '../../components/EmailLayout';
import MessageBlock from '../../components/MessageBlock';
import { useTranslation } from '../../i18n/useTranslation';
import type { EmailProps } from '../../types';

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
  attachment,
  template: { position, jobCode, phone = '', links = '', coverLetter, resumeUrl },
}: JobApplicationInternalProps) => {
  const { t, interpolate } = useTranslation(locale);
  const conf = t.jobApplicationInternal;
  const resumeHref = attachment?.url ?? resumeUrl;

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
      <MessageBlock title={t.labels.resume} variant="accent">
        {resumeHref ? (
          <Link href={resumeHref} className="text-[15px] text-brand">
            {conf.resumeAttached}
          </Link>
        ) : attachment?.name ? (
          <Text className="m-0 text-[15px] text-slate-700">{conf.resumeAttached}</Text>
        ) : (
          <Text className="m-0 text-[15px] text-slate-700">{conf.resumeAttached}</Text>
        )}
      </MessageBlock>
    </>
  );
};

const JobApplicationInternal = (props: JobApplicationInternalProps) => {
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
