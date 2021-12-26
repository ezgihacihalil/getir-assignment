import React from 'react';

import { usePagination } from './usePagination';

import {
  PaginationList, ListItem, ArrowButton, PrevButton, PageNumber, NextButton, Image, ButtonWrapper,
} from './styles';
import arrowLeft from '../../assets/svg/arrow-left.svg';
import arrowRight from '../../assets/svg/arrow-right.svg';
import { DOTS } from '../../constants';

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
    <PaginationList>
      <ListItem>
        <ButtonWrapper
          role="button"
          tabIndex={0}
          onClick={onPrevious}
          onKeyPress={onPrevious}
          className={currentPage === 1 && 'is-disabled'}
        >
          <ArrowButton>
            <Image src={arrowLeft} alt="" />
            <PrevButton>Prev</PrevButton>
          </ArrowButton>
        </ButtonWrapper>
      </ListItem>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <ListItem>&#8230;</ListItem>;
        }

        return (
          <ListItem>
            <PageNumber
              className={pageNumber === currentPage && 'is-active'}
              role="button"
              tabIndex={0}
              onClick={() => onPageChange(pageNumber)}
              onKeyPress={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </PageNumber>
          </ListItem>
        );
      })}
      <ListItem>
        <ButtonWrapper
          role="button"
          tabIndex={0}
          onClick={onNext}
          onKeyPress={onNext}
          className={lastPage === currentPage && 'is-disabled'}
        >
          <ArrowButton>
            <NextButton>Next</NextButton>
            <Image src={arrowRight} alt="" />
          </ArrowButton>
        </ButtonWrapper>
      </ListItem>
    </PaginationList>
  );
};

export default Pagination;
