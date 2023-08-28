import React, { useState } from 'react';
import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';
import { AxiosError } from 'axios';

export function useProducts() {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchProducts() {
        try {
            setProducts((await fetchProductsApi()).data);
        } catch (error) {
            const err = error as Error | AxiosError;
            setError('Something went wrong! Error: ' + err.name);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, error };
}
