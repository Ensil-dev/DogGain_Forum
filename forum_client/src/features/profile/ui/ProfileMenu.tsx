import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAdminUser } from '../../../shared/lib/utils/admin';
import type { RootState } from '../../../app/model/store';

import useOnClickOutside from '../../../shared/lib/hooks/useOnClickOutside';
import { UI } from '../../../shared/config/constants/common';

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
    z-index: ${UI.Z_INDEX_MENU};
`;

const ModalView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.containerText};
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: ${UI.MODAL_MAX_WIDTH};
`;

const Button = styled.button`
    padding: 8px;
    background-color: ${UI.COLOR_PRIMARY_GRAY};
    color: #ffffff;
    border: none;
    cursor: pointer;
`;

interface ProfileMenuProps {
    onClose: () => void;
}

export default function ProfileMenu({ onClose }: ProfileMenuProps) {
    const ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const loginUser = useSelector((state: RootState) => state.userInfo.loginUser);
    const isAdmin = isAdminUser(loginUser);

    useOnClickOutside(ref, onClose);

    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original;
        };
    }, []);

    const goTo = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <ModalBackdrop>
            <ModalView ref={ref}>
                <Button onClick={() => goTo('/profile')}>프로필 설정</Button>
                <Button onClick={() => goTo('/history')}>히스토리</Button>
                <Button onClick={() => goTo('/bookmarks')}>북마크</Button>
                {isAdmin && (
                    <Button onClick={() => goTo('/admin')}>관리자 대시보드</Button>
                )}
            </ModalView>
        </ModalBackdrop>
    );
}
