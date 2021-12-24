import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import fetcher from '../../services/fetcher';
import api from '../../services/api';

const initialState = {
  list: [],
  isLoading: false,
  searchKey: '',
  checkedBrands: [],
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
  reducers: {
    setBrandSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
    setSelectedBrands: (state, action) => {
      if (state.checkedBrands.includes(action.payload)) {
        const brands = state.checkedBrands.filter((slug) => slug !== action.payload);

        state.checkedBrands = brands;
      } else {
        state.checkedBrands.push(action.payload);
      }
    },
  },
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

export const { setBrandSearchKey, setSelectedBrands } = brandsSlice.actions;

export const selectBrandSearchKey = (state) => state.brands.searchKey;

export const selectCheckedBrands = (state) => state.brands.checkedBrands;

export const selectBrands = (state) => {
  const searchKey = selectBrandSearchKey(state);

  return state.brands.list.filter((item) => item.name.toLowerCase().startsWith(searchKey.toLowerCase()));
};

export default brandsSlice.reducer;
