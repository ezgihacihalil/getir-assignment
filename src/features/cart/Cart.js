import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectItems,
} from './cartSlice';
import styles from './Cart.module.css';

export default function Cart() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  return (
    <div className={styles.cart}>
      Cart
      {
        items.map((item) => (
          <>
            <span>{item.name}</span>
            <button
              type="button"
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => dispatch(decrement(item))}
            >
              -
            </button>
            <span className={styles.value}>{item.amount}</span>
            <button
              type="button"
              className={styles.button}
              aria-label="Increment value"
              onClick={() => dispatch(increment(item))}
            >
              +
            </button>
            <span>{item.totalPrice || item.price}</span>
          </>
        ))
      }
    </div>
  );
}
