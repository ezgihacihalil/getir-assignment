import sortingReducer, { setSortingOption } from './sortingSlice';

describe('sorting reducer', () => {
  const initialState = {
    value: '',
  };

  it('should handle initial state', () => {
    expect(sortingReducer(undefined, { type: 'unknown' })).toEqual({
      value: '',
    });
  });

  it('should handle setSelectedType', () => {
    const actual = sortingReducer(initialState, setSortingOption('test'));

    expect(actual.value).toEqual('test');
  });
});
