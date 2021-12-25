import React from 'react';

import { Button } from './styles';

const ButtonComponent = ({ label, onClick }) => (
  <Button type="submit" onClick={onClick}>{label}</Button>
);

export default ButtonComponent;
