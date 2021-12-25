import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSortingOption,
  selectSortingOption,
} from './sortingSlice';
import { SORTING_OPTIONS } from '../../constants';
import Title from '../../components/Title/Title';
import {
  Content, Wrapper, Input, ItemName,
} from './styles';

export default function Sorting() {
  const selectedValue = useSelector(selectSortingOption);
  const dispatch = useDispatch();

  return (
    <div>
      <Title title="Sorting" />
      <Content>
        {
        SORTING_OPTIONS.map((option) => (
          <Wrapper key={option.value}>
            <Input
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => dispatch(setSortingOption(e.target.value))}
            />
            <ItemName>{option.name}</ItemName>
          </Wrapper>
        ))
      }
      </Content>
    </div>
  );
}
