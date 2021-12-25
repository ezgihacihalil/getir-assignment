import brandsReducer, {
  selectBrands,
  selectBrandSearchKey,
  setBrandSearchKey,
  setSelectedBrands,
} from './brandsSlice';

describe('brands reducer', () => {
  const initialState = {
    list: [],
    isLoading: false,
    searchKey: 'aa',
    checkedBrands: [],
  };

  it('should handle initial state', () => {
    expect(brandsReducer(undefined, { type: 'unknown' })).toEqual({
      list: [],
      isLoading: false,
      searchKey: '',
      checkedBrands: [],
    });
  });

  it('should handle setBrandSearchKey', () => {
    const actual = brandsReducer(initialState, setBrandSearchKey('test'));
    expect(actual.searchKey).toEqual('test');
  });

  it('should handle setSelectedBrands', () => {
    const actual = brandsReducer(initialState, setSelectedBrands('test brand'));
    expect(actual.checkedBrands).toEqual(['test brand']);

    const newState = brandsReducer(actual, setSelectedBrands('test brand'));
    expect(newState.checkedBrands).toEqual([]);
  });

  it('should handle setBrandSearchKey', () => {
    const actual = brandsReducer(initialState, setBrandSearchKey('test'));
    expect(actual.searchKey).toEqual('test');
  });

  test('should handle selectBrands', () => {
    const result = selectBrands({ brands: { list: [{ name: 'test brand' }], searchKey: 'aa' } });

    expect(result).toEqual([]);

    expect(result).toMatchSnapshot();
  })

  it('should handle selectBrandSearchKey', () => {
    const result = selectBrandSearchKey({ brands: { searchKey: 'test' } });

    expect(result).toMatchSnapshot();
  });
});
