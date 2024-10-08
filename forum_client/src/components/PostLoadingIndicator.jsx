import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the animation for the spinner
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner
const Spinner = styled.div`
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${spin} 2s linear infinite;
`;

// Styled component for the container
const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
`;

function PostLoadingIndicator() {
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    );
}

export default PostLoadingIndicator;