import type { AppProps } from 'next/app';
import Script from 'next/script';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_CODE}`}
      />
      <Script strategy='lazyOnload' id='ga-script'>
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', '${process.env.NEXT_PUBLIC_GA_CODE}');
         `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
