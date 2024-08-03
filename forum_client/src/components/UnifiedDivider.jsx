import React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.div`
    padding: ${(props) => props.$padding || 'none'};
`;

const Divider = styled.hr`
    border: ${(props) => props.$border || '2px solid gray'};
    opacity: ${(props) => props.$opacity || '0.15'};
`;

export default function UnifiedDivider({ $padding, $border, $opacity }) {
    return (
        <>
            <DividerContainer $padding={$padding}>
                <Divider $border={$border} opacity={$opacity} />
            </DividerContainer>
        </>
    );
}
