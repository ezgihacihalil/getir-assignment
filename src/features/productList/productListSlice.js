import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import fetcher from '../../services/fetcher';
import api from '../../services/api';
import { selectCheckedBrands } from '../brands/brandsSlice';
import { selectSortingOption } from '../sorting/sortingSlice';
import { selectCheckedTags } from '../tagList/tagListSlice';
import { SORTING_OPTIONS } from '../../constants';

const initialState = {
  value: [],
  types: [],
  selectedType: '',
  isLoading: false,
};

export const fetchProducts = createAsyncThunk(
  'productList/fetchProducts',
  async () => {
    const { data } = await fetcher.get(api.items);

    return data.items;
  },
);

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        /* eslint-disable no-param-reassign */
        state.isLoading = false;

        state.value = action.payload;

        state.value.forEach((product) => {
          if (!state.types.includes(product.itemType)) {
            state.types.push(product.itemType);
          }
        });
        /* eslint-enable no-param-reassign */
      });
  },
});

export const { setSelectedType } = productListSlice.actions;

export const selectTypeFilter = (state) => state.productList.types;
export const selectChosenType = (state) => state.productList.selectedType;

export const selectProducts = (state) => {
  const checkedBrands = selectCheckedBrands(state);
  const selectedType = selectChosenType(state);
  const selectedSorting = selectSortingOption(state);
  const checkedTags = selectCheckedTags(state);

  let productList = state.productList.value;

  if (checkedBrands.length) {
    productList = productList.filter((item) => checkedBrands.includes(item.manufacturer));
  }

  if (checkedTags.length) {
    productList = productList.filter((item) => item.tags.every(t => checkedTags.includes(t)));
  }

  if (selectedType) {
    productList = productList.filter((item) => selectedType.includes(item.itemType));
  }

  if (selectedSorting) {
    const option = SORTING_OPTIONS.find(option => selectedSorting === option.value);

    productList = productList.slice().sort(option.sortFunction);
  }

  return productList;
};

export default productListSlice.reducer;
