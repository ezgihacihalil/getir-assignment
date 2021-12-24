import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBrands,
  selectBrands,
  setBrandSearchKey,
  selectCheckedBrands,
  setSelectedBrands,
} from './brandsSlice';
import styles from './Brands.module.css';

const Brands = () => {
  const dispatch = useDispatch();

  const selectedBrands = useSelector(selectCheckedBrands);
  const brandList = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <div className={styles.brands}>
      <h2 className={styles.title}>Brands</h2>
      <div className={styles.body}>
        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="Search brand" type="text" onChange={(e) => dispatch(setBrandSearchKey(e.target.value))} />
        </div>
        <div className={styles.brandlist}>
          {
        brandList.map((brand) => (
          <div className={styles.wrapper} key={brand.slug}>
            <label>
              <input
                type="checkbox"
                value={brand.slug}
                checked={selectedBrands.includes(brand.slug)}
                onChange={(e) => dispatch(setSelectedBrands(e.target.value))}
              />
              <span className={styles.name}>{brand.name}</span>
            </label>
          </div>
        ))
      }
        </div>
      </div>
    </div>
  );
};

export default Brands;
