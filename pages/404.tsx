import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Container from '../components/common/Container';
import { MdOutlineErrorOutline } from 'react-icons/md';

const NotFoundPage: NextPage = () => {
  return (
    <Container>
      <div className='notfound_container'>
        <div className='img_container'>
          <Image
            className='bg_img'
            src={
              'https://areajugones.sport.es/wp-content/uploads/2017/02/Sin-t%C3%ADtulo.png'
            }
            alt='404_bg'
            layout='fill'
          />
        </div>
        <div className='content'>
          <div className='title'>
            <MdOutlineErrorOutline size={'2rem'} />
            <h1>404 Page Not Found</h1>
          </div>
          <Link href={'/'}>
            <a className='btn'>Go Back</a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
