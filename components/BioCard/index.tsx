import Image from 'next/image';
import React, { FC } from 'react';
import getBlurDataURL from '../../helper/getBlurDataURL';
import styles from './biocard.module.scss';

type BioCardProps = {
  title: string;
  releasedAt: string;
  image: string;
};

const BioCard: FC<BioCardProps> = ({ title, releasedAt, image }) => {
  return (
    <div className={styles.bio_card}>
      <div className={styles.year}>
        <small>{releasedAt}</small>
      </div>
      {/* <Image
        className={styles.image}
        src={`${image}`}
        alt='game-logo'
        width={200}
        height={72}
        layout='responsive'
        placeholder='blur'
        blurDataURL={getBlurDataURL()}
      /> */}
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default BioCard;
