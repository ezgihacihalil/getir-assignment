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
  console.log(brandList)

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <div>
      Brands
    </div>
  );
};

export default Brands;
