import { Column, Row, Section, Text } from '@react-email/components';

export type DetailRow = {
  label: string;
  value: string;
};

type DetailTableProps = {
  title: string;
  rows: DetailRow[];
  variant?: 'plain' | 'accent';
};

const DetailTable = ({ title, rows, variant = 'plain' }: DetailTableProps) => (
  <Section className="my-7 rounded-md border border-solid border-slate-200 bg-slate-50">
    <Text
      className={
        variant === 'accent'
          ? 'm-0 rounded-t-md bg-brand px-5 py-3 text-[14px] font-bold uppercase tracking-[2px] text-white'
          : 'm-0 px-5 pt-5 text-[14px] font-bold uppercase tracking-[2px] text-brand'
      }
    >
      {title}
    </Text>
    {rows.map(({ label, value }) => (
      <Row key={label} className="border-b border-solid border-slate-200">
        <Column className="w-[170px] px-5 py-4 align-top">
          <Text className="m-0 text-[13px] uppercase tracking-[1.5px] text-slate-400">{label}</Text>
        </Column>
        <Column className="px-5 py-4 align-top">
          <Text className="m-0 text-[15px] leading-relaxed text-ink">{value || '-'}</Text>
        </Column>
      </Row>
    ))}
  </Section>
);

export default DetailTable;
