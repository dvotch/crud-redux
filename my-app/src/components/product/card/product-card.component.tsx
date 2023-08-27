import React, { memo, FC } from 'react';
import { ProductModel } from '../../../models/product.model';
import styled from 'styled-components';

type ProductCardProps = ProductModel;

const ProductCardStyle = styled.div`
    width: 30rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductImage = styled.img`
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
    /* mix-blend-mode: multiply; */
`;

const ImgageContainer = styled.div`
    width: 8rem;
    height: 4rem;
`;

const TextContainer = styled.div`
    width: 20rem;
`;

const ProductCard = (props: ProductCardProps) => {
    return (
        <ProductCardStyle>
            <ImgageContainer>
                <ProductImage src={props.image} alt='' />
            </ImgageContainer>
            <TextContainer>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </TextContainer>
        </ProductCardStyle>
    );
};
export default memo(ProductCard);
