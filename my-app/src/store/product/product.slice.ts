import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../models/product.model';

interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
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
    },
});

export default productSlice.reducer;
