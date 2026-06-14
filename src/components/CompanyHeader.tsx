import { Column, Heading, Img, Row, Section, Text } from '@react-email/components';
import { useEmailAssets } from '../hooks/useEmailAssets';
import { useTranslation } from '../i18n/useTranslation';

type CompanyHeaderProps = {
  title: string;
  locale?: string;
};

const CompanyHeader = ({ title, locale }: CompanyHeaderProps) => {
  const { t } = useTranslation(locale);
  const { logoUrl } = useEmailAssets();

  return (
    <Section className="rounded-t-lg bg-white px-8 py-6 border-b border-slate-100">
      <Row>
        <Column className="w-[44px] align-middle">
          <Section className="m-0 h-9 w-9 rounded-md  p-1.5 bg-transparent">
            <Img
              src={logoUrl}
              alt={t.common.brandName}
              height="48"
              className="block w-auto cover"
            />
          </Section>
        </Column>
      </Row>
      <Heading as="h1" className="m-0 mt-6 text-[25px] leading-tight text-slate-800">
        {title}
      </Heading>
    </Section>
  );
};

export default CompanyHeader;
