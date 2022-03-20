import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Navigation } from '@react-quick-hacks/ui-kit';
import { ChakraProvider } from '@chakra-ui/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to mbox!</title>
      </Head>
      <main className='app'>
        <ChakraProvider>
          <Navigation>
            <Component {...pageProps} />
          </Navigation>
        </ChakraProvider>
      </main>
    </>
  );
}

export default CustomApp;
