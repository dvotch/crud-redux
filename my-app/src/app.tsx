import React from 'react';
import { Wrapper } from './assets/styles/lists.styles';
import ProductListContainer from './components/product/list/product-list.container';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
    return (
        <Provider store={store}>
            <Wrapper>
                <ProductListContainer />
            </Wrapper>
        </Provider>
    );
}

export default App;
