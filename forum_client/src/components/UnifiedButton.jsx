import styled from 'styled-components';

// Define a styled button that accepts transient props for styling
const UfButton = styled.button`
    border: ${(props) => props.$border || 'none'};
    background-color: ${(props) => props.$backgroundColor || 'white'};
    opacity: ${(props) => props.$opacity || 'inherit'};
    cursor: ${(props) => props.$cursor || 'pointer'};

    color: ${(props) => props.$color || 'brown'};
    font-size: ${(props) => props.$fontSize || 'larger'};
    font-weight: ${(props) => props.$fontWeight || 'bold'};

    margin-left: ${(props) => props.$marginLeft || '5px'};
    margin-right: ${(props) => props.$marginRight || '0px'};

    padding: ${(props) => props.$padding || 'none'};
    border-radius: ${(props) => props.$radius || '0px'};
`;

export default function UnifiedButton({ text, $border, $outline, $backgroundColor, $opacity, $cursor, $color, $fontSize, $fontWeight, $marginLeft, $marginRight, $padding, $radius, $onClick }) {
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
            onClick={$onClick}
        >
            {text}
        </UfButton>
    );
}
