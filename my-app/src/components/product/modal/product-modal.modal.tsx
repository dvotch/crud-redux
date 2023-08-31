import React, { memo } from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../assets/icons/cross.svg';
import { useAppDispatch } from '../../../hooks/redux';
import { store } from '../../../store/store';
import { productSlice } from '../../../store/product/product.slice';

interface ModalProps {
    children: React.ReactNode;
    title: string;
    onClick: React.MouseEventHandler<SVGSVGElement | HTMLDivElement>;
}

const ModalWrapper = styled.div`
    width: 40%;
    height: 40vh;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

const ModalTitle = styled.h1`
    position: relative;
    left: 12rem;
`;

const Modal = ({ children, title, onClick }: ModalProps) => {
    return (
        <ModalWrapper onClick={e => e.stopPropagation()}>
            <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <CloseIcon onClick={onClick} />
            </ModalHeader>

            <div>{children}</div>
        </ModalWrapper>
    );
};

export default memo(Modal);
