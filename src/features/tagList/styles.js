import styled from 'styled-components';
import { Flexbox } from '../../components/Flexbox/styles';

export const StyledFlexbox = styled(Flexbox)`
  margin: 16px 0;

  &:first-child {
    margin-top: 0;
  }
`;

export const ItemName = styled.div`
  max-width: 170px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 8px;
`;

export const ItemCount = styled.div`
  font-size: 14px;
  color: #A8A8A8;
  margin-left: 4px;
`;
