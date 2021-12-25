import React from 'react';
import { useSelector } from 'react-redux';
import logoUrl from '../../assets/svg/Logo.svg';
import { selectCartTotal } from '../../features/cart/cartSlice';

import styles from './Header.module.css';

const Header = () => {
  const cartTotal = useSelector(selectCartTotal);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="/" rel="noreferrer">
          <img src={logoUrl} alt="Market" />
        </a>
        {' '}
        <div className={styles.right}>
          <div className={styles.cart}>
            $
            {cartTotal}
          </div>
        </div>
        {' '}

      </div>
    </header>
  );
};

export default Header;
