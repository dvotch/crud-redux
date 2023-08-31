import axios, { AxiosResponse } from 'axios';
import { IProduct } from '../models/product.model';
import { PRODUCTS_URL } from '../constants/api.constants';
import { useAppDispatch } from '../hooks/redux';
import { productSlice } from '../store/product/product.slice';
import { AppDispatch } from '../store/store';

export const fetchProductsApi = (): Promise<AxiosResponse<IProduct[]>> => {
    return axios.get<IProduct[]>(PRODUCTS_URL);
};

export const createProductApi = (product: Partial<IProduct>) => (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.createNewProduct(product));
};
