import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBrands,
  selectBrands,
  setBrandSearchKey,
  selectCheckedBrands,
  setSelectedBrands,
} from './brandsSlice';
import Title from '../../components/Title/Title';
import {
  BrandList, StyledFlexbox, ItemName,
} from './styles';
import Content from '../../components/Content/Content';
import Flexbox from '../../components/Flexbox/Flexbox';
import Checkbox from '../../components/Checkbox/Checkbox';

const Brands = () => {
  const dispatch = useDispatch();

  const selectedBrands = useSelector(selectCheckedBrands);
  const brandList = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <BrandList>
      <Title title="Brands" />
      <Content placeholder="Search brand" onChange={(e) => dispatch(setBrandSearchKey(e.target.value))}>
        {
        brandList.map((brand) => (
          <StyledFlexbox key={brand.slug}>
            <Flexbox alignCenter justifyContent="start">
              <Checkbox
                type="checkbox"
                value={brand.slug}
                checked={selectedBrands.includes(brand.slug)}
                onChange={(e) => dispatch(setSelectedBrands(e.target.value))}
              />
              <ItemName>{brand.name}</ItemName>
            </Flexbox>
          </StyledFlexbox>
        ))
      }
      </Content>
    </BrandList>
  );
};

export default Brands;
