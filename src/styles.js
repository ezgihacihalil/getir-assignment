import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const InnerContainer = styled.div`
  background-color: #E5E5E5;
  padding: 40px 0;

  @media (max-width: 960px) {
    padding: 20px;
  }
`;

export const ContentBody = styled.div`
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

export default {};
