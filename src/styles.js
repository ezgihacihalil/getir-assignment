import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const InnerContainer = styled.div`
  background-color: #E5E5E5;
  padding-top: 40px;
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    max-width: 960px;
  }
`;

export const Flexbox = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`;

export default {};
