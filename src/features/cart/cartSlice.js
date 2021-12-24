import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const getCartItem = (list, payload) => (list.find((item) => item.slug === payload.slug));

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = getCartItem(state.list, action.payload);

      if (cartItem) {
        const newAmount = (cartItem.amount || 0) + 1;
        const newCartItem = { ...cartItem, amount: newAmount, price: cartItem.price * newAmount };
        const idx = state.list.findIndex((item) => item.slug === cartItem.slug);

        // eslint-disable-next-line no-param-reassign
        state.list[idx] = newCartItem;
      } else {
        state.list.push({ ...action.payload, amount: 1 });
      }
    },
    increment: (state, action) => {
      const cartItem = getCartItem(state.list, action.payload);

      const newAmount = (cartItem.amount || 0) + 1;
      const totalPrice = (cartItem.price || 0) * newAmount;

      const newCartItem = { ...cartItem, amount: newAmount, totalPrice };
      const idx = state.list.findIndex((item) => item.slug === cartItem.slug);

      // eslint-disable-next-line no-param-reassign
      state.list[idx] = newCartItem;
    },
    decrement: (state, action) => {
      const cartItem = getCartItem(state.list, action.payload);

      const newAmount = (cartItem.amount || 0) - 1;
      const idx = state.list.findIndex((item) => item.slug === cartItem.slug);

      if (newAmount === 0) {
        state.list.splice(idx, 1);
      } else {
        const totalPrice = (cartItem.price || 0) * newAmount;
        const newCartItem = { ...cartItem, amount: newAmount, totalPrice };

        // eslint-disable-next-line no-param-reassign
        state.list[idx] = newCartItem;
      }
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;

export const selectItems = (state) => state.cart.list;

export default cartSlice.reducer;
