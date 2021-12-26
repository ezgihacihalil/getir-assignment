import styled, { css } from 'styled-components';

export const Flexbox = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justifyContent === 'start' ? 'flex-start' : 'space-between')};
  ${(props) => props.alignCenter && css`
    align-items: center;
  `}
  ${(props) => props.direction === 'column' && css`
    flex-direction: column;
  `}
  font-size: 14px;
  line-height: 18px;
  color: #525252;
`;

export default {};
