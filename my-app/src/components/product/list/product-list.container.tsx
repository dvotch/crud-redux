import React, { memo, FC, useState } from 'react';
import { ProductModel } from '../../../models/product.model';
import { fetchProductsApi } from '../../../services/product-api.service';
import ProductList from '../list/product-list.component';
import { useProducts } from '../../../hooks/products.hook';

type ProductListContainerProps = {};

const ProductListContainer = (props: ProductListContainerProps) => {
    const { products, loading, error } = useProducts();

    if (error !== '') return <div>{error}</div>;
    return <ProductList products={products} />;
};
export default memo(ProductListContainer);
