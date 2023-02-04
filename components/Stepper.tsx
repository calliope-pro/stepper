import { useState } from 'react';
import { Button, Center, List, HStack } from '@chakra-ui/react';
import { StepperItem } from './StepperItem';
import type { StepperItemPropType } from './StepperItem';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export type StepperItemsType = Pick<StepperItemPropType, 'label'>[];
export type StepperPropType = {
  items: StepperItemsType;
};

export const Stepper: React.FC<StepperPropType> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <List display='flex' justifyContent='space-between'>
        {items.map(({ label }, index) => (
          <StepperItem
            key={label}
            label={label}
            isActive={index <= activeIndex}
            isFirst={index === 0}
            isLast={index === items.length - 1}
          />
        ))}
      </List>
      <Center mt={2}>
        <HStack spacing={4}>
          <Button
            leftIcon={<ArrowBackIcon />}
            w='20vw'
            colorScheme='facebook'
            variant='outline'
            onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
          >
            previous
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            w='20vw'
            colorScheme='facebook'
            onClick={() =>
              setActiveIndex((prev) => Math.min(prev + 1, items.length - 1))
            }
          >
            next
          </Button>
        </HStack>
      </Center>
    </>
  );
};
