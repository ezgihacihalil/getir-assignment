import styled from 'styled-components';

export const BrandList = styled.div`
  margin: 24px 0;
  width: 280px;

  @media (max-width: 1200px) {
    margin-top: 0;
    width: 30%;
  }
`;

export const Wrapper = styled.div`
  margin: 16px 0;
  color: #525252;
  display: flex;
  align-items: center;

  &:first-child {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  display: flex;
`;

export const ItemName = styled.div`
  max-width: 170px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 8px;
  margin-left: 8px;
`;
