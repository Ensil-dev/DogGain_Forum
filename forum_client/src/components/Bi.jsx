import React from 'react';
import styled from 'styled-components';
import UnifiedButton from './UnifiedButton';
import { useNavigate } from 'react-router-dom';


const BiContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    height: 60px;

    /* border: 3px solid gray; */
`;

export default function Bi() {

    const navigate = useNavigate()
    
    return (
        <BiContainer>
            <UnifiedButton text="DogGain" $onClick={() => navigate('/')}></UnifiedButton>
        </BiContainer>
    );
}
