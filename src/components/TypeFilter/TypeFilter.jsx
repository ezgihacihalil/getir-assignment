import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectChosenType, selectTypeFilter, setSelectedType } from '../../features/productList/productListSlice';
import Flexbox from '../Flexbox/Flexbox';
import { Item, Option } from './styles';

export default function TypeFilter() {
  const typeFilters = useSelector(selectTypeFilter);
  const selectedType = useSelector(selectChosenType);

  const dispatch = useDispatch();

  return (
    <Flexbox justifyContent="start">
      {
        typeFilters.map((option) => (
          <Item
            role="button"
            tabIndex={0}
            key={option}
            className={selectedType === option && 'is-active'}
            onClick={() => dispatch(setSelectedType(option))}
            onKeyPress={() => dispatch(setSelectedType(option))}
          >
            <Option>{option}</Option>
          </Item>
        ))
      }
    </Flexbox>
  );
}
