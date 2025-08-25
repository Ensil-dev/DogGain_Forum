import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../../shared/lib/hooks/useOnClickOutside';
import UnifiedButton from '../../../shared/ui/UnifiedButton';
import { UI } from '../../../shared/config/constants/common';
import type { Post } from '../../../shared/types/post';
import type { Comment } from '../../../shared/types/comment';

const Backdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${UI.Z_INDEX_MODAL};
`;

const View = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.containerText};
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 350px;
`;

interface SimpleUser {
    nickname: string;
    uid: string;
}

interface UserInfoModalProps {
    user: SimpleUser;
    posts?: Post[];
    comments?: Comment[];
    onClose: () => void;
}

export default function UserInfoModal({ user, posts, comments, onClose }: UserInfoModalProps) {
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, onClose);

    const postCount = posts ? posts.filter((p) => p.profile.uid === user.uid).length : 0;
    const commentCount = comments ? comments.filter((c) => c.profile.uid === user.uid).length : 0;

    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original;
        };
    }, []);

    return (
        <Backdrop>
            <View ref={ref}>
                <h3>사용자 정보</h3>
                <div>닉네임: {user.nickname}</div>
                <div>UID: {user.uid}</div>
                <div>게시글 수: {postCount}</div>
                <div>댓글 수: {commentCount}</div>
                <UnifiedButton
                    text='닫기'
                    $backgroundColor={UI.COLOR_PRIMARY_GRAY}
                    $color='white'
                    $padding='8px'
                    $onClick={onClose}
                />
            </View>
        </Backdrop>
    );
}
