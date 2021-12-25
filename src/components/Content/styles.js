import styled from 'styled-components';

export const Content = styled.div`
  background: white;
  padding: 24px;
  box-shadow: 0px 6px 24px rgb(93 62 188 / 4%);
  border-radius: 2px;
  box-sizing: border-box;
  height: 274px;
  overflow: hidden;

  @media (max-width: 1200px) {  
    min-height: 171px;
    max-height: 171px;
  }
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  padding: 12px 16px;
  margin-bottom: 16px;
  color: #A8A8A8;
  border: 2px solid #E0E0E0;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  width: fill-available;
`;

export const ContentBody = styled.div`
  max-height: 100vh;
  overflow: auto;
  padding-right: 24px;
`;

export default {};
