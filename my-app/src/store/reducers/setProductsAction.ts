import axios, { AxiosError } from 'axios';
import { AppDispatch, RootState } from '../store';
import { IProduct } from '../../models/product.model';
import { PRODUCTS_URL } from '../../constants/api.constants';
import { productSlice } from '../product/product.slice';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
    console.log(1);
    try {
        dispatch(productSlice.actions.productsFetching());
        const response = await axios.get<IProduct[]>(PRODUCTS_URL);
        dispatch(productSlice.actions.productsFetchingSuccess(response.data));
    } catch (e) {
        const error = e as Error | AxiosError;
        dispatch(productSlice.actions.productsFetchingError(error.message));
    }
};
