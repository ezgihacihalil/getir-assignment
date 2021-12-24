import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTagList, selectTagList } from './tagListSlice';
// import styles from './ProductList.module.css';

export default function TagList() {
  const dispatch = useDispatch();

  const tagList = useSelector(selectTagList);

  useEffect(() => {
    dispatch(getTagList());
  }, []);

  return (
    <div>
      Tag List
      {
        tagList.map((product) => (
          <div key={product.slug}>
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        ))
      }
    </div>
  );
}
