import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid $grey;
  background: #fff;
  position: sticky;
  top: 0;
  transition: top 0.4s ease-in-out;
  z-index: 99;
  background-color: #1EA4CE;

  @media (max-width: 960px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const StyledContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.a`
  flex: 2;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const HeaderPrice = styled.div`
  flex: 1;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px 30px;
  margin-left: auto;
  color: #fff;
  box-sizing: border-box;
  width: 130px;
  max-width: 130px;
  background-color: #147594;
`;

export const CartTotal = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin-left: 8px;
`;

export const Image = styled.img``;

export const ImageBasket = styled.img`
  width: 24px;
  height: 24px;
`;

export const InnerWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    max-width: 960px;
  }
`;

export default {};
