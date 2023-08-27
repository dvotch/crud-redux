import React, { memo } from 'react';
import { ProductModel } from '../../../models/product.model';
import ProductCardComponent from '../card/product-card.component';
import styled from 'styled-components';

type ProductListProps = { products: ProductModel[] };

export const ProductsList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    row-gap: 2rem;
    justify-content: space-around;
    display: flex;
    padding: 0;
`;

export const ProductItem = styled.li`
    background-color: #fff;
    border: 2px solid #574e31;
`;

const ProductList = (products: ProductListProps) => {
    return (
        <ProductsList>
            {products.products.map(elem => {
                return (
                    <ProductItem key={elem.id}>
                        <ProductCardComponent {...elem} />
                    </ProductItem>
                );
            })}
        </ProductsList>
    );
};
export default memo(ProductList);
