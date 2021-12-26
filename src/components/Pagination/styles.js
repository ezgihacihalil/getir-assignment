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
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ListItem = styled.div`
  cursor: pointer;

  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const ButtonWrapper = styled.div`
  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const ArrowButton = styled.span`
  display: flex;
  align-items: center;
`;

export const PrevButton = styled.span`
  margin-left: 8px;
`;

export const PageNumber = styled.span`
  padding: 12px;

  &.is-active {
    background-color: #1EA4CE;
    color: #fff;
  }
`;

export const NextButton = styled.span`
  margin-right: 8px;
`;

export const Image = styled.img``;

export default {};
