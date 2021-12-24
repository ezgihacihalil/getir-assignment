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
      // eslint-disable-next-line no-param-reassign
      state.searchKey = action.payload;
    },
    setSelectedBrands: (state, action) => {
      if (state.checkedBrands.includes(action.payload)) {
        const brands = state.checkedBrands.filter((slug) => slug !== action.payload);

        // eslint-disable-next-line no-param-reassign
        state.checkedBrands = brands;
      } else {
        state.checkedBrands.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        /* eslint-disable no-param-reassign */
        state.isLoading = false;

        state.list = action.payload;
        /* eslint-enable no-param-reassign */
      });
  },
});

export const { setBrandSearchKey, setSelectedBrands } = brandsSlice.actions;

export const selectBrandSearchKey = (state) => state.brands.searchKey;

export const selectCheckedBrands = (state) => state.brands.checkedBrands;

export const selectBrands = (state) => {
  const searchKey = selectBrandSearchKey(state);

  return state.brands.list.filter((item) => (
    item.name.toLowerCase().startsWith(searchKey.toLowerCase())
  ));
};

export default brandsSlice.reducer;
