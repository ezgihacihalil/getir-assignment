import styled from 'styled-components';
import { Flexbox } from '../../components/Flexbox/styles';

export const BrandList = styled.div`
  margin: 24px 0;

  @media (max-width: 1200px) {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    margin: 24px 0;
  }
`;

export const StyledFlexbox = styled(Flexbox)`
  margin: 16px 0;

  &:first-child {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  display: flex;
`;

export const ItemName = styled.div`
  max-width: 170px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 8px;
  margin-left: 8px;
`;
