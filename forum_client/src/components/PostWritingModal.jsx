import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { postWritingModalChange } from '../redux/constants/constant';
import PostWritingForm from './PostWritingForm';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 600px;
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
    width: 100vw;
    height: 100vh;
    position: fixed;
    bottom: 0;
    /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위한 flex */
    display: flex;
    justify-content: flex-start;

    @media screen and (min-width: 550px) {
        justify-content: center;
    }

    align-items: center;
`;

export const ModalBtn = styled.button`
    background-color: #4000c7;
    text-decoration: none;
    border: none;
    padding: 20px;
    color: #ffffff;
    border-radius: 30px;
    cursor: pointer;
`;

export const ModalView = styled.div.attrs((props) => ({
    role: 'dialog',
}))`
    display: flex;
    justify-content: center;
    /* align-items: center; */
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

    /* animation: ${({ $modalStore }) => ($modalStore ? showUp : showDown)} 0.5s; */
`;

export const PostWritingModal = () => {
    const modalStore = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const postWritingRef = useRef();
    useOnClickOutside(postWritingRef, () => {
        dispatch(postWritingModalChange());
    });

    let windowWidth = window.innerWidth;

    const handleWritingModal = () => {
        dispatch(postWritingModalChange());
    };

    return (
        <>
            {modalStore.isPostWritingModalOpen && (
                <ModalBackdrop>
                    <ModalView ref={postWritingRef} $width={windowWidth} $modalStore={modalStore}>
                        <PostWritingForm handleWritingModal={handleWritingModal} />
                    </ModalView>
                </ModalBackdrop>
            )}
        </>
    );
};
