import React, { useEffect, useMemo, useState } from 'react';
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
// import styles from './ProductList.module.css';

const PageSize = 10;

export default function ProductList() {
  const dispatch = useDispatch();

  const productList = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return productList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      Product List
      <TypeFilter />
      {
        currentTableData.map((product) => (
          <div key={product.slug}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button onClick={() => dispatch(addToCart(product))}>Add</button>
          </div>
        ))
      }
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={productList.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}
