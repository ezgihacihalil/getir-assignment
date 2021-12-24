import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProducts,
  fetchProducts,
} from './productListSlice';
import {
  addToCart,
} from '../cart/cartSlice';
// import styles from './ProductList.module.css';

export default function ProductList() {
  const dispatch = useDispatch();

  const productList = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      Product List
      {
        productList.map((product) => (
          <div key={product.slug}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button onClick={() => dispatch(addToCart(product))}>Add</button>
          </div>
        ))
      }
    </div>
  );
}
