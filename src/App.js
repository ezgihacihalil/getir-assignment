import React from 'react';
import Header from './components/Header/Header';
import Cart from './features/cart/Cart';
import ProductList from './features/productList/ProductList';
import Sorting from './features/sorting/Sorting';
import Brands from './features/brands/Brands';
import TagList from './features/tagList/TagList';

import {
  Container, InnerContainer, ContentBody, Filters, Filter,
} from './styles';

function App() {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <ContentBody>
          <Filters>
            <Filter>
              <Sorting />
            </Filter>
            <Filter>
              <Brands />
            </Filter>
            <Filter>
              <TagList />
            </Filter>
          </Filters>
          <ProductList />
          <Cart />
        </ContentBody>
      </InnerContainer>
    </Container>
  );
}

export default App;
