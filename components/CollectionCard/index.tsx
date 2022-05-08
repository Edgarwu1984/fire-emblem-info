import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import getBlurDataURL from '../../helper/getBlurDataURL';
import styles from './collection_card.module.scss';

type CollectionCardProps = {
  slug: string;
  title: string;
  cover_image: string;
  releasedAt: string;
};

const CollectionCard: FC<CollectionCardProps> = ({
  slug,
  title,
  cover_image,
  releasedAt,
}) => {
  return (
    <Link href={`/collections/${slug}`}>
      <a className={styles.card}>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            src={cover_image}
            alt={slug}
            width={250}
            height={360}
            objectFit='cover'
            placeholder='blur'
            blurDataURL={getBlurDataURL()}
          />
        </div>
        <div className={styles.container}>
          <h4>{title}</h4>
          <small>{releasedAt}</small>
        </div>
      </a>
    </Link>
  );
};

export default CollectionCard;
