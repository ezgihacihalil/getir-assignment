import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import fetcher from '../../services/fetcher';
import api from '../../services/api';

const initialState = {
  value: [],
  tags: {},
  types: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;

        state.value = action.payload;

        state.value.forEach((product) => {
          product.tags.forEach((tag) => {
            if (state.tags[tag]) {
              state.tags[tag] += 1;
            } else {
              state.tags[tag] = 1;
            }
          });

          if (!state.types.includes(product.itemType)) {
            state.types.push(product.itemType);
          }
        });
      });
  },
});

export const selectProducts = (state) => state.productList.value;
export const selectTagList = (state) => state.productList.tags;
export const selectTypeFilter = (state) => state.productList.types;

export default productListSlice.reducer;
