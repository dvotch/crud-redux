import React, { memo } from 'react';
import styled from 'styled-components';

type TextInputProps = {
    placeholder: string;
    id?: string;
};

const TextInputStyle = styled.input`
    width: 20rem;
    height: 2rem;
    border: 2px solid;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const TextInput = ({ placeholder, id }: TextInputProps) => {
    return <TextInputStyle id={id} type='text' placeholder={placeholder} />;
};
export default memo(TextInput);
