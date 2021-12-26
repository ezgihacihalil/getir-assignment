import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const InnerContainer = styled.div`
  background-color: #FAFAFA;
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

export const Filters = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Filter = styled.div`
  width: 280px;

  @media (max-width: 1200px) {
    width: 285px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default {};
