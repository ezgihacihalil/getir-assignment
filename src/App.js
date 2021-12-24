import React from 'react';
import Header from './components/Header/Header';
import Cart from './features/cart/Cart';
import ProductList from './features/productList/ProductList';
import Sorting from './features/sorting/Sorting';
import Brands from './features/brands/Brands';
import TagList from './features/tagList/TagList';

import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.container}>
        <div className={styles.inner}>
          <div>
            <Sorting />
            <Brands />
            <TagList />
          </div>
          <ProductList />
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
