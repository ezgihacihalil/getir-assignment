import styled from 'styled-components';

export const ProductList = styled.div`
  flex: 2;
  margin: 0 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 8px;
  margin-top: 16px;
  background-color: #fff;
  border-radius: 2px;
`;

export const Product = styled.div`
  width: 124px;
  margin: 8px 12px;
  transition: 0.4s;

  @media (max-width: 1200px) {
    width: 135px;
    margin: 8px auto;
  }
`;

export const ImageBox = styled.div`
  padding: 16px;
  border: 1px solid #F3F0FE;
  border-radius: 12px;
`;

export const Image = styled.div`
width: 92px;
height: 92px;
background: #c4c4c4; 
`;

export const Info = styled.div`
  min-height: 96px;
  height: 96px;
  display: flex;
  flex-direction: column;
`;

export const Price = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #1ea4ce;
  margin-top: 8px;
  flex: 1;
`;

export const ItemName = styled.span`
  color: #191919;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px; 
  margin-bottom: 8px;
  flex: 2;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 20px;
  height: 20px;
  width: 100%;
  background-color: #1ea4ce;
  color: #fff;
  border-radius: 2px;
`;

export const MainTitle = styled.h1`
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  font-size: 20px;
  color: #6f6f6f;
  margin: 0 0 16px;
`;

export default {};
