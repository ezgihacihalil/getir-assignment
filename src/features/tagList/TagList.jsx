import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCheckedTags, selectTags, setSelectedTags, setTagListSearchKey,
} from './tagListSlice';
import Title from '../../components/Title/Title';
import {
  Taglist, Content, InputWrapper, Input, Tags, Wrapper, Label, ItemName,
} from './styles';

const TagListComponent = () => {
  const tagList = useSelector(selectTags);
  const selectedTags = useSelector(selectCheckedTags) || [];

  const dispatch = useDispatch();

  return (
    <Taglist>
      <Title title="Tags" />
      <Content>
        <InputWrapper>
          <Input placeholder="Search brand" type="text" onChange={(e) => dispatch(setTagListSearchKey(e.target.value))} />
        </InputWrapper>
        <Tags>
          {
        Object.keys(tagList).map((tag) => (
          <Wrapper key={tag}>
            <Label>
              <input
                type="checkbox"
                value={tag}
                checked={selectedTags.includes(tag)}
                onChange={(e) => dispatch(setSelectedTags(e.target.value))}
              />
              <ItemName>{tag}</ItemName>
            </Label>
          </Wrapper>
        ))
      }
        </Tags>
      </Content>
    </Taglist>
  );
};

export default TagListComponent;
