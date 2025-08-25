import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import UnifiedDivider from '../../../shared/ui/UnifiedDivider';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import {
    useLikePost,
    useIsPostLiked,
    useUnlikePost,
} from '../../../shared/lib/hooks/usePosts';
import { useRealtimePost } from '../../../shared/lib/hooks/useRealtimePost';
import usePrefetchPostOnVisible from '../../../shared/lib/hooks/usePrefetchPostOnVisible';
import { scrollLocationSave } from '../../../app/model/post/clickInfo';
import { getRootScrollTop, triggerVibration } from '../../../shared/lib/utils/util';
import AlertModal from '../../../shared/ui/AlertModal';
import type { Post } from '../../../shared/types/post';
import type { RootState, AppDispatch } from '../../../app/model/store';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    cursor: pointer;
`;

const Tr = styled.tr`
    display: grid;
    grid-template-columns: 7fr 4fr 2fr 2fr 3fr;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 10fr 3fr 2fr 2fr 3fr;
    }

    padding: 12px 10px;
`;

const Td = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    &:first-child {
        justify-content: start;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Title = styled.div`
    font-size: medium;
    font-weight: bold;
    color: ${(props) => props.theme.containerText};
    opacity: 0.75;
    padding-right: 5px;
`;

const ForumType = styled.div`
    font-size: x-small;
`;

const ForumTypeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
`;

const Username = styled.div`
    font-size: small;
    font-weight: bold;
    opacity: 0.5;
    padding-left: 5px;
`;

const Count = styled.div`
    font-size: small;
    opacity: 0.5;
`;

const Date = styled.div`
    font-size: x-small;
    opacity: 0.5;
`;

const shake = keyframes`
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    75% { transform: translateX(2px); }
`;

const LikeButton = styled.div<{ $animate: boolean }>`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    ${({ $animate }) =>
        $animate &&
        css`
            animation: ${shake} 0.3s;
        `}
`;


interface ForumPostProps {
    post: Post;
}

export default function ForumPost({ post }: ForumPostProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const loginUser = useSelector((state: RootState) => state.userInfo.loginUser);
    const realtimePost = useRealtimePost(post.id, post) as Post | null;
    const likeMutation = useLikePost();
    const unlikeMutation = useUnlikePost();
    const { data: isLiked } = useIsPostLiked(post.id, loginUser && loginUser.uid);
    const [modalMessage, setModalMessage] = React.useState<string>('');
    const [animate, setAnimate] = React.useState(false);
    const postData = realtimePost || post;
    const prefetchRef = usePrefetchPostOnVisible(post.id);

    // 1. post를 클릭했을 때의 post id정보를 전역 데이터(redux store)에 저장 - ForumPost 컴포넌트에서 클릭 이벤트 설정
    // 2. 이전 페이지('/')로 돌아왔을 때 redux store에 저장된 post id 정보가 있다면 해당 post를 focus - 상위 컴포넌트에서 해당되는 id를 가진 ForumPost 컴포넌트를 포커싱
    const handlePostClick = (postDocId: string | undefined) => {
        dispatch(scrollLocationSave(getRootScrollTop()));
        navigate(`/post/${postDocId}`);
    };


    const handleLikeClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (!loginUser) {
            setModalMessage('로그인이 필요합니다.');
            return;
        }
        setAnimate(true);
        triggerVibration();
        if (isLiked) {
            unlikeMutation.mutate({ postId: post.id, uid: loginUser.uid });
        } else {
            likeMutation.mutate({ postId: post.id, uid: loginUser.uid });
        }
    };


    return (
        <>
            <Table
                id={postData.postId}
                onClick={() => handlePostClick(postData.id)}
                ref={prefetchRef}
            >
                <tbody>
                    <Tr>
                        <Td>
                            <Title>{postData.title}</Title>
                            <ForumTypeContainer>
                                <ForumType>{postData.category.name}</ForumType>
                                <LikeButton
                                    onClick={handleLikeClick}
                                    style={{ opacity: isLiked ? 0.5 : 1 }}
                                    $animate={animate}
                                    onAnimationEnd={() => setAnimate(false)}
                                >
                                    {isLiked ? (
                                        <AiTwotoneLike color='blue' />
                                    ) : (
                                        <AiOutlineLike />
                                    )}
                                    <Count>{postData.likesCount ?? 0}</Count>
                                </LikeButton>
                            </ForumTypeContainer>
                        </Td>
                        <Td>
                            <Username>{postData.profile.nickname}</Username>
                        </Td>
                        <Td>
                            <Count>{postData.comments}</Count>
                        </Td>
                        <Td>
                            <Count>{postData.views ?? 0}</Count>
                        </Td>
                        <Td>
                            <Date>{postData.created}</Date>
                        </Td>
                    </Tr>
                </tbody>
            </Table>
            <UnifiedDivider $padding='0px 10px' $border='1px solid gray' $opacity='0.15' />
            {modalMessage && (
                <AlertModal
                    message={modalMessage}
                    onClose={() => setModalMessage('')}
                />
            )}
        </>
    );
}
