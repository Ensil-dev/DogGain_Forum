import React from 'react';
import styled from 'styled-components';

interface DividerProps {
    $padding?: string;
    $border?: string;
    $opacity?: string;
}

const DividerContainer = styled.div<DividerProps>`
    padding: ${(props) => props.$padding || 'none'};
`;

const Divider = styled.hr<DividerProps>`
    border: ${(props) => props.$border || '2px solid gray'};
    opacity: ${(props) => props.$opacity || '0.15'};
`;

export default function UnifiedDivider({ $padding, $border, $opacity }: DividerProps): JSX.Element {
    return (
        <>
            <DividerContainer $padding={$padding}>
                <Divider $border={$border} opacity={$opacity} />
            </DividerContainer>
        </>
    );
}
