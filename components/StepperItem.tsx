import { ListItem } from '@chakra-ui/react';

export type StepperItemPropType = {
  label: string;
  isActive: boolean;
  isFirst?: boolean;
  isLast?: boolean;
};

export const StepperItem: React.FC<StepperItemPropType> = ({
  label,
  isActive,
  isFirst = false,
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
        !isFirst
          ? {
              content: "''",
              position: 'absolute',
              top: 0,
              left: '1px',
              width: 0,
              height: 0,
              border: '24px solid transparent',
              borderLeftWidth: '24px',
              zIndex: 300,
              borderLeftColor: 'white',
            }
          : undefined
      }
      _before={
        !isLast
          ? {
              content: "''",
              position: 'absolute',
              top: 0,
              right: -12,
              width: 0,
              height: 0,
              border: '24px solid transparent',
              borderLeftWidth: '24px',
              zIndex: 500,
              borderLeftColor: isActive ? 'gray.600' : 'gray.300',
            }
          : undefined
      }
    >
      {label}
    </ListItem>
  );
};
