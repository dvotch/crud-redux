import React, { memo } from 'react';
import styled from 'styled-components';

type ProductDescriptionProps = {
    text: string;
    maxLength?: number;
};

const MAX_LENGTH = 150;

const DescriptionText = styled.p`
    margin: 0;
    overflow-y: auto;
    height: 12rem;
    color: yellow;
`;

const DescriptionButton = styled.button`
    padding: 0.5rem;
    background-color: wheat;
    border-radius: 15%;
    margin-top: 0.5rem;
    cursor: pointer;
`;

const ProductDescription = ({ text, maxLength = MAX_LENGTH }: ProductDescriptionProps) => {
    const initialText = React.useMemo(() => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }, []);
    
    const [showAllButtonStatus, setshowAllButtonStatus] = React.useState(false);
    const [visibleText, setVisibleText] = React.useState(initialText);

    const handleClick = React.useCallback(() => {
        setshowAllButtonStatus(state => !state);
        setVisibleText(showAllButtonStatus ? initialText : text);
    }, [showAllButtonStatus]);

    if (text.length > maxLength) {
        return (
            <div>
                <DescriptionText>{visibleText}</DescriptionText>
                <DescriptionButton type='button' onClick={handleClick}>
                    {showAllButtonStatus ? 'Hide Details' : 'Show All'}
                </DescriptionButton>
            </div>
        );
    } else {
        return (
            <div>
                <DescriptionText>{text}</DescriptionText>
            </div>
        );
    }
};
export default memo(ProductDescription);
