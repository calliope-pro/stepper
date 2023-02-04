import Head from 'next/head';
import { Container, Stack, StackDivider } from '@chakra-ui/react';
import { Stepper } from '../components/Stepper';
import type { StepperItemsType } from '../components/Stepper';

export default function Home() {
  const items1: StepperItemsType = [
    { label: 'STEP1' },
    { label: 'STEP2' },
    { label: 'STEP3' },
  ];
  const items2: StepperItemsType = [
    { label: 'STEP1' },
    { label: 'STEP2' },
    { label: 'STEP3' },
    { label: 'STEP4' },
  ];
  const items3: StepperItemsType = [
    { label: 'STEP1' },
    { label: 'STEP2' },
    { label: 'STEP3' },
    { label: 'STEP4' },
    { label: 'STEP5' },
  ];
  const items4: StepperItemsType = [
    { label: 'STEP1' },
    { label: 'STEP2' },
    { label: 'STEP3' },
    { label: 'STEP4' },
    { label: 'STEP5' },
    { label: 'STEP6' },
  ];
  return (
    <>
      <Head>
        <title>Stepper</title>
        <meta name='description' content='Stepper sample' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container mt={8} maxW='container.lg'>
        <Stack divider={<StackDivider />} spacing={8}>
          <Stepper items={items1} />
          <Stepper items={items2} />
          <Stepper items={items3} />
          <Stepper items={items4} />
        </Stack>
      </Container>
    </>
  );
}
