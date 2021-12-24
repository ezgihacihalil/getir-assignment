import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBrands,
  selectBrands,
} from './brandsSlice';
// import styles from './Brands.module.css';

const Brands = () => {
  const dispatch = useDispatch();

  const brandList = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <div>
      Brands
      {
        brandList.map((brand) => (
          <div key={brand.slug}>
            <span>{brand.name}</span>
          </div>
        ))
      }
    </div>
  );
};

export default Brands;
