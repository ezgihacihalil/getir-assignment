import React from 'react';
import Header from './components/Header/Header';
import Cart from './features/cart/Cart';
import ProductList from './features/productList/ProductList';
import Sorting from './features/sorting/Sorting';
import Brands from './features/brands/Brands';
import TagList from './features/tagList/TagList';
import Flexbox from './components/Flexbox/Flexbox';

import {
  Container, InnerContainer, ContentBody,
} from './styles';

function App() {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <ContentBody>
          <Flexbox direction="column">
            <Sorting />
            <Brands />
            <TagList />
          </Flexbox>
          <ProductList />
          <Cart />
        </ContentBody>
      </InnerContainer>
    </Container>
  );
}

export default App;
