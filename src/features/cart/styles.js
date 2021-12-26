import styled from 'styled-components';
import { Button } from '../../components/Button/styles';
import { Flexbox } from '../../components/Flexbox/styles';

export const Cart = styled.div`
  background: white;
  width: 280px;
  height: 100%;
  border: 8px solid #1EA4CE;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 24px;
  margin-left: 16px;
  font-size: 14px;
  line-height: 18px;
  transform: translateX(200%);
  transition: 0.4s;

  &.is-visible {
    transform: translateX(0);
  }

  @media (max-width: 1200px) {
    position: fixed;
    right: 0;
    height: auto;
    top: 40%;
    max-height: 400px;
    overflow: auto;
    z-index: 2;
  } 
`;

export const ItemName = styled.div`
  color: #191919;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Total = styled.div`
  text-align: left;
`;

export const ItemPrice = styled.div`
  color: #1EA4CE; 
  font-weight: 600;
`;

export const Value = styled.div`
  font-size: 15px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
  padding: 6px 8px;
  box-sizing: border-box;
  color: #fff;
  background-color: #1EA4CE;
`;

export const StyledButton = styled(Button)`
  color: #1EA4CE;
  background: none;
  padding: 0;
  font-size: 20px;

  &:hover {
    color: #1e9cce;
    background: none;
  }
`;

export const StyledFlexbox = styled(Flexbox)`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #F4F4F4;
`;

export const CartTotal = styled(Flexbox)`
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  color: #1EA4CE;
   
  span {
    border: 2px solid #1EA4CE;
    padding: 16px 24px;
  }

`;
