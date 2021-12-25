import styled from 'styled-components';

export const Cart = styled.div`
  background: white;
  width: 280px;
  height: 100%;
  border: 8px solid #1EA4CE;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 24px;
  margin-left: 16px;

  @media (max-width: 1200px) {
    margin-top: 100px;
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
  text-align: right;
`;

export const ItemPrice = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #1EA4CE; 
`;

export const Value = styled.div`
  height: 30px;
  width: 30px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
  box-sizing: border-box;
  color: #fff;
  background-color: #1EA4CE;
`;

export const Button = styled.button`
  color: #1EA4CE;
  background: none;
  padding: 0;
  font-size: 20px;
`;
