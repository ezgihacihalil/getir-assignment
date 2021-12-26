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
    -webkit-appearance: none; 

    &:before {
      content: '';
      display: block;
      background-color: #1EA4CE;
    }

    &:checked:before {
      padding: 4px;
      content: "✔";
      color: #fff;
    }
  }

  &[type="radio"] {
    border: 1px solid #DFDEE2;
    background: #FFFFFF;
    -webkit-appearance: none;
    border-radius: 50%;

    &:checked {
      border: 1px solid #1EA4CE;
    }
    
    &:before {
      content: '';
      display: block;
      margin-left: 4px;
      margin-top: 2px;
      border-radius: 50%;
      color: #1EA4CE;
    }

    &:checked:before {
      content: "✔";
    }
  }
`;

export default {};
