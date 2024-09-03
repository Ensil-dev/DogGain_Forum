// import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 600px;
    position: relative;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalBackdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;

    height: 100vh;
    position: fixed;
    bottom: 0;

    /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위한 flex */
    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalBtn = styled.button`
    background-color: #4000c7;
    text-decoration: none;
    border: none;
    padding: 20px;
    color: white;
    border-radius: 30px;
    cursor: pointer;
`;

export const ModalView = styled.div.attrs((props) => ({
    role: 'dialog',
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 200px;
    height: 100px;
    border-radius: 1rem;
    background-color: white;
    > .close-btn {
        position: absolute;
        top: 10px;
        cursor: pointer;
    }
`;

export const HamburgerMenu = ({ handleHamburgerMenuModal }) => {
    return (
        <>
            <GiHamburgerMenu style={{ width: '24px', height: '24px', color: 'lightgray', marginRight: '5px', cursor: 'pointer' }} onClick={() => handleHamburgerMenuModal()} />
        </>
    );
};
