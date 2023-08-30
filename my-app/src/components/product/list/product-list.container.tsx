import React, { memo, FC, useState, useEffect } from 'react';
import { ProductModel } from '../../../models/product.model';
import { fetchProductsApi } from '../../../services/product-api.service';
import ProductList from '../list/product-list.component';
import { AxiosError } from 'axios';
import { useProducts } from '../../../hooks/products.hook';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchProducts } from '../../../store/reducers/setProductsAction';
import ProductCreateButton from '../create/product-create.button';
import ProductCreationContainer from '../create/product-creation.container';
import { productSlice } from '../../../store/product/product.slice';

type ProductListContainerProps = {};

const ProductListContainer = (props: ProductListContainerProps) => {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector(state => state.productReducer);

    const handleClick = React.useCallback(() => {
        dispatch(productSlice.actions.modalStatusToggle());
    }, []);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
            <ProductList products={products} />
            <ProductCreateButton onClick={handleClick} />
            <ProductCreationContainer children={<div></div>} onClick={handleClick} />
        </div>
    );
};
export default memo(ProductListContainer);
