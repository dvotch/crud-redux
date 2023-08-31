import React, { memo, FC } from 'react';
import { IProduct } from '../../../models/product.model';
import styled from 'styled-components';
import ProductCardDescription from './product-card.description';

type ProductCardProps = IProduct;

const ProductCardStyle = styled.div`
    width: 30rem;
    height: 23rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
`;

const ProductTitle = styled.h4`
    margin: 0;
`;

const ProductImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
`;

const ImgageContainer = styled.div`
    width: 10rem;
    height: 10rem;
`;

const ProductPrice = styled.p`
    font-size: 1.5rem;
    margin: 0;
`;

const TextContainer = styled.div`
    width: 20rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
`;

const ProductCard = (props: ProductCardProps) => {
    return (
        <ProductCardStyle>
            <ImgageContainer>
                <ProductImage src={props.image} alt='' />
            </ImgageContainer>
            <TextContainer>
                <ProductTitle>{props.title}</ProductTitle>
                <ProductCardDescription text={props.description} maxLength={10} />
                <ProductPrice>{props.price} $</ProductPrice>
            </TextContainer>
        </ProductCardStyle>
    );
};
export default memo(ProductCard);
