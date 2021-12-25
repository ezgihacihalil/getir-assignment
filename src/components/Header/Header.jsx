import React from 'react';
import { useSelector } from 'react-redux';
import logoUrl from '../../assets/svg/logo.svg';
import basket from '../../assets/svg/basket.svg';
import { selectCartTotal } from '../../features/cart/cartSlice';

import {
  Header,
  InnerWrapper,
  StyledContent,
  Logo,
  HeaderPrice,
  CartTotal,
  StyledContainer,
  Image,
  ImageBasket,
} from './styles';

const HeaderComponent = () => {
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Header>
      <InnerWrapper>
        <StyledContent />
        <Logo href="/" rel="noreferrer">
          <Image src={logoUrl} alt="Market" />
        </Logo>
        <HeaderPrice>
          <StyledContainer>
            <ImageBasket src={basket} alt="" />
            <CartTotal>
              $
              {cartTotal}
            </CartTotal>
          </StyledContainer>
        </HeaderPrice>
      </InnerWrapper>
    </Header>
  );
};

export default HeaderComponent;
