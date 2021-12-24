import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const tagListSlice = createSlice({
  name: 'tagList',
  initialState,
  reducers: {
    getTagList: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { getTagList } = tagListSlice.actions;

export const selectTagList = (state) => state.tagList.value;

export default tagListSlice.reducer;
