import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import Container from '../../common/Container';
import { GiHamburgerMenu, GiSwordsEmblem } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import styles from './Navbar.module.scss';

const Navbar: FC = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  // Disable the mobile menu when window width hit the 'md' breakpoint
  useEffect(() => {
    const handleEvent = () => {
      if (typeof window !== undefined && window.innerWidth >= 768) {
        setShow(false);
      }
    };
    window.addEventListener('resize', handleEvent);

    return () => window.removeEventListener('resize', handleEvent);
  }, []);

  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.container}>
          <Link href='/'>
            <a className={styles.brand}>
              <GiSwordsEmblem />
              <span>FE.Info</span>
            </a>
          </Link>
          <button
            className={styles.hamburger_btn}
            onClick={() => setShow(!show)}
          >
            {show ? (
              <MdClose fontWeight={'600'} size='1.2rem' />
            ) : (
              <GiHamburgerMenu />
            )}
          </button>
          {/* === MOBILE MENU === */}
          {show === true && (
            <div className={styles.nav_mobile}>
              <Link href='/'>
                <a
                  className={
                    router.pathname === '/'
                      ? styles.nav_mobile_link_active
                      : styles.nav_mobile_link
                  }
                >
                  Home
                </a>
              </Link>
              <Link href='/collections'>
                <a
                  className={
                    router.pathname === '/collections' || router.query.slug
                      ? styles.nav_mobile_link_active
                      : styles.nav_mobile_link
                  }
                >
                  Collections
                </a>
              </Link>
              <Link href='/about'>
                <a
                  className={
                    router.pathname === '/about'
                      ? styles.nav_mobile_link_active
                      : styles.nav_mobile_link
                  }
                >
                  About
                </a>
              </Link>
            </div>
          )}

          {/* === DESKTOP MENU === */}
          <div className={styles.nav}>
            <Link href='/'>
              <a
                className={
                  router.pathname === '/'
                    ? styles.nav_link_active
                    : styles.nav_link
                }
              >
                Home
              </a>
            </Link>
            <Link href='/collections'>
              <a
                className={
                  router.pathname === '/collections' || router.query.slug
                    ? styles.nav_link_active
                    : styles.nav_link
                }
              >
                Collections
              </a>
            </Link>
            <Link href='/about'>
              <a
                className={
                  router.pathname === '/about'
                    ? styles.nav_link_active
                    : styles.nav_link
                }
              >
                About
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
