import { NextPage } from 'next';
import React from 'react';
import CollectionCard from '../../components/CollectionCard';
import Layout from '../../components/Layout';
import SectionTitle from '../../components/SectionTitle';
import { getCollections } from '../../helper/getCollections';
import { Collections, Collection } from '../../types/Collection';

type PageProps = {
  collections: Collections;
};

const CollectionPage: NextPage<PageProps> = ({ collections }) => {
  const sortedCollections = [...collections].sort(
    (a, b) =>
      +a.frontmatter.releasedAt.split(',')[1] -
      +b.frontmatter.releasedAt.split(',')[1]
  );

  return (
    <Layout
      title='Collection'
      heroTitle='Fire Emblem Collections'
      heroSubtitle='Find all the Fire Emblem Series From Here'
      heroImage='https://catwithmonocle.com/wp-content/uploads/2020/07/featured-feh-wallpapers.jpg'
    >
      <section>
        <SectionTitle text='All The Series' />
        <section>
          <div className='grid'>
            {sortedCollections.map((collection: Collection) => (
              <CollectionCard
                key={collection.slug}
                slug={collection.slug}
                title={collection.frontmatter.title}
                cover_image={collection.frontmatter.cover_image}
                releasedAt={collection.frontmatter.releasedAt}
              />
            ))}
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default CollectionPage;

export async function getStaticProps() {
  return {
    props: {
      collections: getCollections(),
    },
  };
}
