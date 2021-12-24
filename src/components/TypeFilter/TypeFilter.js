import React from 'react';
import { useSelector } from 'react-redux';

import { selectTypeFilter } from '../../features/productList/productListSlice';
// import styles from './Sorting.module.css';

export default function Sorting() {
  const typeFilters = useSelector(selectTypeFilter);

  return (
    <div>
      {
        typeFilters.map((option) => (
          <div key={option}>
            <span>{option}</span>
          </div>
        ))
      }
    </div>
  );
}
