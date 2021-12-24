import React from 'react';

import { usePagination, DOTS } from './usePagination';

import styles from './Pagination.module.css';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  // className={classnames('pagination-container', { [className]: className })}
  return (
    <ul className={styles.pagination}>
      <li>
        <button
          type="button"
          tabIndex={0}
          className={`${styles.paginationItem} ${currentPage === 1 ? styles.disabled : ''}`}
          onClick={onPrevious}
          onKeyPress={onPrevious}
        >
          <span className="arrow left">Prev</span>
        </button>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li>
            <button
              type="button"
              tabIndex={0}
              className={`${styles.paginationItem} ${pageNumber === currentPage ? styles.selected : ''}`}
              onClick={() => onPageChange(pageNumber)}
              onKeyPress={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
      <li>
        <button
          type="button"
          className={`${styles.paginationItem} ${currentPage === lastPage ? styles.disabled : ''}`}
          tabIndex={0}
          onClick={onNext}
          onKeyPress={onNext}
        >
          <span className="arrow right">Next</span>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
