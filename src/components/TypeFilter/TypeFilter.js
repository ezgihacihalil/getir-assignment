import React from 'react';
import { useSelector } from 'react-redux';

import { selectTypeFilter } from '../../features/productList/productListSlice';
import styles from './TypeFilter.module.css';

export default function TypeFilter() {
  const typeFilters = useSelector(selectTypeFilter);

  return (
    <div className={styles.filters}>
      {
        typeFilters.map((option) => (
          <div className={styles.item} key={option}>
            <span>{option}</span>
          </div>
        ))
      }
    </div>
  );
}
