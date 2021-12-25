import { usePagination, range } from './usePagination';

describe('usePagination.usePagination', () => {
 it('range function should return all numbers between start and end', () => {
    const result = range(0, 10);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('range function should return just one value if start and end are the same', () => {
    const result = range(-100, -100);
    expect(result).toEqual([-100]);
  });

  it('usePagination should return one dots when there are more than 6 pages and at the first page', () => {
    const result = usePagination({ totalCount: 1000, pageSize: 32, currentPage: 1 });
    expect(result).toEqual([1, 2, 3, 4, '...', 32]);
  });

  it('usePagination shouldn not return dots when there are less than 6 pages and at the first page', () => {
    const result = usePagination({ totalCount: 300, pageSize: 256, currentPage: 1 });
    expect(result).toEqual([1, 2]);
  });

  it('usePagination should return two dots when there are more than 6 pages and at the middle pages', () => {
    const result = usePagination({ totalCount: 1000, pageSize: 32, currentPage: 5 });
    expect(result).toEqual([1, '...', 4, 5, 6, '...', 32]);
  });
});
