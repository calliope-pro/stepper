import { List } from '@chakra-ui/react';
import { StepperItem } from './StepperItem';

type StepperPropType = {
  activeIndex: number;
};

export const Stepper: React.FC<StepperPropType> = ({ activeIndex }) => {
  const stepperItems = [
    { label: 'STEP1' },
    { label: 'STEP2' },
    { label: 'STEP3' },
    { label: 'STEP4' },
  ];
  return (
    <List display='flex' justifyContent='space-between'>
      {stepperItems.map(({ label }, index) => (
        <StepperItem
          key={label}
          label={label}
          isActive={index <= activeIndex}
          isLast={index === stepperItems.length - 1}
        />
      ))}
    </List>
  );
};
