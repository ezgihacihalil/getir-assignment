import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSortingOption,
  selectSortingOption,
} from './sortingSlice';
import { SORTING_OPTIONS } from '../../constants';
import Title from '../../components/Title/Title';
import Checkbox from '../../components/Checkbox/Checkbox';
import {
  SortingBody, Wrapper, ItemName,
} from './styles';

export default function SortingComponent() {
  const selectedValue = useSelector(selectSortingOption);
  const dispatch = useDispatch();

  return (
    <>
      <Title title="Sorting" />
      <SortingBody>
        {
        SORTING_OPTIONS.map((option) => (
          <Wrapper key={option.value}>
            <Checkbox
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => dispatch(setSortingOption(e.target.value))}
            />
            <ItemName>{option.name}</ItemName>
          </Wrapper>
        ))
      }
      </SortingBody>
    </>
  );
}
