import styled from 'styled-components';

export const SortingBody = styled.div`
  background: white;
  padding: 16px 24px;
  box-shadow: 0px 6px 24px rgb(93 62 188 / 4%);
  border-radius: 2px;
  box-sizing: border-box;

  @media (max-width: 1200px) {  
    min-height: 171px;
    max-height: 171px;
  }
`;

export const Wrapper = styled.div`
  margin: 9px 0;
  max-width: 250px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #525252;
  display: flex;
  align-items: center;
`;

export const ItemName = styled.div`
  margin-left: 12px;
  font-size: 14px;
`;
