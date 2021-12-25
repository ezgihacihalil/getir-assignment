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
  BrandList, Content, InputWrapper, Input, Brand, Wrapper, Label, ItemName,
} from './styles';

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
      <Content>
        <InputWrapper>
          <Input placeholder="Search brand" type="text" onChange={(e) => dispatch(setBrandSearchKey(e.target.value))} />
        </InputWrapper>
        <Brand>
          {
        brandList.map((brand) => (
          <Wrapper key={brand.slug}>
            <Label>
              <input
                type="checkbox"
                value={brand.slug}
                checked={selectedBrands.includes(brand.slug)}
                onChange={(e) => dispatch(setSelectedBrands(e.target.value))}
              />
              <ItemName>{brand.name}</ItemName>
            </Label>
          </Wrapper>
        ))
      }
        </Brand>
      </Content>
    </BrandList>
  );
};

export default Brands;
