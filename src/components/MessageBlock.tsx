import { Section, Text } from '@react-email/components';
import type { ReactNode } from 'react';

type MessageBlockProps = {
  title: string;
  children: ReactNode;
  variant?: 'plain' | 'accent';
};

const MessageBlock = ({ title, children, variant = 'plain' }: MessageBlockProps) => (
  <Section className="my-7">
    <Text
      className={
        variant === 'accent'
          ? 'm-0 rounded-t-md bg-brand px-5 py-3 text-[14px] font-bold uppercase tracking-[2px] text-white'
          : 'm-0 mb-3 text-[14px] font-bold uppercase tracking-[2px] text-brand'
      }
    >
      {title}
    </Text>
    <Section
      className={
        variant === 'accent'
          ? 'rounded-b-md border border-t-0 border-solid border-slate-200 px-5 py-4'
          : 'border-l-4 border-solid border-brand bg-slate-50 px-5 py-4'
      }
    >
      {children}
    </Section>
  </Section>
);

export default MessageBlock;
