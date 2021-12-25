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

    @media (max-width: 1200px) {
      flex-direction: row;
      justify-content: ${(props) => (props.justifyContent === 'start' ? 'flex-start' : 'space-between')};
      width: 100%;
    }
`;

export default {};
