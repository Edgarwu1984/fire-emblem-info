import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Container from '../common/Container';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: string;
};

const Index: FC<Props> = ({
  children,
  title,
  description = 'A website provides all the Fire Emblem games information.',
  heroTitle,
  heroSubtitle,
  heroImage,
}) => {
  return (
    <>
      <Head>
        <title>FE.Info {title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
      </Head>
      <Navbar />
      <Hero title={heroTitle} subtitle={heroSubtitle} bgImage={heroImage} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Index;
