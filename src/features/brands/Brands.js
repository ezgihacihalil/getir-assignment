import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBrands,
  selectBrands,
  setBrandSearchKey,
  selectCheckedBrands,
  setSelectedBrands,
} from './brandsSlice';
// import styles from './Brands.module.css';

const Brands = () => {
  const dispatch = useDispatch();

  const selectedBrands = useSelector(selectCheckedBrands);
  const brandList = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <div>
      Brands
      <input type="text" onChange={(e) => dispatch(setBrandSearchKey(e.target.value))} />
      {
        brandList.map((brand) => (
          <div key={brand.slug}>
            <label>
              <input
                type="checkbox"
                value={brand.slug}
                checked={selectedBrands.includes(brand.slug)}
                onChange={(e) => dispatch(setSelectedBrands(e.target.value))}
              />
              {brand.name}
            </label>
          </div>
        ))
      }
    </div>
  );
};

export default Brands;
