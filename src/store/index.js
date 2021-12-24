import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import sortingReducer from '../features/sorting/sortingSlice';
import productListReducer from '../features/productList/productListSlice';
import brandsReducer from '../features/brands/brandsSlice';
import tagListReducer from '../features/tagList/tagListSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    sortingOption: sortingReducer,
    productList: productListReducer,
    brands: brandsReducer,
    tagList: tagListReducer,
  },
});

export default store;
