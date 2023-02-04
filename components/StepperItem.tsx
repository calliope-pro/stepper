import { ListItem } from '@chakra-ui/react';

type StepperItemPropType = {
  label: string;
  isActive: boolean;
  isLast?: boolean;
};

export const StepperItem: React.FC<StepperItemPropType> = ({
  label,
  isActive,
  isLast = false,
}) => {
  return (
    <ListItem
      w='100%'
      h='48px'
      color='white'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bgColor={isActive ? 'gray.600' : 'gray.300'}
      position='relative'
      _after={
        !isLast
          ? {
              content: "''",
              position: 'absolute',
              top: 0,
              right: '-48px',
              width: 0,
              height: 0,
              border: '24px solid transparent',
              borderLeftWidth: '24px',
              zIndex: 500,
              borderLeftColor: isActive ? 'gray.600' : 'gray.300',
            }
          : undefined
      }
      _before={
        !isLast
          ? {
              content: "''",
              position: 'absolute',
              top: 0,
              right: '-52px',
              width: 0,
              height: 0,
              border: '24px solid transparent',
              borderLeftWidth: '24px',
              zIndex: 500,
              borderLeftColor: 'white',
            }
          : undefined
      }
    >
      {label}
    </ListItem>
  );
};
