import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProducts,
  fetchProducts,
} from './productListSlice';
import {
  addToCart,
} from '../cart/cartSlice';
import Pagination from '../../components/Pagination/Pagination';
import TypeFilter from '../../components/TypeFilter/TypeFilter';
import Button from '../../components/Button/Button';
import {
  ProductList, Product, MainTitle, Content, ImageBox, Image, Info, Price, ItemName,
} from './styles';
import { PAGE_SIZE } from '../../constants';

export default function ProductListComponent() {
  const dispatch = useDispatch();

  const productList = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const getPaginatedData = () => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;

    return productList.slice(firstPageIndex, lastPageIndex);
  };

  return (
    <ProductList>
      <MainTitle>Products</MainTitle>
      <TypeFilter />
      <Content>
        {
          getPaginatedData().map((product) => (
            <Product key={product.slug}>
              <ImageBox>
                <Image />
              </ImageBox>
              <Info>
                <Price>{product.price}</Price>
                <ItemName>{product.name}</ItemName>
                <Button
                  type="button"
                  label="Add"
                  onClick={() => dispatch(addToCart(product))}
                />
              </Info>
            </Product>
          ))
        }
      </Content>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={productList.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </ProductList>
  );
}
