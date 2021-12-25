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

  const tags = [];

  productList.forEach((product) => {
    product.tags.forEach((tag) => {
      const idx = tags.findIndex((t) => t.name === tag);

      if (tags[idx]) {
        const newTag = { name: tag, count: tags[idx].count + 1 };

        tags[idx] = newTag;
      } else {
        const newTag = { name: tag, count: 1 };

        tags.push(newTag);
      }
    });
  });

  return tags;
};

export const selectTagListSearchKey = (state) => state.tagList.searchKey;

export const selectCheckedTags = (state) => state.tagList.checkedTags;

export const selectTags = (state) => {
  const searchKey = selectTagListSearchKey(state);
  const tagList = selectTagList(state);

  if (searchKey) {
    return tagList.filter((item) => (
      item.name.toLowerCase().startsWith(searchKey.toLowerCase())));
  }
  return tagList;
};

export default tagListSlice.reducer;
