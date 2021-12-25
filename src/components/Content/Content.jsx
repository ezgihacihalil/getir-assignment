import React from 'react';

import {
  Content, ContentBody, InputWrapper, Input,
} from './styles';

const ContentComponent = ({ children, onChange, placeholder }) => (
  <Content>
    <InputWrapper>
      <Input placeholder={placeholder} type="text" onChange={onChange} />
    </InputWrapper>
    <ContentBody>
      {children}
    </ContentBody>
  </Content>
);

export default ContentComponent;
