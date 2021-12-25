import React from 'react';
import { useSelector } from 'react-redux';
import logoUrl from '../../assets/svg/Logo.svg';
import { selectCartTotal } from '../../features/cart/cartSlice';

import {
  Header, Inner, Logo, HeaderPrice, CartTotal,
} from './styles';

const HeaderComponent = () => {
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Header>
      <Inner>
        <Logo href="/" rel="noreferrer">
          <img src={logoUrl} alt="Market" />
        </Logo>
        <HeaderPrice>
          <CartTotal>
            $
            {cartTotal}
          </CartTotal>
        </HeaderPrice>
      </Inner>
    </Header>
  );
};

export default HeaderComponent;
