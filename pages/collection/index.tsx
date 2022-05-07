import { NextPage } from 'next';
import React from 'react';
import Layout from '../../components/layout';

const CollectionPage: NextPage = () => {
  return (
    <Layout
      title='Collection'
      heroTitle='Fire Emblem Collection'
      heroSubtitle='Find all the Fire Emblem Series From Here'
      heroImage='https://catwithmonocle.com/wp-content/uploads/2020/07/featured-feh-wallpapers.jpg'
    >
      <div>CollectionPage</div>
    </Layout>
  );
};

export default CollectionPage;
