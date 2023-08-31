import React, { memo } from 'react';
import styled from 'styled-components';

type ButtonProps = {
    text: string;
};

const ButtonStyle = styled.button`
    width: 8rem;
    height: 2rem;
    background-color: wheat;
    cursor: pointer;
`;

const Button = ({ text }: ButtonProps) => {
    return <ButtonStyle>{text}</ButtonStyle>;
};
export default memo(Button);
