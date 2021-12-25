import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectTypeFilter, setSelectedType } from '../../features/productList/productListSlice';
import styles from './TypeFilter.module.css';

export default function TypeFilter() {
  const typeFilters = useSelector(selectTypeFilter);

  const dispatch = useDispatch();

  return (
    <div className={styles.filters}>
      {
        typeFilters.map((option) => (
          <div
            role="button"
            tabIndex={0}
            className={styles.item}
            key={option}
            onClick={() => dispatch(setSelectedType(option))}
            onKeyPress={() => dispatch(setSelectedType(option))}
          >
            <span>{option}</span>
          </div>
        ))
      }
    </div>
  );
}
