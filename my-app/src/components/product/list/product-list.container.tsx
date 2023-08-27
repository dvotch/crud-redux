import React, { memo, FC, useState } from 'react';
import { ProductModel } from '../../../models/product.model';
import { fetchProductsApi } from '../../../services/product-api.service';
import ProductList from '../list/product-list.component';

type ProductListContainerProps = {};

const ProductListContainer = (props: ProductListContainerProps) => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    async function fetchProducts() {
        setProducts((await fetchProductsApi()).data);
    }

    React.useEffect(() => {
        fetchProducts();
    }, []);

    return <ProductList products={products} />;
};
export default memo(ProductListContainer);
