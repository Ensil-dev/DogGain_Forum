import styled from 'styled-components';

interface StyledButtonProps {
    $border?: string;
    $outline?: string;
    $backgroundColor?: string;
    $opacity?: string | number;
    $cursor?: string;
    $color?: string;
    $fontSize?: string;
    $fontWeight?: string | number;
    $marginLeft?: string;
    $marginRight?: string;
    $padding?: string;
    $radius?: string;
}

// Define a styled button that accepts transient props for styling
const UfButton = styled.button<StyledButtonProps>`
    border: ${(props) => props.$border || 'none'};
    background-color: ${(props) => props.$backgroundColor || props.theme.buttonBackground};
    opacity: ${(props) => props.$opacity || 'inherit'};
    cursor: ${(props) => props.$cursor || 'pointer'};

    color: ${(props) => props.$color || props.theme.buttonTextColor};
    font-size: ${(props) => props.$fontSize || 'larger'};
    font-weight: ${(props) => props.$fontWeight || 'bold'};

    margin-left: ${(props) => props.$marginLeft || '5px'};
    margin-right: ${(props) => props.$marginRight || '0px'};

    padding: ${(props) => props.$padding || 'none'};
    border-radius: ${(props) => props.$radius || '0px'};
`;

interface UnifiedButtonProps extends StyledButtonProps {
    text: React.ReactNode;
    $onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function UnifiedButton({ text, $onClick, ...styleProps }: UnifiedButtonProps): JSX.Element {
    return (
        <UfButton {...styleProps} onClick={$onClick}>
            {text}
        </UfButton>
    );
}
