import productListReducer, { fetchProducts, selectProducts, setSelectedType } from './productListSlice';

describe('productList reducer', () => {
  const initialState = {
    value: [],
    types: [],
    allProducts: [],
    selectedType: '',
    isLoading: false,
  };

  it('should handle initial state', () => {
    expect(productListReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
      types: [],
      allProducts: [],
      selectedType: '',
      isLoading: false,
    });
  });

  it('should handle setSelectedType', () => {
    const actual = productListReducer(initialState, setSelectedType('test'));

    expect(actual.selectedType).toEqual('test');
  });

  it('should handle selectProducts with one filter', () => {
    const result = selectProducts({
      productList: { value: [{ slug: 'test', manufacturer: 'test-manu', tags: ['tag2'] }, { slug: 'test2', manufacturer: 'test-manu2', tags: ['tag3'] }] },
      tagList: { checkedTags: ['tag1', 'tag2'] },
      brands: { checkedBrands: [] },
      sortingOption: { value: '' },
    });

    expect(result).toEqual([{ slug: 'test', manufacturer: 'test-manu', tags: ['tag2'] }]);
  });

  it('should handle selectProducts with two filters', () => {
    const result = selectProducts({
      productList: { value: [{ slug: 'test', manufacturer: 'test-manu', tags: ['tag1'] }, { slug: 'test2', manufacturer: 'test-manu', tags: ['tag2'] }] },
      tagList: { checkedTags: ['tag1', 'tag2'] },
      brands: { checkedBrands: ['test-manu'] },
      sortingOption: { value: '' },
    });

    expect(result).toEqual([{ slug: 'test', manufacturer: 'test-manu', tags: ['tag1'] }, { slug: 'test2', manufacturer: 'test-manu', tags: ['tag2'] }]);
  });

  it('should handle fetchProducts', () => {
    const action = {
      type: fetchProducts.fulfilled.type,
      payload: [{
        itemType: 'test-type', slug: 'test', manufacturer: 'test-manu', tags: ['tag1'],
      }],
    };
    const state = productListReducer(initialState, action);

    expect(state).toEqual({
      allProducts: [{
        itemType: 'test-type', manufacturer: 'test-manu', slug: 'test', tags: ['tag1'],
      }],
      isLoading: false,
      selectedType: '',
      types: ['test-type'],
      value: [{
        itemType: 'test-type', manufacturer: 'test-manu', slug: 'test', tags: ['tag1'],
      }],
    });
  });
});
