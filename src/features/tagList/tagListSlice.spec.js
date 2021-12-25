import tagListReducer, {
  selectTagList, selectTags, setSelectedTags, setTagListSearchKey,
} from './tagListSlice';

describe('tagList reducer', () => {
  const initialState = {
    searchKey: '',
    checkedTags: [],
  };

  it('should handle initial state', () => {
    expect(tagListReducer(undefined, { type: 'unknown' })).toEqual({
      searchKey: '',
      checkedTags: [],
    });
  });

  it('should handle setTagListSearchKey', () => {
    const actual = tagListReducer(initialState, setTagListSearchKey('test'));

    expect(actual.searchKey).toEqual('test');
  });

  it('should handle setSelectedTags', () => {
    const actual = tagListReducer(initialState, setSelectedTags('test'));

    expect(actual.checkedTags).toEqual(['test']);
  });

  it('should handle selectTagList', () => {
    const result = selectTagList({
      productList: { allProducts: [{ slug: 'test', manufacturer: 'test-manu', tags: ['tag2'] }, { slug: 'test2', manufacturer: 'test-manu2', tags: ['tag2', 'tag3'] }] },
      tagList: { checkedTags: ['tag1', 'tag2'] },
      brands: { checkedBrands: [] },
      sortingOption: { value: '' },
    });

    expect(result).toEqual([{ name: 'tag2', count: 2 }, { name: 'tag3', count: 1 }]);
  });

  it('should handle selectTags', () => {
    const result = selectTags({
      productList: { allProducts: [{ slug: 'test', manufacturer: 'test-manu', tags: ['tag2'] }, { slug: 'test2', manufacturer: 'test-manu2', tags: ['tag2', 'tag3'] }] },
      tagList: { searchKey: 'aa', checkedTags: [] },
      brands: { checkedBrands: [] },
      sortingOption: { value: '' },
    });

    expect(result).toEqual([]);
  });
});
