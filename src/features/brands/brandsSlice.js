import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import fetcher from '../../services/fetcher';
import api from '../../services/api';

const initialState = {
  list: [],
  isLoading: false,
};

export const fetchBrands = createAsyncThunk(
  'brands/fetchBrands',
  async () => {
    const { data } = await fetcher.get(api.companies);

    return data.companies;
  },
);

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;

        state.list = action.payload;
      });
  },
});

export const selectBrands = (state) => state.brands.list;

export default brandsSlice.reducer;
