import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSortingOption,
  selectSortingOption,
} from './sortingSlice';
import { SORTING_OPTIONS } from '../../constants';
import styles from './Sorting.module.css';

export default function Sorting() {
  const selectedValue = useSelector(selectSortingOption);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className={styles.title}>Sorting</h2>
      <div className={styles.body}>
        {
        SORTING_OPTIONS.map((option) => (
          <div className={styles.wrapper} key={option.value}>
            <input
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => dispatch(setSortingOption(e.target.value))}
            />
            <span className={styles.name}>{option.name}</span>
          </div>
        ))
      }
      </div>
    </div>
  );
}
