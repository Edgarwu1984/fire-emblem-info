import { useRouter } from 'next/router';
import React, { useState } from 'react';
// File System
import fs from 'fs';
import path from 'path';
// Dependencies
import matter from 'gray-matter';
import { marked } from 'marked';
// Components
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import Modal from '../../components/Modal';
// Types
import { Collection } from '../../types/Collection';
import { NextPage } from 'next';
// Helper Functions
import getBlurDataURL from '../../helper/getBlurDataURL';

type PageProps = {
  slug: string;
  frontmatter: Collection['frontmatter'];
  content: string;
};

const SingleCollectionPage: NextPage<PageProps> = ({
  slug,
  frontmatter,
  content,
}) => {
  const router = useRouter();
  const urlArray = router.asPath.split('/');

  const [imgUrl, setImgUrl] = useState('');
  const [open, setOpen] = useState(false);

  const onOpen = (url: string) => {
    setOpen(true);
    setImgUrl(url);
  };
  const onClose = () => setOpen(false);

  return (
    <Layout
      heroImage={frontmatter.banner_image}
      heroTitle={frontmatter.title}
      heroSubtitle={`Released At: ${frontmatter.releasedAt}`}
    >
      <section>
        <div className='breadcrumb'>
          <Link href={`/${urlArray[1]}`}>
            <a>{urlArray[1]}</a>
          </Link>
          <div>{urlArray[2]}</div>
        </div>
      </section>
      <section>
        <h1>{frontmatter.title}</h1>
        <div>{frontmatter.releasedAt}</div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </section>
      <section className='grid gallery_section'>
        {frontmatter.gallery.length > 0 &&
          frontmatter.gallery.map((img, index) => (
            <div className='gallery_img' key={index}>
              <Image
                src={img}
                alt={`screenshot-${index + 1}`}
                width={'300'}
                height={'300'}
                objectFit='cover'
                placeholder='blur'
                blurDataURL={getBlurDataURL()}
                onClick={() => onOpen(img)}
              />
            </div>
          ))}
      </section>
      <Modal imgUrl={imgUrl} open={open} onClose={onClose} />
    </Layout>
  );
};

export default SingleCollectionPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('data/md'));

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join('data/md', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: { frontmatter, content, slug },
  };
}
