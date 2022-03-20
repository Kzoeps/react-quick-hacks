import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Navigation } from '@react-quick-hacks/ui-kit';
import { ChakraProvider } from '@chakra-ui/react';
import { NAV_CONSTANTS } from '../constants';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to mbox!</title>
      </Head>
      <main className='app'>
        <ChakraProvider>
          <Navigation items={NAV_CONSTANTS}>
            <Component {...pageProps} />
          </Navigation>
        </ChakraProvider>
      </main>
    </>
  );
}

export default CustomApp;
