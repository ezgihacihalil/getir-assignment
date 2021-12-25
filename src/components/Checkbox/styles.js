import styled from 'styled-components';

export const Checkbox = styled.input`
  appereance: none;
  width: 22px;
  height: 22px;

  &[type="checkbox"] {
    appereance: none;
    width: 22px;
    height: 22px;
    background: #FFFFFF;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    border-radius: 2px;
  }

  &[type="radio"] {
    border: 2px solid #DFDEE2;
    background: #FFFFFF;
  }
`;

export default {};
