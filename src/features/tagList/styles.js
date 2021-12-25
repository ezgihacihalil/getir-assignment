import styled from 'styled-components';

export const Taglist = styled.div`
  width: 280px;
  
  @media (max-width: 1200px) {  
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

export const ItemName = styled.div`
  max-width: 170px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 8px;
`;
