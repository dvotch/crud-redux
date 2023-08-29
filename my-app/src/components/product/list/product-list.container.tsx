import React, { memo, FC, useState, useEffect } from 'react';
import { ProductModel } from '../../../models/product.model';
import { fetchProductsApi } from '../../../services/product-api.service';
import ProductList from '../list/product-list.component';
import { AxiosError } from 'axios';
import { useProducts } from '../../../hooks/products.hook';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchProducts } from '../../../store/reducers/setProductsAction';

type ProductListContainerProps = {};

const ProductListContainer = (props: ProductListContainerProps) => {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector(state => state.productReducer);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
            <ProductList products={products} />
        </>
    );
};
export default memo(ProductListContainer);
