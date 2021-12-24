import { createSlice } from '@reduxjs/toolkit';
import { SORTING_OPTIONS } from '../../constants';

const initialState = {
  value: SORTING_OPTIONS[0].value,
};

export const sortingOptionSlice = createSlice({
  name: 'sortingOption',
  initialState,
  reducers: {
    setSortingOption: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
  },
});

export const { setSortingOption } = sortingOptionSlice.actions;

export const selectSortingOption = (state) => state.sortingOption.value;

export default sortingOptionSlice.reducer;
