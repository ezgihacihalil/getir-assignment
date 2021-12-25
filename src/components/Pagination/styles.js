import styled from 'styled-components';

export const PaginationList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 535px;
  margin: 32px auto 0;
  padding: 0;
  color: #697488;
  font-size: 14px;
  line-height: 16px;
  padding: 12px;
  list-style-type: none;
`;

export const ListItem = styled.div``;

export const ArrowButton = styled.span`
  display: flex;
  align-items: center;
`;

export const PrevButton = styled.span`
  margin-left: 8px;
`;

export const PageNumber = styled.span`
  padding: 12px;

  &.active {
    background-color: #1EA4CE;
    color: #fff;
  }
`;

export const NextButton = styled.span`
  margin-right: 8px;
`;

export const Image = styled.img``;

export default {};
