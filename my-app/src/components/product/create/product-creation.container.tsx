import React, { memo } from 'react';
import ProductModal from '../modal/product-modal.modal';
import styled from 'styled-components';
import { Wrapper } from '../../../assets/styles/lists.styles';
import { useAppSelector } from '../../../hooks/redux';

type ProductCreateContainerProps = {
    children: React.ReactNode;
    onClose: React.MouseEventHandler<HTMLDivElement>;
};

const ModalContainer = styled.div<{ $visible?: boolean }>`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: gray;
    left: 0;
    top: 0;
    opacity: ${props => (props.$visible ? '0.96' : '0')};
    z-index: 3;
    transition: 0.5s;
    pointer-events: ${props => (props.$visible ? 'visible' : 'none')};
`;
function ProductCreateContainer({ children, onClose }: ProductCreateContainerProps) {
    const { modalStatus } = useAppSelector(state => state.productReducer);
    return (
        <ModalContainer $visible={modalStatus} onClick={onClose}>
            <ProductModal children={children} title='Create products' onClick={onClose} />
        </ModalContainer>
    );
}
export default memo(ProductCreateContainer);
