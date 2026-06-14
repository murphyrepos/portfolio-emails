import { Column, Hr, Img, Row, Section, Text } from '@react-email/components';
import { useEmailAssets } from '../hooks/useEmailAssets';
import { useTranslation } from '../i18n/useTranslation';

type CompanyFooterProps = {
  locale?: string;
};

const CompanyFooter = ({ locale }: CompanyFooterProps) => {
  const { t } = useTranslation(locale);
  const { logoUrl } = useEmailAssets();

  return (
    <>
      <Hr className='mx-8 my-0 border-slate-200' />
      <Section className='rounded-b-lg bg-white px-8 py-6'>
        <Row>
          <Column className='w-[44px] align-left'>
            <Section className='m-0 h-9 w-9 rounded-md p-1.5 bg-transparent'>
              <Img
                src={logoUrl}
                alt={t.common.brandName}
                height='24'
                className='block w-auto cover'
              />
            </Section>
          </Column>
         
        </Row>
        <Row>
           <Column className='align-left'>
            <Text className='m-0 text-[14px] text-slate-500'>
              {t.common.disclaimer}
            </Text>
          </Column>
        </Row>
      </Section>
    </>
  );
};

export default CompanyFooter;
