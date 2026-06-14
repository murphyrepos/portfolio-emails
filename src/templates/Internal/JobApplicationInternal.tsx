import { Link, Text } from '@react-email/components';
import DetailTable from '../../components/DetailTable';
import EmailLayout from '../../components/EmailLayout';
import MessageBlock from '../../components/MessageBlock';
import { useTranslation } from '../../i18n/useTranslation';

export type JobApplicationInternalProps = {
  locale?: string;
  position: string;
  jobCode: string;
  name: string;
  email: string;
  phone?: string;
  links?: string;
  coverLetter: string;
  resumeUrl?: string;
};

const JobApplicationInternal = ({
  locale,
  position,
  jobCode,
  name,
  email,
  phone = '',
  links = '',
  coverLetter,
  resumeUrl,
}: JobApplicationInternalProps) => {
  const { t, interpolate } = useTranslation(locale);
  const conf = t.jobApplicationInternal;

  return (
    <EmailLayout
      preview={interpolate(conf.preview, { name, position })}
      title={conf.title}
      locale={locale}
    >
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
        {resumeUrl ? (
          <Link href={resumeUrl} className="text-[15px] text-brand">
            {resumeUrl}
          </Link>
        ) : (
          <Text className="m-0 text-[15px] text-slate-700">{conf.resumeAttached}</Text>
        )}
      </MessageBlock>
    </EmailLayout>
  );
};

export default JobApplicationInternal;
