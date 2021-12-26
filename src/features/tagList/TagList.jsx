import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCheckedTags, selectTags, setSelectedTags, setTagListSearchKey,
} from './tagListSlice';
import Title from '../../components/Title/Title';
import {
  StyledFlexbox, ItemName, ItemCount,
} from './styles';
import ContentComponent from '../../components/Content/Content';
import Checkbox from '../../components/Checkbox/Checkbox';
import Flexbox from '../../components/Flexbox/Flexbox';

const TagListComponent = () => {
  const tagList = useSelector(selectTags);
  const selectedTags = useSelector(selectCheckedTags) || [];

  const dispatch = useDispatch();

  return (
    <>
      <Title title="Tags" />
      <ContentComponent placeholder="Search tag" onChange={(e) => dispatch(setTagListSearchKey(e.target.value))}>
        {
        tagList.map((tag) => (
          <StyledFlexbox key={tag.name}>
            <Flexbox alignCenter justifyContent="start">
              <Checkbox
                type="checkbox"
                value={tag.name}
                checked={selectedTags.includes(tag.name)}
                onChange={(e) => dispatch(setSelectedTags(e.target.value))}
              />
              <ItemName>{tag.name}</ItemName>
              <ItemCount>
                (
                {tag.count}
                )
              </ItemCount>
            </Flexbox>
          </StyledFlexbox>
        ))
      }
      </ContentComponent>
    </>
  );
};

export default TagListComponent;
