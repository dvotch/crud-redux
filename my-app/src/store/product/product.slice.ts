import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../models/product.model';
import uuid from 'react-uuid';

interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
    modalStatus: boolean;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
    modalStatus: false,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productsFetching: state => {
            state.isLoading = true;
        },
        productsFetchingSuccess: (state, action: PayloadAction<IProduct[]>) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = '';
        },
        productsFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        modalStatusToggle: state => {
            state.modalStatus = !state.modalStatus;
        },
        createNewProduct: (state, action: PayloadAction<Partial<IProduct>>) => {
            const emptyProduct: IProduct = {
                id: uuid(),
                title: 'none',
                description: 'none',
                price: 0,
                category: 'none',
            };
            state.products.unshift({ ...emptyProduct, ...action.payload });
        },
    },
});

export default productSlice.reducer;
