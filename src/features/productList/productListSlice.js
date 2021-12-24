import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import fetcher from '../../services/fetcher';
import api from '../../services/api';
import { selectCheckedBrands } from '../brands/brandsSlice';

const initialState = {
  value: [],
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

export const selectTypeFilter = (state) => state.productList.types;

export const selectProducts = (state) => {
  const checkedBrands = selectCheckedBrands(state);

  if (checkedBrands.length) {
    return state.productList.value.filter((item) => checkedBrands.includes(item.manufacturer));
  }

  return state.productList.value;
};

export default productListSlice.reducer;
