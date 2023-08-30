import React, { memo } from 'react';
import styled from 'styled-components';

type ProductCreateButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CreateButton = styled.button`
    position: fixed;
    font-size: 3rem;
    right: 2rem;
    bottom: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: wheat;
    border: 2px solid white;
`;

const ProductCreateButton = ({ onClick }: ProductCreateButtonProps) => {
    return (
        <CreateButton type='submit' onClick={onClick}>
            +
        </CreateButton>
    );
};
export default memo(ProductCreateButton);
