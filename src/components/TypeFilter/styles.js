import styled from 'styled-components';

export const Filters = styled.div`
  display: flex;
`;

export const Item = styled.div`
  padding: 6px 16px;
  margin-right: 8px;
  border-radius: 2px;
  font-size: 13px;
  line-height: 18px;
  cursor: pointer;

  &:first-child {
    background-color: #1EA4CE;
    color: #fff;
  }

  &:last-child {
    background-color: #F2F0FD;
    color: #1EA4CE;
  }
`;

export const Option = styled.span`
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
