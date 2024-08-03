import React from 'react';
import styled from 'styled-components';

// Define a styled image that accepts transient props for styling

const StyledImage = styled.img`
    width: ${(props) => props.$width || 'auto'};
    height: ${(props) => props.$height || 'auto'};
    border: ${(props) => props.$border || 'none'};
    border-radius: ${(props) => props.$borderRadius || '0'};
    object-fit: ${(props) => props.$objectFit || 'cover'};
    box-shadow: ${(props) => props.$boxShadow || 'none'};
    margin: ${(props) => props.$margin || '0'};
    padding: ${(props) => props.$padding || '0'};
    display: ${(props) => props.$display || 'block'};
`;

// UnifiedImage component

export default function UnifiedImage({ src, alt, $width, $height, $border, $borderRadius, $objectFit, $boxShadow, $margin, $padding, $display }) {
    return (
        <StyledImage
            src={src}
            alt={alt}
            $width={$width}
            $height={$height}
            $border={$border}
            $borderRadius={$borderRadius}
            $objectFit={$objectFit}
            $boxShadow={$boxShadow}
            $margin={$margin}
            $padding={$padding}
            $display={$display}
        />
    );
}
