import { createSlice } from '@reduxjs/toolkit';
import { selectProducts } from '../productList/productListSlice';

const initialState = {
  searchKey: '',
  checkedTags: [],
};

export const tagListSlice = createSlice({
  name: 'tagList',
  initialState,
  reducers: {
    setTagListSearchKey: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.searchKey = action.payload;
    },
    setSelectedTags: (state, action) => {
      if (state.checkedTags.includes(action.payload)) {
        const tags = state.checkedTags.filter((slug) => slug !== action.payload);

        // eslint-disable-next-line no-param-reassign
        state.checkedTags = tags;
      } else {
        state.checkedTags.push(action.payload);
      }
    },
  },
});

export const { setTagListSearchKey, setSelectedTags } = tagListSlice.actions;

export const selectTagList = (state) => {
  const productList = selectProducts(state);

  const tags = {};

  productList.forEach((product) => {
    product.tags.forEach((tag) => {
      if (tags[tag]) {
        tags[tag] += 1;
      } else {
        tags[tag] = 1;
      }
    });
  });

  return tags;
};

export const selectTagListSearchKey = (state) => state.tagList.searchKey;

export const selectCheckedTags = (state) => state.tagList.checkedKeys;

export const selectTags = (state) => {
  const searchKey = selectTagListSearchKey(state);
  const tagList = selectTagList(state);

  return Object.keys(tagList).filter((item) => (
    item.toLowerCase().startsWith(searchKey.toLowerCase())));
};

export default tagListSlice.reducer;
