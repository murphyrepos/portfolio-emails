import { Column, Hr, Img, Row, Section, Text } from '@react-email/components';
import { useEmailAssets } from '../hooks/useEmailAssets';
import { useTranslation } from '../i18n/useTranslation';

type CompanyFooterProps = {
  locale?: string;
};

const CompanyFooter = ({ locale }: CompanyFooterProps) => {
  const { t } = useTranslation(locale);
  const { logoMarkUrl } = useEmailAssets();

  return (
    <>
      <Hr className='mx-8 my-0 border-slate-200' />
      <Section className='rounded-b-lg bg-white px-8 py-6'>
        <Row>
          <Column className='w-[44px] align-middle'>
            <Section className='m-0 h-9 w-9 rounded-md bg-brand p-1.5'>
              <Img
                src={logoMarkUrl}
                alt={t.common.brandName}
                width='24'
                height='24'
                className='block'
              />
            </Section>
          </Column>
          <Column className='align-middle'>
            <Text className='m-0 text-[18px] font-bold text-brand'>
              {t.common.brandName}
            </Text>
          </Column>
        </Row>
      </Section>
    </>
  );
};

export default CompanyFooter;
