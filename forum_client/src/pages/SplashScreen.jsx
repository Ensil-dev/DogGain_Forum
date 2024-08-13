import React from 'react';
import styled from 'styled-components';
import { PUBLIC_URL } from '../api/api';

const SplashContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #282c34;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure it covers everything */
`;

export default function SplashScreen() {
    return (
        <SplashContainer>
            <img src={PUBLIC_URL + '/logo512.png'} alt="no img" />
        </SplashContainer>
    );
}
