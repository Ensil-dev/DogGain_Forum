import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

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
    justify-content: flex-start;
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
    width: ${(props) => `${props.$width}px` || '330px'};
    height: 100vh;
    /* border-radius: 1rem; */
    background-color: white;
    > .close-btn {
        position: absolute;
        top: 10px;
        cursor: pointer;
    }

    animation: ${fadeIn} 2.3s step-start;
`;

export const ModalViewExcludeView = styled.div.attrs((props) => ({
    role: 'exclude_area',
}))`
    width: ${(props) => `${props.$width}px` || '500px'};
    height: 100vh;
    background-color: orange;
`;

export const HamburgerMenuModal = () => {
    const modalStore = useSelector((state) => state).modal;

    const dispatch = useDispatch();

    const handleHamburgerMenuModal = () => {
        dispatch({ type: 'HAMBURGER_MODAL_CHANGE' });
        console.log(`modalStore.isHamburgerModalOpen: ${modalStore.isHamburgerModalOpen}`);
    };

    const windowWidth = window.innerWidth;

    return (
        <>
            {modalStore.isHamburgerModalOpen ? (
                // <ModalBackdrop onClick={handleHamburgerMenuModal}>
                <ModalBackdrop>
                    <ModalView $width={windowWidth - 60}>
                        <div className='close-btn' onClick={handleHamburgerMenuModal}>
                            &times;
                        </div>
                        메뉴
                    </ModalView>
                    <ModalViewExcludeView />
                </ModalBackdrop>
            ) : null}
        </>
    );
};
