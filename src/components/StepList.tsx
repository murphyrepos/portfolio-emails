import { Text } from '@react-email/components';

type StepListProps = {
  steps: string[];
  variant?: 'brand' | 'soft';
};

const StepList = ({ steps, variant = 'soft' }: StepListProps) => (
  <>
    {steps.map((step, index) => (
      <Text
        key={step}
        className={
          variant === 'brand'
            ? 'm-0 mt-2 text-[15px] leading-relaxed text-white'
            : 'm-0 mt-2 text-[15px] leading-relaxed text-brand'
        }
      >
        {index + 1}. {step}
      </Text>
    ))}
  </>
);

export default StepList;
