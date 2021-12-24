import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import sortingReducer from '../features/sorting/sortingSlice';
import productListReducer from '../features/productList/productListSlice';
import brandsReducer from '../features/brands/brandsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    sortingOption: sortingReducer,
    productList: productListReducer,
    brands: brandsReducer,
  },
});

export default store;
