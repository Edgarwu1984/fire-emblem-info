import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/layout';

const PrivacyPolicyPage: NextPage = () => {
  return (
    <Layout title='Privacy Policy' heroTitle='Privacy Policy'>
      <p>
        Fire Emblem Info is committed to providing quality services to you and
        this policy outlines our ongoing obligations to you in respect of how we
        manage your Personal Information. We have adopted the Australian Privacy
        Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy
        Act). The NPPs govern the way in which we collect, use, disclose, store,
        secure and dispose of your Personal Information. A copy of the
        Australian Privacy Principles may be obtained from the website of The
        Office of the Australian Information Commissioner at www.aoic.gov.au
      </p>
    </Layout>
  );
};

export default PrivacyPolicyPage;
