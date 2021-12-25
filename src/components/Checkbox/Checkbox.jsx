import React from 'react';

import {
  Checkbox,
} from './styles';

const CheckboxComponent = ({
  type, value, checked, onChange,
}) => (
  <Checkbox type={type} value={value} checked={checked} onChange={onChange} />
);

export default CheckboxComponent;
