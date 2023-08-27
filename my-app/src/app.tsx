import React from 'react';
import { productListData } from './data/product.data';
import { ProductModel } from './models/product.model';
import ProductCardComponent from './components/product/card/product-card.component';
import { Wrapper } from './assets/styles/lists.styles';
import ProductListContainer from './components/product/list/product-list.container';

function App() {
    return (
        <Wrapper>
            <ProductListContainer />
        </Wrapper>
    );
}

export default App;
