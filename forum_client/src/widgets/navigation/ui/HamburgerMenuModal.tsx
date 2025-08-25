import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import useOnClickOutside from '../../../shared/lib/hooks/useOnClickOutside';
import { UI } from '../../../shared/config/constants/common';
import type { RootState, AppDispatch } from '../../../app/model/store';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: ${UI.MODAL_HEIGHT};
    position: relative;
`;

// Define showUp animation
const showUp = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Define showDown animation
const showDown = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const ModalBackdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    position: fixed;
    bottom: 0;
    
    /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위한 flex */
    display: flex;
    justify-content: flex-start;

    align-items: center;
`;

export const ModalBtn = styled.button`
    background-color: ${UI.COLOR_ACCENT_PURPLE};
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
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.containerText};
    > .close-btn {
        position: absolute;
        top: 10px;
        cursor: pointer;
    }

    animation: ${({ $modalStore }) => ($modalStore ? showUp : showDown)} 0.5s;
`;

export const HamburgerMenuModal = () => {
    const modalStore = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch<AppDispatch>();

    const hamburgerRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(hamburgerRef, () => {
        dispatch({ type: 'HAMBURGER_MODAL_CHANGE' });
    });

    let windowWidth = window.innerWidth;

    if (windowWidth >= 550) {
        windowWidth = 550 + 230;
    }

    return (
        <>
            {modalStore.isHamburgerModalOpen && (
                <ModalBackdrop>
                    <ModalView ref={hamburgerRef} $width={windowWidth - 130} $modalStore={modalStore}>
                        <div>사이드바 메뉴</div>
                    </ModalView>
                </ModalBackdrop>
            )}
        </>
    );
};
