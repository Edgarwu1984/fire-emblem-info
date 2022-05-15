import { NextPage } from 'next';
import React from 'react';
import ContactForm from '../components/form/ContactForm';
import Layout from '../components/layout';

const ContactPage: NextPage = () => {
  return (
    <Layout
      heroImage='https://i.pinimg.com/originals/13/ba/d2/13bad21492c17758f9af4404d0851fa3.jpg'
      heroTitle='Contact Me'
      heroSubtitle='Please leave your message if you have any queries or questions'
    >
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
