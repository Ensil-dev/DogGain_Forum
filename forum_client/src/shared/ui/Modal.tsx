import { useState } from 'react';
import styled from "styled-components";
import { UI } from '../config/constants/common';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid lightgray; */
  border-radius: 20px;
  height: ${UI.MODAL_HEIGHT};
  position: relative;
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
  role: "dialog"
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 200px;
  height: 100px;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.containerText};
  > .close-btn {
    position: absolute;
    top: 10px;
    cursor: pointer;
  }
`;

export const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView>
              <div className="close-btn">&times;</div>모달창
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
