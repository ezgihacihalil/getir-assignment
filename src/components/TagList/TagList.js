import React from 'react';
import { useSelector } from 'react-redux';

import { selectTagList } from '../../features/productList/productListSlice';
// import styles from './ProductList.module.css';

export default function TagList() {
  const tagList = useSelector(selectTagList);

  return (
    <div>
      Tag List
      {
        Object.keys(tagList).map((tag) => (
          <div key={tag}>
            <span>{tag}</span>
            <span>{tagList[tag]}</span>
          </div>
        ))
      }
    </div>
  );
}
