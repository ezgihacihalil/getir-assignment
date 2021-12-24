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
    <div>
      Cart
      {
        items.map((item) => (
          <>
            <span>{item.name}</span>
            <button
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <span className={styles.value}>{1}</span>
            <button
              className={styles.button}
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </>
        ))
      }
    </div>
  );
}
