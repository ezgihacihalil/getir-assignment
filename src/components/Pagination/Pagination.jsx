import React from 'react';

import { usePagination, DOTS } from './usePagination';

import {
  PaginationList, ListItem, ArrowLeft, ArrowRight,
} from './styles';

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

  // const lastPage = paginationRange[paginationRange.length - 1];

  // className={classnames('pagination-container', { [className]: className })}
  return (
    <PaginationList>
      <ListItem>
        <button
          type="button"
          tabIndex={0}
          onClick={onPrevious}
          onKeyPress={onPrevious}
        >
          <ArrowLeft>Prev</ArrowLeft>
        </button>
      </ListItem>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <ListItem>&#8230;</ListItem>;
        }

        return (
          <ListItem>
            <button
              type="button"
              tabIndex={0}
              onClick={() => onPageChange(pageNumber)}
              onKeyPress={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </ListItem>
        );
      })}
      <ListItem>
        <button
          type="button"
          tabIndex={0}
          onClick={onNext}
          onKeyPress={onNext}
        >
          <ArrowRight>Next</ArrowRight>
        </button>
      </ListItem>
    </PaginationList>
  );
};

export default Pagination;
