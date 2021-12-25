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
import {
  Product, MainTitle, Content, ImageBox, Image, Info, Price, ItemName, Button,
} from './styles';

const PageSize = 16;

export default function ProductList() {
  const dispatch = useDispatch();

  const productList = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const getPaginatedData = () => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

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
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add
                </Button>
              </Info>
            </Product>
          ))
        }
      </Content>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={productList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </ProductList>
  );
}
