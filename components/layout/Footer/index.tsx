import Link from 'next/link';
import React, { FC } from 'react';
import Container from '../../common/Container';
import styles from './footer.module.scss';
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.container}>
          <div className={styles.nav}>
            <Link href={'/privacy'}>
              <a className={styles.link}>Privacy Policy</a>
            </Link>
            <Link href={'/contact'}>
              <a className={styles.link}>Contact Me</a>
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
              <a
                href='https://github.com/Edgarwu1984'
                target='_blank'
                rel={'noreferrer'}
                className={styles.link}
              >
                <FaGithub />
              </a>
              <a
                href='https://www.facebook.com/wuzhengjie1007'
                target='_blank'
                rel={'noreferrer'}
                className={styles.link}
              >
                <FaFacebookSquare />
              </a>
              <a
                href='https://twitter.com/Edgarwu1007'
                target='_blank'
                rel={'noreferrer'}
                className={styles.link}
              >
                <FaTwitter />
              </a>
              <a
                href='https://www.instagram.com/edgarwu1007/'
                target='_blank'
                rel={'noreferrer'}
                className={styles.link}
              >
                <FaInstagram />
              </a>
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
