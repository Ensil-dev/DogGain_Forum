import React from 'react';
import styled from 'styled-components';
import UnifiedButton from './UnifiedButton';

const BiContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    height: 40px;
    gap: 10px;

    /* border: 3px solid gray; */
`;

export default function Bi() {
    return (
        <BiContainer>
            <UnifiedButton text="DogGain"></UnifiedButton>
        </BiContainer>
    );
}
