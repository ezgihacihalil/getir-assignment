import React, { useEffect, useState } from 'react';

import styles from './Header.module.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  let lastScrollY = window.pageYOffset;

  const onScroll = () => {
    const scrollY = window.pageYOffset;

    setIsSticky(scrollY > lastScrollY);
    lastScrollY = scrollY > 0 ? scrollY : 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isSticky]);

  return (
    <header className={`${styles.header} ${isSticky ? styles.isSticky : ''}`}>
      <a href="/" rel="noreferrer">
        Market
      </a>
      {' '}
      <div className={styles.headerRight}>
        <div className={styles.cart}>
          $35.95
        </div>
      </div>
      {' '}

    </header>
  );
};

export default Header;
