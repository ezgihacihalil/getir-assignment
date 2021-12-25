import styled from 'styled-components';

export const BrandList = styled.div`
  margin: 24px 0;

  @media (max-width: 1200px) {
    .brands {
      margin: 0;
    }
  }
`;

export const Content = styled.div`
  background: white;
  padding: 24px;
  box-shadow: 0px 6px 24px rgb(93 62 188 / 4%);
  border-radius: 2px;
  box-sizing: border-box;
  width: 280px;
  height: 274px;
  overflow: hidden;
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  padding: 12px 16px;
  color: #A8A8A8;
  border: 2px solid #E0E0E0;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  width: fill-available;
`;

export const Brand = styled.div`
  max-height: 100vh;
  overflow: scroll;
  padding-right: 24px;
`;

export const Wrapper = styled.div`
  margin: 18px 0;
  max-width: 250px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #525252;
  display: flex;
  align-items: center;
`;

export const Label = styled.label``;

export const ItemName = styled.div`
  margin-left: 8px;
`;
