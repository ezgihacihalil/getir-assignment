import React from 'react';

import {
  Flexbox,
} from './styles';

const FlexboxComponent = ({
  alignCenter, direction, children, justifyContent,
}) => (
  <Flexbox alignCenter={alignCenter} direction={direction} justifyContent={justifyContent}>
    {children}
  </Flexbox>
);

export default FlexboxComponent;
