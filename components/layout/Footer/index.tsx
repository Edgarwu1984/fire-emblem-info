import Link from 'next/link';
import React, { FC } from 'react';
import Container from '../../common/Container';
import styles from './footer.module.scss';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.container}>
          <div className={styles.nav}>
            <Link href={'/privacy-policy'}>
              <a className={styles.link}>Privacy Policy</a>
            </Link>
            <Link href={'/contact-us'}>
              <a className={styles.link}>Contact Us</a>
            </Link>
            <a
              className={styles.link}
              href={'https://fireemblemwiki.com.au/'}
              target='_blank'
              rel={'noreferrer'}
            >
              Fire Emblem Wiki
            </a>
            <div className={styles.social}>
              <Link href={'/contact-us'}>
                <a className={styles.link}>
                  <FaFacebookSquare />
                </a>
              </Link>
              <Link href={'/contact-us'}>
                <a className={styles.link}>
                  <FaTwitter />
                </a>
              </Link>
              <Link href={'/contact-us'}>
                <a className={styles.link}>
                  <FaInstagram />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.copyright}>
            <small>
              &copy; {currentYear} Created by Edgar, Powered By Next.js
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
