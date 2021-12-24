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
import styles from './ProductList.module.css';

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
    <div className={styles.productlist}>
      <h1 className={styles.title}>Products</h1>
      <TypeFilter />
      <div className={styles.body}>
        {
          getPaginatedData().map((product) => (
            <div className={styles.product} key={product.slug}>
              <div className={styles.box}>
                <div className={styles.image} />
              </div>
              <div className={styles.info}>
                <div className={styles.price}>{product.price}</div>
                <div className={styles.name}>{product.name}</div>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={productList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
