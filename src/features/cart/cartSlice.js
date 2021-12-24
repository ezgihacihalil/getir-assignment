import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.list.push(action.payload);
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;

export const selectItems = (state) => state.cart.list;

export default cartSlice.reducer;
