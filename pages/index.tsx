import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, Button, Center, Container } from '@chakra-ui/react';
import { Stepper } from '../components/Stepper';

export default function Home() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setIndex(Number(router.query.index) || 0);
    }
  }, [router]);
  return (
    <>
      <Head>
        <title>Stepper</title>
        <meta name='description' content='Stepper sample' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Stepper activeIndex={index} />
        <Center>
          <Button w='15vw' m={2} onClick={() => setIndex((prev) => prev + 1)}>
            +1
          </Button>
          <Button w='15vw' m={2} onClick={() => setIndex((prev) => prev - 1)}>
            -1
          </Button>
        </Center>
      </Container>
    </>
  );
}
