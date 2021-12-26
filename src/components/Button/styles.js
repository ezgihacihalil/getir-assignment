import styled from 'styled-components';

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
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1e9cce;
    color: #fefefe;
  }
`;

export default {};
