import styled from 'styled-components';

export const ProductList = styled.div`
  flex: 2;
  margin-left: 16px;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    margin-top: 24px;
    width: 100%;
  }
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

  @media (max-width: 1200px) {
    width: 285px;
  }

  @media (max-width: 768px) {
    width: 324px;
  }
`;

export const ImageBox = styled.div`
  padding: 16px;
  border: 1px solid #F3F0FE;
  border-radius: 12px;
`;

export const Image = styled.div`
  width: 100%;
  height: 90px;
  background: #c4c4c4; 
  margin: auto;

  @media (max-width: 1200px) {
    height: 244px;
  }
`;

export const Info = styled.div`
  min-height: 96px;
  height: 96px;
  display: flex;
  flex-direction: column;
  text-align: left;
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

export const MainTitle = styled.h1`
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  font-size: 20px;
  color: #6f6f6f;
  margin: 0 0 16px;
  text-align: left;
`;

export default {};
