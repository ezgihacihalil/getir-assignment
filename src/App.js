import React from 'react';
import Header from './components/Header/Header';
import Cart from './features/cart/Cart';
import ProductList from './features/productList/ProductList';
import Sorting from './features/sorting/Sorting';
import Brands from './features/brands/Brands';

import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.container}>
        <div>
          <Sorting />
          <Brands />
        </div>
        <div>
          <ProductList />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
