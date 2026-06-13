import { Section, Text } from '@react-email/components';
import type { ReactNode } from 'react';

type EmailCalloutProps = {
  title: string;
  children: ReactNode;
  variant?: 'brand' | 'soft';
};

const EmailCallout = ({
  title,
  children,
  variant = 'soft',
}: EmailCalloutProps) => (
  <Section
    className={
      variant === 'brand'
        ? 'my-7 rounded-md bg-brand px-6 py-5'
        : 'my-7 rounded-md border border-solid border-blue-100 bg-blue-50 px-6 py-5'
    }
  >
    <Text
      className={
        variant === 'brand'
          ? 'm-0 mb-2 text-[16px] font-bold text-white'
          : 'm-0 mb-2 text-[16px] font-bold text-brand'
      }
    >
      {title}
    </Text>
    {children}
  </Section>
);

export default EmailCallout;
