import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid $grey;
  background: #fff;
  position: sticky;
  top: 0;
  transition: top 0.4s ease-in-out;
  z-index: 99;
  background-color: #1EA4CE;
`;

export const Logo = styled.a`
  flex: 2;
  text-align: center;
`;

export const HeaderPrice = styled.header`
  display: flex;
  align-items: center;
  padding: 18px 30px;
  background-color: #147594;
  color: #fff;
`;

export const CartTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: $gold;
  border-radius: 100%;
`;

export const Inner = styled.div`
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
