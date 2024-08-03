import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const StyledSelect = styled.select`
    text-align: center;
    font-size: larger;
    padding: 4px 8px;
    margin-left: 5px;
    border-radius: 8px;
`;

export default function SelectedComponent({ options, ...props }) {
    return (
        <Container>
            <StyledSelect {...props}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </Container>
    );
}
