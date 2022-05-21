import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import getBlurDataURL from '../../helper/getBlurDataURL';
import styles from './biocard.module.scss';

type BioCardProps = {
  title: string;
  releasedAt: string;
  image: string;
};

const BioCard: FC<BioCardProps> = ({ title, releasedAt, image }) => {
  const slug = title.toLowerCase().split(' ').join('-');

  return (
    <Link href={`/collections/${slug}`}>
      <a className={styles.bio_card}>
        <div className={styles.year}>
          <small>{releasedAt}</small>
        </div>
        <Image
          className={styles.image}
          src={`${image}`}
          alt='game-logo'
          width={200}
          height={48}
          layout='responsive'
          placeholder='blur'
          blurDataURL={getBlurDataURL()}
        />
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </a>
    </Link>
  );
};

export default BioCard;
