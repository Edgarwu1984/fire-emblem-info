import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Button from '../components/common/Button/Button';
import Layout from '../components/layout';
import SectionTitle from '../components/SectionTitle';

const PrivacyPolicyPage: NextPage = () => {
  return (
    <Layout title='Privacy Policy' heroTitle='Privacy Policy'>
      <section>
        <p>
          <strong>Fire Emblem Info</strong> is committed to providing quality
          services to you and this policy outlines our ongoing obligations to
          you in respect of how I manage your Personal Information. I have
          adopted the Australian Privacy Principles (APPs) contained in the
          Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in
          which I collect, use, disclose, store, secure and dispose of your
          Personal Information. A copy of the Australian Privacy Principles may
          be obtained from the website of The Office of the Australian
          Information Commissioner at www.aoic.gov.au
        </p>
      </section>
      <section>
        <SectionTitle text='What is Personal Information and why do I collect it' />
        <p>
          Personal Information is information or an opinion that identifies an
          individual. Examples of Personal Information I collect include: names,
          email.
        </p>
        <p>
          This Personal Information is obtained in many ways including name,
          email, our website{' '}
          <strong>https://fire-emblem-info.vercel.app</strong>
          and from third parties. I don’t guarantee website links or policy of
          authorised third parties. ­
        </p>
        <p>
          I collect your Personal Information for the primary purpose of
          providing our services to you, providing information to our clients
          and marketing. I may also use your Personal Information for secondary
          purposes closely related to the primary purpose, in circumstances
          where you would reasonably expect such use or disclosure. You may
          unsubscribe from our mailing/marketing lists at any time by contacting
          us in writing.
        </p>
        <p>
          When I collect Personal Information, I will, where appropriate and
          where possible, explain to you why I are collecting the information
          and how I plan to use it.
        </p>
      </section>
      <section>
        <SectionTitle text='Sensitive Information' />
        <p>
          Sensitive information is defined in the Privacy Act to include
          information or opinion about such things as an individual’s racial or
          ethnic origin, political opinions, membership of a political
          association, religious or philosophical beliefs, membership of a trade
          union or other professional body, criminal record or health
          information.
        </p>
        <div>Sensitive information will be used by us only:</div>
        <li>For the primary purpose for which it was obtained</li>
        <li>
          For a secondary purpose that is directly related to the primary
          purpose
        </li>
        <li>With your consent; or where required or authorised by law</li>
      </section>
      <section>
        <SectionTitle text='Disclosure of Personal Information' />
        <div>
          Your Personal Information may be disclosed in a number of
          circumstances including the following:
        </div>
        <li>Third parties where you consent to the use or disclosure; and</li>
        <li>
          For a secondary purpose that is directly related to the primary
          purpose
        </li>
        <li>Where required or authorised by law</li>
      </section>
      <section>
        <SectionTitle text='Security of Personal Information' />
        <p>
          Your Personal Information is stored in a manner that reasonably
          protects it from misuse and loss and from unauthorized access,
          modification or disclosure.
        </p>
        <p>
          When your Personal Information is no longer needed for the purpose for
          which it was obtained, I will take reasonable steps to destroy or
          permanently de-identify your Personal Information. However, most of
          the Personal Information is or will be stored in client files which
          will be kept by me for a minimum of 7 years.
        </p>
      </section>
      <section>
        <SectionTitle text='Privacy Policy Complaints and Enquiries' />
        <p>
          If you have any queries or complaints about our Privacy Policy, please
          <Link href={'/contact'}>
            <a> contact me</a>
          </Link>
        </p>
      </section>
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default PrivacyPolicyPage;
