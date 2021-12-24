import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import fetcher from '../../services/fetcher';
import api from '../../services/api';

const initialState = {
  value: [],
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
      });
  },
});

export const selectProducts = (state) => state.productList.value;

export default productListSlice.reducer;
