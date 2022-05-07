import { NextPage } from 'next';
import Layout from '../components/layout';

const HomePage: NextPage = () => {
  return (
    <Layout
      heroTitle='Fire Emblem History'
      heroSubtitle='Learn Everything About Fire Emblem'
      heroImage='https://images4.alphacoders.com/860/860234.jpg'
    >
      <h1>Home</h1>
    </Layout>
  );
};

export default HomePage;
