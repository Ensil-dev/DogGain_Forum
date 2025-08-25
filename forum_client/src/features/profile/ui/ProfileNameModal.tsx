import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from 'firebase/auth';
import useOnClickOutside from '../../../shared/lib/hooks/useOnClickOutside';
import { auth } from '../../../shared/api/firebase';
import { saveLoginUser } from '../../../app/model/user/userInfo';
import { UI } from '../../../shared/config/constants/common';
import AlertModal from '../../../shared/ui/AlertModal';
import type { RootState, AppDispatch } from '../../../app/model/store';

const ModalBackdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.containerText};
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 400px;
`;

const Input = styled.input`
    padding: 8px;
    font-size: medium;
`;

const Button = styled.button`
    padding: 8px;
    background-color: ${UI.COLOR_PRIMARY_GRAY};
    color: #ffffff;
    border: none;
    cursor: pointer;
`;

interface ProfileNameModalProps {
    onClose: () => void;
}

export default function ProfileNameModal({ onClose }: ProfileNameModalProps) {
    const loginUser = useSelector((state: RootState) => state.userInfo.loginUser);
    const dispatch = useDispatch<AppDispatch>();
    const [name, setName] = useState(loginUser ? loginUser.displayName.split(' ')[0] : '');
    const ref = useRef<HTMLDivElement>(null);
    const [modalMessage, setModalMessage] = useState('');

    useOnClickOutside(ref, onClose);

    const showModal = (msg: string) => {
        setModalMessage(msg);
    };

    const handleSubmit = async () => {
        const trimmed = name.trim();
        if (trimmed.length < 2 || trimmed.length > 10) {
            showModal('프로필 이름은 2글자 이상 10글자 이하여야 합니다.');
            return;
        }
        try {
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { displayName: trimmed });
                dispatch(saveLoginUser(auth.currentUser));
                onClose();
            }
        } catch (err) {
            console.error(err);
            showModal('프로필 이름 변경에 실패했습니다.');
        }
    };

    return (
        <ModalBackdrop>
            <ModalView ref={ref}>
                <p>현재 닉네임: {loginUser.displayName.split(' ')[0]}</p>
                <Input
                    autoFocus
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder='새 프로필 이름'
                />
                <Button onClick={handleSubmit}>변경</Button>
            </ModalView>
            {modalMessage && (
                <AlertModal
                    message={modalMessage}
                    onClose={() => setModalMessage('')}
                />
            )}
        </ModalBackdrop>
    );
}
