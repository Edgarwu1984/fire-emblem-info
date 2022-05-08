import Image from 'next/image';
import React, { FC } from 'react';
import getBlurDataURL from '../../../helper/getBlurDataURL';
import Container from '../../common/Container';
import styles from './Hero.module.scss';

type HeroProps = {
  bgImage?: string;
  title?: string;
  subtitle?: string;
};

const Hero: FC<HeroProps> = ({
  bgImage = 'https://d3fd5j8wprxn3h.cloudfront.net/wp-content/uploads/2020/05/nintendo-wallpaper-nintendo-zoom-background-fire-emblem-three-houses-2.jpg',
  title = 'Hero Title',
  subtitle,
}) => {
  return (
    <header className={styles.hero}>
      <Image
        className={styles.hero_image}
        src={`${bgImage}`}
        alt='hero-image'
        placeholder='blur'
        blurDataURL={getBlurDataURL()}
        sizes='100vw'
        layout='fill'
      />
      <Container>
        <div className={styles.hero_container}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
