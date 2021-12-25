import React from 'react';
import Header from './components/Header/Header';
import Cart from './features/cart/Cart';
import ProductList from './features/productList/ProductList';
import Sorting from './features/sorting/Sorting';
import Brands from './features/brands/Brands';
import TagList from './features/tagList/TagList';

import {
  Container, InnerContainer, Inner, Flexbox,
} from './styles';

function App() {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <Inner>
          <Flexbox>
            <Sorting />
            <Brands />
            <TagList />
          </Flexbox>
          <ProductList />
          <div>
            <Cart />
          </div>
        </Inner>
      </InnerContainer>
    </Container>
  );
}

export default App;
