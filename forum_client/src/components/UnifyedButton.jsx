import styled from 'styled-components';

// Define a styled button that accepts transient props for styling
const UfButton = styled.button`
    border: ${(props) => props.$border || 'none'};
    outline: ${(props) => props.$outline || 'none'};
    background-color: ${(props) => props.$backgroundColor || 'inherit'};
    opacity: ${(props) => props.$opacity || 'inherit'};
    cursor: ${(props) => props.$cursor || 'pointer'};

    color: ${(props) => props.$color || 'brown'};
    font-size: ${(props) => props.$fontSize || 'larger'};
    font-weight: ${(props) => props.$fontWeight || 'bold'};

    margin-left: ${(props) => props.$marginLeft || '5px'};
    margin-right: ${(props) => props.$marginRight || '10px'};

    padding: ${(props) => props.$padding || 'none'};
    border-radius: ${(props) => props.$radius || '0px'};
`;

export default function UnifyedButton({ text, $border, $outline, $backgroundColor, $opacity, $cursor, $color, $fontSize, $fontWeight, $marginLeft, $marginRight, $padding, $radius }) {
    return (
        <UfButton
            $border={$border}
            $outline={$outline}
            $backgroundColor={$backgroundColor}
            $opacity={$opacity}
            $cursor={$cursor}
            $color={$color}
            $fontSize={$fontSize}
            $fontWeight={$fontWeight}
            $marginLeft={$marginLeft}
            $marginRight={$marginRight}
            $padding={$padding}
            $radius={$radius}
        >
            {text}
        </UfButton>
    );
}
